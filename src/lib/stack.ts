import {
    CodeIcon,
    StackIcon,
    DeviceMobileIcon,
    DatabaseIcon,
    PaintBrushIcon,
    HardDrivesIcon,
} from "@phosphor-icons/react";
import {
    SiJavascript,
    SiJavascriptHex,
    SiTypescript,
    SiTypescriptHex,
    SiReact,
    SiReactHex,
    SiNextdotjs,
    SiNextdotjsHex,
    SiAstro,
    SiAstroHex,
    SiSvelte,
    SiSvelteHex,
    SiTanstack,
    SiTanstackHex,
    SiExpo,
    SiExpoHex,
    SiNodedotjs,
    SiNodedotjsHex,
    SiPostgresql,
    SiPostgresqlHex,
    SiPrisma,
    SiPrismaHex,
    SiSqlite,
    SiSqliteHex,
    SiTailwindcss,
    SiTailwindcssHex,
    SiCss,
    SiCssHex,
    SiSass,
    SiSassHex,
    SiDocker,
    SiDockerHex,
    SiTruenas,
    SiTruenasHex,
} from "@icons-pack/react-simple-icons";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import type { ComponentType, SVGProps } from "react";

// @icons-pack/react-simple-icons doesn't export its IconType publicly, so
// this mirrors the props each Si* component actually accepts.
type SimpleIcon = ComponentType<
    SVGProps<SVGSVGElement> & { title?: string; color?: string; size?: string | number }
>;

export type StackItem = {
    name: string;
    Icon: SimpleIcon;
    hex: string;
};

export type StackCategory = {
    label: string;
    Icon: PhosphorIcon;
    items: StackItem[];
};

export const stack: StackCategory[] = [
    {
        label: "Languages",
        Icon: CodeIcon,
        items: [
            { name: "JavaScript", Icon: SiJavascript, hex: SiJavascriptHex },
            { name: "TypeScript", Icon: SiTypescript, hex: SiTypescriptHex },
        ],
    },
    {
        label: "Frameworks",
        Icon: StackIcon,
        items: [
            { name: "React", Icon: SiReact, hex: SiReactHex },
            { name: "Next.js", Icon: SiNextdotjs, hex: SiNextdotjsHex },
            { name: "Astro", Icon: SiAstro, hex: SiAstroHex },
            { name: "Svelte / SvelteKit", Icon: SiSvelte, hex: SiSvelteHex },
            { name: "TanStack Start", Icon: SiTanstack, hex: SiTanstackHex },
            { name: "Node.js", Icon: SiNodedotjs, hex: SiNodedotjsHex },
        ],
    },
    {
        label: "Mobile",
        Icon: DeviceMobileIcon,
        items: [
            { name: "React Native", Icon: SiReact, hex: SiReactHex },
            { name: "Expo", Icon: SiExpo, hex: SiExpoHex },
        ],
    },
    {
        label: "Data",
        Icon: DatabaseIcon,
        items: [
            { name: "PostgreSQL", Icon: SiPostgresql, hex: SiPostgresqlHex },
            { name: "Prisma", Icon: SiPrisma, hex: SiPrismaHex },
            { name: "SQLite", Icon: SiSqlite, hex: SiSqliteHex },
        ],
    },
    {
        label: "Styling",
        Icon: PaintBrushIcon,
        items: [
            { name: "Tailwind CSS", Icon: SiTailwindcss, hex: SiTailwindcssHex },
            { name: "CSS", Icon: SiCss, hex: SiCssHex },
            { name: "SASS", Icon: SiSass, hex: SiSassHex },
        ],
    },
    {
        label: "Infrastructure",
        Icon: HardDrivesIcon,
        items: [
            { name: "Docker", Icon: SiDocker, hex: SiDockerHex },
            { name: "TrueNAS Scale", Icon: SiTruenas, hex: SiTruenasHex },
        ],
    },
];
