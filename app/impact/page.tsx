"use client";

import { Award, MapPin, Waves, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SmoothScroll from "../../Component/SmothScrolling";

/* ── Before/After hover image ── */
interface BeforeAfterProps {
  before: string;
  after: string;
  useNextImage?: boolean;
}
const BeforeAfterImage = ({
  before,
  after,
  useNextImage = false,
}: BeforeAfterProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full h-full cursor-pointer select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
    >
      {/* BEFORE */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
        style={{ opacity: hovered ? 0 : 1 }}
      >
        {useNextImage ? (
          <Image src={before} alt="Before" fill className="object-cover" />
        ) : (
          <img
            src={before}
            alt="Before"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* AFTER */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        {useNextImage ? (
          <Image src={after} alt="After" fill className="object-cover" />
        ) : (
          <img src={after} alt="After" className="w-full h-full object-cover" />
        )}
      </div>

      {/* Label pill */}
      <div className="absolute bottom-4 left-4 z-10 p-4">
        <span
          className="px-6 py-3 rounded-full text-xs font-semibold tracking-wide transition-all duration-500"
          style={{
            background: hovered ? "#6d8c54" : "rgba(0,0,0,0.45)",
            color: "#ffff",
          }}
        >
          {hovered ? "After" : "Before"}
        </span>
      </div>
    </div>
  );
};

/* ── Section block (alternating layout) ── */
interface SectionBlockProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  body: string;
  before: string;
  after: string;
  reverse?: boolean;
  dark?: boolean;
  useNextImage?: boolean;
}
const SectionBlock = ({
  eyebrow,
  title,
  subtitle,
  body,
  before,
  after,
  reverse = false,
  dark = false,
  useNextImage = false,
}: SectionBlockProps) => (
  <section className="bg-[var(--color-tertiary)]">
    <div className="max-w-7xl mx-auto">
      <div className="container">
        <div
          className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center`}
        >
          {/* Text side */}
          <div className="w-full lg:w-[42%] space-y-5">
            {/* eyebrow */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="w-8 h-px bg-[var(--color-secondary)]" />
              <span className="text-[var(--color-primary)] text-[10px] font-bold tracking-[0.25em] uppercase ">
                {eyebrow}
              </span>
            </div>

            <h2
              className="text-black text-3xl sm:text-4xl font-bold leading-snug text-center lg:text-start"
              
            >
              {title}
            </h2>

            <p className="text-[var(--color-primary)] text-sm font-medium text-center lg:text-start">
              {subtitle}
            </p>

            <p className="text-gray-400 text-sm leading-relaxed text-center lg:text-start">
              {body}
            </p>

            <div className="flex justify-self-center lg:justify-self-start">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 text-[var(--color-secondary)] border p-4 text-xs font-bold uppercase tracking-widest group mt-2"
              >
                <span>Donate Now</span>
                <span className="w-8 h-px bg-[var(--color-secondary)] group-hover:w-14 transition-all duration-300" />
              </Link>
            </div>
          </div>

          {/* Image side */}
          <div className="w-full lg:w-[58%]">
            <div
              className={`relative overflow-hidden shadow-2xl shadow-black/50 ${reverse ? "rounded-tl-[4rem] rounded-br-[4rem]" : "rounded-tr-[4rem] rounded-bl-[4rem]"}`}
              style={{ aspectRatio: "16/10" }}
            >
              <BeforeAfterImage
                before={before}
                after={after}
                useNextImage={useNextImage}
              />
            </div>

            {/* "Hover to see transformation" hint */}
            <p className="text-gray-600 text-[10px] tracking-widest uppercase text-right mt-2 pr-2">
              Hover image to see transformation
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function JalMandirSection() {
  return (
    <>
      <SmoothScroll>
        {/* ── PAGE HERO ── */}
        <div className="bg-[var(--color-tertiary)] pt-16 pb-6 text-center container">
          <p className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[var(--color-secondary)]" />
            Our Impact
            <span className="w-8 h-px bg-[var(--color-secondary)]" />
          </p>
          <h1
            className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            Transforming <span className="text-[var(--color-primary)]">Water-Scarce</span>
            <br />
            Regions of Gujarat
          </h1>
          <p className="text-gray-500 text-sm mt-5 max-w-xl mx-auto leading-relaxed">
            Real before & after stories from the ground — hover each image to
            witness the change.
          </p>
          {/* thin emerald divider */}
          <div className="w-16 h-0.5 bg-[var(--color-primary)] mx-auto mt-10 rounded-full" />
        </div>

        {/* ── SECTION 1 — GEBEA Jal Mandir ── */}
        <SectionBlock
          eyebrow="Rajkot · Water Conservation"
          title="GEBEA Jal Mandir Sarovar"
          subtitle="A Gift of Water Security in Rajkot"
          body="In Rajkot, the GEBEA Jal Mandir Sarovar was inaugurated by former Home Minister Shri Gordhanbhai Zadaphia, who also serves as the President of the GEB Engineers' Association. This reservoir, a retirement gift in honor of Shri B.M. Shah Saheb, Secretary General of the GEB Engineers' Association, significantly aids water conservation. It ensures clean rainwater availability for surrounding societies, improving residents' health and boosting local groundwater levels."
          before="/image/Impact/Jibiyaa-Before-1.png"
          after="/image/Impact/Jibiya-After-1.png"
          reverse={false}
          dark={false}
          useNextImage={true}
        />

        {/* ── SECTION 2 — Bambhania Sarovar ── */}
        <SectionBlock
          eyebrow="Amreli District · Groundwater Recharge"
          title="Bambhania Sarovar"
          subtitle="For Farmers, Villagers, and Livestock Owners"
          body="The Girganga Parivar Trust has launched a groundwater recharge project in Bambhania, Amreli district. This initiative aims to increase water levels for farmers, villagers, and livestock owners. The 'Nava Neer Na Vadhamna' (Welcoming New Waters) event was attended by MLA Bharatbhai Sutariya and Deputy Chief Whip Kaushikbhai Vekariya, highlighting the importance of this endeavor for local water security."
          before="/image/Impact/bambhabiya-befor-1.png"
          after="/image/Impact/bambhaniya-after-1.png"
          reverse={true}
          dark={true}
        />

        {/* ── CTA STRIP ── */}
        <div className=" py-16 px-4 text-center">
          <p className="text-gray-500 text-xs tracking-[0.2em] uppercase mb-3">
            Make a difference today
          </p>
          <h3
            className=" text-2xl sm:text-3xl font-bold mb-8 leading-snug"
          >
            Each Donation Helps Secure
            <br />
            <span className="text-[var(--color-primary)]">A Water-Safe Future</span>
          </h3>
          <Link href="/donate">
            <button className="group relative bg-[var(--color-primary)] text-white font-semibold px-10 py-4 rounded-lg overflow-hidden hover:-translate-y-0.5 transition-transform duration-300 inline-flex items-center gap-3 shadow-xl">
              <span className="relative z-10">Donate Now</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <span className="absolute inset-0 bg-[var(--color-secondary)] text-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </Link>
        </div>

        {/* ── SECTION 3 — Know More About Us ── */}
        <section className="container">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <p className="text-[var(--color-primary)] text-[10px] font-bold tracking-[0.25em] uppercase mb-3 flex items-center gap-3 justify-center lg:justify-start">
                  <span className="w-8 h-px bg-[var(--color-primary)]" />
                  Explore More
                </p>
                <h2
                  className="text-black text-4xl sm:text-5xl font-bold leading-tight text-center lg:text-start"
                >
                  Know More <span className="text-[var(--color-primary)]">About Us</span>
                </h2>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed text-center lg:text-start lg:max-w-xs">
                Repairing, deepening, and raising check dams. A rainwater
                harvesting initiative.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  img: "/image/support-structure-1.jpg",
                  label: "Awards",
                  Icon: Award,
                  href: "/awards",
                  desc: "Honoring the recognitions and milestones achieved through impactful rural water conservation work.",
                },
                {
                  img: "/image/our-work-2.jpg",
                  label: "Mission",
                  Icon: MapPin,
                  href: "/about-us",
                  desc: "Our commitment to sustainable water conservation, rural development, and community empowerment.",
                },
                {
                  img: "/image/our-work-3.jpg",
                  label: "Check Dams",
                  Icon: Waves,
                  href: "/check-dam-creat",
                  desc: "Building and mapping check dams to recharge groundwater across drought-prone regions of Gujarat.",
                },
              ].map(({ img, label, Icon, href, desc }) => (
                <Link key={label} href={href}>
                  <div
                    className="group relative bg-[#111815] rounded-2xl overflow-hidden
                     transition-all duration-300 cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={img}
                        alt={label}
                        fill
                        className="object-cover h-auto group-hover:scale-105 transition-transform duration-500 brightness-75"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111815] via-transparent to-transparent" />

                      {/* Icon badge */}
                      <div className="absolute top-4 right-4 w-9 h-9 bg-[var(--color-primary)] rounded-lg flex items-center justify-center shadow-md">
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
                      >
                        {label}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {desc}
                      </p>

                      <span className="mt-4 inline-flex items-center gap-2 text-[var(--color-secondary)] text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Explore
                        <span className="w-5 h-px bg-[var(--color-secondary)] group-hover:w-8 transition-all duration-300" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </SmoothScroll>
    </>
  );
}
