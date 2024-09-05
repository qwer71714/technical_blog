import { getAllPosts } from "@/app/api/supabase/Supabase_api";

export async function generateStaticParams() {
  const posts = getAllPosts();

  return (await posts).map((post) => ({
    slug: post.slug,
  }));
}