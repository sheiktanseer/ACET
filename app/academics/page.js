"use client";

import PageHero from "../../components/PageHero";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu, Settings, Zap, Users, Clock, Award, CheckCircle2,
  BookOpen, Beaker, UserCheck, Search, Briefcase,
  MonitorPlay, Building, Network, ArrowRight, Radio, Brain, Shield
} from "lucide-react";
import Link from "next/link";

/* ── All 10 programmes ─────────────────────────────────────────── */
const ugPrograms = [
  {
    id: "cse", name: "Computer Science & Engineering", degree: "BE", badge: "Popular",
    tag: "180 Intake", intake: "180", duration: "4 Years", affiliation: "Anna University", accreditation: "NBA",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=900&auto=format&fit=crop",
    desc: "Empowering students with the knowledge and skills to build innovative software, AI systems, and digital solutions for the modern world.",
    highlights: ["Data Structures & Algorithms", "Artificial Intelligence", "Full Stack Development", "Cloud Computing", "Cyber Security", "Machine Learning"],
    careers: ["Software Engineer", "Data Scientist", "Cloud Architect", "Cybersecurity Analyst"],
    features: [
      { icon: BookOpen, title: "Strong Foundation" },
      { icon: Network, title: "Modern Tech Infrastructure" },
      { icon: UserCheck, title: "Expert Faculty & Mentorship" },
      { icon: Search, title: "Research & Innovation" },
      { icon: Briefcase, title: "Industry Tie-ups" },
      { icon: MonitorPlay, title: "Advanced Laboratories" },
      { icon: Building, title: "Central Library" },
      { icon: Zap, title: "Smart Classrooms" },
    ],
  },
  {
    id: "cse-cs", name: "CSE (Cyber Security)", degree: "BE", badge: "",
    tag: "60 Intake", intake: "60", duration: "4 Years", affiliation: "Anna University", accreditation: "AICTE",
    img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=900&auto=format&fit=crop",
    desc: "Specialised programme focusing on protecting digital assets, networks, and systems from cyberthreats and security vulnerabilities.",
    highlights: ["Ethical Hacking", "Network Security", "Cryptography", "Digital Forensics", "Cloud Security", "Penetration Testing"],
    careers: ["Cybersecurity Analyst", "Ethical Hacker", "Security Architect", "SOC Engineer"],
    features: [
      { icon: Shield, title: "Cyber Defence Lab" },
      { icon: Network, title: "Network Security" },
      { icon: Search, title: "Digital Forensics" },
      { icon: MonitorPlay, title: "Simulation Tools" },
      { icon: UserCheck, title: "Expert Faculty" },
      { icon: Briefcase, title: "Industry Certifications" },
      { icon: BookOpen, title: "Ethical Hacking" },
      { icon: Zap, title: "Smart Classrooms" },
    ],
  },
  {
    id: "civil", name: "Civil Engineering", degree: "BE", badge: "",
    tag: "60 Intake", intake: "60", duration: "4 Years", affiliation: "Anna University", accreditation: "NBA",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop",
    desc: "Building the infrastructure of tomorrow through structural analysis, environmental engineering, transportation, and sustainable construction practices.",
    highlights: ["Structural Analysis", "Environmental Engineering", "Transportation Engineering", "Surveying", "Geo-technical Engineering", "Construction Management"],
    careers: ["Structural Engineer", "Site Engineer", "Project Manager", "Environmental Engineer"],
    features: [
      { icon: Building, title: "Structural Design" },
      { icon: Beaker, title: "Material Testing Labs" },
      { icon: UserCheck, title: "Expert Faculty" },
      { icon: Search, title: "Environmental Research" },
      { icon: Briefcase, title: "Industry Projects" },
      { icon: MonitorPlay, title: "AutoCAD & Revit" },
      { icon: Settings, title: "Geo-tech Lab" },
      { icon: BookOpen, title: "Project Management" },
    ],
  },
  {
    id: "mech", name: "Mechanical Engineering", degree: "BE", badge: "",
    tag: "120 Intake", intake: "120", duration: "4 Years", affiliation: "Anna University", accreditation: "NBA",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=900&auto=format&fit=crop",
    desc: "Designing, manufacturing, and maintaining mechanical systems with a focus on sustainable technologies, robotics, and modern manufacturing processes.",
    highlights: ["Thermodynamics", "CAD/CAM", "Robotics & Automation", "Fluid Mechanics", "Manufacturing Processes", "Automotive Engineering"],
    careers: ["Design Engineer", "Manufacturing Engineer", "Project Manager", "R&D Specialist"],
    features: [
      { icon: Settings, title: "Core Design Principles" },
      { icon: Beaker, title: "Advanced Mfg. Labs" },
      { icon: UserCheck, title: "Experienced Faculty" },
      { icon: Search, title: "Material Research" },
      { icon: Briefcase, title: "Automotive Internships" },
      { icon: Cpu, title: "CAD/CAM Facilities" },
      { icon: Building, title: "Workshops & Tools" },
      { icon: Zap, title: "Practical Learning" },
    ],
  },
  {
    id: "eee", name: "Electrical & Electronics Engineering", degree: "BE", badge: "",
    tag: "60 Intake", intake: "60", duration: "4 Years", affiliation: "Anna University", accreditation: "NBA",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=900&auto=format&fit=crop",
    desc: "Powering the future through advanced studies in electronics, power systems, control systems, and renewable energy technologies.",
    highlights: ["Power Systems", "Control Systems", "Renewable Energy", "VLSI Design", "Electrical Machines", "PLC & SCADA"],
    careers: ["Electrical Engineer", "Power System Engineer", "Automation Engineer", "Energy Consultant"],
    features: [
      { icon: Zap, title: "Power Systems" },
      { icon: Network, title: "Electronics Laboratories" },
      { icon: UserCheck, title: "Dedicated Mentors" },
      { icon: Search, title: "Renewable Energy Research" },
      { icon: Briefcase, title: "Core Industry Placements" },
      { icon: MonitorPlay, title: "Simulation Software" },
      { icon: Building, title: "High Voltage Labs" },
      { icon: BookOpen, title: "Comprehensive Curriculum" },
    ],
  },
  {
    id: "ece", name: "Electronics & Communication Engineering", degree: "BE", badge: "",
    tag: "60 Intake", intake: "60", duration: "4 Years", affiliation: "Anna University", accreditation: "NBA",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop",
    desc: "Connecting the world through advanced electronics, signal processing, embedded systems, wireless communication, and IoT technologies.",
    highlights: ["Signal Processing", "Embedded Systems", "Wireless Communication", "IoT", "VLSI Design", "Antenna & RF Engineering"],
    careers: ["Embedded Engineer", "RF Engineer", "IoT Developer", "VLSI Design Engineer"],
    features: [
      { icon: Radio, title: "Communication Labs" },
      { icon: Network, title: "Embedded Systems" },
      { icon: UserCheck, title: "Expert Mentors" },
      { icon: Search, title: "IoT Research" },
      { icon: Briefcase, title: "Industry Tie-ups" },
      { icon: MonitorPlay, title: "Signal Simulation" },
      { icon: Cpu, title: "VLSI Lab" },
      { icon: BookOpen, title: "Comprehensive Curriculum" },
    ],
  },
  {
    id: "it", name: "Information Technology", degree: "B.Tech", badge: "",
    tag: "60 Intake", intake: "60", duration: "4 Years", affiliation: "Anna University", accreditation: "AICTE",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
    desc: "Leveraging information technology to design, implement and manage digital systems that solve real-world business and societal problems.",
    highlights: ["Web Technologies", "Database Management", "System Analysis", "Networking", "Software Engineering", "Data Analytics"],
    careers: ["IT Consultant", "Systems Analyst", "Web Developer", "Database Administrator"],
    features: [
      { icon: Cpu, title: "IT Infrastructure Lab" },
      { icon: Network, title: "Networking Facilities" },
      { icon: UserCheck, title: "Expert Faculty" },
      { icon: Search, title: "Applied Research" },
      { icon: Briefcase, title: "IT Industry Placements" },
      { icon: MonitorPlay, title: "Advanced Dev Tools" },
      { icon: BookOpen, title: "Rich Curriculum" },
      { icon: Zap, title: "Smart Classrooms" },
    ],
  },
  {
    id: "aids", name: "Artificial Intelligence & Data Science", degree: "B.Tech", badge: "NEW",
    tag: "60 Intake", intake: "60", duration: "4 Years", affiliation: "Anna University", accreditation: "AICTE",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=900&auto=format&fit=crop",
    desc: "Harnessing AI and data science to build intelligent systems, extract insights from data, and drive innovation across every sector.",
    highlights: ["Machine Learning", "Deep Learning", "Big Data Analytics", "Natural Language Processing", "Computer Vision", "Data Engineering"],
    careers: ["AI Engineer", "Data Scientist", "ML Engineer", "Research Scientist"],
    features: [
      { icon: Brain, title: "AI/ML Lab" },
      { icon: Network, title: "Big Data Cluster" },
      { icon: UserCheck, title: "Expert AI Faculty" },
      { icon: Search, title: "Research Projects" },
      { icon: Briefcase, title: "Tech Industry Placements" },
      { icon: MonitorPlay, title: "GPU Computing" },
      { icon: Cpu, title: "Deep Learning Tools" },
      { icon: BookOpen, title: "Modern Curriculum" },
    ],
  },
];

