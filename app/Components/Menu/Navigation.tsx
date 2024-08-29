import { NavigationMenu } from "@/app/Hook/MenuRouter"
import { FaSearch } from 'react-icons/fa'

import Link from "next/link"
import NavbarButton from '../Button/NavbarButton'

export default function Navigation() {
    const NavigationRoute = NavigationMenu()
    return (
        <div className='border-[CECECE] bg-white border-b'>
            <div className='mx-auto py-2 w-5/6'>
                <div className='flex items-center gap-12'>
                    <Link href={"/"} >
                        <h1 className='font-bold text-[28px]'>Logo</h1>
                    </Link>
                    <nav className='flex gap-6'>
                        {NavigationRoute.map((item) => (
                            <li key={item.label}>
                                <NavbarButton
                                    label={item.label}
                                    href={item.href}
                                />
                            </li>
                        ))}
                    </nav>
                    <div className="ml-auto">
                        <FaSearch />
                    </div>
                </div>
            </div>
        </div>
    )
}
