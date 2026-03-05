"use client";
import { useState } from "react";
import SmoothScroll from "../../Component/SmothScrolling";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

// const PRESET_AMOUNTS = [100, 200, 500];

export default function Donate() {
  const [amount, setAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  const handlePreset = (val: number) => {
    setAmount(val);
    setIsCustom(false);
    setCustomAmount("");
  };

  const handleCustom = () => {
    setIsCustom(true);
    setAmount(0);
  };

  const alldonatedata = [
    {
      id: "general-donation",
      amount: [100, 200, 500], // preset amounts directly in the object
      title: "General Donation to Girganga Parivar Trust",
      desc: "Support water conservation across Gujarat",
    },
  ];

  const donateData = [
    {
      id: "donation-for-biggest-checkdam",
      img: "/image/suport/Donation-Biggest-Size.png",
      title: "Donation-For-Biggest-Checkdam",
      amount: "10,000,000",
      desc: "Support the construction of a largest-scale check dam that can store significant rainwater, recharge groundwater, and provide long-term water security for entire villages.",
    },
    {
      id: "donation-for-large-checkdam",
      img: "/image/suport/Donation-Large-Size.png",
      title: "Donation-For-large-chCckdam",
      amount: "5,000,000",
      desc: "Contribute towards building a large check dam that helps collect rainwater, improve irrigation for farmers, and increase groundwater levels in drought-prone areas.",
    },
    {
      id: "donation-for-medium-checkdam",
      img: "/image/suport/Donation-Medium-Size.png",
      title: "donation-for-medium-checkdam",
      amount: "2,000,000",
      desc: "Help construct a medium-sized check dam that supports local farming communities by storing seasonal water and improving groundwater recharge.",
    },
    {
      id: "donation-for-small-checkdam",
      img: "/image/suport/Donation-Small-Size.png",
      title: "donation-for-small-checkda",
      amount: "5,00,000",
      desc: "Donate to build a small check dam that captures rainwater, prevents soil erosion, and supports nearby farmers and wildlife with essential water resources.",
    },
  ];

  return (
    <SmoothScroll>
      {/* section - 1 */}
      <section className="container">
        <div className="flex flex-wrap gap-10 mt-10 justify-center">
          <a
            href="/partner-with-us-csr"
            className="bg-emerald-600 text-white font-semibold px-10 py-4 rounded-lg shadow-md text-xl select-none transition-transform transform hover:-translate-y-1 inline-block text-center"
          >
            Partner With Us (CSR)
          </a>

          <a
            href="/support-a-structure"
            className="bg-emerald-600 text-white font-semibold px-10 py-4 rounded-lg shadow-md text-xl select-none  ransition-transform transform hover:-translate-y-1 inline-block text-center"
          >
            Support A Structure
          </a>
        </div>
      </section>

      {/* section - 2 */}
      <section className="container">
        <div className="border border-gray-100 p-3 sm:p-5 space-y-5 rounded-2xl bg-emerald-50">
          {/* Heading */}
          <div>
            <h1 className="text-3xl text-emerald-600 font-semibold text-center">
              General Donation
            </h1>
          </div>

          {/* Main Layout */}
          {alldonatedata.map((item) => (
            <div
              key={item.id}
              className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_300px] gap-5 items-stretch"
            >
              {/* LEFT CARD */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-7 h-full">
                {/* Title */}
                <div className="mb-5">
                  <h1 className="text-2xl font-extrabold text-emerald-600 leading-snug">
                    {item.title}
                  </h1>
                  <p className="text-lg text-gray-400 mt-1">{item.desc}</p>
                </div>

                {/* Amount Bar */}
                <div className="bg-emerald-600 rounded-xl px-5 py-3.5 flex items-center gap-2 mb-4">
                  <span className="text-white text-2xl font-bold">₹</span>

                  {isCustom ? (
                    <input
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      autoFocus
                      className="bg-transparent border-none outline-none text-white text-2xl font-bold w-full placeholder-white/40"
                    />
                  ) : (
                    <span className="text-white text-2xl font-bold flex-1">
                      {amount}
                    </span>
                  )}
                </div>

                {/* Preset Buttons */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.amount.map((v) => (
                    <button
                      key={v}
                      onClick={() => handlePreset(v)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold border-[1.5px] transition-all duration-150 ${
                        !isCustom && amount === v
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-white text-gray-600 border-gray-200 hover:border-emerald-600 hover:text-emerald-600"
                      }`}
                    >
                      ₹{v}
                    </button>
                  ))}

                  <button
                    onClick={handleCustom}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold border-[1.5px] transition-all duration-150 ${
                      isCustom
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "bg-white text-emerald-600 border-dashed border-emerald-600 hover:bg-emerald-50"
                    }`}
                  >
                    Custom Amount
                  </button>
                </div>

                {/* Learn More Button */}
                <Link href={`/donate/${item.id}`}>
                  <button className="flex items-center gap-2 border-[1.5px] border-emerald-600 bg-emerald-50 cursor-pointer text-emerald-700 font-bold text-xl px-4 py-1.5 rounded-lg transition-all">
                    <FaShoppingCart />
                    Learn More
                  </button>
                </Link>
              </div>

              {/* RIGHT PANEL */}
              <div className="flex flex-col gap-4 h-full">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 h-full flex flex-col justify-between">
                  <img
                    src="/image/suport/Donent-hero.png"
                    alt="Campaign"
                    className="w-full h-auto object-cover rounded-xl"
                  />

                  <p className="text-[17px] text-center font-extrabold text-gray-800 leading-snug mt-3">
                    Raise Funds For Clean & Healthy Food
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Section - 3 */}
      <section className="container">
        <div className="border border-gray-100 p-3 sm:p-5 space-y-5 rounded-2xl bg-emerald-50">
          {/* Heading */}
          <div>
            <h1 className="text-3xl text-emerald-600 font-semibold text-center">
              Donation to Create Checkdam
            </h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {donateData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto object-cover rounded-t-xl"
                />

                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-semibold text-center text-emerald-700">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm text-center">
                    {item.desc}
                  </p>

                  <p className="text-gray-600 text-sm text-center">
                    {item.amount}
                  </p>

                  <div className="text-center">
                    <Link
                      href={`/donate/${item.id}`}
                      className="inline-block text-emerald-600 font-semibold hover:underline"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SmoothScroll>
  );
}
