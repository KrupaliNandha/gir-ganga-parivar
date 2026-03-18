"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ─── CountUp ─────────────────────────────────────── */
interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const CountUp = ({ end, duration = 2000, suffix = "" }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

/* ─── Eyebrow Label ───────────────────────────────── */
function Eyebrow({ text }: { text: string }) {
  return (
    <p className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.35em] uppercase text-[var(--color-secondary)] mb-4">
      <span className="w-8 h-px bg-[var(--color-secondary)]" />
      {text}
      <span className="w-8 h-px bg-[var(--color-secondary)]" />
    </p>
  );
}

/* ─── Stat Card ───────────────────────────────────── */
function StatCard({
  value,
  label,
  suffix,
  index,
}: {
  value: number;
  label: string;
  suffix?: string;
  index: number;
}) {
  return (
    <div
      className="group relative flex flex-col items-center justify-center text-center
      bg-white border border-gray-100 rounded-2xl p-6 
      hover:border-[var(--color-primary)] hover:shadow-xl hover:-translate-y-1
      transition-all duration-300"
    >
      {/* top accent bar */}
      <span
        className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[var(--color-primary)] rounded-full
        group-hover:w-full transition-all duration-500"
      />

      <span className="text-[var(--color-secondary)] text-[10px] font-bold tracking-widest uppercase mb-3 opacity-60">
        0{index + 1}
      </span>

      <h3 className="text-3xl xl:text-4xl font-extrabold text-[var(--color-primary)] leading-none mb-2">
        <CountUp end={value} suffix={suffix ?? ""} />
      </h3>

      <p className="text-xs text-gray-400 font-medium tracking-wide leading-snug">
        {label}
      </p>
    </div>
  );
}

/* ─── Impact Card ─────────────────────────────────── */
function ImpactCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div
      className="relative bg-white rounded-3xl p-8 overflow-hidden group border border-gray-100
      hover:shadow-2xl transition-all duration-400"
    >
      {/* gradient sweep on hover */}
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
        bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent rounded-3xl pointer-events-none"
      />

      <div className="relative z-10">
        <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
          <span className="w-3 h-3 rounded-full bg-[var(--color-primary)]" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-5">{title}</h3>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── Main Page ───────────────────────────────────── */
