"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SmoothScroll from "../../Component/SmothScrolling";

type Award = {
  id: number;
  title: string;
  image: string;
  dic: string;
  badge: string;
  year: string;
};

const awards: Award[] = [
  {
    id: 1,
    title: "Jal Prahari Award",
    image: "/image/Award/Jal Pahari Award.jpg",
    dic: "Jal Prahari Award 2023 – UNOPS & Ministry of Jal Shakti",
    badge: "National",
    year: "2023",
  },
  {
    id: 2,
    title: "Jal Ratna Award",
    image: "/image/Award/Jal Ratana Award.jpg",
    dic: "Jal Ratna Award – Excellence in Water Conservation",
    badge: "Excellence",
    year: "2024",
  },
  {
    id: 3,
    title: "Mayor's Award",
    image: "/image/Award/Mayor's Award.jpg",
    dic: "Mayor's Award 2024 – Rajkot Municipal Corporation",
    badge: "Municipal",
    year: "2024",
  },
  {
    id: 4,
    title: "National Water Mission",
    image: "/image/Award/Nataion water mission.jpeg",
    dic: "MoU with National Water Mission, Ministry of Jal Shakti",
    badge: "Government",
    year: "2024",
  },
  {
    id: 5,
    title: "NGO Award",
    image: "/image/Award/NGO Award.jpg",
    dic: "Best NGO Award 2025 by Ministry of Jal Shakti under Jal Sanchay Jan Bhagidari (JSJB) 1.0",
    badge: "Best NGO",
    year: "2025",
  },
];

const newsUrl =
  "https://www.devdiscourse.com/article/business/3418570-girganga-parivar-trust-champion-of-global-csr-esg-2025-for-water-conservation";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function AwardCard({ award, index }: { award: Award; index: number }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className=" group relative bg-white rounded-3xl overflow-hidden flex flex-col"
      style={{
        boxShadow:
          "0 2px 24px 0 rgba(16,185,129,0.07), 0 1px 4px 0 rgba(0,0,0,0.05)",
        border: "1.5px solid #e6f4ee",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease, transform 0.6s ease`,
        transitionDelay: `${index * 90}ms`,
      }}
    >
      {/* Image */}
      <div className="relative w-full h-70 overflow-hidden">
        <Image
          src={award.image}
          alt={award.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 55%)",
          }}
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-5 py-5 gap-2">
        <span className="self-start text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border border-[var(--color-primary)] select-none bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
          {award.badge}
        </span>

        <h3 className="text-gray-900 font-bold text-base leading-snug mt-1 group-hover:text-[var(--color-primary)] transition-colors duration-300">
          {award.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1">
          {award.dic}
        </p>

        <div
          className="mt-4 h-[2px] rounded-full bg-[var(--color-primary)] transition-all duration-500"
          style={{ width: "0%" }}
          ref={(el: HTMLDivElement | null) => {
            if (el) {
              el.parentElement?.parentElement?.addEventListener(
                "mouseenter",
                () => (el.style.width = "100%"),
              );
              el.parentElement?.parentElement?.addEventListener(
                "mouseleave",
                () => (el.style.width = "0%"),
              );
            }
          }}
        />
      </div>
    </div>
  );
}

export default function AwardsSection() {
  const { ref: headingRef, inView: headingVisible } = useInView(0.2);

  return (
    <SmoothScroll>
      {/* ── Hero / Page Header ── */}
      <section className="container relative w-full text-center overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-[var(--color-secondary)]" />
              Recognition & Honours
              <span className="w-8 h-px bg-[var(--color-secondary)]" />
            </p>
            <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Awards Received by{" "}
              <span className="text-[var(--color-primary)]">
                {" "}
                Girganga Parivar{" "}
              </span>{" "}
            </h1>
            <p className="text-gray-500 text-sm mt-5 max-w-xl mx-auto leading-relaxed">
              Nationally recognized for outstanding contributions to water
              conservation, river rejuvenation, and sustainable environmental
              initiatives across Gujarat.
            </p>
            <div className="w-16 h-0.5 bg-[var(--color-primary)] mx-auto mt-10 rounded-full" />
          </div>
        </div>
      </section>

      {/* ── Award Cards Grid ── */}
      <section className="container">
        <div className="max-w-7xl mx-auto">
          {/* Stats strip */}
          <div
            ref={headingRef}
            className="grid grid-cols-3 gap-4 mb-14 transition-all duration-700"
            style={{
              opacity: headingVisible ? 1 : 0,
              transform: headingVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {[
              { value: "5+", label: "Awards Won" },
              { value: "2025", label: "Latest Recognition" },
              { value: "National", label: "Level Honour" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-2xl py-6 px-3"
                style={{
                  background: "#fff",
                }}
              >
                <p
                  className="font-extrabold text-[var(--color-primary)]"
                  style={{
                    fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {awards.map((award, index) => (
              <AwardCard key={award.id} award={award} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured News Banner ── */}
      <section className="container  ">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden flex flex-col sm:flex-row items-stretch border border-[var(--color-primary)]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 px-7 py-8 flex-1 bg-[var(--color-tertiary)]">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-[var(--color-tertiary)] border border-[var(--color-primary)]">
                <svg
                  className="w-7 h-7 text-[var(--color-primary)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                
                <h3 className="text-gray-900 font-bold text-lg sm:text-xl leading-snug">
                  Girganga Parivar Trust —{" "}
                  <span className="text-[var(--color-primary)]">
                    Champion of Global CSR &amp; ESG 2025
                  </span>
                </h3>
                <p className="mt-1.5 text-gray-400 text-sm leading-relaxed">
                  Read the full coverage on DevDiscourse about our recognition
                  for Water Conservation leadership and sustainable
                  environmental impact.
                </p>
              </div>

              <a
                href={newsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 font-bold text-sm px-6 py-3  bg-[var(--color-primary)] text-white
                rounded-xl transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap select-none"
              >
                 Latest News
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </SmoothScroll>
  );
}
