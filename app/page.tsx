"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Droplets } from "lucide-react";
import Link from "next/link";
import { GiRibbonMedal } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import SmoothScroll from "../Component/SmothScrolling";

interface CountUpProps {
  value: number;
  suffix?: string; // The '?' means it is optional
}

const CountUp: React.FC<CountUpProps> = ({ value, suffix = "" }) => {
  const count = useMotionValue(0);

  // Explicitly tell useTransform to return a string
  const rounded = useTransform(
    count,
    (latest: number): string => Math.round(latest).toLocaleString() + suffix,
  );

  useEffect(() => {
    const animation = animate(count, value, { duration: 2, ease: "easeOut" });
    return animation.stop;
  }, [count, value]); // Added 'count' to dependency array for best practice

  return <motion.span>{rounded}</motion.span>;
};

const HeroSection = () => {
  return (
    <>
      <SmoothScroll>
        {/* Section - 1 */}
        <section className="relative container overflow-hidden font-sans">
          {/* Right */}
          <div className="relative min-h-[90vh] flex items-center overflow-hidden">
            {/* Top-right dot pattern */}
            <div
              className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle,  #059669 1.5px, transparent 1.5px)`,
                backgroundSize: "18px 18px",
              }}
            />

            {/* Bottom-left dot pattern */}
            <div
              className="absolute bottom-0 left-0 w-48 h-48 opacity-40 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle,  #059669 1.5px, transparent 1.5px)`,
                backgroundSize: "14px 14px",
              }}
            />

            {/* Diagonal bottom slice */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24 bg-emerald-50 pointer-events-none"
              style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
            />

            <div className="relative z-10 container mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
              {/* LEFT — headline */}
              <div className="space-y-7 text-center lg:text-left">
                {/* pill */}
                <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald text-primary text-[11px] tracking-[0.16em] uppercase px-4 py-2 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  NGO-DARPAN & CSR-1 Registered · Gujarat
                </span>

                {/* headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black  italic leading-[1.0] text-black tracking-tight">
                  Reviving <br />
                  <span className="text-primary italic font-black">
                    {" "}
                    Rivers.
                  </span>
                  <br />
                  Recharging
                  <br />
                  <span className="text-primary italic font-black">
                    Groundwater.
                  </span>
                </h1>

                {/* desc */}
                <p className="text-primary/65 text-md font-semibold leading-relaxed max-w-xl">
                  Girganga Parivar Trust (GGPT) is a Gujarat-based organization
                  working at scale to address water scarcity through
                  community-led conservation structures across drought-prone
                  regions.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 pt-2 text-center lg:text-left justify-center lg:justify-start">
                  <Link href="/donate">
                    <button className="bg-emerald-50  hover:bg-primary text-emerald-600 hover:text-white  px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-black/10 active:scale-95 flex items-center gap-2">
                      Support Us →
                    </button>
                  </Link>
                </div>
              </div>

              {/* RIGHT — video card */}
              <div className="relative">
                {/* offset frame */}
                <div className="absolute -top-3 -right-3 w-full h-full rounded-3xl border-2 border-emerald-600 pointer-events-none" />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30 aspect-[4/3] bg-gray-900">
                  <iframe
                    className="absolute inset-0 w-full h-full object-cover scale-150 pointer-events-none"
                    src="https://www.youtube.com/embed/ZJSRtSWG5DU?autoplay=1&mute=1&loop=1&playlist=ZJSRtSWG5DU&controls=0&showinfo=0&rel=0&modestbranding=1"
                    title="Girganga Parivar Trust Impact"
                    allow="autoplay; encrypted-media"
                  />

                  {/* gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* floating impact card */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="hidden md:block absolute bottom-5 left-5 right-5 md:right-auto bg-white px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-emerald-200/10"
                  >
                    <div className="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-emerald-600/30">
                      <Droplets className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest mb-0.5">
                        Impact Feature
                      </p>
                      <p className="text-sm font-bold text-gray-800">
                        1,057 Borewell Recharges
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* left */}
          <div className="relative bg-white py-16 px-6 lg:px-16">
            <div className="max-w-7xl mx-auto text-center lg:text-left">
              {/* eyebrow */}
              <p className="flex items-center justify-center gap-3 text-emerald-600 text-xs font-bold tracking-[0.18em] uppercase mb-10 pl-4">
                Impact at Scale
                <span className="w-12 h-px bg-emerald-800/30" />
              </p>

              {/* stats grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    label: "Water Structures",
                    val: 8354,
                    suf: "+",
                    desc: "Built & restored",
                  },
                  {
                    label: "Gram Panchayats",
                    val: 580,
                    suf: "+",
                    desc: "Villages covered",
                  },
                  {
                    label: "Check Dams",
                    val: 6189,
                    suf: "",
                    desc: "Across Gujarat",
                  },
                  {
                    label: "CSR Excavators",
                    val: 18,
                    suf: "",
                    desc: "Deployed on ground",
                  },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-white border-2 border-emerald-600/15 rounded-3xl px-7 py-7 hover:border-emerald-600 hover:shadow-xl hover:shadow-emerald-600/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    {/* number watermark */}
                    <span className="absolute top-3 right-4 text-6xl font-black text-emerald-600/[0.06] leading-none pointer-events-none select-none group-hover:text-emerald-600/10 transition-colors">
                      0{idx + 1}
                    </span>

                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-emerald-600 leading-none block mb-2">
                      <CountUp value={stat.val} suffix={stat.suf} />
                    </span>
                    <p className="text-gray-800 font-bold text-xs sm:text-sm text-center mb-1">
                      {stat.label}
                    </p>
                    <p className="text-gray-400 text-sm font-light">
                      {stat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section - 2 */}
        <section className="bg-emerald-50 py-16 px-4 font-sans">
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                Mission & Vision
              </h2>

              <div className="w-24 h-1 bg-emerald-600 mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-10">
              {/* Mission */}
              <div className="bg-white border-2 border-emerald-200 rounded-tl-4xl rounded-br-4xl p-8 shadow-xl">
                <div className="mb-6">
                  <div
                    className="bg-emerald-600 text-white w-14 h-14 
          flex items-center justify-center 
          text-2xl font-bold rounded-lg mb-3"
                  >
                    M
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800">
                    Our Mission
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Our mission is to revolutionize water infrastructure across
                  Gujarat by strategically repairing, deepening, and
                  constructing 1,11,111 water conservation structures –
                  including check dams and bore recharge systems – throughout
                  Gujarat. This comprehensive initiative will maximize rainwater
                  harvesting to ensure sustainable water access for agricultural
                  lands, wildlife ecosystems, and local communities. By
                  combining grassroots participation with environmentally
                  conscious solutions, we’re restoring watersheds, improving
                  biodiversity, and creating lasting water security for future
                  generations.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white border-2 border-emerald-200 rounded-tr-4xl rounded-bl-4xl p-8 shadow-xl">
                <div className="mb-6">
                  <div
                    className="bg-emerald-600 text-white w-14 h-14 
          flex items-center justify-center 
          text-2xl font-bold rounded-lg mb-3"
                  >
                    V
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800">
                    Our Vision
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Our vision is to prevent even a single drop of rainwater from
                  flowing into the sea by promoting responsible rainwater
                  conservation and groundwater recharge. We aim to transform
                  arid regions into fertile, water-abundant landscapes, ensuring
                  water security and ecological balance for future generations.
                  This vision supports the well-being of people and the
                  development of animals, birds, and natural ecosystems. Our
                  efforts directly contribute to the United Nations Sustainable
                  Development Goals, particularly SDG 6 (Clean Water and
                  Sanitation) and SDG 15 (Life on Land).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section - 3 */}
        <section className="container mx-auto px-4 py-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-black text-white text-xl sm:text-2xl font-semibold px-6 py-3 rounded-lg shadow-md shadow-black/20">
              Explore Our Impact
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg transition-shadow duration-300 transition-transform transform hover:-translate-y-1 hover:border-2 hover:border-emerald-600 ">
              <div className="flex justify-center mb-2 ">
                <GiRibbonMedal className="text-emerald-600 text-5xl " />
              </div>
              <p className="text-gray-700 font-medium text-center">
                Partnership with Ministry of Water, Govt. of India
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transition-shadow duration-300 transition-transform transform hover:-translate-y-1 hover:border-2 hover:border-emerald-600 ">
              <div className="flex justify-center mb-2">
                <FaRegHandshake className="text-emerald-600 text-5xl" />
              </div>
              <p className="text-gray-700 font-medium text-center">
                Global CSR & ESG Awards 2025 Winner
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transition-shadow duration-300 transition-transform transform hover:-translate-y-1 hover:border-2 hover:border-emerald-600 ">
              <div className="flex justify-center mb-2">
                <HiUsers className="text-emerald-600 text-5xl" />
              </div>
              <p className="text-gray-700 font-medium text-center">
                Community-Driven Approach
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-10 mt-10 justify-center">
            <a
              href="/partner-with-us-csr"
              className="bg-emerald-600 text-white font-semibold px-10 py-4 rounded-lg shadow-md text-xl select-none transition-transform transform hover:-translate-y-1 inline-block text-center"
            >
              Partner With Us (CSR)
            </a>

            <a
              href="/support-a-structure"
              className="bg-emerald-600 text-white font-semibold px-10 py-4 rounded-lg shadow-md text-xl select-none  ransition-transform transform hover:-translate-y-1 inline-block text-center"
            >
              Support A Structure
            </a>
          </div>
        </section>
      </SmoothScroll>
    </>
  );
};

export default HeroSection;
