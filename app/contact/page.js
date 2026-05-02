"use client";

import { useState } from "react";
import PageHero from "../../components/PageHero";
import { motion } from "framer-motion";
import {
  MapPin, Mail, Clock, Send, CheckCircle, AlertCircle,
  User, MailOpen, MessageSquare, PhoneCall, Phone, Loader2
} from "lucide-react";

/* Top-row info cards — "Call Us" removed */
const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    desc: "Annai College of Engineering & Technology,\nKovilacheri, Kumbakonam,\nTamil Nadu — 621 503, India.",
  },
  {
    icon: Mail,
    title: "Email Us",
    desc: "admissions@annaiengineering.edu.in\nWe respond within 24 hours",
  },
  {
    icon: Clock,
    title: "Office Hours",
    desc: "Mon – Sat: 9:00 AM – 5:30 PM\nSunday: Closed",
  },
];

/* Redesigned directory — departments with phones */
const directory = [
  {
    dept: "Admissions",
    role: "Enquiry & Counselling",
    phones: ["+91 70920 38384"],
    email: "admissions@annaiengineering.edu.in",
    color: "bg-blue-50 border-blue-200 text-blue-700",
    dot: "bg-blue-500",
  },
  {
    dept: "General Enquiry",
    role: "Information Desk",
    phones: ["+91 94884 88241"],
    color: "bg-indigo-50 border-indigo-200 text-indigo-700",
    dot: "bg-indigo-500",
  },
  {
    dept: "Placement Cell",
    role: "Career & Recruitment",
    phones: ["+91 88070 53849"],
    color: "bg-green-50 border-green-200 text-green-700",
    dot: "bg-green-500",
  },

];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } };

