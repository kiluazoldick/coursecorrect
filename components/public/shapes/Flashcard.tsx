import { cn } from "@/lib/utils";

type FlashcardProps = {
  className?: string;
};

export function Flashcard({ className }: FlashcardProps) {
  return (
    <div
      className={cn(
        "rounded-[12px] bg-[#320094] dark:bg-[#7e55ff] text-white p-[18px_20px] shadow-[0_12px_28px_rgba(20,18,25,0.08)] dark:shadow-[0_14px_30px_rgba(0,0,0,0.45)]",
        className,
      )}
    >
      <span className="text-[11px] tracking-[0.12em] uppercase opacity-70">
        Flashcard 12 / 40
      </span>
      <p className="font-serif text-[17px] leading-[1.35] mt-[10px] mb-[14px]">
        Qu&apos;est-ce que la souveraineté nationale ?
      </p>
      <span className="text-[12.5px] font-semibold border-b border-white/50 pb-[2px]">
        Retourner la carte
      </span>
    </div>
  );
}
