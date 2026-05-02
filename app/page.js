"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap, Users, UsersRound, Briefcase, MapPin, Trophy,
  ArrowRight, CheckCircle2, Medal, Target, Flag, Building,
  Cpu, Zap, Settings, Radio, Brain
} from "lucide-react";
import StatsBar from "../components/StatsBar";

const homeStats = [
  { icon: GraduationCap, stat: "15+", label: "Years of Excellence" },
  { icon: Users, stat: "2500+", label: "Students" },
  { icon: UsersRound, stat: "100+", label: "Experienced Faculty" },
  { icon: Briefcase, stat: "92%", label: "Placement Rate" },
  { icon: MapPin, stat: "100+", label: "Recruiters" },
  { icon: Trophy, stat: "6.5 LPA", label: "Highest Package" },
];

// Home page shows: 3 BE + 2 B.Tech flagship programmes
const programs = [
  { title: "Computer Science & Engineering", badge: "BE · Popular", icon: Cpu, img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=700&auto=format&fit=crop", desc: "Code, innovate and build intelligent systems for the digital era." },
  { title: "Civil Engineering", badge: "BE", icon: Building, img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=700&auto=format&fit=crop", desc: "Build tomorrow's infrastructure through structural and sustainable design." },
  { title: "Mechanical Engineering", badge: "BE", icon: Settings, img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=700&auto=format&fit=crop", desc: "Design, manufacture and maintain mechanical systems of the future." },
  { title: "Information Technology", badge: "B.Tech", icon: Cpu, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=700&auto=format&fit=crop", desc: "Leverage technology to solve real-world problems and drive digital transformation." },
  { title: "AI & Data Science", badge: "B.Tech · NEW", icon: Brain, img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=700&auto=format&fit=crop", desc: "Harness artificial intelligence and data to shape the future of technology." },
];

const aboutPoints = [
  "Industry-oriented curriculum",
  "Experienced and dedicated faculty",
  "Modern labs and infrastructure",
  "Strong placement support",
  "Holistic development & value-based education",
];

const vmv = [
  { Icon: Target, title: "Our Vision", text: "To be a center of excellence in technical education and research, producing globally competent and socially responsible engineers." },
  { Icon: Flag, title: "Our Mission", text: "To provide quality education, foster innovation, and build industry-institute collaboration for societal benefits." },
  { Icon: Medal, title: "Our Values", text: "Excellence • Integrity • Innovation • Teamwork • Respect" },
];

const whyUs = [
  { icon: GraduationCap, title: "World-Class Education", desc: "Learn from experienced faculty with industry expertise." },
  { icon: Building, title: "Modern Infrastructure", desc: "State-of-the-art labs, smart classrooms, and digital learning." },
  { icon: Briefcase, title: "Placement Support", desc: "Dedicated training, internships and strong recruiter connections." },
  { icon: Medal, title: "Holistic Development", desc: "Grow through clubs, events, sports and leadership opportunities." },
];

const placements = [
  { icon: Trophy, stat: "92%", label: "Placement Rate" },
  { icon: Trophy, stat: "6.5 LPA", label: "Highest Package" },
  { icon: Users, stat: "2500+", label: "Students Placed" },
  { icon: Briefcase, stat: "100+", label: "Recruiters" },
];

const recruiters = [
  { name: "Tata Consultancy", logo: "https://logo.clearbit.com/tcs.com" },
  { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
  { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
  { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
  { name: "Cognizant", logo: "https://logo.clearbit.com/cognizant.com" },
  { name: "HCL Tech", logo: "https://logo.clearbit.com/hcltech.com" },
  { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
  { name: "Tech Mahindra", logo: "https://logo.clearbit.com/techmahindra.com" },
];

const sc = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const si = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } };

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════ */}
      <section className="relative w-full min-h-[660px] lg:h-[740px] flex items-center bg-[#e8eff8] overflow-hidden pt-20">

        {/* Background photo – right side */}
        <div
          className="absolute right-0 top-0 w-full lg:w-[62%] h-full z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/main-banner.png')",
            maskImage: "linear-gradient(to right, transparent 0%, black 35%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 35%)",
          }}
        />

        {/* FIX #2 — Subtle pattern on LEFT side (behind the text) */}
        <div
          className="absolute left-0 top-0 w-[55%] h-full z-[1] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 70% at 10% 50%, rgba(17,42,82,0.06) 0%, transparent 70%), " +
              "repeating-linear-gradient(135deg, transparent, transparent 28px, rgba(17,42,82,0.025) 28px, rgba(17,42,82,0.025) 29px)",
          }}
        />

        <div className="container-custom-left relative z-10">
          <div className="max-w-full">
            <motion.span
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              Shaping Future Engineers
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-heading font-bold leading-[1.05] mb-5 text-[var(--color-primary)]"
            >
              Building a Better<br />Tomorrow
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[15px] text-[var(--color-text-mid)] mb-8 leading-relaxed max-w-[440px]"
            >
              Empowering young minds with quality education, innovation, and holistic development to create global leaders of tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Link href="/contact" className="btn-primary group">
                Apply Now <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link href="/campus-life" className="btn-secondary">
                Explore Campus <Building size={15} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FIX #3 — STATS BAR as floating badges
      ═══════════════════════════════════════════ */}
      <StatsBar stats={homeStats} />

      {/* ═══════════════════════════════════════════
          ADMISSION INFO TICKER — scrolling marquee
      ═══════════════════════════════════════════ */}
      <div className="overflow-hidden bg-[var(--color-primary)] py-3 select-none">
        {/* marquee-track duplicated so the loop is seamless */}
        <div className="marquee-track">
          {[...Array(2)].map((_, pass) => (
            <div key={pass} className="flex items-center gap-0 shrink-0">
              {[
                { label: "TNEA Counselling Code", value: "3849" },
                { label: "Affiliated To", value: "Anna University" },
                { label: "Approved By", value: "AICTE" },
                { label: "Apply Now", value: "UG/PG ADMISSIONS 2026-27" },
                { label: "Placement Track Record", value: "100%" },
                { label: "Transport Facility", value: "Across 7 Districts" },
              ].map(({ label, value }, i) => (
                <div key={i} className="flex items-center gap-0 shrink-0">
                  <div className="flex items-center gap-2.5 px-7">
                    <span className="text-white/50 text-[14px]  tracking-widest font-heading font-semibold whitespace-nowrap">{label}</span>
                    <span className="w-1 h-1 rounded-full bg-white/30 shrink-0" />
                    <span className="text-white text-[14px] font-heading font-bold whitespace-nowrap">{value}</span>
                  </div>
                  <span className="text-white/20 text-[18px] select-none shrink-0">◆</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          PROGRAMS — ROW 1 (all 5 programs)
          ABOUT + VISION — ROW 2
      ═══════════════════════════════════════════ */}
      <section className="section-white">
        <div className="container-custom py-24">

          {/* Section heading row */}
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <span className="eyebrow">Our Programs</span>
              <h2 className="mb-0">Choose Your Path to Success</h2>
            </div>
            <Link href="/academics" className="btn-light shrink-0">View All Programs</Link>
          </div>

          {/* ── ROW 1: All 5 programs in one row ── */}
          <motion.div
            variants={sc} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-14"
          >
            {programs.map((prog, idx) => (
              <motion.div key={idx} variants={si} className="flex flex-col group card p-0">
                <div className="relative h-[106px] w-full overflow-hidden shrink-0">
                  <img src={prog.img} alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {prog.badge && (
                    <span className="absolute top-2 left-2 bg-[var(--color-primary)] text-white text-[9px] font-heading font-bold px-1.5 py-0.5 rounded-sm leading-none tracking-wide">
                      {prog.badge}
                    </span>
                  )}
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <div className="flex items-start gap-1.5 mb-1">
                    <prog.icon size={13} className="text-[var(--color-primary)] shrink-0 mt-0.5" strokeWidth={1.8} />
                    <h3 className="text-[11px] font-bold font-heading leading-snug text-[var(--color-primary)]">{prog.title}</h3>
                  </div>
                  <p className="text-[10px] text-[var(--color-text-mid)] mb-2 flex-grow leading-relaxed">{prog.desc}</p>
                  <Link href="/academics" className="link-arrow text-[10px]">
                    View Details <ArrowRight size={10} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── ROW 2: About (left) + Vision card (right) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

            {/* About — 7 cols */}
            <div className="lg:col-span-7 flex flex-col">
              <span className="eyebrow">About Annai</span>
              <h2 className="mb-4 text-[1.7rem] leading-tight">
                Excellence. Innovation. Integrity.
              </h2>
              <p className="text-[13px] text-[var(--color-text-mid)] mb-6 leading-relaxed">
                Annai College is committed to nurturing young minds through quality education, state-of-the-art infrastructure, and a vibrant learning environment that fosters creativity, leadership, and excellence.
              </p>

              {/* 2-column checklist */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 mb-auto">
                {aboutPoints.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: idx * 0.07, duration: 0.38 }}
                    className="flex items-center gap-2 text-[12.5px] text-[var(--color-text-dark)] font-medium"
                  >
                    <CheckCircle2 size={13} className="text-[var(--color-primary)] shrink-0" strokeWidth={2.5} />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-7">
                <Link href="/about" className="btn-primary text-[13px]">
                  Know More About Us <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Vision / Mission / Values — 5 cols, stretches to full height */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="card p-6 flex flex-col gap-0 flex-1">
                {vmv.map(({ Icon, title, text }, i) => (
                  <div key={i} className={`flex flex-col flex-1 ${i > 0 ? 'border-t border-[var(--color-border)] pt-5 mt-5' : ''}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="icon-box icon-box-sm"><Icon size={14} /></div>
                      <h4 className="font-heading font-bold text-[13px] text-[var(--color-primary)]">{title}</h4>
                    </div>
                    <p className="text-[12px] text-[var(--color-text-mid)] leading-relaxed flex-1">{text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FIX #5 — WHY ANNAI: full-bleed section, image on RIGHT
          with diagonal merge/clip effect blending into the dark bg
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[var(--color-primary)]">
        {/* Right-side image with diagonal mask merging into the blue background */}
        <div
          className="absolute right-0 top-0 h-full w-full lg:w-[50%] z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 20%, black 50%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 20%, black 50%)",
            opacity: 0.35,
          }}
        />
        {/* Diagonal color separator — left solid blue fades into photo */}
        <div
          className="absolute left-0 top-0 h-full w-[55%] z-[1] pointer-events-none"
          style={{
            background: "linear-gradient(to right, var(--color-primary) 60%, transparent 100%)",
          }}
        />

        <div className="container-custom py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left — text content */}
            <div>
              <span className="eyebrow" style={{ color: "rgba(255,255,255,0.55)" }}>Why Choose Us</span>
              <h2 className="text-white mb-4">Start Your Journey with Annai</h2>
              <p className="text-white/65 text-[14px] mb-10 leading-relaxed">
                Join a community of learners, innovators, and achievers at one of Tamil Nadu's top engineering colleges.
              </p>

              <motion.div
                variants={sc} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
              >
                {whyUs.map(({ icon: Icon, title, desc }, idx) => (
                  <motion.div key={idx} variants={si} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg border border-white/20 bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors duration-200">
                      <Icon size={18} className="text-white" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="text-white font-heading font-bold text-[13px] mb-1">{title}</h4>
                      <p className="text-white/55 text-[11.5px] leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] font-heading font-semibold text-sm px-6 py-3 rounded-[var(--btn-radius)] hover:bg-gray-50 transition-colors"
              >
                Apply Now <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right — floating stats badge (visible on top of the photo) */}
            <div className="hidden lg:flex flex-col items-end gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full max-w-[280px]">
                <div className="text-white/60 text-[10px] uppercase tracking-widest font-heading font-bold mb-4">Placement Highlights</div>
                <div className="space-y-4">
                  {[
                    { label: "Placement Rate", val: "92%" },
                    { label: "Highest Package", val: "6.5 LPA" },
                    { label: "Students Placed", val: "2500+" },
                    { label: "Top Recruiters", val: "100+" },
                  ].map(({ label, val }, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-white/65 text-[12px]">{label}</span>
                      <span className="text-white font-heading font-bold text-[15px]">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FIX #6 — PLACEMENTS & RECRUITERS: all in ONE ROW
          [Info 3col] | [Mini Stats 2col] | [Recruiters 7col]
      ═══════════════════════════════════════════ */}
      <section className="section-light">
        <div className="container-custom py-24">
          <div className="card p-8 lg:p-10">
            {/* items-stretch so all 3 panels are the same height */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Info — 3 cols */}
              <div className="lg:col-span-3 lg:border-r border-[var(--color-border)] lg:pr-8 flex flex-col">
                <span className="eyebrow">Placements</span>
                <h2 className="mb-3 text-[1.55rem] leading-tight">Empowering Careers.<br />Building Futures.</h2>
                <p className="text-[12.5px] text-[var(--color-text-mid)] mb-6 leading-relaxed flex-1">
                  Our dedicated placement cell ensures every student gets the right platform to launch their career with top recruiters.
                </p>
                <div>
                  <Link href="/placements" className="btn-primary text-[13px]">
                    View Details <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* Mini stats — 2 cols */}
              <div className="lg:col-span-2 lg:border-r border-[var(--color-border)] lg:pr-8 flex flex-col justify-center">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-5">
                  {placements.map((s, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="icon-box icon-box-sm shrink-0"><s.icon size={16} strokeWidth={1.5} /></div>
                      <div>
                        <div className="font-heading font-bold text-[18px] text-[var(--color-primary)] leading-none">{s.stat}</div>
                        <div className="text-[9.5px] text-[var(--color-text-mid)] mt-0.5">{s.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Recruiters — 7 cols */}
              <div className="lg:col-span-7 flex flex-col">
                <h3 className="text-[13px] font-heading font-bold text-[var(--color-primary)] mb-4">Top Recruiters</h3>
                <motion.div
                  variants={sc} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 flex-1 content-start"
                >
                  {recruiters.map((company, idx) => (
                    <motion.div
                      key={idx} variants={si}
                      whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(17,42,82,0.12)" }}
                      className="bg-white h-14 rounded-lg border border-[var(--color-border)] flex flex-col items-center justify-center gap-1 cursor-pointer transition-colors hover:border-[var(--color-primary)] p-2"
                    >
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="h-6 w-auto object-contain"
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                      />
                      <span className="font-heading font-bold text-[10px] text-[var(--color-primary)] hidden">{company.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
                <Link href="/placements" className="link-arrow text-[12px]">
                  View All Recruiters <ArrowRight size={13} />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. CAMPUS LIFE
      ═══════════════════════════════════════════ */}
      <section className="section-alt">
        <div className="container-custom py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-4">
              <span className="eyebrow">Campus Life</span>
              <h2 className="mb-4">Learn. Grow.<br />Connect. Thrive.</h2>
              <p className="text-[13px] text-[var(--color-text-mid)] mb-8 leading-relaxed">
                Life at Annai is about more than academics — it's about building lifelong friendships, exploring passions, and growing into the best version of yourself.
              </p>
              <Link href="/campus-life" className="btn-primary">
                Explore Campus Life <ArrowRight size={14} />
              </Link>
            </div>

            <div className="lg:col-span-8">
              <motion.div
                variants={sc} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {[
                  "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=500&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=500&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=500&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=500&auto=format&fit=crop",
                ].map((src, idx) => (
                  <motion.div key={idx} variants={si}
                    className="aspect-square rounded-[var(--card-radius-sm)] overflow-hidden group"
                  >
                    <img src={src} alt={`Campus ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}