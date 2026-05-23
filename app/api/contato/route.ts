import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nome, email, telefone, assunto, mensagem } = body;

    // Validação básica
    if (!nome || !email || !mensagem) {
      return NextResponse.json({ error: "Campos obrigatórios faltando." }, { status: 400 });
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
    }
    if (mensagem.length < 10) {
      return NextResponse.json({ error: "Mensagem muito curta." }, { status: 400 });
    }

    const contatoData = { nome, email, telefone: telefone || "", assunto: assunto || "Geral", mensagem };

    // ── Opção 1: Webhook (Discord, Slack, Make, Zapier) ──────────
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `📬 **Novo contato via site Publy**\n**Nome:** ${nome}\n**E-mail:** ${email}\n**Telefone:** ${telefone || "—"}\n**Assunto:** ${assunto || "Geral"}\n**Mensagem:**\n${mensagem}`,
        }),
      }).catch(() => {}); // não falha se webhook falhar
    }

    // ── Opção 2: SaaS backend (se disponível) ───────────────────
    const saasUrl = process.env.NEXT_PUBLIC_SAAS_API_URL;
    if (saasUrl) {
      await fetch(`${saasUrl}/api/v1/public/contato`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contatoData),
      }).catch(() => {}); // não falha se backend não tiver o endpoint ainda
    }

    // Log local (sempre)
    console.log("[Publy Contato]", new Date().toISOString(), contatoData);

    return NextResponse.json({ ok: true, mensagem: "Mensagem recebida com sucesso! Responderemos em até 24 horas." });
  } catch (err) {
    console.error("[Publy Contato] Erro:", err);
    return NextResponse.json({ error: "Erro interno. Tente novamente." }, { status: 500 });
  }
}
