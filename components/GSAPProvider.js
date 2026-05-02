"use client";

/**
 * GSAPProvider
 * Registers GSAP ScrollTrigger and applies scroll-reveal animation
 * to any element with class "reveal" or data-reveal attribute.
 * Place once inside the root layout — affects all pages.
 */

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPProvider({ children }) {
  useEffect(() => {
    /* Refresh triggers after hydration */
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      /* ── Fade-up reveal for .reveal elements ── */
      const revealEls = gsap.utils.toArray(".reveal");
      if (revealEls.length) {
        ScrollTrigger.batch(revealEls, {
          once: true,
          start: "top 88%",
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              { opacity: 0, y: 36, scale: 0.97 },
              {
                opacity: 1, y: 0, scale: 1,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.1,
                clearProps: "opacity,transform",
              }
            ),
        });
      }

      /* ── Slide-in from left for .reveal-left ── */
      const leftEls = gsap.utils.toArray(".reveal-left");
      if (leftEls.length) {
        ScrollTrigger.batch(leftEls, {
          once: true,
          start: "top 88%",
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              { opacity: 0, x: -40 },
              {
                opacity: 1, x: 0,
                duration: 0.65,
                ease: "power3.out",
                stagger: 0.1,
                clearProps: "opacity,transform",
              }
            ),
        });
      }

      /* ── Slide-in from right for .reveal-right ── */
      const rightEls = gsap.utils.toArray(".reveal-right");
      if (rightEls.length) {
        ScrollTrigger.batch(rightEls, {
          once: true,
          start: "top 88%",
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              { opacity: 0, x: 40 },
              {
                opacity: 1, x: 0,
                duration: 0.65,
                ease: "power3.out",
                stagger: 0.1,
                clearProps: "opacity,transform",
              }
            ),
        });
      }

      /* ── Scale-up for .reveal-scale (e.g. feature cards) ── */
      const scaleEls = gsap.utils.toArray(".reveal-scale");
      if (scaleEls.length) {
        ScrollTrigger.batch(scaleEls, {
          once: true,
          start: "top 88%",
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              { opacity: 0, scale: 0.88 },
              {
                opacity: 1, scale: 1,
                duration: 0.55,
                ease: "back.out(1.4)",
                stagger: 0.07,
                clearProps: "opacity,transform",
              }
            ),
        });
      }
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return <>{children}</>;
}
