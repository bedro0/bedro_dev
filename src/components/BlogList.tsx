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
        <div className="bg-accent group p-8 rounded-2xl md:w-2xl text-balance group flex flex-col gap-4">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">{updated_date}</p>
            <h4 className="text-2xl group-hover:text-sidebar-primary">{title}</h4>
            <p className="text-muted-foreground">{description}</p>
        </div>
    </a>
}
