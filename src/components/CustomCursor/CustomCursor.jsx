import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { prefersReducedMotion } from '../../utils/motion';
import { PETAL_PATH } from '../Decorative/petalPath';
import styles from './CustomCursor.module.css';

function supportsFinePointer() {
  return window.matchMedia('(pointer: fine)').matches;
}

const TRAIL_COUNT = 6;
const PETAL_HOLD_INTERVAL = 90;
const MAX_HELD_PETALS = 40;
const MAX_HOLD_DURATION = 4000;

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const trailRefs = useRef([]);
  const petalLayerRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0 });
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
    const trails = trailRefs.current.filter(Boolean);

    gsap.set([dot, ring, ...trails], { xPercent: -50, yPercent: -50, force3D: true });
    gsap.set(dot, { x: '50vw', y: '50vh' });
    gsap.set(ring, { x: '50vw', y: '50vh', scale: 1 });
    gsap.set(trails, {
      x: '50vw',
      y: '50vh',
      scale: (i) => 1 - i * 0.12,
      opacity: (i) => 0.5 - i * 0.07,
    });

    const dotX = gsap.quickTo(dot, 'x', { duration: 0.18, ease: 'power3' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.18, ease: 'power3' });
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.55, ease: 'power3' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.55, ease: 'power3' });
    const trailSetters = trails.map((el, i) => [
      gsap.quickTo(el, 'x', { duration: 0.22 + i * 0.05, ease: 'power2.out' }),
      gsap.quickTo(el, 'y', { duration: 0.22 + i * 0.05, ease: 'power2.out' }),
    ]);

    const move = (e) => {
      pointerRef.current = { x: e.clientX, y: e.clientY };
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
      trailSetters.forEach(([sx, sy]) => {
        sx(e.clientX);
        sy(e.clientY);
      });
    };

    let heldPetals = 0;

    const spawnPetal = (x, y) => {
      const layer = petalLayerRef.current;
      if (!layer || heldPetals >= MAX_HELD_PETALS) return;

      const el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      el.setAttribute('viewBox', '-6 -16 12 18');
      el.setAttribute('fill', 'currentColor');
      el.classList.add(styles.petal);
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.color = Math.random() > 0.5 ? 'var(--c-rose)' : 'var(--c-red-soft)';

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', PETAL_PATH);
      el.appendChild(path);
      layer.appendChild(el);
      heldPetals += 1;

      gsap.fromTo(
        el,
        { x: 0, y: 0, opacity: 0.9, rotate: 0 },
        {
          x: Math.round(Math.random() * 120 - 60),
          y: Math.round(140 + Math.random() * 90),
          rotate: Math.round(Math.random() * 220 - 110),
          opacity: 0,
          duration: 1.4 + Math.random() * 0.8,
          ease: 'power1.in',
          onComplete: () => {
            el.remove();
            heldPetals -= 1;
          },
        },
      );
    };

    let holdIntervalId = null;
    let holdTimeoutId = null;

    const startPetalHold = () => {
      spawnPetal(pointerRef.current.x, pointerRef.current.y);
      holdIntervalId = window.setInterval(() => {
        spawnPetal(pointerRef.current.x, pointerRef.current.y);
      }, PETAL_HOLD_INTERVAL);
      // Backstop in case mouseup/blur never fires (e.g. button released outside the window).
      holdTimeoutId = window.setTimeout(stopPetalHold, MAX_HOLD_DURATION);
    };

    const stopPetalHold = () => {
      window.clearInterval(holdIntervalId);
      window.clearTimeout(holdTimeoutId);
      holdIntervalId = null;
      holdTimeoutId = null;
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

    const down = () => {
      gsap.to(ring, { scale: hovered ? 2.6 : 0.8, duration: 0.2 });
      startPetalHold();
    };
    const up = () => {
      gsap.to(ring, { scale: hovered ? 1.9 : 1, duration: 0.3 });
      stopPetalHold();
    };

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', over, { passive: true });
    document.addEventListener('mouseout', out, { passive: true });
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    window.addEventListener('blur', stopPetalHold);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('blur', stopPetalHold);
      stopPetalHold();
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={petalLayerRef} className={styles.petalLayer} aria-hidden="true" />
      {Array.from({ length: TRAIL_COUNT }, (_, i) => {
        const variant = i % 3 === 0 ? styles['trail--variantA'] : i % 3 === 2 ? styles['trail--variantB'] : '';
        return (
          <div
            key={i}
            ref={(el) => (trailRefs.current[i] = el)}
            className={`${styles.trail} ${variant}`}
            aria-hidden="true"
          />
        );
      })}
      <div ref={cursorRef} className={styles.dot} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  );
}
