export type Post = {
    url: string;
    frontmatter: { title: string; description: string; author: string; updated_date: string, tags: string[] };
};
export const blogPosts: Post[] = Object.values(
    import.meta.glob('@/pages/blog/*.mdx', { eager: true })
);