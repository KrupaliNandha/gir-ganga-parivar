"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

type CartItem = {
  id: string;
  title: string;
  amount: string;
  img: string;
  quantity: number;
};

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

export default function DonationCheckout() {
  const [cartItem, setCartItem] = useState<CartItem | null>(null);
  const [mounted, setMounted] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [hideLeaderboard, setHideLeaderboard] = useState(false);
  useEffect(() => {
    const saved = sessionStorage.getItem("cartItem");

    if (!saved) return;

    Promise.resolve().then(() => {
      setCartItem(JSON.parse(saved));
      setMounted(true);
    });
  }, []);

  if (!mounted) return null;

  if (!cartItem) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-10 h-10 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <p className="text-xl font-semibold text-slate-700">
            Your cart is empty
          </p>
          <p className="text-slate-400 text-sm mt-1">No donation item found</p>
        </div>
      </div>
    );
  }

  const rawAmount = Number(String(cartItem.amount).replace(/[,₹\s]/g, ""));
  const formatted = (n: number) => "₹" + n.toLocaleString("en-IN");

  const inputBase =
    "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200 text-slate-800 placeholder-slate-400";

  const labelBase =
    "block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5";

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Progress Steps */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-emerald-600 font-medium">
                Choose Amount
              </span>
            </div>
            <div className="flex-1 h-px bg-slate-200 max-w-16" />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">
                2
              </div>
              <span className="text-slate-800 font-semibold">
                Donor Details
              </span>
            </div>
            <div className="flex-1 h-px bg-slate-200 max-w-16" />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 text-xs font-bold">
                3
              </div>
              <span className="text-slate-400">Payment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-8 px-6 py-10">
        {/* LEFT FORM */}
        <div className="lg:col-span-3 space-y-6">
          {/* Personal Info Card */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="bg-primary px-7 py-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white bg-opacity-10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-white font-semibold text-base">
                    Personal Information
                  </h2>
                  <p className="text-white text-xs mt-0.5">
                    Fill in your details below
                  </p>
                </div>
              </div>
            </div>

            <div className="px-7 py-7 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelBase}>
                    First Name{" "}
                    <span className="text-red-400 normal-case tracking-normal">
                      *
                    </span>
                  </label>
                  <input className={inputBase} />
                </div>
                <div>
                  <label className={labelBase}>
                    Last Name{" "}
                    <span className="text-red-400 normal-case tracking-normal">
                      *
                    </span>
                  </label>
                  <input className={inputBase} />
                </div>
              </div>

              <div>
                <label className={labelBase}>
                  Company Name{" "}
                  <span className="text-slate-400 normal-case tracking-normal font-normal">
                    (optional)
                  </span>
                </label>
                <input
                  className={inputBase}
                  placeholder="Your company or organization"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelBase}>
                    Phone{" "}
                    <span className="text-red-400 normal-case tracking-normal">
                      *
                    </span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium">
                      +91
                    </span>
                    <input className={`${inputBase} pl-12`} />
                  </div>
                </div>
                <div>
                  <label className={labelBase}>
                    Email Address{" "}
                    <span className="text-red-400 normal-case tracking-normal">
                      *
                    </span>
                  </label>
                  <input className={inputBase} type="email" />
                </div>
              </div>
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="bg-primary px-7 py-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white bg-opacity-10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-white font-semibold text-base">
                    Billing Address
                  </h2>
                  <p className="text-emerald-100 text-xs mt-0.5">
                    Required for donation receipt
                  </p>
                </div>
              </div>
            </div>

            <div className="px-7 py-7 space-y-5">
              <div>
                <label className={labelBase}>
                  Country / Region{" "}
                  <span className="text-red-400 normal-case tracking-normal">
                    *
                  </span>
                </label>
                <select className={inputBase}>
                  <option>India</option>
                </select>
              </div>

              <div>
                <label className={labelBase}>
                  Street Address{" "}
                  <span className="text-red-400 normal-case tracking-normal">
                    *
                  </span>
                </label>
                <input
                  className={inputBase}
                  placeholder="House number and street name"
                />
                <input
                  className={`${inputBase} mt-3`}
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                <div>
                  <label className={labelBase}>
                    City{" "}
                    <span className="text-red-400 normal-case tracking-normal">
                      *
                    </span>
                  </label>
                  <input className={inputBase} />
                </div>
                <div>
                  <label className={labelBase}>
                    State{" "}
                    <span className="text-red-400 normal-case tracking-normal">
                      *
                    </span>
                  </label>
                  <select className={inputBase} defaultValue="Gujarat">
                    {INDIAN_STATES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelBase}>
                    PIN Code{" "}
                    <span className="text-red-400 normal-case tracking-normal">
                      *
                    </span>
                  </label>
                  <input className={inputBase} maxLength={6} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SUMMARY */}
        <div className="lg:col-span-2">
          <div className="sticky top-6 space-y-4">
            {/* Order Summary */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100">
                <h3 className="font-semibold text-slate-800 text-base">
                  Donation Summary
                </h3>
              </div>

              <div className="px-6 py-5">
                <div className="flex items-start gap-4 pb-5 border-b border-slate-100">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-emerald-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800 leading-snug">
                      {cartItem.title}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      One-time donation
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-slate-800 flex-shrink-0">
                    {formatted(rawAmount)}
                  </span>
                </div>

                <div className="pt-4 space-y-2.5">
                  <div className="flex justify-between text-sm text-slate-500">
                    <span>Subtotal</span>
                    <span>{formatted(rawAmount)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-500">
                    <span>Processing fee</span>
                    <span className="text-emerald-600 font-medium">Free</span>
                  </div>
                  <div className="border-t border-slate-100 pt-3 flex justify-between font-bold text-base">
                    <span className="text-slate-800">Total</span>
                    <span className="text-emerald-600">
                      {formatted(rawAmount)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-6 py-5">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                Payment Method
              </p>
              <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3.5 border border-slate-200">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Easebuzz Gateway
                  </p>
                  <p className="text-xs text-slate-400">
                    Card · UPI · Net Banking · Wallet
                  </p>
                </div>
                <div className="ml-auto">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                </div>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-6 py-5 space-y-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div
                  onClick={() => setAgreedTerms(!agreedTerms)}
                  className={`w-5 h-5 rounded-md border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all cursor-pointer ${
                    agreedTerms
                      ? "bg-emerald-500 border-emerald-500"
                      : "border-slate-300 group-hover:border-emerald-400"
                  }`}
                >
                  {agreedTerms && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-slate-600 leading-relaxed">
                  I agree to the{" "}
                  <span className="text-emerald-600 font-medium underline underline-offset-2 cursor-pointer hover:text-emerald-700">
                    terms and conditions
                  </span>
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <div
                  onClick={() => setHideLeaderboard(!hideLeaderboard)}
                  className={`w-5 h-5 rounded-md border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all cursor-pointer ${
                    hideLeaderboard
                      ? "bg-emerald-500 border-emerald-500"
                      : "border-slate-300 group-hover:border-emerald-400"
                  }`}
                >
                  {hideLeaderboard && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-slate-600 leading-relaxed">
                  Hide my name from the leaderboard{" "}
                  <span className="text-slate-400 text-xs">(optional)</span>
                </span>
              </label>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-4 rounded-2xl font-bold text-base transition-all duration-200 shadow-lg shadow-emerald-200 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              Donate {formatted(rawAmount)} Now
            </button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-5 pt-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                SSL Secure
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                80G Tax Benefit
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Trusted NGO
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
