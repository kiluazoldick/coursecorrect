import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="py-24 border-t border-[#e6e1d6] dark:border-[#2c2836]">
      <div className="w-full max-w-[1140px] mx-auto px-6">
        <div className="relative rounded-[18px] bg-[#320094] dark:bg-[#3b1fa0] bg-[radial-gradient(rgba(255,255,255,0.09)_1px,transparent_1px)] bg-[length:22px_22px] px-10 py-[78px] text-center overflow-hidden">
          <h2 className="font-serif font-semibold text-[clamp(28px,3.6vw,40px)] leading-[1.12] tracking-[-0.015em] text-white max-w-[640px] mx-auto">
            Prêt à reprendre tes révisions en main ?
          </h2>

          <p className="text-white/70 mt-4 text-[16.5px]">
            Dépose ton premier cours ce soir, révise-le dès demain matin.
          </p>

          <div className="flex justify-center mt-[30px]">
            <Button href="/signup" variant="deep" size="lg">
              Commencer maintenant
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
          </div>

          <p className="mt-[14px] text-[14px] text-white/60">
            Gratuit, sans carte bancaire.
          </p>
        </div>
      </div>
    </section>
  );
}
