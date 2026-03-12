"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Play, Youtube, ArrowRight, X } from "lucide-react";

/* ─────────────────────────────────────
   Animations
───────────────────────────────────── */

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const floating: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
/* ─────────────────────────────────────
   Data
───────────────────────────────────── */

const videoData = [
  {
    id: "fXONzYd59hk",
    start: 4,
    title: "જામનગર જિલ્લાના કાલાવડ તાલુકાના ધુતાપર ગામ",
    description:
      "જામનગર જિલ્લાના કાલાવડ તાલુકાના ધુતાપર ગામે આજની તારીખે જે ચેકડેમમાંથી પાણી જતું રહે છે. તે ચેકડેમ લગભગ 400 ફૂટથી વધુ મોટો એટલે લાંબો છે.",
    tag: "ચેકડેમ",
  },
  {
    id: "QsYMEPEJMSg",
    title: "ચંદુભાઈ વિરાણીનું જળ અભિયાન | ગુજરાતની તરસ છીપાવશે!",
    description:
      "ગીરગંગા પરિવાર ટ્રસ્ટ અને પ્રેરણાદાયી ચંદુભાઈ વિરાણી ગુજરાતને જળસમૃદ્ધ બનાવવા માટે એક ભગીરથ કાર્ય કરી રહ્યા છે.",
    tag: "જળ અભિયાન",
  },
  {
    id: "6TeQkl9PKHU",
    title: "કેન્દ્રીય જળ મંત્રી શ્રી સી.આર.પાટીલ સાહેબ દ્વારા સરાહના",
    description:
      "ગીરગંગા પરિવાર ટ્રસ્ટ દ્વારા વરસાદી અમૃત સમાન શુદ્ધ પાણી બચાવવાના કાર્યની ભૂરી ભૂરી પ્રશંસા.",
    tag: "સરકારી સ્વીકૃતિ",
  },
  {
    id: "B5FhjlVkico",
    title: "ગ્રામ વિકાસ — ખેડૂત સહયોગ અભિયાન",
    description:
      "ગ્રામના નેતાઓ, સરકારી અધિકારીઓ અને સમુદાયના સભ્યો સાથે સહયોગ દ્વારા ગ્રામ વિકાસ.",
    tag: "ગ્રામ વિકાસ",
  },
  {
    id: "XjlOX0_PV_c",
    title: "ગ્રામ નેતાઓ સાથે સહયોગ",
    description:
      "ગ્રામ નેતાઓ, સરકારના અધિકારીઓ અને સમુદાયના સભ્યો સાથે સહયોગ દ્વારા અનેક પ્રોજેક્ટ્સ સફળ.",
    tag: "સામુદાયિક",
  },
  {
    id: "B5FhjlVkico",
    title: "નાનો પ્રયાસ, મોટું પરિવર્તન — જળ ક્રાંતિ 2025",
    description:
      "ભરતભાઈ ભોઘરાનો 'જળ ક્રાંતિ 2025' માટેનો દ્રષ્ટિકોણ, પાણી બચાવ, ચેકડેમ, વૃક્ષારોપણ.",
    tag: "જળ ક્રાંતિ 2025",
  },
];

/* ─────────────────────────────────────
   Lightbox
───────────────────────────────────── */

function Lightbox({ video, onClose }: any) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8 }}
          transition={{ type: "spring", stiffness: 120 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
              title={video.title}
              allowFullScreen
            />
          </div>

          <div className="px-6 py-4 flex justify-between items-center">
            <div>
              <p className="text-xs font-bold text-[var(--color-secondary)] uppercase">
                {video.tag}
              </p>
              <p className="font-semibold text-gray-800">{video.title}</p>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────
   Video Card
───────────────────────────────────── */

function VideoCard({ video, onPlay }: any) {
  const thumb = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onPlay}
      className="flex rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm cursor-pointer hover:shadow-xl transition"
    >
      {/* Left Content */}
      <div className="p-6 flex flex-col justify-center flex-1">
        <span className="text-xs font-bold text-[var(--color-secondary)] uppercase mb-2">
          {video.tag}
        </span>

        <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {video.description}
        </p>

        <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
          <Play size={16} /> Watch Video
        </div>
      </div>

      {/* Thumbnail */}
      <motion.div
  variants={floating}
  initial="animate"
  animate="animate"
  className="relative w-56"
>
        <img
          src={thumb}
          className="w-full h-full object-cover"
          alt={video.title}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[var(--color-primary)] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg">
            <Play size={18} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────
   Page
───────────────────────────────────── */

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<any>(null);

  return (
    <div className="bg-white min-h-screen text-gray-900">

      {/* HERO */}

      <section className="relative py-16 bg-[var(--bg-tersery)]">
        <div className="containers text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-black mb-4"
          >
            Water{" "}
            <span className="text-[var(--color-primary)]">
              Revolution
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-xl mx-auto"
          >
            Stories of water conservation, community support and check dam
            restoration across Gujarat.
          </motion.p>

        </div>
      </section>

      {/* SECTION TITLE */}

      <div className="containers mb-10 flex justify-between items-center border-b border-gray-200 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-1 h-6 bg-[var(--color-secondary)]"></span>
          <h2 className="text-xl font-bold">Latest Videos</h2>
        </div>

        <a
          href="https://www.youtube.com/@girgangaparivartrust"
          target="_blank"
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-[var(--color-primary)]"
        >
          View All <ArrowRight size={14} />
        </a>
      </div>

      {/* VIDEO GRID */}

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="containers grid md:grid-cols-2 gap-6 pb-20"
      >
        {videoData.map((video, i) => (
          <VideoCard
            key={i}
            video={video}
            onPlay={() => setActiveVideo(video)}
          />
        ))}
      </motion.div>

      {/* CTA */}

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="containers pb-24"
      >
        <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-3xl text-center py-16 px-8">

          <p className="text-xs uppercase text-gray-500 mb-3">
            Gir Ganga Parivar Trust
          </p>

          <h3 className="text-4xl font-bold mb-4">
            Water Means Life
          </h3>

          <p className="text-gray-600 max-w-md mx-auto mb-8">
            Watch our complete journey of water conservation and community impact.
          </p>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.youtube.com/@girgangaparivartrust"
            target="_blank"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            <Youtube size={18} />
            Visit YouTube Channel
          </motion.a>

        </div>
      </motion.section>

      {/* LIGHTBOX */}

      {activeVideo && (
        <Lightbox
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}

    </div>
  );
}