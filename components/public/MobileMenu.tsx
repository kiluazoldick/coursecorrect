"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { LanguageSwitch } from "./LanguageSwitch";
import { useLanguage } from "@/lib/language-context";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { language } = useLanguage();
  const t = useT(language);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/features", label: t.nav.features },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/about", label: t.nav.about },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={cn(
          "fixed inset-0 z-[110] bg-[#141219]/45 transition-opacity duration-[250ms]",
          open ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      />

      {/* Panneau */}
      <aside
        aria-label="Menu mobile"
        aria-hidden={!open}
        className={cn(
          "fixed top-0 right-0 bottom-0 z-[120] w-[min(330px,88vw)] bg-white dark:bg-[#15131c] border-l border-[#e6e1d6] dark:border-[#2c2836] p-[22px] flex flex-col overflow-y-auto transition-transform duration-[320ms]",
          open ? "translate-x-0" : "translate-x-[102%]",
        )}
      >
        <div className="flex items-center justify-between mb-[22px]">
          <Logo variant="compact" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer le menu"
            className="w-[44px] h-[44px] rounded-[8px] border border-[#e6e1d6] dark:border-[#2c2836] flex items-center justify-center text-[#6b6675] dark:text-[#a49db4]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block px-[14px] py-[15px] rounded-[8px] text-[16.5px] font-medium text-[#141219] dark:text-[#f3f0e9] border-b border-[#e6e1d6] dark:border-[#2c2836] hover:bg-[#f6f3ec] dark:hover:bg-[#221f2e] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-between text-[13.5px] text-[#9a95a3] dark:text-[#7a7488] my-[22px]">
          <span>Langue</span>
          <LanguageSwitch />
        </div>

        <div className="flex flex-col gap-[10px] mt-auto pt-[18px]">
          <Button href="/login" variant="outline" block onClick={onClose}>
            {t.nav.login}
          </Button>
          <Button href="/signup" variant="primary" block onClick={onClose}>
            {t.nav.signup}
          </Button>
        </div>
      </aside>
    </>
  );
}
