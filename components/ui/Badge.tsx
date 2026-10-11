import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "deep" | "green";
  className?: string;
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default:
      "border-[#e6e1d6] dark:border-[#2c2836] text-[#6b6675] dark:text-[#a49db4] bg-white dark:bg-[#1c1926]",
    deep: "border-white/35 text-white",
    green: "border-[#3fcc3b]/30 text-[#3fcc3b] bg-[#3fcc3b]/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border rounded-full px-[15px] py-[7px] text-[13px] font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
