"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  Building2,
  CheckCircle2,
  Download,
  FileText,
  FlaskConical,
  GraduationCap,
  Landmark,
  Leaf,
  Mail,
  Megaphone,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";

import SmoothScroll from "../../Component/SmothScrolling";

// ─── ANIMATION VARIANTS ──────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

// ─── PRIMITIVES ───────────────────────────────────────────────────
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="block w-7 h-px bg-[var(--color-secondary)]" />
      <span className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[var(--color-secondary)] font-[var(--font)]">
        {children}
      </span>
      <span className="block w-7 h-px bg-[var(--color-secondary)]" />
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-16">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-[var(--font)] text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.15] text-gray-900 mb-4">
        {title} <span className="text-[var(--color-primary)]">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-500 text-[0.92rem] leading-[1.8] max-w-[560px] mx-auto font-[var(--font)]">
          {subtitle}
        </p>
      )}
      <div className="w-12 h-[3px] bg-[var(--color-secondary)] rounded-full mx-auto mt-5" />
    </div>
  );
}

function Tag({
  children,
  bg = "bg-[var(--color-tertiary)]",
  color = "text-[var(--color-greenish)]",
}: {
  children: React.ReactNode;
  bg?: string;
  color?: string;
}) {
  return (
    <span
      className={`inline-block ${bg} ${color} text-[0.65rem] font-semibold tracking-[0.1em] uppercase px-3 py-1 rounded-full mb-3 font-[var(--font)]`}
    >
      {children}
    </span>
  );
}

