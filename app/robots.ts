import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://publy.app";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/obrigado", "/api/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
