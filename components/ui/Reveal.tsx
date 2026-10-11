"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setRevealed(true);
        observer.unobserve(entry.target);
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-revealed={revealed}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "opacity-0 translate-y-[18px] transition-[opacity,transform] duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)] data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0 motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function RevealGrid({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function revealDelay(index: number) {
  return Math.min(index * 60, 360);
}

export function useReveal() {
  return Reveal;
}

export function RevealSection({ children, className }: Omit<RevealProps, "delay">) {
  return <Reveal className={className}>{children}</Reveal>;
}

export function RevealItem({ children, className, delay }: RevealProps) {
  return (
    <Reveal className={className} delay={delay}>
      {children}
    </Reveal>
  );
}

export function useRevealRef() {
  return useRef<HTMLDivElement>(null);
}

export default Reveal;
