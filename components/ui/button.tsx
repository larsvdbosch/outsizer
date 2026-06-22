import clsx from "clsx";
import Link from "next/link";

type ButtonVariant = "solid" | "black";
type ButtonSize = "small" | "large";

const ButtonSizes: Record<ButtonSize, string> = {
    small: "px-4 py-2 text-sm",
    large: "px-6 py-3 text-base",
};

const BaseStyles =
    "flex items-center w-fit rounded-full font-medium transition-[scale,background-color] ease-in-out duration-150 active:scale-95";

const ButtonVariants: Record<ButtonVariant, string> = {
    solid: "bg-accent text-background hover:bg-[#005CEF]",
    black: "bg-foreground text-background hover:bg-[#181818]",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
}

export function Button({
    children,
    href,
    className,
    variant = "solid",
    size = "large",
    ...rest
}: ButtonProps) {
    if (!href)
        return (
            <button
                type="button"
                {...rest}
                className={clsx(
                    BaseStyles,
                    ButtonVariants[variant],
                    className,
                    ButtonSizes[size],
                )}
            >
                {children}
            </button>
        );
    return (
        <Link
            href={href}
            className={clsx(
                BaseStyles,
                ButtonVariants[variant],
                className,
                ButtonSizes[size],
            )}
        >
            {children}
        </Link>
    );
}
