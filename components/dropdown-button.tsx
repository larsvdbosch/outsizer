"use client";

type DropdownItem = {
    name: string;
    href: string;
}

export type DropdownMenuProps = {
    label: string;
    item: DropdownItem[];
}

import Image from "next/image"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function DropdownMenu({ item, label }: DropdownMenuProps) {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close on Escape key
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") setOpen(false);
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div ref={wrapperRef} className="relative inline-block">
            <button
                className="relative flex items-center gap-1 px-4 py-2 text-sm font-medium bg-white w-fit rounded-xl transition ease-out duration-150 border border-transparent hover:border-neutral-200 cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
                aria-haspopup="menu"
                aria-expanded={open}
            >
                {label}
                <Image
                    src="/chevron-down.svg"
                    alt="chevron down icon"
                    width={14}
                    height={14}
                />
            </button>

            <div
                role="menu"
                className={`absolute flex flex-col text-sm right-0 mt-2 w-55 p-1.5 rounded-lg border border-neutral-200 bg-white overflow-hidden transition-[scale,opacity] ease-in-out duration-150` + (open ? " scale-100 opacity-100 visible" : " scale-95 opacity-0 invisible")}
            >
                {item.map((link) => (
                    <Link
                        href={link.href}
                        key={link.name}
                        role="menuitem"
                        className="w-full text-left p-2 hover:bg-gray-100 rounded-sm cursor-pointer"
                        onClick={() => setOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </div >
    )
}