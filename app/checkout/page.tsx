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
      <div className="min-h-screen flex flex-col items-center justify-center gap-5 bg-[var(--color-tertiary)]">
        <div className="w-20 h-20 rounded-full bg-white border-2 border-[var(--color-dark)] flex items-center justify-center shadow-md">
          <span className="text-4xl">🛒</span>
        </div>
        <h2 className="text-2xl font-black text-gray-900">
          No donation item found
        </h2>
        <Link
          href="/donate"
          className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-2xl font-black text-sm hover:bg-[#007fa3] transition-all shadow-lg"
        >
          Browse Donations →
        </Link>
      </div>
    );
  }

  const rawAmount = Number(String(cartItem.amount).replace(/[,₹\s]/g, ""));
  const formatted = (n: number) => "₹" + n.toLocaleString("en-IN");

  const inputBase =
    "w-full border border-[var(--color-dark)] rounded-xl px-4 py-3 text-sm bg-[var(--color-tertiary)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-all duration-200 text-gray-800 placeholder-gray-400";
  const labelBase =
    "block text-[10px] font-black text-gray-400 uppercase tracking-[0.25em] mb-1.5";

  return (
    <div className="min-h-screen bg-[var(--color-tertiary)]">
      {/* ── Progress Bar ── */}
      {/* <div className="bg-white border-b border-[var(--color-dark)]">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex items-center gap-3 text-xs">
            {[
              { step: 1, label: "Choose Amount", done: true },
              { step: 2, label: "Donor Details", active: true },
              { step: 3, label: "Payment", done: false },
            ].map((s, i) => (
              <div key={s.step} className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                    s.done ? "bg-[var(--color-primary)] text-white" :
                    s.active ? "bg-[var(--color-primary)] text-white ring-4 ring-[var(--color-primary)]/20" :
                    "bg-[var(--color-dark)] text-gray-400"
                  }`}>
                    {s.done && !s.active ? "✓" : s.step}
                  </div>
                  <span className={`font-bold ${s.active ? "text-[var(--color-primary)]" : s.done ? "text-gray-600" : "text-gray-400"}`}>
                    {s.label}
                  </span>
                </div>
                {i < 2 && <div className="w-12 h-px bg-[var(--color-dark)]" />}
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className="bg-white border-b border-[var(--color-dark)] px-6 md:px-12 py-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-[var(--color-secondary)] text-[10px] font-black uppercase tracking-[0.35em] flex items-center gap-2 mb-2">
            <span className="w-5 h-px bg-[var(--color-secondary)]" />
            Donation Check Out
            <span className="w-5 h-px bg-[var(--color-secondary)]" />
          </p>
          <div className="flex items-baseline gap-3">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              Check Out
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 px-6 py-10">
        {/* ── LEFT FORM ── */}
        <div className="lg:col-span-3 space-y-6">
          {/* Personal Info */}
          <div className="bg-white rounded-3xl border border-[var(--color-dark)] shadow-sm overflow-hidden">
            <div className="bg-[var(--color-primary)] px-7 py-5 flex items-center gap-3">
              <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">👤</span>
              </div>
              <div>
                <h2 className="text-white font-black text-base">
                  Personal Information
                </h2>
                <p className="text-white/70 text-xs mt-0.5">
                  Fill in your details below
                </p>
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
                  <span className="text-gray-300 normal-case tracking-normal font-normal">
                    (optional)
                  </span>
                </label>
                <input className={inputBase} />
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
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-bold">
                      +91
                    </span>

                    <input
                      type="text"
                      className={`${inputBase} pl-12`}
                      maxLength={10}
                      inputMode="numeric"
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(
                          /[^0-9]/g,
                          "",
                        );
                      }}
                    />
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

          {/* Billing Address */}
          <div className="bg-white rounded-3xl border border-[var(--color-dark)] shadow-sm overflow-hidden">
            <div className="bg-[var(--color-primary)] px-7 py-5 flex items-center gap-3">
              <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">📍</span>
              </div>
              <div>
                <h2 className="text-white font-black text-base">
                  Billing Address
                </h2>
                <p className="text-white/70 text-xs mt-0.5">
                  Required for donation receipt
                </p>
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
                <input className={inputBase} />
                <input className={`${inputBase} mt-3`} />
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

                  <input
                    type="text"
                    className={inputBase}
                    maxLength={6}
                    inputMode="numeric"
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(
                        /[^0-9]/g,
                        "",
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT SUMMARY ── */}
        <div className="lg:col-span-2">
          <div className="sticky top-6 space-y-4">
            {/* Donation Summary */}
            <div className="bg-white rounded-3xl border border-[var(--color-dark)] shadow-sm overflow-hidden">
              <div className="bg-[var(--color-primary)] px-6 py-4 flex items-center gap-2">
                <div className="w-1 h-5 bg-white/50 rounded-full" />
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
                  Donation Summary
                </h3>
              </div>

              <div className="p-6">
                {/* Item row */}
                <div className="flex items-center gap-4 pb-5 border-b border-[var(--color-dark)]">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-[var(--color-dark)] flex-shrink-0 bg-[var(--color-tertiary)]">
                    <img
                      src={cartItem.img}
                      alt={cartItem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-black text-gray-900 leading-snug line-clamp-2">
                      {cartItem.title}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1">
                      One-time donation
                    </p>
                  </div>
                  <span className="text-sm font-black text-[var(--color-primary)] flex-shrink-0">
                    {formatted(rawAmount)}
                  </span>
                </div>

                {/* Breakdown */}
                <div className="pt-4 space-y-3">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Subtotal</span>
                    <span className="font-bold text-gray-700">
                      {formatted(rawAmount)}
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="mt-4 bg-[var(--color-tertiary)] border border-[var(--color-dark)] rounded-2xl px-5 py-4 flex justify-between items-center">
                  <span className="text-sm font-black text-gray-700 uppercase tracking-wider">
                    Total
                  </span>
                  <span className="text-2xl font-black text-[var(--color-primary)] tabular-nums">
                    {formatted(rawAmount)}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-3xl border border-[var(--color-dark)] shadow-sm px-6 py-5">
              <p className={labelBase}>Payment Method</p>
              <div className="flex items-center gap-3 bg-[var(--color-tertiary)] rounded-2xl px-4 py-3.5 border border-[var(--color-dark)] mt-2">
                <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-base">💳</span>
                </div>
                <div>
                  <p className="text-sm font-black text-gray-800">
                    Easebuzz Gateway
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5">
                    Card · UPI · Net Banking · Wallet
                  </p>
                </div>
                <div className="ml-auto w-2.5 h-2.5 bg-[var(--color-accent)] rounded-full" />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="bg-white rounded-3xl border border-[var(--color-dark)] shadow-sm px-6 py-5 space-y-4">
              {[
                {
                  checked: agreedTerms,
                  toggle: () => setAgreedTerms(!agreedTerms),
                  label: (
                    <>
                      I agree to the{" "}
                      <span className="text-[var(--color-primary)] font-bold underline underline-offset-2 cursor-pointer">
                        terms and conditions
                      </span>
                    </>
                  ),
                },
                {
                  checked: hideLeaderboard,
                  toggle: () => setHideLeaderboard(!hideLeaderboard),
                  label: (
                    <>
                      Hide my name from the leaderboard{" "}
                      <span className="text-gray-400 text-[10px]">
                        (optional)
                      </span>
                    </>
                  ),
                },
              ].map((item, i) => (
                <label
                  key={i}
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <div
                    onClick={item.toggle}
                    className={`w-5 h-5 rounded-lg border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all cursor-pointer ${
                      item.checked
                        ? "bg-[var(--color-primary)] border-[var(--color-primary)]"
                        : "border-[var(--color-dark)] group-hover:border-[var(--color-primary)]"
                    }`}
                  >
                    {item.checked && (
                      <span className="text-white text-[10px] font-black">
                        ✓
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-600 leading-relaxed">
                    {item.label}
                  </span>
                </label>
              ))}
            </div>

            {/* CTA */}
            <button className="w-full bg-[var(--color-primary)] hover:bg-[#007fa3] text-white py-4 rounded-2xl font-black text-sm transition-all duration-200 shadow-xl shadow-[var(--color-primary)]/20 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
              <span>💙</span>
              Donate {formatted(rawAmount)} Now
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { icon: "🔒", label: "SSL Secure" },
                { icon: "📋", label: "80G Tax Benefit" },
                { icon: "✅", label: "Trusted NGO" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex flex-col items-center gap-1.5 bg-white border border-[var(--color-dark)] rounded-2xl py-3 px-2 text-center"
                >
                  <span className="text-lg">{b.icon}</span>
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-wide leading-tight">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
