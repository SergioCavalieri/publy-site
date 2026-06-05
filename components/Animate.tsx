"use client";

import { useRef, useEffect, useState } from "react";
import type { ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

function useInView(margin = "-72px") {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { rootMargin: margin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  return { ref, inView };
}

function cls(...parts: (string | undefined | false)[]) {
  return parts.filter(Boolean).join(" ");
}

export function FadeUp({ children, delay = 0, className, style }: Props) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref}
      className={cls("anim-fade-up", inView && "is-visible", className)}
      style={{ transitionDelay: delay ? `${delay}s` : undefined, ...style }}
    >{children}</div>
  );
}

export function FadeIn({ children, delay = 0, className, style }: Props) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref}
      className={cls("anim-fade-up", inView && "is-visible", className)}
      style={{ transitionDelay: delay ? `${delay}s` : undefined, ...style }}
    >{children}</div>
  );
}

export function ScaleIn({ children, delay = 0, className, style }: Props) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref}
      className={cls("anim-fade-up", inView && "is-visible", className)}
      style={{ transitionDelay: delay ? `${delay}s` : undefined, ...style }}
    >{children}</div>
  );
}

export function SlideLeft({ children, delay = 0, className, style }: Props) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref}
      className={cls("anim-slide-left slide-animate", inView && "is-visible", className)}
      style={{ transitionDelay: delay ? `${delay}s` : undefined, ...style }}
    >{children}</div>
  );
}

export function SlideRight({ children, delay = 0, className, style }: Props) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref}
      className={cls("anim-slide-right slide-animate", inView && "is-visible", className)}
      style={{ transitionDelay: delay ? `${delay}s` : undefined, ...style }}
    >{children}</div>
  );
}

interface StaggerProps extends Props { stagger?: number; }
export function Stagger({ children, className, style }: StaggerProps) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref}
      className={cls(inView ? "is-visible" : undefined, className)}
      style={style}
    >{children}</div>
  );
}

export function StaggerItem({ children, className, style }: Props) {
  return (
    <div className={cls("anim-stagger-item", className)} style={style}>
      {children}
    </div>
  );
}

export function HoverCard({ children, className, style }: Props) {
  return (
    <div className={cls("hover-card", className)} style={style}>
      {children}
    </div>
  );
}

const HERO_DELAY_CLASS: Record<number, string> = {
  0:    "fade-up",
  0.08: "fade-up-1",
  0.15: "fade-up-1",
  0.16: "fade-up-2",
  0.25: "fade-up-2",
  0.32: "fade-up-3",
  0.35: "fade-up-3",
  0.40: "fade-up-4",
  0.45: "fade-up-4",
  0.48: "fade-up-5",
  0.55: "fade-up-5",
  0.7:  "fade-up-6",
};

export function HeroFade({ children, delay = 0, className, style }: Props) {
  const animClass = HERO_DELAY_CLASS[delay] ?? "fade-up";
  return (
    <div className={cls(animClass, className)} style={style}>
      {children}
    </div>
  );
}
