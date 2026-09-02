import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initHeroAnimation({
  section,
  cover,
  circle,
  circleWrap,
  reveal,
  nav = {},
}) {
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
    const ghost = cover.querySelector("[data-ghost]");
    intro
      .fromTo(
        ghost,
        { yPercent: 10, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.6, ease: "power2.out" },
        0,
      )
      .fromTo(
        cover.querySelectorAll("[data-hero-label]"),
        { opacity: 0 },
        { opacity: 1, duration: 0.8, stagger: 0.07 },
        0.15,
      )
      .fromTo(
        cover.querySelectorAll("[data-hero-fade]:not([data-ghost])"),
        { yPercent: 26, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.15, stagger: 0.12 },
        "-=0.85",
      )
      .fromTo(
        circle,
        { scale: 0.55, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.35, ease: "power4.out" },
        "-=1.15",
      )
      .fromTo(
        circleWrap.querySelector("[data-circle-fade]:last-child"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" },
        "-=0.8",
      );
  });

  mm.add("(prefers-reduced-motion: reduce)", () => {
    gsap.set(circle, { scale: 1, opacity: 1 });
    gsap.set(cover, { opacity: 1, pointerEvents: "auto" });
    gsap.set(reveal, { opacity: 0, display: "none", pointerEvents: "none" });
    nav.onLeave?.();
  });

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    const coverScale = () => {
      const wrapRect = circleWrap.getBoundingClientRect();
      const size = Math.min(circle.offsetWidth, circle.offsetHeight);
      const cx = wrapRect.left + wrapRect.width / 2;
      const cy = wrapRect.top + wrapRect.height / 2;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const maxD = Math.max(
        Math.hypot(cx, cy),
        Math.hypot(w - cx, cy),
        Math.hypot(cx, h - cy),
        Math.hypot(w - cx, h - cy),
      );
      return Math.max((maxD * 1.06) / (size / 2), 2.4);
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${window.innerHeight}`,
        scrub: 0.6,
        onUpdate: (self) => nav.onUpdate?.(self.progress),
        onLeave: () => nav.onLeave?.(),
        onLeaveBack: () => nav.onLeaveBack?.(),
      },
      defaults: { ease: "none" },
    });

    tl.set(cover, { pointerEvents: "auto" }, 0.05)
      .set(cover, { pointerEvents: "none" }, 0.4)
      .to(
        cover.querySelectorAll("[data-hero-fade]"),
        {
          yPercent: -10,
          opacity: 0,
          duration: 0.3,
          stagger: 0.02,
          ease: "power2.in",
        },
        0.12,
      )
      .to(
        circleWrap.querySelectorAll("[data-circle-fade]"),
        { opacity: 0, scale: 1.12, duration: 0.2, stagger: 0.04 },
        0.16,
      )
      .to(
        circle,
        { scale: coverScale, duration: 0.52, ease: "power2.inOut" },
        0.08,
      )
      .to(reveal, { opacity: 1, duration: 0.12, ease: "power1.inOut" }, 0.62)
      .set(reveal, { pointerEvents: "none" }, 0.58)
      .set(reveal, { pointerEvents: "auto" }, 0.66)
      .fromTo(
        reveal.querySelectorAll("[data-reveal-el]"),
        { y: 44, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.1, stagger: 0.035, ease: "power3.out" },
        0.63,
      );
  });

  return () => mm.revert();
}
