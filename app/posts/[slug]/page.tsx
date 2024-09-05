// app/posts/[slug]/page.tsx

import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/app/api/supabase/Supabase_api";
import markdownToHtml from "@/libs/markdownToHtml";
import Post from "@/app/Components/Post_Components/Post";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: { slug: string }) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  const content = await markdownToHtml(post.content || "");
  return (
    <div>
      <Post post={post} content={content} />
      {/* 댓글 기능 구현 못함 */}
      <div className="bg-stone-200/40 rounded-xl py-16 w-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">댓글 기능 구현하지 못했어요!</h1>
          <div className="mt-8">
            <button
              className="
                bg-blue-600
                text-white
                hover:bg-blue-700/90
                hover:text-stone-100
                 p-4 
                 px-8 
                 rounded-xl
                 ">
              그동안에 잠깐.. 제 포트폴리오 보실래요??
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
