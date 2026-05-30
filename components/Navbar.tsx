"use client";
import { useState } from "react";
import Link from "next/link";
import PublyLogo from "./PublyLogo";

export default function Navbar({ dark = true }: { dark?: boolean }) {
  void dark;
  const [open, setOpen] = useState(false);

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
        <Link href="/" onClick={() => setOpen(false)}>
          <PublyLogo size={10} gap={3} withName nameSize={16} dark animated />
        </Link>

        {/* Desktop nav */}
        <div className="navbar-desktop" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/planos" style={{ padding: "8px 16px", fontSize: 14, fontWeight: 500, color: "#888", borderRadius: 8 }}>Planos</Link>
          <Link href="/#funcionalidades" style={{ padding: "8px 16px", fontSize: 14, fontWeight: 500, color: "#888", borderRadius: 8 }}>Funcionalidades</Link>
          <Link href="/contato" style={{ padding: "8px 16px", fontSize: 14, fontWeight: 500, color: "#888", borderRadius: 8 }}>Contato</Link>
          <Link href="/planos" className="btn-primary" style={{ padding: "10px 22px", fontSize: 14 }}>Começar grátis</Link>
        </div>

        {/* Hamburger */}
        <button
          className="navbar-hamburger"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "#e8e8e8", padding: 8, display: "none", flexDirection: "column", gap: 5, cursor: "pointer" }}
          aria-label="Menu"
        >
          <span style={{ display: "block", width: 22, height: 2, background: open ? "transparent" : "#e8e8e8", transition: "all 0.2s" }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#e8e8e8", transform: open ? "rotate(45deg) translate(5px, -5px)" : "none", transition: "all 0.2s" }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#e8e8e8", transform: open ? "rotate(-45deg) translate(5px, 5px)" : "none", transition: "all 0.2s" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: "rgba(15,15,15,0.97)", borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 4,
        }}>
          <Link href="/planos" onClick={() => setOpen(false)} style={{ padding: "12px 0", fontSize: 16, fontWeight: 500, color: "#e8e8e8", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>Planos</Link>
          <Link href="/#funcionalidades" onClick={() => setOpen(false)} style={{ padding: "12px 0", fontSize: 16, fontWeight: 500, color: "#e8e8e8", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>Funcionalidades</Link>
          <Link href="/contato" onClick={() => setOpen(false)} style={{ padding: "12px 0", fontSize: 16, fontWeight: 500, color: "#e8e8e8", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>Contato</Link>
          <Link href="/planos" className="btn-primary" onClick={() => setOpen(false)} style={{ marginTop: 12, textAlign: "center" }}>Começar grátis</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .navbar-desktop { display: none !important; }
          .navbar-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
