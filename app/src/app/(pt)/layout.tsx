import type { Metadata, Viewport } from 'next';
import { pt } from '../../content/pt';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ecolchain.com'),
  title: pt.meta.title,
  description: pt.meta.description,
  icons: { icon: '/favicon.svg?v=2' },
  alternates: {
    canonical: pt.meta.canonical,
    languages: {
      'pt-BR': 'https://ecolchain.com/',
      en: 'https://ecolchain.com/en/',
      'x-default': 'https://ecolchain.com/',
    },
  },
  openGraph: {
    title: pt.meta.ogTitle,
    description: pt.meta.ogDescription,
    images: ['https://ecolchain.com/img/og.jpg'],
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  interactiveWidget: 'resizes-content',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#00e8c5' },
    { media: '(prefers-color-scheme: dark)', color: '#0a3a28' },
  ],
  colorScheme: 'light',
};

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="no-js" suppressHydrationWarning>
      <body>
        <link rel="preload" href="/fonts/inter-var-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.replace('no-js','js')" }} />
        {children}
      </body>
    </html>
  );
}
