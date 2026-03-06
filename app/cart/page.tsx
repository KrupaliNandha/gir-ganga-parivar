"use client";
import { useEffect, useState } from "react";

type CartItem = {
  id: string;
  title: string;
  amount: string;
  img: string;
  quantity: number;
};

export default function CartPage() {
  const [item, setItem] = useState<CartItem | null>(null);
  const [qty, setQty] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("cartItem");
    if (saved) {
      const parsed = JSON.parse(saved);
      setItem(parsed);
      setQty(parsed.quantity || 1);
    }
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!item) {
    return (
      <div className="container py-20 text-center text-gray-400 text-xl">
        Your cart is empty.
      </div>
    );
  }

  // amount string માંથી number કાઢો (commas remove)
  const rawAmount = Number(item.amount.replace(/,/g, ""));
  const subtotal = rawAmount * qty;
  const formatted = (n: number) => "₹" + n.toLocaleString("en-IN");

  const handleRemove = () => {
    sessionStorage.removeItem("cartItem");
    setItem(null);
  };

  const handleUpdate = () => {
    const updated = { ...item, quantity: qty };
    sessionStorage.setItem("cartItem", JSON.stringify(updated));
  };

  return (
    <div className="container py-10 space-y-10">

      {/* ── Cart Table ── */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-[40px_1fr_150px_150px_150px] bg-gray-50 border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-500 uppercase tracking-wide">
          <div />
          <div>Product</div>
          <div className="text-center">Price</div>
          <div className="text-center">Quantity</div>
          <div className="text-right">Subtotal</div>
        </div>

        {/* Row */}
        <div className="grid grid-cols-[40px_1fr_150px_150px_150px] items-center px-4 py-5 gap-4">
          {/* Remove */}
          <button
            onClick={handleRemove}
            className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-red-400 hover:text-red-400 transition cursor-pointer"
          >
            ✕
          </button>

          {/* Product */}
          <div className="flex items-center gap-4">
            <img
              src={item.img}
              alt={item.title}
              className="w-16 h-16 rounded-xl object-cover border border-gray-100"
            />
            <span className="text-emerald-600 font-semibold text-sm md:text-base hover:underline cursor-pointer">
              {item.title}
            </span>
          </div>

          {/* Price */}
          <div className="text-center text-gray-700 font-medium">
            {formatted(rawAmount)}
          </div>

          {/* Quantity */}
          <div className="flex items-center justify-center">
            <input
              type="number"
              min={1}
              value={qty}
              onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
              className="w-16 text-center border border-gray-300 rounded-lg py-2 text-sm focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Subtotal */}
          <div className="text-right text-gray-800 font-semibold">
            {formatted(subtotal)}
          </div>
        </div>
      </div>

      {/* ── Cart Totals ── */}
      <div className="flex justify-end">
        <div className="w-full max-w-lg border border-gray-200 rounded-2xl overflow-hidden">
          {/* Title */}
          <div className="px-8 py-6 border-b border-gray-100">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Cart Totals
            </h2>
          </div>

          {/* Subtotal row */}
          <div className="flex justify-between items-center px-8 py-4 border-b border-gray-100">
            <span className="text-gray-500 text-sm">Subtotal</span>
            <span className="text-gray-800 font-medium">{formatted(subtotal)}</span>
          </div>

          {/* Total row */}
          <div className="flex justify-between items-center px-8 py-4 border-b border-gray-100">
            <span className="text-gray-700 font-semibold">Total</span>
            <span className="text-gray-900 font-bold text-lg">{formatted(subtotal)}</span>
          </div>

          {/* Proceed button */}
          <div className="px-8 py-6">
            <a href="/checkout">
              <button className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-gray-700 transition text-base cursor-pointer">
                Proceed to Checkout
              </button>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}