import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PublyLogo from "@/components/PublyLogo";
import FeatureIcon from "@/components/FeatureIcon";
import { SITE_URL, softwareApplicationSchema, organizationSchema } from "@/lib/seo";
import { HeroFade, FadeUp, SlideLeft, SlideRight, Stagger, StaggerItem } from "@/components/Animate";
import ScaledMockup from "@/components/ScaledMockup";
import PhoneMockMesa from "@/components/mocks/PhoneMockMesa";
import DesktopMockAnalytics from "@/components/mocks/DesktopMockAnalytics";
import KanbanMock from "@/components/mocks/KanbanMock";
import { C as colors } from "@/lib/theme";

const FEATURES = [
  {
    icon: "qrcode",
    title: "QR Code por mesa",
    desc: "Cada mesa tem seu próprio QR Code. O cliente escaneia, vê o cardápio e faz o pedido direto pelo celular — sem app, sem fila.",
  },
  {
    icon: "kanban",
    title: "Kanban em tempo real",
    desc: "Pedidos organizados em colunas: Novo → Preparando → Pronto. Sua equipe sempre sabe o que fazer.",
  },
  {
    icon: "conta",
    title: "Fechamento de conta",
    desc: "Feche contas por mesa, gere totais, registre formas de pagamento e divida entre pessoas com facilidade.",
  },
  {
    icon: "analytics",
    title: "Analytics e relatórios",
    desc: "Veja o que mais vende, horários de pico, ticket médio e evolução da receita. Tudo em gráficos claros.",
  },
  {
    icon: "cardapio",
    title: "Cardápio digital",
    desc: "Cadastre produtos, categorias, fotos e preços. Ative ou desative itens instantaneamente.",
  },
  {
    icon: "notificacao",
    title: "Notificações push",
    desc: "Garçons e cozinha recebem alertas sonoros a cada novo pedido. Nada passa despercebido.",
  },
];

const STEPS = [
  { num: "01", title: "Configure seu cardápio", desc: "Cadastre produtos, preços e fotos. Leva menos de 30 minutos." },
  { num: "02", title: "Imprima os QR Codes", desc: "Gere os QR Codes das mesas e cole nas platôs ou quadros." },
  { num: "03", title: "Abra e gerencie", desc: "Clientes pedem pelo celular. Você acompanha tudo no painel em tempo real." },
];

export const metadata: Metadata = {
  title: "Publy — Sistema de pedidos para bares e pubs",
  description:
    "Autoatendimento via QR Code, kanban em tempo real e gestão completa para restaurantes, cafés, pizzarias e estabelecimentos de alimentação. Comece grátis por 14 dias, sem cartão de crédito.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Publy — Sistema de pedidos para bares e pubs",
    description: "QR Code por mesa, kanban, fechamento de conta e analytics para qualquer estabelecimento. 14 dias grátis.",
    url: SITE_URL,
    type: "website",
  },
};

const jsonLd = [softwareApplicationSchema(), organizationSchema()];

function IcoBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      width: 36, height: 36, borderRadius: 10, flexShrink: 0,
      background: "rgba(79,142,247,0.10)",
      border: "1px solid rgba(79,142,247,0.18)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {children}
    </div>
  );
}

const C = colors.accent;

