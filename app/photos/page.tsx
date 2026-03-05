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
  {
    img: "/image/photos/photos - 13.jpg",
    title: "Fetching Water by the Dam",
  },
  {
    img: "/image/photos/photos - 14.jpg",
    title: "Heavy Machinery at Work",
  },
  {
    img: "/image/photos/photos - 15.jpg",
    title: "Local Dam Repair Activity",
  },
  { img: "/image/photos/photos - 16.jpg", title: "Heavy Machinery at Work" },
  {
    img: "/image/photos/photos - 17.jpg",
    title: "River Excavation Work",
  },
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
  {
    img: "/image/photos/photos - 25.jpeg",
    title: "River Cleanup Drive",
  },
  {
    img: "/image/photos/photos - 26.jpeg",
    title: "Earthmoving Operation",
  },
];

export default function Products() {
  return (
    <>
      <SmoothScroll>
        {/* Section - 1 */}
        <section className="container">
          <div>
            <h1 className="text-emerald-600 text-center text-4xl sm:text-5xl md:text-6xl ld:text-7xl font-bold select-none">
              Photos
            </h1>
          </div>
        </section>

        {/* Section - 2 */}
        <section className="container mx-auto px-5 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="relative w-full group"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-85 object-cover rounded-xl"
              />

              {/* Skew Label */}
              <div className="absolute bottom-0 left-0 w-[90%] bg-primary skew-x-12">
                <div className="relative bg-white p-3 -left-3">
                  <div className="-skew-x-12">
                    <p className="text-primary text-base sm:text-lg font-semibold select-none">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </SmoothScroll>
    </>
  );
}
