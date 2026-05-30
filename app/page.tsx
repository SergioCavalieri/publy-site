import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PublyLogo from "@/components/PublyLogo";
import FeatureIcon from "@/components/FeatureIcon";
import { SITE_URL, softwareApplicationSchema, organizationSchema } from "@/lib/seo";
import { HeroFade, FadeUp, SlideLeft, SlideRight, Stagger, StaggerItem } from "@/components/Animate";

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

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Caixa de ícone — estilo Publy (igual ao FeatureIcon mas menor, 36px)      */
/* ─────────────────────────────────────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Ícones SVG inline no padrão Publy (geométricos, sem emoji)                */
/* ─────────────────────────────────────────────────────────────────────────── */
const C = "#4F8EF7";

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

/* Tipos de negócio — ícones geométricos Publy */
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

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Mock fiel ao visual real da MesaPage no mobile                            */
/* ─────────────────────────────────────────────────────────────────────────── */
function PhoneMockMesa() {
  return (
    <div style={{ position: "relative", width: 280, margin: "0 auto", filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.7))" }}>
      {/* Chassis */}
      <div style={{
        background: "linear-gradient(160deg, #2a2a2a 0%, #111 100%)",
        borderRadius: 44, padding: "12px 8px",
        border: "2px solid rgba(255,255,255,0.12)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)",
        position: "relative",
      }}>
        {/* Dynamic island */}
        <div style={{
          position: "absolute", top: 18, left: "50%", transform: "translateX(-50%)",
          width: 100, height: 26, borderRadius: 13, background: "#000", zIndex: 10,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
        }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#1a1a1a", border: "1.5px solid #333" }} />
        </div>

        {/* Tela */}
        <div style={{ background: "#0c0c0c", borderRadius: 36, overflow: "hidden", height: 580, position: "relative", display: "flex", flexDirection: "column" }}>
          <div style={{ height: 50, background: "#0c0c0c", flexShrink: 0 }} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "20px 24px 32px", background: "#0c0c0c", overflowY: "hidden" }}>
            {/* Logo */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,10px)", gap: 3, margin: "0 auto 4px" }}>
                {[1, 0.45, 0.45, 1, 1, 0.2].map((op, i) => (
                  <div key={i} style={{ width: 10, height: 10, borderRadius: 2.5, background: C, opacity: op }} />
                ))}
              </div>
              <div style={{ fontSize: 11, fontWeight: 300, color: "#fff", letterSpacing: "0.16em", textTransform: "uppercase", textAlign: "center", marginTop: 4 }}>PUBLY</div>
            </div>

            {/* Mesa badge */}
            <div style={{ background: "rgba(79,142,247,0.15)", border: "1px solid rgba(79,142,247,0.3)", borderRadius: 100, padding: "4px 14px", marginBottom: 12 }}>
              <span style={{ fontSize: 10, color: C, fontWeight: 700, letterSpacing: "0.06em" }}>MESA 1</span>
            </div>

            <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 4, letterSpacing: "-0.02em" }}>Bem-vindo!</div>
            <div style={{ fontSize: 11, color: "#666", marginBottom: 24, textAlign: "center" }}>Preencha para entrar na mesa</div>

            {/* Campo nome */}
            <div style={{ width: "100%", marginBottom: 12 }}>
              <div style={{ fontSize: 10, color: "#555", marginBottom: 5, fontWeight: 600, letterSpacing: "0.04em" }}>SEU NOME</div>
              <div style={{ background: "#1a1a1a", border: "1.5px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "11px 14px", fontSize: 13, color: "#fff" }}>
                João Silva
              </div>
            </div>

            {/* Campo celular */}
            <div style={{ width: "100%", marginBottom: 18 }}>
              <div style={{ fontSize: 10, color: "#555", marginBottom: 5, fontWeight: 600, letterSpacing: "0.04em" }}>CELULAR (WHATSAPP)</div>
              <div style={{ background: "#1a1a1a", border: `1.5px solid ${C}`, borderRadius: 10, padding: "11px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                {/* Ícone de celular SVG — sem emoji */}
                <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                  <rect x="4" y="1.5" width="10" height="15" rx="2" stroke={C} strokeWidth="1.75" />
                  <circle cx="9" cy="14" r="1" fill={C} opacity="0.5" />
                </svg>
                <span style={{ fontSize: 13, color: "#aaa" }}>(11) 99999-9999</span>
              </div>
            </div>

            {/* Checkbox */}
            <div style={{ display: "flex", gap: 8, alignItems: "flex-start", width: "100%", marginBottom: 22 }}>
              <div style={{ width: 16, height: 16, borderRadius: 4, flexShrink: 0, marginTop: 1, background: C, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 8, height: 5, borderLeft: "2px solid #fff", borderBottom: "2px solid #fff", transform: "rotate(-45deg)", marginBottom: 2 }} />
              </div>
              <span style={{ fontSize: 10, color: "#555", lineHeight: 1.6 }}>Concordo com os termos de uso e política de privacidade</span>
            </div>

            {/* Botão */}
            <div style={{ width: "100%", background: `linear-gradient(135deg, ${C} 0%, #3d7de8 100%)`, borderRadius: 12, padding: "13px", textAlign: "center", color: "#fff", fontSize: 14, fontWeight: 700, boxShadow: "0 6px 24px rgba(79,142,247,0.5)" }}>
              Entrar na mesa →
            </div>

            <div style={{ marginTop: "auto", paddingTop: 20, fontSize: 9, color: "#333", textAlign: "center" }}>Powered by Publy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Mock fiel ao visual real da página Analytics no admin                     */
/* ─────────────────────────────────────────────────────────────────────────── */
function DesktopMockAnalytics() {
  const SIDEBAR_ITEMS = ["Início", "Dashboard", "Mesas", "Pedidos", "Cardápio", "Contas", "Estoque", "Financeiro", "Analytics", "Clientes", "Config."];
  const METRICS = [
    { label: "Receita total", value: "R$ 12.840", delta: "+18%", up: true },
    { label: "Contas fechadas", value: "247", delta: "+12%", up: true },
    { label: "Ticket médio", value: "R$ 52,00", delta: "+5%", up: true },
    { label: "Variação de receita", value: "+22%", delta: "vs mês anterior", up: true },
  ];
  const TOP_PRODS = [
    { name: "Heineken 600ml", pct: 85, val: "R$ 3.240" },
    { name: "Hambúrguer Artesanal", pct: 68, val: "R$ 2.890" },
    { name: "Caipirinha", pct: 54, val: "R$ 1.960" },
    { name: "Batata Frita", pct: 41, val: "R$ 1.420" },
  ];
  const HORARIOS = [
    { h: "18h", pct: 22 }, { h: "19h", pct: 45 }, { h: "20h", pct: 78 },
    { h: "21h", pct: 100 }, { h: "22h", pct: 88 }, { h: "23h", pct: 60 }, { h: "00h", pct: 34 },
  ];

  return (
    <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.06)", filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.6))" }}>
      {/* Barra macOS */}
      <div style={{ background: "#1a1a1a", padding: "9px 14px", display: "flex", alignItems: "center", gap: 7, borderBottom: "1px solid #111" }}>
        {["#FF5F57", "#FFBD2E", "#28CA41"].map((c2) => (
          <div key={c2} style={{ width: 10, height: 10, borderRadius: "50%", background: c2 }} />
        ))}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <div style={{ background: "#2a2a2a", borderRadius: 5, padding: "3px 18px", fontSize: 10, color: "#666", fontFamily: "monospace" }}>
            publy.tech/admin/analytics
          </div>
        </div>
      </div>

      {/* Layout admin */}
      <div style={{ display: "flex", height: 440, background: "#0F0F0F" }}>
        {/* Sidebar */}
        <div style={{ width: 120, background: "#111", borderRight: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column", padding: "12px 0" }}>
          <div style={{ padding: "0 12px 12px", borderBottom: "1px solid rgba(255,255,255,0.05)", marginBottom: 8 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,7px)", gap: 2, marginBottom: 3 }}>
              {[1, 0.45, 0.45, 1, 1, 0.2].map((op, i) => (
                <div key={i} style={{ width: 7, height: 7, borderRadius: 1.5, background: C, opacity: op }} />
              ))}
            </div>
            <div style={{ fontSize: 8, color: "#666", letterSpacing: "0.1em" }}>Painel Admin</div>
          </div>
          {SIDEBAR_ITEMS.map((item) => (
            <div key={item} style={{
              padding: "6px 12px", fontSize: 10,
              color: item === "Analytics" ? C : "#555",
              fontWeight: item === "Analytics" ? 700 : 400,
              background: item === "Analytics" ? "rgba(79,142,247,0.1)" : "transparent",
              borderLeft: item === "Analytics" ? `2px solid ${C}` : "2px solid transparent",
            }}>{item}</div>
          ))}
        </div>

        {/* Main */}
        <div style={{ flex: 1, overflow: "hidden", padding: "14px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>Analytics</div>
              <div style={{ fontSize: 10, color: "#555" }}>Maio 2026 · comparado ao mês anterior</div>
            </div>
            <div style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 6, padding: "4px 10px", fontSize: 9, color: "#666" }}>Últimos 30 dias ▾</div>
          </div>

          {/* Metric cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
            {METRICS.map(({ label, value, delta, up }) => (
              <div key={label} style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "10px 12px" }}>
                <div style={{ fontSize: 9, color: "#555", marginBottom: 5, fontWeight: 500 }}>{label}</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>{value}</div>
                <div style={{ fontSize: 9, color: up ? "#22C55E" : "#ef4444", marginTop: 4, fontWeight: 600 }}>{delta}</div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, flex: 1, minHeight: 0 }}>
            <div style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "12px", display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Tendência de receita</div>
              <div style={{ fontSize: 8, color: "#555", marginBottom: 10 }}>Receita diária (últimos 30 dias)</div>
              <div style={{ flex: 1, position: "relative", minHeight: 80 }}>
                <svg width="100%" height="100%" viewBox="0 0 200 80" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="ag1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={C} stopOpacity="0.35" />
                      <stop offset="100%" stopColor={C} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,65 L20,58 L40,50 L60,45 L80,35 L100,30 L120,38 L140,22 L160,18 L180,12 L200,10 L200,80 L0,80 Z" fill="url(#ag1)" />
                  <path d="M0,65 L20,58 L40,50 L60,45 L80,35 L100,30 L120,38 L140,22 L160,18 L180,12 L200,10" fill="none" stroke={C} strokeWidth="1.5" />
                  {[[0,65],[40,50],[80,35],[120,38],[160,18],[200,10]].map(([x,y],i) => (
                    <circle key={i} cx={x} cy={y} r="2.5" fill={C} />
                  ))}
                </svg>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "12px", flex: 1 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Top produtos por receita</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {TOP_PRODS.map(({ name, pct, val }) => (
                    <div key={name}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                        <span style={{ fontSize: 8.5, color: "#888", maxWidth: 100, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</span>
                        <span style={{ fontSize: 8.5, color: C, fontWeight: 700 }}>{val}</span>
                      </div>
                      <div style={{ height: 4, background: "rgba(255,255,255,0.05)", borderRadius: 3 }}>
                        <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg, ${C}, #7ab3ff)`, borderRadius: 3 }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "12px", flex: 1 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Receita por horário</div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 44 }}>
                  {HORARIOS.map(({ h, pct }) => (
                    <div key={h} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                      <div style={{ width: "100%", height: `${pct * 0.4}px`, background: pct >= 80 ? `linear-gradient(180deg,${C},#3d7de8)` : "rgba(79,142,247,0.35)", borderRadius: "3px 3px 0 0" }} />
                      <div style={{ fontSize: 7, color: "#444" }}>{h}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Mock fiel ao visual real do Kanban de Pedidos (tema escuro)               */
/* ─────────────────────────────────────────────────────────────────────────── */
function KanbanMock() {
  const COLS = [
    { label: "Recebido",          count: 3,  bg: "#3B82F6", glow: "rgba(59,130,246,0.15)",   textColor: "#93C5FD",
      items: [["Mesa 3","2x Cerveja Heineken"],["Mesa 7","1x Hambúrguer Artesanal"],["Mesa 11","3x Água Mineral"]] },
    { label: "Em preparo",        count: 5,  bg: "#F97316", glow: "rgba(249,115,22,0.15)",    textColor: "#FDBA74",
      items: [["Mesa 2","1x Caipirinha"],["Mesa 5","2x Batata Frita"],["Mesa 8","4x Cerveja"]] },
    { label: "Pronto!",           count: 2,  bg: "#22C55E", glow: "rgba(34,197,94,0.15)",     textColor: "#86EFAC",
      items: [["Mesa 4","2x Refrigerante"],["Mesa 9","1x Porcão Frango"]] },
    { label: "Entregue",          count: 8,  bg: "#8B5CF6", glow: "rgba(139,92,246,0.12)",    textColor: "#C4B5FD",
      items: [["Mesa 1","3x Porção"],["Mesa 6","1x Pizza"],["Mesa 10","2x Dose"]] },
    { label: "Mesas",             count: 2,  bg: "#D97706", glow: "rgba(217,119,6,0.12)",     textColor: "#FCD34D",
      isMesas: true },
    { label: "Contas aguardando", count: 0,  bg: "#DB2777", glow: "rgba(219,39,119,0.12)",    textColor: "#F9A8D4",
      items: [] },
  ];

  return (
    <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.06)" }}>
      {/* Barra do browser macOS */}
      <div style={{ background: "#1e1e1e", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #111" }}>
        {["#FF5F57","#FFBD2E","#28CA41"].map((c2) => (
          <div key={c2} style={{ width: 11, height: 11, borderRadius: "50%", background: c2, flexShrink: 0 }} />
        ))}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <div style={{ background: "#2a2a2a", borderRadius: 6, padding: "4px 20px", fontSize: 11, color: "#888", fontFamily: "monospace", letterSpacing: "0.02em" }}>
            publy.tech/admin/pedidos
          </div>
        </div>
      </div>

      {/* Navbar Publy */}
      <div style={{ background: "#0F0F0F", padding: "0 16px", display: "flex", alignItems: "center", gap: 12, height: 44, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,8px)", gap: 2.5, marginRight: 4 }}>
          {[1,0.45,0.45,1,1,0.2].map((op,i) => (
            <div key={i} style={{ width:8, height:8, borderRadius:2, background:C, opacity:op }} />
          ))}
        </div>
        <span style={{ fontSize: 11, fontWeight: 300, color: "#fff", letterSpacing: "0.14em", textTransform: "uppercase" }}>PUBLY</span>
        <div style={{ width: 1, height: 18, background: "rgba(255,255,255,0.1)", margin: "0 4px" }} />
        <span style={{ fontSize: 11, color: "#555" }}>Admin</span>
        <div style={{ flex: 1 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 5, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: 100, padding: "3px 10px" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E" }} />
          <span style={{ fontSize: 10, color: "#22C55E", fontWeight: 600 }}>Online</span>
        </div>
        <div style={{ background: "#1a1a1a", borderRadius: 6, padding: "4px 10px", fontSize: 10, color: "#aaa" }}>Admin</div>
        <div style={{ background: "#ef4444", borderRadius: 6, padding: "4px 10px", fontSize: 10, color: "#fff", fontWeight: 700 }}>Sair</div>
      </div>

      {/* Tabs — fiel ao app real */}
      <div style={{ background: "#0F0F0F", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "0 16px", display: "flex", gap: 0, overflowX: "hidden" }}>
        {[
          { label: "Geral", active: true },
          { label: "Recebido" }, { label: "Em preparo" }, { label: "Pronto!" },
          { label: "Entregue" }, { label: "Finalizado" }, { label: "Cancelado" },
          { label: "Mesas" }, { label: "Contas" },
        ].map(({ label, active }) => (
          <div key={label} style={{
            padding: "11px 12px", fontSize: 11, fontWeight: active ? 700 : 400,
            color: active ? C : "rgba(255,255,255,0.35)",
            borderBottom: active ? `2px solid ${C}` : "2px solid transparent",
            whiteSpace: "nowrap",
          }}>{label}</div>
        ))}
      </div>

      {/* Board — fundo escuro */}
      <div style={{ background: "#141414", padding: "12px 12px 14px", display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 8 }}>
        {COLS.map(({ label, count, bg, glow, textColor, items, isMesas }) => (
          <div key={label} style={{ borderRadius: 10, overflow: "hidden", background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.05)" }}>
            {/* Header da coluna */}
            <div style={{ background: bg, padding: "7px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 10, fontWeight: 800, color: "#fff", letterSpacing: "0.03em", lineHeight: 1.2 }}>{label}</span>
              <span style={{ fontSize: 10, fontWeight: 800, color: "#fff", background: "rgba(255,255,255,0.25)", padding: "1px 7px", borderRadius: 100, flexShrink: 0 }}>{count}</span>
            </div>

            {/* Body */}
            <div style={{ background: glow, padding: 7, display: "flex", flexDirection: "column", gap: 5, minHeight: 100 }}>
              {isMesas ? (
                /* Coluna Mesas: mostra cards de mesa */
                <>
                  {[{ num: 1, status: "livre" }, { num: 2, status: "livre" }].map(({ num, status }) => (
                    <div key={num} style={{ background: "#1e1e1e", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 7, padding: "6px 8px", textAlign: "center" }}>
                      <div style={{ fontSize: 16, fontWeight: 800, color: "#22C55E" }}>{num}</div>
                      <div style={{ fontSize: 8, color: "#22C55E", fontWeight: 600, opacity: 0.8 }}>{status}</div>
                    </div>
                  ))}
                </>
              ) : items && items.length > 0 ? (
                /* Coluna com pedidos */
                items.map(([mesa, item], i) => (
                  <div key={i} style={{ background: "#1e1e1e", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 7, padding: "6px 8px" }}>
                    <div style={{ fontSize: 8, color: "#555", marginBottom: 2, fontWeight: 500 }}>{mesa}</div>
                    <div style={{ fontSize: 10, color: "#ddd", fontWeight: 600, lineHeight: 1.3 }}>{item}</div>
                  </div>
                ))
              ) : (
                /* Vazio */
                <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", height: 60 }}>
                  <span style={{ fontSize: 9, color: textColor, opacity: 0.5, fontWeight: 600, letterSpacing: "0.06em" }}>VAZIO</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */

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
              O sistema completo<br /><span style={{ color: C }}>para o seu negócio</span>
            </h1>
          </HeroFade>

          <HeroFade delay={0.35}>
            <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#888", lineHeight: 1.7, marginBottom: 40, maxWidth: 560, margin: "0 auto 40px" }}>
              QR Code por mesa, pedidos em tempo real, kanban para a cozinha e relatórios de vendas — tudo que o seu estabelecimento precisa, num só lugar.
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

        {/* Kanban mock — tema escuro, fiel ao app real */}
        <HeroFade delay={0.7}>
          <div style={{ position: "relative", marginTop: 72, maxWidth: 1100, width: "100%", animation: "gridFloat 6s ease-in-out infinite" }}>
            <KanbanMock />
          </div>
        </HeroFade>
      </section>

      {/* ── Métricas ──────────────────────────────── */}
      <section className="section-alt" style={{ padding: "64px 24px" }}>
        <Stagger className="grid-3" style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
          {[
            { num: "< 30min", label: "para configurar e usar" },
            { num: "14 dias",  label: "de trial grátis" },
            { num: "100%",     label: "via navegador, sem app" },
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
          {/* Texto */}
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
                { ico: <IcoLightning />, title: "Sem fila, sem espera",       desc: "Pedidos chegam direto na cozinha em segundos" },
                { ico: <IcoPhone />,    title: "Funciona em qualquer celular", desc: "iOS, Android — basta ter um navegador" },
                { ico: <IcoShield />,   title: "Simples e seguro",             desc: "Identidade confirmada via WhatsApp" },
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

          {/* Mock phone */}
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
          {/* Mock desktop */}
          <SlideLeft>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 300, background: "radial-gradient(ellipse, rgba(79,142,247,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
              <div style={{ animation: "gridFloat 8s ease-in-out infinite", position: "relative" }}>
                <DesktopMockAnalytics />
              </div>
            </div>
          </SlideLeft>

          {/* Texto */}
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
