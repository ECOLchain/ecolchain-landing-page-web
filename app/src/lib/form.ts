// Pure form logic: validation + payload building. No DOM.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const COMMERCIAL = new Set(['comprar', 'vender']);

export interface FormValues {
  intent: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  volume: string | number;
  materials: string[];
  message: string;
  consent: boolean;
  website: string;
  lang?: 'pt' | 'en';
}

export interface FormMessages {
  intent: string;
  name: string;
  email: string;
  city: string;
  volume: string;
  materials: string;
  consent: string;
}

export const FORM_MSGS_PT: FormMessages = {
  intent: 'Selecione o que você quer.',
  name: 'Informe seu nome ou organização.',
  email: 'Informe um e-mail válido.',
  city: 'Informe sua cidade/UF.',
  volume: 'Informe o volume estimado em t/mês.',
  materials: 'Selecione ao menos um material.',
  consent: 'É preciso autorizar o contato para enviar.',
};

export const FORM_MSGS_EN: FormMessages = {
  intent: 'Select what you want.',
  name: 'Enter your name or organization.',
  email: 'Enter a valid e-mail.',
  city: 'Enter your city/state.',
  volume: 'Enter the estimated volume in t/month.',
  materials: 'Select at least one material.',
  consent: 'You must authorize contact to submit.',
};

export type FormErrors = Partial<Record<keyof FormMessages, string>>;

export interface SolicitacaoPayload {
  intent: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
  consent: true;
  website: '';
  lang: 'pt' | 'en';
  volume?: number;
  materials?: string[];
}

export function isCommercial(intent: string): boolean {
  return COMMERCIAL.has(intent);
}

export function validateForm(values: FormValues, msgs: FormMessages = FORM_MSGS_PT): FormErrors {
  const errors: FormErrors = {};
  if (!values.intent) errors.intent = msgs.intent;
  if (!values.name || !values.name.trim()) errors.name = msgs.name;
  if (!EMAIL_RE.test(values.email || '')) errors.email = msgs.email;
  if (!values.city || !values.city.trim()) errors.city = msgs.city;
  if (COMMERCIAL.has(values.intent)) {
    const vol = Number(values.volume);
    if (values.volume === '' || values.volume == null || !Number.isFinite(vol) || vol <= 0) {
      errors.volume = msgs.volume;
    }
    if (!Array.isArray(values.materials) || values.materials.length === 0) {
      errors.materials = msgs.materials;
    }
  }
  if (values.consent !== true) errors.consent = msgs.consent;
  return errors;
}

export function buildPayload(values: FormValues): SolicitacaoPayload | null {
  if (values.website) return null; // honeypot: pretend success, send nothing
  const payload: SolicitacaoPayload = {
    intent: values.intent,
    name: values.name.trim(),
    email: values.email.trim(),
    phone: (values.phone || '').trim(),
    city: values.city.trim(),
    message: (values.message || '').slice(0, 500),
    consent: true,
    website: '',
    lang: values.lang === 'en' ? 'en' : 'pt',
  };
  if (COMMERCIAL.has(values.intent)) {
    payload.volume = Number(values.volume);
    payload.materials = values.materials;
  }
  return payload;
}
