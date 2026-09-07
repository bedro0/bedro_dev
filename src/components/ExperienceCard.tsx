import { Fragment } from "react";

export type ExperienceCardProps = {
    href: string;
    title: string;
    subtitle?: string;
    dateLabel: string;
    headline: string;
    skills: string[];
};

export default function ExperienceCard({ href, title, subtitle, dateLabel, headline, skills }: ExperienceCardProps) {
    return <a className="flex flex-col gap-1 border border-border rounded-lg hover:border-primary px-8 w-full sm:w-sm"
        href={href}
    >
        <div className="border-b border-border pt-8 pb-4 flex flex-col">
            <div>
                <h4 className="text-2xl ">{title}</h4>
                {subtitle && <h4 className="text-md">{subtitle}</h4>}
            </div>
            <h5 className="whitespace-nowrap text-sm">{dateLabel}</h5>
        </div>
        <div className="flex flex-col gap-4 pt-4 pb-8 justify-end" >
            <p className="">{headline}</p>
            <div className="flex flex-wrap gap-2">
                {skills.slice(0, 3).map((skill) => (
                    <p key={skill} className="border border-border rounded px-2 bg-accent">{skill}</p>
                ))}
            </div>
        </div>
    </a>
}
