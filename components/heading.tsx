import clsx from "clsx";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps<T extends HeadingTag = "h1"> = {
    children: React.ReactNode;
    as?: React.ElementType;
    className?: string;
};

const sizeClasses: Record<HeadingTag, string> = {
    // Headings
    'h1': 'text-h1',
    'h2': 'text-h2',
    'h3': 'text-h3',
    'h4': 'text-h4',
    'h5': 'text-h5',
    'h6': 'text-h6',
};

export function Heading({
    children,
    as = "h1",
    className
}: HeadingProps) {
    const Tag = as;
    const sizeClass = sizeClasses[(as || "h1") as HeadingTag];

    return <Tag className={clsx(sizeClass, className)}>{children}</Tag>;
}