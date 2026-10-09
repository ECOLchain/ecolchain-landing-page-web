import type { LandingCopy } from '../content/pt';
import CarbonBadge from './CarbonBadge';

interface Props {
  t: LandingCopy['footer'];
  langSwitch: LandingCopy['langSwitch'];
}

export default function SiteFooter({ t, langSwitch }: Props) {
  return (
    <>
      <footer className="site-footer band--verde">
        <div className="container site-footer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/ecolchain-logo.png" alt="ECOLchain" width={120} height={19} />
          <p>{t.tagline}</p>
          <nav className="mono" aria-label={t.navLabel}>
            <a href="mailto:ecolchain@gmail.com">ecolchain@gmail.com</a>
            <a href="/privacidade/">{t.privacy}</a>
            <a href={langSwitch.href} lang={langSwitch.lang}>{t.langLink}</a>
          </nav>
          <CarbonBadge fallback={t.carbonFallback} />
          <p className="footnote">{t.carbonNote}</p>
        </div>
      </footer>
      <details className="carbon-float">
        <summary className="mono" aria-label={t.carbonBubbleLabel}>
          <span className="carbon-float__label">
            <span className="carbon-float__hint">{t.carbonBubblePre}</span>
            <span className="carbon-float__value">{t.carbonBubble}</span>
            <span className="carbon-float__hint">{t.carbonBubbleSub}</span>
          </span>
          <span className="carbon-float__arrow" aria-hidden="true">↑</span>
          <span className="carbon-float__x" aria-hidden="true">{t.carbonBubbleClose}</span>
        </summary>
        <div className="carbon-float__open" role="dialog" aria-label={t.carbonBubbleLabel}>
          <div className="carbon-float__earth" aria-hidden="true"><span /></div>
          <div className="carbon-float__content">
            <h2>{t.carbonBubbleTitle}</h2>
            <p>{t.carbonBubbleText}</p>
            <p>{t.carbonBubbleText2}</p>
            <div className="carbon-float__links">
              <a className="btn" href="https://websitecarbon.com/" target="_blank" rel="noreferrer"><span>{t.carbonBubbleBtn1}</span></a>
              <a className="btn" href="https://ecograder.com/" target="_blank" rel="noreferrer"><span>{t.carbonBubbleBtn2}</span></a>
            </div>
          </div>
        </div>
      </details>
    </>
  );
}