export default function JalMandirSection() {
  const stats = [
    { value: 8357, label: "Water Structures" },
    { value: 619, label: "Villages Covered" },
    { value: 35, label: "Blocks" },
    { value: 8, label: "Districts" },
    { value: 125000, label: "Farmers Impacted", suffix: "+" },
    { value: 74, label: "Billion Litres Recharged", suffix: "B" },
  ];

  return (
    <>
      {/* ── 1. IMPACT DASHBOARD ─────────────────────────── */}
      <section className="container bg-[var(--color-tertiary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Eyebrow text="By the Numbers" />
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Impact{" "}
              <span className="text-[var(--color-primary)]">Dashboard</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              Community-driven water conservation restoring groundwater,
              strengthening agriculture, and improving rural livelihoods across
              Gujarat.
            </p>
          </div>

          {/* Dashboard Image — floating card treatment */}
          <div className="flex justify-center mb-20">
            <div className="relative">
              {/* glow behind image */}
              <div className="absolute -inset-4 rounded-3xl bg-[var(--color-primary)]/10 blur-2xl" />
              <Image
                src="/image/Impact/impact-dashboard.png"
                alt="Impact Dashboard"
                width={680}
                height={680}
                priority
                className="relative rounded-3xl shadow-2xl object-contain max-w-full h-auto border border-white"
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((s, i) => (
              <StatCard key={i} index={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. WATER CONSERVATION INSIGHTS ─────────────── */}
      <section className="container bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <Eyebrow text="District Overview" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Our Impact &{" "}
              <span className="text-[var(--color-primary)]">
                Water Conservation Insights
              </span>
            </h2>
            <p className="text-gray-400 mt-3 text-sm">
              A quick overview of our district-level impact and structure
              distribution
            </p>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                src: "/image/partner-with-us-csr/district impact.png",
                title: "District-Level Impact Overview",
              },
              {
                src: "/image/partner-with-us-csr/recharge structures.png",
                title: "Water Structure Distribution (%)",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group bg-[var(--color-tertiary)] rounded-3xl overflow-hidden border border-gray-100
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="px-6 pt-6 pb-3 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                  <h3 className="text-sm font-semibold text-gray-700">
                    {card.title}
                  </h3>
                </div>
                <div className="px-4 pb-6">
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. IMPACT DETAILS ───────────────────────────── */}
      <section className="container bg-[var(--color-tertiary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Eyebrow text="What We've Achieved" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Measurable{" "}
              <span className="text-[var(--color-primary)]">
                Change on the Ground
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ImpactCard
              title="Water Recharge Impact"
              items={[
                "74 Billion Litres Water Recharge",
                "2.6 TMC Water Storage Capacity",
              ]}
            />
            <ImpactCard
              title="Agricultural Impact"
              items={[
                "4,29,000 Acres Farmland Supported",
                "7,25,000 Rural Population Benefitted",
                "⦁	20-30% of Crop productivity increase. ",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── 4. IMPACT STORY ─────────────────────────────── */}
      <section className="container bg-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            {/* Left — Story */}
            <div className="max-w-4xl">
              <Eyebrow text="Impact Story" />

              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
                Restoring Hope{" "}
                <span className="text-[var(--color-primary)]">
                  Through Water
                </span>
              </h2>

              <div className="space-y-4 text-gray-500 text-sm leading-7">
                <p>
                  GGPT’s Check-Dam Revival in Bhavnagar For over 14 years,
                  villages in Sihor taluka of Bhavnagar—Todi, Kharachiya,
                  Ratanpar, and Jilvana—struggled with severe water scarcity.
                  Borewells failed even at 700 feet, tankers became the only
                  source of drinking water, and agriculture and livestock
                  steadily declined.
                </p>

                <p>
                  In 2024, Girganga Parivar Trust (GGPT), in collaboration with
                  Dangardi Vipassana Kendra and Dhamkheda Seva Trust, revived
                  silted check dams through timely deepening and desilting just
                  before the monsoon.
                </p>
              </div>

              {/* Quote */}
              <div className="my-7 relative pl-6 border-l-4 border-[var(--color-secondary)]">
                <p className="text-gray-600 text-sm leading-7 italic">
                  The impact was immediate. With the first rains, check dams
                  filled to capacity, groundwater levels rose sharply, and
                  borewells began yielding water at just 20 feet.
                </p>
              </div>

              <p className="text-gray-400 text-sm leading-7 mb-4">
                A farmer shared,{" "}
                <span className="text-gray-600 italic">
                  &quot;For years, 700 feet gave us nothing. Today, water comes at 20
                  feet.&quot;
                </span>
              </p>

              <p className="text-gray-400 text-sm leading-7 mb-8">
                More than water, GGPT restored dignity, confidence, and hope—
                creating a replicable model.
              </p>

              {/* CTA */}
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-px bg-[var(--color-primary)]" />
                <p className="font-bold text-base text-gray-900">
                  This is not just water conservation.{" "}
                  <span className="text-[var(--color-primary)]">
                    It is rural revival.
                  </span>
                </p>
              </div>
            </div>

            {/* Right — Image */}
            <div className="flex justify-center h-full">
              <div className="relative w-full h-[400px] sm:h-[300px] lg:h-full">
                {/* decorative frame */}
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-[var(--color-secondary)]/30" />

                <Image
                  src="/image/Impact/Donation%20For%20Biggest%20Checkdam%20(1).png"
                  alt="Check Dam Revival"
                  fill
                  className="rounded-3xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
