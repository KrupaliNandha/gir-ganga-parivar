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

  return (
    <div className="bg-white text-gray-800">
      {/* ══════════════════════════════
          1. HERO
      ══════════════════════════════ */}
      <section className="containers py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)] mb-4"
          >
            About Girganga Parivar Trust
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold leading-tight mb-6"
          >
            Conserving{" "}
            <span className="text-[var(--color-primary)]">Water,</span>
            <br />
            Reviving Gujarat's Future
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-gray-500 text-sm leading-relaxed max-w-lg mb-8"
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
            className="flex flex-wrap gap-6 "
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
            className="flex items-center gap-4 mt-10 p-4 border border-gray-100 rounded-2xl max-w-sm cursor-default"
          >
            <motion.div
              whileHover={{
                rotate: [0, -8, 8, 0],
                transition: { duration: 0.4 },
              }}
              className="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-sm shrink-0"
            >
              DS
            </motion.div>
            <div>
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

        {/* Right image grid */}
        <motion.div
          className="grid grid-cols-2 gap-4 h-[420px]"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Tall image */}
          <motion.div
            variants={slideRight}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover="imgHover"
            initial="imgRest"
            animate="imgRest"
            className="row-span-2 rounded-3xl overflow-hidden relative cursor-pointer"
          >
            <motion.div
              variants={{
                imgRest: { scale: 1 },
                imgHover: {
                  scale: 1.07,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="w-full h-full"
            >
              <Image
                src="/image/home/Slide1.png"
                alt="Water conservation work"
                width={500}
                height={600}
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.div
              variants={{
                imgRest: { opacity: 0 },
                imgHover: { opacity: 1, transition: { duration: 0.3 } },
              }}
              className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10 rounded-3xl pointer-events-none"
            />
            <motion.div
              variants={{
                imgRest: { opacity: 0 },
                imgHover: { opacity: 1, transition: { duration: 0.3 } },
              }}
              className="absolute inset-0 rounded-3xl ring-2 ring-[var(--color-primary)]/50 pointer-events-none"
            />
          </motion.div>

          {/* Top-right image */}
          <motion.div
            variants={slideRight}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            whileHover="imgHover"
            initial="imgRest"
            animate="imgRest"
            className="rounded-3xl overflow-hidden relative cursor-pointer"
          >
            <motion.div
              variants={{
                imgRest: { scale: 1 },
                imgHover: {
                  scale: 1.09,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="w-full h-full"
            >
              <Image
                src="/image/home/Slide2.png"
                alt="Check dam"
                width={400}
                height={200}
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.div
              variants={{
                imgRest: { opacity: 0 },
                imgHover: { opacity: 1, transition: { duration: 0.3 } },
              }}
              className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/25 to-transparent rounded-3xl pointer-events-none"
            />
            <motion.div
              variants={{
                imgRest: { opacity: 0 },
                imgHover: { opacity: 1, transition: { duration: 0.3 } },
              }}
              className="absolute inset-0 rounded-3xl ring-2 ring-[var(--color-primary)]/50 pointer-events-none"
            />
          </motion.div>

          {/* Bottom-right image */}
          <motion.div
            variants={slideRight}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            whileHover="imgHover"
            initial="imgRest"
            animate="imgRest"
            className="rounded-3xl overflow-hidden relative cursor-pointer"
          >
            <motion.div
              variants={{
                imgRest: { scale: 1 },
                imgHover: {
                  scale: 1.09,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="w-full h-full"
            >
              <Image
                src="/image/home/Slide3.png"
                alt="Farmers"
                width={400}
                height={200}
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.div
              variants={{
                imgRest: { opacity: 0 },
                imgHover: { opacity: 1, transition: { duration: 0.3 } },
              }}
              className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/25 to-transparent rounded-3xl pointer-events-none"
            />
            <motion.div
              variants={{
                imgRest: { opacity: 0 },
                imgHover: { opacity: 1, transition: { duration: 0.3 } },
              }}
              className="absolute inset-0 rounded-3xl ring-2 ring-[var(--color-primary)]/50 pointer-events-none"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════
          2. WHO WE ARE + OUR JOURNEY
      ══════════════════════════════ */}
      <section className="bg-[var(--color-tertiary)] py-20">
        <motion.div
          className="containers grid lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {/* Card 1 */}
          <motion.div
            variants={staggerItem}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              transition: { type: "spring", stiffness: 260 },
            }}
            className="bg-white rounded-2xl p-8 border border-transparent hover:border-[var(--color-primary)]/20 cursor-default"
          >
            <motion.div
              whileHover={{
                rotate: 15,
                scale: 1.2,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="w-10 h-10 rounded-xl bg-[var(--color-tertiary)] flex items-center justify-center mb-5 w-fit"
            >
              <span className="text-lg">🌊</span>
            </motion.div>
            <h3 className="font-bold text-lg mb-3">Who We Are</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Girganga Parivar Trust is a not-for-profit organization working
              for sustainable water security in Gujarat, especially the
              drought-prone Saurashtra region.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mt-3">
              The Trust believes that water conservation is not just
              infrastructure creation, but a{" "}
              <span className="text-[var(--color-primary)] font-semibold">
                people-centric movement.
              </span>
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={staggerItem}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              transition: { type: "spring", stiffness: 260 },
            }}
            className="bg-white rounded-2xl p-8 border border-transparent hover:border-[var(--color-primary)]/20 cursor-default"
          >
            <motion.div
              whileHover={{
                rotate: -12,
                scale: 1.2,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="w-10 h-10 rounded-xl bg-[var(--color-tertiary)] flex items-center justify-center mb-5 w-fit"
            >
              <span className="text-lg">🗺️</span>
            </motion.div>
            <h3 className="font-bold text-lg mb-3">Our Journey</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Founded under the leadership of Shri Dilip Sakhiya — popularly
              known as the{" "}
              <span className="font-semibold text-gray-700">
                "Waterman of Gujarat"
              </span>{" "}
              — GGPT has evolved into one of India's largest grassroots water
              conservation movements.
            </p>
          </motion.div>

          {/* Card 3 — quote */}
          <motion.div
            variants={staggerItem}
            whileHover={{
              y: -10,
              scale: 1.02,
              boxShadow: "0 28px 56px rgba(0,0,0,0.20)",
              transition: { type: "spring", stiffness: 260 },
            }}
            className="bg-[var(--color-primary)] rounded-2xl p-8 flex flex-col justify-between cursor-default"
          >
            <motion.div
              whileHover={{
                rotate: 12,
                scale: 1.18,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="w-fit"
            >
              <Quote size={32} className="text-white opacity-30 mb-4" />
            </motion.div>
            <p className="text-white font-semibold text-lg leading-relaxed">
              "Water conservation is not a project, it is a responsibility."
            </p>
            <p className="text-white/60 text-sm mt-6 font-medium">
              — Shri Dilip Sakhiya
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════
          3. LEGAL & COMPLIANCE
      ══════════════════════════════ */}
      <section className="containers py-20">
        <motion.div
          className="grid lg:grid-cols-2 gap-14 items-center"
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
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
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
      <section
        ref={statsRef}
        className="relative bg-[var(--color-tertiary)] py-24 overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[var(--color-secondary)] opacity-10 rounded-full blur-3xl" />

        <div className="containers relative">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-[var(--color-primary)] mb-3">
              Our Impact
            </p>
            <h2 className="text-4xl font-bold">Changing Lives Through Water</h2>
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
                className="btn-secondary-outline groupinline-flex items-center gap-2  font-semibold text-sm lg:text-base
            px-8 py-4 bg-[var(--color-primary)]"
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
                boxShadow:
                  i === 0
                    ? "0 28px 56px rgba(0,0,0,0.22)"
                    : "0 20px 44px rgba(0,0,0,0.12)",
                transition: { type: "spring", stiffness: 260, damping: 18 },
              }}
              className={`rounded-2xl p-8 border flex flex-col gap-5 cursor-default ${
                i === 0
                  ? "bg-[var(--color-primary)] border-transparent"
                  : "bg-white border-gray-100 hover:border-[var(--color-primary)]/40"
              }`}
            >
              <motion.div
                whileHover={{
                  y: -4,
                  rotate: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="w-fit"
              >
                <Quote
                  size={28}
                  className={
                    i === 0 ? "text-white/25" : "text-[var(--color-primary)]/20"
                  }
                />
              </motion.div>

              <p
                className={`text-sm leading-relaxed flex-1 ${i === 0 ? "text-white/85" : "text-gray-500"}`}
              >
                {s.quote}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <motion.div
                  whileHover={{
                    scale: 1.18,
                    rotate: 6,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                    i === 0
                      ? "bg-white/20 text-white"
                      : "bg-[var(--color-tertiary)] text-[var(--color-primary)]"
                  }`}
                >
                  {s.initials}
                </motion.div>
                <div>
                  <p
                    className={`font-semibold text-sm ${i === 0 ? "text-white" : "text-gray-800"}`}
                  >
                    {s.name}
                  </p>
                  <p
                    className={`text-xs mt-0.5 ${i === 0 ? "text-white/50" : "text-gray-400"}`}
                  >
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
