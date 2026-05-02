"use client";

import PageHero from "../../components/PageHero";
import StatsBar from "../../components/StatsBar";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap, Users, BookOpen, Star, UserCheck,
  ArrowRight, FileText, FileSearch, HelpCircle,
  CreditCard, CheckCircle2, CheckSquare, Download, Award
} from "lucide-react";


const admissionStats = [
  { icon: GraduationCap, stat: "15+",    label: "Years of Excellence" },
  { icon: Users,         stat: "2500+",  label: "Students" },
  { icon: UserCheck,     stat: "100+",   label: "Experienced Faculty" },
  { icon: BookOpen,      stat: "30+",    label: "Programs Offered" },
  { icon: Star,          stat: "92%",    label: "Placement Rate" },
  { icon: Award,         stat: "6.5 LPA",label: "Highest Package" },
];

const steps = [
  { icon: FileText,      title: "Apply Online",         desc: "Fill the application form on our portal." },
  { icon: FileSearch,    title: "Submit Documents",      desc: "Upload required certificates and transcripts." },
  { icon: HelpCircle,    title: "Application Review",    desc: "Our admissions team reviews your application." },
  { icon: UserCheck,     title: "Counseling Session",    desc: "Shortlisted candidates called for counseling." },
  { icon: CreditCard,    title: "Fee Payment",           desc: "Confirm your seat by completing fee payment." },
  { icon: CheckCircle2,  title: "Admission Confirmed",   desc: "Welcome to Annai College of Engineering!" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } };

export default function AdmissionsPage() {
  return (
    <>
      <PageHero subtitle="ADMISSIONS 2026" title={"Admissions Open 2026\nBuild Your Future with Annai"} />
      <StatsBar stats={admissionStats} />

      {/* ── CTA buttons ── light */}
      <section className="section-light">
        <div className="container-custom py-24">

          <div className="flex flex-wrap gap-4 mb-20 justify-center">
            <Link href="/contact" className="btn-primary">Apply Now <ArrowRight size={15} /></Link>
            <button className="btn-secondary">Download Prospectus <Download size={15} /></button>
          </div>

          {/* Steps */}
          <div className="mb-20">
            <div className="text-center mb-14">
              <span className="eyebrow">Admission Process</span>
              <h2>Simple Steps to Join Annai</h2>
            </div>

            <div className="relative">
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-8 left-[calc(8.33%+8px)] right-[calc(8.33%+8px)] h-[2px] bg-[var(--color-border)] z-0" />

              <motion.div
                variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="grid grid-cols-2 lg:grid-cols-6 gap-6 relative z-10"
              >
                {steps.map((step, idx) => (
                  <motion.div key={idx} variants={item} className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 rounded-full bg-white border-2 border-[var(--color-border)] shadow-[var(--shadow-card)] flex items-center justify-center text-[var(--color-primary)]">
                        <step.icon size={24} strokeWidth={1.5} />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-[10px] flex items-center justify-center font-heading font-bold border-2 border-white">
                        {idx + 1}
                      </div>
                    </div>
                    <h4 className="font-heading font-bold text-[12px] text-[var(--color-primary)] mb-1.5 leading-tight">{step.title}</h4>
                    <p className="text-[11px] text-[var(--color-text-mid)] leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">

            {/* Eligibility */}
            <div className="card p-7">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-[var(--color-border)]">
                <div className="icon-box icon-box-sm"><CheckSquare size={16} /></div>
                <h3 className="font-heading font-bold text-[15px] text-[var(--color-primary)]">Eligibility Criteria</h3>
              </div>
              <ul className="space-y-4 text-[12px] text-[var(--color-text-mid)]">
                {[
                  "Passed 10+2 (HSC) or equivalent with Physics, Chemistry and Mathematics as compulsory subjects.",
                  "Minimum 45% aggregate in PCM (40% for reserved category).",
                  "Valid score in TNEA / JEE Main / Other approved entrance exams.",
                  "Must have passed 10th Standard from a recognized board.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-1.5 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[10px] text-[var(--color-text-light)] italic">* Per Anna University norms.</p>
            </div>

            {/* Fee Structure */}
            <div className="card p-7">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-[var(--color-border)]">
                <div className="icon-box icon-box-sm"><CreditCard size={16} /></div>
                <h3 className="font-heading font-bold text-[15px] text-[var(--color-primary)]">Fee Structure (Approx.)</h3>
              </div>
              <table className="w-full text-[12px] text-left">
                <thead>
                  <tr className="text-[var(--color-text-dark)] border-b border-[var(--color-border)]">
                    <th className="pb-2.5 font-semibold">Program</th>
                    <th className="pb-2.5 font-semibold text-right">Per Annum</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--color-text-mid)]">
                  {[
                    ["B.E. Computer Science & Engg.", "₹ 55,000"],
                    ["B.E. Mechanical Engineering",   "₹ 50,000"],
                    ["B.E. Electrical & Electronics", "₹ 50,000"],
                    ["Other B.E. Programs",           "₹ 50,000"],
                  ].map(([prog, fee], i) => (
                    <tr key={i} className="border-b border-[var(--color-border)] last:border-0">
                      <td className="py-3">{prog}</td>
                      <td className="py-3 text-right font-heading font-semibold text-[var(--color-primary)]">{fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-[10px] text-[var(--color-text-light)] italic">* Subject to government/institution norms.</p>
            </div>

            {/* Scholarships */}
            <div className="card p-7">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-[var(--color-border)]">
                <div className="icon-box icon-box-sm"><Star size={16} /></div>
                <h3 className="font-heading font-bold text-[15px] text-[var(--color-primary)]">Scholarships</h3>
              </div>
              <p className="text-[12px] text-[var(--color-text-mid)] mb-6 leading-relaxed">
                Annai offers various merit and performance-based scholarships for deserving students.
              </p>
              <div className="space-y-4">
                {[
                  { color: "bg-blue-50 text-blue-600",   label: "Merit Scholarships",      desc: "For academic excellence in HSC/UG exams." },
                  { color: "bg-green-50 text-green-600",  label: "Sports Scholarships",     desc: "For outstanding sports achievements." },
                  { color: "bg-orange-50 text-orange-600",label: "Government Scholarships", desc: "SC/ST, OBC and other state schemes." },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`p-1.5 rounded mt-0.5 shrink-0 ${s.color}`}><Star size={13} /></div>
                    <div>
                      <div className="font-heading font-bold text-[12px] text-[var(--color-text-dark)]">{s.label}</div>
                      <div className="text-[11px] text-[var(--color-text-mid)]">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="relative bg-[var(--color-primary)] rounded-[var(--card-radius)] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.07) 0%, transparent 60%)" }} />
            <div className="relative z-10">
              <h2 className="text-white text-2xl md:text-3xl font-heading font-bold mb-2">Don't wait, secure your future today!</h2>
              <p className="text-white/70 text-[14px]">Join Annai and become a part of a legacy of excellence and innovation.</p>
            </div>
            <div className="relative z-10 shrink-0">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] font-heading font-semibold text-sm px-7 py-3 rounded-[var(--btn-radius)] hover:bg-gray-100 transition-colors"
                >
                  Apply Now <ArrowRight size={15} />
                </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}