"use client";
import Link from "next/link";
import PublyLogo from "./PublyLogo";

export default function Navbar({ dark = true }: { dark?: boolean }) {
  // Sempre dark — site com tema escuro global
  void dark; // prop mantida por compatibilidade

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(15,15,15,0.85)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
    }}>
      <div style={{
        maxWidth: 1120, margin: "0 auto",
        padding: "0 24px",
        height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link href="/">
          <PublyLogo size={10} gap={3} withName nameSize={16} dark animated />
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/planos" style={{
            padding: "8px 16px", fontSize: 14, fontWeight: 500, color: "#888",
            borderRadius: 8, transition: "color 0.15s",
          }}>
            Planos
          </Link>
          <Link href="/#funcionalidades" style={{
            padding: "8px 16px", fontSize: 14, fontWeight: 500, color: "#888",
            borderRadius: 8, transition: "color 0.15s",
          }}>
            Funcionalidades
          </Link>
          <Link href="/contato" style={{
            padding: "8px 16px", fontSize: 14, fontWeight: 500, color: "#888",
            borderRadius: 8, transition: "color 0.15s",
          }}>
            Contato
          </Link>
          <Link href="/planos" className="btn-primary" style={{ padding: "10px 22px", fontSize: 14 }}>
            Começar grátis
          </Link>
        </div>
      </div>
    </nav>
  );
}
