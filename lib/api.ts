export interface Plano {
  id: number;
  nome: string;
  descricao: string | null;
  preco_mensal: number;
  taxa_setup: number;
  max_mesas: number | null;
  max_produtos: number | null;
  appbar_plano: string;
  ativo: boolean;
  // Descontos por período
  desconto_anual_pct: number;
  desconto_bienal_pct: number;
  // Campos calculados pela API
  preco_anual: number;    // preço/mês no plano anual
  preco_bienal: number;   // preço/mês no plano bienal
  economia_anual: number; // economia total em 12 meses
  economia_bienal: number;// economia total em 24 meses
}

export interface CheckoutPayload {
  // Responsável
  nome: string;
  email: string;
  telefone: string;
  // Empresa
  razao_social?: string;
  cnpj?: string;
  nome_estabelecimento: string;
  // Endereço
  cep?: string;
  logradouro?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  // Plano e período
  plano_id: number;
  periodo?: "mensal" | "anual" | "bienal";
  trial_dias?: number;
}

export async function getPlanos(): Promise<Plano[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SAAS_API_URL}/api/v1/public/planos`, {
    cache: "no-store", // sempre busca dados frescos — alterações no saas aparecem imediatamente
  });
  if (!res.ok) throw new Error("Erro ao buscar planos");
  return res.json();
}

export async function fazerCheckout(payload: CheckoutPayload) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SAAS_API_URL}/api/v1/public/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || "Erro ao processar cadastro");
  return data;
}
