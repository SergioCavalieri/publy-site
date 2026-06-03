import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 3;
const ipMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = ipMap.get(ip);

  if (!entry || now > entry.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_REQUESTS) return false;
  entry.count++;
  return true;
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Muitas tentativas. Aguarde 1 minuto e tente novamente." },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

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

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Publy Site <contato@publy.tech>",
      to: "publytecnologia@gmail.com",
      replyTo: email,
      subject: `[Contato] ${esc(assunto || "Geral")} — ${esc(nome)}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0f0f0f;color:#e8e8e8;border-radius:12px">
          <h2 style="color:#4F8EF7;margin-bottom:24px">Novo contato via site Publy</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#888;width:120px">Nome</td><td style="padding:8px 0;font-weight:600">${esc(nome)}</td></tr>
            <tr><td style="padding:8px 0;color:#888">E-mail</td><td style="padding:8px 0"><a href="mailto:${esc(email)}" style="color:#4F8EF7">${esc(email)}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888">Telefone</td><td style="padding:8px 0">${esc(telefone || "—")}</td></tr>
            <tr><td style="padding:8px 0;color:#888">Assunto</td><td style="padding:8px 0">${esc(assunto || "Geral")}</td></tr>
          </table>
          <div style="margin-top:24px;padding:20px;background:#1a1a1a;border-radius:8px;border-left:3px solid #4F8EF7">
            <div style="color:#888;font-size:12px;margin-bottom:8px">MENSAGEM</div>
            <div style="line-height:1.7;white-space:pre-wrap">${esc(mensagem)}</div>
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
