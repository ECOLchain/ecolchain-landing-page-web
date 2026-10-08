import { describe, it, expect } from 'vitest';
import { stepsPt } from '../src/content/steps.pt';
import { stepsEn } from '../src/content/steps.en';
import type { TrailStep } from '../src/content/steps';

function checkShape(steps: TrailStep[], lang: string) {
  it(`${lang}: 7 etapas com shape completo`, () => {
    expect(steps).toHaveLength(7);
    for (const s of steps) {
      expect(s.id).toBeGreaterThanOrEqual(1);
      expect(s.title.length).toBeGreaterThan(3);
      expect(s.text.length).toBeGreaterThan(20);
      expect(typeof s.roadmap).toBe('boolean');
      expect(s.actor).toMatch(/^(gerador|coleta|cooperativa|transportador|industria|compradores|auditoria)$/);
      expect(Array.isArray(s.tx)).toBe(true);
      for (const t of s.tx) {
        expect(t.hash).toMatch(/…/);
        expect(t.label.length).toBeGreaterThan(2);
        expect(t.lamports).toMatch(/lamports$/);
      }
    }
  });

  it(`${lang}: trilho abre na fonte geradora e não tem etapa de roadmap`, () => {
    expect(steps[0].actor).toBe('gerador');
    expect(steps.filter((s) => s.roadmap)).toEqual([]);
    expect(steps.map((s) => s.title).join(' ')).not.toMatch(/smart contract|repartição/i);
  });

  it(`${lang}: sem etapa de crédito (carbono ou reciclagem)`, () => {
    for (const s of steps) {
      expect(s.title).not.toMatch(/crédito|credit/i);
    }
  });
}

describe('steps data', () => {
  checkShape(stepsPt, 'pt');
  checkShape(stepsEn, 'en');

  it('pt e en têm os mesmos ids e atores', () => {
    expect(stepsPt.map((s) => [s.id, s.actor])).toEqual(stepsEn.map((s) => [s.id, s.actor]));
  });

  it('primeira etapa usa o ator gerador (fonte geradora)', () => {
    expect(stepsPt[0].actor).toBe('gerador');
    expect(stepsEn[0].actor).toBe('gerador');
  });
});
