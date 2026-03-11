"use client";

import { useState, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { MapPin, Waves, Search, Eye, EyeOff, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Droplets, Sprout, Users, Building2, ArrowUpRight } from "lucide-react";
import type { Map as LeafletMap, Marker as LeafletMarker } from "leaflet";
import SmoothScroll from "../../Component/SmothScrolling";

// ── Data ─────────────────────────────────────────────────────────────────────
const LAKES = [
  { id: 1, lat: 22.32, lng: 70.68, name: "Aji Dam Lake" },
  { id: 2, lat: 22.48, lng: 70.62, name: "Nyari Lake" },
  { id: 3, lat: 22.55, lng: 70.55, name: "Paddhari Lake" },
  { id: 4, lat: 22.45, lng: 70.42, name: "Jamnagar Road Lake" },
  { id: 5, lat: 22.38, lng: 70.48, name: "Kalavad Lake" },
  { id: 6, lat: 22.28, lng: 70.52, name: "Lodhika Lake" },
  { id: 7, lat: 22.25, lng: 70.45, name: "SH323 Lake 1" },
  { id: 8, lat: 22.24, lng: 70.47, name: "SH323 Lake 2" },
  { id: 9, lat: 22.3, lng: 70.82, name: "East Lake 1" },
  { id: 10, lat: 22.31, lng: 70.8, name: "East Lake 2" },
  { id: 11, lat: 22.33, lng: 70.83, name: "Cholaa Lake" },
];

const CHECK_DAMS = [
  { id: 1, lat: 22.305, lng: 70.78, name: "Check Dam 1" },
  { id: 2, lat: 22.315, lng: 70.79, name: "Check Dam 2" },
  { id: 3, lat: 22.295, lng: 70.785, name: "Check Dam 3" },
  { id: 4, lat: 22.32, lng: 70.77, name: "Check Dam 4" },
];

// ── Stats data ────────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: Droplets,
    number: 8354,
    suffix: "+",
    label: "Water structures developed",
    accent: "#6d8c54",
    bg: "from-emerald-50 to-white",
    border: "border-[var(--color-greenish)]",
    iconBg: "bg-[var(--color-greenish)]",
    iconColor: "text-white",
  },
  {
    icon: Sprout,
    number: 429000,
    suffix: "+",
    label: "Acres farmland rejuvenated",
    accent: "#6d8c54",
    bg: "from-teal-50 to-white",
    border: "border-[var(--color-greenish)]",
    iconBg: "bg-[var(--color-greenish)]",
    iconColor: "text-white",
  },
  {
    icon: Users,
    number: 151000,
    suffix: "+",
    label: "Farmers benefited",
    accent: "#6d8c54",
    bg: "from-green-50 to-white",
    border: "border-[var(--color-greenish)]",
    iconBg: "bg-[var(--color-greenish)]",
    iconColor: "text-white",
  },
  {
    icon: Building2,
    number: 580,
    suffix: "+",
    label: "Gram Panchayats engaged",
    accent: "#6d8c54",
    bg: "from-emerald-50 to-white",
    border: "border-[var(--color-greenish)]",
    iconBg: "bg-[var(--color-greenish)]",
    iconColor: "text-white",
  },
];

// ── Typed marker extension ────────────────────────────────────────────────────
type GGPTMarker = LeafletMarker & {
  _ggptType: "lake" | "dam";
  _ggptName: string;
};

