"use client";

import Link from "next/link";
import { Instagram, Linkedin, Phone, MapPin, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Placements", href: "/placements" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "Contact Us", href: "/contact" },
];

const programs = [
  { label: "Computer Science & Engineering", href: "/academics" },
  { label: "Mechanical Engineering", href: "/academics" },
  { label: "Electrical & Electronics Engg.", href: "/academics" },
  { label: "Civil Engineering", href: "/academics" },
  { label: "Electronics & Communication Engg.", href: "/academics" },
];

const socials = [
  { Icon: Instagram, href: "https://www.instagram.com/annai_college_of_engg_and_tech/" },
  { Icon: Linkedin, href: "https://www.linkedin.com/school/annai-college-of-engineering-and-technology/about/" },
];

export default function Footer() {

  const yr = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[var(--color-border)]">

      {/* Main footer grid — 4 columns */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Brand */}
          <div>
            <img src="/img/logo.png" alt="ANNAI College Logo" className="h-16 w-auto object-contain origin-left mb-4" />
            <p className="text-[12.5px] text-[var(--color-text-mid)] leading-relaxed mb-5">
              Committed to academic excellence, innovation and holistic development, preparing students to be future-ready professionals.
            </p>
            <div className="flex gap-2">
              {socials.map(({ Icon, href }, i) => (
                <a key={i} href={href}
                  className="w-8 h-8 rounded-full bg-[var(--color-bg-alt)] hover:bg-[var(--color-primary)] hover:text-white text-[var(--color-primary)] flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links (2-column grid) */}
          <div>
            <h4 className="font-heading font-bold text-[14px] text-[var(--color-primary)] mb-5">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {quickLinks.map(({ label, href }, i) => (
                <Link key={i} href={href}
                  className="text-[12.5px] text-[var(--color-text-mid)] hover:text-[var(--color-primary)] transition-colors leading-snug"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 — Programs (all 5) */}
          <div>
            <h4 className="font-heading font-bold text-[14px] text-[var(--color-primary)] mb-5">Programs</h4>
            <ul className="flex flex-col gap-2.5">
              {programs.map(({ label, href }, i) => (
                <li key={i}>
                  <Link href={href}
                    className="text-[12.5px] text-[var(--color-text-mid)] hover:text-[var(--color-primary)] transition-colors leading-snug"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="font-heading font-bold text-[14px] text-[var(--color-primary)] mb-5">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[var(--color-text-mid)] shrink-0 mt-0.5" />
                <span className="text-[12.5px] text-[var(--color-text-mid)] leading-relaxed">
                  Annai College of Engineering & Technology, Kovilachery, Kumbakonam, Tamil Nadu – 612 503, India.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[var(--color-text-mid)] shrink-0" />
                <a href="tel:+918057052849" className="text-[12.5px] text-[var(--color-text-mid)] hover:text-[var(--color-primary)] transition-colors">
                  +91 80570 52849
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[var(--color-text-mid)] shrink-0" />
                <a href="mailto:info@annaicoe.org" className="text-[12.5px] text-[var(--color-text-mid)] hover:text-[var(--color-primary)] transition-colors">
                  info@annaicoe.org
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-border)] py-4 bg-[var(--color-bg-page)]">
        <div className="container-footer flex flex-col md:flex-row items-center justify-between gap-3 text-[11.5px] text-[var(--color-text-mid)] font-medium">
          <p>© {yr} Annai College of Engineering &amp; Technology. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-[var(--color-primary)] transition-colors">Designed &amp; Developed by <strong>Mechanical Department Alumnus</strong></span>
          </div>
        </div>
      </div>

      {/* ── Watermark: hidden from UI, present in DOM and source ── */}
      <span
        aria-hidden="false"
        data-creator="Sheik Tanseer"
        data-project="Annai College of Engineering & Technology Website"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          border: 0,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        Created by Sheik Tanseer | Annai College of Engineering &amp; Technology
      </span>

    </footer>
  );
}