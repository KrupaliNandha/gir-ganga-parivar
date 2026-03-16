"use client";

import { useEffect, useRef, useState } from "react";
import SmoothScroll from "../../Component/SmothScrolling";
import Image from "next/image";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const CountUp = ({ end, duration = 2000, suffix = "" }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function JalMandirSection() {
  return (
    <SmoothScroll>
      {/* IMPACT DASHBOARD */}
      <section className=" bg-[var(--color-tertiary)]">
        <div className="max-w-7xl mx-auto container">
          {/* TITLE */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold">
              Impact{" "}
              <span className="text-[var(--color-primary)]">Dashboard</span>
            </h2>

            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">
              Community-driven water conservation restoring groundwater,
              strengthening agriculture, and improving rural livelihoods across
              Gujarat.
            </p>
          </div>

          {/* IMAGE FIXED (NO BLUR) */}
          <div className="flex justify-center mb-16">
            <Image
              src="/image/Impact/impact-dashboard.png"
              alt="Impact Dashboard"
              width={650}
              height={650}
              priority
              className="rounded-2xl shadow-xl object-contain max-w-full h-auto"
            />
          </div>

          {/* IMPACT STATS */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl justify-self-center">
            {[
              { value: 8357, label: "Water Structures" },
              { value: 619, label: "Villages" },
              { value: 35, label: "Blocks" },
              { value: 8, label: "Districts" },
              { value: 125000, label: "Farmers Impacted", suffix: "+" },
              { value: 74, label: "Billion Litres Recharge", suffix: "B" },
            ].map(({ value, label, suffix }, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[var(--color-primary)]">
                  <CountUp end={value} suffix={suffix ?? ""} />
                </h3>

                <p className="text-xs text-gray-500 mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT DETAILS */}
      <section className="container bg-[var(--color-tertiary)] py-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl justify-self-center">
          {/* CARD 1 */}
          <div className="relative bg-white p-10 rounded-tr-4xl rounded-bl-4xl shadow-sm overflow-hidden group">
            {/* gradient line */}
            <span className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[var(--color-primary)]  to-[var(--color-secondary)] transition-all duration-500 group-hover:w-full"></span>

            <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
              Water Recharge Impact
            </h3>

            <ul className="text-gray-600 space-y-3 text-sm">
              <li>• 74 Billion Litres Water Recharge</li>
              <li>• 2.6 TMC Water Storage Capacity</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="relative bg-white p-10 rounded-tr-4xl rounded-bl-4xl shadow-sm overflow-hidden group">
            {/* gradient line */}
            <span className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[var(--color-primary)]  to-[var(--color-secondary)] transition-all duration-500 group-hover:w-full"></span>

            <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
              Agricultural Impact
            </h3>

            <ul className="text-gray-600 space-y-3 text-sm">
              <li>• 4,29,000 Acres Farmland Supported</li>
              <li>• 7,25,000 Rural Population Benefitted</li>
              <li>• 20-30% Increase in Crop Productivity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* IMPACT STORY */}
      <section className="bg-[var(--color-tertiary)]">
        <div className="max-w-7xl container mx-auto container grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Restoring Hope Through
              <span className="text-[var(--color-primary)]"> Water</span>
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Restoring Hope Through Water: GGPT’s Check-Dam Revival in
              Bhavnagar For over 14 years, villages in Sihor taluka of
              Bhavnagar—Todi, Kharachiya, Ratanpar, and Jilvana—struggled with
              severe water scarcity. Borewells failed even at 700 feet, tankers
              became the only source of drinking water, and agriculture and
              livestock steadily declined.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              In 2024, Girganga Parivar Trust (GGPT), in collaboration with
              Dangardi Vipassana Kendra and Dhamkheda Seva Trust, revived silted
              check dams through timely deepening and desilting just before the
              monsoon.
            </p>

            <div className="bg-white p-8 rounded-xl italic text-gray-700 shadow-sm mb-6">
              The impact was immediate. With the first rains, check dams filled
              to capacity, groundwater levels rose sharply, and borewells began
              yielding water at just 20 feet. Tankers were eliminated, abandoned
              wells revived, and villages regained 24×7 access to drinking
              water—many for the first time in over a decade.
            </div>

            <div className="space-y-5 mb-6">
              <p className="text-gray-600 text-sm">
                A farmer shared, “For years, 700 feet gave us nothing. Today,
                water comes at 20 feet. This work has brought life back to our
                village.”
              </p>
            </div>

            <p className="text-gray-600 text-sm">
              More than water, GGPT restored dignity, confidence, and
              hope—creating a replicable, community-led model for drought-prone
              regions of Gujarat.
            </p>

            <p className="mt-8 font-semibold text-lg">
              This is not just water conservation.
              <span className="text-[var(--color-primary)]">
                {" "}
                It is rural revival.
              </span>
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/image/Impact/Donation%20For%20Biggest%20Checkdam%20(1).png"
              alt="Check Dam Revival"
              width={500}
              height={600}
              className="rounded-2xl h-full w-full shadow-xl object-contain"
            />
          </div>
        </div>
      </section>
    </SmoothScroll>
  );
}
