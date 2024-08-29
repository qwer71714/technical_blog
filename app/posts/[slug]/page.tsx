// app/posts/[slug]/page.tsx

import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/app/libs/api";
import markdownToHtml from "@/app/libs/markdownToHtml";
import Post from "@/app/Components/Post_Components/Post";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const content = await markdownToHtml(post.content || "");
  return (
    <div>
      <Post post={post} content={content} />
    </div>
  );
}
