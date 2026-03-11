"use client";

import { motion } from "framer-motion";

import { FaInfoCircle, FaMapMarkerAlt, FaVideo } from "react-icons/fa";
import SmoothScroll from "../../Component/SmothScrolling";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function media() {
  const images = [
    {
      src: "/image/Media/Construction Work Img-1.jpg",
      title: "Heavy Machinery Ground Preparation",
    },
    {
      src: "/image/Media/Construction Work Img-2.jpg",
      title: "Active Site Excavation",
    },
    {
      src: "/image/Media/Construction Work Img-3.jpg",
      title: "Rural Construction Logistics",
    },
    {
      src: "/image/Media/Construction Work Img-4.jpg",
      title: "Check Dam Structural Reinforcement",
    },
    {
      src: "/image/Media/Construction Work Img-5.jpg",
      title: "Self-Loading Concrete Mixer in Operation",
    },
    {
      src: "/image/Media/Construction Work Img-6.jpg",
      title: "Heavy Machinery at the Water's Edge",
    },
    {
      src: "/image/Media/Construction Work Img-7.png",
      title: "mpactful Earthmoving for Groundwater Recharge",
    },
    {
      src: "/image/Media/Construction Work Img-8.jpeg",
      title: "Structural Wall Concreting with Transit Mixer",
    },
    {
      src: "/image/Media/Construction Work Img-9.jpeg",
      title: "Excavator Desilting and Site Clearance",
    },
    {
      src: "/image/Media/Construction Work Img-10.jpg",
      title: "Manual Finishing of Concrete Slope",
    },
    {
      src: "/image/Media/Construction Work Img-11.jpg",
      title: "Hyundai Excavator Working in Water Basin",
    },
    {
      src: "/image/Media/Construction Work Img-12.jpg",
      title: "upervised Concrete Pour for Water Channel",
    },
    {
      src: "/image/Media/Construction Work Img-13.jpeg",
      title: "Precision Excavation Near Existing Structures",
    },
    {
      src: "/image/Media/Construction Work Img-14.jpeg",
      title: "Sany Excavator Loading Tipper Truck",
    },
  ];
  return (
    <>
      <SmoothScroll>
        {/* Section - 1 */}
        <section className="container w-full max-h-screen overflow-hidden flex flex-col items-center justify-start">
          {/* Heading */}
          <p className="text-[var(--color-yell)] text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[var(--color-yell)]" />
            Media & Impact
            <span className="w-8 h-px bg-[var(--color-yell)]" />
          </p>

          <h1
            className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center mb-10"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Reviving Water, <span className="text-[var(--color-greenish)]">Reviving Life</span>
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
                <p className="text-[var(--color-yell)] text-[10px] font-bold tracking-[0.25em] uppercase mb-3 flex items-center gap-3 justify-center lg:justify-start">
                  <span className="w-8 h-px bg-[var(--color-yell)]" />
                  Explore More
                </p>
                <h2
                  className="text-black text-4xl sm:text-5xl font-bold leading-tight text-center lg:text-start"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Know More <span className="text-[var(--color-greenish)]">About Us</span>
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
                      <div className="absolute top-4 right-4 w-9 h-9 bg-[var(--color-greenish)] rounded-lg flex items-center justify-center shadow-md">
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

                      <span className="mt-4 inline-flex items-center gap-2 text-[var(--color-yell)] text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Explore
                        <span className="w-5 h-px bg-[var(--color-yell)] group-hover:w-8 transition-all duration-300" />
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
            <p className="text-[var(--color-yell)] text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-[var(--color-yell)]" />
              Project Progress
              <span className="w-8 h-px bg-[var(--color-yell)]" />
            </p>
            <h1
              className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Construction <span className="text-[var(--color-greenish)]">Work </span>
              Images
            </h1>
          </div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-[360px] object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                  <div className="p-6">
                    <p className="text-white text-lg font-semibold">
                      {img.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </SmoothScroll>
    </>
  );
}
