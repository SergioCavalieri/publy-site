import type { NextConfig } from "next";

const securityHeaders = [
  // Impede que o site seja carregado em iframes (proteção contra clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  // Bloqueia sniffing de MIME type
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Ativa proteção XSS legacy em browsers mais antigos
  { key: "X-XSS-Protection", value: "1; mode=block" },
  // Não envia referrer completo ao navegar para outros domínios
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Restringe acesso a APIs sensíveis do browser
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  // HTTPS obrigatório por 1 ano (ativo apenas em produção)
  ...(process.env.NODE_ENV === "production"
    ? [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" }]
    : []),
  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://admin.publy.tech https://viacep.com.br https://www.google-analytics.com https://analytics.google.com",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Permite imagens externas se necessário no futuro
  images: { domains: [] },

  async headers() {
    return [
      {
        // Aplica em todas as rotas
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
