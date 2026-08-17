import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './CustomCursor.module.css';

function supportsFinePointer() {
  return window.matchMedia('(pointer: fine)').matches;
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!supportsFinePointer() || prefersReducedMotion()) {
      setEnabled(false);
      return;
    }
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dot = cursorRef.current;
    const ring = ringRef.current;

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, force3D: true });
    gsap.set(dot, { x: '50vw', y: '50vh' });
    gsap.set(ring, { x: '50vw', y: '50vh', scale: 1 });

    const dotX = gsap.quickTo(dot, 'x', { duration: 0.18, ease: 'power3' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.18, ease: 'power3' });
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.55, ease: 'power3' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.55, ease: 'power3' });

    const move = (e) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    let hovered = false;

    const over = (e) => {
      const target = e.target.closest('a, button, [data-cursor], input, textarea, [role="button"]');
      if (target) {
        hovered = true;
        gsap.to(ring, { scale: 1.9, duration: 0.35, ease: 'power3.out' });
        gsap.to(dot, { scale: 0.4, opacity: 0.5, duration: 0.3 });
      }
    };

    const out = () => {
      if (hovered) {
        hovered = false;
        gsap.to(ring, { scale: 1, duration: 0.35, ease: 'power3.out' });
        gsap.to(dot, { scale: 1, opacity: 1, duration: 0.3 });
      }
    };

    const down = () => gsap.to(ring, { scale: hovered ? 2.6 : 0.8, duration: 0.2 });
    const up = () => gsap.to(ring, { scale: hovered ? 1.9 : 1, duration: 0.3 });

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', over, { passive: true });
    document.addEventListener('mouseout', out, { passive: true });
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={cursorRef} className={styles.dot} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  );
}
