"use client";

/**
 * useScrollReveal — GSAP ScrollTrigger batch reveal
 * 
 * Usage:
 *   useScrollReveal(".reveal");        // any selector
 *   useScrollReveal("[data-reveal]");  // data-attribute pattern
 * 
 * Add className="reveal" (or data-reveal) to any element
 * you want to fade-up on scroll entry.
 */

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(selector = ".reveal", options = {}) {
  useEffect(() => {
    const {
      y = 32,
      opacity = 0,
      duration = 0.7,
      stagger = 0.1,
      ease = "power3.out",
    } = options;

    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray(selector);
      if (!els.length) return;

      ScrollTrigger.batch(els, {
        once: true,
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { y, opacity, scale: 0.97 },
            {
              y: 0, opacity: 1, scale: 1,
              duration, ease, stagger,
              clearProps: "transform,opacity",
            }
          ),
      });
    });

    return () => ctx.revert();
  }, [selector]);
}

/**
 * useAnimeCounter — Anime.js 4 counting number animation
 * 
 * Usage inside a component:
 *   const elRef = useAnimeCounter(92, "%");
 *   <span ref={elRef} />
 */
import { useRef } from "react";
import { animate as animeAnimate } from "animejs";

export function useAnimeCounter(target, suffix = "", duration = 1600) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const obj = { val: 0 };
        animeAnimate(obj, {
          val: target,
          round: 1,
          duration,
          ease: "outExpo",
          onUpdate: () => {
            if (el) el.textContent = obj.val + suffix;
          },
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, duration]);

  return ref;
}

/**
 * useGSAPHoverTilt — premium card tilt on mouse move
 * 
 * Usage:
 *   const cardRef = useGSAPHoverTilt();
 *   <div ref={cardRef} />
 */
export function useGSAPHoverTilt(intensity = 12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      gsap.to(el, {
        rotateY: x * intensity,
        rotateX: -y * intensity,
        transformPerspective: 800,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(el, {
        rotateX: 0, rotateY: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [intensity]);

  return ref;
}

/**
 * useAnimeStaggerIn — stagger-in on mount (for lists/grids)
 * 
 * Usage:
 *   const listRef = useAnimeStaggerIn();
 *   <ul ref={listRef}>  <li>...</li> ...  </ul>
 */
export function useAnimeStaggerIn(childSelector = "li, .card, .stagger-item", delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        animeStagger(
          el.querySelectorAll(childSelector),
          {
            opacity: [0, 1],
            translateY: [24, 0],
            scale: [0.96, 1],
            duration: 500,
            delay: stagger(80, { start: delay }),
            ease: "outExpo",
          }
        );
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [childSelector, delay]);

  return ref;
}
