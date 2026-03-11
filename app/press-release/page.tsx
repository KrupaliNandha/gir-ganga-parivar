"use client";

import SmoothScroll from "../../Component/SmothScrolling";

const galleryItems = [
  {
    img: "/image/press/news1.jpg",
  },
  {
    img: "/image/press/news2.jpg",
  },
  {
    img: "/image/press/news3.jpg",
  },
  {
    img: "/image/press/news4.jpg",
  },
  {
    img: "/image/press/news5.jpg",
  },
  {
    img: "/image/press/news6.jpg",
  },
  {
    img: "/image/press/news7.jpg",
  },
  {
    img: "/image/press/news8.jpg",
  },
  {
    img: "/image/press/news9.jpg",
  },
  {
    img: "/image/press/news10.jpg",
  },
  {
    img: "/image/press/news11.jpg",
  },
  {
    img: "/image/press/news12.jpg",
  },
  {
    img: "/image/press/news13.jpg",
  },
  {
    img: "/image/press/news14.jpg",
  },
  {
    img: "/image/press/news15.jpg",
  },
  {
    img: "/image/press/news16.jpg",
  },
  {
    img: "/image/press/news17.png",
  },
  {
    img: "/image/press/news18.png",
  },
  {
    img: "/image/press/news19.jpeg",
  },
];

export default function Products() {
  return (
    <>
      <SmoothScroll>
        {/* Section - 1 */}
        <section className="container">
          <div>
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
                Press{" "}
                <span className="text-[var(--color-primary)]">
                  Photo Galleries
                </span>
              </h1>
            </section>

            <section className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="relative w-full group"
                >
                  {/* Image */}
                  <img
                    src={item.img}
                    width={500}
                    height={500}
                    className="w-full h-full border p-3 shadow-lg object-fix rounded-xl"
                  />
                </div>
              ))}
            </section>
          </div>
        </section>
      </SmoothScroll>
    </>
  );
}
