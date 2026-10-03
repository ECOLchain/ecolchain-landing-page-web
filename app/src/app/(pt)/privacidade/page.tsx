import type { Metadata } from 'next';
import Link from 'next/link';
import { pt } from '../../../content/pt';

export const metadata: Metadata = {
  title: pt.privacidade.metaTitle,
  robots: { index: false },
};

export default function PrivacidadePage() {
  const p = pt.privacidade;
  return (
    <main className="band band--creme">
      <div className="container">
        <h1 className="section-title">{p.title}</h1>
        <p className="lede">
          {p.controller}{' '}
          <a href="mailto:ecolchain@gmail.com" style={{ color: 'inherit' }}>ecolchain@gmail.com</a>
        </p>
        {p.sections.map((s) => (
          <section key={s.h}>
            <h2 className="mono" style={{ marginTop: '2rem' }}>{s.h}</h2>
            <p>{s.p}</p>
          </section>
        ))}
        <p className="footnote" style={{ marginTop: '2rem' }}>{p.version}</p>
        <p style={{ marginTop: '2rem' }}>
          <Link className="btn btn--ghost" href="/"><span>{p.back}</span></Link>
        </p>
      </div>
    </main>
  );
}
