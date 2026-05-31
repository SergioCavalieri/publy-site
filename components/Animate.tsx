"use client";

import { motion } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "-72px" };

interface Props {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

/** Fade + sobe ao entrar na viewport (scroll) */
export function FadeUp({ children, delay = 0, duration = 0.6, className, style }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration, delay, ease }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/** Só fade, sem movimento */
export function FadeIn({ children, delay = 0, duration = 0.7, className, style }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
      transition={{ duration, delay, ease }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/** Aparece com leve escala (zoom suave) */
export function ScaleIn({ children, delay = 0, duration = 0.55, className, style }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewport}
      transition={{ duration, delay, ease }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/** Desliza da esquerda */
export function SlideLeft({ children, delay = 0, duration = 0.7, className, style }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -56 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewport}
      transition={{ duration, delay, ease }}
      className={`slide-animate ${className ?? ""}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/** Desliza da direita */
export function SlideRight({ children, delay = 0, duration = 0.7, className, style }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 56 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewport}
      transition={{ duration, delay, ease }}
      className={`slide-animate ${className ?? ""}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/** Container que anima os filhos em cascata (stagger) */
interface StaggerProps extends Props { stagger?: number; }
export function Stagger({ children, delay = 0, stagger = 0.1, className, style }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/** Item dentro de <Stagger> */
export function StaggerItem({ children, className, style }: Props) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/**
 * Animação do Hero — entra ao carregar a página (não espera scroll).
 * Cada elemento tem um delay diferente para criar sequência fluida.
 */
export function HeroFade({ children, delay = 0, className, style }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/** Card com levitação suave no hover */
export function HoverCard({ children, className, style }: Props) {
  return (
    <motion.div
      whileHover={{ y: -7, scale: 1.018 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
