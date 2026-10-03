'use client';

import { useEffect } from 'react';
import { initReveal } from '../lib/countup';

// Monta o reveal-on-scroll + counters sobre o HTML renderizado pelo servidor.
export default function Reveal({ locale }: { locale: string }) {
  useEffect(() => {
    const cleanup = initReveal(document, locale);
    return cleanup;
  }, [locale]);
  return null;
}
