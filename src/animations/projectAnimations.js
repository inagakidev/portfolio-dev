import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initProjectAnimations(container) {
  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: reduce)', () => {
    container.querySelectorAll('[data-project]').forEach((project) => {
      const panels = project.querySelectorAll('[data-anim="shoji-panel"]');
      gsap.set(panels, { xPercent: (i) => (i === 0 ? -100 : 100) });
    });
  });

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    container.querySelectorAll('[data-project]').forEach((project) => {
      const title = project.querySelector('[data-anim="title"]');
      const num = project.querySelectorAll('[data-anim="num"]');
      const image = project.querySelector('[data-anim="image"]');
      const panels = project.querySelectorAll('[data-anim="shoji-panel"]');
      const text = project.querySelector('[data-anim="text"]');

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: project,
          start: 'top 80%',
          end: 'bottom 35%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        title,
        { yPercent: 115 },
        { yPercent: 0, duration: 1.05, ease: 'power4.out' },
      )
        .fromTo(
          num,
          { xPercent: 24, opacity: 0 },
          { xPercent: 0, opacity: 1, duration: 0.9, stagger: 0.06 },
          '-=0.7',
        )
        .fromTo(
          image,
          { scale: 1.07 },
          { scale: 1, duration: 1.1 },
          '-=0.8',
        )
        .fromTo(
          panels,
          { xPercent: 0 },
          { xPercent: (i) => (i === 0 ? -100 : 100), duration: 0.95, ease: 'power4.inOut', stagger: 0.05 },
          '<',
        )
        .fromTo(
          text,
          { y: 34, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85 },
          '-=0.85',
        );
    });
  });

  return () => mm.revert();
}
