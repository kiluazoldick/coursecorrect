import type { Metadata } from "next";
import { PageLayout } from "@/components/public/PageLayout";
import { PageHero } from "@/components/public/PageHero";
import { FinalCTA } from "@/components/public/FinalCTA";

export const metadata: Metadata = {
  title: "À propos — Corrige Tes Cours",
  description:
    "Notre mission : rendre la révision accessible à tous les étudiants d'Afrique francophone, avec des outils simples et respectueux de leur temps.",
};

const values = [
  {
    title: "Simplicité d'abord",
    text: "Pas de fonctionnalité gadget. Chaque outil doit résoudre un problème réel dans ta semaine d'étudiant.",
  },
  {
    title: "Prix juste",
    text: "Le prix d'une pile de photocopies, pas celui d'un abonnement de startup. Pensé pour les budgets étudiants.",
  },
  {
    title: "Français d'abord",
    text: "Nos outils sont pensés en français, avec des exemples ancrés dans le quotidien des campus d'Afrique.",
  },
  {
    title: "Respect du temps",
    text: "Ton temps d'étude est précieux. Nos outils doivent le réduire, jamais l'allonger.",
  },
];

const timeline = [
  {
    date: "2024",
    text: "Première version testée avec 40 étudiants à l'Université de Yaoundé I.",
  },
  {
    date: "2025",
    text: "Lancement public, ajout de l'assistant Tariq et des flashcards adaptatives.",
  },
  {
    date: "Aujourd'hui",
    text: "Plus de 10 000 étudiants inscrits dans 8 pays d'Afrique francophone.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="À propos"
        title="Rendre la révision accessible à tous"
        description="Corrige Tes Cours est né d'un constat simple : les étudiants d'Afrique francophone méritent des outils d'étude modernes, en français, à un prix juste."
      />

      <section className="py-24 border-b border-[#e6e1d6] dark:border-[#2c2836]">
        <div className="w-full max-w-[1140px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div>
            <h2 className="font-serif font-semibold text-[clamp(28px,3.6vw,40px)] leading-[1.12] tracking-[-0.015em] text-[#141219] dark:text-[#f3f0e9]">
              Notre mission
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-[16.5px] leading-[1.75] text-[#413d4a] dark:text-[#cdc7d8]">
            <p>
              Chaque semestre, des milliers d&apos;étudiants passent des
              dizaines d&apos;heures à recopier, résumer et organiser leurs
              cours à la main. Ce temps pourrait servir à comprendre,
              s&apos;entraîner, réviser.
            </p>
            <p>
              Nous construisons des outils qui prennent en charge ce travail
              mécanique pour que les étudiants se concentrent sur ce qui compte
              vraiment : comprendre leur matière et la retenir.
            </p>
            <p>
              Notre approche est simple : un français clair, des exemples ancrés
              dans le quotidien, des prix accessibles, et une IA qui reste
              honnête sur ce qu&apos;elle sait et ne sait pas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-[#e6e1d6] dark:border-[#2c2836] bg-[#f6f3ec] dark:bg-[#1c1926]">
        <div className="w-full max-w-[1140px] mx-auto px-6">
          <h2 className="font-serif font-semibold text-[clamp(28px,3.6vw,40px)] leading-[1.12] tracking-[-0.015em] text-[#141219] dark:text-[#f3f0e9] mb-12">
            Nos principes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white dark:bg-[#1c1926] border border-[#e6e1d6] dark:border-[#2c2836] rounded-[18px] p-7"
              >
                <h3 className="font-serif font-semibold text-[20px] text-[#141219] dark:text-[#f3f0e9] mb-3">
                  {v.title}
                </h3>
                <p className="text-[15px] text-[#6b6675] dark:text-[#a49db4] leading-[1.65]">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-[#e6e1d6] dark:border-[#2c2836]">
        <div className="w-full max-w-[860px] mx-auto px-6">
          <h2 className="font-serif font-semibold text-[clamp(28px,3.6vw,40px)] leading-[1.12] tracking-[-0.015em] text-[#141219] dark:text-[#f3f0e9] mb-12">
            Notre parcours
          </h2>
          <ol className="relative border-l border-dashed border-[#d6cfc0] dark:border-[#3a3546] pl-8 flex flex-col gap-10">
            {timeline.map((t) => (
              <li key={t.date} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-[#7e55ff] border-4 border-white dark:border-[#15131c]"
                />
                <span className="text-[12.5px] tracking-[0.08em] uppercase text-[#9a95a3] dark:text-[#7a7488]">
                  {t.date}
                </span>
                <p className="mt-2 text-[16.5px] text-[#413d4a] dark:text-[#cdc7d8] leading-[1.65]">
                  {t.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FinalCTA />
    </PageLayout>
  );
}
