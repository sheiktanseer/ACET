"use client";

import PageHero from "../../components/PageHero";
import StatsBar from "../../components/StatsBar";
import { motion } from "framer-motion";
import {
  Users, Calendar, Trophy, HeartPulse, Star, Network,
  MonitorPlay, Leaf, BookOpen, BedDouble, Coffee, Bus, ArrowRight
} from "lucide-react";
import Link from "next/link";

const campusStats = [
  { icon: Users, stat: "50+", label: "Clubs & Activities" },
  { icon: Calendar, stat: "30+", label: "Annual Events" },
  { icon: Trophy, stat: "10+", label: "Sports Facilities" },
  { icon: HeartPulse, stat: "24x7", label: "Health & Support" },
  { icon: Star, stat: "100%", label: "Holistic Development" },
  { icon: Network, stat: "Vibrant", label: "Campus Community" },
];

const lifeCards = [
  { icon: Users, title: "Clubs & Communities", desc: "Join diverse clubs that nurture creativity, leadership and self-expression." },
  { icon: Calendar, title: "Events & Festivals", desc: "Celebrate cultural fests, management events and competitions all year round." },
  { icon: Trophy, title: "Sports & Fitness", desc: "Stay active with indoor and outdoor sports facilities and coaching." },
  { icon: MonitorPlay, title: "Innovation & Startups", desc: "Turn ideas into reality with incubation support and innovation labs." },
  { icon: Leaf, title: "Social Responsibility", desc: "Contribute to society through NSS, eco clubs and sustainability initiatives." },
  { icon: BookOpen, title: "Learning Resources", desc: "Access modern libraries, digital resources and industry-relevant training." },
];

const facilities = [
  { icon: BedDouble, title: "Hostel & Accommodation", desc: "Comfortable and secure hostels with modern amenities." },
  { icon: BookOpen, title: "Library", desc: "Extensive collection of books, journals and digital library access." },
  { icon: MonitorPlay, title: "Advanced Labs", desc: "Well-equipped labs with the latest technology." },
  { icon: Trophy, title: "Sports & Recreation", desc: "Inclusive indoor and outdoor facilities for a healthy lifestyle." },
  { icon: Coffee, title: "Cafeteria", desc: "Hygienic and nutritious food options in a comfortable environment." },
  { icon: Bus, title: "Transport", desc: "Safe and reliable transport facility across major locations." },
];

const galleryImgs = [
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565034946487-077786996e27?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=400&auto=format&fit=crop",
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } };

export default function CampusLifePage() {
  return (
    <>
      <PageHero subtitle="CAMPUS LIFE" title={"Learn. Grow.\nConnect. Thrive."} />
      <StatsBar stats={campusStats} />

      {/* ── Life at Annai cards ── white */}
      <section className="section-white">
        <div className="container-custom py-24">
          <div className="text-center mb-14">
            <span className="eyebrow">Student Experience</span>
            <h2 className="mb-3">Life at Annai</h2>
            <p className="text-[14px] text-[var(--color-text-mid)] max-w-[520px] mx-auto">
              Life at Annai is about more than academics — it's about building lifelong friendships, exploring passions, and growing into the best version of yourself.
            </p>
          </div>

          <motion.div
            variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {lifeCards.map((c, i) => (
              <motion.div key={i} variants={item} className="card p-7 group hover:border-[var(--color-primary)] transition-colors">
                <div className="icon-box mb-5 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                  <c.icon size={22} strokeWidth={1.8} />
                </div>
                <h4 className="font-heading font-bold text-[14px] text-[var(--color-primary)] mb-2">{c.title}</h4>
                <p className="text-[12px] text-[var(--color-text-mid)] leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Gallery ── alt bg */}
      <section className="section-alt">
        <div className="container-custom py-24">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
            <div>
              <span className="eyebrow">Gallery</span>
              <h2>Moments That Matter</h2>
            </div>
          </div>

          <motion.div
            variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            style={{ gridAutoRows: "200px" }}
          >
            {/* Large first image — 2 cols × 2 rows */}
            <motion.div variants={item} className="col-span-2 row-span-2 rounded-[var(--card-radius)] overflow-hidden group">
              <img src={galleryImgs[0]} alt="Gallery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>

            {/* Small images — top-right 2 cells */}
            {galleryImgs.slice(1, 3).map((src, i) => (
              <motion.div key={i} variants={item} className="rounded-[var(--card-radius-sm)] overflow-hidden group">
                <img src={src} alt={`Gallery ${i + 2}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}

            {/* Bottom-right: 3rd small image */}
            <motion.div variants={item} className="rounded-[var(--card-radius-sm)] overflow-hidden group">
              <img src={galleryImgs[3]} alt="Gallery 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>

            {/* Bottom-right: quote card fills empty slot */}
            <motion.div
              variants={item}
              className="rounded-[var(--card-radius-sm)] flex flex-col justify-between p-6 overflow-hidden relative"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              {/* Decorative large quote mark */}
              <span className="absolute -top-3 -left-1 text-white/10 font-heading font-bold select-none"
                style={{ fontSize: "120px", lineHeight: 1 }}>
                &ldquo;
              </span>
              <p className="relative z-10 text-white/90 font-heading font-semibold text-[13px] leading-snug italic">
                Education is not the filling of a pail, but the lighting of a fire.
              </p>
              <span className="text-white/50 text-[10px] font-heading tracking-widest uppercase mt-3 block">
                — William Butler Yeats
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Facilities ── white */}
      <section className="section-white">
        <div className="container-custom py-24">
          <div className="mb-14">
            <span className="eyebrow">Infrastructure</span>
            <h2>Campus Facilities</h2>
          </div>
          <motion.div
            variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {facilities.map((f, i) => (
              <motion.div key={i} variants={item} className="flex items-start gap-5">
                <div className="icon-box shrink-0"><f.icon size={22} strokeWidth={1.8} /></div>
                <div>
                  <h4 className="font-heading font-bold text-[14px] text-[var(--color-primary)] mb-1.5">{f.title}</h4>
                  <p className="text-[12px] text-[var(--color-text-mid)] leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ── dark */}
      <section className="section-dark">
        <div className="container-custom py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-white text-2xl md:text-3xl font-heading font-bold mb-2">Your Journey is More Than Just a Degree</h2>
              <p className="text-white/70 text-[14px]">Join a vibrant community where you grow, explore and achieve together.</p>
            </div>
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] font-heading font-semibold text-sm px-7 py-3 rounded-[var(--btn-radius)] hover:bg-gray-100 transition-colors shrink-0"
            >
              Apply Now <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}