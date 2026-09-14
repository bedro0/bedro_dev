import { type Post } from "@/lib/blogPosts"

export default function BlogList({ posts }: { posts: Post[] }) {
    return <div className="flex flex-col gap-8">
        {
            posts.map((post, index) => <DisplayPost key={index} post={post} />
            )
        }
    </div>
}

function DisplayPost({ post }: { post: Post }) {
    const { url, frontmatter: { title, description, updated_date } } = post
    return <a href={url}>
        <div className="bg-accent p-8 rounded-2xl md:w-2xl text-balance">
            <h1 className="text-2xl">{title}</h1>
            <p>{updated_date}</p>
            <div className="flex">
                <p className="py-2 mt-4 rounded-lg text-muted-foreground">{description}</p>
            </div>
        </div>
    </a>
}
