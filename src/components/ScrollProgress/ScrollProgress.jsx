import { useRef } from 'react';
import { initScrollProgress } from '../../animations/scrollProgress';
import { useAnimation } from '../../hooks/useAnimation';

export default function ScrollProgress() {
  const ref = useRef(null);
  useAnimation(ref, initScrollProgress);

  return <div ref={ref} className="scroll-progress" aria-hidden="true" />;
}
