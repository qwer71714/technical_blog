import { createClient } from '@/utils/supabase/server';
import matter from "gray-matter";
import Post from "@/app/interfaces/post";

const supabase = createClient();
const BUCKET_NAME = 'Technical_Blog';

async function fetchFromStorage(path: string) {
  const { data, error } = await supabase.storage.from(BUCKET_NAME).download(path);
  if (error) throw new Error(`Storage fetch error: ${error.message}`);
  return data;
}

async function listStorageFiles() {
  const { data, error } = await supabase.storage.from(BUCKET_NAME).list();
  if (error) throw new Error(`Storage list error: ${error.message}`);
  return data;
}

export async function getPostSlugs(): Promise<string[]> {
  try {
    const files = await listStorageFiles();
    return files.map(file => file.name.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error fetching post slugs:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fileData = await fetchFromStorage(`${slug}.md`);
    const text = await fileData.text();
    const { data, content } = matter(text);
    const tags = data.tags ? data.tags.split(',').map((tag: string) => tag.trim()) : [];

    return { ...data, slug, content, tags } as Post;
  } catch (error) {
    console.error(`Error fetching post by slug: ${slug}`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map(getPostBySlug));

  return posts
    .filter((post): post is Post => post !== null)
    .sort((post1, post2) => new Date(post2.date).getTime() - new Date(post1.date).getTime());
}
