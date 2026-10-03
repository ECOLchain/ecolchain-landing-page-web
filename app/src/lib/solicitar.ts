// Núcleo do endpoint /api/solicitar: valida, aplica honeypot e envia
// notificação interna + resposta automática via Resend (fetch puro).
// Sem dependência de Next.js, para ser testável em ambiente node.

import {
  validateForm,
  buildPayload,
  type FormValues,
  type FormErrors,
  type SolicitacaoPayload,
} from './form';

export interface MailEnv {
  RESEND_API_KEY?: string;
  SOLICITAR_TO?: string;
  SOLICITAR_FROM?: string;
}

export type FetchLike = (
  url: string,
  init: { method: string; headers: Record<string, string>; body: string },
) => Promise<{ ok: boolean; status: number }>;

export interface HandlerResult {
  status: number;
  body: { ok: boolean; error?: string; errors?: FormErrors };
}

const RESEND_URL = 'https://api.resend.com/emails';
const DEFAULT_TO = 'ecolchain@gmail.com';
const DEFAULT_FROM = 'ECOLchain Landing <onboarding@resend.dev>';

const INTENT_LABEL: Record<string, { pt: string; en: string }> = {
  comprar: { pt: 'Comprar toneladas verificadas', en: 'Buy verified tonnage' },
  vender: { pt: 'Vender produção reciclada', en: 'Sell recycled output' },
  cidadao: { pt: 'Participar como cidadão', en: 'Join as a citizen' },
  institucional: { pt: 'Parceria institucional / poder público', en: 'Institutional / government partnership' },
  investir: { pt: 'Investir', en: 'Invest' },
  outro: { pt: 'Outro', en: 'Other' },
};

function notifyText(p: SolicitacaoPayload): string {
  const lines = [
    'Nova solicitação de participação na Rede ECOLchain',
    '',
    `Eu quero: ${INTENT_LABEL[p.intent]?.pt ?? p.intent}`,
    `Nome/organização: ${p.name}`,
    `E-mail: ${p.email}`,
    `Telefone/WhatsApp: ${p.phone || '(não informado)'}`,
    `Cidade/UF: ${p.city}`,
  ];
  if (p.volume != null) lines.push(`Volume estimado: ${p.volume} t/mês`);
  if (p.materials?.length) lines.push(`Materiais: ${p.materials.join(', ')}`);
  if (p.message) lines.push(`Mensagem: ${p.message}`);
  lines.push('', `Idioma do solicitante: ${p.lang}`, 'Consentimento LGPD: sim');
  return lines.join('\n');
}

function replyText(p: SolicitacaoPayload): { subject: string; text: string } {
  if (p.lang === 'en') {
    return {
      subject: 'We received your request · ECOLchain',
      text: [
        `Hello, ${p.name}.`,
        '',
        'We received your request to join the ECOLchain Network. We review every application manually and will reply within 5 business days.',
        '',
        'ECOLchain · Recycle. Monetize. Scale sustainability.',
        'https://ecolchain.com/en/',
      ].join('\n'),
    };
  }
  return {
    subject: 'Recebemos sua solicitação · ECOLchain',
    text: [
      `Olá, ${p.name}.`,
      '',
      'Recebemos sua solicitação para participar da Rede ECOLchain. Analisamos cada entrada manualmente e respondemos em até 5 dias úteis.',
      '',
      'ECOLchain · Recicle. Monetize. Escale sustentabilidade.',
      'https://ecolchain.com/',
    ].join('\n'),
  };
}

async function sendMail(fetchImpl: FetchLike, apiKey: string, from: string, to: string, subject: string, text: string) {
  return fetchImpl(RESEND_URL, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${apiKey}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ from, to: [to], subject, text }),
  });
}

export async function handleSolicitacao(
  body: unknown,
  env: MailEnv,
  fetchImpl: FetchLike = fetch as unknown as FetchLike,
): Promise<HandlerResult> {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { status: 400, body: { ok: false, error: 'invalid_body' } };
  }
  const raw = body as Record<string, unknown>;
  const values: FormValues = {
    intent: String(raw.intent ?? ''),
    name: String(raw.name ?? ''),
    email: String(raw.email ?? ''),
    phone: String(raw.phone ?? ''),
    city: String(raw.city ?? ''),
    volume: (raw.volume as string | number) ?? '',
    materials: Array.isArray(raw.materials) ? raw.materials.map(String) : [],
    message: String(raw.message ?? ''),
    consent: raw.consent === true,
    website: String(raw.website ?? ''),
    lang: raw.lang === 'en' ? 'en' : 'pt',
  };

  // Honeypot: finge sucesso e não envia nada.
  if (values.website) return { status: 200, body: { ok: true } };

  const errors = validateForm(values);
  if (Object.keys(errors).length) {
    return { status: 400, body: { ok: false, errors } };
  }

  const payload = buildPayload(values);
  if (!payload) return { status: 200, body: { ok: true } };

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    return { status: 503, body: { ok: false, error: 'email_unavailable' } };
  }

  const from = env.SOLICITAR_FROM || DEFAULT_FROM;
  const to = env.SOLICITAR_TO || DEFAULT_TO;
  const reply = replyText(payload);

  // Se a notificação falhar, 502 (o front orienta a tentar de novo).
  // Se só a resposta automática falhar, a solicitação já chegou: seguimos com ok.
  const notify = await sendMail(fetchImpl, apiKey, from, to, `[Landing] Solicitação: ${INTENT_LABEL[payload.intent]?.pt ?? payload.intent} · ${payload.name}`, notifyText(payload));
  if (!notify.ok) {
    return { status: 502, body: { ok: false, error: 'email_failed' } };
  }
  await sendMail(fetchImpl, apiKey, from, payload.email, reply.subject, reply.text).catch(() => undefined);

  return { status: 200, body: { ok: true } };
}
