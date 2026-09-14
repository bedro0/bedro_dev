import { jobs } from "@/lib/experience";
import ExperienceCard from "@/components/ExperienceCard";
import DisplaySection from "@/components/DisplaySection";
export default function DisplayJobs() {
    return <DisplaySection title="Experience" href="/experience">
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
    </DisplaySection>
}
