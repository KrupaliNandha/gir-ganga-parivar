"use client";
import { useState } from "react";
import SmoothScroll from "../../Component/SmothScrolling";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PRESET_AMOUNTS = [100, 200, 500];

const donateData = [
  {
    id: "donation-for-biggest-checkdam",
    img: "/image/suport/Donation-Biggest-Size.png",
    title: "Donation For Biggest Checkdam",
    amount: "₹10,000,000",
    desc: "Support the construction of a largest-scale check dam that can store significant rainwater, recharge groundwater, and provide long-term water security for entire villages.",
  },
  {
    id: "donation-for-large-checkdam",
    img: "/image/suport/Donation-Large-Size.png",
    title: "Donation For Large Checkdam",
    amount: "₹5,000,000",
    desc: "Contribute towards building a large check dam that helps collect rainwater, improve irrigation for farmers, and increase groundwater levels in drought-prone areas.",
  },
  {
    id: "donation-for-medium-checkdam",
    img: "/image/suport/Donation-Medium-Size.png",
    title: "Donation For Medium Checkdam",
    amount: "₹2,000,000",
    desc: "Help construct a medium-sized check dam that supports local farming communities by storing seasonal water and improving groundwater recharge.",
  },
  {
    id: "donation-for-small-checkdam",
    img: "/image/suport/Donation-Small-Size.png",
    title: "Donation For Small Checkdam",
    amount: "₹500,000",
    desc: "Donate to build a small check dam that captures rainwater, prevents soil erosion, and supports nearby farmers and wildlife with essential water resources.",
  },
];

const maintaindonateData = [
  {
    id: "donation-for-maintain-biggest-checkdam",
    img: "/image/suport/Donation-Biggest-Size-Checkdam.png",
    title: "Donation to Maintain Biggest Checkdam",
    amount: "₹10,000,000",
    desc: "Your donation helps maintain, renovate, and deepen the biggest checkdam to store more water and support nearby villages.",
  },
  {
    id: "donation-for-maintain-large-checkdam",
    img: "/image/suport/Donation-Large-Size-Checkdam.png",
    title: "Donation to Maintain Large Checkdam",
    amount: "₹5,000,000",
    desc: "This contribution supports the maintenance, renovation, and deepening of a large checkdam to improve water conservation.",
  },
  {
    id: "donation-for-maintain-medium-checkdam",
    img: "/image/suport/Donation-Medium-Size-Checkdam.png",
    title: "Donation to Maintain Medium Checkdam",
    amount: "₹2,000,000",
    desc: "Your support helps repair, maintain, and deepen a medium-sized checkdam for better groundwater recharge.",
  },
  {
    id: "donation-for-maintain-small-checkdam",
    img: "/image/suport/Donation-Small-Size-Checkdam.png",
    title: "Donation to Maintain Small Checkdam",
    amount: "₹500,000",
    desc: "This donation helps maintain and restore a small checkdam to ensure water availability for farming and local use.",
  },
];

const donationequipment = [
  {
    id: "donation-for-Water-Tanker",
    img: "/image/suport/Water-Tanker.jpg",
    title: "Donation for Water Tanker",
    amount: "₹250,000",
    desc: "Your generous contribution will help us purchase and maintain a water tanker used...",
  },
  {
    id: "donation-for-tractor",
    img: "/image/suport/Tractor.jpg",
    title: "Donation for Tractor",
    amount: "₹750,000",
    desc: "Donating for a tractor helps support agricultural and rural development activities. The...",
  },
  {
    id: "donation-for-ace-pickup-tempo",
    img: "/image/suport/Ace-Small-Truck.jpg",
    title: "Donation for Ace Pickup Tempo",
    amount: "₹750,000",
    desc: "The Ace Pickup Tempo is a small utility vehicle that helps transport tools, construction...",
  },
  {
    id: "donation-for-loader",
    img: "/image/suport/Loader.jpg",
    title: "Donation for Loader",
    amount: "₹1,500,000",
    desc: "A loader machine is essential for construction, digging, and earth-moving work required in...",
  },
  {
    id: "donation-for-jcb",
    img: "/image/suport/JCB.jpg",
    title: "Donation for JCB",
    amount: "₹4,000,000",
    desc: "The JCB machine is one of the most important machines used in large-scale construction...",
  },
];

