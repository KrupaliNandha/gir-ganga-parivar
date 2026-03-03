"use client";

import Image from "next/image";

const galleryItems = [
  {
    img: "/image/press/news1.jpg"
  },
  {
    img: "/image/press/news2.jpg"
  },
  {
    img: "/image/press/news3.jpg"
  },
  {
    img: "/image/press/news4.jpg"
  },
  {
    img:"/image/press/news5.jpg"
  },
  {
    img: "/image/press/news6.jpg"
  },
  {
    img: "/image/press/news7.jpg"
  },
  {
    img: "/image/press/news8.jpg"
  },
  {
    img: "/image/press/news9.jpg"
  },
  {
    img: "/image/press/news10.jpg"
  },
  {
    img: "/image/press/news11.jpg"
  },
  {
    img: "/image/press/news12.jpg"
  },
  {
    img: "/image/press/news13.jpg"
  },
  {
    img: "/image/press/news14.jpg"
  },
  {
    img: "/image/press/news15.jpg"
  },
  {
    img: "/image/press/news16.jpg"
  },
  {
    img: "/image/press/news17.png"
  },
  {
    img: "/image/press/news18.png"
  },
  {
    img: "/image/press/news19.jpeg"
  }


];

export default function Products() {
  return (
    <>
      {/* Section - 1 */}
      <section className="container">
        <div>
            <h1 className="text-emerald-600 text-center text-7xl font-bold">Press Photos</h1>
        </div>
      </section>

      {/* Section - 2 */}
      <section className="container mx-auto px-5 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {galleryItems.map((item, index) => (
          <div key={index} data-aos="fade-up" className="relative w-full group">
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              width={500}
              height={500}
              className="w-full h-full object-fix rounded-xl"
            />
            </div>
        ))}
      </section>
    </>
  );
}
