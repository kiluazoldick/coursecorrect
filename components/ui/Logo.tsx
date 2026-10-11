import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "default" | "compact";
  className?: string;
  href?: string;
};

export function Logo({
  variant = "default",
  className,
  href = "/",
}: LogoProps) {
  return (
    <Link
      href={href}
      className={cn("flex items-center gap-3 group", className)}
      aria-label="Corrige Tes Cours — accueil"
    >
      <span
        className="w-9 h-9 rounded-[9px] flex items-center justify-center shrink-0 bg-[#320094] dark:bg-[#7e55ff] transition-colors"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[19px] h-[19px] text-white"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>

      <span className="flex flex-col leading-none">
        <span className="font-serif font-semibold text-[17px] text-[#141219] dark:text-[#f3f0e9] tracking-[-0.01em]">
          Corrige Tes Cours
        </span>
        {variant === "default" && (
          <span className="text-[11px] tracking-[0.14em] uppercase text-[#9a95a3] dark:text-[#7a7488] mt-[2px]">
            Étudier autrement
          </span>
        )}
      </span>
    </Link>
  );
}
