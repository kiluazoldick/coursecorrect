type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="py-16 lg:py-24 border-b border-[#e6e1d6] dark:border-[#2c2836]">
      <div className="w-full max-w-[1140px] mx-auto px-6">
        <div className="max-w-[760px]">
          <span className="inline-flex items-center gap-[11px] text-[12px] font-semibold tracking-[0.18em] uppercase text-[#6b6675] dark:text-[#a49db4] mb-[18px] before:content-[''] before:w-6 before:h-[1px] before:bg-[#d6cfc0] dark:before:bg-[#3a3546]">
            {eyebrow}
          </span>
          <h1 className="font-serif font-semibold text-[clamp(32px,4.5vw,52px)] leading-[1.1] tracking-[-0.015em] text-[#141219] dark:text-[#f3f0e9]">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-[18px] text-[#6b6675] dark:text-[#a49db4] leading-[1.65]">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
