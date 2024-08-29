import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

interface CoverImageProps {
    title: string;
    src: string;
    slug?: string;
}

const CoverImage: React.FC<CoverImageProps> = ({
    title,
    src,
    slug
}) => {
    return (
        <div className="sm:mx-0">
            {slug ? (
                <Link href={`/posts/${slug}`} aria-label={title}>
                    <Image
                        src={src}
                        alt={`Cover Image for ${title}`}
                        className={cn("shadow-sm w-full", {
                            "hover:shadow-lg transition-shadow duration-200": slug,
                        })}
                        width={880}
                        height={502}
                    />
                </Link>
            ) : (
                <Image
                    src={src}
                    alt={`Cover Image for ${title}`}
                    className={cn("w-full rounded-3xl", {
                        "hover:shadow-lg transition-shadow duration-200": slug,
                    })}
                    width={880}
                    height={502}
                />
            )}
        </div>
    )
}

export default CoverImage
