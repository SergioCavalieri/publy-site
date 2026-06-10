import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function esc(s: string): string {
  return String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const res = await fetch(`${process.env.SAAS_API_URL}/api/v1/public/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15_000),
    });

    const data = await res.json();

    if (res.ok) {
      const { nome, email, telefone, nome_estabelecimento, razao_social, cnpj, plano_id, periodo } = body;
      const resend = new Resend(process.env.RESEND_API_KEY);
      resend.emails.send({
        from: "Publy Site <contato@publy.tech>",
        to: "publytecnologia@gmail.com",
        subject: `🎉 Novo cliente: ${esc(nome_estabelecimento || nome)}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0f0f0f;color:#e8e8e8;border-radius:12px">
            <h2 style="color:#22C55E;margin-bottom:8px">Novo cadastro no Publy!</h2>
            <p style="color:#888;margin-bottom:24px">Um novo cliente acabou de se cadastrar.</p>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#888;width:160px">Estabelecimento</td><td style="padding:8px 0;font-weight:700;color:#fff">${esc(nome_estabelecimento || "—")}</td></tr>
              <tr><td style="padding:8px 0;color:#888">Nome</td><td style="padding:8px 0">${esc(nome)}</td></tr>
              <tr><td style="padding:8px 0;color:#888">E-mail</td><td style="padding:8px 0"><a href="mailto:${esc(email)}" style="color:#4F8EF7">${esc(email)}</a></td></tr>
              <tr><td style="padding:8px 0;color:#888">Telefone</td><td style="padding:8px 0">${esc(telefone || "—")}</td></tr>
              <tr><td style="padding:8px 0;color:#888">Razão Social</td><td style="padding:8px 0">${esc(razao_social || "—")}</td></tr>
              <tr><td style="padding:8px 0;color:#888">CNPJ</td><td style="padding:8px 0">${esc(cnpj || "—")}</td></tr>
              <tr><td style="padding:8px 0;color:#888">Plano</td><td style="padding:8px 0;color:#4F8EF7;font-weight:600">${esc(plano_id || "—")}</td></tr>
              <tr><td style="padding:8px 0;color:#888">Período</td><td style="padding:8px 0">${esc(periodo || "—")}</td></tr>
            </table>
            <p style="margin-top:24px;font-size:12px;color:#555">Cadastrado em ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</p>
          </div>
        `,
      }).catch(() => {});
    }

    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    if (err instanceof Error && err.name === "TimeoutError") {
      return NextResponse.json({ detail: "O servidor demorou para responder. Tente novamente." }, { status: 504 });
    }
    console.error("[Publy Checkout] Erro:", err);
    return NextResponse.json({ detail: "Erro interno. Tente novamente." }, { status: 500 });
  }
}
