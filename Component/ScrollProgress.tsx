"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPosition = window.scrollY;

      const percent = Math.round((scrollPosition / totalHeight) * 100);

      setScroll(percent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // hide when at top
  if (scroll === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="w-17 h-17 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
        <img
          src="/loader/Spinner@1x-1.0s-200px-200px.gif"
          alt="loader"
          className="w-29 h-29 object-cover"
        />

        <span className="absolute text-black font-semibold text-sm">
          {scroll}%
        </span>
      </div>
    </div>
  );
}
