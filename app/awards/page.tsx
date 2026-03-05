"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SmoothScroll from "../../Component/SmothScrolling";

const awards = [
  {
    id: 1,
    title: "Jal Prahari Award",
    image: "/image/Award/Jal Pahari Award.jpg",
    dic: "Jal Prahari Award 2023 – UNOPS & Ministry of Jal Shakti",
  },
  {
    id: 2,
    title: "Jal Ratna Award",
    image: "/image/Award/Jal Ratana Award.jpg",
    dic: "Jal Ratna Award",
  },
  {
    id: 3,
    title: "Mayor’s Award",
    image: "/image/Award/Mayor's Award.jpg",
    dic: "Mayor’s Award 2024 – Rajkot Municipal Corporation",
  },
  {
    id: 4,
    title: "National Water Mission",
    image: "/image/Award/Nataion water mission.jpeg",
    dic: "MoU with National Water Mission, Ministry of Jal Shakti",
  },
  {
    id: 5,
    title: "NGO Award",
    image: "/image/Award/NGO Award.jpg",
    dic: "Best NGO Award 2025 by Ministry of Jal Shakti under Jal Sanchay Jan Bhagidari (JSJB) 1.0",
  },
];

export default function AwardsSection() {
  const [current, setCurrent] = useState(0);

  // Auto Slide every 4 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % awards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const newsUrl =
    "https://www.devdiscourse.com/article/business/3824019-tragedy-in-the-sewers-safety-negligence-claims-two-lives";

  return (
    <>
      <SmoothScroll>
        <section className="container bg-slate-50 py-16">
          <div className="mx-auto px-4">
            {/* Section Heading */}
            <div className="text-center mb-12 space-y-5 mx-auto">
              <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-700 mx-auto">
                Awards Received by Girganga Parivar
              </h2>
              <p className=" text-2xl mt-3">
                Champion of Global CSR & ESG 2025 for Water Conservation
              </p>

              <p className="text-lg text-slate-600 w-full mx-auto">
                Girganga Parivar has been nationally recognized for its
                outstanding contribution to water conservation, river
                rejuvenation, and sustainable environmental initiatives. These
                prestigious awards reflect our commitment towards community
                participation and responsible water management.
              </p>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {awards.map((award, index) => (
                <div key={award.id} className="group cursor-pointer">
                  {/* Image Card */}
                  <div className="group relative w-full h-auto sm:h-[350px] lg:h-[400px] overflow-hidden rounded-xl">
                    <Image
                      src={award.image}
                      alt={award.title}
                      width={500}
                      height={300}
                      className="object-fix w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                      <p className="text-white text-lg font-semibold text-center px-4">
                        {award.title}
                      </p>
                    </div>
                  </div>

                  {/* Title Below Card (Always Visible) */}
                  <h3 className="mt-4 text-center text-lg font-semibold text-emerald-700">
                    {award.dic}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section - 2 */}
        <section className="py-10 bg-gray-100 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Latest News Update
          </h2>

          <p className="text-gray-600 mb-6">
            Click the button below to read the full news article about the
            tragedy in the sewers and related safety negligence claims.
          </p>

          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
            Read Full News
          </a>
        </section>
      </SmoothScroll>
    </>
  );
}
