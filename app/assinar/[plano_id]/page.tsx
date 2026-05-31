import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPlanos } from "@/lib/api";
import AssinarForm from "./AssinarForm";

type Periodo = "mensal" | "anual" | "bienal";

type Props = {
  params: Promise<{ plano_id: string }>;
  searchParams: Promise<{ periodo?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { plano_id } = await params;
  return {
    title: `Assinar plano ${plano_id} | Publy`,
  };
}

export default async function AssinarPage({ params, searchParams }: Props) {
  const { plano_id } = await params;
  const { periodo: periodoParam } = await searchParams;

  const periodo: Periodo = ["mensal", "anual", "bienal"].includes(periodoParam || "")
    ? (periodoParam as Periodo)
    : "mensal";

  let plano = null;
  try {
    const planos = await getPlanos();
    plano = planos.find((p) => p.id === Number(plano_id)) ?? null;
  } catch {}

  if (!plano) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
        <p style={{ fontSize: 18, color: "#888" }}>Plano não encontrado.</p>
        <Link href="/planos" className="btn-primary">Ver planos disponíveis</Link>
      </div>
    );
  }

  return (
    <>
      <Navbar dark />
      <AssinarForm plano={plano} periodo={periodo} />
      <Footer />
    </>
  );
}
