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
      <Navbar />
      <div style={{ background: "#F2F0EB", minHeight: "100vh", paddingTop: 80 }}>

        {/* Hero */}
        <div style={{ background: "#0F0F0F", padding: "64px 24px 56px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#4F8EF7", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 14 }}>
              {subtitle}
            </div>
            <h1 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 16 }}>
              {title}
            </h1>
            <p style={{ fontSize: 14, color: "#555", fontFamily: "'DM Mono', monospace" }}>
              Última atualização: {updatedAt}
            </p>
          </div>
        </div>

        {/* Conteúdo */}
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "56px 24px 80px", display: "grid", gridTemplateColumns: "200px 1fr", gap: 48, alignItems: "start" }}>

          {/* Índice lateral */}
          <aside style={{ position: "sticky", top: 100 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>
              Seções
            </div>
            {sections.map(({ title: t }, i) => (
              <a
                key={i}
                href={`#secao-${i + 1}`}
                style={{ display: "block", fontSize: 13, color: "#888", marginBottom: 10, lineHeight: 1.4, transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#4F8EF7")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
              >
                {i + 1}. {t}
              </a>
            ))}
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid #E0DCD4" }}>
              <Link href="/contato" style={{ fontSize: 12, color: "#4F8EF7", fontWeight: 600 }}>
                Dúvidas? Fale conosco →
              </Link>
            </div>
          </aside>

          {/* Artigos */}
          <article>
            {sections.map(({ title: t, content }, i) => (
              <section key={i} id={`secao-${i + 1}`} style={{ marginBottom: 48 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "#0F0F0F", marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid #E0DCD4" }}>
                  {i + 1}. {t}
                </h2>
                <div style={{ fontSize: 14, color: "#555", lineHeight: 1.85 }}>
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
