import { PrintFrame } from "./shapes/PrintFrame";

const bullets = [
  "Ses réponses viennent de tes propres cours, pas d'une recherche au hasard.",
  "Il s'ajuste à ton niveau et accepte d'être interrompu autant de fois que nécessaire.",
  "Il travaille en français, avec des exemples ancrés dans ton quotidien.",
];

export function TariqChat() {
  return (
    <section
      id="tariq"
      className="py-24 border-t border-[#e6e1d6] dark:border-[#2c2836] bg-[#f6f3ec] dark:bg-[#1c1926]"
    >
      <div className="w-full max-w-[1140px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
        {/* Colonne gauche : texte */}
        <div>
          <span className="inline-flex items-center gap-[11px] text-[12px] font-semibold tracking-[0.18em] uppercase text-[#6b6675] dark:text-[#a49db4] mb-[18px] before:content-[''] before:w-6 before:h-[1px] before:bg-[#d6cfc0] dark:before:bg-[#3a3546]">
            Assistant d&apos;étude
          </span>

          <h2 className="font-serif font-semibold text-[clamp(28px,3.6vw,40px)] leading-[1.12] tracking-[-0.015em] text-[#141219] dark:text-[#f3f0e9]">
            Tariq, ton tuteur patient
          </h2>

          <p className="mt-4 text-[17.5px] text-[#6b6675] dark:text-[#a49db4] leading-[1.65]">
            Il ne te donne pas la réponse toute faite : il part de tes
            documents, pose les bonnes questions et réexplique autrement quand
            ça ne passe pas.
          </p>

          <ul className="flex flex-col gap-[14px] mt-[26px]">
            {bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex gap-[11px] text-[15.5px] text-[#413d4a] dark:text-[#cdc7d8] leading-[1.6]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-[18px] h-[18px] shrink-0 mt-[3px] text-[#3fcc3b]"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne droite : mockup chat */}
        <div className="relative">
          <div className="bg-white dark:bg-[#1c1926] border border-[#e6e1d6] dark:border-[#2c2836] rounded-[18px] overflow-hidden shadow-[0_1px_2px_rgba(20,18,25,0.05)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
            {/* En-tête du chat */}
            <div className="flex items-center gap-3 px-5 py-[15px] border-b border-[#e6e1d6] dark:border-[#2c2836] bg-[#f6f3ec] dark:bg-[#221f2e]">
              <span className="w-[38px] h-[38px] rounded-[10px] bg-[#320094] dark:bg-[#7e55ff] flex items-center justify-center text-white font-serif font-semibold text-[16px]">
                T
              </span>
              <div>
                <b className="block text-[15px] text-[#141219] dark:text-[#f3f0e9]">
                  Tariq
                </b>
                <span className="text-[12.5px] text-[#9a95a3] dark:text-[#7a7488] flex items-center gap-[6px] before:content-[''] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#3fcc3b] before:block">
                  en session sur ton cours de macroéconomie
                </span>
              </div>
            </div>

            {/* Corps du chat */}
            <div className="px-5 py-[22px] flex flex-col gap-[13px] min-h-[300px]">
              <Bubble side="left">
                J&apos;ai lu ton chapitre 4. On commence par quoi ?
              </Bubble>
              <Bubble side="right">
                La différence entre inflation et déflation, simplement.
              </Bubble>
              <Bubble side="left">
                L&apos;inflation, c&apos;est la hausse générale des prix : ta
                monnaie achète moins. La déflation, c&apos;est l&apos;inverse,
                les prix baissent — mais les salaires aussi, ce qui ralentit
                l&apos;économie. Si un sac de riz passe de 1 000 à 1 200 FCFA,
                tu ressens directement l&apos;inflation.
              </Bubble>
              <Bubble side="right">
                C&apos;est clair. Prépare-moi cinq questions là-dessus.
              </Bubble>
            </div>

            {/* Pied du chat */}
            <div className="flex items-center gap-3 px-5 py-[13px] border-t border-[#e6e1d6] dark:border-[#2c2836]">
              <span className="flex-1 h-[42px] rounded-[8px] bg-[#f6f3ec] dark:bg-[#221f2e] border border-[#e6e1d6] dark:border-[#2c2836] flex items-center px-[15px] text-[14px] text-[#9a95a3] dark:text-[#7a7488]">
                Écris ta question…
              </span>
              <span className="w-[42px] h-[42px] rounded-[8px] bg-[#7e55ff] flex items-center justify-center text-white shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-[18px] h-[18px]"
                  aria-hidden="true"
                >
                  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" />
                </svg>
              </span>
            </div>
          </div>

          {/* Photo décorative */}
          <div className="absolute -left-10 -bottom-[30px] w-[168px] -rotate-[3deg] hidden lg:block">
            <PrintFrame
              src="/images/student-revision.svg"
              caption="réviser sans se sentir seul"
              imageHeight={186}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Bubble({
  children,
  side,
}: {
  children: React.ReactNode;
  side: "left" | "right";
}) {
  const isLeft = side === "left";
  return (
    <div
      className={
        isLeft
          ? "max-w-[84%] px-4 py-3 rounded-[14px] rounded-bl-[4px] bg-[#f6f3ec] dark:bg-[#221f2e] border border-[#e6e1d6] dark:border-[#2c2836] text-[14.5px] leading-[1.55] text-[#413d4a] dark:text-[#cdc7d8] self-start"
          : "max-w-[84%] px-4 py-3 rounded-[14px] rounded-br-[4px] bg-[#320094] dark:bg-[#7e55ff] text-white dark:text-[#12101a] text-[14.5px] leading-[1.55] self-end"
      }
    >
      {children}
    </div>
  );
}
