"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ASSUNTOS = [
  "Dúvida sobre o sistema",
  "Dúvida sobre planos e preços",
  "Suporte técnico",
  "Problema com pagamento",
  "Solicitar demonstração",
  "Parceria comercial",
  "Outro",
];

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#666", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
        {label}{required && <span style={{ color: "#4F8EF7", marginLeft: 3 }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const INPUT = {
  width: "100%", padding: "13px 16px",
  background: "#fff", border: "1.5px solid #E0DCD4",
  borderRadius: 10, fontSize: 14, color: "#0F0F0F",
  outline: "none", transition: "border-color 0.15s, box-shadow 0.15s",
  fontFamily: "inherit",
} as React.CSSProperties;

const INFO_CARDS = [
  { icon: "✉️", title: "E-mail", desc: "contato@publy.app", sub: "Respondemos em até 24h úteis" },
  { icon: "💬", title: "Suporte", desc: "suporte@publy.app", sub: "Para clientes com assinatura ativa" },
  { icon: "🕐", title: "Horário", desc: "Seg–Sex, 9h às 18h", sub: "Horário de Brasília (GMT-3)" },
];

export default function ContatoPage() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });
  const [enviando, setEnviando] = useState(false);
  const [resultado, setResultado] = useState<{ ok: boolean; msg: string } | null>(null);
  const [focado, setFocado] = useState<string | null>(null);

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const inputStyle = (field: string) => ({
    ...INPUT,
    borderColor: focado === field ? "#4F8EF7" : "#E0DCD4",
    boxShadow: focado === field ? "0 0 0 3px rgba(79,142,247,0.12)" : "none",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setResultado(null);
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao enviar");
      setResultado({ ok: true, msg: data.mensagem });
      setForm({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });
    } catch (err: unknown) {
      setResultado({ ok: false, msg: err instanceof Error ? err.message : "Erro inesperado." });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div style={{ background: "#0F0F0F", padding: "100px 24px 56px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#4F8EF7", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 14 }}>
            Fale conosco
          </div>
          <h1 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 16 }}>
            Como podemos ajudar?
          </h1>
          <p style={{ fontSize: 17, color: "#666", lineHeight: 1.7 }}>
            Tem dúvidas sobre o Publy, precisa de suporte ou quer conhecer melhor o sistema? Nos escreva — respondemos rápido.
          </p>
        </div>
      </div>

      <div style={{ background: "#F2F0EB", padding: "56px 24px 80px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>

          {/* Cards de info */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 48 }}>
            {INFO_CARDS.map(({ icon, title, desc, sub }) => (
              <div key={title} style={{
                background: "#fff", borderRadius: 16, padding: "24px 20px",
                border: "1px solid #E0DCD4", textAlign: "center",
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>{title}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#0F0F0F", marginBottom: 4 }}>{desc}</div>
                <div style={{ fontSize: 12, color: "#888" }}>{sub}</div>
              </div>
            ))}
          </div>

          {/* Grid formulário + lateral */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 32, alignItems: "start" }}>

            {/* ── Formulário ── */}
            <div style={{ background: "#fff", borderRadius: 20, padding: "40px 36px", border: "1px solid #E0DCD4", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: "#0F0F0F", marginBottom: 6 }}>Envie sua mensagem</h2>
              <p style={{ fontSize: 14, color: "#888", marginBottom: 32 }}>Todos os campos marcados com * são obrigatórios.</p>

              {resultado && (
                <div style={{
                  padding: "16px 20px", borderRadius: 12, marginBottom: 24,
                  background: resultado.ok ? "rgba(34,197,94,0.08)" : "rgba(239,68,68,0.08)",
                  border: `1px solid ${resultado.ok ? "rgba(34,197,94,0.25)" : "rgba(239,68,68,0.25)"}`,
                  display: "flex", alignItems: "flex-start", gap: 12,
                }}>
                  <span style={{ fontSize: 20, lineHeight: 1 }}>{resultado.ok ? "✅" : "❌"}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: resultado.ok ? "#16a34a" : "#dc2626", marginBottom: 4 }}>
                      {resultado.ok ? "Mensagem enviada!" : "Erro ao enviar"}
                    </div>
                    <div style={{ fontSize: 13, color: resultado.ok ? "#166534" : "#991b1b" }}>{resultado.msg}</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
                  <Field label="Nome completo" required>
                    <input
                      style={inputStyle("nome")}
                      value={form.nome}
                      onChange={(e) => set("nome", e.target.value)}
                      onFocus={() => setFocado("nome")}
                      onBlur={() => setFocado(null)}
                      placeholder="João Silva"
                      required
                    />
                  </Field>
                  <Field label="E-mail" required>
                    <input
                      style={inputStyle("email")}
                      type="email"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      onFocus={() => setFocado("email")}
                      onBlur={() => setFocado(null)}
                      placeholder="joao@seunegocio.com"
                      required
                    />
                  </Field>
                  <Field label="Telefone / WhatsApp">
                    <input
                      style={inputStyle("telefone")}
                      value={form.telefone}
                      onChange={(e) => set("telefone", e.target.value)}
                      onFocus={() => setFocado("telefone")}
                      onBlur={() => setFocado(null)}
                      placeholder="(11) 99999-0000"
                    />
                  </Field>
                  <Field label="Assunto">
                    <select
                      style={inputStyle("assunto")}
                      value={form.assunto}
                      onChange={(e) => set("assunto", e.target.value)}
                      onFocus={() => setFocado("assunto")}
                      onBlur={() => setFocado(null)}
                    >
                      <option value="">Selecione...</option>
                      {ASSUNTOS.map((a) => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </Field>
                </div>

                <Field label="Mensagem" required>
                  <textarea
                    style={{ ...inputStyle("mensagem"), minHeight: 140, resize: "vertical" as const }}
                    value={form.mensagem}
                    onChange={(e) => set("mensagem", e.target.value)}
                    onFocus={() => setFocado("mensagem")}
                    onBlur={() => setFocado(null)}
                    placeholder="Descreva sua dúvida ou solicitação com o máximo de detalhes possível..."
                    required
                  />
                </Field>

                <button
                  type="submit"
                  disabled={enviando}
                  className="btn-primary"
                  style={{ width: "100%", fontSize: 15, padding: "14px" }}
                >
                  {enviando ? (
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                      <span style={{ width: 16, height: 16, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", animation: "spin 0.8s linear infinite", display: "inline-block" }} />
                      Enviando...
                    </span>
                  ) : "Enviar mensagem →"}
                </button>

                <p style={{ fontSize: 12, color: "#aaa", textAlign: "center", marginTop: 12 }}>
                  Ao enviar, você concorda com nossa{" "}
                  <Link href="/privacidade" style={{ color: "#4F8EF7" }}>Política de Privacidade</Link>.
                </p>
              </form>
            </div>

            {/* ── Lateral ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

              {/* Trial CTA */}
              <div style={{ background: "#0F0F0F", borderRadius: 20, padding: 28, border: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 10, lineHeight: 1.3 }}>
                  Quer experimentar antes de entrar em contato?
                </div>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, marginBottom: 20 }}>
                  Crie uma conta grátis e teste o Publy por 14 dias — sem cartão, sem compromisso.
                </p>
                <Link href="/planos" className="btn-primary" style={{ display: "block", textAlign: "center", fontSize: 14, padding: "12px" }}>
                  Começar trial grátis →
                </Link>
              </div>

              {/* FAQ rápido */}
              <div style={{ background: "#fff", borderRadius: 20, padding: 24, border: "1px solid #E0DCD4" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#0F0F0F", marginBottom: 16 }}>Respostas rápidas</div>
                {[
                  ["Quanto custa?", "A partir de R$39,90/mês. Veja os planos →", "/planos"],
                  ["Tem contrato?", "Não. Assinatura mensal sem fidelidade.", null],
                  ["Funciona no celular?", "Sim, 100% responsivo.", null],
                  ["Preciso instalar algo?", "Não. Tudo pelo navegador.", null],
                ].map(([p, r, link]) => (
                  <div key={p as string} style={{ marginBottom: 14, paddingBottom: 14, borderBottom: "1px solid #F0EDE8" }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#0F0F0F", marginBottom: 4 }}>{p}</div>
                    <div style={{ fontSize: 12, color: "#888" }}>
                      {link
                        ? <Link href={link as string} style={{ color: "#4F8EF7" }}>{r}</Link>
                        : r}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </>
  );
}