export default function ContactPage() {
  const [form, setForm]     = useState({ name: "", email: "", phone: "", type: "", message: "", agree: false });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errMsg, setErrMsg] = useState("");

  const set = (field) => (e) =>
    setForm(prev => ({ ...prev, [field]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:    form.name,
          email:   form.email,
          phone:   form.phone,
          type:    form.type,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setErrMsg(err.message);
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero subtitle="CONTACT US" title={"We're Here to\nHelp You"} />

      {/* ── 3 info cards ── */}
      <section className="section-light">
        <div className="container-custom py-24">

          <motion.div
            variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
          >
            {contactCards.map((c, i) => (
              <motion.div key={i} variants={item} className="card p-7">
                <div className="icon-box mb-4"><c.icon size={22} strokeWidth={1.8} /></div>
                <h4 className="font-heading font-bold text-[14px] text-[var(--color-primary)] mb-2">{c.title}</h4>
                <p className="text-[12px] text-[var(--color-text-mid)] whitespace-pre-line leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Form + Directory ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">

            {/* Form */}
            <div className="lg:col-span-7 card p-10">
              <div className="mb-8">
                <span className="eyebrow">Get in Touch</span>
                <h2>Send Us a Message</h2>
              </div>

              {status === "success" ? (
                /* ── Success State ── */
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mb-5">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-heading font-bold text-[18px] text-[var(--color-primary)] mb-2">Message Sent!</h3>
                  <p className="text-[13px] text-[var(--color-text-mid)] max-w-[340px] leading-relaxed mb-1">
                    Thank you, <strong>{form.name}</strong>. We&apos;ve received your enquiry and will reply to
                    <strong> {form.email}</strong> within 24 hours.
                  </p>
                  <p className="text-[11px] text-[var(--color-text-light)] mt-3">Check your inbox for a confirmation email.</p>
                  <button
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", type: "", message: "", agree: false }); }}
                    className="mt-6 text-[12px] text-[var(--color-primary)] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label className="block">
                      <span className="text-[11px] font-heading font-semibold text-[var(--color-text-dark)] uppercase tracking-wider mb-1.5 block">Full Name</span>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-light)]" size={16} />
                        <input type="text" placeholder="Your full name" required value={form.name} onChange={set("name")}
                          className="w-full pl-11 pr-4 py-3 bg-[var(--color-bg-page)] border border-[var(--color-border)] rounded-[var(--card-radius-sm)] text-[13px] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all font-body" />
                      </div>
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-heading font-semibold text-[var(--color-text-dark)] uppercase tracking-wider mb-1.5 block">Email Address</span>
                      <div className="relative">
                        <MailOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-light)]" size={16} />
                        <input type="email" placeholder="your@email.com" required value={form.email} onChange={set("email")}
                          className="w-full pl-11 pr-4 py-3 bg-[var(--color-bg-page)] border border-[var(--color-border)] rounded-[var(--card-radius-sm)] text-[13px] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all font-body" />
                      </div>
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-heading font-semibold text-[var(--color-text-dark)] uppercase tracking-wider mb-1.5 block">Mobile Number</span>
                      <div className="relative">
                        <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-light)]" size={16} />
                        <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={set("phone")}
                          className="w-full pl-11 pr-4 py-3 bg-[var(--color-bg-page)] border border-[var(--color-border)] rounded-[var(--card-radius-sm)] text-[13px] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all font-body" />
                      </div>
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-heading font-semibold text-[var(--color-text-dark)] uppercase tracking-wider mb-1.5 block">Inquiry Type</span>
                      <select value={form.type} onChange={set("type")}
                        className="w-full px-4 py-3 bg-[var(--color-bg-page)] border border-[var(--color-border)] rounded-[var(--card-radius-sm)] text-[13px] text-[var(--color-text-mid)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all">
                        <option value="">Select inquiry type</option>
                        <option value="Admissions">Admissions</option>
                        <option value="Placements">Placements</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-[11px] font-heading font-semibold text-[var(--color-text-dark)] uppercase tracking-wider mb-1.5 block">Your Message</span>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-3.5 text-[var(--color-text-light)]" size={16} />
                      <textarea placeholder="Write your message here..." rows="5" required value={form.message} onChange={set("message")}
                        className="w-full pl-11 pr-4 py-3 bg-[var(--color-bg-page)] border border-[var(--color-border)] rounded-[var(--card-radius-sm)] text-[13px] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all resize-none font-body" />
                    </div>
                  </label>

                  {/* Error banner */}
                  {status === "error" && (
                    <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-[12px] text-red-700">
                      <AlertCircle size={15} className="shrink-0" />
                      {errMsg || "Failed to send. Please try again or email us directly."}
                    </div>
                  )}

                  <label className="flex items-center gap-2.5 text-[12px] text-[var(--color-text-mid)] cursor-pointer">
                    <input type="checkbox" required checked={form.agree} onChange={set("agree")}
                      className="w-4 h-4 rounded border-[var(--color-border)] text-[var(--color-primary)]" />
                    I agree that my information may be used to contact me
                  </label>

                  <button type="submit" disabled={status === "loading"}
                    className="btn-primary w-full md:w-auto px-8 disabled:opacity-70 disabled:cursor-not-allowed">
                    {status === "loading" ? (
                      <><Loader2 size={14} className="animate-spin" /> Sending…</>
                    ) : (
                      <>Send Message <Send size={14} /></>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Directory — redesigned */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* TNEA info pill */}
              <div
                style={{ backgroundColor: "var(--color-primary)", borderColor: "var(--color-primary)" }}
                className="rounded-[var(--card-radius)] border p-5 flex items-center gap-5 shadow-[var(--shadow-hover)]"
              >
                <div className="flex flex-col shrink-0 border-r border-white/20 pr-5">
                  <span className="text-white/60 text-[9px] uppercase tracking-widest font-heading font-bold mb-0.5">TNEA Code</span>
                  <span className="text-white font-heading font-bold text-[32px] leading-none">3849</span>
                </div>
                <div>
                  <div className="text-white font-heading font-semibold text-[13px]">Anna University</div>
                  <div className="text-white/60 text-[11px] mt-0.5">Counselling Code for Admissions 2026</div>
                </div>
              </div>
              <div className="mb-2">
                <span className="eyebrow">Department Directory</span>
                <h3 className="text-[20px]">Reach the Right Person</h3>
              </div>

              {directory.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.4 }}
                  className={`border rounded-[var(--card-radius)] p-5 ${d.color}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${d.dot}`} />
                    <div className="flex-1 min-w-0">
                      <div className="font-heading font-bold text-[13px] mb-0.5">{d.dept}</div>
                      <div className="text-[11px] opacity-70 mb-3">{d.role}</div>

                      {/* Phone numbers */}
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
                        {d.phones.map((ph, j) => (
                          <a key={j} href={`tel:${ph.replace(/\s/g, "")}`}
                            className="flex items-center gap-1.5 text-[12px] font-heading font-semibold hover:underline"
                          >
                            <Phone size={12} className="shrink-0" />
                            {ph}
                          </a>
                        ))}
                      </div>

                      {/* Email */}
                      <a href={`mailto:${d.email}`}
                        className="text-[11px] opacity-80 hover:underline break-all"
                      >
                        {d.email}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}


            </div>

          </div>

          {/* ── Map ── correct lat/lng: 11.033582, 79.416086 */}
          <div>
            <div className="mb-6">
              <span className="eyebrow">Location</span>
              <h2>Find Us</h2>
            </div>
            <div className="w-full h-[420px] rounded-[var(--card-radius)] overflow-hidden border border-[var(--color-border)] shadow-[var(--shadow-card)]">
              <iframe
                src="https://maps.google.com/maps?q=11.033582110294313,79.4160867855692&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Annai College of Engineering & Technology Location"
              />
            </div>
            <p className="mt-3 text-[12px] text-[var(--color-text-mid)] text-center">
              📍 Kovilacheri, Kumbakonam, Tamil Nadu – 621 503 &nbsp;·&nbsp;
              <a
                href="https://maps.google.com/?q=11.033582110294313,79.4160867855692"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:underline font-medium"
              >
                Open in Google Maps ↗
              </a>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}