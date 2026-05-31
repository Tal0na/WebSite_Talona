import posts from "./posts-data.json";

export function getAllPosts() {
  return posts;
}

export function getPostBySlug(slug) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Post not found: ${slug}`);
  return post;
}
