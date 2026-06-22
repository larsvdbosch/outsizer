import clsx from "clsx";

type SectionProps = {
    children: React.ReactNode;
    className?: string;
};

export function Section({
    children,
    className,
}: SectionProps) {
    return (
        <section className={clsx("py-16 lg:py-32", className)}>
            {children}
        </section>
    );
}