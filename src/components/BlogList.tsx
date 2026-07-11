import type { Post } from "@/lib/blogPosts"

export default function BlogList({ posts }: { posts: Post[] }) {
    return <div>
        {
            posts.map((post, index) => <DisplayPost key={index} post={post} />
            )
        }
    </div>
}

function DisplayPost({ post: { url, frontmatter: { title, description, author, updated_date, tags } } }: { post: Post }) {
    return <a href={url}>
        <div className="bg-green-900 mx-16 my-4 p-8 rounded-2xl">
            <p>{updated_date}</p>
            <h1 className="text-2xl">{title}</h1>
            <div className="flex">
                <p className="bg-green-950 p-2 mt-4 rounded-lg">{description}</p>
            </div>
            <div className="flex mt-4 gap-2 rounded">
                {tags.map((tag, index) => (
                    <div key={index} className="bg-green-950 px-2 rounded">{tag}</div>
                ))}
            </div>
        </div>
    </a>
}