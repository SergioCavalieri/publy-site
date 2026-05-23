import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PublyLogo from "@/components/PublyLogo";
import FeatureIcon from "@/components/FeatureIcon";
import { SITE_URL, softwareApplicationSchema, organizationSchema } from "@/lib/seo";

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
    "Autoatendimento via QR Code, kanban em tempo real e gestão completa para bares, pubs e restaurantes. Comece grátis por 14 dias, sem cartão de crédito.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Publy — Sistema de pedidos para bares e pubs",
    description: "QR Code por mesa, kanban para a cozinha, fechamento de conta e analytics. 14 dias grátis.",
    url: SITE_URL,
    type: "website",
  },
};

const jsonLd = [softwareApplicationSchema(), organizationSchema()];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navbar dark />

      {/* ── Hero ─────────────────────────────────── */}
      <section style={{
        minHeight: "100vh",
        background: "#0F0F0F",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Radial glow */}
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 800, height: 400,
          background: "radial-gradient(ellipse at 50% 0%, rgba(79,142,247,0.14) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        {/* Grid lines */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", maxWidth: 760 }}>
          {/* Badge */}
          <div className="fade-up" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 100,
            background: "rgba(79,142,247,0.12)",
            border: "1px solid rgba(79,142,247,0.25)",
            marginBottom: 32,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4F8EF7", animation: "publyPulse1 2s ease-in-out infinite" }} />
            <span style={{ fontSize: 12, color: "#4F8EF7", fontWeight: 600, letterSpacing: "0.06em" }}>
              14 DIAS GRÁTIS — SEM CARTÃO
            </span>
          </div>

          {/* Logo mark */}
          <div className="fade-up-1" style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
            <PublyLogo size={18} gap={6} color="#4F8EF7" animated />
          </div>

          <h1 className="fade-up-2" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 800, fontSize: "clamp(36px, 6vw, 72px)",
            color: "#ffffff", lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 24,
          }}>
            O sistema completo<br />
            <span style={{ color: "#4F8EF7" }}>para o seu bar</span>
          </h1>

          <p className="fade-up-3" style={{
            fontSize: "clamp(16px, 2vw, 20px)", color: "#888",
            lineHeight: 1.7, marginBottom: 40, maxWidth: 560, margin: "0 auto 40px",
          }}>
            QR Code por mesa, pedidos em tempo real, kanban para a cozinha e relatórios de vendas — tudo num só lugar.
          </p>

          <div className="fade-up-4" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/planos" className="btn-primary" style={{ fontSize: 16, padding: "15px 36px" }}>
              Começar 14 dias grátis →
            </Link>
            <Link href="/#funcionalidades" className="btn-ghost-white" style={{ fontSize: 16, padding: "15px 30px" }}>
              Ver funcionalidades
            </Link>
          </div>

          <p className="fade-up-5" style={{ color: "#555", fontSize: 13, marginTop: 20 }}>
            Sem contrato · Cancele quando quiser · Setup em 30 minutos
          </p>
        </div>

        {/* Mock de interface — fiel ao visual real do Publy */}
        <div className="fade-up-6" style={{
          position: "relative", marginTop: 72,
          maxWidth: 980, width: "100%",
          animation: "gridFloat 6s ease-in-out infinite",
          borderRadius: 16, overflow: "hidden",
          boxShadow: "0 40px 100px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.06)",
        }}>
          {/* ── Barra de título do browser (macOS) ── */}
          <div style={{ background: "#1e1e1e", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #111" }}>
            {["#FF5F57","#FFBD2E","#28CA41"].map((c) => (
              <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, flexShrink: 0 }} />
            ))}
            <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <div style={{ background: "#2a2a2a", borderRadius: 6, padding: "4px 20px", fontSize: 11, color: "#888", fontFamily: "monospace", letterSpacing: "0.02em" }}>
                publy.app/admin/pedidos
              </div>
            </div>
          </div>

          {/* ── Navbar do sistema Publy ── */}
          <div style={{ background: "#0F0F0F", padding: "0 16px", display: "flex", alignItems: "center", gap: 12, height: 44, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            {/* Logo Publy */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,8px)", gap: 2.5, marginRight: 4 }}>
              {[1,0.45,0.45,1,1,0.2].map((op,i) => (
                <div key={i} style={{ width:8, height:8, borderRadius:2, background:"#4F8EF7", opacity:op }} />
              ))}
            </div>
            <span style={{ fontSize: 11, fontWeight: 300, color: "#fff", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "sans-serif" }}>PUBLY</span>
            <div style={{ width: 1, height: 18, background: "rgba(255,255,255,0.1)", margin: "0 4px" }} />
            <span style={{ fontSize: 11, color: "#666" }}>Admin</span>
            {/* Spacer */}
            <div style={{ flex: 1 }} />
            {/* Online badge */}
            <div style={{ display: "flex", alignItems: "center", gap: 5, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: 100, padding: "3px 10px" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E" }} />
              <span style={{ fontSize: 10, color: "#22C55E", fontWeight: 600 }}>Online</span>
            </div>
            <div style={{ background: "#1a1a1a", borderRadius: 6, padding: "4px 10px", fontSize: 10, color: "#aaa" }}>Admin</div>
            <div style={{ background: "#ef4444", borderRadius: 6, padding: "4px 10px", fontSize: 10, color: "#fff", fontWeight: 700 }}>Sair</div>
          </div>

          {/* ── Tabs de navegação ── */}
          <div style={{ background: "#ffffff", borderBottom: "1px solid #e8e4dc", padding: "0 16px", display: "flex", gap: 0 }}>
            {[
              { label: "Geral", active: true },
              { label: "Recebido" }, { label: "Em preparo" }, { label: "Pronto!" },
              { label: "Entregue" }, { label: "Mesas" }, { label: "Contas" },
            ].map(({ label, active }) => (
              <div key={label} style={{
                padding: "10px 14px", fontSize: 11, fontWeight: active ? 600 : 400,
                color: active ? "#4F8EF7" : "#888",
                borderBottom: active ? "2px solid #4F8EF7" : "2px solid transparent",
                whiteSpace: "nowrap",
              }}>{label}</div>
            ))}
          </div>

          {/* ── Kanban Board ── */}
          <div style={{ background: "#F2F0EB", padding: "14px 12px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
            {[
              { label: "Recebido",   count: 3, bg: "#3B82F6", light: "rgba(59,130,246,0.08)",
                items: [["Mesa 3","2x Cerveja"],["Mesa 7","1x Hambúrguer"],["Mesa 11","3x Água"]] },
              { label: "Em preparo", count: 5, bg: "#F97316", light: "rgba(249,115,22,0.08)",
                items: [["Mesa 3","2x Cerveja"],["Mesa 7","1x Hambúrguer"],["Mesa 11","3x Água"]] },
              { label: "Pronto!",    count: 2, bg: "#22C55E", light: "rgba(34,197,94,0.08)",
                items: [["Mesa 3","2x Cerveja"],["Mesa 7","1x Hambúrguer"],["Mesa 11","3x Água"]] },
              { label: "Entregue",   count: 8, bg: "#6B7280", light: "rgba(107,114,128,0.06)",
                items: [["Mesa 3","2x Cerveja"],["Mesa 7","1x Hambúrguer"],["Mesa 11","3x Água"]] },
            ].map(({ label, count, bg, light, items }) => (
              <div key={label} style={{ borderRadius: 12, overflow: "hidden", background: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                {/* Header da coluna */}
                <div style={{ background: bg, padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: "#fff", letterSpacing: "0.04em" }}>{label}</span>
                  <span style={{ fontSize: 11, fontWeight: 800, color: "#fff", background: "rgba(255,255,255,0.25)", padding: "1px 8px", borderRadius: 100 }}>{count}</span>
                </div>
                {/* Cards */}
                <div style={{ background: light, padding: 8, display: "flex", flexDirection: "column", gap: 6 }}>
                  {items.map(([mesa, item], i) => (
                    <div key={i} style={{ background: "#fff", borderRadius: 8, padding: "7px 10px", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
                      <div style={{ fontSize: 9, color: "#aaa", marginBottom: 2, fontWeight: 500 }}>{mesa}</div>
                      <div style={{ fontSize: 11, color: "#111", fontWeight: 600 }}>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Métricas ──────────────────────────────── */}
      <section style={{ background: "#F2F0EB", padding: "64px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
          {[
            { num: "< 30min", label: "para configurar e usar" },
            { num: "14 dias", label: "de trial grátis" },
            { num: "100%", label: "via navegador, sem app" },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign: "center", padding: "32px 24px" }}>
              <div style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 800, color: "#4F8EF7", letterSpacing: "-0.02em", lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: 15, color: "#666", marginTop: 8 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Funcionalidades ──────────────────────── */}
      <section id="funcionalidades" style={{ background: "#FFFFFF", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#4F8EF7", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 12 }}>
              Funcionalidades
            </div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "#0F0F0F", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Tudo que você precisa,<br />sem complicação
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
            {FEATURES.map(({ icon, title, desc }, i) => (
              <div key={title} className={`fade-up-${(i % 4) + 1} feature-card`} style={{
                background: "#FFFFFF",
                border: "1px solid #EAE6DF",
                borderRadius: 20, padding: "32px 28px",
              }}>
                <div style={{ marginBottom: 20 }}>
                  <FeatureIcon name={icon} size={52} />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0F0F0F", marginBottom: 10, letterSpacing: "-0.01em" }}>{title}</h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Como funciona ────────────────────────── */}
      <section style={{ background: "#F2F0EB", padding: "96px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#4F8EF7", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 12 }}>
              Como funciona
            </div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "#0F0F0F", letterSpacing: "-0.02em" }}>
              Pronto em 3 passos
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32 }}>
            {STEPS.map(({ num, title, desc }) => (
              <div key={num} style={{ textAlign: "center" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: "rgba(79,142,247,0.10)",
                  border: "1px solid rgba(79,142,247,0.20)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 20px",
                }}>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 14, fontWeight: 500, color: "#4F8EF7" }}>{num}</span>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0F0F0F", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ────────────────────────────── */}
      <section id="contato" style={{
        background: "#0F0F0F",
        padding: "96px 24px",
        textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: 600, height: 300,
          background: "radial-gradient(ellipse, rgba(79,142,247,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", maxWidth: 600, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
            <PublyLogo size={16} gap={5} color="#4F8EF7" animated />
          </div>
          <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.2 }}>
            Pronto para modernizar<br />o seu bar?
          </h2>
          <p style={{ fontSize: 17, color: "#777", marginBottom: 40, lineHeight: 1.7 }}>
            14 dias grátis, sem cartão de crédito. Configure em menos de 30 minutos.
          </p>
          <Link href="/planos" className="btn-primary" style={{ fontSize: 17, padding: "16px 40px" }}>
            Começar agora — grátis →
          </Link>
          <p style={{ color: "#444", fontSize: 13, marginTop: 20 }}>
            Dúvidas? <a href="mailto:contato@publy.app" style={{ color: "#4F8EF7" }}>contato@publy.app</a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
