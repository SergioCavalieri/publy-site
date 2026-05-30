"use client";
import { useRef, useState, useEffect, ReactNode } from "react";

interface Props {
  children: ReactNode;
  originalWidth: number;
  originalHeight: number;
}

export default function ScaledMockup({ children, originalWidth, originalHeight }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      if (ref.current) {
        const available = ref.current.offsetWidth;
        setScale(Math.min(1, available / originalWidth));
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, [originalWidth]);

  return (
    <div ref={ref} style={{ width: "100%", height: originalHeight * scale, overflow: "hidden", position: "relative" }}>
      <div style={{
        width: originalWidth,
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        position: "absolute",
        top: 0,
        left: 0,
      }}>
        {children}
      </div>
    </div>
  );
}
