'use client';

import { useEffect, useRef, useState } from 'react';
import { computeCompliance } from '../lib/calc';
import { countUp } from '../lib/countup';
import type { LandingCopy } from '../content/pt';

interface Props {
  t: LandingCopy['calc'];
  locale: string;
}

const KEYS = ['metaT', 'ecoCost', 'convCost', 'savings'] as const;
type OutKey = (typeof KEYS)[number];

export default function Calculadora({ t, locale }: Props) {
  const [value, setValue] = useState('');
  const outRefs = useRef<Partial<Record<OutKey, HTMLElement | null>>>({});
  const result = computeCompliance(value || 0);
  const empty = !value || result.metaT === 0;

  useEffect(() => {
    for (const key of KEYS) {
      const el = outRefs.current[key];
      if (!el) continue;
      if (empty) {
        el.textContent = '–';
        continue;
      }
      countUp(el, result[key], t.templates[key], locale);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="calc" id="calculadora">
      <h3>{t.title}</h3>
      <p>{t.sub}</p>
      <p className="mono" style={{ marginTop: '1rem', opacity: 0.75 }}>{t.typesLabel}</p>
      <label htmlFor="calc-volume">{t.inputLabel}</label>
      <input
        id="calc-volume"
        type="number"
        min={0}
        step="any"
        inputMode="decimal"
        placeholder={t.placeholder}
        data-calc-input
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
      <div className="calc__results">
        <div>
          <p className="stat__num" data-calc-out="metaT" ref={(el) => { outRefs.current.metaT = el; }}>–</p>
          <p className="stat__label mono">{t.results.metaT}</p>
        </div>
        <div>
          <p className="stat__num" data-calc-out="ecoCost" ref={(el) => { outRefs.current.ecoCost = el; }}>–</p>
          <p className="stat__label mono">{t.results.ecoCost}</p>
        </div>
        <div>
          <p className="stat__num" data-calc-out="convCost" ref={(el) => { outRefs.current.convCost = el; }}>–</p>
          <p className="stat__label mono">{t.results.convCost}</p>
        </div>
      </div>
      <div className="calc__savings">
        <p className="stat__num" data-calc-out="savings" ref={(el) => { outRefs.current.savings = el; }}>–</p>
        <p className="stat__label mono">{t.results.savings}</p>
      </div>
      <p className="footnote" style={{ marginTop: '1.5rem' }}>{t.footnote}</p>
      <p className="calc__fallback">{t.fallback}</p>
      <div className="cta-row"><a className="btn btn--primary" href="#rede"><span>{t.cta}</span></a></div>
    </div>
  );
}
