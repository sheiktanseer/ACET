"use client";

import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, subtitle, centered = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center mx-auto" : ""}`}
      style={{ maxWidth: centered ? "800px" : "100%" }}
    >
      {eyebrow && (
        <span className="inline-block text-[var(--color-accent)] font-semibold tracking-widest text-sm uppercase mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[var(--text-h2)] font-bold text-[var(--color-primary)] font-heading leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--color-text-mid)] text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
