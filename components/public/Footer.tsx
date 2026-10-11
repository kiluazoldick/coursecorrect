import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { LanguageSwitch } from "./LanguageSwitch";

const productLinks = [
  { href: "/features", label: "Fonctionnalités" },
  { href: "/pricing", label: "Tarifs" },
  { href: "/#tariq", label: "Assistant Tariq" },
  { href: "#", label: "Application mobile" },
  { href: "#", label: "Offre universités" },
];

const resourceLinks = [
  { href: "#", label: "Cahier de méthodologie" },
  { href: "#", label: "Guides de révision" },
  { href: "#", label: "Centre d'aide" },
  { href: "#", label: "Communauté étudiante" },
  { href: "#", label: "État du service" },
];

const legalLinks = [
  { href: "/terms", label: "Conditions d'utilisation" },
  { href: "/privacy", label: "Confidentialité" },
  { href: "/legal", label: "Mentions légales" },
  { href: "#", label: "Cookies" },
  { href: "#", label: "Nous écrire" },
];

export function Footer() {
  return (
    <footer className="bg-[#f6f3ec] dark:bg-[#1c1926] border-t border-[#e6e1d6] dark:border-[#2c2836] pt-16 pb-7">
      <div className="w-full max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr] gap-11">
          {/* Marque */}
          <div>
            <Logo />
            <p className="mt-[15px] text-[14.5px] text-[#6b6675] dark:text-[#a49db4] max-w-[320px] leading-[1.6]">
              Des outils d&apos;étude simples et respectueux de ton temps, pour
              les étudiants des universités d&apos;Afrique francophone.
            </p>

            <div className="flex gap-2 mt-[22px]">
              <SocialLink label="Facebook">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
              </SocialLink>
              <SocialLink label="X">
                <path d="M18.9 2H22l-6.8 7.8L23 22h-6.6l-4.6-6.3L6.5 22H3.4l7.2-8.2L2.4 2h6.7l4.3 5.9zM17.7 20h1.8L7.4 3.9H5.5z" />
              </SocialLink>
              <SocialLink label="LinkedIn">
                <path d="M6.9 8.5H3.6V21h3.3zM5.2 3a1.9 1.9 0 1 0 0 3.9 1.9 1.9 0 0 0 0-3.9zM21 14.2c0-3.5-1.9-5.2-4.4-5.2-2 0-2.9 1.1-3.4 1.9V8.5H9.9c0 1 0 12.5 0 12.5h3.3v-7c0-.4 0-.7.1-1 .3-.7.9-1.4 1.9-1.4 1.4 0 1.9 1 1.9 2.5V21H21z" />
              </SocialLink>
              <SocialLink label="Instagram" outline>
                <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                <circle cx="12" cy="12" r="3.8" />
                <circle
                  cx="17.3"
                  cy="6.7"
                  r="1.1"
                  fill="currentColor"
                  stroke="none"
                />
              </SocialLink>
              <SocialLink label="YouTube">
                <path d="M23 12s0-3.4-.4-5a2.6 2.6 0 0 0-1.8-1.8C19.2 4.8 12 4.8 12 4.8s-7.2 0-8.8.4A2.6 2.6 0 0 0 1.4 7C1 8.6 1 12 1 12s0 3.4.4 5a2.6 2.6 0 0 0 1.8 1.8c1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4a2.6 2.6 0 0 0 1.8-1.8c.4-1.6.4-5 .4-5zM9.9 15.2V8.8l5.6 3.2z" />
              </SocialLink>
            </div>
          </div>

          <FooterColumn title="Produit" links={productLinks} />
          <FooterColumn title="Ressources" links={resourceLinks} />
          <FooterColumn title="Légal" links={legalLinks} />
        </div>

        <div className="mt-12 pt-[22px] border-t border-[#e6e1d6] dark:border-[#2c2836] flex flex-wrap gap-4 items-center justify-between text-[13.5px] text-[#9a95a3] dark:text-[#7a7488]">
          <span>© 2025 Corrige Tes Cours. Tous droits réservés.</span>
          <div className="flex items-center gap-4 flex-wrap">
            <LanguageSwitch />
            <span>Conçu à Yaoundé, Cameroun</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#9a95a3] dark:text-[#7a7488] mb-[18px]">
        {title}
      </h4>
      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-[14.5px] text-[#413d4a] dark:text-[#cdc7d8] hover:text-[#7e55ff] dark:hover:text-[#9d80ff] hover:underline underline-offset-[3px] transition-colors w-fit"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

function SocialLink({
  label,
  children,
  outline = false,
}: {
  label: string;
  children: React.ReactNode;
  outline?: boolean;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-[42px] h-[42px] rounded-[8px] flex items-center justify-center border border-[#e6e1d6] dark:border-[#2c2836] text-[#6b6675] dark:text-[#a49db4] bg-white dark:bg-[#1c1926] hover:bg-[#320094] hover:text-white hover:border-[#320094] dark:hover:bg-[#7e55ff] dark:hover:border-[#7e55ff] dark:hover:text-white transition-colors"
    >
      <svg
        viewBox="0 0 24 24"
        fill={outline ? "none" : "currentColor"}
        stroke={outline ? "currentColor" : "none"}
        strokeWidth={outline ? "1.9" : "0"}
        className="w-[18px] h-[18px]"
        aria-hidden="true"
      >
        {children}
      </svg>
    </a>
  );
}