// ── Count-up hook ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ── StatCard ──────────────────────────────────────────────────────────────────
function StatCard({
  stat,
  index,
  inView,
}: {
  stat: (typeof STATS)[0];
  index: number;
  inView: boolean;
}) {
  const count = useCountUp(stat.number, 2000, inView);
  const formatted =
    stat.number >= 1000 ? count.toLocaleString("en-IN") : count.toString();

  return (
    <>
      <SmoothScroll>
        <div
          className={`relative group bg-gradient-to-br ${stat.bg} border-2 ${stat.border} rounded-tr-4xl rounded-bl-4xl p-8 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}
          style={{
            transitionDelay: `${index * 80}ms`,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(32px)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-5"
            style={{ backgroundColor: stat.accent }}
          />
          <div className="flex items-start mb-6">
            <div
              className={`w-12 h-12 ${stat.iconBg} rounded-xl flex items-center justify-center`}
            >
              <stat.icon
                size={22}
                className={stat.iconColor}
                strokeWidth={1.8}
              />
            </div>
          </div>
          <div className="mb-2">
            <span
              className="text-4xl font-black tracking-tight"
              style={{ color: stat.accent }}
            >
              {formatted}
              <span className="text-3xl">{stat.suffix}</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm font-medium leading-snug">
            {stat.label}
          </p>
          <div className="mt-6 h-0.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-[2s] ease-out"
              style={{
                width: inView ? "100%" : "0%",
                backgroundColor: stat.accent,
                transitionDelay: `${index * 80 + 300}ms`,
              }}
            />
          </div>
        </div>
      </SmoothScroll>
    </>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function OurWorkPage() {
  const [showLakes, setShowLakes] = useState(true);
  const [showDams, setShowDams] = useState(true);
  const [showPanel, setShowPanel] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<GGPTMarker[]>([]);

  const sectionRef = useRef<HTMLDivElement>(null);

  // Step 1: mark client ready
  useEffect(() => {
    setMounted(true);
  }, []);

  // Step 2: init Leaflet after mount
  useEffect(() => {
    if (!mounted || !mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    (async () => {
      const L = (await import("leaflet")).default;

      delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)
        ._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const makeFlagIcon = (color: string) =>
        L.divIcon({
          html: `<svg width="24" height="32" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="0" width="3" height="32" fill="${color}" rx="1.5"/>
            <polygon points="5,2 22,9 5,16" fill="${color}"/>
          </svg>`,
          iconSize: [24, 32],
          iconAnchor: [2, 32],
          className: "",
        });

      const LAKE_ICON = makeFlagIcon("#059669");
      const DAM_ICON = makeFlagIcon("#047857");

      const map = L.map(mapContainerRef.current!).setView([22.35, 70.65], 10);
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      LAKES.forEach((lake) => {
        const marker = L.marker([lake.lat, lake.lng], { icon: LAKE_ICON })
          .bindPopup(
            `
          <div style="font-family:sans-serif;min-width:140px">
            <p style="font-weight:700;color:#059669;font-size:13px;margin:0 0 4px">${lake.name}</p>
            <p style="color:#9ca3af;font-size:11px;margin:0">Lake · GGPT Structure</p>
          </div>
        `,
          )
          .addTo(map);
        const ggptMarker = marker as GGPTMarker;
        ggptMarker._ggptType = "lake";
        ggptMarker._ggptName = lake.name.toLowerCase();
        markersRef.current.push(ggptMarker);
      });

      CHECK_DAMS.forEach((dam) => {
        const marker = L.marker([dam.lat, dam.lng], { icon: DAM_ICON })
          .bindPopup(
            `
          <div style="font-family:sans-serif;min-width:140px">
            <p style="font-weight:700;color:#059669;font-size:13px;margin:0 0 4px">${dam.name}</p>
            <p style="color:#9ca3af;font-size:11px;margin:0">Check Dam · GGPT Structure</p>
          </div>
        `,
          )
          .addTo(map);
        const ggptMarker = marker as GGPTMarker;
        ggptMarker._ggptType = "dam";
        ggptMarker._ggptName = dam.name.toLowerCase();
        markersRef.current.push(ggptMarker);
      });
    })();

    return () => {
      mapInstanceRef.current?.remove();
      mapInstanceRef.current = null;
      markersRef.current = [];
    };
  }, [mounted]);

  // Step 3: toggle markers on filter change
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    markersRef.current.forEach((marker) => {
      const matchesSearch =
        !searchQuery || marker._ggptName.includes(searchQuery.toLowerCase());
      const shouldShow =
        matchesSearch &&
        ((marker._ggptType === "lake" && showLakes) ||
          (marker._ggptType === "dam" && showDams));

      if (shouldShow) {
        if (!map.hasLayer(marker)) marker.addTo(map);
      } else {
        if (map.hasLayer(marker)) marker.remove();
      }
    });
  }, [showLakes, showDams, searchQuery]);

  // IntersectionObserver for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredCount = mounted
    ? markersRef.current.filter(
        (m) =>
          m._ggptName.includes(searchQuery.toLowerCase()) &&
          ((m._ggptType === "lake" && showLakes) ||
            (m._ggptType === "dam" && showDams)),
      ).length
    : 0;

  // Section - 3 logic........
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  const STORIES = [
    {
      quote:
        "Before Girganga Parivar Trust came to our village, we struggled every year with water shortage. Now, with the check dam and recharge borewells, our wells have water throughout the year. My crop yield has doubled.",
      name: "Ramesh Patel",
      role: "Farmer",
      location: "Morbi District",
      initials: "RP",
      num: "01",
    },
    {
      quote:
        "The PPP model is revolutionary. Instead of waiting for government projects that might take years, we partnered with Girganga Parivar Trust and completed our water conservation project in just six months.",
      name: "Meera Ben",
      role: "Village Sarpanch",
      location: "Rajkot",
      initials: "MB",
      num: "02",
    },
    {
      quote:
        "I have worked in this region for over 20 years, and I have never seen such systematic and effective water conservation work. The impact on agricultural productivity has been remarkable.",
      name: "Dr. Suresh Kumar",
      role: "Agricultural Extension Officer",
      location: "Gujarat",
      initials: "SK",
      num: "03",
    },
  ];

  return (
    <>
      <SmoothScroll>
        {/* Section - 1 */}
        <section className="container mx-auto">
          <div className="text-center mb-10">
            <p
              className="text-[var(--color-yell)]
 text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3"
            >
              <span
                className="w-8 h-px bg-[var(--color-yell)]
"
              />
              Map
              <span
                className="w-8 h-px bg-[var(--color-yell)]
"
              />
            </p>
            <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Structures Created by{" "}
              <span className="text-[var(--color-greenish)]">
                Girganga Parivar Trust
              </span>
            </h1>
          </div>

          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <div className="flex items-center gap-2 border-2 border-emerald-600/20 rounded-xl px-4 py-2.5 bg-emerald-600/5 focus-within:border-emerald-600 focus-within:bg-white transition-colors flex-1 max-w-xs">
              <Search
                size={15}
                className="text-[var(--color-greenish)] shrink-0"
              />
              <input
                type="text"
                placeholder="Search structures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
              />
            </div>

            <button
              onClick={() => setShowLakes((v) => !v)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all ${
                showLakes
                  ? "bg-[var(--color-greenish)] border-[var(--color-greenish)] text-white shadow-lg "
                  : "bg-white border-emerald-600/20 text-emerald-600 hover:border-emerald-600"
              }`}
            >
              <Waves size={15} strokeWidth={1.5} />
              Lakes ({LAKES.length})
            </button>

            <button
              onClick={() => setShowDams((v) => !v)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all ${
                showDams
                  ? "bg-[var(--color-greenish)] border-[var(--color-greenish)] text-white shadow-lg"
                  : "bg-white border-emerald-600/20 text-emerald-600 hover:border-emerald-600"
              }`}
            >
              <MapPin size={15} strokeWidth={1.5} />
              Check Dams ({CHECK_DAMS.length})
            </button>

            <button
              onClick={() => setShowPanel((v) => !v)}
              className="ml-auto flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-emerald-600/20 text-[var(--color-greenish)] text-sm font-semibold hover:border-emerald-600 hover:bg-emerald-600/5 transition-all"
            >
              {showPanel ? <EyeOff size={15} /> : <Eye size={15} />}
              {showPanel ? "Hide Panel" : "Show Panel"}
            </button>
          </div>

          {/* Map wrapper */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-600/15 shadow-2xl shadow-emerald-600/10">
            {!mounted && (
              <div className="h-[580px] flex flex-col items-center justify-center bg-emerald-50">
                <div className="w-8 h-8 border-2 border-[var(--color-greenish)] border-t-transparent rounded-full animate-spin mb-3" />
                <p className="text-[var(--color-greenish)] text-sm font-medium">
                  Loading map…
                </p>
              </div>
            )}
            <div
              ref={mapContainerRef}
              className="h-[580px] w-full"
              style={{ display: mounted ? "block" : "none" }}
            />

            {/* Floating side panel */}
            {mounted && showPanel && (
              <div className="absolute top-4 right-4 z-[1000] w-56 bg-white rounded-2xl shadow-xl border border-emerald-600/15 overflow-hidden">
                <div className="bg-[var(--color-greenish)] px-4 py-3 flex items-center gap-2">
                  <MapPin size={14} className="text-white" strokeWidth={1.5} />
                  <p className="text-white text-xs font-bold uppercase tracking-widest">
                    Categories
                  </p>
                </div>
                <div
                  onClick={() => setShowLakes((v) => !v)}
                  className={`flex items-center justify-between px-4 py-3.5 border-b border-emerald-600/10 cursor-pointer transition-colors ${showLakes ? "bg-emerald-600/5" : "bg-white hover:bg-emerald-600/5"}`}
                >
                  <div className="flex items-center gap-2.5">
                    <Waves
                      size={14}
                      className="text-[var(--color-greenish)]"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm font-semibold text-gray-700">
                      Lake ({LAKES.length})
                    </span>
                  </div>
                  <span
                    className={`w-3 h-3 rounded-full border-2 transition-colors ${showLakes ? "bg-[var(--color-greenish)] border-[var(--color-greenish)]" : "bg-white border-gray-300"}`}
                  />
                </div>
                <div
                  onClick={() => setShowDams((v) => !v)}
                  className={`flex items-center justify-between px-4 py-3.5 cursor-pointer transition-colors ${showDams ? "bg-emerald-600/5" : "bg-white hover:bg-emerald-600/5"}`}
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin
                      size={14}
                      className="text-[var(--color-greenish)]"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm font-semibold text-[var(--color-greenish)]">
                      Check Dam ({CHECK_DAMS.length})
                    </span>
                  </div>
                  <span
                    className={`w-3 h-3 rounded-full border-2 transition-colors ${showDams ? "bg-[var(--color-greenish)] border-[var(--color-greenish)]" : "bg-white border-gray-300"}`}
                  />
                </div>
                <div className="px-4 py-2.5 bg-emerald-600/5 border-t border-emerald-600/10">
                  <p className="text-[10px] text-[var(--color-greenish)]/60 font-bold uppercase tracking-widest text-center">
                    GGPT · Gujarat, India
                  </p>
                </div>
              </div>
            )}

            {/* Search badge */}
            {mounted && searchQuery && (
              <div className="absolute bottom-4 left-4 z-[1000] bg-white border border-emerald-600/20 rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2">
                <Search size={13} className="text-emerald-600" />
                <span className="text-xs text-gray-600 font-medium">
                  {filteredCount} result(s) for{" "}
                  <span className="text-emerald-600 font-bold">
                    {searchQuery}
                  </span>
                </span>
              </div>
            )}
          </div>
        </section>

        {/*Section - 2 */}
        <section
          ref={sectionRef}
          className="container relative bg-white overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative max-w-6xl mx-auto">
            <div
              className="text-center mb-16 transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <p
                className="text-[var(--color-yell)]
 text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3"
              >
                <span
                  className="w-8 h-px bg-[var(--color-yell)]
"
                />
                Proven Impact
                <span
                  className="w-8 h-px bg-[var(--color-yell)]
"
                />
              </p>
              <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Measurable transformation <br />
                <span className="text-[var(--color-greenish)]">
                  across Gujarat, India
                </span>
              </h1>

              <div className="mt-8">
                <a
                  href="/impact"
                  className="inline-flex items-center gap-2 bg-[var(--color-yell)]
 text-black text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-600/20  hover:-translate-y-0.5"
                >
                  Explore Our Impact
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {STATS.map((stat, i) => (
                <StatCard
                  key={stat.label}
                  stat={stat}
                  index={i}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section - 3 */}
        <section
          ref={ref}
          className="container bg-white py-24 px-4 overflow-hidden"
        >
          <div className="max-w-6xl mx-auto">
            {/* ── Header ── */}
            <div
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
              }}
            >
              <div>
                <p
                  className="text-[var(--color-yell)]
 text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3"
                >
                  <span
                    className="w-8 h-px bg-[var(--color-yell)]
"
                  />
                  What People Say
                  <span
                    className="w-8 h-px bg-[var(--color-yell)]
"
                  />
                </p>
                <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center lg:text-start">
                  Success{" "}
                  <span className="text-[var(--color-greenish)]"> Stories</span>
                </h1>
              </div>
              <p className="text-gray-400 text-sm lg:max-w-md leading-relaxed md:text-right text-center lg:text-start">
                Real voices from communities transformed by Girganga Parivar
                Trust water conservation work.
              </p>
            </div>

            {/* ── Main layout: left selector + right big card ── */}
            <div className="grid md:grid-cols-[280px_1fr] gap-6 items-stretch">
              {/* Left — number list selector */}
              <div className="flex flex-col gap-3">
                {STORIES.map((s, i) => (
                  <button
                    key={s.name}
                    onClick={() => setActive(i)}
                    className={`group text-left rounded-2xl px-6 py-5 border-2 transition-all duration-300 ${
                      active === i
                        ? "bg-[var(--color-greenish)] border-[var(--color-greenish)] shadow-lg shadow-emerald-600/25"
                        : "bg-white border-gray-100 hover:border-emerald-600/30 hover:bg-[var(--color-greenish)]/50"
                    }`}
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateX(0)" : "translateX(-24px)",
                      transitionDelay: `${i * 100 + 100}ms`,
                      transition:
                        "opacity 600ms, transform 600ms, background 300ms, border 300ms, box-shadow 300ms",
                    }}
                  >
                    <div
                      className={`text-3xl font-black mb-1 transition-colors ${active === i ? "text-[var(--color-yell)]/30" : "text-[var(--color-greenish)]/20"}`}
                    >
                      {s.num}
                    </div>
                    <p
                      className={`font-black text-sm transition-colors ${active === i ? "text-[var(--color-yell)]" : "text-gray-800"}`}
                    >
                      {s.name}
                    </p>
                    <p
                      className={`text-xs mt-0.5 transition-colors ${active === i ? "text-[var(--color-yell)]/60" : "text-gray-400"}`}
                    >
                      {s.role}
                    </p>
                  </button>
                ))}
              </div>

              {/* Right — big active card */}
              <div
                className="relative bg-[var(--color-greenish)] rounded-3xl overflow-hidden p-10 flex flex-col justify-between min-h-[340px]"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(24px)",
                  transitionDelay: "300ms",
                  transitionDuration: "700ms",
                  transition: "opacity 700ms, transform 700ms",
                }}
              >
                {/* Big number watermark */}
                <span className="absolute right-8 top-6 text-[8rem] font-black text-[var(--color-yell)]/[0.04] leading-none select-none pointer-events-none">
                  {STORIES[active].num}
                </span>

                {/* Large open-quote */}
                <div className="relative z-10">
                  <div
                    className="text-[var(--color-yell)]
 text-7xl font-black leading-none mb-4 font-serif"
                  >
                    &ldquo;
                  </div>
                  <p className="text-white text-xl font-medium leading-relaxed max-w-xl transition-all duration-300">
                    {STORIES[active].quote}
                  </p>
                </div>

                {/* Author row */}
                <div className="relative z-10 flex flex-wrap items-center gap-4 mt-10 pt-8 border-t border-white/10">
                  <div className="w-12 h-12 bg-[var(--color-yell)]
 rounded-2xl flex items-center justify-center text-black font-black text-sm shrink-0">
                    {STORIES[active].initials}
                  </div>
                  <div>
                    <p className="text-[var(--color-yell)]
 font-black">
                      {STORIES[active].name}
                    </p>
                    <p className="text-[var(--color-yell)]
 text-xs mt-0.5">
                      {STORIES[active].role} · {STORIES[active].location}
                    </p>
                  </div>
                  {/* Dot indicators */}
                  <div className="ml-auto flex gap-2">
                    {STORIES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`rounded-full transition-all duration-300 ${active === i ? "w-6 h-2 bg-[var(--color-yell)]" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Bottom featured strip ── */}
            <div
              className="mt-6  border border-[var(--color-greenish)] rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center gap-6 justify-between transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "600ms",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[var(--color-greenish)] rounded-xl flex items-center justify-center text-white shrink-0 text-lg font-black">
                  &ldquo;
                </div>
                <p className="text-gray-700 text-sm italic leading-relaxed max-w-xl">
                  After deepening the check dam, water stayed till summer. Our
                  borewells revived, and migration stopped.
                  <span className="block text-[var(--color-greenish)] font-black not-italic mt-1">
                    — Chhaganbhai Patel, Rajkot
                  </span>
                </p>
              </div>
              <Link
                href="/donate"
                className="shrink-0 bg-[var(--color-greenish)]
                  text-white font-bold px-7 py-3 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-sm whitespace-nowrap"
              >
                Contribute Now →
              </Link>
            </div>
          </div>
        </section>

        {/* Section - 4 */}
        <section className="container">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <p className="text-[var(--color-greenish)] text-[10px] font-bold tracking-[0.25em] uppercase mb-3 flex items-center gap-3 justify-center lg:justify-start">
                  <span className="w-8 h-px bg-[var(--color-greenish)]" />
                  Explore More
                </p>
                <h2 className="text-black text-4xl sm:text-5xl font-bold leading-tight text-center lg:text-start">
                  Know More{" "}
                  <span className="text-[var(--color-greenish)]">About Us</span>
                </h2>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed text-center lg:text-start lg:max-w-xs">
                Repairing, deepening, and raising check dams. A rainwater
                harvesting initiative.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  img: "/image/support-structure-1.jpg",
                  label: "Awards",
                  Icon: Award,
                  href: "/awards",
                  desc: "Honoring the recognitions and milestones achieved through impactful rural water conservation work.",
                },
                {
                  img: "/image/our-work-2.jpg",
                  label: "Mission",
                  Icon: MapPin,
                  href: "/about-us",
                  desc: "Our commitment to sustainable water conservation, rural development, and community empowerment.",
                },
                {
                  img: "/image/our-work-3.jpg",
                  label: "Check Dams",
                  Icon: Waves,
                  href: "/check-dam-creat",
                  desc: "Building and mapping check dams to recharge groundwater across drought-prone regions of Gujarat.",
                },
              ].map(({ img, label, Icon, href, desc }) => (
                <Link key={label} href={href}>
                  <div
                    className="group relative bg-[#111815] rounded-2xl overflow-hidden
                     transition-all duration-300 cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={img}
                        alt={label}
                        fill
                        className="object-cover h-auto group-hover:scale-105 transition-transform duration-500 brightness-75"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111815] via-transparent to-transparent" />

                      {/* Icon badge */}
                      <div className="absolute top-4 right-4 w-9 h-9 bg-[var(--color-greenish)] rounded-lg flex items-center justify-center shadow-md">
                        <Icon
                          className="text-white"
                          size={16}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="p-5">
                      <h3
                        className="text-white font-bold text-lg mb-2"
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                      >
                        {label}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {desc}
                      </p>

                      <span className="mt-4 inline-flex items-center gap-2 text-[var(--color-yell)]
 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Explore
                        <span className="w-5 h-px bg-[var(--color-yell)]
 group-hover:w-8 transition-all duration-300" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </SmoothScroll>
    </>
  );
}
