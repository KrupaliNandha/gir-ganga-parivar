"use client";

import { Award, MapPin, Waves } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SmoothScroll from "../../Component/SmothScrolling";

export default function JalMandirSection() {
  return (
    <>
      <SmoothScroll>
        {/* Section - 1 */}
        <section className="container">
          {/* Container */}
          <div className="mx-auto">
            {/* Heading */}
            <div className="flex flex-col md:flex-row gap-10 mb-14">
              {/* Left Side */}
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold text-sky-700 leading-tight">
                  GEBEA Jal Mandir Sarovar
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mt-3">
                  A Gift Of Water Security In Rajkot
                </p>
              </div>

              {/* Right Side */}
              <div className="md:w-1/2 border-l-4 border-emerald-600 pl-6">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  In Rajkot, the GEBEA Jal Mandir Sarovar was inaugurated by
                  former Home Minister Shri Gordhanbhai Zadaphia, who also
                  serves as the President of the GEB Engineers’ Association.
                  This reservoir, a retirement gift in honor of Shri B.M. Shah
                  Saheb, Secretary General of the GEB Engineers’ Association,
                  significantly aids water conservation. It ensures clean
                  rainwater availability for surrounding societies, improving
                  residents’ health and boosting the local groundwater levels.
                </p>
              </div>
            </div>

            {/* Content Card */}
            <div className="bg-white shadow-lg rounded-3xl  p-1 lg:p-5">
              {/* Description */}

              {/* Before After Section */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <div className="grid md:grid-cols-2">
                  {/* Before */}
                  <div className="relative h-72 md:h-[500px]">
                    <Image
                      src="/image/Impact/Jibiyaa-Before-1.png"
                      alt="Before"
                      fill
                      className="object-fix"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/30 text-white px-4 py-1 rounded-full text-sm">
                      Before
                    </div>
                  </div>

                  {/* After */}
                  <div className="relative h-72 md:h-[500px]">
                    <Image
                      src="/image/Impact/Jibiya-After-1.png"
                      alt="After"
                      fill
                      className="object-fix"
                    />
                    <div className="absolute bottom-4 left-4 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm">
                      After
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-12">
                <h3 className="text-xl md:text-2xl font-semibold text-sky-700 mb-6">
                  Each Donation Helps Secure A Water-Safe Future
                </h3>

                <a href="/donate">
                  <button className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105">
                    Donate Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section - 2 */}
        <section className="container">
          {/* Container */}
          <div className="mx-auto">
            {/* Heading */}
            <div className="flex flex-col md:flex-row gap-10 mb-14">
              {/* Left Side */}
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold text-sky-700 leading-tight">
                  Bambhania Sarovar
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mt-3">
                  farmers, villagers, and livestock owners
                </p>
              </div>

              {/* Right Side */}
              <div className="md:w-1/2 border-l-4 border-emerald-600 pl-6">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  The Girganga Parivar Trust has launched a groundwater recharge
                  project in Bambhania, Amreli district. This initiative aims to
                  increase water levels for farmers, villagers, and livestock
                  owners. The “Nava Neer Na Vadhamna” (Welcoming New Waters)
                  event was attended by MLA Bharatbhai Sutariya and Deputy Chief
                  Whip Kaushikbhai Vekariya, highlighting the importance of this
                  endeavor for local water security.
                </p>
              </div>
            </div>

            {/* Content Card */}
            <div className="bg-white shadow-lg rounded-3xl p-1 lg:p-5">
              {/* Description */}

              {/* Before After Section */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <div className="grid md:grid-cols-2">
                  {/* Before */}
                  <div className="relative h-72 md:h-[500px]">
                    <img
                      src="/image/Impact/bambhabiya-befor-1.png"
                      alt="Before"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/30 text-white px-4 py-1 rounded-full text-sm">
                      Before
                    </div>
                  </div>

                  {/* After */}
                  <div className="relative h-72 md:h-[500px]">
                    <img
                      src="/image/Impact/bambhaniya-after-1.png"
                      alt="Before"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm">
                      After
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-12">
                <h3 className="text-xl md:text-2xl font-semibold text-sky-700 mb-6">
                  Each Donation Helps Secure A Water-Safe Future
                </h3>

                <a href="/donate">
                  <button className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105">
                    Donate Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section - 3 */}
        <section className="container overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="inline-flex items-center gap-3 text-emerald-600 text-xs font-bold tracking-[0.18em] uppercase mb-4">
                <span className="w-8 h-px bg-emerald-600/40" />
                Explore More
                <span className="w-8 h-px bg-emerald-600/40" />
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-emerald-700 leading-tight">
                Know More{" "}
                <span className="text-emerald-500 italic">About Us</span>
              </h2>
              <p className="text-gray-500 text-base font-light mt-4 max-w-lg mx-auto leading-relaxed">
                Repairing, deepening, and raising check dams. A Rainwater
                harvesting initiative.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
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
                  <div className="group relative bg-white border-2 border-emerald-600/15 rounded-3xl overflow-hidden hover:border-emerald-600 hover:shadow-xl hover:shadow-emerald-600/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden bg-emerald-100">
                      <Image
                        src={img}
                        alt={label}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/50 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md">
                        <Icon
                          className="text-emerald-600"
                          size={18}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-emerald-700 font-black text-lg mb-2">
                        {label}
                      </h3>
                      <p className="text-gray-500 text-sm font-light leading-relaxed">
                        {desc}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-emerald-600 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore →
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
