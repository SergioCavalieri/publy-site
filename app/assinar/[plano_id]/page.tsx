"use client";

// Metadata é definido via generateMetadata no servidor
// Esta é uma página client-side — o título é definido dinamicamente
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PublyLogo from "@/components/PublyLogo";
import type { Plano } from "@/lib/api";

const UF_LIST = ["","AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];

const fmtVal = (v: number) =>
  Number(v).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label className="field-label">{label}</label>
      {children}
    </div>
  );
}

export default function AssinarPage() {
  const { plano_id } = useParams<{ plano_id: string }>();
  const router = useRouter();

  const [plano, setPlano] = useState<Plano | null>(null);
  const [loading, setLoading] = useState(true);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState("");
  const [aceitouTermos, setAceitouTermos] = useState(false);

  const [form, setForm] = useState({
    nome: "", email: "", telefone: "",
    razao_social: "", cnpj: "", nome_estabelecimento: "",
    cep: "", logradouro: "", numero: "", complemento: "",
    bairro: "", cidade: "", estado: "",
  });

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const buscarCep = async (cep: string) => {
    const limpo = cep.replace(/\D/g, "");
    if (limpo.length !== 8) return;
    try {
      const res = await fetch(`https://viacep.com.br/ws/${limpo}/json/`);
      const data = await res.json();
      if (!data.erro) {
        setForm((f) => ({
          ...f,
          logradouro: data.logradouro || f.logradouro,
          bairro:     data.bairro     || f.bairro,
          cidade:     data.localidade || f.cidade,
          estado:     data.uf         || f.estado,
        }));
      }
    } catch {}
  };

  // Carrega o plano
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SAAS_API_URL;
    fetch(`${url}/api/v1/public/planos`)
      .then((r) => r.json())
      .then((planos: Plano[]) => {
        const p = planos.find((pl) => pl.id === Number(plano_id));
        setPlano(p || null);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [plano_id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aceitouTermos) { setErro("Você precisa aceitar os Termos de Uso para continuar."); return; }
    setErro(""); setEnviando(true);

    try {
      const url = process.env.NEXT_PUBLIC_SAAS_API_URL;
      const res = await fetch(`${url}/api/v1/public/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, plano_id: Number(plano_id), trial_dias: 14 }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Erro ao processar cadastro");
      router.push(`/obrigado?email=${encodeURIComponent(form.email)}&plano=${encodeURIComponent(plano?.nome || "")}`);
    } catch (err: unknown) {
      setErro(err instanceof Error ? err.message : "Erro inesperado");
    } finally {
      setEnviando(false);
    }
  };

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F2F0EB" }}>
        <PublyLogo size={14} gap={4} animated />
      </div>
    );
  }

  if (!plano) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#F2F0EB", gap: 16 }}>
        <p style={{ fontSize: 18, color: "#666" }}>Plano não encontrado.</p>
        <Link href="/planos" className="btn-primary">Ver planos disponíveis</Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh", background: "#F2F0EB", padding: "100px 24px 64px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 380px", gap: 32, alignItems: "start" }}>

          {/* ── Formulário ── */}
          <div style={{ background: "#fff", borderRadius: 20, padding: "40px 36px", border: "1px solid #E0DCD4", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: "#0F0F0F", marginBottom: 6 }}>
              Criar conta gratuita
            </h1>
            <p style={{ fontSize: 14, color: "#888", marginBottom: 32 }}>
              14 dias de trial grátis · Sem cartão de crédito
            </p>

            <form onSubmit={handleSubmit}>
              {/* Responsável */}
              <div style={{ fontSize: 11, fontWeight: 700, color: "#4F8EF7", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>
                Dados do responsável
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
                <Field label="Nome completo *">
                  <input className="field-input" value={form.nome} onChange={(e) => set("nome", e.target.value)} required placeholder="João Silva" />
                </Field>
                <Field label="E-mail *">
                  <input className="field-input" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} required placeholder="joao@seunegocio.com" />
                </Field>
                <div style={{ gridColumn: "1/-1" }}>
                  <Field label="Telefone / WhatsApp *">
                    <input className="field-input" value={form.telefone} onChange={(e) => set("telefone", e.target.value)} required placeholder="(11) 99999-0000" />
                  </Field>
                </div>
              </div>

              {/* Empresa */}
              <div style={{ fontSize: 11, fontWeight: 700, color: "#4F8EF7", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16, marginTop: 8, borderTop: "1px solid #F0EDE8", paddingTop: 20 }}>
                Dados do estabelecimento
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
                <div style={{ gridColumn: "1/-1" }}>
                  <Field label="Nome do estabelecimento *">
                    <input className="field-input" value={form.nome_estabelecimento} onChange={(e) => set("nome_estabelecimento", e.target.value)} required placeholder="Ex: Cantina do João, Café Vila..." />
                  </Field>
                </div>
                <Field label="Razão Social">
                  <input className="field-input" value={form.razao_social} onChange={(e) => set("razao_social", e.target.value)} placeholder="João Ltda." />
                </Field>
                <Field label="CNPJ">
                  <input className="field-input" value={form.cnpj} onChange={(e) => set("cnpj", e.target.value)} placeholder="00.000.000/0001-00" />
                </Field>
              </div>

              {/* Endereço */}
              <div style={{ fontSize: 11, fontWeight: 700, color: "#4F8EF7", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16, marginTop: 8, borderTop: "1px solid #F0EDE8", paddingTop: 20 }}>
                Endereço do estabelecimento
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
                <Field label="CEP">
                  <input className="field-input" value={form.cep} onChange={(e) => set("cep", e.target.value)} onBlur={(e) => buscarCep(e.target.value)} placeholder="00000-000" maxLength={9} />
                </Field>
                <Field label="Estado (UF)">
                  <select className="field-input" value={form.estado} onChange={(e) => set("estado", e.target.value)}>
                    {UF_LIST.map((uf) => <option key={uf} value={uf}>{uf || "Selecione"}</option>)}
                  </select>
                </Field>
                <div style={{ gridColumn: "1/-1" }}>
                  <Field label="Logradouro">
                    <input className="field-input" value={form.logradouro} onChange={(e) => set("logradouro", e.target.value)} placeholder="Rua, Avenida..." />
                  </Field>
                </div>
                <Field label="Número">
                  <input className="field-input" value={form.numero} onChange={(e) => set("numero", e.target.value)} placeholder="123" />
                </Field>
                <Field label="Complemento">
                  <input className="field-input" value={form.complemento} onChange={(e) => set("complemento", e.target.value)} placeholder="Sala, andar..." />
                </Field>
                <Field label="Bairro">
                  <input className="field-input" value={form.bairro} onChange={(e) => set("bairro", e.target.value)} />
                </Field>
                <Field label="Cidade">
                  <input className="field-input" value={form.cidade} onChange={(e) => set("cidade", e.target.value)} />
                </Field>
              </div>

              {/* Termos */}
              <div style={{ marginTop: 8, marginBottom: 24, display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div
                  onClick={() => setAceitouTermos(!aceitouTermos)}
                  style={{
                    width: 20, height: 20, borderRadius: 6, flexShrink: 0, marginTop: 1,
                    border: `2px solid ${aceitouTermos ? "#4F8EF7" : "#D0CCC4"}`,
                    background: aceitouTermos ? "#4F8EF7" : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", transition: "all 0.15s",
                  }}
                >
                  {aceitouTermos && (
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                      <path d="M1 4.5L4 7.5L10 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span style={{ fontSize: 13, color: "#666", lineHeight: 1.5 }}>
                  Concordo com os{" "}
                  <Link href="/termos" style={{ color: "#4F8EF7" }} target="_blank">Termos de Uso</Link>
                  {" "}e{" "}
                  <Link href="/privacidade" style={{ color: "#4F8EF7" }} target="_blank">Política de Privacidade</Link>
                </span>
              </div>

              {erro && (
                <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 10, padding: "12px 16px", marginBottom: 16, fontSize: 13, color: "#ef4444" }}>
                  {erro}
                </div>
              )}

              <button type="submit" disabled={enviando} className="btn-primary" style={{ width: "100%", fontSize: 16, padding: "15px" }}>
                {enviando ? "Criando sua conta..." : "Iniciar 14 dias grátis →"}
              </button>

              <p style={{ fontSize: 12, color: "#aaa", textAlign: "center", marginTop: 12 }}>
                Sem cartão de crédito · Cancele quando quiser
              </p>
            </form>
          </div>

          {/* ── Resumo do plano ── */}
          <div style={{ position: "sticky", top: 90 }}>
            <div style={{
              background: "#0F0F0F", borderRadius: 20, padding: 28,
              border: "1px solid rgba(255,255,255,0.07)",
              color: "#fff", marginBottom: 16,
            }}>
              <div style={{ fontSize: 11, color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Plano selecionado</div>
              <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>{plano.nome}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 20 }}>
                <span style={{ fontSize: 36, fontWeight: 800, color: "#4F8EF7" }}>{fmtVal(plano.preco_mensal)}</span>
                <span style={{ fontSize: 14, color: "#666" }}>/mês</span>
              </div>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 20 }}>
                {[
                  ["Trial gratuito", "14 dias"],
                  ["Mesas", plano.max_mesas ? `Até ${plano.max_mesas}` : "Ilimitadas"],
                  ["Produtos", plano.max_produtos ? `Até ${plano.max_produtos}` : "Ilimitados"],
                  ...(plano.taxa_setup > 0 ? [["Setup (único)", fmtVal(plano.taxa_setup)]] : []),
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: 13 }}>
                    <span style={{ color: "#666" }}>{k}</span>
                    <span style={{ color: "#fff", fontWeight: 600 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/planos" style={{ display: "block", textAlign: "center", fontSize: 13, color: "#888", padding: "8px", transition: "color 0.15s" }}>
              ← Trocar plano
            </Link>

            {/* Selos */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 20 }}>
              {["🔒 Dados criptografados com SSL", "✓ Sem fidelidade — cancele quando quiser", "💬 Suporte em português"].map((s) => (
                <div key={s} style={{ fontSize: 12, color: "#888", display: "flex", alignItems: "center", gap: 8 }}>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
