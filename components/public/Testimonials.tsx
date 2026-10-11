const testimonials = [
  {
    quote:
      "J'ai bouclé mon partiel de macroéconomie en trois jours. Les résumés m'ont épargné 200 pages de lecture, et les quiz m'ont montré précisément ce que je ne maîtrisais pas.",
    initials: "AM",
    name: "Aïcha M.",
    role: "Université de Yaoundé I, économie",
    avatarColor: "violet",
  },
  {
    quote:
      "Tariq m'explique les passages où le prof va trop vite. Je lui demande de reformuler avec un exemple concret et je comprends tout de suite.",
    initials: "BT",
    name: "Boris T.",
    role: "Université de Douala, génie civil",
    avatarColor: "green",
  },
  {
    quote:
      "Les flashcards m'ont servi en biologie cellulaire. Je révisais dans le taxi le matin, et je suis passée de 9 à 16 sur 20.",
    initials: "NK",
    name: "Nadège K.",
    role: "Université de Dschang, biologie",
    avatarColor: "brown",
  },
];

const avatarColors: Record<string, string> = {
  violet: "bg-[#320094] dark:bg-[#7e55ff] text-white",
  green: "bg-[#2f9e2c] dark:bg-[#3fcc3b] dark:text-[#0f1a0f] text-white",
  brown: "bg-[#8a5b3a] text-white",
};

export function Testimonials() {
  return (
    <section
      id="apropos"
      className="py-24 border-t border-[#e6e1d6] dark:border-[#2c2836] bg-[#f6f3ec] dark:bg-[#1c1926]"
    >
      <div className="w-full max-w-[1140px] mx-auto px-6">
        <div className="max-w-[660px] mb-14">
          <span className="inline-flex items-center gap-[11px] text-[12px] font-semibold tracking-[0.18em] uppercase text-[#6b6675] dark:text-[#a49db4] mb-[18px] before:content-[''] before:w-6 before:h-[1px] before:bg-[#d6cfc0] dark:before:bg-[#3a3546]">
            Témoignages
          </span>
          <h2 className="font-serif font-semibold text-[clamp(28px,3.6vw,40px)] leading-[1.12] tracking-[-0.015em] text-[#141219] dark:text-[#f3f0e9]">
            Ce qu&apos;en disent les étudiants
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-white dark:bg-[#1c1926] border border-[#e6e1d6] dark:border-[#2c2836] rounded-[18px] p-[28px_26px] flex flex-col gap-[18px] transition-all duration-[250ms] hover:border-[#d6cfc0] dark:hover:border-[#3a3546] hover:-translate-y-[4px] hover:shadow-[0_12px_28px_rgba(20,18,25,0.08)] dark:hover:shadow-[0_14px_30px_rgba(0,0,0,0.45)]"
            >
              <span
                aria-hidden="true"
                className="font-serif text-[44px] leading-[0.6] text-[#d6cfc0] dark:text-[#3a3546]"
              >
                &ldquo;
              </span>

              <p className="text-[15.5px] text-[#413d4a] dark:text-[#cdc7d8] leading-[1.6]">
                {t.quote}
              </p>

              <div
                className="flex gap-[2px] text-[#141219] dark:text-[#f3f0e9]"
                aria-label="Note : 5 sur 5"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[15px] h-[15px]"
                    aria-hidden="true"
                  >
                    <path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9z" />
                  </svg>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-auto pt-[18px] border-t border-[#e6e1d6] dark:border-[#2c2836]">
                <span
                  aria-hidden="true"
                  className={`w-[42px] h-[42px] rounded-full flex items-center justify-center font-serif font-semibold text-[15px] shrink-0 ${avatarColors[t.avatarColor]}`}
                >
                  {t.initials}
                </span>
                <div>
                  <b className="block text-[14.5px] text-[#141219] dark:text-[#f3f0e9]">
                    {t.name}
                  </b>
                  <span className="text-[12.5px] text-[#9a95a3] dark:text-[#7a7488]">
                    {t.role}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
