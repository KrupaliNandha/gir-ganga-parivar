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
        <section className=" container min-h-screen py-14 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Product-style Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              {/* LEFT — Image Column */}
              <div className="flex flex-col gap-3">
                {/* Main Image */}
                <div
                  className="rounded-3xl overflow-hidden bg-stone-200 aspect-[4/4] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)]"
                  style={{ position: "relative" }}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Overlay badge */}
                  <span
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-emerald-700 text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full shadow-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Water Conservation
                  </span>
                </div>

                {/* Thumbnail Strip */}
                <div className="flex gap-2 pl-1">
                  {[project.img].map((src, i) => (
                    <div
                      key={i}
                      className={`w-16 h-16 rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-200 shadow-sm ${
                        i === 0
                          ? "border-emerald-500 shadow-emerald-100"
                          : "border-transparent hover:border-stone-300"
                      }`}
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — Details Column */}
              <div className="flex flex-col gap-5 py-1">
                {/* Title */}
                <h1
                  className="text-4xl md:text-5xl font-black text-stone-900 leading-[1.1] tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {project.title}
                </h1>

                {/* Price row */}
                <div className="flex items-end gap-3">
                  <span
                    className="text-5xl font-black text-stone-900"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    ₹{project.amount}
                  </span>
                  <span
                    className="text-sm text-stone-400 mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    per unit
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-emerald-200 via-stone-200 to-transparent" />

                {/* Description */}
                <p
                  className="text-stone-500 text-[15px] leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {project.dec}
                </p>

                {/* Divider */}
                <div className="h-px bg-stone-100" />

                {/* Contribution Field */}
                <div className="space-y-2">
                  <label
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Your Contribution
                  </label>
                  <div className="flex items-center w-fit rounded-2xl overflow-hidden border-2 border-stone-200 bg-white shadow-sm focus-within:border-emerald-400 transition-all">
                    <span
                      className="bg-stone-50 px-4 py-3.5 text-stone-400 font-bold border-r border-stone-200 text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      ₹
                    </span>
                    <span
                      className="px-6 py-3.5 font-black text-stone-900 text-xl"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {project.amount}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-1">
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
                    className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-sm uppercase tracking-[0.15em] px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-emerald-200 hover:shadow-emerald-300"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Donate Now →
                  </button>
                </div>

                {/* Trust badges */}
                <div
                  className="flex flex-wrap gap-4 text-[11px] text-stone-400 pt-1"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {[
                    "80G Tax Exemption",
                    "Verified NGO",
                    "100% Transparent",
                  ].map((badge) => (
                    <span key={badge} className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center text-[10px] font-bold">
                        ✓
                      </span>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Tabs — Description */}
            <div className="mt-16 bg-white rounded-3xl shadow-sm border border-stone-100 p-8">
              <div className="flex gap-8 border-b border-stone-100 mb-8">
                <button
                  className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-900 border-b-2 border-emerald-500 pb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Description
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="md:col-span-2">
                  <p
                    className="text-stone-500 text-[15px] leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {project.dec}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      "Conserves rainwater & raises groundwater levels",
                      "Supports farmers and rural communities",
                      "Long-lasting infrastructure built to last decades",
                      "Each donation is GPS-tagged and impact-reported",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[14px] text-stone-500"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        <span className="mt-1 w-5 h-5 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center text-[10px] flex-shrink-0">
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metadata card */}
                <div className="bg-stone-50 rounded-2xl p-5 space-y-4 border border-stone-100 h-fit">
                  {[
                    { label: "Project ID", value: project.id },
                    { label: "Region", value: "Gujarat, India" },
                    { label: "Unit Cost", value: `₹${project.amount}` },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p
                        className="text-[10px] uppercase tracking-[0.18em] text-stone-400 font-bold mb-0.5"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-stone-800 font-semibold text-sm"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {value}
                      </p>
                    </div>
                  ))}
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
        <section className=" min-h-screen py-14 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Product-style Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              {/* LEFT — Image Column */}
              <div className="flex flex-col gap-3">
                {/* Main Image */}
                <div
                  className="rounded-3xl overflow-hidden bg-stone-200 aspect-[4/4] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)]"
                  style={{ position: "relative" }}
                >
                  <img
                    src={maintaindata.img}
                    alt={maintaindata.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Overlay badge */}
                  <span
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-emerald-700 text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full shadow-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Water Conservation
                  </span>
                </div>

                {/* Thumbnail Strip */}
                <div className="flex gap-2 pl-1">
                  {[maintaindata.img].map((src, i) => (
                    <div
                      key={i}
                      className={`w-16 h-16 rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-200 shadow-sm ${
                        i === 0
                          ? "border-emerald-500 shadow-emerald-100"
                          : "border-transparent hover:border-stone-300"
                      }`}
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — Details Column */}
              <div className="flex flex-col gap-5 py-1">
                {/* Title */}
                <h1
                  className="text-4xl md:text-5xl font-black text-stone-900 leading-[1.1] tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {maintaindata.title}
                </h1>

                {/* Price row */}
                <div className="flex items-end gap-3">
                  <span
                    className="text-5xl font-black text-stone-900"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {maintaindata.amount}
                  </span>
                  <span
                    className="text-sm text-stone-400 mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    per unit
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-emerald-200 via-stone-200 to-transparent" />

                {/* Description */}
                <p
                  className="text-stone-500 text-[15px] leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {maintaindata.desc}
                </p>

                {/* Divider */}
                <div className="h-px bg-stone-100" />

                {/* Contribution Field */}
                <div className="space-y-2">
                  <label
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Your Contribution
                  </label>
                  <div className="flex items-center w-fit rounded-2xl overflow-hidden border-2 border-stone-200 bg-white shadow-sm focus-within:border-emerald-400 transition-all">
                    <span
                      className="bg-stone-50 px-4 py-3.5 text-stone-400 font-bold border-r border-stone-200 text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      ₹
                    </span>
                    <span
                      className="px-6 py-3.5 font-black text-stone-900 text-xl"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {maintaindata.amount}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-1">
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
                    className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-sm uppercase tracking-[0.15em] px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-emerald-200 hover:shadow-emerald-300"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Donate Now →
                  </button>
                </div>

                {/* Trust badges */}
                <div
                  className="flex flex-wrap gap-4 text-[11px] text-stone-400 pt-1"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {[
                    "80G Tax Exemption",
                    "Verified NGO",
                    "100% Transparent",
                  ].map((badge) => (
                    <span key={badge} className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center text-[10px] font-bold">
                        ✓
                      </span>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Tabs — Description */}
            <div className="mt-16 bg-white rounded-3xl shadow-sm border border-stone-100 p-8">
              <div className="flex gap-8 border-b border-stone-100 mb-8">
                <button
                  className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-900 border-b-2 border-emerald-500 pb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Description
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="md:col-span-2">
                  <p
                    className="text-stone-500 text-[15px] leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {maintaindata.desc}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      "Conserves rainwater & raises groundwater levels",
                      "Supports farmers and rural communities",
                      "Long-lasting infrastructure built to last decades",
                      "Each donation is GPS-tagged and impact-reported",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[14px] text-stone-500"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        <span className="mt-1 w-5 h-5 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center text-[10px] flex-shrink-0">
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metadata card */}
                <div className="bg-stone-50 rounded-2xl p-5 space-y-4 border border-stone-100 h-fit">
                  {[
                    { label: "Project ID", value: maintaindata.id },
                    { label: "Region", value: "Gujarat, India" },
                    { label: "Unit Cost", value: `₹${maintaindata.amount}` },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p
                        className="text-[10px] uppercase tracking-[0.18em] text-stone-400 font-bold mb-0.5"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-stone-800 font-semibold text-sm"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {value}
                      </p>
                    </div>
                  ))}
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
        <section className=" min-h-screen py-14 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Product-style Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              {/* LEFT — Image Column */}
              <div className="flex flex-col gap-3">
                {/* Main Image */}
                <div
                  className="rounded-3xl overflow-hidden bg-stone-200 aspect-[4/4] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)]"
                  style={{ position: "relative" }}
                >
                  <img
                    src={equipmentdata.img}
                    alt={equipmentdata.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Thumbnail Strip */}
                <div className="flex gap-2 pl-1">
                  {[equipmentdata.img].map((src, i) => (
                    <div
                      key={i}
                      className={`w-16 h-16 rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-200 shadow-sm ${
                        i === 0
                          ? "border-emerald-500 shadow-emerald-100"
                          : "border-transparent hover:border-stone-300"
                      }`}
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — Details Column */}
              <div className="flex flex-col gap-5 py-1">
                {/* Title */}
                <h1
                  className="text-4xl md:text-5xl font-black text-stone-900 leading-[1.1] tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {equipmentdata.title}
                </h1>

                {/* Price row */}
                <div className="flex items-end gap-3">
                  <span
                    className="text-5xl font-black text-stone-900"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {equipmentdata.amount}
                  </span>
                  <span
                    className="text-sm text-stone-400 mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    per unit
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-emerald-200 via-stone-200 to-transparent" />

                {/* Description */}
                <p
                  className="text-stone-500 text-[15px] leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {equipmentdata.desc}
                </p>

                {/* Divider */}
                <div className="h-px bg-stone-100" />

                {/* Contribution Field */}
                <div className="space-y-2">
                  <label
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Your Contribution
                  </label>
                  <div className="flex items-center w-fit rounded-2xl overflow-hidden border-2 border-stone-200 bg-white shadow-sm focus-within:border-emerald-400 transition-all">
                    <span
                      className="bg-stone-50 px-4 py-3.5 text-stone-400 font-bold border-r border-stone-200 text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      ₹
                    </span>
                    <span
                      className="px-6 py-3.5 font-black text-stone-900 text-xl"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {equipmentdata.amount}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-1">
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
                    className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-sm uppercase tracking-[0.15em] px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-emerald-200 hover:shadow-emerald-300"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Donate Now →
                  </button>
                </div>

                {/* Trust badges */}
                <div
                  className="flex flex-wrap gap-4 text-[11px] text-stone-400 pt-1"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {[
                    "80G Tax Exemption",
                    "Verified NGO",
                    "100% Transparent",
                  ].map((badge) => (
                    <span key={badge} className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center text-[10px] font-bold">
                        ✓
                      </span>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Tabs — Description */}
            <div className="mt-16 bg-white rounded-3xl shadow-sm border border-stone-100 p-8">
              <div className="flex gap-8 border-b border-stone-100 mb-8">
                <button
                  className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-900 border-b-2 border-emerald-500 pb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Description
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="md:col-span-2">
                  <p
                    className="text-stone-500 text-[15px] leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {equipmentdata.desc}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      "Conserves rainwater & raises groundwater levels",
                      "Supports farmers and rural communities",
                      "Long-lasting infrastructure built to last decades",
                      "Each donation is GPS-tagged and impact-reported",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[14px] text-stone-500"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        <span className="mt-1 w-5 h-5 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center text-[10px] flex-shrink-0">
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metadata card */}
                <div className="bg-stone-50 rounded-2xl p-5 space-y-4 border border-stone-100 h-fit">
                  {[
                    { label: "Project ID", value: equipmentdata.id },
                    { label: "Region", value: "Gujarat, India" },
                    { label: "Unit Cost", value: `₹${equipmentdata.amount}` },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p
                        className="text-[10px] uppercase tracking-[0.18em] text-stone-400 font-bold mb-0.5"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-stone-800 font-semibold text-sm"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
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
