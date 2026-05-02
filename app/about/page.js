"use client";

import PageHero from "../../components/PageHero";
import StatsBar from "../../components/StatsBar";
import { motion } from "framer-motion";
import {
  GraduationCap, Users, UsersRound, Star, Target, Flag,
  ShieldCheck, HeartHandshake, Lightbulb, UserCheck, ArrowRight
} from "lucide-react";
import Link from "next/link";

const aboutStats = [
  { icon: GraduationCap, stat: "15+", label: "Years of Excellence" },
  { icon: Users, stat: "2500+", label: "Students" },
  { icon: UsersRound, stat: "100+", label: "Experienced Faculty" },
  { icon: Star, stat: "30+", label: "Programs Offered" },
  { icon: UserCheck, stat: "92%", label: "Placement Rate" },
  { icon: Star, stat: "6.5 LPA", label: "Highest Package" },
];

const values = [
  { title: "Excellence", icon: Star, desc: "Striving for the highest academic and professional standards." },
  { title: "Integrity", icon: ShieldCheck, desc: "Building trust through honesty and ethical conduct." },
  { title: "Innovation", icon: Lightbulb, desc: "Encouraging creative thinking and cutting-edge solutions." },
  { title: "Teamwork", icon: HeartHandshake, desc: "Collaborating to achieve shared goals and collective success." },
  { title: "Respect", icon: UserCheck, desc: "Valuing every individual and fostering an inclusive environment." },
];

const campusFeatures = [
  "Green and eco-friendly campus environment",
  "Advanced laboratories with latest technology",
  "Wi-Fi enabled modern smart classrooms",
  "Well-stocked central library with digital resources",
  "Hostel, sports and wellness facilities",
  "Student clubs, events, and leadership programs",
];

const stagger = (i = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] } },
});
const container = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };

export default function AboutPage() {
  return (
    <>
      <PageHero subtitle="ABOUT ANNAI" title={"Excellence. Innovation.\nIntegrity."} />
      <StatsBar stats={aboutStats} />

      {/* ── Intro + Vision/Mission ── white bg */}
      <section className="section-white">
        <div className="container-custom py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div>
              <span className="eyebrow">Who We Are</span>
              <h2 className="mb-5">About Annai College of<br />Engineering & Technology</h2>
              <p className="text-[14px] text-[var(--color-text-mid)] leading-relaxed mb-5">
                We are committed to shaping the next generation of engineers with a perfect blend of quality education, strong values, and practical industry exposure.
              </p>
              <p className="text-[14px] text-[var(--color-text-mid)] leading-relaxed mb-8">
                Founded with a vision to produce globally competent professionals, Annai College has grown into a premier institution with state-of-the-art facilities, dedicated faculty, and an impressive placement record.
              </p>
              <Link href="/contact" className="btn-primary">Get in Touch <ArrowRight size={14} /></Link>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { Icon: Target, title: "Our Vision", text: "To be a center of excellence in technical education and research, producing globally competent and socially responsible engineers." },
                { Icon: Flag, title: "Our Mission", text: "To provide quality education, foster innovation, research and entrepreneurship, and build industry-institute collaboration for societal benefits." },
              ].map(({ Icon, title, text }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="card p-6 flex gap-4 items-start"
                >
                  <div className="icon-box shrink-0"><Icon size={22} /></div>
                  <div>
                    <h4 className="font-heading font-bold text-[var(--color-primary)] mb-2">{title}</h4>
                    <p className="text-[13px] text-[var(--color-text-mid)] leading-relaxed">{text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Mission bullets */}
              <div className="card-flat p-6">
                <h4 className="font-heading font-bold text-[var(--color-primary)] mb-3 text-sm">Mission Pillars</h4>
                <ul className="space-y-2">
                  {[
                    "Provide quality education and promote continuous learning",
                    "Foster innovation, research and entrepreneurship",
                    "Build industry-institute collaboration for societal benefits",
                    "Instill ethical values and leadership qualities",
                  ].map((m, i) => (
                    <li key={i} className="flex items-start gap-2 text-[12px] text-[var(--color-text-mid)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0 mt-1.5" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Core Values ── alt bg */}
      <section className="section-alt">
        <div className="container-custom py-24">
          <div className="text-center mb-14">
            <span className="eyebrow">What We Stand For</span>
            <h2 className="mb-3">Our Core Values</h2>
            <p className="text-[14px] text-[var(--color-text-mid)] max-w-[500px] mx-auto">These five pillars guide everything we do at Annai College.</p>
          </div>
          <motion.div
            variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {values.map((val, idx) => (
              <motion.div key={idx} variants={stagger(idx)} className="card p-6 text-center group hover:border-[var(--color-primary)] transition-colors">
                <div className="icon-box mx-auto mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                  <val.icon size={22} strokeWidth={1.8} />
                </div>
                <h4 className="font-heading font-bold text-[13px] text-[var(--color-primary)] mb-2">{val.title}</h4>
                <p className="text-[11px] text-[var(--color-text-mid)] leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Our Campus ── white bg */}
      <section className="section-white">
        <div className="container-custom py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <span className="eyebrow">Our Campus</span>
              <h2 className="mb-5">A Campus Designed<br />to Inspire</h2>
              <p className="text-[14px] text-[var(--color-text-mid)] leading-relaxed mb-8">
                Spread across a lush green campus, Annai provides a vibrant and inspiring environment with modern facilities, advanced laboratories, and spaces for innovation and recreation.
              </p>
              <ul className="space-y-3 mb-8">
                {campusFeatures.map((feat, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="flex items-center gap-2.5 text-[13px] text-[var(--color-text-dark)] font-medium"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                    {feat}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="aspect-[16/9] rounded-[var(--card-radius)] overflow-hidden shadow-[var(--shadow-hover)]">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop"
                  alt="Annai Campus"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}