'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Header() {
    const pathname = usePathname()

    return (
        <nav className="flex justify-center items-center bg-purple-500 h-20 text-white gap-10">
            <Link className={`link ${pathname === '/' ? 'active underline' : ''}`} href="/">
                Home
            </Link>

            <Link
                className={`link ${pathname === '/about' ? 'active underline' : ''}`}
                href="/about"
            >
                About
            </Link>
            <Link
                className={`link ${pathname === '/profile' ? 'active underline' : ''}`}
                href="/profile"
            >
                Profile
            </Link>
            <Link
                className={`link ${pathname === '/contact' ? 'active underline' : ''}`}
                href="/contact"
            >
                ContatcUS
            </Link>
        </nav>
    )
}

export default Header