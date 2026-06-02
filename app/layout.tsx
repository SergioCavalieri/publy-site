import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import { baseMetadata } from "@/lib/seo";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${dmMono.variable}`}>
      <head>
        {/* Preconnect GA4 — reduz latência do script de analytics */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
