'use client';

import { useRef, useState } from 'react';
import type { LandingCopy } from '../content/pt';
import {
  validateForm,
  buildPayload,
  isCommercial,
  FORM_MSGS_PT,
  FORM_MSGS_EN,
  type FormErrors,
  type FormValues,
} from '../lib/form';

interface Props {
  t: LandingCopy['rede'];
  locale: 'pt' | 'en';
}

function readValues(form: HTMLFormElement, locale: 'pt' | 'en'): FormValues {
  const fd = new FormData(form);
  return {
    intent: String(fd.get('intent') || ''),
    name: String(fd.get('name') || ''),
    email: String(fd.get('email') || ''),
    phone: String(fd.get('phone') || ''),
    city: String(fd.get('city') || ''),
    volume: String(fd.get('volume') ?? ''),
    materials: fd.getAll('materials').map(String),
    message: String(fd.get('message') || ''),
    consent: fd.get('consent') === 'on',
    website: String(fd.get('website') || ''),
    lang: locale,
  };
}

export default function RedeForm({ t, locale }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [intent, setIntent] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<{ kind: 'ok' | 'err' | null; text: string }>({ kind: null, text: '' });
  const [sending, setSending] = useState(false);
  const msgs = locale === 'en' ? FORM_MSGS_EN : FORM_MSGS_PT;
  const commercial = isCommercial(intent);
  const f = t.fields;

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = formRef.current;
    if (!form) return;
    setStatus({ kind: null, text: '' });
    const values = readValues(form, locale);
    const errs = validateForm(values, msgs);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const order: Array<keyof FormErrors> = ['intent', 'name', 'email', 'city', 'volume', 'materials', 'consent'];
      const firstKey = order.find((k) => errs[k]);
      if (firstKey) form.querySelector<HTMLElement>(`[data-field="${firstKey}"]`)?.focus();
      return;
    }

    const payload = buildPayload(values);
    if (payload === null) {
      // honeypot: finge sucesso
      setStatus({ kind: 'ok', text: t.statusOk });
      form.reset();
      setIntent('');
      return;
    }

    setSending(true);
    try {
      const res = await fetch('/api/solicitar', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus({ kind: 'ok', text: t.statusOk });
      form.reset();
      setIntent('');
    } catch {
      setStatus({ kind: 'err', text: t.statusErr });
    } finally {
      setSending(false);
    }
  }

  function fieldCls(key: keyof FormErrors) {
    return `field${errors[key] ? ' has-error' : ''}`;
  }

  return (
    <form className="form-grid" id="form-rede" noValidate onSubmit={onSubmit} ref={formRef}>
      <div className={fieldCls('intent')}>
        <label htmlFor="f-intent">{f.intentLabel}</label>
        <select
          id="f-intent"
          name="intent"
          required
          data-field="intent"
          value={intent}
          onChange={(ev) => setIntent(ev.target.value)}
        >
          <option value="">{f.intentPlaceholder}</option>
          {f.intents.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <p className="field__error" data-error-for="intent">{errors.intent}</p>
      </div>

      <div className={fieldCls('name')}>
        <label htmlFor="f-name">{f.name}</label>
        <input id="f-name" name="name" type="text" autoComplete="organization" required data-field="name" />
        <p className="field__error" data-error-for="name">{errors.name}</p>
      </div>

      <div className={fieldCls('email')}>
        <label htmlFor="f-email">{f.email}</label>
        <input id="f-email" name="email" type="email" autoComplete="email" required data-field="email" />
        <p className="field__error" data-error-for="email">{errors.email}</p>
      </div>

      <div className="field">
        <label htmlFor="f-phone">{f.phone}</label>
        <input id="f-phone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <div className={fieldCls('city')}>
        <label htmlFor="f-city">{f.city}</label>
        <input id="f-city" name="city" type="text" autoComplete="address-level2" required data-field="city" />
        <p className="field__error" data-error-for="city">{errors.city}</p>
      </div>

      <div className={`field${commercial ? '' : ' field--hidden'}${errors.volume ? ' has-error' : ''}`} data-commercial>
        <label htmlFor="f-volume">{f.volume}</label>
        <input id="f-volume" name="volume" type="number" min={1} inputMode="numeric" data-field="volume" />
        <p className="field__error" data-error-for="volume">{errors.volume}</p>
      </div>

      <fieldset className={`field${commercial ? '' : ' field--hidden'}${errors.materials ? ' has-error' : ''}`} data-commercial>
        <label>{f.materialsLabel}</label>
        {f.materials.map((m) => (
          <label key={m.value}>
            <input type="checkbox" name="materials" value={m.value} /> {m.label}
          </label>
        ))}
        <p className="field__error" data-error-for="materials">{errors.materials}</p>
      </fieldset>

      <div className="field">
        <label htmlFor="f-message">{f.message}</label>
        <textarea id="f-message" name="message" rows={4} maxLength={500} />
      </div>

      <div className="field hp" aria-hidden="true">
        <label htmlFor="f-website">{f.honeypot}</label>
        <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={fieldCls('consent')}>
        <label className="consent" htmlFor="f-consent">
          <input id="f-consent" name="consent" type="checkbox" required data-field="consent" />
          <span>
            {f.consentBefore}
            <a href="/privacidade/" style={{ color: 'inherit' }}>{f.consentLink}</a>
            {f.consentAfter}
          </span>
        </label>
        <p className="field__error" data-error-for="consent">{errors.consent}</p>
      </div>

      <div>
        <button className="btn btn--primary" type="submit" disabled={sending}>
          <span>{f.submit}</span>
        </button>
        <p
          className={`form-status${status.kind === 'ok' ? ' form-status--ok' : ''}${status.kind === 'err' ? ' form-status--err' : ''}`}
          data-form-status
          role="status"
          aria-live="polite"
        >
          {status.text}
        </p>
      </div>
    </form>
  );
}
