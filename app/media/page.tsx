"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SmoothScroll from "../../Component/SmothScrolling";
import { FaInfoCircle, FaMapMarkerAlt, FaVideo } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const images = [
  {
    src: "/image/Media/Construction Work Img-1.jpg",
    title: "Heavy Machinery Ground Preparation",
    location: "Rajkot, Gujarat",
  },
  {
    src: "/image/Media/Construction Work Img-2.jpg",
    title: "Active Site Excavation",
    location: "Rajkot, Gujarat",
  },
  {
    src: "/image/Media/Construction Work Img-3.jpg",
    title: "Rural Construction Logistics",
    location: "Rajkot, Gujarat",
  },
  {
    src: "/image/Media/Construction Work Img-4.jpg",
    title: "Check Dam Structural Reinforcement",
    location: "Rajkot, Gujarat",
  },
  {
    src: "/image/Media/Construction Work Img-5.jpg",
    title: "Self-Loading Concrete Mixer in Operation",
    location: "Rajkot, Gujarat",
  },
  {
    src: "/image/Media/Construction Work Img-6.jpg",
    title: "Heavy Machinery at the Water's Edge",
    location: "Rajkot, Gujarat",
  },
  {
    src: "/image/Media/Construction Work Img-7.png",
    title: "Impactful Earthmoving for Groundwater Recharge",
    location: "Rajkot, Gujarat",
  },
  {
    src: "/image/Media/Construction Work Img-8.jpeg",
    title: "Structural Wall Concreting with Transit Mixer",
    location: "Rajkot, Gujarat",
  },
  {
    src: "/image/Media/Construction Work Img-9.jpeg",
    title: "Excavator Desilting and Site Clearance",
    location: "Rajkot, Gujarat",
  },
  {
    src: "/image/Media/Construction Work Img-10.jpg",
    title: "Manual Finishing of Concrete Slope",
    location: "Rajkot, Gujarat",
  },
  {
    src: "/image/Media/Construction Work Img-11.jpg",
    title: "Hyundai Excavator Working in Water Basin",
    location: "Rajkot, Gujarat",
  },
  {
    src: "/image/Media/Construction Work Img-12.jpg",
    title: "Supervised Concrete Pour for Water Channel",
    location: "Rajkot, Gujarat",
  },
  {
    src: "/image/Media/Construction Work Img-13.jpeg",
    title: "Precision Excavation Near Existing Structures",
    location: "Rajkot, Gujarat",
  },
  {
    src: "/image/Media/Construction Work Img-14.jpeg",
    title: "Sany Excavator Loading Tipper Truck",
    location: "Rajkot, Gujarat",
  },
];

