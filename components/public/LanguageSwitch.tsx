"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

type LanguageSwitchProps = {
  className?: string;
};

export function LanguageSwitch({ className }: LanguageSwitchProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Choix de la langue"
      className={cn(
        "flex items-center border border-[#e6e1d6] dark:border-[#2c2836] rounded-[8px] overflow-hidden",
        className,
      )}
    >
      {(["fr", "en"] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          className={cn(
            "min-w-[40px] min-h-[40px] text-[12.5px] font-semibold tracking-[0.06em] transition-colors",
            language === lang
              ? "bg-[#f6f3ec] dark:bg-[#221f2e] text-[#141219] dark:text-[#f3f0e9]"
              : "text-[#9a95a3] dark:text-[#7a7488] hover:text-[#141219] dark:hover:text-[#f3f0e9]",
          )}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
