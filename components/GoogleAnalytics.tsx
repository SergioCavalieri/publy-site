"use client";

/**
 * GoogleAnalytics — Integração GA4 no publy-site
 *
 * TODO: quando o site estiver hospedado, substitua GA_ID pelo ID real:
 *   1. Acesse analytics.google.com (com sua conta Google)
 *   2. Crie uma propriedade GA4 para o publy-site
 *   3. Vá em Administrador → Fluxos de dados → Web
 *   4. Copie o "ID de medição" (começa com G-)
 *   5. Substitua "G-XXXXXXXXXX" abaixo pelo ID copiado
 */

import Script from "next/script";

export const GA_ID = "G-XXXXXXXXXX"; // ← substituir pelo ID real

export default function GoogleAnalytics() {
  if (GA_ID === "G-XXXXXXXXXX") return null; // Não carrega em desenvolvimento

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_location: window.location.href,
            page_title: document.title,
          });
        `}
      </Script>
    </>
  );
}
