interface PageButtonProps {
    type?: 'button'
    children: React.ReactNode;
    onClick?: () => void;
}

const PageButton: React.FC<PageButtonProps> = ({
    type,
    children,
    onClick
}) => {
    return (
        <button
            className="bg-stone-200/60 hover:bg-stone-200/80 px-4 py-2 rounded-md"
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default PageButton
