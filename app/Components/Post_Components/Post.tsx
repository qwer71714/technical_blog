'use client';

import { toast } from "react-toastify";

import React from "react";
import PostBody from "@/app/Components/Post_Components/Modules/post-body";
import PostHeader from "@/app/Components/Post_Components/Modules/post-header";
import SharedLinkButton from "@/app/Components/Post_Components/elements/SharedLinkButton";
import Post from "@/app/interfaces/post";

interface PostProps {
    post: Post;
    content: string;
}

const PostComponent: React.FC<PostProps> = ({ post, content }) => {
    const copyURL = () => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(window.location.href)
                .then(() => toast.success("복사 완료"))
                .catch((err) => console.error('URL 복사 실패:', err));
        }
    };

    return (
        <main>
            <div className="mx-auto px-5 container">
                <article className="mb-32">
                    <PostHeader
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        author={post.author}
                        tags={post.tags}
                    />
                    <div className="mt-24">
                        <PostBody content={content} />
                    </div>
                    <div className="mt-32">
                        <SharedLinkButton onClick={copyURL} />
                    </div>
                </article>
            </div>
        </main>
    );
};

export default PostComponent;
