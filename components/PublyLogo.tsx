"use client";

interface PublyLogoProps {
  size?: number;
  gap?: number;
  color?: string;
  radius?: number;
  animated?: boolean;
  withName?: boolean;
  nameColor?: string;
  nameSize?: number;
  dark?: boolean;
}

export default function PublyLogo({
  size = 10,
  gap = 3,
  color = "#4F8EF7",
  radius,
  animated = false,
  withName = false,
  nameColor,
  nameSize = 18,
  dark = false,
}: PublyLogoProps) {
  const r = radius ?? Math.max(2, Math.round(size * 0.3));
  const defaultNameColor = dark ? "#ffffff" : "#0F0F0F";

  const cells = [
    { opacity: 1,    anim: animated ? "publyPulse1 2.4s ease-in-out infinite" : undefined },
    { opacity: 0.45, anim: animated ? "publyPulse2 2.4s ease-in-out infinite 0.3s" : undefined },
    { opacity: 0.45, anim: animated ? "publyPulse2 2.4s ease-in-out infinite 0.6s" : undefined },
    { opacity: 1,    anim: animated ? "publyPulse1 2.4s ease-in-out infinite 0.9s" : undefined },
    { opacity: 1,    anim: animated ? "publyPulse3 2.4s ease-in-out infinite 1.2s" : undefined },
    { opacity: 0.2,  anim: animated ? "publyPulse2 2.4s ease-in-out infinite 1.5s" : undefined },
  ];

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: withName ? 10 : 0 }}>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(2,${size}px)`, gap }}>
        {cells.map((cell, i) => (
          <div
            key={i}
            style={{
              width: size, height: size,
              borderRadius: r,
              background: color,
              opacity: cell.opacity,
              animation: cell.anim,
            }}
          />
        ))}
      </div>
      {withName && (
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300, fontSize: nameSize,
          color: nameColor ?? defaultNameColor,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          lineHeight: 1,
        }}>
          Publy
        </span>
      )}
    </div>
  );
}
