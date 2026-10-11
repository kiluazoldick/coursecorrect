"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  const premiumPrice = yearly ? "16 000" : "2 000";
  const premiumPeriod = yearly
    ? "par an, soit 1 333 FCFA par mois"
    : "par mois, sans engagement";

  return (
    <section
      id="tarifs"
      className="py-24 border-t border-[#e6e1d6] dark:border-[#2c2836]"
    >
      <div className="w-full max-w-[1140px] mx-auto px-6">
        <div className="max-w-[660px] mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-[11px] text-[12px] font-semibold tracking-[0.18em] uppercase text-[#6b6675] dark:text-[#a49db4] mb-[18px] before:content-[''] before:w-6 before:h-[1px] before:bg-[#d6cfc0] dark:before:bg-[#3a3546]">
            Tarifs
          </span>
          <h2 className="font-serif font-semibold text-[clamp(28px,3.6vw,40px)] leading-[1.12] tracking-[-0.015em] text-[#141219] dark:text-[#f3f0e9]">
            Moins cher qu&apos;une pile de photocopies
          </h2>
        </div>

        {/* Toggle mensuel / annuel */}
        <div className="flex items-center justify-center gap-[14px] mb-11 flex-wrap">
          <span
            className={
              !yearly
                ? "text-[14.5px] text-[#141219] dark:text-[#f3f0e9] font-semibold"
                : "text-[14.5px] text-[#6b6675] dark:text-[#a49db4]"
            }
          >
            Mensuel
          </span>

          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            aria-label="Choisir la facturation annuelle"
            onClick={() => setYearly((v) => !v)}
            className="relative w-[54px] h-[30px] rounded-full border border-[#d6cfc0] dark:border-[#3a3546] bg-[#f6f3ec] dark:bg-[#221f2e]"
          >
            <span
              className={`absolute top-[3px] w-[22px] h-[22px] rounded-full bg-[#7e55ff] transition-transform duration-[250ms] ${
                yearly ? "translate-x-[24px]" : "translate-x-[3px]"
              }`}
            />
          </button>

          <span
            className={
              yearly
                ? "text-[14.5px] text-[#141219] dark:text-[#f3f0e9] font-semibold"
                : "text-[14.5px] text-[#6b6675] dark:text-[#a49db4]"
            }
          >
            Annuel
          </span>

          <span className="font-hand text-[20px] text-[#320094] dark:text-[#9d80ff] -rotate-2 inline-block">
            deux mois offerts
          </span>
        </div>

        {/* Cartes de prix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] max-w-[860px] mx-auto items-start">
          {/* Gratuit */}
          <article className="bg-white dark:bg-[#1c1926] border border-[#e6e1d6] dark:border-[#2c2836] rounded-[18px] p-[34px_30px]">
            <h3 className="font-serif font-semibold text-[22px] text-[#141219] dark:text-[#f3f0e9]">
              Gratuit
            </h3>
            <p className="text-[14.5px] text-[#9a95a3] dark:text-[#7a7488] mt-[6px]">
              Pour essayer sans rien engager.
            </p>

            <div className="flex items-end gap-[9px] mt-6 mb-1">
              <span className="font-serif font-semibold text-[42px] leading-none tracking-[-0.03em] text-[#141219] dark:text-[#f3f0e9]">
                0
              </span>
              <span className="text-[14px] font-semibold text-[#6b6675] dark:text-[#a49db4] pb-[5px]">
                FCFA
              </span>
            </div>
            <p className="text-[13.5px] text-[#9a95a3] dark:text-[#7a7488] min-h-[19px]">
              Pour toujours
            </p>

            <ul className="flex flex-col gap-3 mt-[26px] mb-7 pt-[22px] border-t border-[#e6e1d6] dark:border-[#2c2836]">
              <CheckItem>3 cours importés</CheckItem>
              <CheckItem>Résumés courts</CheckItem>
              <CheckItem>5 quiz par mois</CheckItem>
              <CheckItem off>Flashcards et guides</CheckItem>
              <CheckItem off>Export PDF</CheckItem>
            </ul>

            <Button href="/signup" variant="outline" block>
              Créer un compte gratuit
            </Button>
          </article>

          {/* Premium */}
          <article className="relative bg-[#320094] dark:bg-[#3b1fa0] border border-[#320094] dark:border-[#3b1fa0] rounded-[18px] p-[34px_30px] text-white/80">
            <span className="absolute top-5 right-5 text-[11px] font-semibold tracking-[0.12em] uppercase text-white border border-white/35 rounded-full px-3 py-[5px]">
              Recommandé
            </span>

            <h3 className="font-serif font-semibold text-[22px] text-white">
              Étudiant+
            </h3>
            <p className="text-[14.5px] text-white/60 mt-[6px]">
              Pour tenir tout un semestre.
            </p>

            <div className="flex items-end gap-[9px] mt-6 mb-1">
              <span className="font-serif font-semibold text-[42px] leading-none tracking-[-0.03em] text-white">
                {premiumPrice}
              </span>
              <span className="text-[14px] font-semibold text-white/60 pb-[5px]">
                FCFA
              </span>
            </div>
            <p className="text-[13.5px] text-white/60 min-h-[19px]">
              {premiumPeriod}
            </p>

            <ul className="flex flex-col gap-3 mt-[26px] mb-7 pt-[22px] border-t border-white/15">
              <CheckItem deep>Cours illimités : PDF, Word, photos</CheckItem>
              <CheckItem deep>Résumés détaillés et plans structurés</CheckItem>
              <CheckItem deep>Quiz illimités, correction expliquée</CheckItem>
              <CheckItem deep>
                Tariq sans limite, réponses prioritaires
              </CheckItem>
              <CheckItem deep>Flashcards, guides et export PDF</CheckItem>
            </ul>

            <Button href="/signup" variant="deep" block>
              Choisir Étudiant+
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}

function CheckItem({
  children,
  off = false,
  deep = false,
}: {
  children: React.ReactNode;
  off?: boolean;
  deep?: boolean;
}) {
  const textClass = deep
    ? "text-white/85"
    : off
      ? "text-[#9a95a3] dark:text-[#7a7488]"
      : "text-[#413d4a] dark:text-[#cdc7d8]";

  const iconColor = deep
    ? "text-[#7ff07a]"
    : off
      ? "text-[#9a95a3] dark:text-[#7a7488]"
      : "text-[#3fcc3b]";

  return (
    <li className={`flex gap-[10px] text-[15px] leading-[1.5] ${textClass}`}>
      {off ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          className={`w-[18px] h-[18px] shrink-0 mt-[2px] ${iconColor}`}
          aria-hidden="true"
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-[18px] h-[18px] shrink-0 mt-[2px] ${iconColor}`}
          aria-hidden="true"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      )}
      <span>{children}</span>
    </li>
  );
}
