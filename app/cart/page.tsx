"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SmoothScroll from "../../Component/SmothScrolling";

type CartItem = {
  id: string;
  title: string;
  amount: string;
  img: string;
  quantity: number;
};

export default function CartPage() {
  const [cartItem, setCartItem] = useState<CartItem | null>(null);
  const [qty, setQty] = useState(1);
  const [removing, setRemoving] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("cartItem");
    if (saved) {
      const parsed = JSON.parse(saved);
      setTimeout(() => {
        setCartItem(parsed);
        setQty(parsed.quantity || 1);
      }, 0);
    }
  }, []);

  if (!cartItem) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-5 bg-[var(--color-tertiary)]">
        <div className="w-24 h-24 rounded-full bg-white border-2 border-[var(--color-dark)] flex items-center justify-center shadow-md">
          <span className="text-4xl">🛒</span>
        </div>
        <h2 className="text-3xl font-black text-gray-900">
          Your cart is empty
        </h2>
        <p className="text-gray-400 text-sm">
          You haven&apos;t added any donation yet.
        </p>
        <Link
          href="/donate"
          className="mt-2 bg-[var(--color-primary)] text-white px-8 py-3 rounded-2xl font-black text-sm hover:bg-[#007fa3] transition-all shadow-lg shadow-[var(--color-primary)]/20"
        >
          Browse Donations →
        </Link>
      </div>
    );
  }

  const rawAmount = Number(String(cartItem.amount).replace(/[,₹\s]/g, ""));
  const subtotal = rawAmount * qty;
  const formatted = (n: number) => "₹" + n.toLocaleString("en-IN");

  const handleRemove = () => {
    setRemoving(true);
    setTimeout(() => {
      sessionStorage.removeItem("cartItem");
      setCartItem(null);
    }, 350);
  };

  return (
    <>
      <SmoothScroll>
        <div className="min-h-screen bg-[var(--color-tertiary)] mx-auto pb-20">
          {/* ── Page Header ── */}
          <div className="container bg-white border-b border-[var(--color-dark)] ">
            <div className=" mx-auto">
              <p className="text-[var(--color-secondary)] text-[10px] font-black uppercase tracking-[0.35em] flex items-center justify-center lg:justify-start gap-2 mb-2">
                <span className="w-5 h-px bg-[var(--color-secondary)]" />
                Donation Cart
                <span className="w-5 h-px bg-[var(--color-secondary)]" />
              </p>
              <div className="flex items-baseline justify-center lg:justify-start gap-3">
                <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                  Your Cart
                </h1>
              </div>
            </div>
          </div>

          {/* ── Main Layout ── */}
          <div className="container max-w-7xl mt-10 flex flex-col justify-self-center lg:flex-row gap-8">
            {/* ── LEFT: Cart Item ── */}
            <div className="flex-1 space-y-4">
              {/* Item Card */}
              <div
                className={`bg-white rounded-3xl border border-[var(--color-dark)] shadow-sm p-6 flex flex-col md:grid md:grid-cols-[1fr_110px_130px_110px] items-center gap-5 relative transition-all duration-300 ${
                  removing
                    ? "opacity-0 -translate-x-6"
                    : "opacity-100 translate-x-0"
                }`}
              >
                {/* Remove Button */}
                <button
                  onClick={handleRemove}
                  className="absolute top-4 right-4 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 hover:border-red-400 hover:text-red-400 hover:bg-red-50 transition text-xs cursor-pointer"
                >
                  ✕
                </button>

                {/* Product Info */}
                <div className="flex flex-col lg:flex-row items-center gap-4 w-full min-w-0">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[var(--color-dark)] flex-shrink-0 bg-[var(--color-tertiary)]">
                    <Image
                      src={cartItem.img}
                      alt={cartItem.title}
                      width={100}
                      height={100}
                      className="object-cover rounded-2xl h-20 w-20"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="justify-self-center lg:justify-self-start">
                      <span className="inline-block text-[9px] font-black uppercase tracking-widest text-[var(--color-primary)] bg-[var(--color-tertiary)] border border-[var(--color-dark)] px-2 py-0.5 rounded-full mb-1.5">
                        Donation
                      </span>
                    </div>
                    <p className="text-sm font-black text-gray-900 leading-snug text-center lg:text-start line-clamp-2">
                      {cartItem.title}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1 font-medium text-center lg:text-start">
                      ID: #{cartItem.id.slice(0, 24)}…
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="text-center w-full md:w-auto">
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest md:hidden mb-1">
                    Price
                  </p>
                  <span className="text-sm font-bold text-gray-700">
                    {formatted(rawAmount)}
                  </span>
                </div>

                {/* Quantity */}
                <div className="flex flex-col items-center gap-2 w-full md:w-auto">
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest md:hidden">
                    Quantity
                  </p>
                  <div className="flex items-center gap-2 rounded-xl px-2 py-1">
                    <button
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="w-7 h-7 rounded-lg bg-white border border-[var(--color-dark)] text-gray-600 font-black text-sm hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition cursor-pointer flex items-center justify-center shadow-sm"
                    >
                      −
                    </button>
                    <span className="text-sm font-black text-gray-900 w-7 text-center tabular-nums">
                      {qty}
                    </span>
                    <button
                      onClick={() => setQty((q) => q + 1)}
                      className="w-7 h-7 rounded-lg bg-white border border-[var(--color-dark)] text-gray-600 font-black text-sm hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition cursor-pointer flex items-center justify-center shadow-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="text-right w-full md:w-auto pr-2">
                  <p className="text-[10px] text-gray-400 font-black text-center  uppercase tracking-widest md:hidden mb-1">
                    Subtotal
                  </p>
                  <div className="justify-self-center lg:justify-self-start">
                    <span className="text-lg font-black text-[var(--color-primary)]">
                      {formatted(subtotal)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Continue Shopping */}
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 text-xs font-bold text-[var(--color-primary)] hover:underline mt-2"
              >
                ← Continue Donating
              </Link>
            </div>

            {/* ── RIGHT: Order Summary ── */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-3xl border border-[var(--color-dark)] shadow-sm overflow-hidden">
                {/* Summary header */}
                <div className="bg-[var(--color-primary)] px-6 py-4 flex items-center gap-2">
                  <div className="w-1 h-5 bg-white/60 rounded-full" />
                  <h2 className="text-sm font-black uppercase tracking-[0.2em] text-white">
                    Order Summary
                  </h2>
                </div>

                <div className="p-6 space-y-5">
                  {/* Line items */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500 font-medium">
                        Unit Amount
                      </span>
                      <span className="font-bold text-gray-800">
                        {formatted(rawAmount)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500 font-medium">
                        Quantity
                      </span>
                      <span className="font-bold text-gray-800">× {qty}</span>
                    </div>
                  </div>

                  <div className="h-px bg-[var(--color-tertiary)]" />

                  {/* Total */}
                  <div className="bg-[var(--color-tertiary)] border border-[var(--color-dark)] rounded-2xl px-5 py-4 flex justify-between gap-5 items-center">
                    <span className="text-sm font-black text-gray-700 uppercase tracking-wider">
                      Total
                    </span>
                    <span className="text-2xl font-black text-[var(--color-primary)] tabular-nums">
                      {formatted(subtotal)}
                    </span>
                  </div>

                  {/* Checkout CTA */}

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full"
                  >
                    <Link href={`/checkout`} className="w-full block">
                      <button
                        type="submit"
                        className="btn-primary w-full group relative inline-flex items-center justify-center gap-2
      font-semibold text-xs md:text-base px-10 py-4 cursor-pointer
      bg-[var(--color-primary)] text-[var(--color-secondary)]
      hover:text-[var(--color-primary)] overflow-hidden"
                      >
                        <span className="relative z-10 flex gap-2 items-center">
                          Proceed to Checkout →
                        </span>

                        <span className="btn-primary-overlay"></span>
                      </button>
                    </Link>
                  </motion.div>

                  {/* Trust row */}
                  <div className="flex items-center justify-center gap-4 pt-1">
                    {["🔒 Secure", "80G Tax", "✓ Verified"].map((t) => (
                      <span
                        key={t}
                        className="text-[10px] text-gray-400 font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SmoothScroll>
    </>
  );
}
