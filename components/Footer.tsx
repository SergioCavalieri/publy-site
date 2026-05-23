"use client";
import Link from "next/link";
import PublyLogo from "./PublyLogo";

export default function Footer() {
  return (
    <footer style={{
      background: "#0F0F0F",
      borderTop: "1px solid rgba(255,255,255,0.07)",
      padding: "48px 24px 32px",
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <PublyLogo size={10} gap={3} withName nameSize={16} dark animated />
            <p style={{ color: "#666", fontSize: 14, marginTop: 16, lineHeight: 1.7, maxWidth: 300 }}>
              O sistema de pedidos completo para restaurantes, cafés, pizzarias, bares e estabelecimentos de alimentação. QR Code, kanban e gestão em tempo real.
            </p>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>
              Produto
            </div>
            {[
              ["Funcionalidades", "/#funcionalidades"],
              ["Planos e preços", "/planos"],
              ["Começar grátis", "/planos"],
            ].map(([label, href]) => (
              <Link key={label} href={href} className="footer-link">
                {label}
              </Link>
            ))}
          </div>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>
              Legal
            </div>
            {[
              ["Termos de uso", "/termos"],
              ["Privacidade", "/privacidade"],
              ["Contato", "/contato"],
            ].map(([label, href]) => (
              <Link key={label} href={href} className="footer-link">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "#444", fontSize: 13 }}>
            © {new Date().getFullYear()} Publy. Todos os direitos reservados.
          </span>
          <span style={{ color: "#444", fontSize: 13, fontFamily: "'DM Mono', monospace" }}>
            v1.0
          </span>
        </div>
      </div>
    </footer>
  );
}
