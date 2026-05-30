"use client";
import { useRef, useState, useEffect, ReactNode } from "react";

interface Props {
  children: ReactNode;
  originalWidth: number;
  originalHeight: number;
}

export default function ScaledMockup({ children, originalWidth, originalHeight }: Props) {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      if (!outerRef.current) return;
      const available = outerRef.current.getBoundingClientRect().width;
      if (available > 0) {
        setScale(Math.min(1, available / originalWidth));
      }
    };
    // Pequeno delay para garantir que o layout está pronto
    const t = setTimeout(update, 50);
    const ro = new ResizeObserver(update);
    if (outerRef.current) ro.observe(outerRef.current);
    return () => { clearTimeout(t); ro.disconnect(); };
  }, [originalWidth]);

  const containerHeight = Math.max(50, originalHeight * scale);

  return (
    <div ref={outerRef} style={{ width: "100%", overflow: "hidden", position: "relative", height: containerHeight }}>
      <div style={{
        width: originalWidth,
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}>
        {children}
      </div>
    </div>
  );
}
