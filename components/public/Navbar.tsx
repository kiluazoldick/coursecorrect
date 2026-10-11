"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitch } from "./LanguageSwitch";
import { MobileMenu } from "@/components/public/MobileMenu";
import { useLanguage } from "@/lib/language-context";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = useT(language);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/features", label: t.nav.features },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/about", label: t.nav.about },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] backdrop-blur-[10px] transition-colors",
          "bg-white/85 dark:bg-[#15131c]/85",
          scrolled
            ? "border-b border-[#e6e1d6] dark:border-[#2c2836]"
            : "border-b border-transparent",
        )}
      >
        <nav
          aria-label="Navigation principale"
          className="w-full max-w-[1140px] mx-auto px-6 h-[72px] flex items-center justify-between gap-5"
        >
          <Logo />

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-[14px] py-[10px] rounded-[8px] text-[15px] font-medium text-[#6b6675] dark:text-[#a49db4] hover:text-[#141219] dark:hover:text-[#f3f0e9] hover:bg-[#f6f3ec] dark:hover:bg-[#221f2e] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-[10px]">
            <LanguageSwitch className="hidden lg:flex" />
            <ThemeToggle />

            <Link
              href="/login"
              className="hidden lg:inline-flex items-center justify-center min-h-[44px] px-[14px] rounded-[8px] text-[15px] font-medium text-[#413d4a] dark:text-[#cdc7d8] hover:text-[#7e55ff] dark:hover:text-[#9d80ff] transition-colors"
            >
              {t.nav.login}
            </Link>

            <Button
              href="/signup"
              variant="primary"
              className="hidden lg:inline-flex"
            >
              {t.nav.signup}
            </Button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
              className="lg:hidden w-[44px] h-[44px] rounded-[8px] border border-[#e6e1d6] dark:border-[#2c2836] flex items-center justify-center text-[#141219] dark:text-[#f3f0e9]"
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
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
