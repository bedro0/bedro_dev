import { blogPosts, skillsForPost } from "@/lib/blogPosts";
import BlogTeaserCard from "@/components/BlogTeaserCard";

export default function DisplayBlog() {
    const latestPosts = blogPosts.slice(0, 2);
    return <div>
        <a href="/blog"><h3 className="text-4xl hover:text-sidebar-primary w-fit">Blog</h3></a>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 my-8">
            {latestPosts.map((post) => (
                <BlogTeaserCard
                    key={post.url}
                    href={post.url}
                    title={post.frontmatter.title}
                    dateLabel={post.frontmatter.updated_date}
                    headline={post.frontmatter.subtitle}
                    skills={skillsForPost(post)}
                />
            ))}
        </div>
    </div>
}
