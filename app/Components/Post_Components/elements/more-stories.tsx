'use client';

import React, { useState } from 'react';
import Post from "@/app/interfaces/post";
import PostPreview from "@/app/Components/Post_Components/Modules/post-entirepost";
import MoreStoriesModal from "../../Modal/MoreStoriesModal";

interface MoreStoriesClientProps {
  posts: Post[];
}

const MoreStoriesClient: React.FC<MoreStoriesClientProps> = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  const handleTagClick = (tag: string) => {
    const filtered = posts.filter((post) => post.tags.includes(tag));
    setFilteredPosts(filtered);
  };

  const handleShowAllClick = () => {
    setFilteredPosts(posts); // 모든 포스트를 다시 표시
  };

  return (
    <section>
      <div className="flex flex-col gap-12">
        <div className="flex items-center mb-[36px] justify-between">
          <h1 className="font-bold text-3xl">
            기술 블로그
          </h1>
          <div>
            <MoreStoriesModal posts={posts} onTagClick={handleTagClick} onShowAllClick={handleShowAllClick} />
          </div>
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
              excerpt={post.excerpt}
              introduction={post.introduction}
            />
          ))
        }
      </div>
    </section>
  );
}

export default MoreStoriesClient;
