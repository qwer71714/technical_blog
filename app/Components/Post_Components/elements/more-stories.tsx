'use client'

import PostPreview from "@/app/Components/Post_Components/Modules/post-entirepost";
import Post from '@/app/interfaces/post';

import React, { useEffect, useState } from 'react';
import { getAllPosts } from "@/app/api/supabase/Supabase_api"; // Supabase에서 데이터를 가져오는 함수

export default function MoreStories() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // Supabase에서 포스트 데이터를 가져옴
      const posts = await getAllPosts();
      setPosts(posts); // 가져온 포스트 데이터를 상태로 설정
    };

    fetchPosts();
  }, []);

  return (
    <div className="more-stories">
      <div className="flex flex-col gap-12">
        {
          posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              introduction={post.introduction}
            />
          ))}
      </div>
    </div>
  );
};
