import { describe, it, expect } from 'vitest';
import { computeCompliance, META_RATE, ECO_PRICE, CONV_PRICE } from '../src/lib/calc';

describe('computeCompliance', () => {
  it('computes the 32% target for a round volume', () => {
    const r = computeCompliance(1000);
    expect(r.metaT).toBeCloseTo(320);
  });

  it('prices ECOLchain at the reference R$ 325/t', () => {
    const r = computeCompliance(1000);
    expect(r.ecoCost).toBeCloseTo(320 * ECO_PRICE);
  });

  it('prices conventional reverse logistics at R$ 1.800/t', () => {
    const r = computeCompliance(1000);
    expect(r.convCost).toBeCloseTo(320 * CONV_PRICE);
  });

  it('computes savings and percentage consistently', () => {
    const r = computeCompliance(1000);
    expect(r.savings).toBeCloseTo(r.convCost - r.ecoCost);
    expect(r.savingsPct).toBeCloseTo((1 - ECO_PRICE / CONV_PRICE) * 100);
  });

  it('accepts string input with comma or dot decimals', () => {
    expect(computeCompliance('250,5').metaT).toBeCloseTo(250.5 * META_RATE);
    expect(computeCompliance('250.5').metaT).toBeCloseTo(250.5 * META_RATE);
  });

  it('clamps zero, negative and non-numeric input to zeros', () => {
    const zero = { metaT: 0, ecoCost: 0, convCost: 0, savings: 0, savingsPct: 0 };
    expect(computeCompliance(0)).toEqual(zero);
    expect(computeCompliance(-10)).toEqual(zero);
    expect(computeCompliance('abc')).toEqual(zero);
    expect(computeCompliance('')).toEqual(zero);
    expect(computeCompliance(NaN)).toEqual(zero);
  });

  it('handles fractional tonnage without NaN', () => {
    const r = computeCompliance(3.7);
    expect(Number.isFinite(r.metaT)).toBe(true);
    expect(r.metaT).toBeCloseTo(3.7 * META_RATE);
  });
});
