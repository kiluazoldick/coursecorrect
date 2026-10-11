import { Button } from "@/components/ui/Button";
import { PaperNote } from "./shapes/PaperNote";
import { Flashcard } from "./shapes/Flashcard";
import { PrintFrame } from "./shapes/PrintFrame";

export function Hero() {
  return (
    <section
      id="accueil"
      className="pt-[116px] pb-16 sm:pt-[132px] sm:pb-[84px] bg-[radial-gradient(rgba(20,18,25,0.07)_1px,transparent_1px)] bg-[length:24px_24px] dark:bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)]"
    >
      <div className="w-full max-w-[1140px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-[64px] items-center">
        {/* Colonne gauche */}
        <div>
          <span className="inline-flex items-center gap-[9px] border border-[#e6e1d6] dark:border-[#2c2836] rounded-full px-[15px] py-[7px] text-[13px] font-medium text-[#6b6675] dark:text-[#a49db4] bg-white dark:bg-[#1c1926] mb-[22px]">
            <i className="w-[7px] h-[7px] rounded-full bg-[#3fcc3b] block" />
            Pensé pour les campus d&apos;Afrique francophone
          </span>

          <h1 className="font-serif font-semibold text-[#141219] dark:text-[#f3f0e9] leading-[1.12] tracking-[-0.015em] text-[clamp(38px,5.4vw,60px)] mb-5">
            Tes cours,
            <br />
            résumés et{" "}
            <span className="relative inline-block text-[#320094] dark:text-[#9d80ff]">
              compris
              <span
                aria-hidden="true"
                className="absolute left-[-2px] right-[-2px] bottom-[2px] h-[9px] -z-10 opacity-55 bg-no-repeat bg-center bg-[length:100%_100%]"
                style={{
                  backgroundImage:
                    'url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 12\" preserveAspectRatio=\"none\"><path d=\"M2 8c28-4 56-5 84-3 30 2 60 4 112-2\" fill=\"none\" stroke=\"%237e55ff\" stroke-width=\"3\" stroke-linecap=\"round\"/></svg>")',
                }}
              />
            </span>
            .
          </h1>

          <p className="text-[18px] text-[#6b6675] dark:text-[#a49db4] max-w-[520px] leading-[1.65]">
            Dépose un PDF, un Word ou une photo de ton polycopié. Tu obtiens un
            résumé clair, des quiz corrigés et un carnet de révision — avec
            Tariq pour t&apos;expliquer ce qui bloque.
          </p>

          <div className="flex flex-wrap gap-3 mt-[30px]">
            <Button href="/signup" variant="primary" size="lg">
              Commencer gratuitement
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
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Button>
            <Button href="/#demo" variant="outline" size="lg">
              Voir la démo
            </Button>
          </div>

          <p className="mt-[14px] text-[13.5px] text-[#9a95a3] dark:text-[#7a7488]">
            Sans carte bancaire. Ton premier résumé est prêt en deux minutes.
          </p>

          <div className="flex flex-wrap gap-x-[38px] gap-y-3 mt-10">
            <Stat value="10 240" label="étudiants inscrits" />
            <Stat value="52 000" label="cours résumés" last />
            <Stat value="98 %" label="de satisfaction" last />
          </div>
        </div>

        {/* Colonne droite : composition visuelle */}
        <div
          aria-hidden="true"
          className="relative min-h-[470px] hidden lg:block"
        >
          <PaperNote />

          <div className="absolute right-[-38px] top-[-22px] z-[3] w-[206px] rotate-[2.5deg]">
            <PrintFrame
              src="/images/student-desk.svg"
              caption="tes notes, en mieux rangées"
              imageHeight={118}
            />
          </div>

          <div className="absolute left-[-42px] bottom-[6px] z-[3] w-[228px] -rotate-[3deg]">
            <Flashcard />
          </div>

          <span className="absolute right-[-96px] top-[132px] w-[150px] -rotate-[4deg] font-hand text-[22px] leading-[1.2] font-semibold text-[#320094] dark:text-[#9d80ff]">
            <span
              aria-hidden="true"
              className="absolute left-[-26px] top-[12px] w-[22px] h-[1px] bg-[#d6cfc0] dark:bg-[#3a3546]"
            />
            à revoir avant le partiel
          </span>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  last = false,
}: {
  value: string;
  label: string;
  last?: boolean;
}) {
  return (
    <div
      className={
        last ? "" : "pr-[38px] border-r border-[#e6e1d6] dark:border-[#2c2836]"
      }
    >
      <b className="block font-serif font-semibold text-[26px] leading-[1.1] tracking-[-0.02em] text-[#141219] dark:text-[#f3f0e9]">
        {value}
      </b>
      <span className="text-[12.5px] tracking-[0.08em] uppercase text-[#9a95a3] dark:text-[#7a7488]">
        {label}
      </span>
    </div>
  );
}
