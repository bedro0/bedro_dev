import { blogPosts, skillsForPost } from "@/lib/blogPosts";
import BlogTeaserCard from "@/components/BlogTeaserCard";
import DisplaySection from "@/components/DisplaySection";

export default function DisplayBlog() {
    const latestPosts = blogPosts.slice(0, 3);
    return <DisplaySection title="Blog" href="/blog">
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
    </DisplaySection>
}
