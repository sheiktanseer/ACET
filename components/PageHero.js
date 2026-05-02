"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

export default function PageHero({ title, subtitle, bgImage = "/img/main-banner.png" }) {
  const pathname = usePathname();

  // Build breadcrumb from pathname
  const crumbs = pathname.split("/").filter(Boolean).map((seg, i, arr) => ({
    label: seg.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
    href: "/" + arr.slice(0, i + 1).join("/"),
  }));

  return (
    <section
      className="relative w-full flex items-center overflow-hidden pt-20"
      style={{ minHeight: "320px" }}
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(135deg, rgba(11,28,55,0.92) 0%, rgba(17,42,82,0.78) 50%, rgba(17,42,82,0.55) 100%)" }}
      />

      <div className="container-custom relative z-10 py-16 text-center">
        <div className="max-w-[700px] mx-auto mb-10">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-1.5 text-white/60 text-[11px] mb-5"
          >
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home size={11} /> Home
            </Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={10} className="opacity-50" />
                <span className={i === crumbs.length - 1 ? "text-white font-medium" : "hover:text-white transition-colors"}>
                  {c.label}
                </span>
              </span>
            ))}
          </motion.nav>

          {subtitle && (
            <motion.span
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="inline-block text-white/60 font-heading font-bold tracking-[0.14em] text-[10px] uppercase mb-4"
            >
              {subtitle}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-white font-heading font-bold leading-[1.08] whitespace-pre-line"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)", letterSpacing: "-0.025em" }}
          >
            {title}
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