const IcoLightning = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M11 2 L4 10 L8.5 10 L7 16 L14 8 L9.5 8 Z" fill={C} fillOpacity="0.9" />
  </svg>
);
const IcoPhone = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="4" y="1.5" width="10" height="15" rx="2" stroke={C} strokeWidth="1.75" />
    <circle cx="9" cy="14" r="1" fill={C} opacity="0.5" />
    <path d="M7 4 h4" stroke={C} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
  </svg>
);
const IcoShield = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 1.5 L15 4.5 L15 9.5 C15 13 12.5 16 9 17 C5.5 16 3 13 3 9.5 L3 4.5 Z"
      stroke={C} strokeWidth="1.75" fill={C} fillOpacity="0.1" />
    <path d="M6.5 9 L8 10.5 L11.5 7" stroke={C} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IcoLineChart = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M2 14 L5.5 9.5 L8.5 11.5 L12 6 L16 3.5"
      stroke={C} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.5 3.5 L16 3.5 L16 6" stroke={C} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 16 L16 16" stroke={C} strokeWidth="1.25" strokeLinecap="round" opacity="0.35" />
  </svg>
);
const IcoPodium = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="10" width="5" height="7" rx="1" fill={C} fillOpacity="0.4" />
    <rect x="6.5" y="6.5" width="5" height="10.5" rx="1" fill={C} />
    <rect x="12" y="8.5" width="5" height="8.5" rx="1" fill={C} fillOpacity="0.65" />
    <path d="M7.5 4.5 L9 3 L10.5 4.5" stroke={C} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
  </svg>
);
const IcoClock = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="7" stroke={C} strokeWidth="1.75" />
    <path d="M9 5 L9 9 L12 11" stroke={C} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IcoBeer = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="2" y="5" width="13" height="14" rx="2" stroke={C} strokeWidth="1.75" fill={C} fillOpacity="0.07" />
    <path d="M15 8.5 L18 8.5 C19.1 8.5 19.5 9.2 19.5 10.5 C19.5 11.8 19.1 12.5 18 12.5 L15 12.5" stroke={C} strokeWidth="1.75" />
    <path d="M6 3 L6 5 M9 3 L9 5" stroke={C} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <path d="M5 11 h7" stroke={C} strokeWidth="1.25" strokeLinecap="round" opacity="0.3" />
  </svg>
);
const IcoPizza = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2 L19 18 L3 18 Z" stroke={C} strokeWidth="1.75" fill={C} fillOpacity="0.1" strokeLinejoin="round" />
    <circle cx="8.5" cy="14" r="1.2" fill={C} fillOpacity="0.7" />
    <circle cx="13" cy="13" r="1.2" fill={C} fillOpacity="0.7" />
    <circle cx="11" cy="9.5" r="1" fill={C} fillOpacity="0.45" />
  </svg>
);
const IcoCoffee = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M3.5 7 L3.5 16 C3.5 17.1 4.4 18 5.5 18 L14.5 18 C15.6 18 16.5 17.1 16.5 16 L16.5 7 Z"
      stroke={C} strokeWidth="1.75" fill={C} fillOpacity="0.07" />
    <path d="M16.5 9 L18.5 9 C19.5 9 19.5 13 18.5 13 L16.5 13" stroke={C} strokeWidth="1.5" />
    <path d="M8 4 C8 4 7.5 5.5 8 6.5 M12 4 C12 4 11.5 5.5 12 6.5" stroke={C} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  </svg>
);
const IcoBurger = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="2" y="4.5" width="18" height="3" rx="1.5" fill={C} />
    <rect x="3" y="9.5" width="16" height="2.5" rx="1.25" fill={C} fillOpacity="0.55" />
    <rect x="3" y="13.5" width="16" height="2.5" rx="1.25" fill={C} fillOpacity="0.35" />
    <rect x="2" y="17.5" width="18" height="2.5" rx="1.25" fill={C} fillOpacity="0.7" />
  </svg>
);
const IcoFork = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M7 2 L7 9 M5 2 L5 7 C5 8.7 7 9.5 7 9.5 L7 20" stroke={C} strokeWidth="1.75" strokeLinecap="round" />
    <path d="M15 2 L15 20" stroke={C} strokeWidth="1.75" strokeLinecap="round" />
    <path d="M12.5 2 C12.5 2 12.5 6 15 6 C17.5 6 17.5 2 17.5 2" stroke={C} strokeWidth="1.75" strokeLinecap="round" fill="none" />
  </svg>
);
const IcoFlame = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2 C11 2 16 7.5 16 12 C16 16 13.5 20 11 20 C8.5 20 6 16 6 12 C6 9.5 7.5 7.5 7.5 7.5 C7.5 7.5 8.5 11 11 11 C11 11 11 7 11 2 Z"
      stroke={C} strokeWidth="1.5" fill={C} fillOpacity="0.15" strokeLinejoin="round" />
    <circle cx="11" cy="15" r="2.5" fill={C} fillOpacity="0.5" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navbar dark />

      {/* ── Hero ─────────────────────────────────── */}
      <section style={{
        minHeight: "100vh", background: "#0F0F0F",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "120px 24px 80px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 800, height: 400, background: "radial-gradient(ellipse at 50% 0%, rgba(79,142,247,0.14) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

        <div style={{ position: "relative", maxWidth: 760 }}>
          <HeroFade delay={0}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 100, background: "rgba(79,142,247,0.12)", border: "1px solid rgba(79,142,247,0.25)", marginBottom: 32 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: C, animation: "publyPulse1 2s ease-in-out infinite" }} />
              <span style={{ fontSize: 12, color: C, fontWeight: 600, letterSpacing: "0.06em" }}>14 DIAS GRÁTIS — SEM CARTÃO</span>
            </div>
          </HeroFade>

          <HeroFade delay={0.15}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
              <PublyLogo size={18} gap={6} color={C} animated />
            </div>
          </HeroFade>

          <HeroFade delay={0.25}>
            <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 6vw, 72px)", color: "#ffffff", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24 }}>
              Atenda mais mesas<br /><span style={{ color: C }}>com a mesma equipe</span>
            </h1>
          </HeroFade>

          <HeroFade delay={0.35}>
            <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#888", lineHeight: 1.7, marginBottom: 40, maxWidth: 560, margin: "0 auto 40px" }}>
              Seus clientes fazem o pedido pelo celular direto da mesa. Sua equipe recebe na cozinha em tempo real — sem fila, sem pedido errado, sem garçom sobrecarregado.
            </p>
          </HeroFade>

          <HeroFade delay={0.45}>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/planos" className="btn-primary" style={{ fontSize: 16, padding: "15px 36px" }}>Começar 14 dias grátis →</Link>
              <Link href="/#funcionalidades" className="btn-ghost-white" style={{ fontSize: 16, padding: "15px 30px" }}>Ver funcionalidades</Link>
            </div>
          </HeroFade>

          <HeroFade delay={0.55}>
            <p style={{ color: "#555", fontSize: 13, marginTop: 20 }}>
              Sem contrato · Cancele quando quiser · Setup em 30 minutos
            </p>
          </HeroFade>
        </div>

        <HeroFade delay={0.7} style={{ width: "100%", marginTop: 72, animation: "gridFloat 6s ease-in-out infinite" }}>
          <ScaledMockup originalWidth={1100} originalHeight={360}>
            <KanbanMock />
          </ScaledMockup>
        </HeroFade>
      </section>

      {/* ── Métricas ──────────────────────────────── */}
      <section className="section-alt" style={{ padding: "64px 24px" }}>
        <Stagger className="grid-3" style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
          {[
            { num: "+23%",  label: "de aumento no ticket médio" },
            { num: "80%",   label: "menos pedidos errados" },
            { num: "40%",   label: "mais mesas atendidas" },
          ].map(({ num, label }) => (
            <StaggerItem key={label}>
              <div style={{ textAlign: "center", padding: "32px 24px" }}>
                <div style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 800, color: C, letterSpacing: "-0.02em", lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: 15, color: "#888", marginTop: 8 }}>{label}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ── Spotlight: Experiência do cliente ─────── */}
      <section style={{ padding: "100px 24px", overflow: "hidden" }}>
        <div className="spotlight-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <SlideLeft>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: C, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 16 }}>Autoatendimento</div>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 20 }}>
              O cliente pede.<br />Você serve.
            </h2>
            <p style={{ fontSize: 16, color: "#777", lineHeight: 1.8, marginBottom: 32 }}>
              Ao escanear o QR Code da mesa, o cliente vê o cardápio completo e faz o pedido direto do celular. Sem baixar app, sem cadastro complicado — só nome e WhatsApp.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { ico: <IcoLightning />, title: "Sem fila, sem espera",        desc: "Pedidos chegam direto na cozinha em segundos" },
                { ico: <IcoPhone />,    title: "Funciona em qualquer celular",  desc: "iOS, Android — basta ter um navegador" },
                { ico: <IcoShield />,   title: "Simples e seguro",              desc: "Identidade confirmada via WhatsApp" },
              ].map(({ ico, title, desc }) => (
                <div key={title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <IcoBox>{ico}</IcoBox>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 3 }}>{title}</div>
                    <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </SlideLeft>

          <SlideRight>
            <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 320, height: 320, background: "radial-gradient(ellipse, rgba(79,142,247,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
              <div style={{ animation: "gridFloat 7s ease-in-out infinite" }}>
                <PhoneMockMesa />
              </div>
            </div>
          </SlideRight>
        </div>
      </section>

      {/* ── Spotlight: Analytics ──────────────────── */}
      <section className="section-alt" style={{ padding: "100px 24px", overflow: "hidden" }}>
        <div className="spotlight-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <SlideLeft>
            <ScaledMockup originalWidth={540} originalHeight={480}>
              <DesktopMockAnalytics />
            </ScaledMockup>
          </SlideLeft>

          <SlideRight>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: C, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 16 }}>Dados & Relatórios</div>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 20 }}>
              Tome decisões<br />com dados reais.
            </h2>
            <p style={{ fontSize: 16, color: "#777", lineHeight: 1.8, marginBottom: 32 }}>
              Receita por dia, produtos mais vendidos, horários de pico, ticket médio e variação mensal. Tudo em um painel limpo, sem planilha, sem complicação.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { ico: <IcoLineChart />, title: "Tendência de receita", desc: "Gráfico de área com evolução diária e mensal" },
                { ico: <IcoPodium />,    title: "Top produtos",          desc: "Ranking por receita e volume de pedidos" },
                { ico: <IcoClock />,     title: "Horários de pico",      desc: "Saiba quando seu estabelecimento está mais movimentado" },
              ].map(({ ico, title, desc }) => (
                <div key={title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <IcoBox>{ico}</IcoBox>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 3 }}>{title}</div>
                    <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </SlideRight>
        </div>
      </section>

      {/* ── Funcionalidades ──────────────────────── */}
      <section id="funcionalidades" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <FadeUp style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 12 }}>Funcionalidades</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Tudo que você precisa,<br />sem complicação
            </h2>
          </FadeUp>
          <Stagger stagger={0.08} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
            {FEATURES.map(({ icon, title, desc }) => (
              <StaggerItem key={title} className="feature-card">
                <div style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "32px 28px", height: "100%" }}>
                  <div style={{ marginBottom: 20 }}><FeatureIcon name={icon} size={52} /></div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#ffffff", marginBottom: 10, letterSpacing: "-0.01em" }}>{title}</h3>
                  <p style={{ fontSize: 14, color: "#888", lineHeight: 1.75 }}>{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Para qualquer negócio ─────────────────── */}
      <section className="section-alt" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <FadeUp>
            <div style={{ fontSize: 12, fontWeight: 700, color: C, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 16 }}>Para qualquer estabelecimento</div>
            <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 48 }}>
              Não importa o tamanho do seu negócio
            </h2>
          </FadeUp>
          <Stagger stagger={0.06} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 16 }}>
            {[
              { icon: <IcoBeer />,   label: "Bares e Pubs" },
              { icon: <IcoPizza />,  label: "Pizzarias" },
              { icon: <IcoCoffee />, label: "Cafeterias" },
              { icon: <IcoBurger />, label: "Hamburguerias" },
              { icon: <IcoFork />,   label: "Restaurantes" },
              { icon: <IcoFlame />,  label: "Churrascarias" },
            ].map(({ icon, label }) => (
              <StaggerItem key={label}>
                <div style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "24px 16px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(79,142,247,0.10)", border: "1px solid rgba(79,142,247,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {icon}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#ccc" }}>{label}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Como funciona ────────────────────────── */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeUp style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 12 }}>Como funciona</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }}>Pronto em 3 passos</h2>
          </FadeUp>
          <Stagger className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32 }}>
            {STEPS.map(({ num, title, desc }) => (
              <StaggerItem key={num}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(79,142,247,0.10)", border: "1px solid rgba(79,142,247,0.20)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 14, fontWeight: 500, color: C }}>{num}</span>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#ffffff", marginBottom: 10 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7 }}>{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── CTA Final ────────────────────────────── */}
      <section id="contato" style={{ padding: "96px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 300, background: "radial-gradient(ellipse, rgba(79,142,247,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <FadeUp style={{ position: "relative", maxWidth: 600, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
            <PublyLogo size={16} gap={5} color={C} animated />
          </div>
          <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.2 }}>
            Pronto para modernizar<br />o seu estabelecimento?
          </h2>
          <p style={{ fontSize: 17, color: "#777", marginBottom: 40, lineHeight: 1.7 }}>
            14 dias grátis, sem cartão de crédito. Funciona para restaurantes, cafés, pizzarias, bares e muito mais.
          </p>
          <Link href="/planos" className="btn-primary" style={{ fontSize: 17, padding: "16px 40px" }}>
            Começar agora — grátis →
          </Link>
          <p style={{ color: "#444", fontSize: 13, marginTop: 20 }}>
            Dúvidas? <a href="mailto:contato@publy.tech" style={{ color: C }}>contato@publy.tech</a>
          </p>
        </FadeUp>
      </section>

      <Footer />
    </>
  );
}
