import { PETAL_PATH } from './petalPath';

export default function SakuraPetal({ className = '', style }) {
  return (
    <svg
      viewBox="-6 -16 12 18"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path d={PETAL_PATH} />
    </svg>
  );
}
