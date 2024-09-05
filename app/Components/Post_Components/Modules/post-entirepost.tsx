import Link from 'next/link';
import Image from 'next/image';
import DateFormatter from "@/app/Components/Post_Components/elements/date-formatter";
import { type Author } from "@/app/interfaces/author";

interface PostPreviewProps {
  title: string;
  coverImage: string;
  date: string;
  excerpt?: string;
  author: Author;
  slug: string;
  introduction: string;
}

const PostPreview: React.FC<PostPreviewProps> = ({
  title,
  coverImage,
  date,
  slug,
  introduction,
}) => {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="flex gap-8 w-full">
        <Image
          className="rounded-xl border border-stone-200 w-[273px] h-[158px]"
          src={coverImage}
          alt={title}
          width={273}
          height={158}
        />
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="mb-3 font-bold text-2xl">{title}</h1>
            <p className="font-medium text-base text-gray-600">{introduction}</p>
          </div>
          <div className="text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
