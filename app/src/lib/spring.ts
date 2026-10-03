// Critically-damped spring sampler (60 fps).
// damping 1.0 = no overshoot; response ≈ seconds to settle (Apple-style parameters).

export interface SpringOptions {
  damping?: number;
  response?: number;
  velocity?: number;
}

export function springKeyframes(
  from: number,
  to: number,
  { damping = 1.0, response = 0.4, velocity = 0 }: SpringOptions = {},
): number[] {
  const fps = 60;
  const dt = 1 / fps;
  const omega = (2 * Math.PI) / response;
  const frames = [from];
  let x = from;
  let v = velocity;
  for (let i = 0; i < fps * 4; i++) {
    const accel = -omega * omega * (x - to) - 2 * damping * omega * v;
    v += accel * dt;
    x += v * dt;
    frames.push(x);
    if (Math.abs(x - to) < 1e-3 && Math.abs(v) < 1e-3) break;
  }
  frames.push(to);
  return frames;
}
