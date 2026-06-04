import { C as colors } from "@/lib/theme";
const C = colors.accent;

const COLS = [
  { label: "Recebido",          count: 3, bg: "#3B82F6", glow: "rgba(59,130,246,0.15)",  textColor: "#93C5FD",
    items: [["Mesa 3","2x Cerveja Heineken"],["Mesa 7","1x Hambúrguer Artesanal"],["Mesa 11","3x Água Mineral"]] },
  { label: "Em preparo",        count: 5, bg: "#F97316", glow: "rgba(249,115,22,0.15)",   textColor: "#FDBA74",
    items: [["Mesa 2","1x Caipirinha"],["Mesa 5","2x Batata Frita"],["Mesa 8","4x Cerveja"]] },
  { label: "Pronto!",           count: 2, bg: "#22C55E", glow: "rgba(34,197,94,0.15)",    textColor: "#86EFAC",
    items: [["Mesa 4","2x Refrigerante"],["Mesa 9","1x Porcão Frango"]] },
  { label: "Entregue",          count: 8, bg: "#8B5CF6", glow: "rgba(139,92,246,0.12)",   textColor: "#C4B5FD",
    items: [["Mesa 1","3x Porção"],["Mesa 6","1x Pizza"],["Mesa 10","2x Dose"]] },
  { label: "Mesas",             count: 2, bg: "#D97706", glow: "rgba(217,119,6,0.12)",    textColor: "#FCD34D",
    isMesas: true },
  { label: "Contas aguardando", count: 0, bg: "#DB2777", glow: "rgba(219,39,119,0.12)",   textColor: "#F9A8D4",
    items: [] },
];

export default function KanbanMock() {
  return (
    <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.06)" }}>
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

      <div style={{ background: "#141414", padding: "12px 12px 14px", display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 8 }}>
        {COLS.map(({ label, count, bg, glow, textColor, items, isMesas }) => (
          <div key={label} style={{ borderRadius: 10, overflow: "hidden", background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ background: bg, padding: "7px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 10, fontWeight: 800, color: "#fff", letterSpacing: "0.03em", lineHeight: 1.2 }}>{label}</span>
              <span style={{ fontSize: 10, fontWeight: 800, color: "#fff", background: "rgba(255,255,255,0.25)", padding: "1px 7px", borderRadius: 100, flexShrink: 0 }}>{count}</span>
            </div>

            <div style={{ background: glow, padding: 7, display: "flex", flexDirection: "column", gap: 5, minHeight: 100 }}>
              {isMesas ? (
                <>
                  {[{ num: 1 }, { num: 2 }].map(({ num }) => (
                    <div key={num} style={{ background: "#1e1e1e", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 7, padding: "6px 8px", textAlign: "center" }}>
                      <div style={{ fontSize: 16, fontWeight: 800, color: "#22C55E" }}>{num}</div>
                      <div style={{ fontSize: 8, color: "#22C55E", fontWeight: 600, opacity: 0.8 }}>livre</div>
                    </div>
                  ))}
                </>
              ) : items && items.length > 0 ? (
                items.map(([mesa, item], i) => (
                  <div key={i} style={{ background: "#1e1e1e", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 7, padding: "6px 8px" }}>
                    <div style={{ fontSize: 8, color: "#555", marginBottom: 2, fontWeight: 500 }}>{mesa}</div>
                    <div style={{ fontSize: 10, color: "#ddd", fontWeight: 600, lineHeight: 1.3 }}>{item}</div>
                  </div>
                ))
              ) : (
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
