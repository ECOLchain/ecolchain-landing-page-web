// Pure 0-based stepper state machine. No DOM.
export interface Stepper<T> {
  readonly index: number;
  readonly current: T;
  readonly count: number;
  next(): void;
  prev(): void;
  goTo(n: number): void;
  subscribe(fn: (step: T, index: number) => void): () => void;
}

export function createStepper<T>(steps: readonly T[]): Stepper<T> {
  if (!Array.isArray(steps) || steps.length === 0) {
    throw new Error('createStepper: non-empty steps array required');
  }
  let index = 0;
  const listeners = new Set<(step: T, index: number) => void>();

  const api: Stepper<T> = {
    get index() { return index; },
    get current() { return steps[index]; },
    get count() { return steps.length; },
    next() { api.goTo(index + 1); },
    prev() { api.goTo(index - 1); },
    goTo(n: number) {
      if (!Number.isInteger(n) || n < 0 || n >= steps.length || n === index) return;
      index = n;
      listeners.forEach((fn) => fn(api.current, index));
    },
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
  };
  return api;
}
