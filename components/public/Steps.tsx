const steps = [
  {
    num: "01",
    title: "Dépose ton cours",
    description:
      "PDF, Word ou photo de ton polycopié. Aucun formatage à faire de ton côté.",
  },
  {
    num: "02",
    title: "L'IA structure",
    description:
      "Résumé, définitions, quiz et flashcards sont préparés en quelques secondes.",
  },
  {
    num: "03",
    title: "Tu révises, puis tu progresses",
    description:
      "Tu t'appuies sur Tariq, tu passes les quiz et tu suis ta courbe de progression.",
  },
];

export function Steps() {
  return (
    <section
      id="comment"
      className="py-24 border-t border-[#e6e1d6] dark:border-[#2c2836]"
    >
      <div className="w-full max-w-[1140px] mx-auto px-6">
        <div className="max-w-[660px] mb-14">
          <span className="inline-flex items-center gap-[11px] text-[12px] font-semibold tracking-[0.18em] uppercase text-[#6b6675] dark:text-[#a49db4] mb-[18px] before:content-[''] before:w-6 before:h-[1px] before:bg-[#d6cfc0] dark:before:bg-[#3a3546]">
            Le parcours
          </span>
          <h2 className="font-serif font-semibold text-[clamp(28px,3.6vw,40px)] leading-[1.12] tracking-[-0.015em] text-[#141219] dark:text-[#f3f0e9]">
            Trois étapes, puis tu révises
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {/* Filet pointillé (desktop) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-[26px] left-[14%] right-[14%] border-t border-dashed border-[#d6cfc0] dark:border-[#3a3546]"
          />

          {steps.map((step) => (
            <div key={step.num} className="relative pt-[70px] group">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 w-[52px] h-[52px] rounded-full border border-[#d6cfc0] dark:border-[#3a3546] bg-white dark:bg-[#15131c] flex items-center justify-center font-serif text-[19px] font-semibold text-[#141219] dark:text-[#f3f0e9] transition-colors group-hover:bg-[#320094] group-hover:border-[#320094] group-hover:text-white dark:group-hover:bg-[#7e55ff] dark:group-hover:border-[#7e55ff]"
              >
                {step.num}
              </span>
              <h3 className="font-serif font-semibold text-[20px] leading-[1.25] text-[#141219] dark:text-[#f3f0e9] mb-2">
                {step.title}
              </h3>
              <p className="text-[15px] text-[#6b6675] dark:text-[#a49db4] leading-[1.6] max-w-[300px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
