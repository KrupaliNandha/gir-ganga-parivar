"use client";

import Image from "next/image";
import { ArrowRight, Droplets, Users, Sprout, Building2, CheckCircle, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────
   Count-up component (starts when visible)
───────────────────────────────────── */
function Counter({ value, start }: { value: number; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let current = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, start]);

  return <span>{count.toLocaleString("en-IN")}</span>;
}

/* ─────────────────────────────────────
   Data
───────────────────────────────────── */
const stats = [
  { icon: Droplets,  value: 8354,   suffix: "+", label: "Water Structures Developed" },
  { icon: Sprout,    value: 429000, suffix: "+", label: "Acres Farmland Rejuvenated" },
  { icon: Users,     value: 151000, suffix: "+", label: "Farmers Benefited"          },
  { icon: Building2, value: 580,    suffix: "+", label: "Gram Panchayats Engaged"    },
];

const compliance = [
  "CSR-1 Registered",
  "FCRA (Under Process)",
  "NGO-DARPAN Registered",
  "Registered Trust under Indian Trust Act",
  "Audited Accounts & Annual Reports Available",
];

const stories = [
  {
    quote: "Before Girganga Parivar Trust came to our village, we struggled every year with water shortage. Now, with the check dam and recharge borewells, our wells have water throughout the year. My crop yield has doubled.",
    name: "Ramesh Patel",
    role: "Farmer, Morbi District",
    initials: "RP",
  },
  {
    quote: "The PPP model is revolutionary. Instead of waiting for government projects that might take years, we partnered with Girganga Parivar Trust and completed our water conservation project in just six months.",
    name: "Meera Ben",
    role: "Village Sarpanch, Rajkot",
    initials: "MB",
  },
  {
    quote: "I have worked in this region for over 20 years, and I have never seen such systematic and effective water conservation work. The impact on agricultural productivity has been remarkable.",
    name: "Dr. Suresh Kumar",
    role: "Agricultural Extension Officer, Gujarat",
    initials: "SK",
  },
];

const involvement = [
  {
    num: "01",
    title: "Donate",
    desc: "Support construction or rejuvenation of water conservation structures.",
    items: ["₹50,000 – One recharge borewell system", "₹1,00,000 – Check dam contribution"],
    btn: "Donate Now",
    href: "/donation",
  },
  {
    num: "02",
    title: "Volunteer",
    desc: "Join field activities, awareness campaigns, or professional volunteering.",
    items: ["Field work and construction", "Professional expertise"],
    btn: "Join Us",
    href: "/team",
  },
  {
    num: "03",
    title: "Partnership",
    desc: "Corporates, institutions, and government agencies welcome for Corporate Partnership.",
    items: ["Equipment and machinery", "Funding for projects", "Employee engagement"],
    btn: "Partner With Us",
    href: "/partner-with-us-csr",
  },
];

