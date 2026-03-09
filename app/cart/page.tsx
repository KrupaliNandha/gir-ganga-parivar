"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

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
      // Make state update async to avoid React warning
      setTimeout(() => {
        setCartItem(parsed);
        setQty(parsed.quantity || 1);
      }, 0);
    }
  }, []);

  if (!cartItem) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50">
        <div className="text-6xl">🛒</div>
        <h2 className="text-3xl font-extrabold text-gray-900">
          Your cart is empty
        </h2>
        <p className="text-gray-400 text-base">
          Looks like you haven&apos;t added anything yet.
        </p>
        <Link
          href="/donate"
          className="mt-4 bg-gray-900 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-gray-700 transition"
        >
          Browse Products
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
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-6 md:px-12 pt-10 pb-0">
        <div className="max-w-6xl mx-auto flex items-baseline gap-3 pb-5">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Shopping Cart
          </h1>
          <span className="text-sm text-gray-400 font-medium">1 item</span>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="h-1 w-14 bg-emerald-500 rounded-full" />
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-10 flex flex-col lg:flex-row gap-8 items-start">
        {/* Left: Cart Items */}
        <div className="flex-1 min-w-0">
          <div className="hidden md:grid grid-cols-[1fr_120px_130px_120px] px-5 pb-3 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <span>Product</span>
            <span className="text-center">Price</span>
            <span className="text-center">Quantity</span>
            <span className="text-right">Subtotal</span>
          </div>

          {/* Item Card */}
          <div
            className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col md:grid md:grid-cols-[1fr_120px_130px_120px] items-center gap-4 relative transition-all duration-300 ${
              removing ? "opacity-0 -translate-x-6" : "opacity-100 translate-x-0"
            }`}
          >
            {/* Remove Button */}
            <button
              onClick={handleRemove}
              className="absolute top-3 right-3 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 hover:border-red-400 hover:text-red-400 transition text-xs cursor-pointer"
            >
              ✕
            </button>

            {/* Product Info */}
            <div className="flex items-center gap-4 w-full min-w-0">
              <div className="w-20 h-20 rounded-xl overflow-hidden border border-gray-100 flex-shrink-0 bg-gray-50">
                <img
                  src={cartItem.img}
                  alt={cartItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-gray-900 truncate">
                  {cartItem.title}
                </p>
                <p className="text-xs text-gray-400 mt-1">ID: #{cartItem.id}</p>
              </div>
            </div>

            {/* Price */}
            <div className="text-center w-full md:w-auto">
              <span className="text-sm text-gray-500 md:hidden font-semibold">
                Price:{" "}
              </span>
              <span className="text-sm font-semibold text-gray-600">
                {formatted(rawAmount)}
              </span>
            </div>

            {/* Quantity */}
            <div className="flex items-center justify-center gap-3 w-full md:w-auto">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-8 h-8 rounded-lg border border-gray-200 bg-gray-50 text-gray-600 font-bold text-base hover:border-emerald-400 hover:text-emerald-500 transition cursor-pointer flex items-center justify-center"
              >
                −
              </button>
              <span className="text-sm font-bold text-gray-900 w-6 text-center">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-8 h-8 rounded-lg border border-gray-200 bg-gray-50 text-gray-600 font-bold text-base hover:border-emerald-400 hover:text-emerald-500 transition cursor-pointer flex items-center justify-center"
              >
                +
              </button>
            </div>

            {/* Subtotal */}
            <div className="text-right w-full md:w-auto pr-6">
              <span className="text-sm text-gray-500 md:hidden font-semibold">
                Subtotal:{" "}
              </span>
              <span className="text-base font-extrabold text-gray-900">
                {formatted(subtotal)}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Order Summary
            </h2>

            <div className="h-px bg-gray-100 my-5" />

            <div className="flex justify-between items-center mb-6">
              <span className="text-base font-bold text-gray-900">Total</span>
              <span className="text-2xl font-black text-gray-900 tracking-tight">
                {formatted(subtotal)}
              </span>
            </div>

            <Link
              href="/checkout"
              className="block w-full bg-gray-900 text-white text-center py-4 rounded-xl font-bold text-sm hover:bg-gray-700 transition"
            >
              Proceed to Checkout →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}