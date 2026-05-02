"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { animate } from "animejs";

function AnimatedStat({ icon: Icon, stat, label, index }) {
  const numRef = useRef(null);
  const cardRef = useRef(null);
  const animated = useRef(false);

  /* Parse numeric value and suffix.
     Only animate if non-digit chars appear AFTER all digits
     e.g. "92%" ✓  "50+" ✓  "6.5 LPA" ✓
          "24/7" ✗  "Vibrant" ✗  (static display)
  */
  const numStr = String(stat);
  const isNumber = /^[\d.]+[^\d]*$/.test(numStr.trim());
  const numericVal = isNumber ? parseFloat(numStr) : 0;
  const suffix = isNumber ? numStr.replace(/^[\d.]+/, "") : "";

  /* Anime.js counter on scroll into view */
  useEffect(() => {
    const el = numRef.current;
    const card = cardRef.current;
    if (!el || !card || !isNumber) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;
        observer.disconnect();

        const obj = { val: 0 };
        animate(obj, {
          val: numericVal,
          round: numStr.includes(".") ? 0 : 1,
          duration: 1400 + index * 120,
          ease: "outExpo",
          onUpdate: () => {
            if (el) {
              const v = numStr.includes(".")
                ? obj.val.toFixed(1)
                : Math.floor(obj.val);
              el.textContent = v + suffix;
            }
          },
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, [numericVal, suffix, isNumber, index, numStr]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -5, boxShadow: "0 20px 48px rgba(17,42,82,0.18)" }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl border border-[var(--color-border)] shadow-[0_4px_20px_rgba(17,42,82,0.08)] px-6 py-5 flex items-center gap-4 cursor-default"
    >
      <div className="w-11 h-11 rounded-xl bg-[var(--color-bg-alt)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
        <Icon size={22} strokeWidth={1.8} />
      </div>
      <div>
        <div ref={isNumber ? numRef : null}
          className="font-heading font-bold text-[20px] text-[var(--color-primary)] leading-none mb-0.5"
        >
          {stat}
        </div>
        <div className="text-[10px] font-medium text-[var(--color-text-mid)] uppercase tracking-widest">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsBar({ stats }) {
  if (!stats || stats.length === 0) return null;

  return (
    <div className="relative z-20 -mt-12 mb-10 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((item, index) => (
            <AnimatedStat key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
