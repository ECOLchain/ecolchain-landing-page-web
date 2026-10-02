// countUp + reveal helpers (client-only, DOM-based).
import { springKeyframes } from './spring';

export function prefersReduced(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function fmt(n: number, locale: string): string {
  return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(n);
}

export function countUp(el: HTMLElement, target: number, template: string, locale: string) {
  const finalText = template.replace('{n}', fmt(target, locale));
  if (prefersReduced() || !el.animate) {
    el.textContent = finalText;
    return;
  }
  const start = performance.now();
  const duration = 700;
  function tick(now: number) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = template.replace('{n}', fmt(Math.round(target * eased), locale));
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

export function initReveal(scope: ParentNode, locale: string) {
  const els = Array.from(scope.querySelectorAll<HTMLElement>('[data-reveal]'));
  const counters = Array.from(scope.querySelectorAll<HTMLElement>('[data-count]'));
  const reduced = prefersReduced();

  function reveal(el: HTMLElement) {
    if (reduced || !el.animate) {
      el.classList.add('is-revealed');
      return;
    }
    const frames = springKeyframes(24, 0, { damping: 1.0, response: 0.5 });
    const anim = el.animate(
      frames.map((y) => ({ transform: `translateY(${y}px)`, opacity: 1 - Math.abs(y) / 24 })),
      { duration: (frames.length / 60) * 1000, fill: 'forwards', easing: 'linear' },
    );
    anim.finished.then(() => { el.classList.add('is-revealed'); anim.cancel(); }).catch(() => {});
  }

  function runCounter(el: HTMLElement) {
    const target = Number(el.dataset.count);
    const template = el.dataset.template || '{n}';
    if (Number.isFinite(target)) countUp(el, target, template, locale);
  }

  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-revealed'));
    counters.forEach(runCounter);
    return;
  }

  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      io.unobserve(entry.target);
      const target = entry.target as HTMLElement;
      if (target.hasAttribute('data-count')) runCounter(target);
      else reveal(target);
    }
  }, { rootMargin: '120px', threshold: 0.1 });

  els.forEach((el) => io.observe(el));
  counters.forEach((el) => io.observe(el));
  return () => io.disconnect();
}
