/**
 * analytics.ts — Utilitários de rastreamento GA4 para o publy-site
 *
 * Funil rastreado:
 *   Landing (/) → Planos (/planos) → Assinar (/assinar) → Obrigado (/obrigado)
 *
 * Page views são registradas automaticamente pelo GA4.
 * Use as funções abaixo para rastrear eventos customizados.
 */

import { GA_ID } from "@/components/GoogleAnalytics";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
    dataLayer?: unknown[];
  }
}

/** Dispara um evento GA4 genérico */
export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, params);
}

// ── Eventos do funil ──────────────────────────────────────────────────────

/** CTA "Começar 14 dias grátis" clicado na hero */
export const trackHeroCta = () =>
  trackEvent("cta_click", { location: "hero", label: "Começar 14 dias grátis" });

/** CTA da seção final clicado */
export const trackFooterCta = () =>
  trackEvent("cta_click", { location: "cta_final", label: "Começar agora" });

/** Usuário clicou em "Ver funcionalidades" */
export const trackVerFuncionalidades = () =>
  trackEvent("cta_click", { location: "hero", label: "Ver funcionalidades" });

/** Plano selecionado na página /planos */
export const trackPlanoSelecionado = (plano: string, periodo: string) =>
  trackEvent("plano_selecionado", { plano, periodo });

/** Botão "Assinar" clicado em um plano */
export const trackAssinarClick = (plano: string) =>
  trackEvent("cta_assinar_click", { plano });

/** Formulário de assinatura enviado */
export const trackFormularioEnviado = (plano: string) =>
  trackEvent("formulario_assinar_enviado", { plano });

/**
 * Conversão: usuário chegou na página /obrigado
 * Este é o evento mais importante — indica um novo cliente.
 */
export const trackConversao = (plano: string, email?: string) => {
  trackEvent("conversion", {
    send_to: `${GA_ID}/obrigado`,
    plano,
    ...(email ? { email_hash: email.toLowerCase().trim() } : {}),
  });
  // Também dispara como purchase para relatórios de e-commerce do GA4
  trackEvent("sign_up", { method: "publy_site", plano });
};
