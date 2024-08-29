import DateFormatter from "@/app/Components/Post_Components/elements/date-formatter";
import PostTitle from "@/app/Components/Post_Components/Modules/post-title";
import CoverImage from "@/app/Components/Post_Components/elements/cover-image"
import TagsBox from "@/app/Components/Post_Components/elements/Tags-Box"
import { type Author } from "@/app/interfaces/author";

interface PostHeaderProps {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  tags: string;

};

const PostHeader: React.FC<PostHeaderProps> = ({
  title,
  coverImage,
  date,
  author,
  tags
}) => {
  return (
    <div>
      <div className="mb-10">
        <CoverImage title={title} src={coverImage} />
      </div>
      <PostTitle>{title}</PostTitle>
      <div className="mb-10">
        <TagsBox tags={tags} />
      </div>
      <div className="font-semibold text-lg">
        {author.name}
      </div>
      <div className="mb-6 text-lg">
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
}

export default PostHeader
