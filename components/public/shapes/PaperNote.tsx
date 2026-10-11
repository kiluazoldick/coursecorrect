import { cn } from "@/lib/utils";

type PaperNoteProps = {
  className?: string;
};

export function PaperNote({ className }: PaperNoteProps) {
  return (
    <div
      className={cn(
        "relative z-[2] mx-auto max-w-[420px] rounded-[18px] border border-[#e6e1d6] dark:border-[#2c2836] bg-white dark:bg-[#1c1926] px-[26px] pt-[26px] pb-[30px] shadow-[0_1px_2px_rgba(20,18,25,0.05)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.4)]",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3 mb-[18px]">
        <span className="text-[11.5px] font-semibold tracking-[0.1em] uppercase text-[#320094] dark:text-[#9d80ff]">
          Résumé — 24 pages → 2
        </span>
        <span className="text-[12.5px] text-[#9a95a3] dark:text-[#7a7488]">
          Semaine 6
        </span>
      </div>

      <h3 className="font-serif text-[23px] font-semibold text-[#141219] dark:text-[#f3f0e9] leading-[1.2] mb-[14px]">
        Chapitre 3 · La souveraineté
      </h3>

      <p className="text-[15px] leading-[1.65] text-[#413d4a] dark:text-[#cdc7d8]">
        La souveraineté est le pouvoir suprême de l&apos;État : il ne reconnaît
        aucun pouvoir au-dessus de lui. Elle est{" "}
        <mark className="bg-[#7e55ff]/18 dark:bg-[#9d80ff]/25 text-inherit px-[3px] py-[1px] rounded-[3px]">
          une et indivisible
        </mark>
        , et son titulaire est le peuple.
      </p>

      <ul className="flex flex-col gap-[11px] mt-5 pt-[14px] border-t border-[#e6e1d6] dark:border-[#2c2836]">
        <li className="flex items-center gap-[10px] text-[14.5px] text-[#413d4a] dark:text-[#cdc7d8]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-[17px] h-[17px] shrink-0 text-[#3fcc3b]"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          Idées principales retenues
        </li>
        <li className="flex items-center gap-[10px] text-[14.5px] text-[#413d4a] dark:text-[#cdc7d8]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-[17px] h-[17px] shrink-0 text-[#3fcc3b]"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          12 définitions extraites
        </li>
        <li className="flex items-center gap-[10px] text-[14.5px] text-[#9a95a3] dark:text-[#7a7488]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="w-[17px] h-[17px] shrink-0"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="8.5" />
          </svg>
          À approfondir : souveraineté populaire
        </li>
      </ul>
    </div>
  );
}
