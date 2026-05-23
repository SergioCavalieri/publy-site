"use client";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LegalSection {
  title: string;
  content: React.ReactNode;
}

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  updatedAt: string;
  sections: LegalSection[];
}

export default function LegalLayout({ title, subtitle, updatedAt, sections }: LegalLayoutProps) {
  return (
    <>
      <Navbar dark />
      <div style={{ minHeight: "100vh", paddingTop: 80 }}>

        {/* Hero */}
        <div style={{ padding: "64px 24px 56px", position: "relative", overflow: "hidden" }}>
          {/* Glow sutil */}
          <div style={{
            position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
            width: 600, height: 200,
            background: "radial-gradient(ellipse at 50% 0%, rgba(79,142,247,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#4F8EF7", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 14 }}>
              {subtitle}
            </div>
            <h1 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", marginBottom: 16 }}>
              {title}
            </h1>
            <p style={{ fontSize: 14, color: "#555", fontFamily: "'DM Mono', monospace" }}>
              Última atualização: {updatedAt}
            </p>
          </div>
        </div>

        {/* Divisor */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

        {/* Conteúdo */}
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "56px 24px 80px", display: "grid", gridTemplateColumns: "200px 1fr", gap: 48, alignItems: "start" }}>

          {/* Índice lateral */}
          <aside style={{ position: "sticky", top: 100 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>
              Seções
            </div>
            {sections.map(({ title: t }, i) => (
              <a
                key={i}
                href={`#secao-${i + 1}`}
                style={{ display: "block", fontSize: 13, color: "#555", marginBottom: 10, lineHeight: 1.4, transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#4F8EF7")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                {i + 1}. {t}
              </a>
            ))}
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <Link href="/contato" style={{ fontSize: 12, color: "#4F8EF7", fontWeight: 600 }}>
                Dúvidas? Fale conosco →
              </Link>
            </div>
          </aside>

          {/* Artigos */}
          <article>
            {sections.map(({ title: t, content }, i) => (
              <section key={i} id={`secao-${i + 1}`} style={{ marginBottom: 48 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "#ffffff", marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  {i + 1}. {t}
                </h2>
                <div style={{ fontSize: 14, color: "#888", lineHeight: 1.85 }}>
                  {content}
                </div>
              </section>
            ))}
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
}
