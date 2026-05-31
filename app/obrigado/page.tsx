"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import PublyLogo from "@/components/PublyLogo";
import Footer from "@/components/Footer";
import { trackConversao } from "@/lib/analytics";

const C = "#4F8EF7";
const GREEN = "#22C55E";

type Estado = "aguardando_confirmacao" | "confirmado" | "ja_confirmado" | "link_expirado" | "link_invalido";

function ObrigadoContent() {
  const params = useSearchParams();
  const email   = params.get("email")   || "";
  const plano   = params.get("plano")   || "";
  const confirmado   = params.get("confirmado")   === "true";
  const jaConfirmado = params.get("ja_confirmado") === "true";
  const erro = params.get("erro") || "";

  const [reenviando, setReenviando] = useState(false);
  const [reenviado,  setReenviado]  = useState(false);

  const estado: Estado =
    confirmado   ? "confirmado"   :
    jaConfirmado ? "ja_confirmado" :
    erro === "link_expirado" ? "link_expirado" :
    erro === "link_invalido" ? "link_invalido" :
    "aguardando_confirmacao";

  useEffect(() => {
    if (estado === "confirmado" && plano) trackConversao(plano, email || undefined);
  }, [estado, plano, email]);

  const reenviarConfirmacao = async () => {
    if (!email || reenviando) return;
    setReenviando(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_SAAS_API_URL}/api/v1/public/reenviar-confirmacao`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setReenviado(true);
    } catch {}
    finally { setReenviando(false); }
  };

  const configs: Record<Estado, {
    iconColor: string; iconPath: string; titulo: string; subtitulo: string; corpo: React.ReactNode;
  }> = {
    aguardando_confirmacao: {
      iconColor: C,
      iconPath: "M18 8L8 18M8 8l10 10",
      titulo: "Confirme seu e-mail",
      subtitulo: email ? `Enviamos um link para ${email}` : "Verifique sua caixa de entrada",
      corpo: (
        <>
          <div style={{ background: "#1A1A1A", borderRadius: 16, padding: "24px", border: "1px solid rgba(255,255,255,0.07)", marginBottom: 28, textAlign: "left" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#555", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>Próximos passos</div>
            {[
              { num: "1", label: "Confirme seu e-mail", desc: "Clique no link que enviamos para ativar sua conta." },
              { num: "2", label: "Aguarde a configuração", desc: "Sua instância será criada automaticamente (~2 min)." },
              { num: "3", label: "Acesse o sistema", desc: "Você receberá as credenciais por e-mail." },
            ].map(({ num, label, desc }) => (
              <div key={num} style={{ display: "flex", gap: 14, marginBottom: 18, alignItems: "flex-start" }}>
                <div style={{ width: 30, height: 30, borderRadius: 9, flexShrink: 0, background: "rgba(79,142,247,0.12)", border: "1px solid rgba(79,142,247,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: C, fontFamily: "'DM Mono', monospace" }}>{num}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 3 }}>{label}</div>
                  <div style={{ fontSize: 13, color: "#666", lineHeight: 1.5 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
          {email && (
            <p style={{ fontSize: 13, color: "#555", marginBottom: 8 }}>
              Não recebeu?{" "}
              {reenviado
                ? <span style={{ color: GREEN }}>Novo link enviado!</span>
                : <button onClick={reenviarConfirmacao} disabled={reenviando} style={{ background: "none", border: "none", color: C, cursor: "pointer", fontSize: 13, padding: 0, textDecoration: "underline" }}>
                    {reenviando ? "Enviando..." : "Reenviar link"}
                  </button>
              }
            </p>
          )}
        </>
      ),
    },

    confirmado: {
      iconColor: GREEN,
      iconPath: "M8 18L14 24L28 10",
      titulo: "E-mail confirmado!",
      subtitulo: "Sua instância está sendo configurada",
      corpo: (
        <>
          <div style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 14, padding: "20px 24px", marginBottom: 28 }}>
            <p style={{ color: "#e8e8e8", fontSize: 14, margin: 0, lineHeight: 1.7 }}>
              Em aproximadamente <strong style={{ color: GREEN }}>2–3 minutos</strong> você receberá um e-mail em <strong style={{ color: "#fff" }}>{email}</strong> com o link de acesso, login e senha do seu sistema.
            </p>
          </div>
          {plano && <p style={{ fontSize: 14, color: "#666", marginBottom: 24 }}>Plano: <span style={{ color: C, fontWeight: 600 }}>{plano}</span> — 14 dias grátis</p>}
        </>
      ),
    },

    ja_confirmado: {
      iconColor: GREEN,
      iconPath: "M8 18L14 24L28 10",
      titulo: "E-mail já confirmado",
      subtitulo: "Sua conta já está ativa",
      corpo: <p style={{ fontSize: 14, color: "#666", marginBottom: 28 }}>Verifique sua caixa de entrada para encontrar as credenciais de acesso.</p>,
    },

    link_expirado: {
      iconColor: "#f59e0b",
      iconPath: "M18 6v12M18 24v2",
      titulo: "Link expirado",
      subtitulo: "Este link de confirmação não é mais válido",
      corpo: (
        <>
          <p style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>Os links de confirmação expiram em 24 horas.</p>
          {email && (
            <div style={{ marginBottom: 28 }}>
              {reenviado
                ? <div style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 10, padding: "14px 18px", fontSize: 14, color: GREEN }}>Novo link enviado para {email}!</div>
                : <button onClick={reenviarConfirmacao} disabled={reenviando} className="btn-primary" style={{ width: "100%", fontSize: 15 }}>
                    {reenviando ? "Enviando..." : "Solicitar novo link →"}
                  </button>
              }
            </div>
          )}
        </>
      ),
    },

    link_invalido: {
      iconColor: "#ef4444",
      iconPath: "M6 6l24 24M30 6L6 30",
      titulo: "Link inválido",
      subtitulo: "Este link de confirmação não existe",
      corpo: <p style={{ fontSize: 14, color: "#666", marginBottom: 28 }}>O link pode ter sido usado anteriormente ou está incorreto.</p>,
    },
  };

  const cfg = configs[estado];

  return (
    <div style={{ minHeight: "100vh", background: "#0F0F0F", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 24px", textAlign: "center" }}>
      <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 400, background: `radial-gradient(ellipse, ${cfg.iconColor}14 0%, transparent 65%)`, pointerEvents: "none" }} />

      <div className="fade-up" style={{ position: "relative", maxWidth: 520, width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <div style={{ width: 72, height: 72, borderRadius: 22, background: `${cfg.iconColor}20`, border: `1px solid ${cfg.iconColor}40`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
              <path d={cfg.iconPath} stroke={cfg.iconColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <PublyLogo size={11} gap={3} color={C} animated />
        </div>

        <h1 className="fade-up-1" style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, color: "#fff", marginBottom: 10, letterSpacing: "-0.02em" }}>
          {cfg.titulo}
        </h1>
        <p className="fade-up-2" style={{ fontSize: 16, color: "#888", marginBottom: 28, lineHeight: 1.6 }}>
          {cfg.subtitulo}
        </p>

        <div className="fade-up-3">{cfg.corpo}</div>

        <div className="fade-up-4" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn-ghost-white">← Voltar ao site</Link>
        </div>

        <p className="fade-up-5" style={{ color: "#444", fontSize: 13, marginTop: 20 }}>
          Dúvidas? <a href="mailto:contato@publy.tech" style={{ color: C }}>contato@publy.tech</a>
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
