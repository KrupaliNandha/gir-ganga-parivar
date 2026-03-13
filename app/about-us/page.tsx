"use client";

import Image from "next/image";
import {
  ArrowRight,
  Droplets,
  Users,
  Sprout,
  Building2,
  CheckCircle,
  Quote,
  Link,
  ArrowUpRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";

/* ─────────────────────────────────────
   Reusable animation variants
───────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ─────────────────────────────────────
   Count-up component
───────────────────────────────────── */
function Counter({ value, start }: { value: number; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let current = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [value, start]);

  return <span>{count.toLocaleString("en-IN")}</span>;
}

/* ─────────────────────────────────────
   Data
───────────────────────────────────── */
const stats = [
  {
    icon: Droplets,
    value: 8354,
    suffix: "+",
    label: "Water Structures Developed",
  },
  {
    icon: Sprout,
    value: 429000,
    suffix: "+",
    label: "Acres Farmland Rejuvenated",
  },
  { icon: Users, value: 151000, suffix: "+", label: "Farmers Benefited" },
  {
    icon: Building2,
    value: 580,
    suffix: "+",
    label: "Gram Panchayats Engaged",
  },
];

const compliance = [
  "CSR-1 Registered",
  "FCRA (Under Process)",
  "NGO-DARPAN Registered",
  "Registered Trust under Indian Trust Act",
  "Audited Accounts & Annual Reports Available",
];

const stories = [
  {
    quote:
      "Before Girganga Parivar Trust came to our village, we struggled every year with water shortage. Now, with the check dam and recharge borewells, our wells have water throughout the year. My crop yield has doubled.",
    name: "Ramesh Patel",
    role: "Farmer, Morbi District",
    initials: "RP",
  },
  {
    quote:
      "The PPP model is revolutionary. Instead of waiting for government projects that might take years, we partnered with Girganga Parivar Trust and completed our water conservation project in just six months.",
    name: "Meera Ben",
    role: "Village Sarpanch, Rajkot",
    initials: "MB",
  },
  {
    quote:
      "I have worked in this region for over 20 years, and I have never seen such systematic and effective water conservation work. The impact on agricultural productivity has been remarkable.",
    name: "Dr. Suresh Kumar",
    role: "Agricultural Extension Officer, Gujarat",
    initials: "SK",
  },
];

const involvement = [
  {
    num: "01",
    title: "Donate",
    desc: "Support construction or rejuvenation of water conservation structures.",
    items: [
      "₹50,000 – One recharge borewell system",
      "₹1,00,000 – Check dam contribution",
    ],
    btn: "Donate Now",
    href: "/donate",
  },
  {
    num: "02",
    title: "Volunteer",
    desc: "Join field activities, awareness campaigns, or professional volunteering.",
    items: ["Field work and construction", "Professional expertise"],
    btn: "Join Us",
    href: "/team",
  },
  {
    num: "03",
    title: "Partnership",
    desc: "Corporates, institutions, and government agencies welcome for Corporate Partnership.",
    items: [
      "Equipment and machinery",
      "Funding for projects",
      "Employee engagement",
    ],
    btn: "Partner With Us",
    href: "/partner-with-us-csr",
  },
];

/* ─────────────────────────────────────
   Page
───────────────────────────────────── */
export default function AboutPage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (statsInView) setStatsVisible(true);
  }, [statsInView]);

  /* ─────────────────────────────────────
   Animation Variants
───────────────────────────────────── */
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };

  const slideUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  function SectionPill({
    label,
    dark = false,
  }: {
    label: string;
    dark?: boolean;
  }) {
    return (
      <motion.div
        variants={slideUp}
        className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 ${
          dark
            ? "border border-white/20 bg-white/10"
            : "border border-[var(--color-primary)]/20 bg-[var(--color-tertiary)]"
        }`}
      >
        <span
          className="w-2 h-2 rounded-full"
          style={{
            background: dark ? "rgba(255,255,255,0.6)" : "var(--color-primary)",
          }}
        />
        <span
          className={`text-[11px] font-semibold uppercase tracking-widest ${
            dark ? "text-white/70" : "text-[var(--color-primary)]"
          }`}
        >
          {label}
        </span>
      </motion.div>
    );
  }

  return (
    <div className="bg-white text-gray-800">
      {/* ══════════════════════════════
          1. HERO
      ══════════════════════════════ */}
      <section className=" container flex flex-col">
        {/* Top announcement bar */}

        {/* Hero content */}
        <div className="flex-1 max-w-7xl mx-auto grid lg:grid-cols-[1fr_480px] gap-12 items-center">
          {/* Left */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)] mb-4 text-center lg:text-start"
            >
              About Girganga Parivar Trust
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-center lg:text-start"
            >
              Conserving{" "}
              <span className="text-[var(--color-primary)]">Water,</span>
              <br />
              Reviving Gujarat's Future
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-gray-500 text-sm leading-relaxed max-w-lg mb-8 text-center lg:text-start"
            >
              Girganga Parivar Trust is a dedicated organization committed to
              revitalizing India's water infrastructure, with a primary focus on
              Saurashtra, Gujarat — through the strategic repair, deepening, and
              raising of check dams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              {/* Secondary Button */}
              <a
                href="/donation"
                className="btn-primary groupinline-flex items-center gap-2 font-semibold text-base
  px-10 py-4 bg-[var(--color-primary)] text-[var(--color-secondary)] hover:text-[var(--color-primary)] flex"
              >
                <span className="relative z-10"> Support Us</span>

                <span className="relative z-10 flex">
                  <ArrowRight size={16} />
                </span>
                <span className="btn-primary-overlay"></span>
              </a>
            </motion.div>

            {/* Founder card */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 12px 32px rgba(0,0,0,0.10)",
              }}
              className="flex items-center justify-self-center lg:justify-self-start gap-4 mt-10 p-4 border border-gray-100 rounded-2xl max-w-sm cursor-default"
            >
              <motion.div
                whileHover={{
                  rotate: [0, -8, 8, 0],
                  transition: { duration: 0.4 },
                }}
                className="w-12 h-12 rounded-xl bg-[var(--color-primary)]  text-white flex items-center justify-center font-bold text-sm shrink-0"
              >
                DS
              </motion.div>
              <div className="">
                <p className="font-semibold text-sm">Shri Dilip Sakhiya</p>
                <p className="text-xs text-gray-400">
                  Founder · Girganga Parivar Trust
                </p>
                <span className="text-xs text-[var(--color-primary)] font-semibold">
                  "Waterman of India" 💧
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — image collage */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="w-full"
          >
            {/* ── MOBILE / TABLET: simple 2-col grid ── */}
            <div className="grid grid-cols-2 gap-3 lg:hidden">
              <motion.div
                variants={fadeIn}
                className="relative h-44 rounded-2xl overflow-hidden shadow-lg col-span-2"
              >
                <Image
                  src="/image/home/Slide1.png"
                  alt="Water conservation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Badge inside main image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="absolute bottom-3 left-3 bg-white rounded-xl shadow-md px-3 py-2"
                >
                  <p
                    className="text-[10px] font-bold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    🌊 Gujarat · Saurashtra
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={slideUp}
                className="relative h-36 rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src="/image/home/Slide2.png"
                  alt="Check dam"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />
              </motion.div>

              <motion.div
                variants={slideUp}
                transition={{ delay: 0.15 }}
                className="relative h-36 rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src="/image/home/Slide3.png"
                  alt="Farmers"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* ── DESKTOP: absolute collage ── */}
            <div className="relative h-[520px] hidden lg:block">
              {/* Back image — top right */}
              <motion.div
                variants={fadeIn}
                className="absolute right-0 top-0 w-[68%] h-[55%] rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/image/home/Slide2.png"
                  alt="Check dam"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />
              </motion.div>

              {/* Front image — bottom left */}
              <motion.div
                variants={slideUp}
                className="absolute left-0 bottom-0 w-[72%] h-[62%] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/image/home/Slide1.png"
                  alt="Water conservation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>

              {/* Third image — small overlap */}
              <motion.div
                variants={fadeIn}
                transition={{ delay: 0.3 }}
                className="absolute right-2 bottom-[18%] w-[32%] h-[28%] rounded-2xl overflow-hidden shadow-xl border-2 border-white"
              >
                <Image
                  src="/image/home/Slide3.png"
                  alt="Farmers"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute top-[38%] left-[16%] bg-white rounded-2xl shadow-xl px-4 py-3 z-10 border border-gray-100"
              >
                <p
                  className="text-xs font-bold"
                  style={{ color: "var(--color-primary)" }}
                >
                  🌊 Gujarat · Saurashtra
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5">
                  Since Inception
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          2. WHO WE ARE + OUR JOURNEY
      ══════════════════════════════ */}
      <section
        id="story"
        className="container"
        style={{ background: "var(--color-tertiary)" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 "
          ></motion.div>

          {/* 3-card grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Card 1 — Who We Are */}
            <motion.div
              variants={slideUp}
              whileHover={{
                y: -8,
                boxShadow: "0 24px 48px rgba(0,157,196,0.12)",
                transition: { type: "spring", stiffness: 280 },
              }}
              className="bg-white rounded-3xl p-8 flex flex-col gap-5 border border-transparent hover:border-[var(--color-primary)]/15 cursor-default transition-colors group"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0"
                style={{ background: "var(--color-tertiary)" }}
              >
                🌊
              </div>

              {/* Top rule */}
              <div
                className="w-10 h-1 rounded-full"
                style={{ background: "var(--color-primary)" }}
              />

              <div>
                <h3 className="font-bold text-lg mb-3">Who We Are</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Girganga Parivar Trust is a not-for-profit organization
                  working for sustainable water security in Gujarat, especially
                  the drought-prone Saurashtra region.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mt-3">
                  The Trust believes water conservation is not just
                  infrastructure creation, but a{" "}
                  <span
                    className="font-semibold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    people-centric movement.
                  </span>
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {["Non-Profit", "Gujarat", "Since Inception"].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium px-3 py-1 rounded-full"
                    style={{
                      background: "var(--color-tertiary)",
                      color: "var(--color-primary)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Card 2 — Our Journey */}
            <motion.div
              variants={slideUp}
              whileHover={{
                y: -8,
                boxShadow: "0 24px 48px rgba(0,157,196,0.12)",
                transition: { type: "spring", stiffness: 280 },
              }}
              className="bg-white rounded-3xl p-8 flex flex-col gap-5 border border-transparent hover:border-[var(--color-primary)]/15 cursor-default transition-colors group"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0"
                style={{ background: "var(--color-tertiary)" }}
              >
                🗺️
              </div>

              {/* Top rule */}
              <div
                className="w-10 h-1 rounded-full"
                style={{ background: "var(--color-secondary)" }}
              />

              <div>
                <h3 className="font-bold text-lg mb-3">Our Journey</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Founded under the leadership of Shri Dilip Sakhiya — popularly
                  known as the{" "}
                  <span className="font-semibold text-gray-700">
                    "Waterman of Gujarat"
                  </span>{" "}
                  — GGPT has evolved into one of India's largest grassroots
                  water conservation movements.
                </p>
              </div>

              {/* Milestone strip */}
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ background: "var(--color-primary)" }}
                >
                  DS
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800">
                    Shri Dilip Sakhiya
                  </p>
                  <p className="text-[11px] text-gray-400">
                    Founder · Waterman of Gujarat
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 — Quote (primary bg) */}
            <motion.div
              variants={slideUp}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 32px 64px rgba(0,157,196,0.30)",
                transition: { type: "spring", stiffness: 280 },
              }}
              className="rounded-3xl p-8 flex flex-col justify-between cursor-default relative overflow-hidden md:col-span-2 lg:col-span-1"
              style={{ background: "var(--color-primary)" }}
            >
              {/* Decorative circles */}
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-10"
                style={{ background: "var(--color-secondary)" }}
              />
              <div
                className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full opacity-10"
                style={{ background: "var(--color-secondary)" }}
              />

              {/* Quote mark */}
              <div className="text-7xl leading-none font-serif text-white opacity-20 mb-2 select-none">
                "
              </div>

              <p className="text-white font-semibold text-xl leading-relaxed relative z-10 flex-1">
                Water conservation is not a project, it is a responsibility.
              </p>

              {/* Author */}
              <div className="mt-8 pt-5 border-t border-white/20 flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  DS
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    Shri Dilip Sakhiya
                  </p>
                  <p className="text-white/50 text-xs">Founder, GGPT</p>
                </div>
                {/* Yellow accent dot */}
                <div
                  className="ml-auto w-3 h-3 rounded-full"
                  style={{ background: "var(--color-secondary)" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          3. LEGAL & COMPLIANCE
      ══════════════════════════════ */}
      <section className="container justify-self-center">
        <div>
          <p
            className="text-[var(--color-secondary)]
 text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3"
          >
            <span
              className="w-8 h-px bg-[var(--color-secondary)]
"
            />
            Legal &amp; Compliance
            <span
              className="w-8 h-px bg-[var(--color-secondary)]
"
            />
          </p>
        </div>
        <motion.div
          className="max-w-7xl py-5 grid lg:grid-cols-2 gap-14 items-center justify-self-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <motion.div
            variants={slideLeft}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)] mb-3">
              Transparency
            </p>
            <h2 className="text-4xl font-bold mb-4">Legal &amp; Compliance</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
              Girganga Parivar Trust maintains complete transparency and
              operates in full compliance with statutory and regulatory
              requirements under Indian law.
            </p>
          </motion.div>

          <motion.div className="space-y-3" variants={staggerContainer}>
            {compliance.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{
                  x: 10,
                  backgroundColor: "var(--color-tertiary)",
                  borderColor: "var(--color-primary)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 cursor-default"
              >
                <motion.div
                  whileHover={{
                    scale: 1.35,
                    rotate: 360,
                    transition: { duration: 0.45 },
                  }}
                >
                  <CheckCircle
                    size={18}
                    className="text-[var(--color-primary)] shrink-0"
                    strokeWidth={2}
                  />
                </motion.div>
                <span className="text-sm font-medium text-gray-700">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════
          4. IMPACT STATS
      ══════════════════════════════ */}
      <section ref={statsRef} className="container relative overflow-hidden">
        <div className="max-w-7xl relative justify-self-center">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-[var(--color-secondary)]
 text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3"
            >
              <span
                className="w-8 h-px bg-[var(--color-secondary)]
"
              />
              Our Impact
              <span
                className="w-8 h-px bg-[var(--color-secondary)]
"
              />
            </p>
            <h2 className="text-4xl font-bold">
              Changing Lives{" "}
              <span className="text-[var(--color-primary)]">Through Water</span>
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">
              Measurable transformation across Gujarat, India
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover="cardHover"
                initial="cardRest"
                animate="cardRest"
              >
                <motion.div
                  variants={{
                    cardRest: {
                      y: 0,
                      scale: 1,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    },
                    cardHover: {
                      y: -12,
                      scale: 1.03,
                      boxShadow: "0 28px 56px rgba(0,0,0,0.14)",
                      transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                      },
                    },
                  }}
                  className="group relative bg-white rounded-2xl p-7 border border-transparent hover:border-[var(--color-primary)]/40 cursor-default"
                >
                  <motion.div
                    variants={{
                      cardRest: {
                        backgroundColor: "var(--color-tertiary)",
                        rotate: 0,
                      },
                      cardHover: {
                        backgroundColor: "var(--color-primary)",
                        rotate: 8,
                        transition: { duration: 0.3 },
                      },
                    }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  >
                    <motion.div
                      variants={{
                        cardRest: { color: "var(--color-primary)" },
                        cardHover: { color: "#ffffff" },
                      }}
                    >
                      <stat.icon size={22} />
                    </motion.div>
                  </motion.div>

                  <h3 className="text-3xl font-bold">
                    <Counter value={stat.value} start={statsVisible} />
                    {stat.suffix}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">{stat.label}</p>

                  <motion.div
                    variants={{
                      cardRest: { opacity: 0 },
                      cardHover: { opacity: 1, transition: { duration: 0.3 } },
                    }}
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/8 to-transparent pointer-events-none"
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          5. STORY / MOVEMENT
      ══════════════════════════════ */}
      <section className="containers py-28">
        <motion.div
          className="grid lg:grid-cols-2 gap-14 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Story image */}
          <motion.div
            variants={slideLeft}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover="imgHover"
            initial="imgRest"
            animate="imgRest"
            className="relative rounded-3xl overflow-hidden h-[440px] cursor-pointer"
          >
            <motion.div
              variants={{
                imgRest: { scale: 1 },
                imgHover: {
                  scale: 1.06,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="w-full h-full"
            >
              <Image
                src="/image/home/Slide4.png"
                alt="Water conservation story"
                width={900}
                height={600}
                className="object-cover w-full h-full"
              />
            </motion.div>

            <motion.div
              variants={{
                imgRest: { opacity: 1 },
                imgHover: { opacity: 0.8, transition: { duration: 0.4 } },
              }}
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
            />

            {/* Text slides up on hover */}
            <motion.div
              variants={{
                imgRest: { y: 0 },
                imgHover: {
                  y: -8,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
              className="absolute bottom-8 left-8 text-white max-w-sm"
            >
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-2">
                Our Story
              </p>
              <h3 className="text-2xl font-semibold leading-snug mb-2">
                Reviving Water Scarce Villages
              </h3>
              <p className="text-sm text-gray-200">
                Repairing and deepening check dams across Saurashtra has helped
                thousands of villages revive groundwater and agriculture.
              </p>
            </motion.div>

            {/* Ring border on hover */}
            <motion.div
              variants={{
                imgRest: { opacity: 0 },
                imgHover: { opacity: 1, transition: { duration: 0.3 } },
              }}
              className="absolute inset-0 rounded-3xl ring-2 ring-[var(--color-primary)]/60 pointer-events-none"
            />
          </motion.div>

          {/* Timeline */}
          <motion.div className="space-y-8" variants={staggerContainer}>
            <motion.div variants={staggerItem}>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)] mb-4">
                How We Work
              </p>
              <h2 className="text-4xl font-bold leading-tight">
                A Movement Built
                <br />
                on Three Pillars
              </h2>
            </motion.div>

            {[
              {
                n: "01",
                title: "Public-Private-People Model",
                desc: "Collaboration between communities, donors, and government enables faster water conservation development across the region.",
              },
              {
                n: "02",
                title: "Community Participation",
                desc: "Villagers actively participate in rebuilding check dams and restoring water bodies for long-term sustainability.",
              },
              {
                n: "03",
                title: "Sustainable Impact",
                desc: "The movement improves groundwater levels, agricultural productivity, and livelihoods across Gujarat.",
              },
            ].map((item) => (
              <motion.div
                key={item.n}
                variants={staggerItem}
                whileHover={{
                  x: 6,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="flex gap-5 items-start cursor-default"
              >
                <motion.div
                  whileHover={{
                    scale: 1.18,
                    rotate: 10,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-xs shrink-0"
                >
                  {item.n}
                </motion.div>
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════
          6. YOUR CONTRIBUTION IS IMPORTANT
      ══════════════════════════════ */}
      <section className="bg-[var(--color-tertiary)] py-0 overflow-hidden">
        <motion.div
          className="containers grid lg:grid-cols-2 gap-0 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Image with zoom */}
          <motion.div
            variants={slideLeft}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover="imgHover"
            initial="imgRest"
            animate="imgRest"
            className="relative min-h-[340px] rounded-l-3xl overflow-hidden hidden lg:block cursor-pointer"
          >
            <motion.div
              variants={{
                imgRest: { scale: 1 },
                imgHover: {
                  scale: 1.07,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="absolute inset-0"
            >
              <Image
                src="/image/home/Slide1.png"
                alt="Your contribution matters"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              variants={{
                imgRest: { opacity: 1 },
                imgHover: { opacity: 0.6, transition: { duration: 0.4 } },
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-tertiary)]/20"
            />
          </motion.div>

          {/* Text panel */}
          <motion.div
            variants={slideRight}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-[var(--color-primary)] rounded-3xl lg:rounded-l-none p-12 flex flex-col justify-center"
          >
            <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
              Make a Difference
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-snug mb-5">
              Your Contribution
              <br />
              Is Important
            </h2>
            <p className="text-white/75 text-sm leading-relaxed mb-8">
              Every rupee you donate directly supports the vital work of
              repairing and enhancing check dams across Saurashtra, ensuring a
              more water-secure future for our communities in Gujarat.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-6 "
            >
              {/* Secondary Button */}
              <a
                href="/donate"
                className="btn-secondary-outline groupinline-flex items-center gap-2  font-semibold text-base
            px-10 py-4 bg-[var(--color-primary)]"
              >
                <span className="relative z-10 ">Know More</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                  →
                </span>
                <span className="btn-secondary-outline-overlay"></span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════
          7. SUCCESS STORIES
      ══════════════════════════════ */}
      <section className="containers py-24">
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)] mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl font-bold">Success Stories</h2>
          <p className="text-gray-400 text-sm mt-3 max-w-lg mx-auto">
            Real voices from communities transformed through water conservation
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {stories.map((s, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: { type: "spring", stiffness: 260, damping: 18 },
              }}
              className="group rounded-2xl p-8 border border-gray-100 flex flex-col gap-5 cursor-default bg-white hover:bg-[var(--color-primary)] hover:border-transparent transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="w-fit">
                <Quote
                  size={28}
                  className="text-[var(--color-primary)]/30 group-hover:text-white/40 transition"
                />
              </div>

              {/* Quote text */}
              <p className="text-sm leading-relaxed flex-1 text-gray-500 group-hover:text-white/90 transition">
                {s.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 group-hover:border-white/20 transition">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 bg-[var(--color-tertiary)] text-[var(--color-primary)] group-hover:bg-white/20 group-hover:text-white transition">
                  {s.initials}
                </div>

                <div>
                  <p className="font-semibold text-sm text-gray-800 group-hover:text-white transition">
                    {s.name}
                  </p>
                  <p className="text-xs mt-0.5 text-gray-400 group-hover:text-white/60 transition">
                    {s.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════
          8. TRUST VOLUNTEERS / GET INVOLVED
      ══════════════════════════════ */}
      <section className="bg-[var(--color-tertiary)] py-24">
        <div className="containers">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)] mb-3">
              Get Involved
            </p>
            <h2 className="text-4xl font-bold">Trust Volunteers</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
              We are deeply grateful for our passionate volunteers across
              Gujarat. Their dedication helps build a water-secure Saurashtra.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {involvement.map((card) => (
              <motion.div
                key={card.num}
                variants={staggerItem}
                whileHover="cardHover"
                initial="cardRest"
                animate="cardRest"
              >
                <motion.div
                  variants={{
                    cardRest: {
                      y: 0,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      borderColor: "rgb(243 244 246)",
                    },
                    cardHover: {
                      y: -12,
                      boxShadow: "0 28px 56px rgba(0,0,0,0.13)",
                      borderColor: "var(--color-primary)",
                      transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                      },
                    },
                  }}
                  className="bg-white rounded-2xl p-8 border flex flex-col h-full cursor-default"
                >
                  <motion.p
                    variants={{
                      cardRest: { color: "var(--color-tertiary)" },
                      cardHover: {
                        color: "var(--color-primary)",
                        transition: { duration: 0.25 },
                      },
                    }}
                    className="text-5xl font-black leading-none mb-4 select-none"
                  >
                    {card.num}
                  </motion.p>

                  <h3 className="font-bold text-xl mb-3">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {card.desc}
                  </p>

                  <ul className="space-y-2 mb-8 flex-1">
                    {card.items.map((item) => (
                      <motion.li
                        key={item}
                        variants={{
                          cardRest: { x: 0 },
                          cardHover: {
                            x: 5,
                            transition: { type: "spring", stiffness: 300 },
                          },
                        }}
                        className="flex items-start gap-2 text-sm text-gray-500"
                      >
                        <span className="text-[var(--color-primary)] font-bold mt-0.5">
                          →
                        </span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.a
                    whileHover={{
                      scale: 1.06,
                      boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    href={card.href}
                    className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition w-fit"
                  >
                    {card.btn} <ArrowRight size={14} />
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          9. CTA BANNER
      ══════════════════════════════ */}
      <motion.section
        className="bg-[var(--color-primary)] text-white py-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-4">
          Join the Movement
        </p>
        <h2 className="text-3xl font-bold mb-4">
          Support the Water Conservation Movement
        </h2>
        <p className="text-white/70 text-sm mb-8 max-w-md mx-auto">
          Together we can restore water security for millions of families across
          drought-prone Saurashtra.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-6 justify-center"
        >
          {/* Secondary Button */}
          <a
            href="/donate"
            className="btn-secondary-outline groupinline-flex items-center gap-2  font-semibold text-base
            px-10 py-4 bg-[var(--color-primary)]"
          >
            <span className="relative z-10">Donate Now</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform">
              →
            </span>
            <span className="btn-secondary-outline-overlay"></span>
          </a>
        </motion.div>
      </motion.section>
    </div>
  );
}
