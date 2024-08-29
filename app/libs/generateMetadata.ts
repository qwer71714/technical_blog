import { Metadata } from "next";
import { Params } from "../interfaces/Params";
import { getPostBySlug } from "./api";
import { notFound } from "next/navigation";
import { CMS_NAME } from "./constants";

export function generateMetadata({ params }: Params): Metadata {
    const post = getPostBySlug(params.slug);
  
    if (!post) {
      return notFound();
    }
  
    const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;
  
    return {
      title,
      openGraph: {
        title
      },
    };
  }