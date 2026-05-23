import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPlanos, type Plano } from "@/lib/api";
import { SITE_URL, faqSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Planos e preços",
  description:
    "Escolha o plano ideal para o seu estabelecimento. A partir de R$39,90/mês com 14 dias grátis, sem cartão de crédito.",
  alternates: { canonical: `${SITE_URL}/planos` },
  openGraph: {
    title: "Planos e preços | Publy",
    description: "Planos para restaurantes, cafés, pizzarias e estabelecimentos. 14 dias grátis, sem cartão.",
    url: `${SITE_URL}/planos`,
  },
};

const FAQ_ITEMS = [
  { question: "Preciso de cartão de crédito para o trial?", answer: "Não. O trial de 14 dias é totalmente gratuito. Você só fornece os dados de pagamento ao final do período, se quiser continuar." },
  { question: "Posso mudar de plano depois?", answer: "Sim, a qualquer momento. O ajuste é proporcional ao período restante do mês." },
  { question: "Como funciona o cancelamento?", answer: "Cancele quando quiser pelo painel, sem multa. O acesso permanece até o fim do período pago." },
  { question: "O sistema roda em tablet e celular?", answer: "Sim. O painel admin funciona em qualquer dispositivo moderno. O cardápio do cliente é 100% mobile." },
];

const fmtVal = (v: number) =>
  Number(v).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// Agrupa planos por tier baseado no nome
function getTier(nome: string) {
  if (nome.toLowerCase().includes("pró max") || nome.toLowerCase().includes("pro max")) return "max";
  if (nome.toLowerCase().includes("pró") || nome.toLowerCase().includes("pro")) return "pro";
  return "basic";
}

const TIER_CONFIG = {
  basic: { label: "Básico", cor: "#4F8EF7", destaque: false, desc: "Perfeito para estabelecimentos menores que querem começar com agilidade." },
  pro:   { label: "Pró",    cor: "#7C3AED", destaque: true,  desc: "Para estabelecimentos em crescimento com mais movimento e demanda." },
  max:   { label: "Pró Max",cor: "#0F0F0F", destaque: false, desc: "Para casas maiores que precisam do máximo de capacidade." },
};

const CHECK = (color: string) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill={color} fillOpacity="0.12" />
    <path d="M5 8L7 10L11 6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function getFeatures(plano: Plano) {
  const tier = getTier(plano.nome);
  const base = [
    "Cardápio digital via QR Code",
    "Pedidos em tempo real",
    "Kanban para cozinha e atendimento",
    "Fechamento de conta por mesa",
    plano.max_mesas ? `Até ${plano.max_mesas} mesas simultâneas` : "Mesas ilimitadas",
    plano.max_produtos ? `Até ${plano.max_produtos} produtos no cardápio` : "Produtos ilimitados",
    "Suporte por e-mail",
  ];
  if (tier === "pro" || tier === "max") {
    base.push("Relatórios e analytics avançados", "Controle de estoque", "Marketing e fidelidade", "Suporte prioritário");
  }
  if (tier === "max") {
    base.push("Onboarding dedicado", "SLA de uptime garantido");
  }
  return base;
}

