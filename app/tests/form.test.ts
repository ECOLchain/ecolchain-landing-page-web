import { describe, it, expect } from 'vitest';
import { validateForm, buildPayload, FORM_MSGS_EN, type FormValues } from '../src/lib/form';

const base: FormValues = {
  intent: 'comprar',
  name: 'Indústria Exemplo',
  email: 'compras@exemplo.com',
  phone: '',
  city: 'São Paulo/SP',
  volume: '120',
  materials: ['PET'],
  message: 'Quero comprar toneladas verificadas.',
  consent: true,
  website: '',
};

describe('validateForm', () => {
  it('accepts a valid comprar submission', () => {
    expect(validateForm(base)).toEqual({});
  });

  it('rejects invalid email', () => {
    expect(validateForm({ ...base, email: 'nao-e-email' }).email).toBeTruthy();
  });

  it('rejects missing consent', () => {
    expect(validateForm({ ...base, consent: false }).consent).toBeTruthy();
  });

  it('requires volume and materials only for comprar/vender', () => {
    const cidadao = { ...base, intent: 'cidadao', volume: '', materials: [] as string[] };
    expect(validateForm(cidadao)).toEqual({});
    const compra = { ...base, volume: '', materials: [] as string[] };
    const errs = validateForm(compra);
    expect(errs.volume).toBeTruthy();
    expect(errs.materials).toBeTruthy();
  });

  it('rejects non-positive volume for comprar', () => {
    expect(validateForm({ ...base, volume: '0' }).volume).toBeTruthy();
    expect(validateForm({ ...base, volume: '-3' }).volume).toBeTruthy();
  });

  it('requires intent, name and city', () => {
    const errs = validateForm({ ...base, intent: '', name: ' ', city: '' });
    expect(errs.intent).toBeTruthy();
    expect(errs.name).toBeTruthy();
    expect(errs.city).toBeTruthy();
  });

  it('accepts localized EN messages', () => {
    const errs = validateForm({ ...base, email: 'x' }, FORM_MSGS_EN);
    expect(errs.email).toMatch(/valid e-?mail/i);
  });
});

describe('buildPayload', () => {
  it('returns null when honeypot is filled', () => {
    expect(buildPayload({ ...base, website: 'http://spam' })).toBeNull();
  });

  it('includes volume/materials for comprar', () => {
    const p = buildPayload(base)!;
    expect(p.volume).toBe(120);
    expect(p.materials).toEqual(['PET']);
    expect(p.consent).toBe(true);
  });

  it('omits volume/materials for cidadao', () => {
    const p = buildPayload({ ...base, intent: 'cidadao', volume: '', materials: [] })!;
    expect('volume' in p).toBe(false);
    expect('materials' in p).toBe(false);
  });

  it('truncates message at 500 chars', () => {
    const p = buildPayload({ ...base, message: 'x'.repeat(600) })!;
    expect(p.message).toHaveLength(500);
  });

  it('carries the locale for the auto-reply', () => {
    const p = buildPayload({ ...base, lang: 'en' })!;
    expect(p.lang).toBe('en');
  });
});
