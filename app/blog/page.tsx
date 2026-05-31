import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureIcon from "@/components/FeatureIcon";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog — Dicas para bares e restaurantes",
  description: "Artigos práticos sobre gestão de bares e restaurantes, cardápio digital, autoatendimento, fidelização de clientes e muito mais.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog Publy — Dicas para bares e restaurantes",
    description: "Artigos práticos sobre gestão de bares e restaurantes, cardápio digital, autoatendimento e fidelização de clientes.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", background: "#0a0a0a" }}>

        {/* Header */}
        <section style={{ paddingTop: 100, paddingBottom: 60, textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px" }}>
            <div style={{
              display: "inline-block", marginBottom: 16,
              padding: "6px 16px", borderRadius: 100,
              background: "rgba(79,142,247,0.1)", border: "1px solid rgba(79,142,247,0.3)",
              fontSize: 12, fontWeight: 700, color: "#4F8EF7", letterSpacing: "0.08em",
            }}>
              BLOG
            </div>
            <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
              Dicas para bares e restaurantes
            </h1>
            <p style={{ fontSize: 16, color: "#888", lineHeight: 1.7 }}>
              Conteúdo prático sobre gestão, atendimento e tecnologia para quem opera no setor de alimentação.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section style={{ maxWidth: 820, margin: "0 auto", padding: "60px 24px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none" }}
              >
                <article className="blog-card" style={{
                  background: "#111",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: "28px 32px",
                  display: "flex", gap: 24, alignItems: "flex-start",
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                >
                  {/* Ícone da marca */}
                  <FeatureIcon name={post.coverIcon} size={56} />

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} style={{
                          fontSize: 11, fontWeight: 600,
                          color: "#4F8EF7", background: "rgba(79,142,247,0.1)",
                          padding: "3px 10px", borderRadius: 100,
                        }}>
                          {tag}
                        </span>
                      ))}
                      <span style={{ fontSize: 11, color: "#555" }}>
                        {post.readTime} min de leitura
                      </span>
                    </div>

                    <h2 style={{
                      fontSize: 18, fontWeight: 700, color: "#fff",
                      lineHeight: 1.4, marginBottom: 8,
                    }}>
                      {post.title}
                    </h2>

                    <p style={{ fontSize: 14, color: "#777", lineHeight: 1.6, margin: 0 }}>
                      {post.description}
                    </p>

                    <div style={{ marginTop: 14, fontSize: 13, color: "#4F8EF7", fontWeight: 600 }}>
                      Ler artigo →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
