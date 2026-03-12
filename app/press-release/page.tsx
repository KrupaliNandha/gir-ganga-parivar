"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swiper from "swiper";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

/* ─────────────────────────────────────
   Data
───────────────────────────────────── */
const galleryItems = [
  "/image/press/news1.jpg",
  "/image/press/news2.jpg",
  "/image/press/news3.jpg",
  "/image/press/news4.jpg",
  "/image/press/news5.jpg",
  "/image/press/news6.jpg",
  "/image/press/news7.jpg",
  "/image/press/news8.jpg",
  "/image/press/news9.jpg",
  "/image/press/news10.jpg",
  "/image/press/news11.jpg",
  "/image/press/news12.jpg",
  "/image/press/news13.jpg",
  "/image/press/news14.jpg",
  "/image/press/news15.jpg",
  "/image/press/news16.jpg",
  "/image/press/news17.png",
  "/image/press/news18.png",
  "/image/press/news19.jpeg",
];

/* ─────────────────────────────────────
   Lightbox
───────────────────────────────────── */
function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.84, opacity: 0, y: 30 }}
        animate={{ scale: 1,    opacity: 1, y: 0  }}
        exit   ={{ scale: 0.84, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full"
      >
        <img
          src={src} alt=""
          className="w-full rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] object-contain max-h-[85vh]"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors"
        >
          <X size={18} className="text-white" />
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────
   Page
───────────────────────────────────── */
export default function PressGalleryPage() {
  const swiperRef  = useRef<HTMLDivElement>(null);
  const swiperInst = useRef<Swiper | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    swiperInst.current = new Swiper(swiperRef.current, {
      modules: [EffectCoverflow, Autoplay, Navigation],
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      speed: 1800,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 350,
        modifier: 1,
        slideShadows: false,
      },
      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
      },
    });

    return () => {
      swiperInst.current?.destroy(true, true);
    };
  }, []);

  return (
    <>
      <div className="bg-white min-h-screen overflow-hidden">

        {/* ══════════════════════════════
            HEADER
        ══════════════════════════════ */}
        <section className="pt-16 pb-6 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 md:w-[700px] w-[200px] h-56 bg-[var(--color-primary)]/10 rounded-full blur-3xl pointer-events-none" />

          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[var(--color-secondary)] text-[10px] font-black tracking-[0.38em] uppercase mb-3 flex items-center justify-center gap-3"
          >
            <span className="w-8 h-px bg-[var(--color-secondary)]" />
            Gallery
            <span className="w-8 h-px bg-[var(--color-secondary)]" />
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight"
          >
            Press{" "}
            <span className="text-[var(--color-primary)]">Photo Galleries</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-gray-400 text-sm mt-3 max-w-md mx-auto"
          >
            Visual stories of water conservation across Saurashtra, Gujarat
          </motion.p>
        </section>

        {/* ══════════════════════════════
            COVERFLOW SWIPER
        ══════════════════════════════ */}
        <section className="relative py-6">
          {/* Edge fade masks */}
          <div className="absolute inset-y-0 left-0  w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            ref={swiperRef}
            className="swiper"
            style={{ perspective: "1200px" }}
          >
            <div className="swiper-wrapper">
              {galleryItems.map((img, i) => (
                <div
                  key={i}
                  className="swiper-slide group cursor-pointer"
                  onClick={() => setLightbox(img)}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src={img}
                      alt={`Press photo ${i + 1}`}
                      draggable={false}
                      className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center rounded-2xl">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-xl">
                        <ZoomIn size={20} className="text-white" />
                      </div>
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            NAV BUTTONS
        ══════════════════════════════ */}
        <section className="flex items-center justify-center gap-4 pb-14 pt-2">
          <motion.button
            whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
            className="swiper-btn-prev w-12 h-12 rounded-full border-2 border-gray-200 hover:border-[var(--color-primary)] bg-white hover:bg-[var(--color-primary)] text-gray-500 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm"
          >
            <ChevronLeft size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
            className="swiper-btn-next w-12 h-12 rounded-full border-2 border-gray-200 hover:border-[var(--color-primary)] bg-white hover:bg-[var(--color-primary)] text-gray-500 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm"
          >
            <ChevronRight size={20} />
          </motion.button>
        </section>

        {/* ══════════════════════════════
            THUMBNAIL STRIP
        ══════════════════════════════ */}
        <section className="pb-20">

          <div className="containers">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-1 h-5 bg-[var(--color-secondary)] rounded-full" />
              <h2 className="text-gray-800 font-black text-sm tracking-tight uppercase">All Photos</h2>
              <span className="bg-gray-100 text-gray-400 text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest">
                {galleryItems.length}
              </span>
            </div>
          <div className="absolute -bottom-60 left-1/2 -translate-x-1/2 md:w-[700px] w-[200px] h-56 bg-[var(--color-primary)]/10 rounded-full blur-3xl pointer-events-none" />


            <div className="flex gap-2.5 overflow-x-auto pb-3" style={{ scrollbarWidth: "none" }}>
              {galleryItems.map((img, i) => (
                <motion.button
                  key={i}
                  whileHover={{ y: -5, scale: 1.06, transition: { type: "spring", stiffness: 300 } }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setLightbox(img)}
                  className="flex-shrink-0 rounded-xl overflow-hidden opacity-60 hover:opacity-100 transition-opacity duration-200 ring-1 ring-gray-200 hover:ring-[var(--color-primary)]"
                  style={{ width: 72, height: 56 }}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" draggable={false} />
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
        </AnimatePresence>
      </div>

      {/* ── Swiper slide sizing ── */}
      <style>{`
        .swiper {
          width: 100%;
          padding-top: 40px;
          padding-bottom: 60px;
        }
        .swiper-slide {
          width: 500px;
          height: 300px;
          border-radius: 16px;
          overflow: hidden;
        }
        .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </>
  );
}