/* ─────────────────────────────────────
   Page
───────────────────────────────────── */
export default function AboutPage() {
  /* Stats visible when section scrolls in */
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-white text-gray-800">

      {/* ══════════════════════════════
          1. HERO
      ══════════════════════════════ */}
      <section className="containers py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)] mb-4">
            About Girganga Parivar Trust
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Conserving{" "}
            <span className="text-[var(--color-primary)]">Water,</span>
            <br />
            Reviving Gujarat's Future
          </h1>

          <p className="text-gray-500 text-sm leading-relaxed max-w-lg mb-8">
            Girganga Parivar Trust is a dedicated organization committed to
            revitalizing India's water infrastructure, with a primary focus on
            Saurashtra, Gujarat — through the strategic repair, deepening, and
            raising of check dams.
          </p>

          <a
            href="/donation"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition"
          >
            Support Us <ArrowRight size={16} />
          </a>

          {/* Founder */}
          <div className="flex items-center gap-4 mt-10 p-4 border border-gray-100 rounded-2xl max-w-sm">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-sm shrink-0">
              DS
            </div>
            <div>
              <p className="font-semibold text-sm">Shri Dilip Sakhiya</p>
              <p className="text-xs text-gray-400">Founder · Girganga Parivar Trust</p>
              <span className="text-xs text-[var(--color-primary)] font-semibold">
                "Waterman of India" 💧
              </span>
            </div>
          </div>
        </div>

        {/* Right image grid */}
        <div className="grid grid-cols-2 gap-4 h-[420px]">
          <div className="row-span-2 rounded-3xl overflow-hidden">
            <Image
              src="/image/home/Slide1.png"
              alt="Water conservation work"
              width={500} height={600}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/image/home/Slide2.png"
              alt="Check dam"
              width={400} height={200}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/image/home/Slide3.png"
              alt="Farmers"
              width={400} height={200}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          2. WHO WE ARE + OUR JOURNEY
      ══════════════════════════════ */}
      <section className="bg-[var(--color-tertiary)] py-20">
        <div className="containers grid lg:grid-cols-3 gap-8">

          {/* Col 1 */}
          <div className="bg-white rounded-2xl p-8">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-tertiary)] flex items-center justify-center mb-5">
              <span className="text-lg">🌊</span>
            </div>
            <h3 className="font-bold text-lg mb-3">Who We Are</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Girganga Parivar Trust is a not-for-profit organization working
              for sustainable water security in Gujarat, especially the
              drought-prone Saurashtra region.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mt-3">
              The Trust believes that water conservation is not just
              infrastructure creation, but a{" "}
              <span className="text-[var(--color-primary)] font-semibold">
                people-centric movement.
              </span>
            </p>
          </div>

          {/* Col 2 */}
          <div className="bg-white rounded-2xl p-8">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-tertiary)] flex items-center justify-center mb-5">
              <span className="text-lg">🗺️</span>
            </div>
            <h3 className="font-bold text-lg mb-3">Our Journey</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Founded under the leadership of Shri Dilip Sakhiya — popularly
              known as the{" "}
              <span className="font-semibold text-gray-700">"Waterman of Gujarat"</span> —
              GGPT has evolved into one of India's largest grassroots water
              conservation movements.
            </p>
          </div>

          {/* Col 3 — vision quote */}
          <div className="bg-[var(--color-primary)] rounded-2xl p-8 flex flex-col justify-between">
            <Quote size={32} className="text-white opacity-30 mb-4" />
            <p className="text-white font-semibold text-lg leading-relaxed">
              "Water conservation is not a project, it is a responsibility."
            </p>
            <p className="text-white/60 text-sm mt-6 font-medium">
              — Shri Dilip Sakhiya
            </p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          3. LEGAL & COMPLIANCE
      ══════════════════════════════ */}
      <section className="containers py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)] mb-3">
              Transparency
            </p>
            <h2 className="text-4xl font-bold mb-4">
              Legal &amp; Compliance
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Girganga Parivar Trust maintains complete transparency and
              operates in full compliance with statutory and regulatory
              requirements under Indian law.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-3">
            {compliance.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-[var(--color-primary)] hover:bg-[var(--color-tertiary)] transition-all duration-200"
              >
                <CheckCircle size={18} className="text-[var(--color-primary)] shrink-0" strokeWidth={2} />
                <span className="text-sm font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          4. IMPACT STATS
      ══════════════════════════════ */}
      <section
        ref={statsRef}
        className="relative bg-[var(--color-tertiary)] py-24 overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[var(--color-secondary)] opacity-10 rounded-full blur-3xl" />

        <div className="containers relative">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.25em] uppercase text-[var(--color-primary)] mb-3">
              Our Impact
            </p>
            <h2 className="text-4xl font-bold">Changing Lives Through Water</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">
              Measurable transformation across Gujarat, India
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl p-7 border hover:border-[var(--color-primary)] transition-all duration-300 hover:-translate-y-2 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-tertiary)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)] transition-colors">
                  <stat.icon
                    size={22}
                    className="text-[var(--color-primary)] group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-3xl font-bold">
                  <Counter value={stat.value} start={statsVisible} />
                  {stat.suffix}
                </h3>
                <p className="text-gray-500 text-sm mt-2">{stat.label}</p>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          5. STORY / MOVEMENT
      ══════════════════════════════ */}
      <section className="containers py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image with overlay */}
          <div className="relative rounded-3xl overflow-hidden group h-[440px]">
            <Image
              src="/image/home/Slide4.png"
              alt="Water conservation story"
              width={900} height={600}
              className="object-cover w-full h-full group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white max-w-sm">
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-2">
                Our Story
              </p>
              <h3 className="text-2xl font-semibold leading-snug mb-2">
                Reviving Water Scarce Villages
              </h3>
              <p className="text-sm text-gray-200">
                Repairing and deepening check dams across Saurashtra has helped
                thousands of villages revive groundwater and agriculture.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)] mb-4">
                How We Work
              </p>
              <h2 className="text-4xl font-bold leading-tight">
                A Movement Built<br />on Three Pillars
              </h2>
            </div>

            {[
              {
                n: "01", title: "Public-Private-People Model",
                desc: "Collaboration between communities, donors, and government enables faster water conservation development across the region.",
              },
              {
                n: "02", title: "Community Participation",
                desc: "Villagers actively participate in rebuilding check dams and restoring water bodies for long-term sustainability.",
              },
              {
                n: "03", title: "Sustainable Impact",
                desc: "The movement improves groundwater levels, agricultural productivity, and livelihoods across Gujarat.",
              },
            ].map((item) => (
              <div key={item.n} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-xs shrink-0">
                  {item.n}
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          6. YOUR CONTRIBUTION IS IMPORTANT
      ══════════════════════════════ */}
      <section className="bg-[var(--color-tertiary)] py-0 overflow-hidden">
        <div className="containers grid lg:grid-cols-2 gap-0 items-stretch">

          {/* Image */}
          <div className="relative min-h-[340px] rounded-l-3xl overflow-hidden hidden lg:block">
            <Image
              src="/image/home/Slide1.png"
              alt="Your contribution matters"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-tertiary)]/20" />
          </div>

          {/* Text */}
          <div className="bg-[var(--color-primary)] rounded-3xl lg:rounded-l-none p-12 flex flex-col justify-center">
            <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
              Make a Difference
            </p>
            <h2 className="text-3xl font-bold text-white leading-snug mb-5">
              Your Contribution<br />Is Important
            </h2>
            <p className="text-white/75 text-sm leading-relaxed mb-8">
              Every rupee you donate directly supports the vital work of
              repairing and enhancing check dams across Saurashtra, ensuring a
              more water-secure future for our communities in Gujarat.
            </p>
            <a
              href="/donation"
              className="inline-flex items-center gap-2 bg-[var(--color-secondary)] text-gray-900 px-6 py-3 rounded-lg text-sm font-bold hover:opacity-90 transition w-fit"
            >
              Know More <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          7. SUCCESS STORIES
      ══════════════════════════════ */}
      <section className="containers py-24">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)] mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl font-bold">Success Stories</h2>
          <p className="text-gray-400 text-sm mt-3 max-w-lg mx-auto">
            Real voices from communities transformed through water conservation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 border flex flex-col gap-5 hover:-translate-y-1 transition-all duration-300 ${
                i === 0
                  ? "bg-[var(--color-primary)] border-transparent"
                  : "bg-white border-gray-100 hover:border-[var(--color-primary)]"
              }`}
            >
              <Quote
                size={28}
                className={i === 0 ? "text-white/25" : "text-[var(--color-primary)]/20"}
              />
              <p
                className={`text-sm leading-relaxed flex-1 ${
                  i === 0 ? "text-white/85" : "text-gray-500"
                }`}
              >
                {s.quote}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                    i === 0
                      ? "bg-white/20 text-white"
                      : "bg-[var(--color-tertiary)] text-[var(--color-primary)]"
                  }`}
                >
                  {s.initials}
                </div>
                <div>
                  <p
                    className={`font-semibold text-sm ${
                      i === 0 ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {s.name}
                  </p>
                  <p
                    className={`text-xs mt-0.5 ${
                      i === 0 ? "text-white/50" : "text-gray-400"
                    }`}
                  >
                    {s.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════
          8. TRUST VOLUNTEERS / GET INVOLVED
      ══════════════════════════════ */}
      <section className="bg-[var(--color-tertiary)] py-24">
        <div className="containers">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)] mb-3">
              Get Involved
            </p>
            <h2 className="text-4xl font-bold">Trust Volunteers</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
              We are deeply grateful for our passionate volunteers across
              Gujarat. Their dedication helps build a water-secure Saurashtra.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {involvement.map((card) => (
              <div
                key={card.num}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[var(--color-primary)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Number */}
                <p className="text-5xl font-black text-[var(--color-tertiary)] leading-none mb-4 select-none">
                  {card.num}
                </p>

                <h3 className="font-bold text-xl mb-3">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {card.desc}
                </p>

                <ul className="space-y-2 mb-8 flex-1">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className="text-[var(--color-primary)] font-bold mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={card.href}
                  className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition w-fit"
                >
                  {card.btn} <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          9. CTA BANNER
      ══════════════════════════════ */}
      <section className="bg-[var(--color-primary)] text-white py-20 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-4">
          Join the Movement
        </p>
        <h2 className="text-3xl font-bold mb-4">
          Support the Water Conservation Movement
        </h2>
        <p className="text-white/70 text-sm mb-8 max-w-md mx-auto">
          Together we can restore water security for millions of families
          across drought-prone Saurashtra.
        </p>
        <a
          href="/donation"
          className="inline-flex items-center gap-2 bg-[var(--color-secondary)] text-gray-900 px-8 py-4 rounded-lg font-bold text-sm hover:opacity-90 transition"
        >
          Donate Now <ArrowRight size={16} />
        </a>
      </section>

    </div>
  );
}