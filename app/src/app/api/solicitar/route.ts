import { handleSolicitacao } from '../../../lib/solicitar';

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    body = null;
  }
  const result = await handleSolicitacao(body, {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    SOLICITAR_TO: process.env.SOLICITAR_TO,
    SOLICITAR_FROM: process.env.SOLICITAR_FROM,
  });
  return Response.json(result.body, { status: result.status });
}