const bankDetails = [
  { label: "Bank Name", value: "BANK OF BARODA" },
  { label: "Account Name", value: "GIRGANGA PARIVAR TRUST" },
  { label: "Account Number", value: "15010200001185" },
  { label: "RTGS/NEFT IFSC CODE", value: "BARB0KALAWA" },
  { label: "SWIFT CODE", value: "BARBINBBRAJ" },
];

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

  const router = useRouter();

  const handleDonate = () => {
    const finalAmount = isCustom ? customAmount : amount;
    sessionStorage.setItem("donationAmount", String(finalAmount));
    router.push("/donate/general-donation");
  };

  return (
    <SmoothScroll>
      {/* Section - 1 */}
      <section className="container">
        <div className="flex flex-wrap gap-10 mt-10 justify-center">
          <a
            href="/partner-with-us-csr"
            className="bg-primary text-white font-semibold px-10 py-4 rounded-lg shadow-md text-xl select-none transition-transform transform hover:-translate-y-1 inline-block text-center"
          >
            Partner With Us (CSR)
          </a>
          <a
            href="/support-a-structure"
            className="bg-primary text-white font-semibold px-10 py-4 rounded-lg shadow-md text-xl select-none transition-transform transform hover:-translate-y-1 inline-block text-center"
          >
            Support A Structure
          </a>
        </div>
      </section>

      {/* Section - 2 - Single Card */}
      <section className="container">
        <div className="border border-gray-100 p-3 sm:p-5 space-y-5 rounded-2xl bg-emerald-50">
          <h1 className="text-3xl text-primary font-semibold text-center">
            General Donation
          </h1>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_300px] gap-5 items-stretch">
            {/* LEFT CARD */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-7 h-full">
              <div className="mb-5">
                <h1 className="text-2xl font-extrabold text-primary leading-snug">
                  General Donation
                </h1>
                <p className="text-lg text-gray-400 mt-1">
                  Support our water conservation mission with a donation of your
                  choice.
                </p>
              </div>

              {/* Amount Bar */}
              <div className="bg-primary rounded-xl px-5 py-3.5 flex items-center gap-2 mb-4">
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

              {/* Preset Buttons: 100 / 200 / 500 / Custom */}
              <div className="flex flex-wrap gap-2 mb-6">
                {PRESET_AMOUNTS.map((v) => (
                  <button
                    key={v}
                    onClick={() => handlePreset(v)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold border-[1.5px] transition-all duration-150 ${
                      !isCustom && amount === v
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
                    }`}
                  >
                    ₹{v}
                  </button>
                ))}

                <button
                  onClick={handleCustom}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold border-[1.5px] transition-all duration-150 ${
                    isCustom
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-primary border-dashed border-primary hover:bg-emerald-50"
                  }`}
                >
                  Custom Amount
                </button>
              </div>

              {/* Donate Button */}
              <button
                onClick={handleDonate}
                className="bg-primary flex gap-3 items-center text-white font-bold px-6 py-2 rounded-lg hover:bg-emerald-700 transition cursor-pointer"
              >
                <FaShoppingCart />
                Donate Now
              </button>
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
                  Raise Funds For Clean & Healthy Water
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - 3 */}
      <section className="container">
        <div className="border border-gray-100 p-3 sm:p-5 space-y-5 rounded-2xl bg-emerald-50">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary font-semibold text-center">
            Donation to Create Checkdam
          </h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                  <p className="text-gray-800 font-bold text-center">
                    {item.amount}
                  </p>
                  <div className="text-center">
                    <Link
                      href={`/donate/${item.id}`}
                      className="inline-block text-primary font-semibold hover:underline"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* ✅ NEW: Before After Impact Section */}
          <section className="container py-10">
            <div className="text-center justify-center space-y-4 flex flex-wrap justify-between">
              <div className="space-y-6">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Check Our Impact By Comparing Before After Images
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-base md:text-lg max-w-5xl mx-auto">
                  Every rupee you donate directly supports the vital work of
                  repairing and enhancing checkdams across Saurashtra, Gujarat.
                  Ensuring a more water-secure future for our communities in
                  Gujarat, India.
                </p>
              </div>
              {/* Button with Orange Brackets */}
              <div className="flex items-center justify-center gap-3 mt-6">
                <Link href="/Our-Work">
                  <button className="bg-gray-900 text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-700 transition cursor-pointer text-base md:text-lg">
                    Click Here To Check Before And After Change
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Section - 4 */}
      <section className="container">
        <div className="border border-gray-100 p-3 sm:p-5 space-y-5 rounded-2xl bg-emerald-50">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary font-semibold text-center">
            Donation to Maintain Checkdam
          </h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {maintaindonateData.map((item) => (
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
                  <h3 className="text-xl font-semibold text-center text-primary">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    {item.desc}
                  </p>
                  <p className="text-gray-800 font-bold text-center">
                    {item.amount}
                  </p>
                  <div className="text-center">
                    <Link
                      href={`/donate/${item.id}`}
                      className="inline-block text-primary font-semibold hover:underline"
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

      {/* Section - 5 */}
      <section className="container">
        <div className=" p-3 sm:p-5 space-y-5 rounded-2xl ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary font-bold text-center">
            Donation for Equipment
          </h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {donationequipment.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-60 object-cover rounded-t-xl"
                />
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-semibold text-center text-primary">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    {item.desc}
                  </p>
                  <p className="text-gray-800 font-bold text-center">
                    {item.amount}
                  </p>
                  <div className="text-center">
                    <Link
                      href={`/donate/${item.id}`}
                      className="inline-block text-primary font-semibold hover:underline"
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

      {/* Section - 6 */}
      <section className="container py-20 px-4 overflow-hidden bg-white">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 bg-primary blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 bg-emerald-400 blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-1 rounded-full bg-primary" />
              <span
                className="text-primary text-sm font-semibold tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Secure Transfer
              </span>
               <div className="w-8 h-1 rounded-full bg-primary" />
            </div>
            <h2
              className="text-5xl font-bold text-slate-800 leading-tight text-center"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Bank
              <span className="text-primary"> Information</span>
            </h2>
          </div>

          {/* Bank Details Card */}
          <div className="relative">
            {/* Card shadow layer */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-primary" />

            <div className="relative bg-white rounded-3xl border border-gray-300 overflow-hidden shadow-sm">
              {/* Top accent bar */}
              <div className="w-full bg-gradient-to-r from-primary via-primary to-primary" />

              <div className="p-8 md:p-10 space-y-0 divide-y divide-gray-100">
                {bankDetails.map((item, index) => (
                  <div
                    key={index}
                    className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 gap-1 hover:bg-primary-200  md:-mx-10 px-8 md:px-10 transition-colors duration-200"
                  >
                    <span
                      className="text-sm text-gray-600 font-medium font-semibold tracking-wide uppercase"
                      style={{
                        fontFamily: "'Georgia', serif",
                        letterSpacing: "0.07em",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-slate-800 font-bold text-lg group-hover:text-primary transition-colors duration-200 sm:text-right"
                      style={{ fontFamily: "'Courier New', monospace" }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom section */}
              <div className="px-8 md:px-10 pb-8">
                <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-500">
                  Contact us to get a receipt after payment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SmoothScroll>
  );
}
