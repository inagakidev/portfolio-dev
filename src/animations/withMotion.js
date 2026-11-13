import { gsap } from '../lib/gsap';

// Envolve uma animação para que ela só rode sem prefers-reduced-motion,
// devolvendo a função de cleanup esperada pelo useAnimation.
export function withMotion(setup) {
  return (scope) => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => setup(scope));
    return () => mm.revert();
  };
}
