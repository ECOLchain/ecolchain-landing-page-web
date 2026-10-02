import type { LandingCopy } from '../content/pt';
import CarbonBadge from './CarbonBadge';

interface Props {
  t: LandingCopy['footer'];
  langSwitch: LandingCopy['langSwitch'];
  appUrl: string;
}

export default function SiteFooter({ t, langSwitch, appUrl }: Props) {
  return (
    <footer className="site-footer band--papel">
      <div className="container site-footer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/logo-wordmark.webp" alt="ECOLchain" width={120} height={19} />
        <p className="mono" style={{ fontSize: '0.95rem' }}>{t.mantra}</p>
        <p>{t.tagline}</p>
        <nav className="mono" aria-label={t.navLabel}>
          <a href={appUrl}>App {langSwitch.label === 'EN' ? 'PT' : 'EN'}</a>
          <a href={langSwitch.label === 'EN' ? 'https://app.ecolchain.com/en' : 'https://app.ecolchain.com/pt'} lang={langSwitch.lang}>
            App {langSwitch.label}
          </a>
          <a href="mailto:ecolchain@gmail.com">ecolchain@gmail.com</a>
          <a href="/privacidade/">{t.privacy}</a>
          <a href={langSwitch.href} lang={langSwitch.lang}>{t.langLink}</a>
        </nav>
        <CarbonBadge fallback={t.carbonFallback} />
        <p className="footnote">{t.carbonNote}</p>
      </div>
    </footer>
  );
}