function Field({
  label,
  full,
  children,
}: {
  label: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${full ? "col-span-2" : ""}`}>
      <label className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-primary)] font-[var(--font)]">
        {label}
      </label>
      <div className="flex items-center gap-2 bg-[var(--color-tertiary)] rounded-xl px-4 py-2.5 border border-transparent">
        {children}
      </div>
    </div>
  );
}

// ─── PAGE DATA ───────────────────────────────────────────────────
const engagementModels = [
  {
    num: "01",
    icon: "🏗️",
    title: "Water Conservation Projects",
    items: [
      "Check dam construction & deepening (₹4–₹10 lakh/structure)",
      "Recharge bore wells & percolation pits",
      "Village watershed restoration",
      "District / Taluka-level water security projects",
    ],
  },
  {
    num: "02",
    icon: "🌍",
    title: "Climate & Environmental Programs",
    items: [
      "Groundwater recharge programs",
      "Watershed ecosystem restoration",
      "Climate adaptation for rural communities",
      "Village, cluster or district adoption model",
    ],
  },
  {
    num: "03",
    icon: "🤝",
    title: "Employee & Partnership Engagement",
    items: [
      "Field visits to active project sites",
      "Volunteer participation in conservation activities",
      "Awareness programs on sustainable water management",
      "Multi-year MoU / machinery support partnerships",
    ],
  },
  {
    num: "04",
    icon: "📊",
    title: "Impact Transparency",
    items: [
      "Project progress updates, ",
      "Geographic impact maps, ",
      "Data on water structures created, ",
      "Groundwater recharge estimates, ",
      "Community impact assessments. ",
    ],
  },
];

const govFeatures = [
  {
    icon: "💧",
    title: "Water Conservation & Groundwater Recharge",
    desc: "GGPT works alongside government departments to build and rejuvenate check dams, recharge systems, and other decentralised water harvesting structures that improve village-level water security in semi-arid regions.",
  },
  {
    icon: "🌾",
    title: "Rural Development Programs",
    desc: "The Trust collaborates on village-level infrastructure benefiting farmers, livestock, and local ecosystems — including watershed restoration and community-based resource management initiatives.",
  },
  {
    icon: "🛠️",
    title: "Technical & Community Implementation Support",
    desc: "GGPT brings deep grassroots experience in community mobilisation and village participation — bridging policy intent with effective ground-level action for sustainable water assets.",
  },
  {
    icon: "🇮🇳",
    title: "Alignment with National Water & Climate Priorities",
    desc: "Programs contribute to national priorities in water conservation, climate resilience, and sustainable rural development, helping scale community-driven models that address groundwater depletion.",
  },
];

const eduCards = [
  {
    Icon: GraduationCap,
    iconBg: "bg-[var(--color-tertiary)]",
    iconColor: "text-[var(--color-primary)]",
    iconColorHex: "var(--color-primary)",
    title: "Student Field Exposure & Learning Visits",
    desc: "Organise field visits to GGPT project sites — check dams, recharge systems and watershed structures — offering practical context for coursework.",
    items: [
      "Live site walk-throughs with project engineers",
      "Practical watershed development exposure",
      "Rural water management field learning",
    ],
  },
  {
    Icon: FlaskConical,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-800",
    iconColorHex: "#854d0e",
    title: "Research & Academic Collaboration",
    desc: "GGPT welcomes joint research on critical water and climate topics with universities and research institutions.",
    items: [
      "Groundwater recharge & watershed management",
      "Climate resilience & rural water governance",
      "Sustainable agriculture practices",
    ],
  },
  {
    Icon: Briefcase,
    iconBg: "bg-[var(--color-dark)]",
    iconColor: "text-[var(--color-primary)]",
    iconColorHex: "var(--color-primary)",
    title: "Internships & Student Engagement",
    desc: "Hands-on experience in community engagement, environmental management, and rural development for multi-disciplinary students.",
    items: [
      "Environmental science & engineering students",
      "Rural development & social science streams",
      "Live field project participation",
    ],
  },
  {
    Icon: Megaphone,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-800",
    iconColorHex: "#9d174d",
    title: "Awareness & Knowledge Programs",
    desc: "Seminars, workshops, and awareness drives encouraging young people to lead in environmental stewardship.",
    items: [
      "Water conservation practices workshops",
      "Climate change adaptation seminars",
      "Sustainable rural development talks",
    ],
  },
];

const sdgData = [
  {
    title: "SDG 6 – Clean Water and Sanitation",
    description:
      "Ensure availability and sustainable management of water and sanitation for all.",
    image: "/image/partner-with-us-csr/csr-1.jpg",
  },
  {
    title: "SDG 13 – Climate Action",
    description: "Take urgent action to combat climate change and its impacts.",
    image: "/image/partner-with-us-csr/csr-2.png",
  },
  {
    title: "SDG 15 – Life on Land",
    description:
      "Protect, restore and promote sustainable use of terrestrial ecosystems.",
    image: "/image/partner-with-us-csr/csr-3.jpg",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────
export default function Support() {
  return (
    <>
      <SmoothScroll>
        <div className="font-[var(--font)] bg-[#fafafa] overflow-x-hidden">
          {/* ══════════════════════════════════
          1 · HERO
      ══════════════════════════════════ */}
          <section className="bg-[var(--color-primary)] grid relative overflow-hidden">
            <div className="container">
              <div className="absolute inset-0 pointer-events-none bg-text-[var(--color-primary)]" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-self-center relative z-10 max-w-7xl w-full">
                {/* LEFT */}
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={stagger}
                  className="flex flex-col text-center lg:text-start"
                >
                  <motion.div variants={fadeUp}>
                    <Eyebrow>Girganga Parivar Trust</Eyebrow>
                  </motion.div>

                  <motion.h1
                    variants={fadeUp}
                    className="font-[var(--font)] text-7xl font-extrabold leading-[1.08] text-white mb-6"
                  >
                    Partner With Us
                    <br />
                    For{" "}
                    <span className="text-[var(--color-secondary)] italic">
                      Water
                    </span>
                    <br />
                    Security
                  </motion.h1>

                  <motion.p
                    variants={fadeUp}
                    className="text-white/70 text-base leading-[1.75] lg:max-w-[480px] mb-8 font-[var(--font)]"
                  >
                    Join hands with GGPT to restore groundwater, revive
                    watersheds, and build climate resilience across rural
                    Gujarat through transparent, community-driven programs.
                  </motion.p>

                  {/* pills */}
                  <motion.div
                    variants={fadeUp}
                    className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
                  >
                    {[
                      "CSR-1 Registered",
                      "NGO-DARPAN",
                      "SDG Aligned",
                      "18 Excavators",
                    ].map((p, i) => (
                      <span
                        key={i}
                        className={`text-[0.75rem] px-4 py-1.5 rounded-full font-[var(--font)] border ${
                          i === 0
                            ? "bg-[var(--color-secondary)] border-[var(--color-secondary)] text-[var(--color-primary)] font-bold"
                            : "bg-white/10 border-white/20 text-white/85 font-normal"
                        }`}
                      >
                        {p}
                      </span>
                    ))}
                  </motion.div>
                </motion.div>

                {/* RIGHT – partner type cards */}
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={stagger}
                  className="flex flex-col gap-5"
                >
                  {[
                    {
                      Icon: Building2,
                      bg: "bg-[rgba(241,207,105,0.22)]",
                      title: "Corporate Partnerships",
                      desc: "CSR-driven water conservation — check dams, recharge bores, watershed restoration, employee volunteering & impact reporting.",
                    },
                    {
                      Icon: Landmark,
                      bg: "bg-[rgba(172,215,243,0.22)]",
                      title: "Government Collaboration",
                      desc: "Public–community convergence for scalable decentralised water management and national climate priority alignment.",
                    },
                    {
                      Icon: GraduationCap,
                      bg: "bg-[rgba(52,211,153,0.18)]",
                      title: "Educational Institutes",
                      desc: "Field visits, research tie-ups, internships, and awareness programs cultivating the next generation of water stewards.",
                    },
                  ].map(({ Icon, bg, title, desc }, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="bg-white/[0.07] border border-white/[0.12] rounded-2xl px-7 py-6 flex gap-5 items-start cursor-default"
                      whileHover={{ x: 6, background: "rgba(255,255,255,.13)" }}
                      transition={{ type: "tween", duration: 0.25 }}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl ${bg} grid place-items-center shrink-0`}
                      >
                        <Icon size={22} color="#ffffff" />
                      </div>
                      <div>
                        <h3 className="text-[0.95rem] font-semibold text-white mb-1 font-[var(--font)]">
                          {title}
                        </h3>
                        <p className="text-[0.78rem] text-white/55 leading-[1.6] font-[var(--font)]">
                          {desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
          2 · CORPORATE PARTNERSHIPS
      ══════════════════════════════════ */}
          <section className="container bg-white py-24 px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <SectionHeader
                  eyebrow="Partnership Type 01"
                  title="Corporate"
                  highlight="Partnerships"
                  subtitle="Your CSR investment creates measurable, auditable groundwater impact. We provide full transparency — from GPS-mapped sites to utilisation certificates."
                />
              </motion.div>

              {/* Why GGPT + What partners receive */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                {/* dark gradient card */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-[var(--color-primary)] rounded-[28px] p-10 text-white relative overflow-hidden"
                >
                  <div className="absolute -right-10 -bottom-10 w-[180px] h-[180px] rounded-full bg-white/[0.06]" />
                  <Tag
                    bg="bg-white/[0.12]"
                    color="text-[var(--color-secondary)]"
                  >
                    Why GGPT for CSR?
                  </Tag>
                  <h3 className="font-[var(--font)] text-[1.6rem] font-bold mb-6 leading-[1.3]">
                    Proven Execution.
                    <br />
                    Transparent Impact.
                  </h3>
                  <ul className="flex flex-col gap-3.5 list-none">
                    {[
                      "CSR-1 & NGO-DARPAN registered",
                      "8,354+ water conservation structures built",
                      "18 excavators – in-house execution capacity",
                      "Transparent audit-ready reporting",
                      "Community + Government convergence model",
                      "GPS-mapped impact dashboards for partners",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3.5 text-[0.85rem] text-white/[0.88] font-[var(--font)]"
                      >
                        <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-white/15">
                    <div className="font-[var(--font)] text-5xl font-extrabold text-[var(--color-secondary)]">
                      18+
                    </div>
                    <div className="text-[0.75rem] text-white/50 uppercase tracking-[0.1em]">
                      Years of grassroots execution
                    </div>
                  </div>
                </motion.div>

                {/* what partners receive */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex flex-col justify-center"
                >
                  <Tag>What CSR Partners Receive</Tag>
                  <h3 className="font-[var(--font)] font-bold text-[1.8rem] text-gray-900 mb-4">
                    Full-Spectrum Accountability
                  </h3>
                  <p className="text-gray-500 leading-[1.8] text-[0.88rem] mb-5 font-[var(--font)]">
                    Every partner receives comprehensive documentation and
                    ongoing impact communication so your CSR investment is fully
                    auditable.
                  </p>
                  <ul className="flex flex-col gap-3.5 list-none mb-6">
                    {[
                      "Utilisation Certificate & CSR-1 Certificate",
                      "Geotagged impact report — photos, GPS & numbers",
                      "Branding at project site (where applicable)",
                      "Quarterly or annual progress reporting",
                      "Groundwater recharge estimates & community assessments",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3.5 text-[0.85rem] text-gray-500 font-[var(--font)]"
                      >
                        <CheckCircle2
                          size={16}
                          color="var(--color-secondary)"
                          className="shrink-0 mt-0.5"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {[
                      {
                        label: "💧 SDG 6 – Clean Water",
                        bg: "bg-[var(--color-tertiary)]",
                        color: "text-[var(--color-primary)]",
                      },
                      {
                        label: "🌡️ SDG 13 – Climate Action",
                        bg: "bg-yellow-100",
                        color: "text-yellow-800",
                      },
                      {
                        label: "🌿 SDG 15 – Life on Land",
                        bg: "bg-[var(--color-tertiary)]",
                        color: "text-[var(--color-greenish)]",
                      },
                    ].map((c, i) => (
                      <span
                        key={i}
                        className={`${c.bg} ${c.color} text-[0.7rem] font-semibold px-3.5 py-1.5 rounded-full font-[var(--font)]`}
                      >
                        {c.label}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* 3 engagement model cards */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={stagger}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {engagementModels.map((card, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-[var(--color-tertiary)] rounded-2xl p-7 border border-[rgba(0,157,196,0.12)] relative"
                    whileHover={{
                      y: -6,
                      boxShadow: "0 20px 40px rgba(0,157,196,.12)",
                    }}
                    transition={{ type: "tween", duration: 0.25 }}
                  >
                    <div className="absolute top-4 right-6 font-[var(--font)] text-[3.5rem] font-black text-[var(--color-dark)] leading-none select-none">
                      {card.num}
                    </div>
                    <div className="text-[1.6rem] mb-4">{card.icon}</div>
                    <h4 className="font-bold text-base text-gray-900 mb-3 font-[var(--font)]">
                      {card.title}
                    </h4>
                    <ul className="list-none flex flex-col gap-2">
                      {card.items.map((item, j) => (
                        <li
                          key={j}
                          className="text-[0.78rem] text-gray-500 flex gap-2.5 items-start font-[var(--font)]"
                        >
                          <span className="text-[var(--color-accent)] font-bold">
                            ›
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>

              {/* download cards */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={stagger}
                className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12"
              >
                {[
                  {
                    Icon: FileText,
                    title: "CSR Proposal",
                    desc: "Detailed plan of our water conservation initiatives.",
                    href: "/Our-Work",
                  },
                  {
                    Icon: Building2,
                    title: "Company Profile",
                    desc: "Discover our mission, vision and impact journey.",
                    href: "/Our-Work",
                  },
                ].map(({ Icon, title, desc, href }, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex gap-4 items-start px-6 py-5 bg-[var(--color-tertiary)] rounded-[18px] border border-[rgba(0,157,196,0.15)]"
                    whileHover={{
                      boxShadow: "0 12px 32px rgba(0,157,196,.12)",
                    }}
                    transition={{ type: "tween", duration: 0.25 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[rgba(0,157,196,0.12)] grid place-items-center shrink-0">
                      <Icon size={22} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[0.95rem] text-[var(--color-primary)] font-[var(--font)]">
                        {title}
                      </h3>
                      <p className="text-[0.78rem] text-gray-500 mb-2 font-[var(--font)]">
                        {desc}
                      </p>
                      <Link href={href}>
                        <button className="flex items-center gap-1.5 text-[0.78rem] font-semibold text-[var(--color-primary)] bg-transparent border-none cursor-pointer p-0 font-[var(--font)]">
                          <Download size={14} /> Download PDF
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ══════════════════════════════════
          3 · GOLS
      ══════════════════════════════════ */}
          <section className="container bg-white">
            <div className="max-w-7xl mx-auto text-center">
              <motion.div variants={fadeUp}>
                <Eyebrow>Goals</Eyebrow>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Alignment{" "}
                <span className="text-[var(--color-primary)]">
                  with Global Sustainability
                </span>{" "}
                Goals
              </h2>
              <p className="text-gray-600 mb-10">
                Partnerships with GGPT contribute to key global development
                priorities.
              </p>

              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {sdgData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-contain mb-4 rounded-2xl"
                    />

                    <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
          4 · GOVERNMENT COLLABORATION
      ══════════════════════════════════ */}
          <section className="bg-[var(--color-tertiary)] container">
            <div className="max-w-[1200px] mx-auto">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <SectionHeader
                  eyebrow="Partnership Type 02"
                  title="Government"
                  highlight="Collaboration"
                  subtitle="GGPT actively collaborates with government institutions and public sector agencies to expand community-led watershed development across Gujarat."
                />
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* feature list */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={stagger}
                  className="flex flex-col gap-5"
                >
                  {govFeatures.map((f, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="bg-white rounded-[18px] px-7 py-6 border-l-4 border-[var(--color-primary)]"
                      whileHover={{ x: 6 }}
                      transition={{ type: "tween", duration: 0.25 }}
                    >
                      <h4 className="font-semibold text-[0.95rem] text-gray-900 mb-2.5 font-[var(--font)]">
                        {f.icon} {f.title}
                      </h4>
                      <p className="text-[0.82rem] text-gray-500 leading-[1.75] font-[var(--font)]">
                        {f.desc}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* callout */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="rounded-3xl p-10 text-white bg-[var(--color-primary)]"
                >
                  <h3 className="font-[var(--font)] font-bold text-[1.6rem] mb-4">
                    Strengthening Public–Community Partnerships
                  </h3>
                  <p className="text-[0.85rem] text-white/[0.78] leading-[1.8] mb-3 font-[var(--font)]">
                    Collaboration between government institutions and grassroots
                    organisations plays a vital role in achieving long-term
                    water security.
                  </p>
                  <p className="text-[0.85rem] text-white/[0.78] leading-[1.8] font-[var(--font)]">
                    GGPT continues to work with public agencies to expand water
                    conservation initiatives and ensure rural communities
                    benefit from sustainable and resilient water systems.
                  </p>
                  <ul className="list-none flex flex-col gap-3 mt-6">
                    {[
                      "Proven convergence with government schemes",
                      "Strong local community mobilisation network",
                      "Technical execution — 18 excavators fleet",
                      "Transparent implementation & documentation",
                      "Scalable decentralised model for replication",
                      "Contribution to national drought-resilience goals",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="text-[0.82rem] text-white/[0.88] flex gap-2.5 items-start font-[var(--font)]"
                      >
                        <span className="text-[var(--color-secondary)] font-bold">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
          4 · EDUCATIONAL PARTNERSHIPS
      ══════════════════════════════════ */}
          <section className="bg-white container">
            <div className="max-w-[1200px] mx-auto">
              {/* Header */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <SectionHeader
                  eyebrow="Partnership Type 03"
                  title="Educational Institute"
                  highlight="Partnerships"
                  subtitle="Connecting academic knowledge with real-world environmental action — engaging students, researchers, and faculty in sustainable water solutions."
                />
              </motion.div>

              {/* Cards */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={stagger}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
              >
                {eduCards.map(
                  ({ Icon, iconBg, iconColorHex, title, desc, items }, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="bg-[var(--color-tertiary)] rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-[rgba(0,157,196,0.1)]"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 16px 40px rgba(0,157,196,.10)",
                      }}
                      transition={{ type: "tween", duration: 0.25 }}
                    >
                      {/* Icon + Title */}
                      <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                        <div
                          className={`w-10 h-10 sm:w-[52px] sm:h-[52px] rounded-[12px] sm:rounded-[14px] ${iconBg} grid place-items-center shrink-0`}
                        >
                          <Icon
                            size={20}
                            className="sm:w-6 sm:h-6"
                            color={iconColorHex}
                          />
                        </div>
                        <h4 className="font-bold text-sm sm:text-base text-gray-900 font-[var(--font)]">
                          {title}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3 font-[var(--font)]">
                        {desc}
                      </p>

                      {/* List */}
                      <ul className="flex flex-col gap-1.5 sm:gap-2">
                        {items.map((item, j) => (
                          <li
                            key={j}
                            className="text-xs sm:text-sm text-gray-500 flex gap-2 items-start font-[var(--font)]"
                          >
                            <span className="text-[var(--color-secondary)] font-bold shrink-0">
                              –
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ),
                )}

                {/* Bottom Wide Card */}
                <motion.div
                  variants={fadeUp}
                  className="col-span-1 sm:col-span-2 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white bg-[var(--color-primary)]"
                >
                  <h4 className="font-[var(--font)] font-bold text-[var(--color-secondary)] text-xl sm:text-2xl lg:text-[1.8rem] mb-3 sm:mb-4">
                    Building the Next Generation of Water Stewards
                  </h4>

                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed sm:leading-[1.8] max-w-[800px] font-[var(--font)]">
                    By working with educational institutions, GGPT aims to
                    inspire students to become responsible environmental
                    citizens and contribute to sustainable water management
                    solutions for the future. Academic partnerships create a
                    virtuous cycle — students gain real-world exposure, GGPT
                    gains fresh research insights, and rural communities benefit
                    from evidence-backed interventions.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </div>
      </SmoothScroll>
    </>
  );
}
