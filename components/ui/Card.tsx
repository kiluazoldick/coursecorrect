import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hover?: boolean;
};

export function Card({
  children,
  className,
  hover = true,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-[#1c1926] border border-[#e6e1d6] dark:border-[#2c2836] rounded-[18px] p-[30px_26px] transition-all duration-[250ms]",
        hover &&
          "hover:border-[#d6cfc0] dark:hover:border-[#3a3546] hover:-translate-y-[4px] hover:shadow-[0_12px_28px_rgba(20,18,25,0.08)] dark:hover:shadow-[0_14px_30px_rgba(0,0,0,0.45)]",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
