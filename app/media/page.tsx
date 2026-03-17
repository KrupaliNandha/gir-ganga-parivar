"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SmoothScroll from "../../Component/SmothScrolling";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
  FreeMode,
} from "swiper/modules";
import {
  FaSearchPlus,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

/* ─── Award Images ─── */
const awardImages = [
  {
    src: "/image/Award/NGO Award.jpg",
    caption: "Best NGO Award — Jal Shakti, New Delhi",
    year: "2026",
  },
  {
    src: "/image/Media/Constructions Work Img-4.jpg",
    caption: "Indian CSR Award — Brand Honchos",
    year: "2025",
  },
  {
    src: "/image/Media/Constructions Work Img-7.png",
    caption: "Global CSR & ESG Awards",
    year: "2025",
  },
  {
    src: "/image/Award/Mayor's Award.jpg",
    caption: "Mayor Award — Rajkot Municipal Corporation",
    year: "2024",
  },
  {
    src: "/image/Award/Jal Pahari Award.jpg",
    caption: "Jal Prahari — Ministry of Jal Shakti & UNOPS",
    year: "2023",
  },
];

/* ─── Awards Data ─── */
const awards = [
  {
    sr: 1,
    year: "2026",
    title: "Best NGO Award 2025 (JSJB 1.0)",
    agency: "Ministry of Jal Shakti, Government of India",
    icon: "🏆",
  },
  {
    sr: 2,
    year: "2025",
    title: "Indian CSR Award",
    agency: "Brand Honchos",
    icon: "🥇",
  },
  {
    sr: 3,
    year: "2025",
    title: "Global CSR & ESG Awards 2025",
    agency: "Narayan Seva Sansthan",
    icon: "🌍",
  },
  {
    sr: 4,
    year: "2024",
    title: "Mayor Award",
    agency: "Rajkot Municipal Corporation, Rajkot",
    icon: "🏙️",
  },
  {
    sr: 5,
    year: "2023",
    title: "Jal Prahari",
    agency: "Ministry of Jal Shakti, Government of India and UNOPS",
    icon: "💧",
  },
];

/* ─── Event Photos ─── */
const eventPhotos = [
  {
    src: "/image/Event/IMG_7531.JPG",
  },
  {
    src: "/image/Event/IMG_7533.JPG",
  },
  {
    src: "/image/Event/IMG_7535.JPG",
  },
  {
    src: "/image/Event/IMG_7538.JPG",
  },
  {
    src: "/image/Event/IMG_7544.JPG",
  },
  {
    src: "/image/Event/IMG_7614.JPG",
  },
  {
    src: "/image/Event/IMG_7616.JPG",
  },
  {
    src: "/image/Event/IMG_8778.JPG",
  },
  {
    src: "/image/Event/IMG_8781.JPG",
  },
  {
    src: "/image/Event/IMG_8790.JPG",
  },
  {
    src: "/image/Event/IMG_8794.JPG",
  },
  {
    src: "/image/Event/IMG_8797.JPG",
  },

  {
    src: "/image/Event/Sequence 01.Still001.jpg",
  },
  {
    src: "/image/Event/Sequence 01.Still002.jpg",
  },
  {
    src: "/image/Event/Sequence 01.Still003.jpg",
  },
  {
    src: "/image/Event/Sequence 01.Still009.jpg",
  },
  {
    src: "/image/Event/Sequence 01.Still010.jpg",
  },
  {
    src: "/image/Event/Sequence 01.Still011.jpg",
  },
  {
    src: "/image/Event/Sequence 01.Still012.jpg",
  },
];

const galleryItems = [
  {
    img: "/image/press/news1.jpg",
  },
  {
    img: "/image/press/news2.jpg",
  },
  {
    img: "/image/press/news3.jpg",
  },
  {
    img: "/image/press/news4.jpg",
  },
  {
    img: "/image/press/news5.jpg",
  },
  {
    img: "/image/press/news6.jpg",
  },
  {
    img: "/image/press/news7.jpg",
  },
  {
    img: "/image/press/news8.jpg",
  },
  {
    img: "/image/press/news9.jpg",
  },
  {
    img: "/image/press/news10.jpg",
  },
  {
    img: "/image/press/news11.jpg",
  },
  {
    img: "/image/press/news12.jpg",
  },
  {
    img: "/image/press/news13.jpg",
  },
  {
    img: "/image/press/news14.jpg",
  },
  {
    img: "/image/press/news15.jpg",
  },
  {
    img: "/image/press/news16.jpg",
  },
  {
    img: "/image/press/news17.png",
  },
  {
    img: "/image/press/news18.png",
  },
  {
    img: "/image/press/news19.jpeg",
  },
];

export default function Media() {
  /* ── Award Slider State ── */
  const [visibleAwards, setVisibleAwards] = useState(false);
  const awardsRef = useRef<HTMLDivElement>(null);
  const [activeAward, setActiveAward] = useState(0);
  const [awardImgDir, setAwardImgDir] = useState(1);
  const [isAwardHovered, setIsAwardHovered] = useState(false);
  const awardTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  /* ── Event Slider State ── */
  const [isEventHovered, setIsEventHovered] = useState(false);

  /* Intersection Observer for triggering animations */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisibleAwards(true);
      },
      { threshold: 0.15 },
    );
    if (awardsRef.current) obs.observe(awardsRef.current);
    return () => obs.disconnect();
  }, []);

  /* Auto-advance Award Images */
  useEffect(() => {
    if (isAwardHovered) {
      clearInterval(awardTimerRef.current);
      return;
    }
    awardTimerRef.current = setInterval(() => {
      setAwardImgDir(1);
      setActiveAward((prev) => (prev + 1) % awardImages.length);
    }, 3500);
    return () => clearInterval(awardTimerRef.current);
  }, [isAwardHovered]);

  // Triple images for seamless infinite loop
  const infinitePhotos = [...eventPhotos, ...eventPhotos, ...eventPhotos];

  return (
    <SmoothScroll>
      {/* ── HERO ── */}
      <section className="container ">
        <div className="text-center mb-2">
          <p className="text-[var(--color-secondary)] text-[10px] font-black tracking-[0.35em] uppercase mb-3 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[var(--color-secondary)]" />
            Media & News
            <span className="w-8 h-px bg-[var(--color-secondary)]" />
          </p>
          <h1 className="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            Recognition,{" "}
            <span className="text-[var(--color-primary)]">
              Stories & Impact
            </span>
          </h1>
          <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto mt-5" />
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section className="container" ref={awardsRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT: Award List */}
          <div className="space-y-3">
            <div className="mb-10 text-center lg:text-left">
              <p className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.3em] uppercase mb-2 flex items-center justify-center lg:justify-start gap-3">
                <span className="w-8 h-[2px] bg-[var(--color-secondary)]"></span>{" "}
                {/* Left side line */}
                Honours Received
                <span className="w-8 h-[2px] bg-[var(--color-secondary)]"></span>{" "}
              </p>

              <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Awards &{" "}
                <span className="text-[var(--color-primary)]">
                  Recognitions
                </span>
              </h2>
            </div>

            {awards.map((award, i) => (
              <motion.div
                key={award.sr}
                initial={{ opacity: 0, x: -32 }}
                animate={visibleAwards ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => {
                  setAwardImgDir(i > activeAward ? 1 : -1);
                  setActiveAward(i);
                }}
                className={`group flex items-start gap-4 rounded-2xl border px-5 py-4 cursor-pointer transition-all duration-300 ${
                  i === activeAward
                    ? "bg-[var(--color-primary)] border-[var(--color-primary)] shadow-lg"
                    : "bg-white border-gray-200"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center font-black ${i === activeAward ? "bg-white/20 text-white" : "bg-gray-50 text-[var(--color-primary)]"}`}
                >
                  <span className="text-[10px] opacity-70 uppercase">Year</span>
                  <span className="text-base">{award.year}</span>
                </div>
                <div className="flex-1">
                  <p
                    className={`font-black text-base ${i === activeAward ? "text-white" : "text-gray-900"}`}
                  >
                    {award.title}
                  </p>
                  <p
                    className={`text-xs ${i === activeAward ? "text-white/70" : "text-gray-500"}`}
                  >
                    {award.agency}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Award Image Slider */}
          <div
            className="relative rounded-3xl overflow-hidden border-2 border-gray-100 shadow-xl"
            style={{ aspectRatio: "4/3" }}
            onMouseEnter={() => setIsAwardHovered(true)}
            onMouseLeave={() => setIsAwardHovered(false)}
          >
            <AnimatePresence initial={false} custom={awardImgDir}>
              <motion.div
                key={activeAward}
                custom={awardImgDir}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={awardImages[activeAward].src}
                  alt="Award"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-bold leading-tight">
                    {awardImages[activeAward].caption}
                  </p>
                  <span className="text-xs text-[var(--color-primary)] font-bold">
                    {awardImages[activeAward].year}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Press coverage ── */}
      <>
        <section className="container overflow-hidden  bg-white">
          <div className="mx-auto">
            {/* ── HEADER SECTION ── */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
              <div className="text-center lg:text-left">
                <p className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.3em] uppercase mb-2 flex items-center justify-center lg:justify-start gap-3">
                  <span className="w-8 h-[2px] bg-[var(--color-secondary)]"></span>
                  Event In The Spotlight
                  <span className="w-8 h-[2px] bg-[var(--color-secondary)] "></span>
                </p>

                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl font-black whitespace-nowrap uppercase">
                    Press{" "}
                    <span className="text-[var(--color-primary)]">
                      coverage
                    </span>
                  </h2>
                </div>
              </div>

              {/* DESKTOP NAVIGATION */}
              <div className="hidden lg:flex gap-4">
                <button className="custom-prev flex items-center justify-center w-14 h-14 rounded-full border border-gray-200 hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:text-white transition-all duration-300">
                  <FaArrowLeft />
                </button>
                <button className="custom-next flex items-center justify-center w-14 h-14 rounded-full border border-gray-200 hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:text-white transition-all duration-300">
                  <FaArrowRight />
                </button>
              </div>
            </div>

            {/* ── SWIPER SLIDER ── */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              pagination={{ clickable: true }}
              className="press-swiper !overflow-visible pb-40"
            >
              {galleryItems.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="!w-[280px] sm:!w-[450px] md:!w-[550px]"
                >
                  {({ isActive }) => (
                    <motion.div
                      animate={{
                        scale: isActive ? 1 : 0.85,
                        opacity: isActive ? 1 : 0.4,
                      }}
                      transition={{ duration: 0.5 }}
                      className="relative group cursor-pointer"
                      onClick={() => setSelectedImg(item.img)}
                    >
                      <div className="relative h-[380px] sm:h-[570px] w-full bg-gray-100 rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl">
                        <img
                          src={item.img}
                          alt="press coverage"
                          className="w-full h-full object-cover transition-all duration-700"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                            <FaSearchPlus className="text-white text-xl" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* MOBILE NAVIGATION: Moblie screen button */}
            <div className="flex lg:hidden gap-4 justify-center mt-23">
              <button className="custom-prev flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 hover:bg-[var(--color-primary)] hover:text-white transition-all">
                <FaArrowLeft />
              </button>
              <button className="custom-next flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 hover:bg-[var(--color-primary)] hover:text-white transition-all">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </section>

        {/* ── LIGHTBOX ── */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-white/90 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setSelectedImg(null)}
            >
              <button className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-black text-white">
                <FaTimes />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={selectedImg}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <style jsx global>{`
          /* Pagination Dots Fix */
          .press-swiper .swiper-pagination {
            bottom: -80px !important;
          }
          .press-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #333;
            opacity: 0.2;
            transition: all 0.3s ease;
          }
          .press-swiper .swiper-pagination-bullet-active {
            width: 35px;
            border-radius: 20px;
            background: var(--color-primary) !important;
            opacity: 1;
          }
        `}</style>

        {/* ── Modern Lightbox ── */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-white/80 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setSelectedImg(null)}
            >
              <button className="absolute top-10 right-10 w-12 h-12 flex items-center justify-center rounded-full bg-black text-white hover:rotate-90 transition-transform duration-500">
                <FaTimes />
              </button>

              <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 50, opacity: 0, scale: 0.9 }}
                className="relative max-w-5xl w-full h-[85vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImg}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.2)]"
                  alt="Press Zoom"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <style jsx global>{`
          .press-swiper .swiper-pagination {
            bottom: -40px !important;
          }
          .press-swiper .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #ccc;
            opacity: 1;
            transition: all 0.3s;
          }
          .press-swiper .swiper-pagination-bullet-active {
            width: 40px;
            border-radius: 20px;
            background: var(--color-primary);
          }
        `}</style>
      </>

      {/* ── EVENT PHOTOS ── */}
      <section className="container overflow-hidden ">
        <div className="mb-8">
          {/* TOP SMALL LABEL WITH LEFT LINE */}
          <p className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.3em] uppercase mb-2 flex items-center justify-center lg:justify-start gap-3">
            <span className="w-8 h-[2px] bg-[var(--color-secondary)]"></span>{" "}
            {/* Left side line */}
            Event
            <span className="w-8 h-[2px] bg-[var(--color-secondary)]"></span>{" "}
          </p>

          {/* MAIN HEADING WITH RIGHT SLIDE LINE */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl font-black whitespace-nowrap">
              Event <span className="text-[var(--color-primary)]">Photos</span>
            </h2>
          </div>
        </div>

        <div className=" relative flex">
          <motion.div
            className="flex gap-5"
            animate={{ x: isEventHovered ? undefined : ["0%", "-33.33%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 100,
                ease: "linear",
              },
            }}
            style={{ width: "max-content" }}
          >
            {infinitePhotos.map((photo, i) => (
              <div
                key={i}
                className="group relative w-[300px] md:w-[400px] h-[350px] md:h-[450px] mx-auto rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 border border-gray-100"
              >
                <Image
                  src={photo.src}
                  alt={photo.src}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-90" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── News articles ── */}
      <>
        <section className="container overflow-hidden  bg-white">
          <div className="mx-auto">
            {/* ── HEADER SECTION ── */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
              <div className="text-center lg:text-left">
                <p className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.3em] uppercase mb-2 flex items-center justify-center lg:justify-start gap-3">
                  <span className="w-8 h-[2px] bg-[var(--color-secondary)]"></span>
                  Event In The Spotlight
                  <span className="w-8 h-[2px] bg-[var(--color-secondary)] "></span>
                </p>

                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl font-black whitespace-nowrap uppercase">
                    News{" "}
                    <span className="text-[var(--color-primary)]">
                      Articles
                    </span>
                  </h2>
                </div>
              </div>

              {/* DESKTOP NAVIGATION */}
              <div className="hidden lg:flex gap-4">
                <button className="custom-prev flex items-center justify-center w-14 h-14 rounded-full border border-gray-200 hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:text-white transition-all duration-300">
                  <FaArrowLeft />
                </button>
                <button className="custom-next flex items-center justify-center w-14 h-14 rounded-full border border-gray-200 hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:text-white transition-all duration-300">
                  <FaArrowRight />
                </button>
              </div>
            </div>

            {/* ── SWIPER SLIDER ── */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              pagination={{ clickable: true }}
              className="press-swiper !overflow-visible pb-40"
            >
              {galleryItems.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="!w-[280px] sm:!w-[450px] md:!w-[550px]"
                >
                  {({ isActive }) => (
                    <motion.div
                      animate={{
                        scale: isActive ? 1 : 0.85,
                        opacity: isActive ? 1 : 0.4,
                      }}
                      transition={{ duration: 0.5 }}
                      className="relative group cursor-pointer"
                      onClick={() => setSelectedImg(item.img)}
                    >
                      <div className="relative h-[380px] sm:h-[570px] w-full bg-gray-100 rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl">
                        <img
                          src={item.img}
                          alt="press coverage"
                          className="w-full h-full object-cover transition-all duration-700"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                            <FaSearchPlus className="text-white text-xl" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* MOBILE NAVIGATION: Moblie screen button */}
            <div className="flex lg:hidden gap-4 justify-center mt-23">
              <button className="custom-prev flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 hover:bg-[var(--color-primary)] hover:text-white transition-all">
                <FaArrowLeft />
              </button>
              <button className="custom-next flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 hover:bg-[var(--color-primary)] hover:text-white transition-all">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </section>

        {/* ── LIGHTBOX ── */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-white/90 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setSelectedImg(null)}
            >
              <button className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-black text-white">
                <FaTimes />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={selectedImg}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <style jsx global>{`
          /* Pagination Dots Fix */
          .press-swiper .swiper-pagination {
            bottom: -80px !important;
          }
          .press-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #333;
            opacity: 0.2;
            transition: all 0.3s ease;
          }
          .press-swiper .swiper-pagination-bullet-active {
            width: 35px;
            border-radius: 20px;
            background: var(--color-primary) !important;
            opacity: 1;
          }
        `}</style>

        {/* ── Modern Lightbox ── */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-white/80 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setSelectedImg(null)}
            >
              <button className="absolute top-10 right-10 w-12 h-12 flex items-center justify-center rounded-full bg-black text-white hover:rotate-90 transition-transform duration-500">
                <FaTimes />
              </button>

              <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}

                
                exit={{ y: 50, opacity: 0, scale: 0.9 }}
                className="relative max-w-5xl w-full h-[85vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImg}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.2)]"
                  alt="Press Zoom"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <style jsx global>{`
          .press-swiper .swiper-pagination {
            bottom: -40px !important;
          }
          .press-swiper .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #ccc;
            opacity: 1;
            transition: all 0.3s;
          }
          .press-swiper .swiper-pagination-bullet-active {
            width: 40px;
            border-radius: 20px;
            background: var(--color-primary);
          }
        `}</style>
      </>
    </SmoothScroll>
  );
}
