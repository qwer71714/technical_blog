import { getAllPosts } from "./api";

export async function generateStaticParams() {
    const posts = getAllPosts();
  
    return posts.map((post) => ({
      slug: post.slug,
    }));
  }