import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPost, getAllSlugs } from "@/lib/posts";
import { SITE_URL } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Publy" },
    publisher: { "@type": "Organization", name: "Publy", url: SITE_URL },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main style={{ minHeight: "100vh", background: "#0a0a0a" }}>

        {/* Header do post */}
        <section style={{ paddingTop: 100, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>

            <Link href="/blog" style={{
              display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 28,
              fontSize: 13, color: "#555", textDecoration: "none", fontWeight: 500,
            }}>
              ← Blog
            </Link>

            <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
              {post.tags.map((tag) => (
                <span key={tag} style={{
                  fontSize: 11, fontWeight: 600,
                  color: "#4F8EF7", background: "rgba(79,142,247,0.1)",
                  padding: "4px 12px", borderRadius: 100,
                }}>
                  {tag}
                </span>
              ))}
              <span style={{ fontSize: 11, color: "#555", lineHeight: "22px" }}>
                {post.readTime} min de leitura
              </span>
            </div>

            <h1 style={{
              fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800,
              color: "#fff", lineHeight: 1.3, marginBottom: 16,
            }}>
              {post.title}
            </h1>

            <p style={{ fontSize: 17, color: "#888", lineHeight: 1.7, margin: 0 }}>
              {post.description}
            </p>
          </div>
        </section>

        {/* Conteúdo */}
        <article style={{ maxWidth: 720, margin: "0 auto", padding: "52px 24px 80px" }}>
          <div
            className="prose-publy"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA final */}
          <div style={{
            marginTop: 64, padding: "40px 40px",
            background: "linear-gradient(135deg, rgba(79,142,247,0.12), rgba(79,142,247,0.04))",
            border: "1px solid rgba(79,142,247,0.25)",
            borderRadius: 20, textAlign: "center",
          }}>
            <h3 style={{ fontSize: "clamp(20px,3vw,26px)", fontWeight: 800, color: "#fff", marginBottom: 12, lineHeight: 1.2 }}>
              Quer atender mais mesas<br />com a mesma equipe?
            </h3>
            <p style={{ fontSize: 15, color: "#888", marginBottom: 28, lineHeight: 1.7, maxWidth: 420, margin: "0 auto 28px" }}>
              Seus clientes pedem pelo celular direto da mesa. Sua equipe recebe na cozinha em tempo real — sem fila, sem pedido errado.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/planos" className="btn-primary" style={{ fontSize: 15, padding: "14px 28px" }}>
                Começar 14 dias grátis →
              </Link>
              <a
                href="https://wa.me/5512988085252?text=Ol%C3%A1%21+Li+um+artigo+do+blog+e+tenho+interesse+no+Publy."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-white"
                style={{ fontSize: 15, padding: "14px 28px" }}
              >
                Falar pelo WhatsApp
              </a>
            </div>
            <p style={{ fontSize: 12, color: "#555", marginTop: 16 }}>
              Sem cartão de crédito · Cancele quando quiser
            </p>
          </div>

          {/* Voltar ao blog */}
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Link href="/blog" style={{ fontSize: 14, color: "#555", textDecoration: "none" }}>
              ← Ver todos os artigos
            </Link>
          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}
