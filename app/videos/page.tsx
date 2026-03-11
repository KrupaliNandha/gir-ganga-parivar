"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SmoothScroll from "../../Component/SmothScrolling";

const videoData = [
  {
    id: "fXONzYd59hk",
    start: 4,
    title: "જામનગર જિલ્લાના કાલાવડ તાલુકાના ધુતાપર ગામ",
    description:
      "જામનગર જિલ્લાના કાલાવડ તાલુકાના ધુતાપર ગામે આજની તારીખે જે ચેકડેમમાંથી પાણી જતું રહે છે. તે ચેકડેમ લગભગ 400 ફૂટથી વધુ મોટો એટલે લાંબો છે.",
    tag: "ચેકડેમ",
  },
  {
    id: "QsYMEPEJMSg",
    title: "ચંદુભાઈ વિરાણીનું જળ અભિયાન | ગુજરાતની તરસ છીપાવશે!",
    description:
      "ગીરગંગા પરિવાર ટ્રસ્ટ અને પ્રેરણાદાયી ચંદુભાઈ વિરાણી ગુજરાતને જળસમૃદ્ધ બનાવવા માટે એક ભગીરથ કાર્ય કરી રહ્યા છે.",
    tag: "જળ અભિયાન",
  },
  {
    id: "6TeQkl9PKHU",
    title: "કેન્દ્રીય જળ મંત્રી શ્રી સી.આર.પાટીલ સાહેબ દ્વારા સરાહના",
    description:
      "ગીરગંગા પરિવાર ટ્રસ્ટ દ્વારા સૃષ્ટિના જીવરક્ષકના કાર્ય માટે વરસાદી અમૃત સમાન શુદ્ધ પાણી બચાવવાના કાર્યની સરાહના.",
    tag: "સરકારી સ્વીકૃતિ",
  },
  {
    id: "B5FhjlVkico",
    title: "ગ્રામ વિકાસ — ખેડૂત સહયોગ અભિયાન",
    description:
      "ગ્રામના નેતાઓ, સરકારી અધિકારીઓ અને સમુદાયના સભ્યો સાથે સહયોગ દ્વારા ગ્રામ વિકાસ.",
    tag: "ગ્રામ વિકાસ",
  },
  {
    id: "XjlOX0_PV_c",
    title: "ગ્રામ નેતાઓ સાથે સહયોગ",
    description:
      "ગ્રામ નેતાઓ, સરકારના અધિકારીઓ અને સમુદાયના સભ્યો સાથે સહયોગ દ્વારા અનેક પ્રોજેક્ટ્સ સફળ.",
    tag: "સામુદાયિક",
  },
  {
    id: "B5FhjlVkico",
    title: "નાનો પ્રયાસ, મોટું પરિવર્તન — જળ ક્રાંતિ 2025",
    description:
      "ભરતભાઈ ભોઘરાનો 'જળ ક્રાંતિ 2025' માટેનો દ્રષ્ટિકોણ, પાણી બચાવ, ચેકડેમ, વૃક્ષારોપણ.",
    tag: "જળ ક્રાંતિ 2025",
  },
];

export default function VideosPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <SmoothScroll>
      {/* Hero */}
      <section className="container text-center mb-12">
        <p className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-[var(--color-secondary)]" />
          Gir Ganga Parivar Trust
          <span className="w-8 h-px bg-[var(--color-secondary)]" />
        </p>

        <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Water Revolution -
          <span className="text-[var(--color-primary)]">Video Gallery</span>
        </h1>
      </section>

      {/* Video Grid */}
      <section className="container">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {videoData.map((video, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-gray-100 flex flex-col"
            >
              {/* Video */}
              <div
                className="relative w-full overflow-hidden"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}${video.start ? `?start=${video.start}` : ""}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                {/* Tag */}
                <span className="absolute top-3 left-3 bg-[var(--color-secondary)] text-black text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full shadow">
                  {video.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-gray-900 font-bold text-base sm:text-lg leading-snug group-hover:text-[var(--color-primary)] transition-colors duration-200 line-clamp-2">
                  {video.title}
                </h3>

                <p className="mt-3 text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
                  {video.description}
                </p>

                {/* Button */}
                <div className="mt-4">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
                  >
                    Watch on YouTube →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container py-16 text-center">
        <h3 className="text-[var(--color-primary)] text-2xl sm:text-3xl font-extrabold mb-4">
          Water Means Life
        </h3>

        <a
          href="https://www.youtube.com/@girgangaparivartrust"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[var(--color-primary)] font-bold text-sm px-8 py-3 rounded-full shadow-lg hover:bg-emerald-50 transition-colors duration-200"
        >
          Watch the YouTube Channel →
        </a>
      </section>
    </SmoothScroll>
  );
}
