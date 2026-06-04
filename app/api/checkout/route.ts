import { NextRequest, NextResponse } from "next/server";

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
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    if (err instanceof Error && err.name === "TimeoutError") {
      return NextResponse.json({ detail: "O servidor demorou para responder. Tente novamente." }, { status: 504 });
    }
    console.error("[Publy Checkout] Erro:", err);
    return NextResponse.json({ detail: "Erro interno. Tente novamente." }, { status: 500 });
  }
}
