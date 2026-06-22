import Image from "next/image";
import Link from "next/link";

export function Logo() {
    return (
        <Link className="font-semibold text-2xl tracking-tighter" href="/">
            <Image
                src="/logo.svg"
                alt="logo"
                width={112}
                height={18}
                priority
                className="active:scale-95 ease-out duration-300"
            />
        </Link>
    )
}