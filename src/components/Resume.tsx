import type { Icon } from "@phosphor-icons/react";
import { MapPinIcon } from "@phosphor-icons/react";
import { jobs, projects } from "@/lib/experience";
import { stack } from "@/lib/stack";
import { socials } from "@/lib/socials";

// This is a software-engineering resume, so help-desk/IT-support roles
// (Leveldesk, BATE Transportation) are left off even though they're on the
// site's timeline elsewhere.
const RESUME_JOB_KEYS = ["copalion"];

export default function Resume() {
    return (
        <div className="flex flex-col gap-12">
            <ResumeHeader />
            <Skills />
            <Experience />
            <Projects />
        </div>
    );
}

function ResumeHeader() {
    const contacts = socials.filter(
        ({ platform }) => platform === "Email" || platform === "GitHub" || platform === "LinkedIn",
    );

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-4xl sm:text-5xl leading-tight">Badri Isiani</h1>
            <p className="text-xl text-muted-foreground">
                Full-stack developer focused on backend infrastructure and system design.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm mt-2">
                <ContactItem Icon={MapPinIcon} label="New York, NY" />
                {contacts.map(({ platform, url, Logo }) => (
                    <ContactItem key={platform} Icon={Logo} label={formatContactLabel(url)} href={url} />
                ))}
            </div>
        </div>
    );
}

function formatContactLabel(url: string): string {
    if (url.startsWith("mailto:")) return url.slice("mailto:".length);
    return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function ContactItem({ Icon, label, href }: { Icon: Icon; label: string; href?: string }) {
    const content = (
        <span className="flex items-center gap-1.5">
            <Icon size={16} />
            <span>{label}</span>
        </span>
    );
    return href ? (
        <a className="hover:text-sidebar-primary" href={href}>
            {content}
        </a>
    ) : (
        <span className="text-muted-foreground">{content}</span>
    );
}

function Skills() {
    return (
        <section className="flex flex-col gap-6">
            <h3 className="text-4xl">Skills</h3>
            <div className="flex flex-col gap-3">
                {stack.map(({ label, items }) => (
                    <div key={label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                        <p className="text-sm uppercase tracking-wide text-muted-foreground shrink-0 sm:w-40">
                            {label}
                        </p>
                        <p>{items.map((item) => item.name).join(", ")}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Experience() {
    return (
        <section className="flex flex-col gap-8">
            <h3 className="text-4xl">Experience</h3>
            {RESUME_JOB_KEYS.map((key) => {
                const job = jobs[key];
                return (
                    <div key={key} className="flex flex-col gap-2">
                        <EntryHeading
                            title={job.position}
                            subtitle={`${job.company} · ${job.type}`}
                            dateLabel={`${job.began} - ${job.ended}`}
                        />
                        <EntryBody headline={job.headline} accomplishments={job.accomplishments} skills={job.skills} />
                    </div>
                );
            })}
        </section>
    );
}

function Projects() {
    return (
        <section className="flex flex-col gap-8">
            <h3 className="text-4xl">Projects</h3>
            {Object.entries(projects).map(([key, project]) => (
                <div key={key} className="flex flex-col gap-2">
                    <EntryHeading title={project.title} dateLabel={project.created} />
                    <EntryBody
                        headline={project.headline}
                        accomplishments={project.accomplishments}
                        skills={project.skills}
                    />
                </div>
            ))}
        </section>
    );
}

function Education() {
    return (
        <section className="flex flex-col gap-6">
            <h3 className="text-4xl">Education</h3>
        </section>
    );
}

function EntryHeading({ title, subtitle, dateLabel }: { title: string; subtitle?: string; dateLabel: string }) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <div>
                <h4 className="text-2xl">{title}</h4>
                {subtitle && <h5 className="text-lg text-muted-foreground">{subtitle}</h5>}
            </div>
            <p className="text-sm text-muted-foreground whitespace-nowrap">{dateLabel}</p>
        </div>
    );
}

function EntryBody({
    headline,
    accomplishments,
    skills,
}: {
    headline: string;
    accomplishments: string[];
    skills: string[];
}) {
    return (
        <>
            <p>{headline}</p>
            <ul className="list-disc list-inside flex flex-col gap-1 text-muted-foreground">
                {accomplishments.map((accomplishment) => (
                    <li key={accomplishment}>{accomplishment}</li>
                ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-1">
                {skills.map((skill) => (
                    <p key={skill} className="border border-border rounded px-2 bg-accent text-sm">
                        {skill}
                    </p>
                ))}
            </div>
        </>
    );
}
