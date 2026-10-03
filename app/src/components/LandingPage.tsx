import type { LandingCopy } from '../content/pt';
import type { TrailStep } from '../content/steps';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import Reveal from './Reveal';
import TrilhoWalkthrough from './TrilhoWalkthrough';
import Calculadora from './Calculadora';
import RedeForm from './RedeForm';

interface Props {
  t: LandingCopy;
  steps: TrailStep[];
}

interface Stat {
  num: string;
  label: string;
  count?: number;
  template?: string;
}

function StatNum({ stat }: { stat: Stat }) {
  if (stat.count != null && stat.template) {
    return (
      <p className="stat__num" data-count={stat.count} data-template={stat.template}>{stat.num}</p>
    );
  }
  return <p className="stat__num">{stat.num}</p>;
}

export default function LandingPage({ t, steps }: Props) {
  const locale = t.locale === 'en' ? 'en' : 'pt';
  return (
    <>
      <Reveal locale={t.locale} />

      <div className="ticker mono" aria-hidden="true">
        <div className="ticker__track">
          <span>{t.ticker}</span>
          <span>{t.ticker}</span>
        </div>
      </div>

      <SiteHeader t={t.nav} langSwitch={t.langSwitch} appUrl={t.appUrl} />

      <main id="top">
        {/* HERO */}
        <section className="band band--creme">
          <div className="container" data-reveal>
            <p className="mono">{t.hero.kicker}</p>
            <h1 className="display">{t.hero.titleA} <b>{t.hero.titleB}</b></h1>
            <p className="lede">{t.hero.lede1}</p>
            <p className="lede" style={{ marginTop: '1rem' }}>{t.hero.lede2}</p>
            <div className="cta-row">
              <a className="btn btn--primary" href="#rede"><span>{t.hero.ctaPrimary}</span></a>
              <a className="btn btn--ghost" href="#rede"><span>{t.hero.ctaGhost}</span></a>
              <a className="link-quiet" href="#voce">{t.hero.ctaCitizen}</a>
            </div>
          </div>
        </section>

        {/* RESÍDUOS TÊM VALOR */}
        <section className="band band--papel" id="problema">
          <div className="container" data-reveal>
            <h2 className="section-title">{t.problema.title}</h2>
            <p className="lede">{t.problema.lede}</p>
            <p className="mono" style={{ marginTop: '2.5rem', opacity: 0.7 }}>{t.problema.globalLabel}</p>
            <div className="stat-row">
              {t.problema.globalStats.map((s) => (
                <div key={s.num}><StatNum stat={s} /><p className="stat__label mono">{s.label}</p></div>
              ))}
            </div>
            <p className="lede" style={{ marginTop: '1.5rem' }}>{t.problema.divider}</p>
            <p className="mono" style={{ marginTop: '2.5rem', opacity: 0.7 }}>{t.problema.brasilLabel}</p>
            <div className="stat-row">
              {t.problema.brasilStats.map((s) => (
                <div key={s.num}><StatNum stat={s} /><p className="stat__label mono">{s.label}</p></div>
              ))}
            </div>
            <p className="footnote">{t.problema.source}</p>
          </div>
        </section>

        {/* PARA VOCÊ */}
        <section className="band band--creme" id="voce">
          <div className="container" data-reveal>
            <p className="mono">{t.voce.kicker}</p>
            <h2 className="section-title">{t.voce.title}</h2>
            <p className="lede">{t.voce.lede}</p>
            <div className="features">
              {t.voce.features.map((f) => (
                <div key={f.title}><h3>{f.title}</h3><p>{f.text}</p></div>
              ))}
            </div>
            <p className="lede" style={{ marginTop: '2rem' }}>{t.voce.outlook}</p>
            <div className="cta-row">
              <a className="btn btn--primary" href={t.appUrl}><span>{t.voce.ctaPrimary}</span></a>
              <a className="link-quiet" href="#faq">{t.voce.ctaFaq}</a>
            </div>
          </div>
        </section>

        {/* WALKTHROUGH: TRILHO DO RESÍDUO */}
        <section className="band band--verde" id="credito">
          <div className="container" data-reveal>
            <p className="mono">{t.trilho.kicker}</p>
            <h2 className="section-title">{t.trilho.title}</h2>
            <p className="lede">{t.trilho.lede}</p>
            <TrilhoWalkthrough t={t.trilho} steps={steps} />
          </div>
        </section>

        {/* QUEM COMPRA / VENDE */}
        <section className="band band--creme" id="quem">
          <div className="container" data-reveal>
            <h2 className="section-title">{t.quem.title}</h2>
            <div className="people">
              {t.quem.cards.map((c) => (
                <div key={c.title}>
                  <p className="mono">{c.kicker}</p>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <div className="cta-row">
                    {c.style === 'primary' ? (
                      <a className="btn btn--primary" href="#rede"><span>{c.cta}</span></a>
                    ) : c.style === 'ghost' ? (
                      <a className="btn btn--ghost" href="#rede"><span>{c.cta}</span></a>
                    ) : (
                      <a className="link-quiet" href="#voce">{c.cta}</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLATAFORMA */}
        <section className="band band--papel" id="plataforma">
          <div className="container" data-reveal>
            <h2 className="section-title">{t.plataforma.title}</h2>
            <p className="lede">{t.plataforma.lede}</p>
            <div className="features">
              {t.plataforma.features.map((f) => (
                <div key={f.title}><h3>{f.title}</h3><p>{f.text}</p></div>
              ))}
            </div>
            <div className="cta-row">
              <a className="btn btn--ghost" href={t.appUrl}><span>{t.plataforma.cta}</span></a>
            </div>
          </div>
        </section>

        {/* MERCADO & IMPACTO */}
        <section className="band band--creme" id="impacto">
          <div className="container" data-reveal>
            <h2 className="section-title">{t.impacto.title}</h2>
            <div className="stat-row">
              {t.impacto.stats.map((s) => (
                <div key={s.num}><StatNum stat={s} /><p className="stat__label mono">{s.label}</p></div>
              ))}
            </div>
            <p className="lede" style={{ marginTop: '2.5rem' }}>{t.impacto.lede}</p>
            <p className="footnote">{t.impacto.footnote}</p>
          </div>
        </section>

        {/* ENTERPRISE */}
        <section className="band band--papel" id="empresas">
          <div className="container" data-reveal>
            <p className="mono">{t.empresas.kicker}</p>
            <h2 className="section-title">{t.empresas.title}</h2>
            <div className="features">
              {t.empresas.features.map((f) => (
                <div key={f.title}><h3>{f.title}</h3><p>{f.text}</p></div>
              ))}
            </div>
            <Calculadora t={t.calc} locale={t.locale} />
            <div className="cta-row">
              <a className="btn btn--ghost" href="#rede"><span>{t.empresas.ctaCommercial}</span></a>
            </div>
          </div>
        </section>

        {/* FORM */}
        <section className="band band--verde" id="rede">
          <div className="container" data-reveal>
            <h2 className="section-title">{t.rede.title}</h2>
            <p className="lede">{t.rede.lede}</p>
            <RedeForm t={t.rede} locale={locale} />
          </div>
        </section>

        {/* FAQ */}
        <section className="band band--creme faq" id="faq">
          <div className="container" data-reveal>
            <h2 className="section-title">{t.faq.title}</h2>
            {t.faq.groups.map((g) => (
              <div key={g.title}>
                <h3 className="faq__group">{g.title}</h3>
                {g.items.map((item) => (
                  <details key={item.q}>
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter t={t.footer} langSwitch={t.langSwitch} appUrl={t.appUrl} />
    </>
  );
}
