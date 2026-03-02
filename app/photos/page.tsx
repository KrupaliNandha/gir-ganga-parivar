"use client";

import Image from "next/image";

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
    title: "Water Conservation Activity at Village Dam",
  },
  {
    img: "/image/photos/photos - 14.jpg",
    title: "Bulk Material Transportation at Project Site",
  },
  {
    img: "/image/photos/photos - 15.jpg",
    title: "Construction Fleet in Action",
  },
  { img: "/image/photos/photos - 16.jpg", title: "Heavy Machinery at Work" },
  {
    img: "/image/photos/photos - 17.jpg",
    title: "Water Conservation Activity at Village Dam",
  },
  {
    img: "/image/photos/photos - 18.png",
    title: "Bulk Material Transportation at Project Site",
  },
  {
    img: "/image/photos/photos - 19.jpeg",
    title: "Construction Fleet in Action",
  },
  { img: "/image/photos/photos - 20.jpeg", title: "Heavy Machinery at Work" },
  {
    img: "/image/photos/photos - 21.jpg",
    title: "Water Conservation Activity at Village Dam",
  },
  {
    img: "/image/photos/photos - 22.jpg",
    title: "Bulk Material Transportation at Project Site",
  },
  {
    img: "/image/photos/photos - 23.jpg",
    title: "Construction Fleet in Action",
  },
  { img: "/image/photos/photos - 24.jpeg", title: "Heavy Machinery at Work" },
  {
    img: "/image/photos/photos - 25.jpeg",
    title: "Water Conservation Activity at Village Dam",
  },
  {
    img: "/image/photos/photos - 26.jpeg",
    title: "Bulk Material Transportation at Project Site",
  },
];

export default function Products() {
  return (
    <>
      {/* Section - 1 */}
      <section className="container">
        <div>
            <h1 className="text-emerald-600 text-center text-7xl font-bold">Photos</h1>
        </div>
      </section>

      {/* Section - 2 */}
      <section className="container mx-auto px-5 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
        {galleryItems.map((item, index) => (
          <div key={index} data-aos="fade-up" className="relative w-full group">
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
    </>
  );
}
