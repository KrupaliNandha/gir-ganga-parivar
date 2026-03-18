"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const sliders = [
    "/logos/Associate Allied Chemicals_logo.png",
    "/logos/Balaji Multiflex_logo.jpg",
    "/logos/BALAJI_WAFERS.png",
    "/logos/Dil Exim Commodities_logo.png",
    "/logos/getco_geb_logo.png",
    "/logos/images.png",
    "/logos/Ministry Of Jal Shakti.png",
    "/logos/Orbit Bearings_logo.jpg",
    "/logos/PGVCL.png",
    "/logos/Rajan Technocast_logo.png",
    "/logos/Rolex.png",
    "/logos/UGVCL.png",
    "/logos/Vitrag Foundation_logos.png"
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId: number;

    const scroll = () => {
      slider.scrollLeft += 1;

      // Reset when end reached
      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      
      className="container section-padding w-full overflow-hidden "
    >
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[var(--color-primary)] mb-4">
          Our Partners
        </h1>
        <p className="text-xl font-semibold text-center">
          List of corporate partners who joined our mission
        </p>
        <div
          ref={sliderRef}
          className="flex gap-40 overflow-x-hidden whitespace-nowrap pt-10"
        >
          {/* duplicate images for seamless loop */}
          {[...sliders, ...sliders, ...sliders].map((src, index) => (
            <div key={index} className="min-w-[200px] flex justify-center">
              <Image
                src={src}
                alt="brand logo"
                width={120}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
}
