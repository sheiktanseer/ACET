"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, GraduationCap, Users, TrendingUp, ChevronRight } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "Quality\nEducation" },
  { icon: Users, label: "Expert\nFaculty" },
  { icon: TrendingUp, label: "100%\nPlacement\nSupport" },
];

export default function AdmissionPopup() {
  const [open, setOpen] = useState(false);

  /* Academic year: always current → next, updates automatically every Jan 1 */
  const yr = new Date().getFullYear();
  const acYear = `${yr} – ${yr + 1}`;

  /* Show popup 1s after mount on EVERY page load — no storage gate */
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 1000);
    return () => clearTimeout(t);
  }, []);

  const close = () => setOpen(false);

  return (
    <AnimatePresence>
      {open && (
        /* ── Backdrop ── */
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={close}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6"
          style={{ backgroundColor: "rgba(4,10,24,0.80)", backdropFilter: "blur(6px)" }}
        >
          {/* ── Modal — wide landscape banner ── */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full overflow-hidden"
            style={{
              maxWidth: "780px",
              borderRadius: "20px",
              background: "#07112b",
              boxShadow: "0 40px 100px rgba(4,10,30,0.7), 0 0 0 1px rgba(255,255,255,0.06)",
            }}
          >
            {/* ── LAYOUT: left content + right photo ── */}
            <div className="flex min-h-[320px]">

              {/* ═══ LEFT CONTENT PANEL ═══ */}
              <div className="relative z-10 flex flex-col justify-between px-9 py-8 flex-1 min-w-0">

                {/* 2026-27 pill — top right */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="absolute top-5 right-5 z-20 px-3 py-1 rounded-full border font-heading font-bold text-[14px]"
                    style={{
                      borderColor: "rgba(255,255,255,0.2)",
                      background: "rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.80)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {acYear}
                  </div>
                </div>



                {/* Headline */}
                <div className="mb-4">
                  <h2
                    className="font-heading font-black leading-[1.05] mb-1"
                    style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#ffffff", letterSpacing: "-0.02em" }}
                  >
                    Admission
                  </h2>
                  <h2
                    className="font-heading font-black leading-[1.05] mb-4"
                    style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#3b82f6", letterSpacing: "-0.02em" }}
                  >
                    Open
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", lineHeight: 1.65, maxWidth: "280px" }}>
                    Step into a future of endless possibilities with world-class engineering education.
                  </p>
                </div>

                {/* CTA buttons */}
                <div className="flex items-center gap-4 flex-wrap">
                  <Link
                    href="/contact"
                    onClick={close}
                    className="inline-flex items-center gap-2 font-heading font-bold text-[13px] text-[#07112b] px-6 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95"
                    style={{ background: "#ffffff", letterSpacing: "0.02em" }}
                  >
                    Apply Now <span style={{ fontSize: "16px" }}>→</span>
                  </Link>
                </div>

              </div>

              {/* ═══ RIGHT PHOTO PANEL ═══ */}
              <div
                className="relative shrink-0 hidden sm:block"
                style={{ width: "340px" }}
              >
                {/* Building photo */}
                <img
                  src="/img/main-banner.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  style={{ opacity: 0.55 }}
                />

                {/* Deep gradient blending left edge into card bg */}
                <div
                  className="absolute inset-y-0 left-0 w-24 z-10"
                  style={{ background: "linear-gradient(to right, #07112b, transparent)" }}
                />

                {/* Subtle dark vignette over photo */}
                <div
                  className="absolute inset-0 z-10"
                  style={{ background: "linear-gradient(135deg, rgba(7,17,43,0.3) 0%, rgba(10,22,55,0.55) 100%)" }}
                />



                {/* 3 highlight icons — centred on photo */}
                <div className="absolute inset-x-0 bottom-0 z-20 flex justify-center gap-5 pb-8 px-4">
                  {highlights.map(({ icon: Icon, label }, i) => (
                    <div key={i} className="flex flex-col items-center gap-2" style={{ minWidth: "60px" }}>
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center border"
                        style={{
                          borderColor: "rgba(255,255,255,0.15)",
                          background: "rgba(255,255,255,0.08)",
                          backdropFilter: "blur(8px)",
                          color: "rgba(255,255,255,0.85)",
                        }}
                      >
                        <Icon size={18} strokeWidth={1.6} />
                      </div>
                      <span
                        className="font-heading font-semibold text-center whitespace-pre-line leading-tight"
                        style={{ fontSize: "9px", color: "rgba(255,255,255,0.6)", textAlign: "center" }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* UG | PG line — very bottom */}
                <div
                  className="absolute bottom-2 right-0 left-0 text-center z-20"
                  style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em" }}
                >
                  UG &nbsp;|&nbsp; PG &nbsp;|&nbsp; TNEA 3849
                </div>

              </div>

            </div>

            {/* ── Global close button ── */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              <X size={16} />
            </button>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
