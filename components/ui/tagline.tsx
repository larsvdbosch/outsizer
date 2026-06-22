import Link from "next/link";

export function Tagline({ children, href }: { children: React.ReactNode; href: string }) {
    return (
        <Link href={href} className="inline-flex px-3 py-1.5 rounded-sm items-center bg-[#F6EBD9] hover:bg-[#53F399] font-mono text-sm font-medium text-[#211F1E] leading-[150%] transition-[background-color] ease-in-out duration-150 uppercase">
            {children}
        </Link>
    );
}