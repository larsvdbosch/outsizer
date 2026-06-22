export function Tagline({ children }: { children: React.ReactNode }) {
    return (
        <p className="inline-flex px-2 py-1 rounded-sm items-center bg-[#E54F11] font-mono text-sm font-medium text-[#FFFFC2] leading-[150%] uppercase">
            {children}
        </p>
    );
}