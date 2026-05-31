import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://publy.tech";
  const now = new Date();
  const posts = getAllPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,                   lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/planos`,       lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/blog`,         lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/contato`,      lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/termos`,       lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/privacidade`,  lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}
