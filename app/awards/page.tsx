"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SmoothScroll from "../../Component/SmothScrolling";
import { motion, AnimatePresence } from "framer-motion"; // AnimatePresence ઉમેર્યું
import { FiPlus, FiX } from "react-icons/fi"; // આઈકોન્સ ઉમેર્યા

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
  {
    id: 6,
    title: "Jal Sanchay & Jan Bhagidari Award",
    image: "/image/Award/jan bhagidari award.png",
    dic: "Jal Sanchay & Jan Bhagidari Award",
    badge: "Jal Sanchay & Jan Bhagidari Award",
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

// ── AwardCard Component ──
function AwardCard({
  award,
  index,
  onImageClick,
}: {
  award: Award;
  index: number;
  onImageClick: (img: string) => void;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="group relative bg-white rounded-3xl overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:shadow-lg border border-[#e6f4ee]"
      onClick={() => onImageClick(award.image)}
      style={{
        boxShadow:
          "0 2px 24px 0 rgba(16,185,129,0.07), 0 1px 4px 0 rgba(0,0,0,0.05)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease, transform 0.6s ease`,
        transitionDelay: `${index * 90}ms`,
      }}
    >
      {/* Image Container with Hover Overlay & Plus Sign */}
      <div className="relative w-full h-72 overflow-hidden">
        <Image
          src={award.image}
          alt={award.title}
          fill
          
          className="object-cover transition-transform duration-300"
        />

        {/* Hover Overlay with Plus Sign */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
            <FiPlus className="text-white text-3xl" />
          </div>
        </div>

        {/* Gradient Overlay for style (static) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.1) 0%, transparent 45%)",
          }}
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-5 py-6 gap-2 bg-white">
        <span className="self-start text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border border-[var(--color-primary)] select-none bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
          {award.badge}
        </span>

        <h3 className="text-gray-900 font-bold text-lg leading-snug mt-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
          {award.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1 mt-1">
          {award.dic}
        </p>
      </div>
    </div>
  );
}

// ── Main AwardsSection Component ──
export default function AwardsSection() {
  const { ref: headingRef, inView: headingVisible } = useInView(0.2);
  const [selectedImg, setSelectedImg] = useState<string | null>(null); 

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
                Girganga Parivar
              </span>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14 transition-all duration-700"
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
                className="text-center rounded-2xl py-6 px-3 bg-white shadow-sm border border-[#e6f4ee]"
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

          {/* Cards with props pass */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 pb-20">
            {awards.map((award, index) => (
              <AwardCard
                key={award.id}
                award={award}
                index={index}
                onImageClick={setSelectedImg} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox for Single Image (AnimatePresence) ── */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-white/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setSelectedImg(null)} 
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transition-transform"
              onClick={() => setSelectedImg(null)}
            >
              <FiX size={24} />
            </button>

            {/* Image Containter with Scale Animation */}
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative max-w-7xl w-full h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} 
            >
              <Image
                src={selectedImg}
                alt="Award Zoom"
                fill
                className="object-contain rounded-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SmoothScroll>
  );
}
