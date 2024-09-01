import Link from "next/link";

interface FooterButtonProps {
    type?: 'button'
    href: string;
    label: string;
    onClick?: () => void;
}

const FooterButton: React.FC<FooterButtonProps> = ({
    type,
    href,
    label,
    onClick
}) => {
    return (
        <Link href={href}>
            <button
                className="text-gray-500 hover:text-gray-700 font-medium"
                type={type}
                onClick={onClick}
            >
                <p>{label}</p>
            </button>
        </Link>
    )
}

export default FooterButton
