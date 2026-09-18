export type BlogTeaserCardProps = {
    href: string;
    title: string;
    dateLabel: string;
    headline: string;
    skills: string[];
};

export default function BlogTeaserCard({ href, title, dateLabel, headline, skills }: BlogTeaserCardProps) {
    return <a className="text-balance group flex flex-col gap-3 bg-accent rounded-2xl p-8 w-full sm:w-sm"
        href={href}
    >
        <p className="text-sm uppercase tracking-wide text-muted-foreground">{dateLabel}</p>
        <h4 className="text-2xl group-hover:text-sidebar-primary">{title}</h4>
        <p className="text-muted-foreground flex-1">{headline}</p>
    </a>
}
