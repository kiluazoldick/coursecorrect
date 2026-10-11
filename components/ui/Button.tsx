import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "quiet" | "deep";
type Size = "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  block?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<ComponentProps<"button">, keyof BaseProps> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<ComponentProps<typeof Link>, keyof BaseProps> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center gap-[9px] rounded-[8px] font-semibold text-[15.5px] tracking-[-0.01em] border border-transparent transition-all duration-[250ms] cursor-pointer select-none";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#7e55ff] text-white hover:bg-[#5f35e0] hover:-translate-y-[1px] dark:bg-[#9d80ff] dark:hover:bg-[#8a63ff]",
  outline:
    "border-[#d6cfc0] text-[#141219] bg-transparent hover:border-[#141219] hover:bg-[#f6f3ec] dark:border-[#3a3546] dark:text-[#f3f0e9] dark:hover:border-[#f3f0e9] dark:hover:bg-[#221f2e]",
  quiet:
    "text-[#413d4a] hover:text-[#7e55ff] dark:text-[#cdc7d8] dark:hover:text-[#9d80ff]",
  deep: "bg-white text-[#320094] hover:bg-[#f6f3ec]",
};

const sizeClasses: Record<Size, string> = {
  md: "min-h-[48px] px-6",
  lg: "min-h-[54px] px-8 text-[16.5px]",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    block = false,
    className,
    children,
    ...rest
  } = props as BaseProps & Record<string, unknown>;

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    variant === "quiet"
      ? "min-h-[44px] px-[14px] hover:bg-transparent"
      : sizeClasses[size],
    block && "w-full",
    className,
  );

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest as { href: string };
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentProps<"button">)}>
      {children}
    </button>
  );
}
