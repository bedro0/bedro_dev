import type { Post } from "@/lib/blogPosts"

export default function BlogList({ posts }: { posts: Post[] }) {
    return <div className="flex flex-col gap-8">
        {
            posts.map((post, index) => <DisplayPost key={index} post={post} />
            )
        }
    </div>
}

function DisplayPost({ post: { url, frontmatter: { title, description, author, updated_date, skills } } }: { post: Post }) {
    return <a href={url}>
        <div className="bg-accent p-8 rounded-2xl">
            <h1 className="text-2xl">{title}</h1>
            <p>{updated_date}</p>
            <div className="flex">
                <p className=" py-2 mt-4 rounded-lg">{description}</p>
            </div>
            <div className="flex flex-wrap mt-4 gap-2 rounded">
                {skills.map((tag, index) => (
                    <div key={index} className="px-2 bg-background/80 rounded">{tag}</div>
                ))}
            </div>
        </div>
    </a>
}