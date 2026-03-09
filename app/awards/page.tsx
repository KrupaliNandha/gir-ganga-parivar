"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SmoothScroll from "../../Component/SmothScrolling";

const awards = [
  {
    id: 1,
    title: "Jal Prahari Award",
    image: "/image/Award/Jal Pahari Award.jpg",
    dic: "Jal Prahari Award 2023 – UNOPS & Ministry of Jal Shakti",
    badge: "National",
  },
  {
    id: 2,
    title: "Jal Ratna Award",
    image: "/image/Award/Jal Ratana Award.jpg",
    dic: "Jal Ratna Award",
    badge: "Excellence",
  },
  {
    id: 3,
    title: "Mayor's Award",
    image: "/image/Award/Mayor's Award.jpg",
    dic: "Mayor's Award 2024 – Rajkot Municipal Corporation",
    badge: "Municipal",
  },
  {
    id: 4,
    title: "National Water Mission",
    image: "/image/Award/Nataion water mission.jpeg",
    dic: "MoU with National Water Mission, Ministry of Jal Shakti",
    badge: "Government",
  },
  {
    id: 5,
    title: "NGO Award",
    image: "/image/Award/NGO Award.jpg",
    dic: "Best NGO Award 2025 by Ministry of Jal Shakti under Jal Sanchay Jan Bhagidari (JSJB) 1.0",
    badge: "Best NGO",
  },
];

const newsUrl =
  "https://www.devdiscourse.com/article/business/3418570-girganga-parivar-trust-champion-of-global-csr-esg-2025-for-water-conservation";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function AwardCard({ award, index }: { award: typeof awards[0]; index: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100
        transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className="bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
          {award.badge}
        </span>
      </div>


      {/* Image */}
      <div className="relative w-full h-[260px] overflow-hidden">
        <Image
          src={award.image}
          alt={award.title}
          width={500}
          height={300}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay always present at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="px-5 py-4">
        <h3 className="text-base font-bold text-slate-800 group-hover:text-emerald-600 transition-colors duration-300 leading-snug">
          {award.title}
        </h3>
        <p className="text-sm text-slate-500 mt-1.5 leading-relaxed line-clamp-2">
          {award.dic}
        </p>

        {/* Bottom accent line */}
        <div className="mt-4 h-0.5 w-0 bg-emerald-400 group-hover:w-full transition-all duration-500 rounded-full" />
      </div>
    </div>
  );
}

export default function AwardsSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeadingVisible(true); },
      { threshold: 0.2 }
    );
    if (headingRef.current) obs.observe(headingRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <SmoothScroll>

      {/* ── AWARDS SECTION ── */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div
            ref={headingRef}
            className={`text-center mb-14 transition-all duration-700 ${headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Recognition & Honours
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight">
              Awards Received by{" "}
              <span className="text-emerald-600">Girganga Parivar</span>
            </h2>

            <p className="mt-3 text-lg font-semibold text-emerald-500 tracking-wide">
              Champion of Global CSR &amp; ESG 2025 for Water Conservation
            </p>

            <p className="mt-4 text-base text-slate-500 max-w-3xl mx-auto leading-relaxed">
              Nationally recognized for outstanding contributions to water conservation,
              river rejuvenation, and sustainable environmental initiatives — reflecting
              our commitment to community participation and responsible water management.
            </p>
          </div>

          {/* Card Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {awards.map((award, index) => (
              <AwardCard key={award.id} award={award} index={index} />
            ))}
          </div>

        </div>
      </section>

      {/* ── FEATURED NEWS BANNER ── */}
      <section className="container">
        <div className="max-w-7xl mx-auto">

          {/* News Card */}
          <div className="relative bg-gradient-to-br from-emerald-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-emerald-800/40 shadow-2xl">

            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative px-8 py-10 sm:px-12 sm:py-12 flex flex-col sm:flex-row items-start sm:items-center gap-8">

              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Latest News
                  </span>
                  <span className="text-emerald-400/70 text-xs">2025</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  Girganga Parivar Trust — Champion of Global CSR &amp; ESG 2025
                </h3>
                <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                  Read the full coverage on DevDiscourse about our recognition for
                  Water Conservation leadership and sustainable environmental impact.
                </p>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0">
                <a
                  href={newsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-900/50 hover:shadow-emerald-700/50 hover:-translate-y-0.5 whitespace-nowrap"
                >
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Bottom ticker strip */}
            <div className="bg-emerald-500/10 border-t border-emerald-800/30 px-8 sm:px-12 py-3 flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse flex-shrink-0" />
              <p className="text-emerald-400 text-xs font-medium truncate">
                Featured on DevDiscourse · Global CSR &amp; ESG Recognition · Water Conservation Leadership 2025
              </p>
            </div>
          </div>
        </div>
      </section>

    </SmoothScroll>
  );
}