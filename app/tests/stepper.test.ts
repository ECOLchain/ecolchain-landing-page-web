import { describe, it, expect } from 'vitest';
import { createStepper } from '../src/lib/stepper';

const steps = Array.from({ length: 7 }, (_, i) => ({ id: i + 1, title: `Etapa ${i + 1}` }));

describe('createStepper', () => {
  it('starts at step 0', () => {
    const s = createStepper(steps);
    expect(s.index).toBe(0);
    expect(s.current.title).toBe('Etapa 1');
    expect(s.count).toBe(7);
  });

  it('next/prev move within bounds', () => {
    const s = createStepper(steps);
    s.next();
    expect(s.index).toBe(1);
    s.prev();
    expect(s.index).toBe(0);
  });

  it('does not go below 0 or above count-1', () => {
    const s = createStepper(steps);
    s.prev();
    expect(s.index).toBe(0);
    s.goTo(6);
    s.next();
    expect(s.index).toBe(6);
  });

  it('goTo ignores out-of-range and non-integer values', () => {
    const s = createStepper(steps);
    s.goTo(3);
    s.goTo(7);
    expect(s.index).toBe(3);
    s.goTo(-1);
    expect(s.index).toBe(3);
    s.goTo(2.5);
    expect(s.index).toBe(3);
  });

  it('notifies subscribers on change, not on no-op', () => {
    const s = createStepper(steps);
    const calls: Array<[string, number]> = [];
    const unsub = s.subscribe((step, i) => calls.push([step.title, i]));
    s.goTo(0); // no-op
    s.next();
    unsub();
    s.next();
    expect(calls).toEqual([['Etapa 2', 1]]);
  });

  it('throws on empty steps', () => {
    expect(() => createStepper([])).toThrow();
  });
});
