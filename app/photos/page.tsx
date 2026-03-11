"use client";

import SmoothScroll from "../../Component/SmothScrolling";

const galleryItems = [
  {
    img: "/image/photos/photos - 1.jpg",
    title: "Water Conservation Activity at Village Dam",
  },
  {
    img: "/image/photos/photos - 2.jpg",
    title: "Bulk Material Transportation at Project Site",
  },
  {
    img: "/image/photos/photos - 3.jpg",
    title: "Construction Fleet in Action",
  },
  { img: "/image/photos/photos - 4.jpg", title: "Heavy Machinery at Work" },
  {
    img: "/image/photos/photos - 5.jpg",
    title: "Large Construction Excavation Site",
  },
  {
    img: "/image/photos/photos - 6.jpg",
    title: "Loader Filling Soil into Tractor",
  },
  {
    img: "/image/photos/photos - 7.jpg",
    title: "Foundation Construction Work",
  },
  {
    img: "/image/photos/photos - 8.jpg",
    title: "Concrete Foundation Work in Progress",
  },
  {
    img: "/image/photos/photos - 9.jpg",
    title: "Village Infrastructure Development Work in Progress",
  },
  {
    img: "/image/photos/photos - 10.jpg",
    title: "Irrigation Canal Structure Under Construction",
  },
  {
    img: "/image/photos/photos - 11.jpg",
    title: "Earthmoving Work Near Water Reservoir",
  },
  { img: "/image/photos/photos - 12.jpg", title: "Canal Excavation Work" },
  { img: "/image/photos/photos - 13.jpg", title: "Fetching Water by the Dam" },
  { img: "/image/photos/photos - 14.jpg", title: "Heavy Machinery at Work" },
  { img: "/image/photos/photos - 15.jpg", title: "Local Dam Repair Activity" },
  { img: "/image/photos/photos - 16.jpg", title: "Heavy Machinery at Work" },
  { img: "/image/photos/photos - 17.jpg", title: "River Excavation Work" },
  {
    img: "/image/photos/photos - 18.png",
    title: "JCB Excavation for Water Recharge Structure",
  },
  {
    img: "/image/photos/photos - 19.jpeg",
    title: "On-Site Concrete Pouring for Check Dam Construction",
  },
  {
    img: "/image/photos/photos - 21.jpg",
    title: "Stone Pitching Work for Check Dam Strengthening",
  },
  {
    img: "/image/photos/photos - 22.jpg",
    title: "River Desilting Work Using Excavator",
  },
  {
    img: "/image/photos/photos - 23.jpg",
    title: "Concrete Channel Construction Work",
  },
  { img: "/image/photos/photos - 24.jpeg", title: "Heavy Machinery at Work" },
  { img: "/image/photos/photos - 25.jpeg", title: "River Cleanup Drive" },
  { img: "/image/photos/photos - 26.jpeg", title: "Earthmoving Operation" },
];

// Mosaic pattern: defines col-span and row-span for each card in a repeating 12-item group
// Matches the reference image's varied mosaic grid
const mosaicPattern = [
  { colSpan: "col-span-2", rowSpan: "row-span-2" }, // 0: large square
  { colSpan: "col-span-1", rowSpan: "row-span-1" }, // 1: small
  { colSpan: "col-span-1", rowSpan: "row-span-1" }, // 2: small
  { colSpan: "col-span-1", rowSpan: "row-span-1" }, // 3: small
  { colSpan: "col-span-1", rowSpan: "row-span-1" }, // 4: small

  { colSpan: "col-span-1", rowSpan: "row-span-1" }, // 1: small
  { colSpan: "col-span-1", rowSpan: "row-span-1" }, // 2: small
  { colSpan: "col-span-2", rowSpan: "row-span-2" }, // large square
  { colSpan: "col-span-1", rowSpan: "row-span-1" }, // 3: small
  { colSpan: "col-span-1", rowSpan: "row-span-1" }, // 4: small
];

export default function Photos() {
  return (
    <>
      <SmoothScroll>
        {/* Section */}
        <div className="container">
          <section className=" text-center mb-10">
            <p
              className="text-[var(--color-secondary)]
 text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3"
            >
              <span
                className="w-8 h-px bg-[var(--color-secondary)]
"
              />
              Gallery
              <span
                className="w-8 h-px bg-[var(--color-secondary)]
"
              />
            </p>
            <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Some Of Our{" "}
              <span className="text-[var(--color-primary)]">
                Photo Galleries
              </span>
            </h1>
          </section>

          {/* Mosaic Grid */}
          <section className="container mx-auto pb-16">
            <div
              className="
  grid space-y-2 sm:gap-3
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  auto-rows-[180px]
  sm:auto-rows-[200px]
  md:auto-rows-[220px]
  lg:auto-rows-[270px]
"
              style={{
                gridTemplateColumns: "lg:repeat(4, 1fr) flex-warp",
                gridAutoRows: "",
              }}
            >
              {galleryItems.map((item, index) => {
                const pattern = mosaicPattern[index % mosaicPattern.length];
                return (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-lg group cursor-pointer lg:${pattern.colSpan} ${pattern.rowSpan}`}
                    data-aos="fade-up"
                  >
                    {/* Image */}
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover overlay with title */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-400 flex items-end">
                      <div className="w-full translate-y-full group-hover:translate-y-0 transition-transform duration-400 p-3">
                        <p className="text-white text-sm sm:text-base font-semibold leading-snug drop-shadow">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </SmoothScroll>
    </>
  );
}
