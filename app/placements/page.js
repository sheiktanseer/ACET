"use client";

import PageHero from "../../components/PageHero";
import StatsBar from "../../components/StatsBar";
import StoryCarousel from "../../components/StoryCarousel";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Trophy, Star, Users, Briefcase, Building, ArrowRight, Download
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from "recharts";

const placementStats = [
  { icon: Trophy, stat: "92%", label: "Placement Rate" },
  { icon: Star, stat: "6.5 LPA", label: "Highest Package" },
  { icon: Users, stat: "2500+", label: "Students Placed" },
  { icon: Briefcase, stat: "100+", label: "Recruiters" },
  { icon: Building, stat: "15+", label: "Industry Sectors" },
  { icon: Trophy, stat: "1200+", label: "Total Offers" },
];

const salaryData = [
  { range: "2-3 LPA", count: 10 },
  { range: "3-4 LPA", count: 35 },
  { range: "4-5 LPA", count: 26 },
  { range: "5-7 LPA", count: 24 },
  { range: "7-10 LPA", count: 4 },
  { range: "10+ LPA", count: 1 },
];

const trendData = [
  { year: "2021", rate: 70 },
  { year: "2022", rate: 76 },
  { year: "2023", rate: 82 },
  { year: "2024", rate: 88 },
  { year: "2025", rate: 92 },
];

const pieData = [
  { name: "IT Services", value: 45 },
  { name: "Core Engineering", value: 25 },
  { name: "Software Products", value: 15 },
  { name: "Consulting", value: 10 },
  { name: "Others", value: 5 },
];
const PIE_COLORS = ["#112a52", "#1a56db", "#3b82f6", "#60a5fa", "#93c5fd"];

const recruiters = ["TATA", "Infosys", "Wipro", "Accenture", "Cognizant", "HCL", "IBM", "Tech Mahindra", "Mphasis", "Capgemini", "ZOHO", "Virtusa"];

const stories = [

  {
    name: "Sneha Reddy",
    batch: "B.E. EEE, 2025",
    position: "Associate Engineer",
    company: "HCLTech",
    dept: "Electrical & Electronics Engineering",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    quote: "The curriculum and hands-on training helped me crack interviews with top companies. I am grateful for the incredible opportunities provided at Annai. Every lab session felt like real industry experience.",
  },
  {
    name: "Sheik Mohamed Tanseer",
    batch: "B.E. MECH, 2016",
    position: "Assistant Manager – IT Infrastructure & Cyber Resilience",
    company: "LIC International, GCC",
    dept: "Mechanical Engineering",
    img: "/img/p1.png",
    quote: "Annai gave me the platform and confidence to achieve my goals. The training and support from the placement cell was exceptional. The faculty mentorship pushed me to go beyond what I thought was possible.",
  },
  {
    name: "Karthik S",
    batch: "B.E. MECH, 2025",
    position: "Graduate Engineer Trainee",
    company: "TATA Motors",
    dept: "Mechanical Engineering",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    quote: "From mock interviews to skill development sessions, everything at Annai is designed for our success. The campus workshops and industry visits gave me real-world context that made all the difference.",
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } };

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length)
    return (
      <div className="bg-white border border-[var(--color-border)] rounded-lg p-3 shadow-lg text-[12px] font-heading">
        <div className="text-[var(--color-primary)] font-semibold">{label}</div>
        <div className="text-[var(--color-text-mid)]">{payload[0].value}{payload[0].name === "rate" ? "%" : " students"}</div>
      </div>
    );
  return null;
};

export default function PlacementsPage() {
  return (
    <>
      <PageHero subtitle="PLACEMENTS" title={"Empowering Careers.\nBuilding Futures."} />
      <StatsBar stats={placementStats} />

      {/* ── Top Recruiters ── */}
      <section className="section-white">
        <div className="container-custom py-24">

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-14 gap-6">
            <div>
              <span className="eyebrow">Our Record</span>
              <h2 className="mb-2">Top Recruiters</h2>
              <p className="text-[14px] text-[var(--color-text-mid)] max-w-[480px]">
                Our dedicated placement cell connects students with top recruiters across industries.
              </p>
            </div>
            <button className="btn-primary shrink-0">View Placement Brochure <Download size={15} /></button>
          </div>

          <motion.div
            variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6"
          >
            {recruiters.map((co, i) => (
              <motion.div key={i} variants={item}
                whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(17,42,82,0.12)" }}
                className="card h-16 flex items-center justify-center cursor-pointer hover:border-[var(--color-primary)] transition-colors"
              >
                <span className="font-heading font-bold text-[12px] text-[var(--color-primary)]">{co}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-end">
            <button className="link-arrow text-[12px]">View All Recruiters <ArrowRight size={13} /></button>
          </div>
        </div>
      </section>

      {/* ── Charts + Stories ── */}
      <section className="section-light">
        <div className="container-custom py-24">
          <div className="mb-14">
            <span className="eyebrow">Analytics</span>
            <h2>Placement Highlights</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">

            <div className="card p-7">
              <h3 className="text-[14px] font-heading font-bold text-[var(--color-primary)] mb-6">Salary Package Distribution</h3>
              <div className="h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salaryData} margin={{ top: 10, right: 0, left: -24, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                    <XAxis dataKey="range" tick={{ fontSize: 9, fill: "var(--color-text-light)", fontFamily: "var(--font-heading)" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 9, fill: "var(--color-text-light)" }} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "var(--color-bg-alt)" }} />
                    <Bar dataKey="count" fill="var(--color-primary)" radius={[5, 5, 0, 0]} maxBarSize={32} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="card p-7">
              <h3 className="text-[14px] font-heading font-bold text-[var(--color-primary)] mb-6">Placement Trend (Year-on-Year)</h3>
              <div className="h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData} margin={{ top: 10, right: 10, left: -24, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                    <XAxis dataKey="year" tick={{ fontSize: 10, fill: "var(--color-text-light)" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 10, fill: "var(--color-text-light)" }} axisLine={false} tickLine={false} domain={[60, 100]} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="rate" stroke="var(--color-accent)" strokeWidth={2.5} dot={{ r: 5, fill: "var(--color-accent)", stroke: "white", strokeWidth: 2 }} activeDot={{ r: 7 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="card p-7 flex flex-col">
              <h3 className="text-[14px] font-heading font-bold text-[var(--color-primary)] mb-4">Recruiter Engagement</h3>
              <div className="relative flex-1 flex items-center justify-center">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={58} outerRadius={78} paddingAngle={3} dataKey="value" stroke="none">
                      {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: "8px", fontSize: "12px", fontFamily: "var(--font-heading)" }} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center">
                    <div className="font-heading font-bold text-xl text-[var(--color-primary)]">100+</div>
                    <div className="text-[9px] text-[var(--color-text-mid)]">Recruiters</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-3 gap-y-2 mt-4">
                {pieData.map((d, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] text-[var(--color-text-mid)]">
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
                    {d.name}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Testimonials Carousel */}
          <div>
            <div className="mb-10">
              <span className="eyebrow">Testimonials</span>
              <h2>Student Success Stories</h2>
            </div>
            <StoryCarousel stories={stories} />
          </div>

        </div>
      </section>
    </>
  );
}