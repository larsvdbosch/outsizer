'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

type NavLinkProps = {
    href: string
    children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
    const pathname = usePathname()

    const isActive =
        pathname === href || pathname.startsWith(href + '/')

    return (
        <Link
            href={href}
            className={clsx(
                'px-4 py-2 text-sm flex items-center w-fit rounded-full font-medium transition-[background-color] ease-in-out duration-150 whitespace-nowrap',
                isActive
                    ? 'bg-foreground text-background'
                    : 'bg-transparent text-foreground hover:bg-foreground hover:text-background',
            )}
        >
            {children}
        </Link>
    )
}