'use client'

import PostPreview from "@/app/Components/Post_Components/Modules/post-entirepost";
import Post from '@/app/interfaces/post';

import React, { useEffect, useState } from 'react';
import { getAllPosts } from "@/app/api/supabase/Supabase_api"; // Supabase에서 데이터를 가져오는 함수
import MoreStoriesModal from "../../Modal/MoreStoriesModal";

export default function MoreStories() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // Supabase에서 포스트 데이터를 가져옴
      const posts = await getAllPosts();
      setPosts(posts); // 가져온 포스트 데이터를 상태로 설정
      setFilteredPosts(posts); // 기본적으로 모든 포스트를 보여줌
    };

    fetchPosts();
  }, []);

  // 태그 클릭 시 필터링된 포스트를 설정하는 함수
  const handleTagClick = (tag: string) => {
    const filtered = posts.filter((post) => post.tags.includes(tag));
    setFilteredPosts(filtered); // 필터링된 포스트 설정
  };

  // 전체 보기 클릭 시 모든 포스트를 다시 보여줌
  const handleShowAllClick = () => {
    setFilteredPosts(posts); // 모든 포스트를 다시 설정
  };

  return (
    <div className="more-stories">
      <div className="flex flex-col gap-12">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">기술 블로그</h1>
          {/* MoreStoriesModal에 필요한 props 전달 */}
          <MoreStoriesModal
            posts={posts}
            onTagClick={handleTagClick}
            onShowAllClick={handleShowAllClick}
          />
        </div>
        {
          filteredPosts.map((post) => (
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
