import { projects } from "@/lib/experience";
import ExperienceCard from "@/components/ExperienceCard";
export default function DisplayProjects() {
    return <div>
        <a href="/projects"><h3 className="text-4xl hover:text-sidebar-primary w-fit">Projects</h3></a>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 my-8">
            {Object.entries(projects).map(([key, project]) => (
                <ExperienceCard
                    key={key}
                    href={`/blog/${key}`}
                    title={project.title}
                    dateLabel={project.created}
                    headline={project.headline}
                    skills={project.skills}
                />
            ))}
        </div>
    </div>
}
