// app/posts/[slug]/page.tsx

import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/app/api/supabase/Supabase_api";
import markdownToHtml from "@/libs/markdownToHtml";
import Post from "@/app/Components/Post_Components/Post";
import Link from "next/link";

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();
    return posts.map((post: { slug: string }) => ({ slug: post.slug }));
  } catch (error) {
    console.error("Error fetching posts for static params:", error);
    return [];
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  try {
    const post = await getPostBySlug(params.slug);
    if (!post) return notFound();

    const content = await markdownToHtml(post.content || "");
    return (
      <div>
        <Post post={post} content={content} />
        {/* 댓글 기능 준비 중 */}
        <div className="bg-stone-200/40 rounded-xl py-16 w-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">댓글 기능은 아직 준비 중이에요!</h1>
            <div className="mt-8">
              <Link href="#" passHref>
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
                  그동안 제 포트폴리오를 보실래요?
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(`Error fetching post by slug: ${params.slug}`, error);
    return notFound();
  }
}
