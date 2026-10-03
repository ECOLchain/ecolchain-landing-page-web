import { describe, it, expect, vi } from 'vitest';
import { handleSolicitacao, type FetchLike } from '../src/lib/solicitar';

const valid = {
  intent: 'comprar',
  name: 'Indústria Exemplo',
  email: 'compras@exemplo.com',
  phone: '',
  city: 'São Paulo/SP',
  volume: 120,
  materials: ['PET'],
  message: 'Quero comprar toneladas verificadas.',
  consent: true,
  website: '',
  lang: 'pt',
};

function fakeFetch(ok = true): FetchLike {
  return vi.fn(async () => ({ ok: ok ? true : false, status: ok ? 200 : 500 })) as unknown as FetchLike;
}

describe('handleSolicitacao', () => {
  it('honeypot preenchido: finge sucesso sem enviar e-mail', async () => {
    const fx = fakeFetch();
    const r = await handleSolicitacao({ ...valid, website: 'http://spam' }, { RESEND_API_KEY: 'k' }, fx);
    expect(r.status).toBe(200);
    expect(r.body.ok).toBe(true);
    expect(fx).not.toHaveBeenCalled();
  });

  it('payload inválido: 400 com erros de validação', async () => {
    const r = await handleSolicitacao({ ...valid, email: 'x', consent: false }, { RESEND_API_KEY: 'k' }, fakeFetch());
    expect(r.status).toBe(400);
    expect(r.body.ok).toBe(false);
    expect(r.body.errors?.email).toBeTruthy();
    expect(r.body.errors?.consent).toBeTruthy();
  });

  it('sem RESEND_API_KEY: 503 email_unavailable', async () => {
    const fx = fakeFetch();
    const r = await handleSolicitacao(valid, {}, fx);
    expect(r.status).toBe(503);
    expect(r.body.error).toBe('email_unavailable');
    expect(fx).not.toHaveBeenCalled();
  });

  it('sucesso: envia notificação interna e resposta automática, destino ecolchain@gmail.com', async () => {
    const fx = fakeFetch();
    const r = await handleSolicitacao(valid, { RESEND_API_KEY: 'k' }, fx);
    expect(r.status).toBe(200);
    expect(r.body.ok).toBe(true);
    expect(fx).toHaveBeenCalledTimes(2);
    const calls = (fx as ReturnType<typeof vi.fn>).mock.calls;
    const notify = JSON.parse(calls[0][1].body as string);
    expect(notify.to).toContain('ecolchain@gmail.com');
    const reply = JSON.parse(calls[1][1].body as string);
    expect(reply.to).toContain('compras@exemplo.com');
  });

  it('falha no provedor de e-mail: 502', async () => {
    const r = await handleSolicitacao(valid, { RESEND_API_KEY: 'k' }, fakeFetch(false));
    expect(r.status).toBe(502);
    expect(r.body.ok).toBe(false);
  });

  it('corpo não-JSON ou não-objeto: 400', async () => {
    const r = await handleSolicitacao(null, { RESEND_API_KEY: 'k' }, fakeFetch());
    expect(r.status).toBe(400);
  });
});
