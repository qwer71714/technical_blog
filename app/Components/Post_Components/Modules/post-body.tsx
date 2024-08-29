'use client'

import { useEffect } from "react";

import markdownStyles from "./markdown-styles.module.css";
import hljs from 'highlight.js'

import "highlight.js/styles/github-dark.css"

interface PostBodyProps {
  content: string;
};

const PostBody: React.FC<PostBodyProps> = ({
  content
}) => {
  useEffect(() => {
    hljs.highlightAll();
  }, [content]);
  return (
    <div>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export default PostBody