export default function Media() {
  const [current, setCurrent] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined,
  );

  const goTo = (index: number, dir: number = 1) => {
    setDirection(dir);
    setCurrent((index + images.length) % images.length);
  };

  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, [isHovered]);

  const prev = () => goTo(current - 1, -1);
  const next = () => goTo(current + 1, 1);

  return (
    <>
      <SmoothScroll>
        {/* Section - 1 */}
        <section className="container w-full max-h-screen overflow-hidden flex flex-col items-center justify-start">
          {/* Heading */}
          <p className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[var(--color-secondary)]" />
            Media & Impact
            <span className="w-8 h-px bg-[var(--color-secondary)]" />
          </p>

          <h1
            className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center mb-10"
          >
            Reviving Water,{" "}
            <span className="text-[var(--color-primary)]">Reviving Life</span>
          </h1>

          {/* YOUTUBE VIDEO */}
          <div className="w-full max-w-7xl aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/EqBlc-0o8tk"
              title="Water Structure Impact"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </section>

        {/* Section - 2 */}
        <section className="container">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <p className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.25em] uppercase mb-3 flex items-center gap-3 justify-center lg:justify-start">
                  <span className="w-8 h-px bg-[var(--color-secondary)]" />
                  Explore More
                </p>
                <h2
                  className="text-black text-4xl sm:text-5xl font-bold leading-tight text-center lg:text-start"
                >
                  Know More{" "}
                  <span className="text-[var(--color-primary)]">About US</span>
                </h2>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed lg:max-w-xs text-center lg:text-star">
                Repairing, deepening, and raising check dams. A rainwater
                harvesting initiative.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  img: "/image/Media/About-1.jpg",
                  label: "Videos",
                  Icon: FaVideo,
                  href: "/videos",
                },
                {
                  img: "/image/Media/About-2.jpg",
                  label: "About Us",
                  Icon: FaInfoCircle,
                  href: "/about-us",
                },
                {
                  img: "/image/Media/About-3.jpg",
                  label: "Structure Locations",
                  Icon: FaMapMarkerAlt,
                  href: "/Our-Work",
                },
              ].map(({ img, label, Icon, href }) => (
                <Link key={label} href={href}>
                  <div
                    className="group relative bg-[#111815] rounded-2xl overflow-hidden
                     transition-all duration-300 cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative aspect-[5/4] overflow-hidden">
                      <Image
                        src={img}
                        alt={label}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111815] via-transparent to-transparent" />

                      {/* Icon badge */}
                      <div className="absolute top-4 right-4 w-9 h-9 bg-[var(--color-primary)] rounded-lg flex items-center justify-center shadow-md">
                        <Icon
                          className="text-white"
                          size={16}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="p-5">
                      <h3
                        className="text-white font-bold text-lg mb-2"
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                      >
                        {label}
                      </h3>

                      <span className="mt-4 inline-flex items-center gap-2 text-[var(--color-secondary)] text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Explore
                        <span className="w-5 h-px bg-[var(--color-secondary)] group-hover:w-8 transition-all duration-300" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
            
        {/* Section - 3 */}
        <section className="container py-20">
          {/* Heading */}
          <div className="text-center mb-14">
            <p className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-[var(--color-secondary)]" />
              Project Progress
              <span className="w-8 h-px bg-[var(--color-secondary)]" />
            </p>
            <h1
              className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            >
              Construction{" "}
              <span className="text-[var(--color-primary)]">Work </span>Images
            </h1>
          </div>

          {/* Slider Wrapper */}
          <div
            className="relative w-full rounded-3xl overflow-hidden"
            style={{ height: "560px" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Slides */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ x: direction > 0 ? "100%" : "-100%", scale: 1.05 }}
                animate={{ x: 0, scale: 1 }}
                exit={{
                  x: direction > 0 ? "-100%" : "100%",
                  scale: 0.95,
                  opacity: 0,
                }}
                transition={{ duration: 0.75, ease: [0.77, 0, 0.175, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              >
                <img
                  src={images[current].src}
                  alt={images[current].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between z-10">
              {/* Left: Counter + Title */}
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-[var(--color-primary)] font-black text-3xl leading-none"
                        style={{ fontFamily: "monospace" }}
                      >
                        {String(current + 1).padStart(2, "0")}
                      </span>
                      <div className="flex flex-col gap-1">
                        <div className="w-10 h-px bg-white/40" />
                        <span className="text-white/40 text-xs font-bold tracking-widest">
                          {String(images.length).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    <h2
                      className="text-white text-2xl sm:text-3xl font-bold leading-snug max-w-md"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {images[current].title}
                    </h2>

                    <div className="mt-3 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                      <span className="text-white/70 text-[10px] font-semibold tracking-widest uppercase">
                        {images[current].location}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right: Navigation */}
              <div className="flex flex-col items-end gap-4">
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300"
                    aria-label="Previous"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="w-12 h-12 rounded-xl bg-[var(--color-primary)] border border-[var(--color-primary)] flex items-center justify-center text-white hover:bg-white hover:border-white hover:text-black transition-all duration-300"
                    aria-label="Next"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>

                <div className="flex gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i, i > current ? 1 : -1)}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        i === current
                          ? "w-8 bg-[var(--color-primary)]"
                          : "w-1.5 bg-white/30 hover:bg-white/60"
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Auto-progress bar */}
            {!isHovered && (
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10 z-10">
                <motion.div
                  key={current}
                  className="h-full bg-[var(--color-primary)]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                />
              </div>
            )}
          </div>
        </section>
      </SmoothScroll>
    </>
  );
}