const pgPrograms = [
  {
    id: "me-cse", name: "Computer Science & Engineering", degree: "ME", badge: "PG",
    tag: "18 Intake", intake: "18", duration: "2 Years", affiliation: "Anna University", accreditation: "AICTE",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=900&auto=format&fit=crop",
    desc: "Advanced postgraduate programme developing expertise in algorithms, distributed computing, AI and cutting-edge research methodologies.",
    highlights: ["Advanced Algorithms", "Distributed Systems", "Research Methodology", "Machine Learning", "Software Architecture", "Thesis Work"],
    careers: ["Research Scientist", "Senior Software Engineer", "AI Researcher", "University Lecturer"],
    features: [
      { icon: Brain, title: "Advanced Research" },
      { icon: Network, title: "High-Performance Computing" },
      { icon: UserCheck, title: "PhD-qualified Faculty" },
      { icon: Search, title: "Research Publications" },
      { icon: Briefcase, title: "Industry Collaboration" },
      { icon: MonitorPlay, title: "Advanced Labs" },
      { icon: BookOpen, title: "Thesis Supervision" },
      { icon: Zap, title: "Seminar Programmes" },
    ],
  },
  {
    id: "me-cem", name: "Construction Engineering & Management", degree: "ME", badge: "PG",
    tag: "18 Intake", intake: "18", duration: "2 Years", affiliation: "Anna University", accreditation: "AICTE",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop",
    desc: "Specialised postgraduate programme bridging civil engineering and management for large-scale infrastructure project planning and execution.",
    highlights: ["Project Planning & Control", "Construction Law", "Cost Estimation", "Risk Management", "BIM Technology", "Thesis Work"],
    careers: ["Project Manager", "Construction Manager", "Infrastructure Consultant", "Site Director"],
    features: [
      { icon: Building, title: "Project Management" },
      { icon: Settings, title: "BIM & CAD Tools" },
      { icon: UserCheck, title: "Industry Experts" },
      { icon: Search, title: "Applied Research" },
      { icon: Briefcase, title: "Site Visits & Internships" },
      { icon: MonitorPlay, title: "Simulation Software" },
      { icon: BookOpen, title: "Case Studies" },
      { icon: Zap, title: "Industry Projects" },
    ],
  },
];

