import { Card } from "@/components/ui/Card";

type Feature = {
  title: string;
  description: string;
  note: string;
  tile: "violet" | "deep" | "green";
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: "Import PDF & Word",
    description:
      "Dépose ton cours, l'IA en tire un résumé structuré en moins d'une minute.",
    note: "Résumé automatique",
    tile: "violet",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5M12 12v5M9.5 14.5 12 17l2.5-2.5" />
      </svg>
    ),
  },
  {
    title: "Quiz corrigés",
    description:
      "Des questions tirées de ton propre cours, corrigées avec l'explication de chaque réponse.",
    note: "Correction expliquée",
    tile: "deep",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 8h6M9 12h6M9 16h3" />
        <rect x="4" y="3" width="16" height="18" rx="2" />
      </svg>
    ),
  },
  {
    title: "Assistant Tariq",
    description:
      "Un tuteur disponible jour et nuit, qui connaît tes documents et reformule jusqu'à ce que ce soit clair.",
    note: "Disponible 24h/24",
    tile: "green",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8 8 0 0 1-8 8H8l-5 3 1.3-4.2A8 8 0 1 1 21 11.5z" />
        <path d="M9.5 11.5h.01M12.5 11.5h.01M15.5 11.5h.01" />
      </svg>
    ),
  },
  {
    title: "Flashcards",
    description:
      "Des cartes recto-verso générées depuis ton cours, avec répétition espacée pour mémoriser durablement.",
    note: "Mémorisation active",
    tile: "deep",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="7" width="13" height="13" rx="2" />
        <path d="M7 7V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-2" />
      </svg>
    ),
  },
  {
    title: "Suivi des progrès",
    description:
      "Tu vois où tu en es matière par matière, et ce qu'il reste à travailler avant l'échéance.",
    note: "Vue par matière",
    tile: "violet",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 20h16" />
        <path d="M7 20V12M12 20V5M17 20v-5.5" />
      </svg>
    ),
  },
  {
    title: "Guides d'étude",
    description:
      "Un plan de révision sur 7, 14 ou 30 jours, calé sur le temps qu'il te reste réellement.",
    note: "Personnalisé",
    tile: "green",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
        <path d="M4 5.5v16M8 8h7M8 12h5" />
      </svg>
    ),
  },
];

const tileClasses = {
  violet: "bg-[#7e55ff] text-white",
  deep: "bg-[#320094] text-white dark:bg-[#7e55ff]",
  green: "bg-[#2f9e2c] text-white dark:bg-[#3fcc3b] dark:text-[#0f1a0f]",
};

export function FeaturesGrid() {
  return (
    <section
      id="fonctionnalites"
      className="py-24 border-t border-[#e6e1d6] dark:border-[#2c2836] bg-[#f6f3ec] dark:bg-[#1c1926]"
    >
      <div className="w-full max-w-[1140px] mx-auto px-6">
        <div className="max-w-[660px] mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-[11px] text-[12px] font-semibold tracking-[0.18em] uppercase text-[#6b6675] dark:text-[#a49db4] mb-[18px] before:content-[''] before:w-6 before:h-[1px] before:bg-[#d6cfc0] dark:before:bg-[#3a3546]">
            Fonctionnalités
          </span>
          <h2 className="font-serif font-semibold text-[clamp(28px,3.6vw,40px)] leading-[1.12] tracking-[-0.015em] text-[#141219] dark:text-[#f3f0e9]">
            Tout ce qu&apos;il faut, du polycopié à l&apos;examen
          </h2>
          <p className="mt-[14px] text-[17.5px] text-[#6b6675] dark:text-[#a49db4]">
            Six outils simples, qui s&apos;enchaînent sans que tu aies à
            t&apos;organiser toi-même.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <Card key={feature.title} className="group">
              <div
                className={`w-[46px] h-[46px] rounded-[11px] flex items-center justify-center mb-5 ${tileClasses[feature.tile]}`}
                aria-hidden="true"
              >
                <div className="w-[22px] h-[22px] [&>svg]:w-full [&>svg]:h-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-serif font-semibold text-[20px] leading-[1.25] text-[#141219] dark:text-[#f3f0e9] mb-[9px]">
                {feature.title}
              </h3>
              <p className="text-[15px] text-[#6b6675] dark:text-[#a49db4] leading-[1.6]">
                {feature.description}
              </p>
              <span className="block mt-4 pt-[14px] border-t border-[#e6e1d6] dark:border-[#2c2836] text-[12.5px] tracking-[0.06em] uppercase text-[#9a95a3] dark:text-[#7a7488]">
                {feature.note}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
