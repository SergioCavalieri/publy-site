import { C as colors } from "@/lib/theme";
const C = colors.accent;

export default function PhoneMockMesa() {
  return (
    <div style={{ position: "relative", width: 280, margin: "0 auto", filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.7))" }}>
      <div style={{
        background: "linear-gradient(160deg, #2a2a2a 0%, #111 100%)",
        borderRadius: 44, padding: "12px 8px",
        border: "2px solid rgba(255,255,255,0.12)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", top: 18, left: "50%", transform: "translateX(-50%)",
          width: 100, height: 26, borderRadius: 13, background: "#000", zIndex: 10,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
        }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#1a1a1a", border: "1.5px solid #333" }} />
        </div>

        <div style={{ background: "#0c0c0c", borderRadius: 36, overflow: "hidden", height: 580, position: "relative", display: "flex", flexDirection: "column" }}>
          <div style={{ height: 50, background: "#0c0c0c", flexShrink: 0 }} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "20px 24px 32px", background: "#0c0c0c", overflowY: "hidden" }}>
            <div style={{ marginBottom: 28 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,10px)", gap: 3, margin: "0 auto 4px" }}>
                {[1, 0.45, 0.45, 1, 1, 0.2].map((op, i) => (
                  <div key={i} style={{ width: 10, height: 10, borderRadius: 2.5, background: C, opacity: op }} />
                ))}
              </div>
              <div style={{ fontSize: 11, fontWeight: 300, color: "#fff", letterSpacing: "0.16em", textTransform: "uppercase", textAlign: "center", marginTop: 4 }}>PUBLY</div>
            </div>

            <div style={{ background: "rgba(79,142,247,0.15)", border: "1px solid rgba(79,142,247,0.3)", borderRadius: 100, padding: "4px 14px", marginBottom: 12 }}>
              <span style={{ fontSize: 10, color: C, fontWeight: 700, letterSpacing: "0.06em" }}>MESA 1</span>
            </div>

            <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 4, letterSpacing: "-0.02em" }}>Bem-vindo!</div>
            <div style={{ fontSize: 11, color: "#666", marginBottom: 24, textAlign: "center" }}>Preencha para entrar na mesa</div>

            <div style={{ width: "100%", marginBottom: 12 }}>
              <div style={{ fontSize: 10, color: "#555", marginBottom: 5, fontWeight: 600, letterSpacing: "0.04em" }}>SEU NOME</div>
              <div style={{ background: "#1a1a1a", border: "1.5px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "11px 14px", fontSize: 13, color: "#fff" }}>
                João Silva
              </div>
            </div>

            <div style={{ width: "100%", marginBottom: 18 }}>
              <div style={{ fontSize: 10, color: "#555", marginBottom: 5, fontWeight: 600, letterSpacing: "0.04em" }}>CELULAR (WHATSAPP)</div>
              <div style={{ background: "#1a1a1a", border: `1.5px solid ${C}`, borderRadius: 10, padding: "11px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                  <rect x="4" y="1.5" width="10" height="15" rx="2" stroke={C} strokeWidth="1.75" />
                  <circle cx="9" cy="14" r="1" fill={C} opacity="0.5" />
                </svg>
                <span style={{ fontSize: 13, color: "#aaa" }}>(11) 99999-9999</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, alignItems: "flex-start", width: "100%", marginBottom: 22 }}>
              <div style={{ width: 16, height: 16, borderRadius: 4, flexShrink: 0, marginTop: 1, background: C, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 8, height: 5, borderLeft: "2px solid #fff", borderBottom: "2px solid #fff", transform: "rotate(-45deg)", marginBottom: 2 }} />
              </div>
              <span style={{ fontSize: 10, color: "#555", lineHeight: 1.6 }}>Concordo com os termos de uso e política de privacidade</span>
            </div>

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
