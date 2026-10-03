import type { Metadata, Viewport } from 'next';
import { en } from '../../content/en';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ecolchain.com'),
  title: en.meta.title,
  description: en.meta.description,
  icons: { icon: '/favicon.svg' },
  alternates: {
    canonical: en.meta.canonical,
    languages: {
      'pt-BR': 'https://ecolchain.com/',
      en: 'https://ecolchain.com/en/',
      'x-default': 'https://ecolchain.com/',
    },
  },
  openGraph: {
    title: en.meta.ogTitle,
    description: en.meta.ogDescription,
    images: ['https://ecolchain.com/img/og.jpg'],
    type: 'website',
  },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="no-js" suppressHydrationWarning>
      <body>
        <link rel="preload" href="/fonts/inter-var-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.replace('no-js','js')" }} />
        {children}
      </body>
    </html>
  );
}
