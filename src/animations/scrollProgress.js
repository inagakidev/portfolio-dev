import { gsap } from '../lib/gsap';
import { withMotion } from './withMotion';

export const initScrollProgress = withMotion((bar) => {
  gsap.fromTo(
    bar,
    { scaleX: 0 },
    {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    },
  );
});
