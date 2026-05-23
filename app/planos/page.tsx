import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlanosClient from "@/components/PlanosClient";
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
  { question: "Posso mudar de plano depois?", answer: "Sim, a qualquer momento. O ajuste é proporcional ao período restante." },
  { question: "Como funciona o cancelamento?", answer: "Cancele quando quiser pelo painel, sem multa. O acesso permanece até o fim do período pago." },
  { question: "O desconto anual/bienal vale desde o trial?", answer: "O trial é sempre gratuito por 14 dias independente do período escolhido. O desconto começa a valer na primeira cobrança após o trial." },
  { question: "O sistema roda em tablet e celular?", answer: "Sim. O painel admin funciona em qualquer dispositivo moderno. O cardápio do cliente é 100% mobile." },
];

export default async function PlanosPage() {
  let planos: Plano[] = [];
  try {
    planos = await getPlanos();
  } catch {
    // fallback silencioso
  }

  const faqJsonLd   = faqSchema(FAQ_ITEMS);
  const breadJsonLd = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Planos", url: `${SITE_URL}/planos` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadJsonLd) }} />
      <Navbar dark />

      {/* Hero */}
      <section style={{ padding: "120px 24px 64px", textAlign: "center", position: "relative", overflow: "hidden", maxWidth: "100vw" }}>
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 700, height: 350,
          background: "radial-gradient(ellipse at 50% 0%, rgba(79,142,247,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#4F8EF7", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 14 }}>
            Planos e preços
          </div>
          <h1 style={{ fontSize: "clamp(32px,5vw,56px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 20 }}>
            Escolha o plano ideal<br />para o seu estabelecimento
          </h1>
          <p style={{ fontSize: 18, color: "#888", maxWidth: 480, margin: "0 auto 20px" }}>
            14 dias de trial gratuito em qualquer plano. Sem cartão de crédito.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 18px", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 100 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E" }} />
            <span style={{ fontSize: 13, color: "#22C55E", fontWeight: 600 }}>
              Cancele a qualquer momento, sem multa
            </span>
          </div>
        </div>
      </section>

      {/* Seletor de período + planos (client component) */}
      <section style={{ padding: "0 24px 96px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <PlanosClient planos={planos} />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-alt" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#ffffff", marginBottom: 40, textAlign: "center" }}>
            Perguntas frequentes
          </h2>
          {FAQ_ITEMS.map(({ question, answer }) => (
            <details key={question} style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "20px 0" }}>
              <summary style={{ fontSize: 16, fontWeight: 600, color: "#e8e8e8", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                {question}
                <span style={{ color: "#4F8EF7", fontSize: 20, lineHeight: 1 }}>+</span>
              </summary>
              <p style={{ fontSize: 14, color: "#888", marginTop: 12, lineHeight: 1.7 }}>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