export default async function PlanosPage() {
  let planos: Plano[] = [];
  try {
    planos = await getPlanos();
  } catch {
    // fallback silencioso — mostrará mensagem de erro
  }

  const faqJsonLd  = faqSchema(FAQ_ITEMS);
  const breadJsonLd = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Planos", url: `${SITE_URL}/planos` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadJsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 80, textAlign: "center", background: "#F2F0EB", padding: "120px 24px 80px" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#4F8EF7", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 14 }}>
          Planos e preços
        </div>
        <h1 style={{ fontSize: "clamp(32px,5vw,56px)", fontWeight: 800, color: "#0F0F0F", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 20 }}>
          Escolha o plano ideal<br />para o seu estabelecimento
        </h1>
        <p style={{ fontSize: 18, color: "#666", maxWidth: 480, margin: "0 auto 16px" }}>
          Todos os planos incluem 14 dias de trial gratuito. Sem cartão de crédito.
        </p>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 18px", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: 100 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E" }} />
          <span style={{ fontSize: 13, color: "#16a34a", fontWeight: 600 }}>
            Cancele a qualquer momento, sem multa
          </span>
        </div>
      </section>

      {/* Planos grid */}
      <section style={{ background: "#F2F0EB", padding: "0 24px 96px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          {planos.length === 0 ? (
            <div style={{ textAlign: "center", padding: 64, color: "#888" }}>
              <p>Não foi possível carregar os planos. Tente novamente em instantes.</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
              {planos.map((plano) => {
                const tier = getTier(plano.nome);
                const config = TIER_CONFIG[tier];
                const features = getFeatures(plano);

                return (
                  <div key={plano.id} className={`plan-card${config.destaque ? " destaque" : ""}`}>
                    {config.destaque && (
                      <div style={{
                        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                        background: "#7C3AED", color: "#fff",
                        fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
                        padding: "5px 18px", borderRadius: "0 0 10px 10px",
                      }}>
                        MAIS POPULAR
                      </div>
                    )}

                    <div style={{ paddingTop: config.destaque ? 16 : 0, marginBottom: 8 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: config.cor, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
                        {config.label}
                      </div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: "#0F0F0F", marginBottom: 4 }}>
                        {plano.nome}
                      </div>
                      <p style={{ fontSize: 13, color: "#888", lineHeight: 1.5, marginBottom: 20 }}>
                        {plano.descricao || config.desc}
                      </p>
                    </div>

                    <div style={{ marginBottom: 24 }}>
                      <span style={{ fontSize: 40, fontWeight: 800, color: "#0F0F0F", letterSpacing: "-0.03em" }}>
                        {fmtVal(plano.preco_mensal)}
                      </span>
                      <span style={{ fontSize: 14, color: "#888" }}>/mês</span>
                      {plano.taxa_setup > 0 && (
                        <div style={{ fontSize: 12, color: "#aaa", marginTop: 4 }}>
                          + {fmtVal(plano.taxa_setup)} de setup (único)
                        </div>
                      )}
                    </div>

                    <Link
                      href={`/assinar/${plano.id}`}
                      style={{
                        display: "block", width: "100%", padding: "13px",
                        background: config.destaque ? "#7C3AED" : config.cor === "#0F0F0F" ? "#0F0F0F" : "#4F8EF7",
                        color: "#fff", borderRadius: 12, fontWeight: 700, fontSize: 15,
                        textAlign: "center", marginBottom: 24,
                        boxShadow: config.destaque ? "0 4px 20px rgba(124,58,237,0.35)" : `0 4px 20px rgba(79,142,247,0.25)`,
                        transition: "opacity 0.15s",
                      }}
                    >
                      Iniciar trial grátis →
                    </Link>

                    <div style={{ borderTop: "1px solid #F0EDE8", paddingTop: 20 }}>
                      {features.map((f) => (
                        <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                          {CHECK(config.cor === "#0F0F0F" ? "#22C55E" : config.cor)}
                          <span style={{ fontSize: 13, color: "#444", lineHeight: 1.5 }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* FAQ rápido */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0F0F0F", marginBottom: 40, textAlign: "center" }}>
            Perguntas frequentes
          </h2>
          {FAQ_ITEMS.map(({ question, answer }) => (
            <details key={question} style={{ borderBottom: "1px solid #E8E4DC", padding: "20px 0" }}>
              <summary style={{ fontSize: 16, fontWeight: 600, color: "#0F0F0F", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                {question}
                <span style={{ color: "#4F8EF7", fontSize: 20, lineHeight: 1 }}>+</span>
              </summary>
              <p style={{ fontSize: 14, color: "#666", marginTop: 12, lineHeight: 1.7 }}>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
