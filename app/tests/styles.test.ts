import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../src/app/globals.css', import.meta.url), 'utf8')
  .replace(/@font-face\s*\{[^}]*\}/g, ''); // range da fonte variável não é peso de uso
const landing = readFileSync(new URL('../src/components/LandingPage.tsx', import.meta.url), 'utf8');
const layoutPt = readFileSync(new URL('../src/app/(pt)/layout.tsx', import.meta.url), 'utf8');
const layoutEn = readFileSync(new URL('../src/app/(en)/layout.tsx', import.meta.url), 'utf8');

describe('estilo: escala tipográfica padronizada', () => {
  it('somente pesos 400 (herdado) e 600 declarados', () => {
    const weights = [...css.matchAll(/font-weight:\s*(\d+)/g)].map((m) => m[1]);
    expect([...new Set(weights)].sort()).toEqual(['600']);
  });
  it('labels mono restritos à escala 0.78rem (0.72rem para micro)', () => {
    expect(css).not.toMatch(/font-size:\s*0\.8rem/);
    expect(css).not.toMatch(/font-size:\s*0\.62rem/);
    expect(css).toMatch(/\.mono\s*\{[^}]*font-size:\s*0\.78rem/);
  });
  it('texto secundário unificado em 0.92rem', () => {
    for (const size of ['0.82rem', '0.9rem', '0.95rem']) {
      expect(css).not.toMatch(new RegExp(`font-size:\\s*${size.replace('.', '\\.')}`));
    }
  });
  it('títulos de card unificados em 1.25rem', () => {
    expect(css).not.toMatch(/font-size:\s*1\.3rem/);
    expect(css).not.toMatch(/font-size:\s*1\.5rem/);
  });
  it('hero sem negrito interno no título', () => {
    expect(landing).not.toContain('<b>');
    expect(css).not.toContain('.display b');
  });
  it('sem CSS morto das seções removidas', () => {
    expect(css).not.toMatch(/\.people|\.stat-row/);
  });
});

describe('estilo: multiplataforma (desktop e mobile)', () => {
  it('viewport-fit=cover + theme-color + color-scheme nos dois layouts', () => {
    for (const src of [layoutPt, layoutEn]) {
      expect(src).toContain("viewportFit: 'cover'");
      expect(src).toContain('themeColor');
      expect(src).toContain("colorScheme: 'light'");
    }
  });
  it('sem flash cinza ao tocar', () => {
    expect(css).toContain('-webkit-tap-highlight-color: transparent');
  });
  it('links e controles sem delay residual de toque', () => {
    expect(css).toContain('touch-action: manipulation');
  });
  it('carrossel horizontal não disputa o scroll vertical', () => {
    expect(css).toContain('touch-action: pan-y');
    expect(css).toContain('overscroll-behavior-inline: contain');
  });
  it('hover apenas onde existe ponteiro preciso', () => {
    const gate = css.indexOf('@media (hover: hover) and (pointer: fine)');
    expect(gate).toBeGreaterThan(-1);
    expect(css.slice(0, gate)).not.toContain(':hover');
  });
  it('alvos de toque com no mínimo 44px', () => {
    expect(css).toMatch(/\.btn\s*\{[^}]*min-height:\s*44px/);
    expect(css).toMatch(/\.faq summary\s*\{[^}]*min-height:\s*44px/);
  });
  it('controles não selecionáveis por long-press', () => {
    expect(css).toContain('user-select: none');
    expect(css).toContain('-webkit-touch-callout: none');
  });
  it('safe-area respeitada (notch e home indicator)', () => {
    expect(css).toContain('env(safe-area-inset');
  });
  it('checkbox não herda estilo de campo de texto', () => {
    expect(css).toMatch(/input\[type="checkbox"\]/);
  });
});

describe('estilo: revisão da reunião (nav fixa, verde unificado, carbono)', () => {
  it('header fica fixo no topo durante o scroll', () => {
    expect(css).toMatch(/\.site-header\s*\{[^}]*position:\s*sticky/);
  });
  it('âncoras compensam a altura do header fixo', () => {
    expect(css).toMatch(/scroll-margin-top:\s*[3-9]/);
  });
  it('estado ativo do trilho usa o verde claro, não o tinta', () => {
    expect(css).toMatch(/\.trailcard\.is-active\s*\{[^}]*background:\s*var\(--verde-claro\)/);
    expect(css).toMatch(/\.actor\.is-active rect\s*\{[^}]*fill:\s*var\(--verde-claro\)/);
  });
  it('título do hero respira: word-spacing declarado e cor verde', () => {
    expect(css).toMatch(/\.display\s*\{[^}]*word-spacing/);
    expect(css).toMatch(/\.display\s*\{[^}]*color:\s*var\(--verde/);
  });
  it('bolha de carbono flutuante existe e é clicável sem JS', () => {
    expect(css).toMatch(/\.carbon-float\s*\{[^}]*position:\s*fixed/);
  });
  it('diagrama do trilho com fontes legíveis (mínimo ~9.5px)', () => {
    expect(css).toMatch(/\.actor text\s*\{[^}]*font-size:\s*1[0-9]px/);
    expect(css).toMatch(/actor__num\s*\{[^}]*font-size:\s*(1[0-9]|9\.[5-9])px/);
    expect(css).toMatch(/actor__sub\s*\{[^}]*font-size:\s*(1[0-9]|9\.[5-9])px/);
  });
});
