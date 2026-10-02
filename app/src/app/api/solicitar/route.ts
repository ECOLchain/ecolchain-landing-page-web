import { handleSolicitacao, type MailEnv } from '../../../lib/solicitar';

// No Workers (OpenNext), bindings podem aparecer em globalThis além de process.env.
function readMailEnv(): MailEnv {
  const g = globalThis as Record<string, unknown>;
  const pick = (key: keyof MailEnv) =>
    process.env[key] ?? (typeof g[key] === 'string' ? (g[key] as string) : undefined);
  return {
    RESEND_API_KEY: pick('RESEND_API_KEY'),
    SOLICITAR_TO: pick('SOLICITAR_TO'),
    SOLICITAR_FROM: pick('SOLICITAR_FROM'),
  };
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    body = null;
  }
  const result = await handleSolicitacao(body, readMailEnv());
  return Response.json(result.body, { status: result.status });
}
