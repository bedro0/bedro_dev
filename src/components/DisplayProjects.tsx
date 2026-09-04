import type { Project } from "@/lib/experience";
import { projects } from "@/lib/experience";
export default function DisplayProjects() {
    return <div>
        <a href="/projects"><h3 className="text-4xl hover:text-sidebar-primary w-fit">Projects</h3></a>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 my-8">
            {Object.entries(projects).map(([key, project]) => (
                <DisplayProject key={key} k={key} project={project}></DisplayProject>
            ))}
        </div>
    </div>
}
function DisplayProject({ k, project: { title, headline, created, skills } }: { k: string, project: Project }) {
    return <div className="border border-border rounded-lg hover:border-primary px-8 w-full sm:w-lg">
        <a className="flex flex-col gap-1"
            href={`/blog/${k}`}
        >
            <div className="border-b border-border pt-8 pb-4 flex justify-between items-center">
                <div>
                    <h4 className="text-2xl ">{title}</h4>
                </div>
                <div className="flex flex-col items-end">
                    <h5 className="whitespace-nowrap">{created}</h5>
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