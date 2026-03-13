"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swiper from "swiper";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import { X, ZoomIn } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

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

function Lightbox({ src, onClose }) {
  useEffect(() => {
    const h = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full"
      >
        <img
          src={src}
          alt=""
          className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
        />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center"
        >
          <X size={18} className="text-white" />
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function PressGalleryPage() {
  const swiperRef = useRef(null);
  const swiperInst = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    swiperInst.current = new Swiper(swiperRef.current, {
      modules: [EffectCoverflow, Autoplay, Navigation],

      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,

      slidesPerView: 1.2,

      breakpoints: {
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2.6 },
        1280: { slidesPerView: 3 },
      },

      speed: 1400,

      autoplay: {
        delay: 2200,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 250,
        modifier: 1,
        slideShadows: false,
      },

      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
      },
    });

    return () => swiperInst.current?.destroy(true, true);
  }, []);

  return (
    <>
      <div className=" bg-white max-h-screen overflow-hidden">
        {/* HEADER */}
        <section className="pt-16 pb-8 text-center relative px-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 md:w-[700px] w-[220px] h-56 bg-[var(--color-primary)]/10 rounded-full blur-3xl pointer-events-none" />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[var(--color-secondary)] text-[10px] font-black tracking-[0.38em] uppercase mb-3 flex items-center justify-center gap-3"
          >
            <span className="w-8 h-px bg-[var(--color-secondary)]" />
            Press Coverage
            <span className="w-8 h-px bg-[var(--color-secondary)]" />
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900"
          >
            Press{" "}
            <span className="text-[var(--color-primary)]">Photo Galleries</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-400 text-sm mt-4 max-w-lg mx-auto leading-relaxed"
          >
            Explore highlights from our press coverage showcasing water
            conservation initiatives across Saurashtra.
          </motion.p>
        </section>

        {/* SLIDER */}
       <section className="relative py-10">

  <button className="swiper-btn-prev absolute top-1/2 left-4 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/80 shadow flex items-center justify-center hover:bg-white transition">
    &#10094;
  </button>

  <button className="swiper-btn-next absolute top-1/2 right-4 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/80 shadow flex items-center justify-center hover:bg-white transition">
    &#10095;
  </button>

  <div ref={swiperRef} className="swiper">
            <div className="swiper-wrapper">
              {galleryItems.map((img, i) => (
                <div
                  key={i}
                  className="swiper-slide group cursor-pointer"
                  onClick={() => setLightbox(img)}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={img}
                      alt={`Press ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition w-12 h-12 rounded-full bg-white/25 backdrop-blur flex items-center justify-center">
                        <ZoomIn size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>

      {/* SLIDE SIZE */}
      <style>{`

      .swiper{
        width:100%;
        padding-top:40px;
        padding-bottom:60px;
      }

      .swiper-slide{
        width:100%;
        height:220px;
      }

      @media (min-width:640px){
        .swiper-slide{ height:260px; }
      }

      @media (min-width:768px){
        .swiper-slide{ height:300px; }
      }

      @media (min-width:1024px){
        .swiper-slide{ height:460px; }
      }

      `}</style>
    </>
  );
}
