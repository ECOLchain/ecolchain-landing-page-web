import { describe, it, expect } from 'vitest';
import { springKeyframes } from '../src/lib/spring';

describe('springKeyframes', () => {
  it('converges exactly to the target', () => {
    const frames = springKeyframes(0, 100);
    expect(frames.length).toBeGreaterThan(2);
    expect(frames.at(-1)).toBe(100);
    expect(Math.abs(frames.at(-2)! - 100)).toBeLessThan(0.01);
  });

  it('starts at the from value', () => {
    const frames = springKeyframes(42, 100);
    expect(Math.abs(frames[0] - 42)).toBeLessThan(1);
  });

  it('does not overshoot when damping is 1.0', () => {
    const frames = springKeyframes(0, 100, { damping: 1.0 });
    expect(Math.max(...frames)).toBeLessThanOrEqual(100);
  });

  it('supports retarget from a current value mid-flight', () => {
    const frames = springKeyframes(63.7, 0, { damping: 1.0 });
    expect(Math.abs(frames[0] - 63.7)).toBeLessThan(1);
    expect(frames.at(-1)).toBe(0);
    expect(Math.min(...frames)).toBeGreaterThanOrEqual(0);
  });
});
