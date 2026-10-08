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
        <summary className="mono" aria-label={t.carbonBubbleLabel}>{t.carbonBubble}</summary>
        <p>{t.carbonBubbleText}</p>
      </details>
    </>
  );
}
