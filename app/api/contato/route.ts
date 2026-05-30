import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nome, email, telefone, assunto, mensagem } = body;

    if (!nome || !email || !mensagem) {
      return NextResponse.json({ error: "Campos obrigatórios faltando." }, { status: 400 });
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
    }
    if (mensagem.length < 10) {
      return NextResponse.json({ error: "Mensagem muito curta." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Publy Site <contato@publy.tech>",
      to: "contato@publy.tech",
      replyTo: email,
      subject: `[Contato] ${assunto || "Geral"} — ${nome}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0f0f0f;color:#e8e8e8;border-radius:12px">
          <h2 style="color:#4F8EF7;margin-bottom:24px">Novo contato via site Publy</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#888;width:120px">Nome</td><td style="padding:8px 0;font-weight:600">${nome}</td></tr>
            <tr><td style="padding:8px 0;color:#888">E-mail</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#4F8EF7">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888">Telefone</td><td style="padding:8px 0">${telefone || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#888">Assunto</td><td style="padding:8px 0">${assunto || "Geral"}</td></tr>
          </table>
          <div style="margin-top:24px;padding:20px;background:#1a1a1a;border-radius:8px;border-left:3px solid #4F8EF7">
            <div style="color:#888;font-size:12px;margin-bottom:8px">MENSAGEM</div>
            <div style="line-height:1.7;white-space:pre-wrap">${mensagem}</div>
          </div>
          <p style="margin-top:24px;font-size:12px;color:#555">Enviado via publy.tech em ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true, mensagem: "Mensagem recebida com sucesso! Responderemos em até 24 horas." });
  } catch (err) {
    console.error("[Publy Contato] Erro:", err);
    return NextResponse.json({ error: "Erro interno. Tente novamente." }, { status: 500 });
  }
}
