import { C as colors } from "@/lib/theme";
const C = colors.accent;

const SIDEBAR_ITEMS = ["Início", "Dashboard", "Mesas", "Pedidos", "Cardápio", "Contas", "Estoque", "Financeiro", "Analytics", "Clientes", "Config."];
const METRICS = [
  { label: "Receita total",       value: "R$ 12.840", delta: "+18%",           up: true },
  { label: "Contas fechadas",     value: "247",        delta: "+12%",           up: true },
  { label: "Ticket médio",        value: "R$ 52,00",   delta: "+5%",            up: true },
  { label: "Variação de receita", value: "+22%",       delta: "vs mês anterior", up: true },
];
const TOP_PRODS = [
  { name: "Heineken 600ml",        pct: 85, val: "R$ 3.240" },
  { name: "Hambúrguer Artesanal",  pct: 68, val: "R$ 2.890" },
  { name: "Caipirinha",            pct: 54, val: "R$ 1.960" },
  { name: "Batata Frita",          pct: 41, val: "R$ 1.420" },
];
const HORARIOS = [
  { h: "18h", pct: 22 }, { h: "19h", pct: 45 }, { h: "20h", pct: 78 },
  { h: "21h", pct: 100 }, { h: "22h", pct: 88 }, { h: "23h", pct: 60 }, { h: "00h", pct: 34 },
];

export default function DesktopMockAnalytics() {
  return (
    <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.06)", filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.6))" }}>
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

      <div style={{ display: "flex", height: 440, background: "#0F0F0F" }}>
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

        <div style={{ flex: 1, overflow: "hidden", padding: "14px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>Analytics</div>
              <div style={{ fontSize: 10, color: "#555" }}>Maio 2026 · comparado ao mês anterior</div>
            </div>
            <div style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 6, padding: "4px 10px", fontSize: 9, color: "#666" }}>Últimos 30 dias ▾</div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
            {METRICS.map(({ label, value, delta, up }) => (
              <div key={label} style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "10px 12px" }}>
                <div style={{ fontSize: 9, color: "#555", marginBottom: 5, fontWeight: 500 }}>{label}</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>{value}</div>
                <div style={{ fontSize: 9, color: up ? "#22C55E" : "#ef4444", marginTop: 4, fontWeight: 600 }}>{delta}</div>
              </div>
            ))}
          </div>

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
                  {([[0,65],[40,50],[80,35],[120,38],[160,18],[200,10]] as [number,number][]).map(([x,y],i) => (
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
