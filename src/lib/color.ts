// OKLab/OKLCH conversion, per Björn Ottosson's reference formulas:
// https://bottosson.github.io/posts/oklab/

function srgbToLinear(c: number): number {
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function linearToSrgb(c: number): number {
    return c <= 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
}

function hexToLinearRgb(hex: string): [number, number, number] {
    const normalized = hex.replace("#", "");
    const r = parseInt(normalized.substring(0, 2), 16) / 255;
    const g = parseInt(normalized.substring(2, 4), 16) / 255;
    const b = parseInt(normalized.substring(4, 6), 16) / 255;
    return [srgbToLinear(r), srgbToLinear(g), srgbToLinear(b)];
}

function linearRgbToOklab(r: number, g: number, b: number): [number, number, number] {
    const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
    const m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
    const s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;

    const l_ = Math.cbrt(l);
    const m_ = Math.cbrt(m);
    const s_ = Math.cbrt(s);

    return [
        0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_,
        1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_,
        0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_,
    ];
}

function oklabToLinearRgb(L: number, a: number, b: number): [number, number, number] {
    const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
    const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
    const s_ = L - 0.0894841775 * a - 1.2914855480 * b;

    const l = l_ * l_ * l_;
    const m = m_ * m_ * m_;
    const s = s_ * s_ * s_;

    return [
        +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
        -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
        -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s,
    ];
}

const GAMUT_EPSILON = 1e-5;

function isInSrgbGamut(L: number, a: number, b: number): boolean {
    const [r, g, bl] = oklabToLinearRgb(L, a, b);
    return (
        r >= -GAMUT_EPSILON &&
        r <= 1 + GAMUT_EPSILON &&
        g >= -GAMUT_EPSILON &&
        g <= 1 + GAMUT_EPSILON &&
        bl >= -GAMUT_EPSILON &&
        bl <= 1 + GAMUT_EPSILON
    );
}

function channelToHex(linear: number): string {
    const clamped = Math.max(0, Math.min(1, linear));
    return Math.round(linearToSrgb(clamped) * 255)
        .toString(16)
        .padStart(2, "0");
}

/**
 * Returns a hex color with the same hue and chroma as the input but a fixed
 * OKLab lightness (0-100, mirroring OKLCH's 0-1 L scale). OKLab is
 * perceptually uniform, so unlike HSL lightness this actually equalizes how
 * bright colors look to the eye — a yellow and a navy at the same value
 * read as equally light, not just equal on paper. That makes it useful for
 * brand colors that are near-black or near-white, which read fine on their
 * own but become unreadable against one color scheme or the other.
 *
 * When the target lightness pushes a hue outside the sRGB gamut, chroma is
 * reduced (via binary search) just enough to bring it back in, rather than
 * clipping each channel independently and skewing the hue.
 */
export function withLightness(hex: string, lightnessPercent: number): string {
    const [r, g, b] = hexToLinearRgb(hex);
    const [, a, bLab] = linearRgbToOklab(r, g, b);
    const chroma = Math.hypot(a, bLab);
    const hue = Math.atan2(bLab, a);

    const targetL = lightnessPercent / 100;

    let lo = 0;
    let hi = chroma;
    for (let i = 0; i < 24; i++) {
        const mid = (lo + hi) / 2;
        const na = Math.cos(hue) * mid;
        const nb = Math.sin(hue) * mid;
        if (isInSrgbGamut(targetL, na, nb)) {
            lo = mid;
        } else {
            hi = mid;
        }
    }

    const [nr, ng, nb] = oklabToLinearRgb(targetL, Math.cos(hue) * lo, Math.sin(hue) * lo);
    return `#${channelToHex(nr)}${channelToHex(ng)}${channelToHex(nb)}`;
}

/**
 * CSS custom properties for a brand-color hover state, normalized for both
 * color schemes: a darker tone for light backgrounds, a lighter one for dark
 * backgrounds (see `withLightness`). Returns undefined when no brand color is
 * given, so callers can fall back to a theme-aware token instead.
 */
export function brandHoverVars(hex?: string): Record<string, string> | undefined {
    if (!hex) return undefined;
    return {
        "--brand-hover-light": withLightness(hex, 60),
        "--brand-hover-dark": withLightness(hex, 80),
    };
}
