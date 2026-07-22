import type { Post } from "@/lib/blogPosts"

export default function BlogList({ posts }: { posts: Post[] }) {
    return <div className="flex flex-col gap-8 mx-8 sm:mx-16">
        {
            posts.map((post, index) => <DisplayPost key={index} post={post} />
            )
        }
    </div>
}

function DisplayPost({ post: { url, frontmatter: { title, description, author, updated_date, tags } } }: { post: Post }) {
    return <a href={url}>
        <div className="bg-primary p-8 rounded-2xl">
            <h1 className="text-2xl">{title}</h1>
            <p>{updated_date}</p>
            <div className="flex">
                <p className=" py-2 mt-4 rounded-lg">{description}</p>
            </div>
            <div className="flex flex-wrap mt-4 gap-2 rounded">
                {tags.map((tag, index) => (
                    <div key={index} className="px-2 bg-secondary rounded">{tag}</div>
                ))}
            </div>
        </div>
    </a>
}