"use client";

import { CheckCircle } from "lucide-react";
import { Building2, Droplets, Sprout, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import SmoothScroll from "../../Component/SmothScrolling";

/* Section - 3 */

const STATS = [
  {
    icon: Droplets,
    number: 8354,
    suffix: "+",
    label: "Water structures developed",
    accent: "#10b981",
    bg: "from-emerald-50 to-white",
    border: "border-emerald-100",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: Sprout,
    number: 429000,
    suffix: "+",
    label: "Acres farmland rejuvenated",
    accent: "#059669",
    bg: "from-teal-50 to-white",
    border: "border-teal-100",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    icon: Users,
    number: 151000,
    suffix: "+",
    label: "Farmers benefited",
    accent: "#047857",
    bg: "from-green-50 to-white",
    border: "border-green-100",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
  },
  {
    icon: Building2,
    number: 580,
    suffix: "+",
    label: "Gram Panchayats engaged",
    accent: "#065f46",
    bg: "from-emerald-50 to-white",
    border: "border-emerald-200",
    iconBg: "bg-emerald-200",
    iconColor: "text-emerald-800",
  },
];

/* ===========================
   COUNT UP HOOK
=========================== */

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * target));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

/* ===========================
   STAT CARD
=========================== */

function StatCard({
  stat,
  index,
  inView,
}: {
  stat: (typeof STATS)[0];
  index: number;
  inView: boolean;
}) {
  const count = useCountUp(stat.number, 2000, inView);
  const formatted =
    stat.number >= 1000 ? count.toLocaleString("en-IN") : count.toString();

  return (
    <div
      className={`relative group bg-gradient-to-br ${stat.bg} border-2 ${stat.border}
      rounded-tr-4xl rounded-bl-4xl p-8 overflow-hidden transition-all duration-500
      hover:shadow-xl hover:-translate-y-1`}
      style={{
        transitionDelay: `${index * 80}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
      }}
    >
      <div className="flex items-start mb-6">
        <div
          className={`w-12 h-12 ${stat.iconBg} rounded-xl flex items-center justify-center`}
        >
          <stat.icon size={22} className={stat.iconColor} strokeWidth={1.8} />
        </div>
      </div>

      <div className="mb-2">
        <span
          className="text-4xl font-black tracking-tight"
          style={{ color: stat.accent }}
        >
          {formatted}
          <span className="text-3xl">{stat.suffix}</span>
        </span>
      </div>

      <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
    </div>
  );
}

// Main Function
export default function AboutSection() {
  // Section - 4 logic.........
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  const STORIES = [
    {
      quote:
        "Before Girganga Parivar Trust came to our village, we struggled every year with water shortage. Now, with the check dam and recharge borewells, our wells have water throughout the year. My crop yield has doubled.",
      name: "Ramesh Patel",
      role: "Farmer",
      location: "Morbi District",
      initials: "RP",
      num: "01",
    },
    {
      quote:
        "The PPP model is revolutionary. Instead of waiting for government projects that might take years, we partnered with Girganga Parivar Trust and completed our water conservation project in just six months.",
      name: "Meera Ben",
      role: "Village Sarpanch",
      location: "Rajkot",
      initials: "MB",
      num: "02",
    },
    {
      quote:
        "I have worked in this region for over 20 years, and I have never seen such systematic and effective water conservation work. The impact on agricultural productivity has been remarkable.",
      name: "Dr. Suresh Kumar",
      role: "Agricultural Extension Officer",
      location: "Gujarat",
      initials: "SK",
      num: "03",
    },
  ];

  /* ===== Stats Section Ref ===== */
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SmoothScroll>
        {/* Section - 1 */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Section Heading */}
            <div className="text-center mb-16">
              <p className="inline-flex items-center gap-2 border border-emerald-600/25 bg-emerald-600/5 text-emerald-600 text-[11px] tracking-[0.16em] uppercase px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                About US
              </p>
              <h2 className="text-4xl font-bold text-emerald-700">
                Girganga Parivar Trust
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Founded by the visionary “Waterman of India”,
                <span className="font-semibold text-emerald-600">
                  {" "}
                  Mr. Dilip Sakhiya
                </span>
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
                <div>
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-3 text-center lg:text-start">
                    Who We Are
                  </h3>
                  <p className="text-center lg:text-start">
                    Girganga Parivar Trust is a not-for-profit organization
                    working for sustainable water security in Gujarat,
                    especially the drought-prone Saurashtra region. The Trust
                    believes that water conservation is not just infrastructure
                    creation, but a people-centric movement.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-3 text-center lg:text-start">
                    Our Mission
                  </h3>
                  <p className="text-center lg:text-start">
                    We are committed to revitalizing India’s water
                    infrastructure through strategic repair, deepening, and
                    strengthening of check dams. Our goal is to enhance water
                    security and restore ecological balance across rural and
                    urban communities.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-3 text-center lg:text-start">
                    Our Journey
                  </h3>
                  <p className="text-center lg:text-start">
                    Founded under the leadership of Shri Dilip Sakhiya,
                    popularly known as the “Waterman of Gujarat”, GGPT has
                    evolved into one of India’s largest grassroots water
                    conservation movements.
                  </p>
                </div>
              </div>

              {/* Right Highlight Card */}
              <div className="bg-white shadow-xl rounded-2xl p-10 border border-emerald-100">
                <h3 className="text-2xl font-bold text-emerald-700 mb-4 text-center lg:text-start">
                  Our Impact Vision
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-center lg:text-start">
                  Transforming water conservation into a mass movement by
                  empowering communities, restoring rivers, and ensuring
                  long-term sustainability for future generations.
                </p>

                <div className="border-t pt-6">
                  <p className="text-lg font-semibold text-gray-800 text-center lg:text-start">
                    “Water conservation is not a project, it is a
                    responsibility.”
                  </p>
                  <p className="text-emerald-600 mt-2 font-medium text-center lg:text-start">
                    – Shri Dilip Sakhiya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section - 2 */}
        <section className="container bg-slate-50 py-20">
          <div className=" mx-auto px-6 lg:px-12">
            {/* Heading */}
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-emerald-700">
                Legal & Compliance
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Girganga Parivar Trust maintains complete transparency and
                operates in full compliance with statutory and regulatory
                requirements under Indian law.
              </p>
            </div>

            {/* Compliance Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "CSR-1 Registered",
                "FCRA (Under Process)",
                "NGO-DARPAN Registered",
                "Registered Trust under Indian Trust Act",
                "Audited Accounts & Annual Reports Available",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-emerald-100 select-none"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-600 w-6 h-6 mt-1" />
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section - 3 */}
        <section
          ref={statsRef}
          className="container py-20 bg-white text-center"
        >
          <h2 className="text-4xl font-bold mb-14 text-emerald-700">
            Proven Impact
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <StatCard
                key={stat.label}
                stat={stat}
                index={i}
                inView={statsInView}
              />
            ))}
          </div>
        </section>

        {/* Section - 4 */}
        <section ref={ref} className="container bg-white overflow-hidden">
          <div className=" mx-auto">
            {/* ── Header ── */}
            <div
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
              }}
            >
              <div>
                <p className="text-emerald-600 text-xs font-bold tracking-[0.25em] uppercase mb-3 flex items-center justify-center md:justify-start gap-2">
                  <span className="w-8 h-px bg-emerald-400 inline-block " />
                  What People Say
                </p>
                <h2 className="text-5xl font-black text-gray-900 leading-none text-center md:text-start">
                  Success
                  <span className="text-emerald-600 italic"> Stories</span>
                </h2>
              </div>
              <p className="text-gray-400 text-sm max-w-3xl leading-relaxed md:text-right text-center md:text-start">
                Real voices from communities whose lives have been transformed
                through sustainable water conservation initiatives led by
                Girganga Parivar Trust. From drought-prone villages to thriving
                farmlands, these stories reflect resilience, hope, and long-term
                impact created through collective effort.
              </p>
            </div>

            {/* ── Main layout: left selector + right big card ── */}
            <div className="grid md:grid-cols-[280px_1fr] gap-6 items-stretch">
              {/* Left — number list selector */}
              <div className="flex flex-col gap-3">
                {STORIES.map((s, i) => (
                  <button
                    key={s.name}
                    onClick={() => setActive(i)}
                    className={`group text-left rounded-2xl px-6 py-5 border-2 transition-all duration-300 ${
                      active === i
                        ? "bg-emerald-600 border-emerald-600 shadow-lg shadow-emerald-600/25"
                        : "bg-white border-gray-100 hover:border-emerald-600/30 hover:bg-emerald-50/50"
                    }`}
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateX(0)" : "translateX(-24px)",
                      transitionDelay: `${i * 100 + 100}ms`,
                      transition:
                        "opacity 600ms, transform 600ms, background 300ms, border 300ms, box-shadow 300ms",
                    }}
                  >
                    <div
                      className={`text-3xl font-black mb-1 transition-colors ${active === i ? "text-white/30" : "text-emerald-600/20"}`}
                    >
                      {s.num}
                    </div>
                    <p
                      className={`font-black text-sm transition-colors ${active === i ? "text-white" : "text-gray-800"}`}
                    >
                      {s.name}
                    </p>
                    <p
                      className={`text-xs mt-0.5 transition-colors ${active === i ? "text-white/60" : "text-gray-400"}`}
                    >
                      {s.role}
                    </p>
                  </button>
                ))}
              </div>

              {/* Right — big active card */}
              <div
                className="relative bg-emerald-900 rounded-3xl overflow-hidden p-10 flex flex-col justify-between min-h-[340px]"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(24px)",
                  transitionDelay: "300ms",
                  transitionDuration: "700ms",
                  transition: "opacity 700ms, transform 700ms",
                }}
              >
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-700/30 rounded-full blur-2xl pointer-events-none" />
                {/* Big number watermark */}
                <span className="absolute right-8 top-6 text-[8rem] font-black text-white/[0.04] leading-none select-none pointer-events-none">
                  {STORIES[active].num}
                </span>

                {/* Large open-quote */}
                <div className="relative z-10">
                  <div className="text-emerald-400 text-7xl font-black leading-none mb-4 font-serif">
                    &ldquo;
                  </div>
                  <p className="text-white text-xl font-medium leading-relaxed max-w-xl transition-all duration-300">
                    {STORIES[active].quote}
                  </p>
                </div>

                {/* Author row */}
                <div className="relative z-10 flex flex-wrap items-center gap-4 mt-10 pt-8 border-t border-white/10">
                  <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-black text-sm shrink-0">
                    {STORIES[active].initials}
                  </div>
                  <div>
                    <p className="text-white font-black">
                      {STORIES[active].name}
                    </p>
                    <p className="text-emerald-400 text-xs mt-0.5">
                      {STORIES[active].role} · {STORIES[active].location}
                    </p>
                  </div>
                  {/* Dot indicators */}
                  <div className="ml-auto flex gap-2">
                    {STORIES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`rounded-full transition-all duration-300 ${active === i ? "w-6 h-2 bg-emerald-400" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Bottom featured strip ── */}
            <div
              className="mt-6 bg-emerald-50 border border-emerald-100 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center gap-6 justify-between transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "600ms",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shrink-0 text-lg font-black">
                  &ldquo;
                </div>
                <p className="text-gray-700 text-sm italic leading-relaxed max-w-xl">
                  After deepening the check dam, water stayed till summer. Our
                  borewells revived, and migration stopped.
                  <span className="block text-emerald-700 font-black not-italic mt-1">
                    — Chhaganbhai Patel, Rajkot
                  </span>
                </p>
              </div>
              <a
                href="/donate"
                className="shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-3 rounded-xl shadow-lg shadow-emerald-600/20 hover:-translate-y-0.5 transition-all duration-200 text-sm whitespace-nowrap"
              >
                Contribute Now →
              </a>
            </div>
          </div>
        </section>

        {/* Section - 5 */}
        <section className="bg-gradient-to-b from-emerald-50 to-white py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-emerald-700 mb-6 text-center">
              Trust Volunteers
            </h2>

            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
              We are deeply grateful for our passionate volunteers across
              Gujarat. Their dedication helps build a water-secure Saurashtra.
            </p>

            {/* Donate */}

            <div className="grid md:grid-cols-3 gap-10 mb-16 items-start justify-self-center">
              <div className="text-emerald-700 font-bold text-2xl">Donate</div>

              <div className="md:col-span-2 text-gray-600">
                <p className="mb-4">
                  Support construction or rejuvenation of water conservation
                  structures.
                </p>

                <ul className="space-y-2 mb-6">
                  <li>₹50,000 – Recharge borewell system</li>
                  <li>₹1,00,000 – Check dam contribution</li>
                </ul>

                <a href="/donate">
                  <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg">
                    Donate Now
                  </button>
                </a>
              </div>
            </div>

            {/* Volunteer */}

            <div className="grid md:grid-cols-3 gap-10 mb-16 items-start justify-self-center">
              <div className="text-emerald-700 font-bold text-2xl">
                Volunteer
              </div>

              <div className="md:col-span-2 text-gray-600">
                <p className="mb-4">
                  Join field activities, awareness campaigns, or professional
                  volunteering.
                </p>

                <ul className="space-y-2 mb-6">
                  <li>Field work support</li>
                  <li>Professional expertise volunteering</li>
                </ul>

                <a href="/team">
                  <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg">
                    Join Us
                  </button>
                </a>
              </div>
            </div>

            {/* Partnership */}

            <div className="grid md:grid-cols-3 gap-10 items-start justify-self-center">
              <div className="text-emerald-700 font-bold text-2xl">
                Partnership
              </div>

              <div className="md:col-span-2 text-gray-600">
                <p className="mb-4">
                  Corporates, institutions, and government agencies are welcome
                  for Corporate <br /> Partnership.
                </p>

                <ul className="space-y-2 mb-6">
                  <li>Equipment support</li>
                  <li>Funding for water projects</li>
                </ul>

                <a href="/csr">
                  <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg">
                    Partner With Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </SmoothScroll>
    </>
  );
}
