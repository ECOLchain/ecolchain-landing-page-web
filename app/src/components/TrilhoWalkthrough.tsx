'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { LandingCopy } from '../content/pt';
import type { ActorId, TrailStep } from '../content/steps';
import { prefersReduced } from '../lib/countup';

interface Box {
  id: ActorId;
  num: string;
  x: number;
  y: number;
  w: number;
  numX: number;
  numY: number;
  textX: number;
  textY: number;
  subY?: number;
}

const BOXES: Box[] = [
  { id: 'coleta', num: '01', x: 10, y: 30, w: 170, numX: 20, numY: 22, textX: 95, textY: 50, subY: 65 },
  { id: 'cooperativa', num: '02', x: 205, y: 30, w: 170, numX: 215, numY: 22, textX: 290, textY: 50, subY: 65 },
  { id: 'transportador', num: '03', x: 400, y: 30, w: 170, numX: 410, numY: 22, textX: 485, textY: 50, subY: 65 },
  { id: 'industria', num: '04', x: 595, y: 30, w: 170, numX: 605, numY: 22, textX: 680, textY: 50, subY: 65 },
  { id: 'compradores', num: '05', x: 790, y: 30, w: 170, numX: 800, numY: 22, textX: 875, textY: 50, subY: 65 },
  { id: 'auditoria', num: '06', x: 985, y: 30, w: 170, numX: 995, numY: 22, textX: 1070, textY: 50, subY: 65 },
];

const EDGES = [
  { n: 1, x1: 180, y1: 52, x2: 205, y2: 52, chain: false },
  { n: 2, x1: 375, y1: 52, x2: 400, y2: 52, chain: false },
  { n: 3, x1: 570, y1: 52, x2: 595, y2: 52, chain: false },
  { n: 4, x1: 765, y1: 52, x2: 790, y2: 52, chain: true },
  { n: 5, x1: 960, y1: 52, x2: 985, y2: 52, chain: true },
];

interface Props {
  t: LandingCopy['trilho'];
  steps: TrailStep[];
}

export default function TrilhoWalkthrough({ t, steps }: Props) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const count = steps.length;
  const current = steps[index];

  function goTo(n: number) {
    if (!Number.isInteger(n) || n < 0 || n >= count || n === index) return;
    setIndex(n);
  }

  // Centraliza o card ativo no trilho (sem scrollIntoView, para não rolar a página).
  useEffect(() => {
    const track = trackRef.current;
    const card = cardRefs.current[index];
    if (!track || !card) return;
    const left = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
    track.scrollTo({ left, behavior: prefersReduced() ? 'auto' : 'smooth' });
  }, [index]);

  // Arraste livre: o card que estaciona na faixa central do trilho vira a etapa ativa.
  // O debounce evita disputa com o scrollTo programático dos botões/teclado.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !('IntersectionObserver' in window)) return;
    let candidate: number | null = null;
    let settle: ReturnType<typeof setTimeout> | undefined;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) candidate = Number((entry.target as HTMLElement).dataset.dot);
        }
        clearTimeout(settle);
        settle = setTimeout(() => {
          if (candidate != null) goTo(candidate);
        }, 120);
      },
      { root: track, rootMargin: '0px -40% 0px -40%', threshold: 0 },
    );
    cardRefs.current.forEach((c) => c && io.observe(c));
    return () => { io.disconnect(); clearTimeout(settle); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const counter = useMemo(
    () => t.counterTemplate.replace('{n}', String(index + 1)).replace('{total}', String(count)),
    [t.counterTemplate, index, count],
  );

  return (
    <div
      className="wl"
      id="walkthrough"
      tabIndex={0}
      aria-label={t.ariaWalkthrough}
      onKeyDown={(ev) => {
        if (ev.key === 'ArrowRight') goTo(index + 1);
        if (ev.key === 'ArrowLeft') goTo(index - 1);
      }}
    >
      <div className="wl__diagram">
        <svg viewBox="0 0 1170 110" role="img" aria-label={t.ariaDiagram}>
          {BOXES.map((b) => {
            const actor = t.actors[b.id];
            return (
              <g key={b.id} className={`actor${current.actor === b.id ? ' is-active' : ''}`} data-actor={b.id}>
                <rect x={b.x} y={b.y} width={b.w} height={44} rx={8} />
                <text className="actor__num" x={b.numX} y={b.numY}>{b.num}</text>
                <text x={b.textX} y={b.textY} textAnchor="middle">{actor.name}</text>
                {b.subY != null && actor.sub ? (
                  <text className="actor__sub" x={b.textX} y={b.subY} textAnchor="middle">{actor.sub}</text>
                ) : null}
              </g>
            );
          })}
          {EDGES.map((e) => (
            <line
              key={e.n}
              className={`edge${e.chain ? ' chain-trail' : ''}${e.n <= index + 1 && e.n <= 5 ? ' is-active' : ''}`}
              data-edge={e.n}
              x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
            />
          ))}
          <text className="mono" x="10" y="100" fontSize="10" opacity="0.7" fill="currentColor">{t.chainNote}</text>
        </svg>
      </div>

      <div className="trail">
        <div className="trail__progress" aria-hidden="true">
          <span
            className="trail__progress-fill"
            data-progress
            style={{ transform: `scaleX(${count > 1 ? index / (count - 1) : 1})` }}
          />
        </div>
        <div className="trail__track" data-track ref={trackRef}>
          {steps.map((s, i) => (
            <article
              key={s.id}
              className={`trailcard${i === index ? ' is-active' : ''}`}
              data-dot={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              onClick={() => goTo(i)}
            >
              <p className="trailcard__num mono">{String(s.id).padStart(2, '0')}</p>
              {s.roadmap ? <p className="trailcard__badge mono">{t.roadmapBadge}</p> : null}
              <h3 className="trailcard__title">{s.title}</h3>
              <p className="trailcard__text">{s.text}</p>
              {s.tx.length > 0 ? (
                <ol className="trailcard__tx">
                  {s.tx.map((tx) => (
                    <li key={tx.hash}>
                      <span><span className="hash">{tx.hash}</span> {tx.label}</span>
                      <span className="lam">{tx.lamports}</span>
                    </li>
                  ))}
                </ol>
              ) : null}
            </article>
          ))}
        </div>
        <div className="wl__controls">
          <p className="mono" data-step-counter>{counter}</p>
          <button className="btn btn--ghost" type="button" data-prev disabled={index === 0} onClick={() => goTo(index - 1)}>
            <span>{t.prev}</span>
          </button>
          <button className="btn btn--primary" type="button" data-next disabled={index === count - 1} onClick={() => goTo(index + 1)}>
            <span>{t.next}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
