"use client";

import { motion } from "framer-motion";
import SmoothScroll from "../../Component/SmothScrolling";
import { Waves } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Media() {
  const images = [
    {
      src: "/image/check-dam-creat/check-dam-1.jpg",
      title: "Villagers Repairing Check Dam",
    },
    {
      src: "/image/check-dam-creat/check-dam-2.jpg",
      title: "Raw Materials for Water Project",
    },
    {
      src: "/image/check-dam-creat/check-dam-3.jpg",
      title: "Check Dam Framework Construction",
    },
    {
      src: "/image/check-dam-creat/check-dam-4.jpg",
      title: "Construction of a Concrete Check Dam",
    },
    {
      src: "/image/check-dam-creat/check-dam-5.jpg",
      title: "Check Dam Foundation and Curing Process",
    },
    {
      src: "/image/check-dam-creat/check-dam-6.jpeg",
      title: "Enhancing Water Retention Infrastructure",
    },
    {
      src: "/image/check-dam-creat/check-dam-7.jpg",
      title: "Riverbed De-silting and Excavation",
    },
    {
      src: "/image/check-dam-creat/check-dam-8.jpeg",
      title: "Community Cleanup at Check Dam Site",
    },
    {
      src: "/image/check-dam-creat/check-dam-9.jpg",
      title: "Concrete Reinforcement Work",
    },
  ];

  return (
    <SmoothScroll>
      {/* Section 1 - Heading */}
      <section className="container py-24">
        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[var(--color-secondary)]" />
            Project Gallery
            <span className="w-8 h-px bg-[var(--color-secondary)]
" />
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Our Check<span className="text-[var(--color-primary)]"> Dam Work</span>
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto mt-4">
            Explore how communities work together to build and restore check
            dams that conserve water and support sustainable agriculture.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 2  */}
      <section className="container py-20">
        {/* Heading */}
        <div className="mb-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 max-w-4xl mx-auto">
          <div>
            <p className="text-[var(--color-primary)] text-[10px] font-bold tracking-[0.25em] uppercase mb-3 flex items-center gap-3 justify-center lg:justify-start">
              <span className="w-8 h-px bg-[var(--color-primary)]" />
              Explore More
            </p>

            <h2 className="text-black text-4xl sm:text-5xl font-bold leading-tight text-center lg:text-start">
              Know More <span className="text-[var(--color-primary)]">About Us</span>
            </h2>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed text-center lg:text-start lg:max-w-xs">
            Repairing, deepening, and raising check dams. A rainwater harvesting
            initiative.
          </p>
        </div>

        {/* Card */}
        <div className="max-w-xl mx-auto">
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden group hover:shadow-2xl transition">
            {/* Image */}
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/image/check-dam-creat/Location.jpg"
                alt="Check Dams"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-3">Location</h3>

              <Link href="/Our-Work">
                <span className="text-[var(--color-primary)] font-semibold hover:underline">
                  Learn More →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SmoothScroll>
  );
}
