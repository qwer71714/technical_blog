import Link from 'next/link';
import React from 'react'

interface NavbarButtonProps {
    type?: "button"
    label: string,
    href: string,
    onClick?: () => void;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({
    type,
    label,
    href,
    onClick
}) => {
    return (
        <Link href={href}>
            <button
                type={type}
                onClick={onClick}
                className='font-medium text-stone-600/80 hover:text-black transition'
            >
                {label}
            </button>
        </Link>
    )
}

export default NavbarButton
