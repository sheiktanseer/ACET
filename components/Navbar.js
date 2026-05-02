"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Admissions", path: "/admissions" },
  { name: "Placements", path: "/placements" },
  { name: "Campus Life", path: "/campus-life" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-[var(--shadow-nav)] py-2" : "bg-white py-3"
          }`}
      >
        <div className="w-full px-4">
          {/* Three-column layout: Logo | Nav | CTA */}
          <div className="flex items-center">

            {/* LEFT — Logo (bigger) */}
            <Link href="/" className="flex items-center gap-3 shrink-0 mr-8">
              <img
                src="/img/logo.png"
                alt="ANNAI College of Engineering & Technology"
                className="h-20 w-auto object-contain"
              />
            </Link>

            {/* CENTER — Navigation links (absolutely centered) */}
            <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="relative text-[14px] font-semibold font-heading transition-colors group text-[var(--color-primary)] whitespace-nowrap"
                  >
                    <span className="group-hover:opacity-70 transition-opacity">{link.name}</span>
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] bg-[var(--color-primary)] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT — Apply Now CTA + Mobile toggle */}
            <div className="flex items-center gap-3 ml-8 shrink-0">
              <Link
                href="/contact"
                className="hidden lg:inline-flex btn-primary group items-center gap-2"
              >
                Apply Now
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <button
                className="lg:hidden text-[var(--color-primary)] p-1.5"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={26} />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] lg:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[70] p-6 shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <img src="/img/logo.png" alt="ANNAI College Logo" className="h-14 w-auto object-contain" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[var(--color-text-mid)] hover:text-[var(--color-primary)] bg-[var(--color-bg-alt)] rounded-full p-2"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex flex-col gap-2 flex-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-[15px] font-heading font-semibold px-4 py-3 rounded-lg transition-colors ${isActive
                        ? "bg-[var(--color-bg-alt)] text-[var(--color-primary)]"
                        : "text-[var(--color-text-dark)] hover:bg-gray-50"
                        }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 w-full btn-primary justify-center"
              >
                Apply Now <ArrowRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}