import type { LandingCopy } from '../content/pt';
import type { TrailStep } from '../content/steps';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import Reveal from './Reveal';
import TrilhoWalkthrough from './TrilhoWalkthrough';
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
  bar?: number;
}

function StatNum({ stat }: { stat: Stat }) {
  if (stat.count != null && stat.template) {
    return (
      <p className="stat__num" data-count={stat.count} data-template={stat.template}>{stat.num}</p>
    );
  }
  return <p className="stat__num">{stat.num}</p>;
}

function VsStat({ stat }: { stat: Stat }) {
  return (
    <div>
      <StatNum stat={stat} />
      {stat.bar != null ? (
        <div className="vs__bar" aria-hidden="true">
          <span className="vs__bar-fill" style={{ width: `${stat.bar}%` }} />
        </div>
      ) : null}
      <p className="stat__label mono">{stat.label}</p>
    </div>
  );
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
        <section className="band band--creme band--hero">
          <div className="container" data-reveal>
            <p className="mono">{t.hero.kicker}</p>
            <h1 className="display">{t.hero.titleA} {t.hero.titleB}</h1>
            <p className="lede">{t.hero.lede1}</p>
            <p className="lede" style={{ marginTop: '1rem' }}>{t.hero.lede2}</p>
            <div className="cta-row">
              <a className="btn btn--primary" href="#rede"><span>{t.hero.ctaPrimary}</span></a>
            </div>
          </div>
        </section>

        {/* RESÍDUOS TÊM VALOR · MUNDO VS BRASIL LADO A LADO */}
        <section className="band band--papel" id="problema">
          <div className="container" data-reveal>
            <h2 className="section-title">{t.problema.title}</h2>
            <p className="lede">{t.problema.lede}</p>
            <div className="vs">
              <div className="vs__col">
                <p className="mono vs__label">{t.problema.globalLabel}</p>
                <div className="stat-col">
                  {t.problema.globalStats.map((s) => (
                    <VsStat key={s.num} stat={s} />
                  ))}
                </div>
              </div>
              <div className="vs__col">
                <p className="mono vs__label">{t.problema.brasilLabel}</p>
                <div className="stat-col">
                  {t.problema.brasilStats.map((s) => (
                    <VsStat key={s.num} stat={s} />
                  ))}
                </div>
              </div>
            </div>
            <p className="footnote" style={{ marginTop: '2.5rem' }}>{t.problema.source}</p>
          </div>
        </section>

        {/* ENTERPRISE */}
        <section className="band band--verde" id="empresas">
          <div className="container" data-reveal>
            <p className="mono">{t.empresas.kicker}</p>
            <h2 className="section-title">{t.empresas.title}</h2>
            <div className="features">
              {t.empresas.features.map((f) => (
                <div key={f.title}><h3>{f.title}</h3><p>{f.text}</p></div>
              ))}
            </div>
            <div className="cta-row">
              <a className="btn btn--ghost" href="#rede"><span>{t.empresas.ctaCommercial}</span></a>
            </div>
          </div>
        </section>

        {/* WALKTHROUGH: TRILHO DO RESÍDUO */}
        <section className="band band--papel" id="trilho">
          <div className="container" data-reveal>
            <p className="mono">{t.trilho.kicker}</p>
            <h2 className="section-title">{t.trilho.title}</h2>
            <p className="lede">{t.trilho.lede}</p>
            <TrilhoWalkthrough t={t.trilho} steps={steps} />
          </div>
        </section>

        {/* LEGISLAÇÃO */}
        <section className="band band--creme" id="legislacao">
          <div className="container" data-reveal>
            <p className="mono">{t.legislacao.kicker}</p>
            <h2 className="section-title">{t.legislacao.title}</h2>
            <p className="lede">{t.legislacao.lede}</p>
            <div className="features">
              {t.legislacao.items.map((f) => (
                <div key={f.law}><h3>{f.law}</h3><p>{f.text}</p></div>
              ))}
            </div>
            <p className="footnote" style={{ marginTop: '2rem' }}>{t.legislacao.footnote}</p>
            <div className="cta-row">
              <a className="btn btn--primary" href="#rede"><span>{t.legislacao.cta}</span></a>
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

      <SiteFooter t={t.footer} langSwitch={t.langSwitch} />
    </>
  );
}
