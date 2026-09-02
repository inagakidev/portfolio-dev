const BLOSSOM_PETAL = 'M0 0 C -3.5 -2.6 -5 -7.2 -3 -11.6 C -1.2 -15.2 1.2 -15.2 3 -11.6 C 5 -7.2 3.5 -2.6 0 0 Z';
const STAMEN = 'M0 0 L0 -4.6';

export default function SakuraBlossom({ size = 48, className = '', style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-16 -16 32 32"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <g>
        <path d={BLOSSOM_PETAL} transform="rotate(0)" opacity="0.9" />
        <path d={BLOSSOM_PETAL} transform="rotate(72)" opacity="0.9" />
        <path d={BLOSSOM_PETAL} transform="rotate(144)" opacity="0.9" />
        <path d={BLOSSOM_PETAL} transform="rotate(216)" opacity="0.9" />
        <path d={BLOSSOM_PETAL} transform="rotate(288)" opacity="0.9" />
        <g stroke="currentColor" strokeWidth="0.7" fill="none">
          <path d={STAMEN} transform="rotate(0)" />
          <path d={STAMEN} transform="rotate(60)" />
          <path d={STAMEN} transform="rotate(120)" />
          <path d={STAMEN} transform="rotate(180)" />
          <path d={STAMEN} transform="rotate(240)" />
          <path d={STAMEN} transform="rotate(300)" />
        </g>
        <circle r="1.2" fill="currentColor" opacity="0.85" />
      </g>
    </svg>
  );
}
