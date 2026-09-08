import { forwardRef } from 'react';
import { PETAL_PATH } from './petalPath';

const PETAL_ROTATIONS = [0, 72, 144, 216, 288];

const BRANCH = 'M6 150 C 34 122 58 100 84 62 C 98 42 108 28 134 10';
const TWIG_A = 'M44 106 C 48 92 54 80 58 70';
const TWIG_B = 'M96 56 C 106 42 112 30 118 18';
const TWIG_C = 'M28 124 C 22 116 20 106 22 96';

const BLOSSOMS = [
  { x: 20, y: 128, rotate: -28, scale: 0.9, color: 'var(--c-red-soft)' },
  { x: 44, y: 106, rotate: -10, scale: 0.7, color: 'var(--c-rose)' },
  { x: 58, y: 70, rotate: 18, scale: 0.85, color: 'var(--c-red-soft)' },
  { x: 84, y: 62, rotate: 36, scale: 0.55, color: 'var(--c-rose)' },
  { x: 96, y: 56, rotate: 60, scale: 0.8, color: 'var(--c-red-soft)' },
  { x: 118, y: 18, rotate: -14, scale: 0.6, color: 'var(--c-rose)' },
  { x: 134, y: 10, rotate: 44, scale: 0.9, color: 'var(--c-red-soft)' },
];

const SakuraBranch = forwardRef(function SakuraBranch({ className = '', style }, ref) {
  return (
    <svg
      ref={ref}
      viewBox="-20 -20 200 200"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <g id="sb-blossom">
          {PETAL_ROTATIONS.map((deg) => (
            <path key={deg} d={PETAL_PATH} transform={`rotate(${deg})`} opacity="0.92" />
          ))}
          <circle r="1.4" fill="var(--c-paper)" opacity="0.9" />
        </g>
      </defs>

      <g data-branch-group>
        <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
          <path d={BRANCH} data-branch-path />
          <path d={TWIG_A} data-branch-path />
          <path d={TWIG_B} data-branch-path />
          <path d={TWIG_C} data-branch-path />
        </g>

        {BLOSSOMS.map((b) => (
          <g key={`${b.x}-${b.y}`} transform={`rotate(${b.rotate} ${b.x} ${b.y})`}>
            <use
              href="#sb-blossom"
              x={b.x}
              y={b.y}
              fill={b.color}
              data-branch-blossom
              data-scale={b.scale}
            />
          </g>
        ))}
      </g>
    </svg>
  );
});

export default SakuraBranch;
