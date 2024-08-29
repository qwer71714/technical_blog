import MoreStories from "@/app/Components/Post_Components/elements/more-stories";
import { getAllPosts } from "@/app/libs/api";

export default function Home() {
  const allPosts = getAllPosts();
  const morePosts = allPosts.slice();

  return (
    <section>
      <MoreStories posts={morePosts} />
    </section>
  );
}
