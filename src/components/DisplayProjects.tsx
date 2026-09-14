import { projects } from "@/lib/experience";
import ExperienceCard from "@/components/ExperienceCard";
import DisplaySection from "@/components/DisplaySection";
export default function DisplayProjects() {
    return <DisplaySection title="Projects" href="/projects">
        {Object.entries(projects).map(([key, project]) => (
            <ExperienceCard
                key={key}
                href={`/projects/${key}`}
                title={project.title}
                dateLabel={project.created}
                headline={project.headline}
                skills={project.skills}
            />
        ))}
    </DisplaySection>
}
