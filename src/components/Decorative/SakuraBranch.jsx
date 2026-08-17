/**
 * A cherry-tree branch used as a compositional element.
 * Colours inherit from `currentColor` — set the tone with a wrapping class.
 */
const BRANCH = 'M6 150 C 34 122 58 100 84 62 C 98 42 108 28 134 10';
const TWIG_A = 'M44 106 C 48 92 54 80 58 70';
const TWIG_B = 'M96 56 C 106 42 112 30 118 18';
const TWIG_C = 'M28 124 C 22 116 20 106 22 96';

export default function SakuraBranch({ className = '', style }) {
  return (
    <svg
      viewBox="0 0 160 160"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <path id="sb-petal" d="M0 0 C -3.5 -2.6 -5 -7.2 -3 -11.6 C -1.2 -15.2 1.2 -15.2 3 -11.6 C 5 -7.2 3.5 -2.6 0 0 Z" />
        <g id="sb-blossom">
          <path d="M0 0 C -3.5 -2.6 -5 -7.2 -3 -11.6 C -1.2 -15.2 1.2 -15.2 3 -11.6 C 5 -7.2 3.5 -2.6 0 0 Z" transform="rotate(0)" opacity="0.92" />
          <path d="M0 0 C -3.5 -2.6 -5 -7.2 -3 -11.6 C -1.2 -15.2 1.2 -15.2 3 -11.6 C 5 -7.2 3.5 -2.6 0 0 Z" transform="rotate(72)" opacity="0.92" />
          <path d="M0 0 C -3.5 -2.6 -5 -7.2 -3 -11.6 C -1.2 -15.2 1.2 -15.2 3 -11.6 C 5 -7.2 3.5 -2.6 0 0 Z" transform="rotate(144)" opacity="0.92" />
          <path d="M0 0 C -3.5 -2.6 -5 -7.2 -3 -11.6 C -1.2 -15.2 1.2 -15.2 3 -11.6 C 5 -7.2 3.5 -2.6 0 0 Z" transform="rotate(216)" opacity="0.92" />
          <path d="M0 0 C -3.5 -2.6 -5 -7.2 -3 -11.6 C -1.2 -15.2 1.2 -15.2 3 -11.6 C 5 -7.2 3.5 -2.6 0 0 Z" transform="rotate(288)" opacity="0.92" />
          <circle r="1.1" fill="currentColor" opacity="0.8" />
        </g>
      </defs>

      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <path d={BRANCH} />
        <path d={TWIG_A} />
        <path d={TWIG_B} />
        <path d={TWIG_C} />
      </g>

      <use href="#sb-blossom" x="20" y="128" transform="rotate(-28 20 128) scale(0.9)" fill="currentColor" />
      <use href="#sb-blossom" x="44" y="106" transform="rotate(-10 44 106) scale(0.7)" fill="currentColor" />
      <use href="#sb-blossom" x="58" y="70" transform="rotate(18 58 70) scale(0.85)" fill="currentColor" />
      <use href="#sb-blossom" x="84" y="62" transform="rotate(36 84 62) scale(0.55)" fill="currentColor" />
      <use href="#sb-blossom" x="96" y="56" transform="rotate(60 96 56) scale(0.8)" fill="currentColor" />
      <use href="#sb-blossom" x="118" y="18" transform="rotate(-14 118 18) scale(0.6)" fill="currentColor" />
      <use href="#sb-blossom" x="134" y="10" transform="rotate(44 134 10) scale(0.9)" fill="currentColor" />
    </svg>
  );
}