const admissionInfo = [
  { label: "TNEA Counselling Code", value: "3849" },
  { label: "Affiliated To", value: "Anna University" },
  { label: "Approved By", value: "AICTE" },
  { label: "UG Programmes", value: "8 Programmes" },
  { label: "PG Programmes", value: "2 Programmes" },
  { label: "Scholarships", value: "Merit-based available" },
  { label: "Hostel & Transport", value: "Available" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

function DeptDetail({ dept }) {
  return (
    <motion.div
      key={dept.id}
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Dept hero grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14">

        {/* Image + Key Subjects */}
        <div>
          <div className="relative rounded-[var(--card-radius)] overflow-hidden shadow-[var(--shadow-hover)] aspect-[16/9] mb-5">
            <img src={dept.img} alt={dept.name} className="w-full h-full object-cover" />
            <span className="tag absolute top-4 left-4">{dept.tag}</span>
            {dept.badge && (
              <span className="absolute top-4 right-4 bg-[var(--color-primary)] text-white text-[10px] font-heading font-bold px-2 py-1 rounded">{dept.badge}</span>
            )}
          </div>
          <div className="card-flat p-5">
            <h4 className="font-heading font-bold text-[12px] text-[var(--color-primary)] mb-3 uppercase tracking-wider">Key Subjects</h4>
            <div className="flex flex-wrap gap-2">
              {dept.highlights.map((h, i) => (
                <span key={i} className="tag">{h}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Details */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[var(--color-primary)] text-white text-[10px] font-heading font-bold px-2 py-0.5 rounded">{dept.degree}</span>
            {dept.badge && <span className="bg-amber-500 text-white text-[10px] font-heading font-bold px-2 py-0.5 rounded">{dept.badge}</span>}
          </div>
          <h2 className="mb-3">{dept.name}</h2>
          <p className="text-[14px] text-[var(--color-text-mid)] mb-7 leading-relaxed">{dept.desc}</p>

          <div className="grid grid-cols-2 gap-4 mb-7">
            {[
              { Icon: Users, label: "Intake", val: dept.intake },
              { Icon: Clock, label: "Duration", val: dept.duration },
              { Icon: Award, label: "Affiliated To", val: dept.affiliation },
              { Icon: CheckCircle2, label: "Approved By", val: dept.accreditation },
            ].map(({ Icon, label, val }, i) => (
              <div key={i} className="card-flat p-4 flex items-center gap-3">
                <div className="icon-box icon-box-sm shrink-0"><Icon size={16} /></div>
                <div>
                  <div className="text-[10px] text-[var(--color-text-mid)] uppercase tracking-wider">{label}</div>
                  <div className="font-heading font-semibold text-[13px] text-[var(--color-primary)]">{val}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="card-flat p-5 mb-7">
            <h4 className="font-heading font-bold text-[12px] text-[var(--color-primary)] mb-3 uppercase tracking-wider">Career Opportunities</h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {dept.careers.map((role, i) => (
                <div key={i} className="flex items-center gap-2 text-[12px] text-[var(--color-text-dark)] font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                  {role}
                </div>
              ))}
            </div>
          </div>

          <Link href="/contact" className="btn-primary">
            Apply for This Program <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Features */}
      <motion.div
        variants={container} initial="hidden" animate="show"
        className="grid grid-cols-2 md:grid-cols-4 gap-5"
      >
        {dept.features.map((feat, idx) => (
          <motion.div key={idx} variants={item} className="card p-5 text-center group hover:border-[var(--color-primary)]">
            <div className="icon-box mx-auto mb-3 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
              <feat.icon size={20} strokeWidth={1.8} />
            </div>
            <h4 className="font-heading font-semibold text-[12px] text-[var(--color-primary)] leading-snug">{feat.title}</h4>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function AcademicsPage() {
  const allDepts = [...ugPrograms, ...pgPrograms];
  const [activeTab, setActiveTab] = useState(allDepts[0].id);
  const dept = allDepts.find(d => d.id === activeTab);

  return (
    <>
      <PageHero subtitle="ACADEMICS" title={"Departments Shaping\nFuture Engineers"} />

      <section className="section-light">
        <div className="container-custom py-24">

          {/* Header + Admission Info sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 items-start">

            {/* Left — heading */}
            <div className="lg:col-span-8">
              <span className="eyebrow">Engineering Programs</span>
              <h2 className="mb-3">Our Departments</h2>
              <p className="text-[14px] text-[var(--color-text-mid)] max-w-[560px]">
                Our academic programs are designed to provide strong fundamentals, practical knowledge and real-world industry exposure. Affiliated to Anna University and approved by AICTE.
              </p>
            </div>

            {/* Right — Admission info card */}
            <div className="lg:col-span-4">
              <div className="card p-5">
                <h4 className="font-heading font-bold text-[13px] text-[var(--color-primary)] mb-4 pb-3 border-b border-[var(--color-border)]">
                  Admission Details
                </h4>
                <ul className="space-y-2.5">
                  {admissionInfo.map(({ label, value }, i) => (
                    <li key={i} className="flex items-start justify-between gap-2 text-[11.5px]">
                      <span className="text-[var(--color-text-mid)]">{label}</span>
                      <span className="font-heading font-semibold text-[var(--color-primary)] text-right shrink-0">{value}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary w-full justify-center mt-5 text-[13px]">
                  Apply Now <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          {/* ── UG Programmes ── */}
          <div className="mb-2">
            <h3 className="text-[15px] font-heading font-bold text-[var(--color-text-mid)] uppercase tracking-widest mb-4">
              UG Courses — BE / B.Tech
            </h3>
            <div className="flex flex-wrap border-b-2 border-[var(--color-border)]">
              {ugPrograms.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActiveTab(d.id)}
                  className={`relative px-5 py-3.5 text-[12px] font-heading font-semibold transition-all duration-200 border-b-2 -mb-[2px] flex items-center gap-2 whitespace-nowrap ${
                    activeTab === d.id
                      ? "border-[var(--color-primary)] text-[var(--color-primary)] bg-white"
                      : "border-transparent text-[var(--color-text-mid)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-card)]"
                  }`}
                >
                  <span className="text-[10px] font-bold bg-[var(--color-bg-alt)] text-[var(--color-primary)] px-1.5 py-0.5 rounded shrink-0">{d.degree}</span>
                  {d.name}
                  {d.badge && <span className="bg-amber-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded leading-none shrink-0">{d.badge}</span>}
                </button>
              ))}
            </div>
          </div>

          {/* ── PG Programmes ── */}
          <div className="mb-12">
            <h3 className="text-[15px] font-heading font-bold text-[var(--color-text-mid)] uppercase tracking-widest mt-5 mb-4">
              PG Courses — ME
            </h3>
            <div className="flex flex-wrap border-b-2 border-[var(--color-border)]">
              {pgPrograms.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActiveTab(d.id)}
                  className={`relative px-5 py-3.5 text-[12px] font-heading font-semibold transition-all duration-200 border-b-2 -mb-[2px] flex items-center gap-2 whitespace-nowrap ${
                    activeTab === d.id
                      ? "border-[var(--color-primary)] text-[var(--color-primary)] bg-white"
                      : "border-transparent text-[var(--color-text-mid)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-card)]"
                  }`}
                >
                  <span className="text-[10px] font-bold bg-[var(--color-primary)] text-white px-1.5 py-0.5 rounded shrink-0">{d.degree}</span>
                  {d.name}
                  <span className="bg-[var(--color-primary)]/20 text-[var(--color-primary)] text-[8px] font-bold px-1.5 py-0.5 rounded leading-none shrink-0">PG</span>
                </button>
              ))}
            </div>
          </div>

          {/* Department Detail Panel */}
          <AnimatePresence mode="wait">
            <DeptDetail key={dept.id} dept={dept} />
          </AnimatePresence>

        </div>
      </section>
    </>
  );
}