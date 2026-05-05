"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Building2, Briefcase } from "lucide-react";

/**
 * StoryCarousel — Premium split-panel testimonial cards
 *
 * Card anatomy:
 *   ┌──────────┬──────────────────────────────┐
 *   │          │  ❝ (decorative)              │
 *   │          │                              │
 *   │  PHOTO   │  Quote text (3-4 lines)      │
 *   │  full    │                              │
 *   │  height  │  ──────────────────────      │
 *   │  object  │                              │
 *   │  -cover  │  Name (bold)                 │
 *   │          │  Position                    │
 *   │          │  🏢 Company                  │
 *   └──────────┴──────────────────────────────┘
 */

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function StoryCarousel({ stories }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [visible, setVisible] = useState(1);   // 1 on mobile, 2 on sm+
  const dragStartX = useRef(0);

  /* Respond to viewport width */
  useEffect(() => {
    const update = () => setVisible(window.innerWidth >= 640 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const total = stories.length;
  const maxIndex = Math.max(0, total - visible);

  const clamp = (v) => Math.max(0, Math.min(v, maxIndex));
  const prev = () => setIndex(i => clamp(i - 1));
  const next = () => setIndex(i => clamp(i + 1));

  /* Reset index when visible count changes */
  useEffect(() => { setIndex(0); }, [visible]);

  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const t = setInterval(() => setIndex(i => (i >= maxIndex ? 0 : i + 1)), 5000);
    return () => clearInterval(t);
  }, [paused, maxIndex]);

  const onDown = (e) => {
    dragStartX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    setDragging(true); setPaused(true);
  };
  const onUp = (e) => {
    if (!dragging) return;
    const dx = (e.clientX ?? e.changedTouches?.[0]?.clientX ?? 0) - dragStartX.current;
    if (dx < -40) next(); else if (dx > 40) prev();
    setDragging(false); setPaused(false);
  };

  const cardW = 100 / visible;
  const offset = -(index * cardW);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); setDragging(false); }}
    >
      {/* Viewport */}
      <div className="overflow-hidden rounded-2xl">
        {/* Track */}
        <div
          className="flex items-stretch transition-transform duration-500"
          style={{ transform: `translateX(${offset}%)`, transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
          onPointerDown={onDown} onPointerUp={onUp}
          onTouchStart={onDown} onTouchEnd={onUp}
          onDragStart={(e) => e.preventDefault()}
        >
          {stories.map((s, i) => (
            <div key={i} className="shrink-0 px-3 box-border" style={{ width: `${cardW}%` }}>

              {/* ══════════════════ CARD ══════════════════ */}
              <div className="h-full flex rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-[0_6px_28px_rgba(17,42,82,0.10)] select-none bg-white">

                {/* ── LEFT: Full-height photo panel ── */}
                <div className="relative shrink-0 overflow-hidden" style={{ width: "160px" }}>
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover object-top"
                    draggable={false}
                  />
                  {/* Subtle right-edge fade so photo bleeds into card */}
                  <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-r from-transparent to-white" />
                  {/* Bottom name overlay for visual flair */}
                  <div
                    className="absolute bottom-0 inset-x-0 px-3 py-2"
                    style={{ background: "linear-gradient(to top, rgba(11,28,55,0.85) 0%, transparent 100%)" }}
                  >
                    <span className="text-white font-heading font-bold text-[11px] leading-tight block">{s.name}</span>
                    <span className="text-white/70 text-[9px]">{s.batch}</span>
                  </div>
                </div>

                {/* ── RIGHT: Content panel ── */}
                <div className="flex flex-col flex-1 p-6 min-w-0">

                  {/* Decorative large opening quote */}
                  <div
                    className="font-heading font-black leading-none mb-1 select-none"
                    style={{ fontSize: "52px", lineHeight: "0.75", color: "var(--color-primary)", opacity: 0.12 }}
                  >
                    &ldquo;
                  </div>

                  {/* Quote text */}
                  <p className="text-[12.5px] text-[var(--color-text-dark)] leading-relaxed flex-1 mb-5 line-clamp-4 italic">
                    {s.quote}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-[var(--color-border)] mb-4" />



                  {/* Identity */}
                  <div className="space-y-1">
                    <div className="font-heading font-bold text-[13px] text-[var(--color-primary)]">
                      {s.name}
                    </div>

                    {/* Position row */}
                    <div className="flex items-center gap-1.5">
                      <Briefcase size={10} className="shrink-0 text-[var(--color-text-light)]" />
                      <span className="text-[11px] text-[var(--color-text-mid)] leading-snug">{s.position}</span>
                    </div>

                    {/* Company row */}
                    <div className="flex items-center gap-1.5">
                      <Building2 size={10} className="shrink-0 text-[var(--color-text-light)]" />
                      <span
                        className="text-[11px] font-heading font-semibold leading-snug"
                        style={{ color: "#1a56db" }}
                      >
                        {s.company}
                      </span>
                    </div>

                    {/* Dept badge */}
                    <div className="pt-1">
                      <span className="inline-block text-[9px] font-heading font-bold uppercase tracking-wider text-[var(--color-text-mid)] bg-[var(--color-bg-alt)] border border-[var(--color-border)] px-2 py-0.5 rounded-full">
                        {s.dept}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
              {/* ════════════════════════════════════════ */}

            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      {maxIndex > 0 && (
        <>
          <button
            onClick={prev} disabled={index === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-9 h-9 rounded-full bg-white border border-[var(--color-border)] shadow-md flex items-center justify-center text-[var(--color-primary)] disabled:opacity-20 hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-200 z-10"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next} disabled={index >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-9 h-9 rounded-full bg-white border border-[var(--color-border)] shadow-md flex items-center justify-center text-[var(--color-primary)] disabled:opacity-20 hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-200 z-10"
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}

      {/* Pill dots */}
      {maxIndex > 0 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i} onClick={() => setIndex(i)} aria-label={`Slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${i === index
                  ? "w-7 h-2.5 bg-[var(--color-primary)]"
                  : "w-2.5 h-2.5 bg-[var(--color-border)] hover:bg-[var(--color-primary)]/40"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
