import type { Job } from "@/lib/experience";
import { jobs } from "@/lib/experience";
export default function DisplayJobs() {
    return <div>
        <h3 className="text-4xl">Experience</h3>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 my-8">
            {Object.entries(jobs).map(([key, job]) => (
                <DisplayJob key={key} k={key} job={job}></DisplayJob>
            ))}
        </div>
    </div>
}
function DisplayJob({ k, job: { position, company, headline, skills, began, ended } }: { k: string, job: Job }) {
    return <div className="border border-border rounded-lg hover:border-primary px-8 w-full sm:w-lg">
        <a className="flex flex-col gap-1"
            href={`/experience/${k}`}
        >
            <div className="border-b border-border pt-8 pb-4 flex justify-between items-center">
                <div>
                    <h4 className="text-2xl ">{position}</h4>
                    <h4 className="text-md">{company}</h4>
                </div>
                <div className="flex flex-col items-end">
                    <h5 className="whitespace-nowrap" >{began}</h5>
                    <h5 className="whitespace-nowrap" >{ended}</h5>
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