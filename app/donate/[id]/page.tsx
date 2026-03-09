"use client";
import { use, useEffect, useState } from "react";
import DonateData from "@/app/donate/donateData";
import MaintainData from "@/app/donate/maintainDonateData";
import DonationEquipment from "@/app/donate/donationequipment";

export default function DonateDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [data, setData] = useState({ amount: "", mounted: false });

  useEffect(() => {
    setTimeout(() => {
      const saved = sessionStorage.getItem("donationAmount") || "";
      setData({ amount: saved, mounted: true });
    }, 0);
  }, []);

  const project = DonateData.find((item) => item.id === id);
  const maintaindata = MaintainData.find((item) => item.id === id);
  const equipmentdata = DonationEquipment.find((item) => item.id === id);

  // ================= GENERAL DONATION =================

  if (id === "general-donation") {
    if (!data.mounted) return null;

    return (
      <section className="container space-y-5">
        <h1 className="text-center text-4xl text-emerald-600 font-bold">
          General Donation to Girganga Parivar Trust
        </h1>

        <div className="border border-gray-100 p-3 sm:p-5 space-y-5 rounded-2xl bg-emerald-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-5 items-stretch">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-7 h-full">
                <div className="mb-5">
                  <h1 className="text-xl font-extrabold text-emerald-600">
                    Small Donations, Big Impact.
                  </h1>
                  <p className="text-lg text-gray-400 mt-1">
                    Support water conservation across Gujarat
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-5">
                  <p className="font-medium">Your Contribution *</p>

                  <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
                    <span className="bg-gray-100 px-4 py-3 text-lg font-semibold">
                      ₹
                    </span>

                    <p className="px-6 py-3 text-lg font-semibold text-gray-800">
                      {data.amount}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <a href="/cart">
                    <button
                      onClick={() => {
                        const cartItem = {
                          id: "general-donation",
                          title: "General Donation to Girganga Parivar Trust",
                          amount: data.amount,
                          img: "/image/suport/Donent-hero.png",
                          quantity: 1,
                        };
                        sessionStorage.setItem(
                          "cartItem",
                          JSON.stringify(cartItem),
                        );
                        window.location.href = "/cart";
                      }}
                      className="bg-emerald-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-emerald-700 transition cursor-pointer"
                    >
                      Donate ⇢
                    </button>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 h-full">
                <img
                  src="/image/suport/Donent-hero.png"
                  alt="Campaign"
                  className="w-full object-cover rounded-xl"
                />
                <p className="text-[17px] text-center font-extrabold text-gray-800 mt-3">
                  Raise Funds For Clean & Healthy Water
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ================= CHECKDAM PROJECT =================

  if (project) {
    return (
      <>
        <section className="container mx-auto space-y-8 py-10">
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
              Donation to Create Checkdam
            </h1>

            <p className="text-gray-500 mt-3 text-lg">
              Support the construction of checkdams to conserve water and help
              communities across Gujarat.
            </p>
          </div>  
          {/* Card Wrapper */}
          <div className="border border-gray-100 p-4 sm:p-6 rounded-2xl bg-emerald-50 flex justify-center">
            <div className="max-w-4xl w-full">
              <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8 space-y-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Image */}
                <div>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full object-cover rounded-xl"
                  />
                </div>

                <div>
                  {/* Title */}
                  <h1 className="text-2xl md:text-3xl font-extrabold text-emerald-600">
                    {project.title}
                  </h1>

                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed">{project.dec}</p>

                  {/* Contribution */}
                  <div className="flex flex-wrap items-center gap-4 mt-4">
                    <p className="font-medium">Your Contribution *</p>

                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <span className="bg-gray-100 px-4 py-2 font-semibold">
                        ₹
                      </span>

                      <p className="px-6 py-2 font-semibold">
                        {project.amount}
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-3">
                    <button
                      onClick={() => {
                        const cartItem = {
                          id: project.id,
                          title: project.title,
                          amount: project.amount,
                          img: project.img,
                          quantity: 1,
                        };

                        sessionStorage.setItem(
                          "cartItem",
                          JSON.stringify(cartItem),
                        );

                        window.location.href = "/cart";
                      }}
                      className="bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
                    >
                      Donate ⇢
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {project.images && project.images.length > 0 && (
          <section className="container mt-8 space-y-4">
            <h2 className="text-2xl font-bold text-gray-700 border-l-4 border-emerald-500 pl-3">
              Related projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {project.images.map((img, index) => (
                <div
                  key={index}
                  className="rounded-2xl h-auto w-auto overflow-hidden border border-gray-100 shadow-md bg-white group flex flex-col"
                >
                  {/* Image */}
                  <img
                    src={img}
                    alt={`${project.title} - ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Title + Description + Button */}
                  <div className="p-4 flex flex-col gap-2 flex-1">
                    <h3 className="text-xl font-bold text-center text-gray-800">
                      {project.imageDetails[index].title}
                    </h3>
                    <p className="text-sm text-gray-500 text-center flex-1">
                      {project.imageDetails[index].dec}
                    </p>
                    <p className="text-lg text-primary font-semibold text-center flex-1">
                      {project.imageDetails[index].amount}
                    </p>
                    <a href={`/donate/${project.imageDetails[index].id}`}>
                      <button className="mt-2 w-full text-primary font-semibold px-4 py-2 rounded-lg hover:underline transition cursor-pointer">
                        Learn More ⇢
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </>
    );
  }

  // ================= MAINTAIN CHECKDAM =================

  if (maintaindata) {
    return (
      <>
        <section className="container mx-auto space-y-8 py-10">
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
              Maintain Checkdam
            </h1>

            <p className="text-gray-500 mt-3 text-lg">
              Help us maintain water conservation structures across Gujarat
            </p>
          </div>

          {/* Card Wrapper */}
          <div className="border border-gray-100 p-4 sm:p-6 rounded-2xl bg-emerald-50 flex justify-center">
            <div className="max-w-4xl w-full">
              <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8 space-y-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Image */}
                <div>
                  <img
                    src={maintaindata.img}
                    alt={maintaindata.title}
                    className="w-full object-cover rounded-xl"
                  />
                </div>

                <div>
                  {/* Title */}
                  <h1 className="text-2xl md:text-3xl font-extrabold text-emerald-600">
                    {maintaindata.title}
                  </h1>

                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed">
                    {maintaindata.desc}
                  </p>

                  {/* Contribution */}
                  <div className="flex flex-wrap items-center gap-4 mt-4">
                    <p className="font-medium">Your Contribution *</p>

                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <span className="bg-gray-100 px-4 py-2 font-semibold">
                        ₹
                      </span>

                      <p className="px-6 py-2 font-semibold">
                        {maintaindata.amount}
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-3">
                    <button
                      onClick={() => {
                        const cartItem = {
                          id: maintaindata.id,
                          title: maintaindata.title,
                          amount: maintaindata.amount,
                          img: maintaindata.img,
                          quantity: 1,
                        };

                        sessionStorage.setItem(
                          "cartItem",
                          JSON.stringify(cartItem),
                        );

                        window.location.href = "/cart";
                      }}
                      className="bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
                    >
                      Donate ⇢
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {maintaindata.images && maintaindata.images.length > 0 && (
          <section className="container mt-8 space-y-4">
            <h2 className="text-2xl font-bold text-gray-700 border-l-4 border-emerald-500 pl-3">
              Related projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {maintaindata.images.map((img, index) => (
                <div
                  key={index}
                  className="rounded-2xl h-auto w-auto overflow-hidden border border-gray-100 shadow-md bg-white group flex flex-col"
                >
                  {/* Image */}
                  <img
                    src={img}
                    alt={`${maintaindata.title} - ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Title + Description + Button */}
                  <div className="p-4 flex flex-col gap-2 flex-1">
                    <h3 className="text-xl font-bold text-center text-gray-800">
                      {maintaindata.imgDetails[index].title}
                    </h3>
                    <p className="text-sm text-gray-500 text-center flex-1">
                      {maintaindata.imgDetails[index].desc}
                    </p>
                    <p className="text-lg text-primary font-semibold text-center flex-1">
                      {maintaindata.imgDetails[index].amount}
                    </p>
                    <a href={`/donate/${maintaindata.imgDetails[index].id}`}>
                      <button className="mt-2 w-full text-primary font-semibold px-4 py-2 rounded-lg hover:underline transition cursor-pointer">
                        Learn More ⇢
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </>
    );
  }

  // ================= Donation for Equipment =================

  if (equipmentdata) {
    return (
      <>
        <section className="container space-y-5">
          <h1 className="text-center text-4xl text-emerald-600 font-bold">
            Donation for Equipment
          </h1>

          <div className="border border-gray-100 p-3 sm:p-5 rounded-2xl bg-emerald-50">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-5">
              <div className="bg-white rounded-2xl shadow-sm border p-7">
                <h1 className="text-3xl font-extrabold text-emerald-600">
                  {equipmentdata.title}
                </h1>

                <p className="text-md text-gray-400 mt-2">
                  {equipmentdata.desc}
                </p>

                <div className="flex items-center gap-5 mt-5">
                  <p>Your Contribution *</p>

                  <div className="flex items-center border rounded-lg">
                    <span className="bg-gray-100 px-4 py-3 font-semibold">
                      ₹
                    </span>

                    <p className="px-6 py-3 font-semibold">
                      {equipmentdata.amount}
                    </p>
                  </div>
                </div>

                <a href="/cart">
                  <button
                    onClick={() => {
                      const cartItem = {
                        id: equipmentdata.id,
                        title: equipmentdata.title,
                        amount: equipmentdata.amount,
                        img: equipmentdata.img,
                        quantity: 1,
                      };
                      sessionStorage.setItem(
                        "cartItem",
                        JSON.stringify(cartItem),
                      );
                      window.location.href = "/cart";
                    }}
                    className="bg-emerald-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-emerald-700 transition cursor-pointer"
                  >
                    Donate ⇢
                  </button>
                </a>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border p-4">
                <img
                  src={equipmentdata.img}
                  alt={equipmentdata.title}
                  className="w-full h-auto object-fix rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>
        {equipmentdata.images && equipmentdata.images.length > 0 && (
          <section className="container mt-8 space-y-4">
            <h2 className="text-2xl font-bold text-gray-700 border-l-4 border-emerald-500 pl-3">
              Related projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {equipmentdata.images.map((img, index) => (
                <div
                  key={index}
                  className="rounded-2xl h-auto w-auto overflow-hidden border border-gray-100 shadow-md bg-white group flex flex-col"
                >
                  {/* Image */}
                  <img
                    src={img}
                    alt={`${equipmentdata.title} - ${index + 1}`}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Title + Description + Button */}
                  <div className="p-4 flex flex-col gap-2 flex-1">
                    <h3 className="text-xl font-bold text-center text-gray-800">
                      {equipmentdata.imgDetails[index].title}
                    </h3>
                    <p className="text-sm text-gray-500 text-center flex-1">
                      {equipmentdata.imgDetails[index].desc}
                    </p>
                    <p className="text-lg text-primary font-semibold text-center flex-1">
                      {equipmentdata.imgDetails[index].amount}
                    </p>
                    <a href={`/donate/${equipmentdata.imgDetails[index].id}`}>
                      <button className="mt-2 w-full text-primary font-semibold px-4 py-2 rounded-lg hover:underline transition cursor-pointer">
                        Learn More ⇢
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </>
    );
  }

  // ================= NOT FOUND =================

  return (
    <div className="p-10 text-red-500 text-2xl text-center">
      Project Not Found
    </div>
  );
}
