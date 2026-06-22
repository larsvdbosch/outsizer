import Image from "next/image";

export function SearchInput({ className }: { className?: string }) {
    return (
        <div className={className}>
            <button className="flex w-80 items-center gap-3 bg-white text-[#525252] rounded-full px-4 py-3 text-sm border border-neutral-200 cursor-pointer active:scale-95 transition-scale duration-300 ease-out">
                <Image
                    src="/search.svg"
                    alt="search icon"
                    width={16}
                    height={16}
                />
                Zoeken...
            </button>
        </div>
    );
}
