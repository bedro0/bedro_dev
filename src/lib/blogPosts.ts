import { projects } from "@/lib/experience";

export type Post = {
    url: string;
    frontmatter: { title: string; description: string; subtitle: string; author: string; updated_date: string };
};

export const blogPosts: Post[] = Object.values(
    import.meta.glob<Post>('@/pages/blog/*.mdx', { eager: true })
).sort((a, b) => b.frontmatter.updated_date.localeCompare(a.frontmatter.updated_date));

/**
 * A blog post that writes up a project reuses that project's `skills` list
 * (matched by slug, e.g. "/blog/gta-radio" -> projects["gta-radio"]) rather
 * than declaring its own, so `experience.ts` stays the single source of
 * truth and a post's tags can never drift from its project card's tags.
 */
export function skillsForPost(post: Post): string[] {
    const slug = post.url.replace(/\/+$/, "").split("/").pop() ?? "";
    return projects[slug]?.skills ?? [];
}
