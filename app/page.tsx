"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import Link from "next/link";
import { GiRibbonMedal } from "react-icons/gi";
import { CircleCheckBig } from "lucide-react";
import { MdOutlineWaterDrop, MdPeople, MdEmojiEvents } from "react-icons/md";
import SmoothScroll from "../Component/SmothScrolling";

/* ─────────────────────────────────────────────
   COUNT UP
───────────────────────────────────────────── */
interface CountUpProps {
  value: number;
  suffix?: string;
}
const CountUp: React.FC<CountUpProps> = ({ value, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(
    count,
    (latest: number): string => Math.round(latest).toLocaleString() + suffix,
  );
  useEffect(() => {
    const animation = animate(count, value, { duration: 2, ease: "easeOut" });
    return animation.stop;
  }, [count, value]);
  return <motion.span>{rounded}</motion.span>;
};

/* ─────────────────────────────────────────────
   SLIDER DATA
───────────────────────────────────────────── */
interface Stat {
  num: number;
  label: string;
  suffix?: string;
}
interface Slide {
  id: number;
  tag: string;
  headline: [string, string];
  sub: string;
  cta: { label: string; href: string };
  bg: string;
  stats?: Stat[];
}

const slides: Slide[] = [
  {
    id: 1,
    tag: "Gir Ganga Parivar Trust · Water Conservation",
    headline: ["Solution For", "Generations"],
    sub: "Reviving rivers, recharging groundwater, and securing water for communities across drought-prone Gujarat.",
    cta: { label: "Discover More", href: "/our-work" },
    bg: "/image/home/Slide1.png",
    stats: [
      { num: 8354, label: "Water Structures", suffix: "+" },
      { num: 580, label: "Gram Panchayats", suffix: "+" },
      { num: 18, label: "CSR Excavators", suffix: "+" },
    ],
  },
  {
    id: 2,
    tag: "Our Mission · 1,11,111 Structures",
    headline: ["Every Drop", "Counts"],
    sub: "Not a single drop of rainwater should flow into the sea. We are building 1,11,111 check dams and bore recharge systems across Gujarat.",
    cta: { label: "Explore Impact", href: "/impact" },
    bg: "/image/home/Slide2.png",
  },
  {
    id: 3,
    tag: "Community · Corporates · Government",
    headline: ["Reviving Rivers,", "Restoring Life"],
    sub: "A decade of grassroots partnership with communities, CSR partners, and government agencies restoring watersheds and improving biodiversity in Saurashtra.",
    cta: { label: "Partner with Us", href: "/partner-with-us-csr" },
    bg: "/image/home/Slide3.png",
  },
  {
    id: 4,
    tag: "Global CSR & ESG Awards 2025 Winner",
    headline: ["Water Security", "For All"],
    sub: "Recognised globally for our innovative PPP model. Partner with Girganga Parivar Trust to transform arid regions into water-abundant landscapes.",
    cta: { label: "Support Now", href: "/donation" },
    bg: "/image/home/Slide4.png",
  },
];

const INTERVAL_MS = 5000;

const ChevronUp = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-[18px] h-[18px]"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);
const ChevronDown = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-[18px] h-[18px]"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const slideTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef(0);

  const stopAll = () => {
    if (slideTimer.current) clearInterval(slideTimer.current);
    if (progressTimer.current) clearInterval(progressTimer.current);
  };

  const startAuto = useCallback(() => {
    stopAll();
    progressRef.current = 0;
    setProgress(0);
    const TICK = 50;
    const step = (100 / INTERVAL_MS) * TICK;
    progressTimer.current = setInterval(() => {
      progressRef.current = Math.min(progressRef.current + step, 100);
      setProgress(progressRef.current);
    }, TICK);
    slideTimer.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      progressRef.current = 0;
      setProgress(0);
    }, INTERVAL_MS);
  }, []);

  useEffect(() => {
    startAuto();
    return stopAll;
  }, [startAuto]);

  const goTo = (index: number) => {
    setCurrent(((index % slides.length) + slides.length) % slides.length);
    startAuto();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(current + 1);
      if (e.key === "ArrowLeft") goTo(current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const slide = slides[current];
  const item = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.28 } },
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Outfit:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');
        .font-caveat   { font-family: 'Caveat', cursive; }
        .torn-bg::before {
          content: '';
          position: absolute;
          top: -24px; left: 0; right: 0;
          height: 48px;
          background: inherit;
          clip-path: polygon(0 60%, 2% 40%, 5% 55%, 8% 35%, 12% 50%, 16% 30%, 20% 48%, 25% 28%, 30% 46%, 35% 26%, 40% 44%, 45% 24%, 50% 42%, 55% 22%, 60% 40%, 65% 20%, 70% 38%, 75% 18%, 80% 36%, 85% 16%, 90% 34%, 94% 14%, 97% 32%, 100% 20%, 100% 100%, 0 100%);
        }
      `}</style>

      <SmoothScroll>
        {/* ══════════════════════════════════════════════
            SECTION 1 — HERO SLIDER
        ══════════════════════════════════════════════ */}
        <section className="font-outfit relative w-full min-h-[600px] sm:min-h-[700px] overflow-hidden p-4 sm:p-6 md:p-10">
          {/* Background crossfade */}
          <AnimatePresence>
            <motion.div
              key={slide.id + "-bg"}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.95, ease: [0.77, 0, 0.175, 1] }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(135deg,rgba(18,52,48,0.72) 0%,rgba(10,35,32,0.55) 60%,rgba(0,0,0,0.30) 100%),url('${slide.bg}')`,
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Slide content */}
          {/* mobile: full width with safe padding; tablet+: 75% */}
          <div className="relative z-[2] h-full flex flex-col justify-center px-8 sm:px-[6vw] w-full sm:w-[85%] md:w-[75%] py-16 sm:py-0">
            <AnimatePresence mode="wait">
              <motion.div key={slide.id + "-content"}>
                {/* Tag */}
                <motion.span
                  {...item(0.3)}
                  className="inline-block text-[10px] sm:text-[clamp(10px,1.1vw,13px)] font-medium tracking-[0.18em] sm:tracking-[0.22em] uppercase text-white/85 mb-3 sm:mb-[18px] pb-2 sm:pb-[10px] border-b border-white/35"
                >
                  {slide.tag}
                </motion.span>

                {/* Headline */}
                <motion.h1
                  {...item(0.45)}
                  className="font-caveat text-[clamp(32px,8vw,82px)] sm:text-[clamp(38px,6.5vw,82px)] font-bold text-white leading-[1.12] mb-4 sm:mb-7"
                >
                  {slide.headline[0]} {slide.headline[1]}
                </motion.h1>

                {/* Sub */}
                <motion.p
                  {...item(0.6)}
                  className="text-[clamp(12px,3.5vw,16px)] sm:text-[clamp(13px,1.3vw,16px)] font-light text-white/80 w-full sm:w-[85%] md:w-[75%] leading-[1.7] mb-6 sm:mb-[42px]"
                >
                  {slide.sub}
                </motion.p>

                {/* CTA */}
                <motion.div
                  {...item(0.75)}
                  className="flex items-center gap-4 sm:gap-[25px]"
                >
                  <Link href={slide.cta.href}>
                    <span className="mt-4 sm:mt-10 group relative inline-block bg-[var(--color-secondary)] text-[var(--color-greenish)] hover:text-white text-[10px] sm:text-[clamp(10px,1vw,12px)] font-semibold tracking-[0.14em] sm:tracking-[0.16em] uppercase px-6 sm:px-9 py-3 sm:py-4 rounded-[3px] overflow-hidden cursor-pointer hover:-translate-y-0.5 transition-transform duration-300">
                      <span className="relative z-10">{slide.cta.label}</span>
                      <span className="absolute inset-0 bg-[var(--color-greenish)] -translate-x-[110%] group-hover:translate-x-[110%] transition-transform duration-1000" />
                    </span>
                  </Link>
                  {/* Arrow image — hidden on very small screens */}
                  <div className="hidden xs:block sm:block top-50">
                    <img
                      className="h-12 w-12 sm:h-20 sm:w-20"
                      src="/image/home/main-slider__button-arrow.png"
                      alt=""
                    />
                  </div>
                </motion.div>

                {/* Stats */}
                {slide.stats && (
                  <motion.div
                    {...item(0.9)}
                    className="flex flex-wrap gap-5 sm:gap-10 mt-8 sm:mt-[50px]"
                  >
                    {slide.stats.map((stat, i) => (
                      <React.Fragment key={stat.label}>
                        {i > 0 && (
                          <div className="w-px bg-white/20 self-stretch hidden xs:block" />
                        )}
                        <div>
                          <p className="font-caveat text-[clamp(22px,6vw,42px)] sm:text-[clamp(26px,3.2vw,42px)] font-bold text-[var(--color-secondary)] leading-none">
                            <CountUp
                              value={stat.num}
                              suffix={stat.suffix || ""}
                            />
                          </p>
                          <p className="text-[9px] sm:text-[clamp(9px,0.9vw,11px)] font-normal tracking-[0.1em] text-white/65 uppercase mt-1">
                            {stat.label}
                          </p>
                        </div>
                      </React.Fragment>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot nav */}
          <div className="absolute left-3 sm:left-7 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full border-0 p-0 cursor-pointer transition-all duration-300 ${
                  i === current
                    ? "bg-white scale-[1.3]"
                    : "bg-white/35 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* Arrow nav — hidden on mobile */}
          <div className="hidden sm:flex absolute right-8 bottom-14 z-10 flex-col gap-2.5">
            {[
              { dir: -1 as const, label: "Previous", Icon: ChevronUp },
              { dir: 1 as const, label: "Next", Icon: ChevronDown },
            ].map(({ dir, label, Icon }) => (
              <button
                key={label}
                aria-label={label}
                onClick={() => goTo(current + dir)}
                className="w-11 h-11 rounded-full border border-white/50 bg-white/[0.08] backdrop-blur-md text-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)] hover:text-[var(--color-primary)] hover:scale-[1.08]"
              >
                <Icon />
              </button>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════
            SECTION 2 — INTRO / MISSION & VISION
        ══════════════════════════════ */}
        <section className="bg-[var(--color-tertiary)]/50 py-12 sm:py-16 md:py-24 px-4 overflow-hidden">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* LEFT — circular image */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative flex items-center justify-center mx-auto w-full max-w-[420px] lg:max-w-none"
                  style={{ minHeight: 320 }}
                >
                  {/* outer dashed ring */}
                  <div className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] rounded-full border-2 border-dashed border-emerald-200 animate-[spin_30s_linear_infinite]" />
                  {/* inner ring */}
                  <div className="absolute w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] md:w-[360px] md:h-[360px] rounded-full border border-emerald-100" />

                  {/* main circle image */}
                  <div className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden shadow-2xl shadow-emerald-900/20 border-4 border-white z-10">
                    <img
                      src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
                      alt="Water conservation work"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Award image — top left */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                    className="absolute top-0 left-0 z-20"
                  >
                    <img
                      className="rounded-full w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[250px] md:h-[250px]"
                      src="/image/home/Award_img.png"
                      alt=""
                    />
                  </motion.div>

                  {/* Stat badge — top right */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                    className="absolute top-2 right-2 sm:top-6 sm:right-4 md:top-8 md:right-8 z-20 w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] rounded-full bg-[var(--color-primary)] text-white flex flex-col items-center justify-center shadow-xl shadow-emerald-600/30"
                  >
                    <span className="font-playfair text-lg sm:text-xl md:text-2xl font-bold leading-none">
                      90%
                    </span>
                    <span className="text-[8px] sm:text-[9px] font-semibold tracking-wide text-center leading-tight mt-0.5 px-1">
                      Water
                      <br />
                      Restored
                    </span>
                  </motion.div>

                  {/* Stat badge — bottom left */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.55, type: "spring" }}
                    className="absolute bottom-2 left-2 sm:bottom-6 sm:left-4 md:bottom-8 md:left-8 z-20 w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] flex flex-col items-center justify-center shadow-xl shadow-yellow-500/30"
                  >
                    <span className="font-playfair text-lg sm:text-xl md:text-2xl font-bold leading-none">
                      580+
                    </span>
                    <span className="text-[8px] sm:text-[9px] font-semibold tracking-wide text-center leading-tight mt-0.5 px-1">
                      Villages
                      <br />
                      Covered
                    </span>
                  </motion.div>
                </motion.div>

                {/* RIGHT — content */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="space-y-5 sm:space-y-6 text-center lg:text-start"
                >
                  {/* Heading */}
                  <h2
                    className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                    
                  >
                    Mission &amp; Vision <br />
                    <span className="text-[var(--color-primary)]">For Gujarat</span>
                  </h2>

                  <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                    Girganga Parivar Trust (GGPT) is a Gujarat-based
                    organization working at scale to address water scarcity
                    through community-led conservation structures across
                    drought-prone regions.
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-3">
                    {[
                      "Building 1,11,111 check dams & bore recharge systems",
                      "Community-led grassroots water conservation",
                      "SDG 6 (Clean Water) & SDG 15 (Life on Land) aligned",
                    ].map((point) => (
                      <li
                        key={point}
                        className="flex items-center justify-center lg:justify-start gap-3 text-sm text-gray-700"
                      >
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-[var(--color-secondary)] flex items-center justify-center shrink-0">
                          <CircleCheckBig className="w-3 h-3 text-[var(--color-primary)]" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="w-full h-px bg-gray-100" />

                  {/* Mission + Vision cards */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-emerald-50 rounded-2xl p-4 sm:p-5 border border-emerald-100">
                      <div className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white font-playfair font-bold text-lg mb-3">
                        M
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2 text-sm">
                        Our Mission
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Repair, deepen, and construct 1,11,111 water
                        conservation structures to maximize rainwater harvesting
                        across Gujarat.
                      </p>
                    </div>
                    <div className="bg-yellow-50 rounded-2xl p-4 sm:p-5 border border-yellow-100">
                      <div className="w-10 h-10 bg-[var(--color-secondary)] rounded-lg flex items-center justify-center text-[var(--color-primary)] font-playfair font-bold text-lg mb-3">
                        V
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2 text-sm">
                        Our Vision
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Prevent every raindrop from flowing to sea — transform
                        arid regions into water-abundant, fertile landscapes.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            SECTION 3 — EXPLORE IMPACT
        ══════════════════════════════ */}
        <section className="">
          
            <div className="container">
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8 sm:mb-12"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=40&h=40&q=80&fit=crop"
                    alt=""
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <span className="text-[var(--color-primary)] text-xs font-bold tracking-[0.2em] uppercase ">
                    Our Impact Areas
                  </span>
                </div>
                <h2
                  className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
                >
                  Explore Our Impact
                </h2>
              </motion.div>

              {/* 4-col image cards */}
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 mb-8 sm:mb-12">
                {[
                  {
                    img: "https://images.unsplash.com/photo-1606166325683-e6deb697d301?w=400&q=80",
                    label: "Government Partnership",
                    sub: "Ministry of Water, Govt. of India",
                    Icon: GiRibbonMedal,
                  },
                  {
                    img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80",
                    label: "CSR & ESG Awards",
                    sub: "Global Awards 2025 Winner",
                    Icon: MdEmojiEvents,
                  },
                  {
                    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80",
                    label: "Community Driven",
                    sub: "580+ Gram Panchayats",
                    Icon: MdPeople,
                  },
                  {
                    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80",
                    label: "Support A Structure",
                    sub: "Fund a check dam today",
                    Icon: MdOutlineWaterDrop,
                  },
                ].map((card, i) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-xl mb-3 aspect-[4/3]">
                      <img
                        src={card.img}
                        alt={card.label}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/40 transition-colors duration-300 flex items-center justify-center">
                        <card.Icon className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <h4 className="font-playfair font-bold text-gray-900 text-sm leading-snug group-hover:text-[var(--color-primary)] transition-colors">
                      {card.label}
                    </h4>
                    <p className="text-gray-400 text-xs mt-0.5">{card.sub}</p>
                  </motion.div>
                ))}
              </div>

              {/* ── CTA buttons ── */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-6 justify-center"
              >
                <a
                  href="/partner-with-us-csr"
                  className="group relative bg-[var(--color-secondary)] text-black font-semibold px-10 py-4 rounded-lg shadow-lg shadow-black/25
                   hover:text-white text-base overflow-hidden hover:-translate-y-0.5 transition-transform duration-300 inline-flex items-center gap-2"
                >
                  <span className="relative z-10">Partner With Us (CSR)</span>
                  <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  <span className="absolute inset-0 bg-[var(--color-primary)] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
                <a
                  href="/support-a-structure"
                  className="group border-2 border-[var(--color-primary)] text-[var(--color-primary)] 
                  font-semibold px-10 py-4 rounded-lg shadow-lg shadow-black/25 text-base hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  Support A Structure
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </motion.div>
            </div>
        
        </section>
      </SmoothScroll>
    </>
  );
};

export default HeroSection;
