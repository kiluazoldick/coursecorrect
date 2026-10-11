import Image from "next/image";
import { cn } from "@/lib/utils";

type PrintFrameProps = {
  src: string;
  caption: string;
  alt?: string;
  imageHeight?: number;
  className?: string;
};

export function PrintFrame({
  src,
  caption,
  alt = "",
  imageHeight = 118,
  className,
}: PrintFrameProps) {
  return (
    <figure
      className={cn(
        "bg-white dark:bg-[#1c1926] border border-[#e6e1d6] dark:border-[#2c2836] rounded-[12px] p-[9px_9px_11px] shadow-[0_12px_28px_rgba(20,18,25,0.08)] dark:shadow-[0_14px_30px_rgba(0,0,0,0.45)]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={400}
        height={imageHeight}
        className="rounded-[6px] object-cover w-full saturate-[0.92]"
        style={{ height: `${imageHeight}px` }}
      />
      <figcaption className="font-hand text-[17px] text-[#6b6675] dark:text-[#a49db4] mt-[7px] text-center">
        {caption}
      </figcaption>
    </figure>
  );
}
