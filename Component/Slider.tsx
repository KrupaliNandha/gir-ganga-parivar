"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Slider() {
  const sliders = [
    "/logos/BALAJI_MULTIFLEX_PVT_LTD.png",
    "/logos/BALAJI_WAFERS_PVT_LTD.png",
    "/logos/Bombay_Super_Hybrid_Seeds_Limited.png",
    "/logos/DML_GROUP.png",
    "/logos/Emipro_Technologies_Pvt_Ltd.png",
    "/logos/Four_square.png",
    "/logos/GETCO.png",
    "/logos/GOPAL_SNACKS_LTD.png",
    "/logos/KSP_Auto_Forge_Pvt_Ltd.png",
    "/logos/LADANI_ASSOCIATES_PVT_LTD.png",
    "/logos/LEGACY_COMODITIES_PVT_LTD.png",
    "/logos/MURLIDHAR_FAM.png",
    "/logos/ORBIT_BEARING_PVT_LTD.png",
    "/logos/RMC.png",
    "/logos/ROTECH.png",
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
              duration: 90,
              ease: "linear",
            }}
            style={{ width: "max-content" }}
          >
            {[...sliders, ...sliders, ...sliders].map((src, index) => (
              <div
                key={index}
                className="relative flex justify-center items-center "
                style={{ width: 140, height: 90 }}
              >
                <Image
                  src={src}
                  alt="brand logo"
                  fill
                  className="object-contain"
                  quality={75}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}