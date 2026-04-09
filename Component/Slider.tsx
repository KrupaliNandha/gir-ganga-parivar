"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Slider() {
  const sliders = [
    "/logos/BALAJI WAFERS PVT LTD.png",
    "/logos/BOMBAY SUPER HYBRID SEEDS LTD.jpg",
    "/logos/DML GROUP.png",
    "/logos/Decora Group.jpg",
    "/logos/Emipro Technologies Private Limited.png",
    "/logos/GOPAL SNACKS LTD.png",
    "/logos/HI-BOND CEMENT PVT. LTD..avif",
    "/logos/LADANI ASSOCIATES PVT LTD.png",
    "/logos/ORBIT BEARING PVT  LTD.jpeg",
    "/logos/PGVCL.png",
    "/logos/PRASHANT CASTING PVT LTD.gif",
    "/logos/RAJAN TECHNOFORGE PVT LTD.avif",
    "/logos/RAJKOT MUNICIPAL CORPORATIONS.png",
    "/logos/RAVI TECHNO FORGE PVT LTD.png",
    "/logos/RBA.jpg",
    "/logos/ROLEX RINGS LTD.jpg",
    "/logos/SHAKTIMAN.png",
    "/logos/SHREE GIRIRAJ HOSPITAL.png",
    "/logos/TURBO BEARINGS PVT LTD.jpg",
    "/logos/UGVCL.png",
    "/logos/UNITY CEMENT PVT. LTD..png",
    "/logos/VERMORA TILES PVT. LTD.png",
    "/logos/VERSHIL PUMP PVT LTD.jpeg",
    "/logos/ravi_technoforge_pvt_ltd_logo.jpeg",
  ];

  return (
    <div className="container section-padding w-full overflow-hidden">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[var(--color-primary)] mb-4">
          Our Partners
        </h1>

        <div className="flex pt-10">
          <motion.div
            className="flex gap-10 md:gap-20 lg:gap-30 xl:gap-40"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, // Smooth scrolling speed
              ease: "linear",
            }}
            style={{ width: "max-content" }}
          >
            {[...sliders, ...sliders, ...sliders].map((src, index) => {
              const needsLargerSize =
                src.includes("BOMBAY SUPER HYBRID SEEDS") ||
                src.includes("Decora Group");

              return (
              <div
                key={index}
                className="min-w-[220px] shrink-0 flex justify-center items-center"
              >
                <Image
                  src={src}
                  alt="brand logo"
                  width={needsLargerSize ? 160 : 120}
                  height={needsLargerSize ? 140 : 100}
                  className={`object-contain ${needsLargerSize ? "scale-125" : ""}`}
                  quality={75}
                />
              </div>
            )})}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
