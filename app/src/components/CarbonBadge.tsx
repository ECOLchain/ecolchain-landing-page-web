'use client';

import { useEffect } from 'react';

// Website Carbon Badge: injeta o script oficial uma vez, depois da hidratação.
export default function CarbonBadge({ fallback }: { fallback: string }) {
  useEffect(() => {
    if (document.querySelector('script[data-wcb]')) return;
    const s = document.createElement('script');
    s.src = 'https://unpkg.com/website-carbon-badges@1.1.3/b.min.js';
    s.defer = true;
    s.dataset.wcb = '1';
    document.body.appendChild(s);
  }, []);

  return (
    <>
      <div id="wcb" className="carbonbadge" />
      <noscript>
        <span className="carbonbadge--fallback">{fallback}</span>
      </noscript>
    </>
  );
}
