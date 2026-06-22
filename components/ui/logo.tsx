import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export function Logo({ className }: { className?: string }) {
    return (
        <Link className={clsx("font-semibold text-2xl tracking-tighter", className)} href="/">
            <Image
                src="/logo.svg"
                alt="logo"
                width={112}
                height={18}
                priority
                className="active:scale-95 ease-in-out duration-150"
            />
        </Link>
    )
}