import { describe, it, expect } from 'vitest';
import { stepsPt } from '../src/content/steps.pt';
import { stepsEn } from '../src/content/steps.en';
import type { TrailStep } from '../src/content/steps';

function checkShape(steps: TrailStep[], lang: string) {
  it(`${lang}: 8 etapas com shape completo`, () => {
    expect(steps).toHaveLength(8);
    for (const s of steps) {
      expect(s.id).toBeGreaterThanOrEqual(1);
      expect(s.title.length).toBeGreaterThan(3);
      expect(s.text.length).toBeGreaterThan(20);
      expect(typeof s.roadmap).toBe('boolean');
      expect(s.actor).toMatch(/^(coletor|cooperativa|transportador|industria|compradores|auditoria)$/);
      expect(Array.isArray(s.tx)).toBe(true);
      for (const t of s.tx) {
        expect(t.hash).toMatch(/…/);
        expect(t.label.length).toBeGreaterThan(2);
        expect(t.lamports).toMatch(/lamports$/);
      }
    }
  });

  it(`${lang}: roadmap apenas nas etapas 6-7 (carbono e repartição)`, () => {
    expect(steps.filter((s) => s.roadmap).map((s) => s.id)).toEqual([6, 7]);
  });
}

describe('steps data', () => {
  checkShape(stepsPt, 'pt');
  checkShape(stepsEn, 'en');

  it('pt e en têm os mesmos ids e atores', () => {
    expect(stepsPt.map((s) => [s.id, s.actor])).toEqual(stepsEn.map((s) => [s.id, s.actor]));
  });
});
