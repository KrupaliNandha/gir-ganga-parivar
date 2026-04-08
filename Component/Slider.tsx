"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Slider() {
  const sliders = [
    "/logos/Associate Allied Chemicals_logo.png",
    "/logos/Balaji Multiflex_logo.jpg",
    "/logos/BALAJI_WAFERS.png",
    "/logos/Dil Exim Commodities_logo.png",
    "/logos/getco_geb_logo.png",
    "/logos/tata hitachi.jpeg",
    "/logos/Ministry Of Jal Shakti.png",
    "/logos/Orbit Bearings_logo.jpg",
    "/logos/PGVCL.png",
    "/logos/Rajan Technocast_logo.png",
    "/logos/Rolex.png",
    "/logos/UGVCL.png",
    "/logos/Vitrag Foundation_logos.png"
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
            {/* duplicate images for seamless CSS-based loop without React state thrashing */}
            {[...sliders, ...sliders, ...sliders].map((src, index) => (
              <div key={index} className="min-w-[220px] shrink-0 flex justify-center">
                <Image src={src}
                  alt="brand logo"
                  width={120}
                  height={100}
                  className="object-contain" quality={75} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    
    </div>
  );
}
