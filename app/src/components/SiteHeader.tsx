import type { LandingCopy } from '../content/pt';

interface Props {
  t: LandingCopy['nav'];
  langSwitch: LandingCopy['langSwitch'];
  appUrl: string;
}

export default function SiteHeader({ t, langSwitch, appUrl }: Props) {
  const links = (
    <>
      <a href="#empresas">{t.empresas}</a>
      <a href="#credito">{t.credito}</a>
      <a href="#faq">{t.faq}</a>
      <a href={langSwitch.href} lang={langSwitch.lang}>{langSwitch.label}</a>
      <a className="link-quiet" href={appUrl}>{t.app}</a>
    </>
  );

  return (
    <header className="site-header container">
      <a href="#top" aria-label={t.logoAlt}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/ecolchain-logo.webp" alt="ECOLchain" width={150} height={24} />
      </a>
      <nav className="site-nav mono">{links}</nav>
      <details className="nav-details">
        <summary>{t.menu}</summary>
        <nav className="nav-details__menu mono" aria-label={t.menu}>{links}</nav>
      </details>
    </header>
  );
}
