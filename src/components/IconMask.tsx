export type IconMaskProps = {
    src: string
    alt: string
    className?: string
}

export default function IconMask({
    src,
    alt,
    className = "",
}: IconMaskProps) {
    return (
        <span
            className={`icon-mask inline-block ${className}`}
            style={{ maskImage: `url(${src})`, WebkitMaskImage: `url(${src})` }}
            role="img"
            aria-label={alt}
        />
    )
}
