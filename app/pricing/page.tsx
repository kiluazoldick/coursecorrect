import type { Metadata } from "next";
import { PageLayout } from "@/components/public/PageLayout";
import { PageHero } from "@/components/public/PageHero";
import { Pricing } from "@/components/public/Pricing";
import { Testimonials } from "@/components/public/Testimonials";
import { FinalCTA } from "@/components/public/FinalCTA";

export const metadata: Metadata = {
  title: "Tarifs — Corrige Tes Cours",
  description:
    "Gratuit pour essayer, 2 000 FCFA par mois pour tout débloquer. Sans engagement, sans carte bancaire pour commencer.",
};

const faq = [
  {
    q: "Puis-je essayer sans payer ?",
    a: "Oui. Le forfait gratuit te donne accès à 3 cours, des résumés courts et 5 quiz par mois — pour toujours, sans carte bancaire.",
  },
  {
    q: "Comment payer depuis le Cameroun ?",
    a: "Nous acceptons les cartes bancaires, Mobile Money et plusieurs passerelles locales. Tout se fait depuis ton compte.",
  },
  {
    q: "Puis-je annuler à tout moment ?",
    a: "Oui. Ton abonnement reste actif jusqu'à la fin de la période payée, puis bascule automatiquement en gratuit.",
  },
  {
    q: "Y a-t-il un tarif étudiant ?",
    a: "Le prix de 2 000 FCFA est déjà pensé pour les étudiants. Nous proposons aussi des offres groupées pour les universités.",
  },
];

export default function PricingPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Tarifs"
        title="Des prix pensés pour les étudiants"
        description="Un forfait gratuit pour découvrir, un forfait Étudiant+ pour tout débloquer pendant ton semestre."
      />
      <Pricing />

      <section className="py-24 border-t border-[#e6e1d6] dark:border-[#2c2836]">
        <div className="w-full max-w-[860px] mx-auto px-6">
          <h2 className="font-serif font-semibold text-[clamp(28px,3.6vw,40px)] leading-[1.12] tracking-[-0.015em] text-[#141219] dark:text-[#f3f0e9] mb-10">
            Questions fréquentes
          </h2>
          <div className="flex flex-col gap-3">
            {faq.map((item) => (
              <details
                key={item.q}
                className="group bg-white dark:bg-[#1c1926] border border-[#e6e1d6] dark:border-[#2c2836] rounded-[12px] px-6 py-5 cursor-pointer"
              >
                <summary className="font-medium text-[16.5px] text-[#141219] dark:text-[#f3f0e9] list-none flex items-center justify-between gap-4">
                  {item.q}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="w-5 h-5 shrink-0 text-[#6b6675] dark:text-[#a49db4] transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="mt-4 text-[15.5px] text-[#413d4a] dark:text-[#cdc7d8] leading-[1.65]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FinalCTA />
    </PageLayout>
  );
}
