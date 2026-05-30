"use client";

// Página de confirmação — não deve ser indexada
import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import PublyLogo from "@/components/PublyLogo";
import Footer from "@/components/Footer";
import { trackConversao } from "@/lib/analytics";

function ObrigadoContent() {
  const params = useSearchParams();
  const email = params.get("email") || "";
  const plano = params.get("plano") || "";

  // Dispara evento de conversão ao chegar nesta página
  useEffect(() => {
    if (plano) trackConversao(plano, email || undefined);
  }, [plano, email]);

  return (
    <div style={{
      minHeight: "100vh", background: "#0F0F0F",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "48px 24px",
      textAlign: "center",
    }}>
      {/* Glow de fundo */}
      <div style={{
        position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: 600, height: 400,
        background: "radial-gradient(ellipse, rgba(34,197,94,0.08) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div className="fade-up" style={{ position: "relative", maxWidth: 520 }}>
        {/* Ícone de sucesso */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <div style={{
            width: 80, height: 80, borderRadius: 24,
            background: "rgba(34,197,94,0.12)",
            border: "1px solid rgba(34,197,94,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M8 18L14 24L28 10" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Logo */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <PublyLogo size={12} gap={4} color="#4F8EF7" animated />
        </div>

        <h1 className="fade-up-1" style={{ fontSize: "clamp(28px,5vw,42px)", fontWeight: 800, color: "#fff", marginBottom: 16, letterSpacing: "-0.02em" }}>
          Conta criada com sucesso! 🎉
        </h1>

        <p className="fade-up-2" style={{ fontSize: 17, color: "#888", lineHeight: 1.7, marginBottom: 8 }}>
          {email && <>Enviamos as instruções de acesso para <strong style={{ color: "#fff" }}>{email}</strong>.</>}
        </p>

        {plano && (
          <p className="fade-up-2" style={{ fontSize: 14, color: "#666", marginBottom: 32 }}>
            Plano: <span style={{ color: "#4F8EF7", fontWeight: 600 }}>{plano}</span> — 14 dias grátis a partir de hoje
          </p>
        )}

        {/* Card de próximos passos */}
        <div className="fade-up-3" style={{
          background: "#1A1A1A", borderRadius: 16, padding: "28px 24px",
          border: "1px solid rgba(255,255,255,0.07)", marginBottom: 32, textAlign: "left",
        }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#555", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>
            Próximos passos
          </div>
          {[
            { num: "1", label: "Verifique seu e-mail", desc: "Clique no link enviado para ativar sua conta e criar sua senha." },
            { num: "2", label: "Configure o cardápio", desc: "Cadastre seus produtos, categorias e preços. Leva menos de 30 min." },
            { num: "3", label: "Imprima os QR Codes", desc: "Gere os códigos das mesas e coloque nos platôs." },
          ].map(({ num, label, desc }) => (
            <div key={num} style={{ display: "flex", gap: 16, marginBottom: 20, alignItems: "flex-start" }}>
              <div style={{
                width: 32, height: 32, borderRadius: 10, flexShrink: 0,
                background: "rgba(79,142,247,0.12)", border: "1px solid rgba(79,142,247,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 700, color: "#4F8EF7",
                fontFamily: "'DM Mono', monospace",
              }}>{num}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 13, color: "#666", lineHeight: 1.5 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up-4" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn-ghost-white">
            ← Voltar ao site
          </Link>
        </div>

        <p className="fade-up-5" style={{ color: "#444", fontSize: 13, marginTop: 24 }}>
          Dúvidas? <a href="mailto:contato@publy.tech" style={{ color: "#4F8EF7" }}>contato@publy.tech</a>
        </p>
      </div>
    </div>
  );
}

export default function ObrigadoPage() {
  return (
    <Suspense>
      <ObrigadoContent />
      <Footer />
    </Suspense>
  );
}
