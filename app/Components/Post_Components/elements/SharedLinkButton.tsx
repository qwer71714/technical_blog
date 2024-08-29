import { IoIosLink } from 'react-icons/io'

interface SharedLinkButtonProps {
    type?: "button"
    onClick?: () => void;
}

const SharedLinkButton: React.FC<SharedLinkButtonProps> = ({
    type,
    onClick
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="hover:bg-stone-200/60 px-4 py-2 rounded-md"
        >
            <div className="flex items-center gap-2 font-semibold text-gray-700">
                <IoIosLink />
                <p>공유</p>
            </div>
        </button>
    )
}

export default SharedLinkButton
