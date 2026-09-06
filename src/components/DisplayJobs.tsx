import { jobs } from "@/lib/experience";
import ExperienceCard from "@/components/ExperienceCard";
export default function DisplayJobs() {
    return <div>
        <h3 className="text-4xl">Experience</h3>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 my-8">
            {Object.entries(jobs).map(([key, job]) => (
                <ExperienceCard
                    key={key}
                    href={`/experience/${key}`}
                    title={job.position}
                    subtitle={job.company}
                    dateLabel={`${job.began} - ${job.ended}`}
                    headline={job.headline}
                    skills={job.skills}
                />
            ))}
        </div>
    </div>
}
