import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import { baseMetadata } from "@/lib/seo";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${dmMono.variable}`}>
      <head>
        {/* Favicon SVG com fundo transparente */}
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Crect x='16' y='8' width='20' height='20' rx='4' fill='%234F8EF7' opacity='1'/%3E%3Crect x='42' y='8' width='20' height='20' rx='4' fill='%234F8EF7' opacity='0.45'/%3E%3Crect x='16' y='32' width='20' height='20' rx='4' fill='%234F8EF7' opacity='0.45'/%3E%3Crect x='42' y='32' width='20' height='20' rx='4' fill='%234F8EF7' opacity='1'/%3E%3Crect x='16' y='56' width='20' height='20' rx='4' fill='%234F8EF7' opacity='1'/%3E%3Crect x='42' y='56' width='20' height='20' rx='4' fill='%234F8EF7' opacity='0.2'/%3E%3C/svg%3E"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
