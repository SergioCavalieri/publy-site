/**
 * Utilitários de SEO — metadados e JSON-LD centralizados
 */
import type { Metadata } from "next";

export const SITE_NAME = "Publy";
export const SITE_URL  = process.env.NEXT_PUBLIC_SITE_URL || "https://publy.app";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

// ── Metadata base ────────────────────────────────────────────────
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Publy — Sistema de pedidos para bares e pubs",
    template: "%s | Publy",
  },
  description:
    "Autoatendimento via QR Code, kanban e gestão completa para restaurantes, cafés, pizzarias e estabelecimentos de alimentação. Comece grátis por 14 dias.",
  keywords: [
    "sistema para restaurante",
    "sistema de pedidos",
    "QR Code cardápio",
    "cardápio digital restaurante",
    "sistema para café",
    "sistema para pizzaria",
    "autoatendimento mesa",
    "kanban pedidos cozinha",
    "sistema food service",
    "gestão estabelecimento",
    "publy",
  ],
  authors: [{ name: "Publy", url: SITE_URL }],
  creator: "Publy",
  publisher: "Publy",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: "Publy — Sistema de pedidos para restaurantes e estabelecimentos",
    description:
      "Autoatendimento via QR Code, kanban e gestão completa para o seu bar. 14 dias grátis.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Publy — Sistema para bares" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Publy — Sistema de pedidos para restaurantes e estabelecimentos",
    description: "Autoatendimento via QR Code e gestão completa para o seu bar. 14 dias grátis.",
    images: [DEFAULT_OG_IMAGE],
    creator: "@publyapp",
  },
  alternates: { canonical: SITE_URL },
};

// ── JSON-LD helpers ──────────────────────────────────────────────
export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Publy",
    url: SITE_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "39.90",
      priceCurrency: "BRL",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        billingDuration: "P1M",
      },
    },
    description:
      "Sistema de pedidos e autoatendimento via QR Code para restaurantes, cafés, pizzarias e estabelecimentos de alimentação.",
    screenshot: DEFAULT_OG_IMAGE,
    featureList: [
      "Cardápio digital via QR Code",
      "Pedidos em tempo real",
      "Kanban para cozinha e atendimento",
      "Fechamento de conta por mesa",
      "Analytics e relatórios",
      "Controle de estoque",
    ],
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Publy",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      email: "contato@publy.app",
      contactType: "customer support",
      availableLanguage: "Portuguese",
    },
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
