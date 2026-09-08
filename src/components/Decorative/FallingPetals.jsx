import { useEffect, useMemo, useState } from 'react';
import { prefersReducedMotion } from '../../utils/motion';
import SakuraPetal from './SakuraPetal';
import styles from './FallingPetals.module.css';

const PETAL_COUNT = 8;

export default function FallingPetals() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(!prefersReducedMotion());
  }, []);

  const petals = useMemo(
    () =>
      Array.from({ length: PETAL_COUNT }, (_, i) => ({
        id: i,
        x: `${Math.round(Math.random() * 100)}%`,
        duration: `${(8 + Math.random() * 6).toFixed(2)}s`,
        delay: `-${(Math.random() * 14).toFixed(2)}s`,
        drift: `${Math.round(Math.random() * 60 - 30)}px`,
        rot: `${Math.round(Math.random() * 160 - 80)}deg`,
        rot2: `${Math.round(Math.random() * 320 - 160)}deg`,
        size: `${Math.round(10 + Math.random() * 8)}px`,
        color: i % 2 === 0 ? 'var(--c-rose)' : 'var(--c-red-soft)',
      })),
    [],
  );

  if (!enabled) return null;

  return (
    <div className={styles.petals} aria-hidden="true">
      {petals.map((p) => (
        <SakuraPetal
          key={p.id}
          className={styles.petal}
          style={{
            '--x': p.x,
            '--duration': p.duration,
            '--delay': p.delay,
            '--drift': p.drift,
            '--rot': p.rot,
            '--rot2': p.rot2,
            '--size': p.size,
            color: p.color,
          }}
        />
      ))}
    </div>
  );
}
