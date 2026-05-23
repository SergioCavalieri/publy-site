import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PublyLogo from "@/components/PublyLogo";

const FEATURES = [
  {
    icon: "📱",
    title: "QR Code por mesa",
    desc: "Cada mesa tem seu próprio QR Code. O cliente escaneia, vê o cardápio e faz o pedido direto pelo celular — sem app, sem fila.",
  },
  {
    icon: "🗂️",
    title: "Kanban em tempo real",
    desc: "Pedidos organizados em colunas: Novo → Preparando → Pronto. Sua equipe sempre sabe o que fazer.",
  },
  {
    icon: "💳",
    title: "Fechamento de conta",
    desc: "Feche contas por mesa, gere totais, registre formas de pagamento e divida entre pessoas com facilidade.",
  },
  {
    icon: "📊",
    title: "Analytics e relatórios",
    desc: "Veja o que mais vende, horários de pico, ticket médio e evolução da receita. Tudo em gráficos claros.",
  },
  {
    icon: "🍺",
    title: "Cardápio digital",
    desc: "Cadastre produtos, categorias, fotos e preços. Ative ou desative itens instantaneamente.",
  },
  {
    icon: "🔔",
    title: "Notificações push",
    desc: "Garçons e cozinha recebem alertas sonoros a cada novo pedido. Nada passa despercebido.",
  },
];

const STEPS = [
  { num: "01", title: "Configure seu cardápio", desc: "Cadastre produtos, preços e fotos. Leva menos de 30 minutos." },
  { num: "02", title: "Imprima os QR Codes", desc: "Gere os QR Codes das mesas e cole nas platôs ou quadros." },
  { num: "03", title: "Abra e gerencie", desc: "Clientes pedem pelo celular. Você acompanha tudo no painel em tempo real." },
];

export default function HomePage() {
  return (
    <>
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

        {/* Mock de interface */}
        <div className="fade-up-6" style={{
          position: "relative", marginTop: 72,
          maxWidth: 900, width: "100%",
          animation: "gridFloat 6s ease-in-out infinite",
        }}>
          <div style={{
            background: "#1A1A1A", borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.08)",
            overflow: "hidden",
            boxShadow: "0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05)",
          }}>
            {/* Window chrome */}
            <div style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: 6, alignItems: "center" }}>
              {["#FF5F57","#FFBD2E","#28CA41"].map((c) => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
              ))}
              <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 6, padding: "3px 16px", fontSize: 11, color: "#555", fontFamily: "monospace" }}>
                  publy.app/admin/pedidos
                </div>
              </div>
            </div>
            {/* Kanban mock */}
            <div style={{ padding: 20, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
              {[
                { label: "Novos", count: 3, color: "#4F8EF7" },
                { label: "Preparando", count: 5, color: "#EF9F27" },
                { label: "Prontos", count: 2, color: "#22C55E" },
                { label: "Entregues", count: 8, color: "#444" },
              ].map(({ label, count, color }) => (
                <div key={label} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 10, padding: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</span>
                    <span style={{ fontSize: 11, color, background: `${color}20`, padding: "2px 7px", borderRadius: 20, fontWeight: 700 }}>{count}</span>
                  </div>
                  {Array.from({ length: Math.min(count, 3) }).map((_, i) => (
                    <div key={i} style={{ background: "#2A2A2A", borderRadius: 7, padding: "8px 10px", marginBottom: 6, borderLeft: `3px solid ${color}` }}>
                      <div style={{ fontSize: 10, color: "#666", marginBottom: 3 }}>Mesa {[3,7,11][i % 3]}</div>
                      <div style={{ fontSize: 11, color: "#ccc", fontWeight: 500 }}>
                        {["2x Cerveja", "1x Hambúrguer", "3x Água", "1x Picanha", "2x Frango"][i % 5]}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
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
              <div key={title} className={`fade-up-${(i % 4) + 1}`} style={{
                background: "#F9F8F5",
                border: "1px solid #E8E4DC",
                borderRadius: 16, padding: "28px 24px",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0F0F0F", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>{desc}</p>
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
