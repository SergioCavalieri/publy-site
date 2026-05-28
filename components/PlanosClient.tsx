"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Plano } from "@/lib/api";

type Periodo = "mensal" | "anual" | "bienal";

const fmtVal = (v: number) =>
  Number(v).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function getTier(nome: string) {
  if (nome.toLowerCase().includes("pró max") || nome.toLowerCase().includes("pro max")) return "max";
  if (nome.toLowerCase().includes("pró") || nome.toLowerCase().includes("pro")) return "pro";
  return "basic";
}

const TIER_CONFIG = {
  basic: { label: "Básico", cor: "#4F8EF7", destaque: false, desc: "Perfeito para estabelecimentos menores que querem começar com agilidade." },
  pro:   { label: "Pró",    cor: "#7C3AED", destaque: true,  desc: "Para estabelecimentos em crescimento com mais movimento e demanda." },
  max:   { label: "Pró Max",cor: "#4F8EF7", destaque: false, desc: "Para casas maiores que precisam do máximo de capacidade." },
};

const CHECK = (color: string) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill={color} fillOpacity="0.15" />
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

function getPreco(plano: Plano, periodo: Periodo): number {
  if (periodo === "anual")  return Number(plano.preco_anual  ?? plano.preco_mensal);
  if (periodo === "bienal") return Number(plano.preco_bienal ?? plano.preco_mensal);
  return Number(plano.preco_mensal);
}

function getEconomia(plano: Plano, periodo: Periodo): number {
  if (periodo === "anual")  return Number(plano.economia_anual  ?? 0);
  if (periodo === "bienal") return Number(plano.economia_bienal ?? 0);
  return 0;
}

interface Props {
  planos: Plano[];
}

export default function PlanosClient({ planos }: Props) {
  const [periodo, setPeriodo] = useState<Periodo>("mensal");

  const OPCOES: { valor: Periodo; label: string; badge?: string }[] = [
    { valor: "mensal",  label: "1 mês" },
    { valor: "anual",   label: "12 meses", badge: planos[0]?.desconto_anual_pct ? `${planos[0].desconto_anual_pct}% off` : undefined },
    { valor: "bienal",  label: "24 meses", badge: "Melhor preço" },
  ];

  return (
    <>
      {/* ── Seletor de período ── */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
        <div style={{
          display: "inline-flex",
          background: "#141414",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 14,
          padding: 4,
          gap: 2,
        }}>
          {OPCOES.map(({ valor, label, badge }) => {
            const ativo = periodo === valor;
            return (
              <button
                key={valor}
                onClick={() => setPeriodo(valor)}
                style={{
                  padding: "10px 20px",
                  borderRadius: 10,
                  border: "none",
                  background: ativo ? "#4F8EF7" : "transparent",
                  color: ativo ? "#fff" : "#666",
                  fontWeight: ativo ? 700 : 500,
                  fontSize: 14,
                  cursor: "pointer",
                  transition: "all 0.18s",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  whiteSpace: "nowrap",
                }}
              >
                {label}
                {badge && (
                  <span style={{
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "2px 7px",
                    borderRadius: 100,
                    background: ativo ? "rgba(255,255,255,0.2)" : "rgba(34,197,94,0.15)",
                    color: ativo ? "#fff" : "#22c55e",
                    letterSpacing: "0.04em",
                  }}>
                    {badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Aviso de economia (anual/bienal) ── */}
      {periodo !== "mensal" && planos.length > 0 && getEconomia(planos[0], periodo) > 0 && (
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 20px",
            background: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.2)",
            borderRadius: 100,
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1.5l1.5 3 3.3.5-2.4 2.3.6 3.3L7 9l-3 1.6.6-3.3L2.2 5l3.3-.5L7 1.5z" fill="#22C55E"/>
            </svg>
            <span style={{ fontSize: 13, color: "#22c55e", fontWeight: 600 }}>
              {periodo === "anual" ? "Você economiza" : "Máxima economia:"}{" "}
              {fmtVal(getEconomia(planos[0], periodo))} comparado ao plano mensal
            </span>
          </div>
        </div>
      )}

      {/* ── Grid de planos ── */}
      {planos.length === 0 ? (
        <div style={{ textAlign: "center", padding: 64, color: "#555" }}>
          <p>Não foi possível carregar os planos. Tente novamente em instantes.</p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
          {planos.map((plano) => {
            const tier = getTier(plano.nome);
            const config = TIER_CONFIG[tier];
            const features = getFeatures(plano);
            const preco = getPreco(plano, periodo);
            const economia = getEconomia(plano, periodo);
            const temDesconto = economia > 0;

            return (
              <motion.div
                key={plano.id}
                className={`plan-card${config.destaque ? " destaque" : ""}`}
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
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
                  <div style={{ fontSize: 15, fontWeight: 600, color: "#ffffff", marginBottom: 4 }}>
                    {plano.nome}
                  </div>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.5, marginBottom: 20 }}>
                    {plano.descricao || config.desc}
                  </p>
                </div>

                {/* Preço com animação de troca */}
                <div style={{ marginBottom: 8 }}>
                  {temDesconto && (
                    <div style={{ fontSize: 13, color: "#555", textDecoration: "line-through", marginBottom: 2 }}>
                      {fmtVal(Number(plano.preco_mensal))}/mês
                    </div>
                  )}
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                    <span style={{ fontSize: 40, fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em", transition: "all 0.2s" }}>
                      {fmtVal(preco)}
                    </span>
                    <span style={{ fontSize: 14, color: "#666" }}>/mês</span>
                  </div>
                  {periodo !== "mensal" && (
                    <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>
                      {periodo === "anual" ? "Cobrado anualmente" : "Cobrado a cada 2 anos"}
                      {" "}· {fmtVal(preco * (periodo === "anual" ? 12 : 24))} no total
                    </div>
                  )}
                  {plano.taxa_setup > 0 && (
                    <div style={{ fontSize: 12, color: "#555", marginTop: 4 }}>
                      + {fmtVal(Number(plano.taxa_setup))} de setup (único)
                    </div>
                  )}
                </div>

                {/* Badge economia */}
                {temDesconto && (
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "5px 12px", marginBottom: 20,
                    background: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.18)",
                    borderRadius: 100,
                  }}>
                    <span style={{ fontSize: 11, color: "#22c55e", fontWeight: 700 }}>
                      ECONOMIZE {fmtVal(economia)}
                    </span>
                  </div>
                )}

                <Link
                  href={`/assinar/${plano.id}?periodo=${periodo}`}
                  style={{
                    display: "block", width: "100%", padding: "13px",
                    background: config.destaque ? "#7C3AED" : "#4F8EF7",
                    color: "#fff", borderRadius: 12, fontWeight: 700, fontSize: 15,
                    textAlign: "center", marginBottom: 24,
                    boxShadow: config.destaque ? "0 4px 20px rgba(124,58,237,0.35)" : "0 4px 20px rgba(79,142,247,0.25)",
                    transition: "opacity 0.15s",
                  }}
                >
                  Iniciar trial grátis →
                </Link>

                <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 20 }}>
                  {features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                      {CHECK(config.cor)}
                      <span style={{ fontSize: 13, color: "#888", lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </>
  );
}
