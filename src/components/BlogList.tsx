import type { Post } from "@/lib/blogPosts"

export default function BlogList({ posts }: { posts: Post[] }) {
    return <div>
        {
            posts.map((post, index) => <DisplayPost key={index} post={post} />
            )
        }
    </div>
}

function DisplayPost({ post: { url, frontmatter: { title, description, author, updated_date } } }: { post: Post }) {
    return <a href={url}>
        <div className="bg-green-900 mx-16 my-4 p-8 rounded-2xl">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl">{title}</h1>
                <time>{updated_date}</time>
            </div>
            <p>{description}</p>
        </div>
    </a>
}