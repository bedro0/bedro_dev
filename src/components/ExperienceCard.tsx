import { Fragment } from "react";

export type ExperienceCardProps = {
    href: string;
    title: string;
    subtitle?: string;
    dateLabel: string[];
    headline: string;
    skills: string[];
};

export default function ExperienceCard({ href, title, subtitle, dateLabel, headline, skills }: ExperienceCardProps) {
    return <div className="border border-border rounded-lg hover:border-primary px-8 w-full sm:w-lg">
        <a className="flex flex-col gap-1"
            href={href}
        >
            <div className="border-b border-border pt-8 pb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                    <h4 className="text-2xl ">{title}</h4>
                    {subtitle && <h4 className="text-md">{subtitle}</h4>}
                </div>
                <div className="flex sm:flex-col items-end text-md sm:text-base">
                    {dateLabel.map((date, i) => (
                        <Fragment key={date}>
                            {i > 0 && <h5 className="sm:hidden">{" - "}</h5>}
                            <h5 className="whitespace-nowrap">{date}</h5>
                        </Fragment>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-4 pt-4 pb-8" >
                <p className="">{headline}</p>
                <div className="flex flex-wrap gap-2">
                    {skills.slice(0, 3).map((skill) => (
                        <p key={skill} className="border border-border rounded px-2 bg-accent">{skill}</p>
                    ))}
                </div>
            </div>
        </a>
    </div>
}
