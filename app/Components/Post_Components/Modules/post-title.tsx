import { ReactNode } from "react";

interface PostTitleProps {
  children?: ReactNode;
};

const PostTitle: React.FC<PostTitleProps> = ({
  children
}) => {
  return (
    <h1 className="mb-5 font-bold text-5xl leading-tight tracking-tighter">
      {children}
    </h1>
  );
}

export default PostTitle
