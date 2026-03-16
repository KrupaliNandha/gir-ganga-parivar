"use client";

import { motion,Variants } from "framer-motion";
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


// ─── ANIMATION VARIANTS ──────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

// ─── SHARED INLINE STYLES ────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  flex: 1, fontSize: ".85rem", border: "none",
  background: "transparent", outline: "none",
  fontFamily: "var(--font)", color: "#111827",
};

const fieldWrapStyle: React.CSSProperties = {
  display: "flex", alignItems: "center", gap: ".5rem",
  background: "var(--color-tertiary)",
  borderRadius: 12, padding: ".7rem 1rem",
  border: "1.5px solid transparent",
};

// ─── PRIMITIVES ───────────────────────────────────────────────────
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: ".75rem", marginBottom: "1rem" }}>
      <span style={{ width: 28, height: 1.5, background: "var(--color-secondary)", display: "block" }} />
      <span style={{ fontSize: ".65rem", fontWeight: 700, letterSpacing: ".25em", textTransform: "uppercase", color: "var(--color-secondary)", fontFamily: "var(--font)" }}>
        {children}
      </span>
      <span style={{ width: 28, height: 1.5, background: "var(--color-secondary)", display: "block" }} />
    </div>
  );
}

function SectionHeader({ eyebrow, title, highlight, subtitle }: { eyebrow: string; title: string; highlight: string; subtitle?: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 style={{ fontFamily: "var(--font)", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 700, lineHeight: 1.15, color: "#111827", marginBottom: "1rem" }}>
        {title} <span style={{ color: "var(--color-primary)" }}>{highlight}</span>
      </h2>
      {subtitle && (
        <p style={{ color: "#6b7280", fontSize: ".92rem", lineHeight: 1.8, maxWidth: 560, margin: "0 auto", fontFamily: "var(--font)" }}>
          {subtitle}
        </p>
      )}
      <div style={{ width: 48, height: 3, background: "var(--color-secondary)", borderRadius: 99, margin: "1.25rem auto 0" }} />
    </div>
  );
}

function Tag({ children, bg = "var(--color-tertiary)", color = "var(--color-greenish)" }: { children: React.ReactNode; bg?: string; color?: string }) {
  return (
    <span style={{ display: "inline-block", background: bg, color, fontSize: ".65rem", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", padding: ".25rem .8rem", borderRadius: 99, marginBottom: ".75rem", fontFamily: "var(--font)" }}>
      {children}
    </span>
  );
}

function Field({ label, full, children }: { label: string; full?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: ".4rem", ...(full ? { gridColumn: "1 / -1" } : {}) }}>
      <label style={{ fontSize: ".68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--color-primary)", fontFamily: "var(--font)" }}>
        {label}
      </label>
      <div style={fieldWrapStyle}>{children}</div>
    </div>
  );
}

// ─── PAGE DATA ───────────────────────────────────────────────────
const engagementModels = [
  {
    num: "01", icon: "🏗️", title: "Water Conservation Projects",
    items: ["Check dam construction & deepening (₹4–₹10 lakh/structure)", "Recharge bore wells & percolation pits", "Village watershed restoration", "District / Taluka-level water security projects"],
  },
  {
    num: "02", icon: "🌍", title: "Climate & Environmental Programs",
    items: ["Groundwater recharge programs", "Watershed ecosystem restoration", "Climate adaptation for rural communities", "Village, cluster or district adoption model"],
  },
  {
    num: "03", icon: "🤝", title: "Employee & Partnership Engagement",
    items: ["Field visits to active project sites", "Volunteer participation in conservation activities", "Awareness programs on sustainable water management", "Multi-year MoU / machinery support partnerships"],
  },
];

const govFeatures = [
  { icon: "💧", title: "Water Conservation & Groundwater Recharge", desc: "GGPT works alongside government departments to build and rejuvenate check dams, recharge systems, and other decentralised water harvesting structures that improve village-level water security in semi-arid regions." },
  { icon: "🌾", title: "Rural Development Programs", desc: "The Trust collaborates on village-level infrastructure benefiting farmers, livestock, and local ecosystems — including watershed restoration and community-based resource management initiatives." },
  { icon: "🛠️", title: "Technical & Community Implementation Support", desc: "GGPT brings deep grassroots experience in community mobilisation and village participation — bridging policy intent with effective ground-level action for sustainable water assets." },
  { icon: "🇮🇳", title: "Alignment with National Water & Climate Priorities", desc: "Programs contribute to national priorities in water conservation, climate resilience, and sustainable rural development, helping scale community-driven models that address groundwater depletion." },
];

const eduCards = [
  { Icon: GraduationCap, iconBg: "var(--color-tertiary)", iconColor: "var(--color-primary)", title: "Student Field Exposure & Learning Visits", desc: "Organise field visits to GGPT project sites — check dams, recharge systems and watershed structures — offering practical context for coursework.", items: ["Live site walk-throughs with project engineers", "Practical watershed development exposure", "Rural water management field learning"] },
  { Icon: FlaskConical,  iconBg: "#fef9c3",               iconColor: "#854d0e",              title: "Research & Academic Collaboration",        desc: "GGPT welcomes joint research on critical water and climate topics with universities and research institutions.",                                  items: ["Groundwater recharge & watershed management", "Climate resilience & rural water governance", "Sustainable agriculture practices"] },
  { Icon: Briefcase,     iconBg: "var(--color-dark)",     iconColor: "var(--color-primary)", title: "Internships & Student Engagement",          desc: "Hands-on experience in community engagement, environmental management, and rural development for multi-disciplinary students.",                   items: ["Environmental science & engineering students", "Rural development & social science streams", "Live field project participation"] },
  { Icon: Megaphone,     iconBg: "#fce7f3",               iconColor: "#9d174d",              title: "Awareness & Knowledge Programs",            desc: "Seminars, workshops, and awareness drives encouraging young people to lead in environmental stewardship.",                                       items: ["Water conservation practices workshops", "Climate change adaptation seminars", "Sustainable rural development talks"] },
];

// ─── PAGE ────────────────────────────────────────────────────────
export default function Support() {
  return (
    <div style={{ fontFamily: "var(--font)", background: "#fafafa", overflowX: "hidden" }}>


      {/* ══════════════════════════════════
          1 · HERO
      ══════════════════════════════════ */}
      <section style={{ minHeight: "100vh", background: "var(--color-primary)", display: "grid", placeItems: "center", padding: "6rem 2rem 4rem", position: "relative", overflow: "hidden" }}>

        {/* radial glow overlays */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 60% at 80% 20%, rgba(172,215,243,.25) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(241,207,105,.15) 0%, transparent 55%)" }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", position: "relative", zIndex: 1, maxWidth: 1200, width: "100%" }}>

          {/* LEFT */}
          <motion.div initial="hidden" animate="show" variants={stagger} style={{ display: "flex", flexDirection: "column" }}>
            <motion.div variants={fadeUp}><Eyebrow>Girganga Parivar Trust</Eyebrow></motion.div>

            <motion.h1 variants={fadeUp} style={{ fontFamily: "var(--font)", fontSize: "clamp(2.8rem,5vw,5rem)", fontWeight: 800, lineHeight: 1.08, color: "#ffffff", marginBottom: "1.5rem" }}>
              Partner With Us<br />
              For{" "}
              <span style={{ color: "var(--color-secondary)", fontStyle: "italic" }}>Water</span>
              <br />Security
            </motion.h1>

            <motion.p variants={fadeUp} style={{ color: "rgba(255,255,255,.7)", fontSize: "1rem", lineHeight: 1.75, maxWidth: 480, marginBottom: "2rem" }}>
              Join hands with GGPT to restore groundwater, revive watersheds, and build climate resilience across rural Gujarat through transparent, community-driven programs.
            </motion.p>

            {/* pills */}
            <motion.div variants={fadeUp} style={{ display: "flex", flexWrap: "wrap", gap: ".75rem", marginBottom: "2rem" }}>
              {["CSR-1 Registered", "NGO-DARPAN", "SDG Aligned", "18 Excavators"].map((p, i) => (
                <span key={i} style={{ background: i === 0 ? "var(--color-secondary)" : "rgba(255,255,255,.10)", border: `1px solid ${i === 0 ? "var(--color-secondary)" : "rgba(255,255,255,.18)"}`, color: i === 0 ? "var(--color-primary)" : "rgba(255,255,255,.85)", fontWeight: i === 0 ? 700 : 400, fontSize: ".75rem", padding: ".4rem 1rem", borderRadius: 99, fontFamily: "var(--font)" }}>
                  {p}
                </span>
              ))}
            </motion.div>

            {/* stat grid */}
            <motion.div variants={fadeUp} style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }}>
              {[{ num: "8,354+", lbl: "Structures Built" }, { num: "3", lbl: "Partner Types" }, { num: "SDG 6·13·15", lbl: "Global Goals" }].map((s, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 16, padding: "1.25rem", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font)", fontSize: "1.6rem", fontWeight: 800, color: "var(--color-secondary)" }}>{s.num}</div>
                  <div style={{ fontSize: ".62rem", color: "rgba(255,255,255,.5)", textTransform: "uppercase", letterSpacing: ".1em", marginTop: ".25rem" }}>{s.lbl}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT – partner type cards */}
          <motion.div initial="hidden" animate="show" variants={stagger} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { Icon: Building2,    bg: "rgba(241,207,105,.22)", title: "Corporate Partnerships",    desc: "CSR-driven water conservation — check dams, recharge bores, watershed restoration, employee volunteering & impact reporting." },
              { Icon: Landmark,     bg: "rgba(172,215,243,.22)", title: "Government Collaboration",  desc: "Public–community convergence for scalable decentralised water management and national climate priority alignment." },
              { Icon: GraduationCap, bg: "rgba(52,211,153,.18)", title: "Educational Institutes",    desc: "Field visits, research tie-ups, internships, and awareness programs cultivating the next generation of water stewards." },
            ].map(({ Icon, bg, title, desc }, i) => (
              <motion.div key={i} variants={fadeUp} style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 20, padding: "1.5rem 1.75rem", display: "flex", gap: "1.25rem", alignItems: "flex-start", cursor: "default" }}
                whileHover={{ x: 6, background: "rgba(255,255,255,.13)" }} transition={{ type: "tween", duration: .25 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: bg, display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <Icon size={22} color="#ffffff" />
                </div>
                <div>
                  <h3 style={{ fontSize: ".95rem", fontWeight: 600, color: "#ffffff", marginBottom: ".3rem", fontFamily: "var(--font)" }}>{title}</h3>
                  <p  style={{ fontSize: ".78rem", color: "rgba(255,255,255,.55)", lineHeight: 1.6, fontFamily: "var(--font)" }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>


      {/* ══════════════════════════════════
          2 · CORPORATE PARTNERSHIPS
      ══════════════════════════════════ */}
      <section style={{ background: "#ffffff", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <SectionHeader eyebrow="Partnership Type 01" title="Corporate" highlight="Partnerships"
              subtitle="Your CSR investment creates measurable, auditable groundwater impact. We provide full transparency — from GPS-mapped sites to utilisation certificates." />
          </motion.div>

          {/* Why GGPT + What partners receive */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", marginBottom: "4rem" }}>

            {/* dark gradient card */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-greenish))", borderRadius: 28, padding: "2.5rem", color: "#ffffff", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: -40, bottom: -40, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,255,255,.06)" }} />
              <Tag bg="rgba(255,255,255,.12)" color="var(--color-secondary)">Why GGPT for CSR?</Tag>
              <h3 style={{ fontFamily: "var(--font)", fontSize: "1.6rem", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.3 }}>Proven Execution.<br />Transparent Impact.</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: ".85rem", listStyle: "none" }}>
                {["CSR-1 & NGO-DARPAN registered", "8,354+ water conservation structures built", "18 excavators – in-house execution capacity", "Transparent audit-ready reporting", "Community + Government convergence model", "GPS-mapped impact dashboards for partners"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: ".85rem", fontSize: ".85rem", color: "rgba(255,255,255,.88)", fontFamily: "var(--font)" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-secondary)", flexShrink: 0 }} />{item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,.15)" }}>
                <div style={{ fontFamily: "var(--font)", fontSize: "3rem", fontWeight: 800, color: "var(--color-secondary)" }}>18+</div>
                <div style={{ fontSize: ".75rem", color: "rgba(255,255,255,.5)", textTransform: "uppercase", letterSpacing: ".1em" }}>Years of grassroots execution</div>
              </div>
            </motion.div>

            {/* what partners receive */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Tag>What CSR Partners Receive</Tag>
              <h3 style={{ fontFamily: "var(--font)", fontWeight: 700, fontSize: "1.8rem", color: "#111827", marginBottom: "1rem" }}>Full-Spectrum Accountability</h3>
              <p style={{ color: "#6b7280", lineHeight: 1.8, fontSize: ".88rem", marginBottom: "1.25rem", fontFamily: "var(--font)" }}>
                Every partner receives comprehensive documentation and ongoing impact communication so your CSR investment is fully auditable.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: ".85rem", listStyle: "none", marginBottom: "1.5rem" }}>
                {["Utilisation Certificate & CSR-1 Certificate", "Geotagged impact report — photos, GPS & numbers", "Branding at project site (where applicable)", "Quarterly or annual progress reporting", "Groundwater recharge estimates & community assessments"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: ".85rem", fontSize: ".85rem", color: "#6b7280", fontFamily: "var(--font)" }}>
                    <CheckCircle2 size={16} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: 2 }} />{item}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
                {[{ label: "💧 SDG 6 – Clean Water", bg: "var(--color-tertiary)", color: "var(--color-primary)" }, { label: "🌡️ SDG 13 – Climate Action", bg: "#fef9c3", color: "#854d0e" }, { label: "🌿 SDG 15 – Life on Land", bg: "var(--color-tertiary)", color: "var(--color-greenish)" }].map((c, i) => (
                  <span key={i} style={{ background: c.bg, color: c.color, fontSize: ".7rem", fontWeight: 600, padding: ".35rem .9rem", borderRadius: 99, fontFamily: "var(--font)" }}>{c.label}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 3 engagement model cards */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
            {engagementModels.map((card, i) => (
              <motion.div key={i} variants={fadeUp}
                style={{ background: "var(--color-tertiary)", borderRadius: 20, padding: "1.75rem", border: "1px solid rgba(0,157,196,.12)", position: "relative" }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,157,196,.12)" }} transition={{ type: "tween", duration: .25 }}>
                <div style={{ position: "absolute", top: "1rem", right: "1.5rem", fontFamily: "var(--font)", fontSize: "3.5rem", fontWeight: 900, color: "var(--color-dark)", lineHeight: 1, userSelect: "none" }}>{card.num}</div>
                <div style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>{card.icon}</div>
                <h4 style={{ fontWeight: 700, fontSize: "1rem", color: "#111827", marginBottom: ".75rem", fontFamily: "var(--font)" }}>{card.title}</h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".5rem" }}>
                  {card.items.map((item, j) => (
                    <li key={j} style={{ fontSize: ".78rem", color: "#6b7280", display: "flex", gap: ".6rem", alignItems: "flex-start", fontFamily: "var(--font)" }}>
                      <span style={{ color: "var(--color-accent)", fontWeight: 700 }}>›</span>{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* download cards */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginTop: "3rem" }}>
            {[{ Icon: FileText, title: "CSR Proposal", desc: "Detailed plan of our water conservation initiatives.", href: "/Our-Work" }, { Icon: Building2, title: "Company Profile", desc: "Discover our mission, vision and impact journey.", href: "/Our-Work" }].map(({ Icon, title, desc, href }, i) => (
              <motion.div key={i} variants={fadeUp}
                style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1.25rem 1.5rem", background: "var(--color-tertiary)", borderRadius: 18, border: "1px solid rgba(0,157,196,.15)" }}
                whileHover={{ boxShadow: "0 12px 32px rgba(0,157,196,.12)" }} transition={{ type: "tween", duration: .25 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(0,157,196,.12)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <Icon size={22} color="var(--color-primary)" />
                </div>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: ".95rem", color: "var(--color-primary)", fontFamily: "var(--font)" }}>{title}</h3>
                  <p style={{ fontSize: ".78rem", color: "#6b7280", marginBottom: ".5rem", fontFamily: "var(--font)" }}>{desc}</p>
                  <Link href={href}>
                    <button style={{ display: "flex", alignItems: "center", gap: ".4rem", fontSize: ".78rem", fontWeight: 600, color: "var(--color-primary)", background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "var(--font)" }}>
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
          3 · GOVERNMENT COLLABORATION
      ══════════════════════════════════ */}
      <section style={{ background: "var(--color-tertiary)", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <SectionHeader eyebrow="Partnership Type 02" title="Government" highlight="Collaboration"
              subtitle="GGPT actively collaborates with government institutions and public sector agencies to expand community-led watershed development across Gujarat." />
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>

            {/* feature list */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {govFeatures.map((f, i) => (
                <motion.div key={i} variants={fadeUp}
                  style={{ background: "#ffffff", borderRadius: 18, padding: "1.5rem 1.75rem", borderLeft: "4px solid var(--color-primary)" }}
                  whileHover={{ x: 6 }} transition={{ type: "tween", duration: .25 }}>
                  <h4 style={{ fontWeight: 600, fontSize: ".95rem", color: "#111827", marginBottom: ".6rem", fontFamily: "var(--font)" }}>{f.icon} {f.title}</h4>
                  <p  style={{ fontSize: ".82rem", color: "#6b7280", lineHeight: 1.75, fontFamily: "var(--font)" }}>{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* callout */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-greenish))", borderRadius: 24, padding: "2.5rem", color: "#ffffff" }}>
              <h3 style={{ fontFamily: "var(--font)", fontWeight: 700, fontSize: "1.6rem", marginBottom: "1rem" }}>Strengthening Public–Community Partnerships</h3>
              <p style={{ fontSize: ".85rem", color: "rgba(255,255,255,.78)", lineHeight: 1.8, marginBottom: ".75rem", fontFamily: "var(--font)" }}>
                Collaboration between government institutions and grassroots organisations plays a vital role in achieving long-term water security.
              </p>
              <p style={{ fontSize: ".85rem", color: "rgba(255,255,255,.78)", lineHeight: 1.8, fontFamily: "var(--font)" }}>
                GGPT continues to work with public agencies to expand water conservation initiatives and ensure rural communities benefit from sustainable and resilient water systems.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".75rem", marginTop: "1.5rem" }}>
                {["Proven convergence with government schemes", "Strong local community mobilisation network", "Technical execution — 18 excavators fleet", "Transparent implementation & documentation", "Scalable decentralised model for replication", "Contribution to national drought-resilience goals"].map((item, i) => (
                  <li key={i} style={{ fontSize: ".82rem", color: "rgba(255,255,255,.88)", display: "flex", gap: ".6rem", alignItems: "flex-start", fontFamily: "var(--font)" }}>
                    <span style={{ color: "var(--color-secondary)", fontWeight: 700 }}>✓</span>{item}
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
      <section style={{ background: "#ffffff", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <SectionHeader eyebrow="Partnership Type 03" title="Educational Institute" highlight="Partnerships"
              subtitle="Connecting academic knowledge with real-world environmental action — engaging students, researchers, and faculty in sustainable water solutions." />
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.5rem" }}>
            {eduCards.map(({ Icon, iconBg, iconColor, title, desc, items }, i) => (
              <motion.div key={i} variants={fadeUp}
                style={{ background: "var(--color-tertiary)", borderRadius: 24, padding: "2rem", border: "1px solid rgba(0,157,196,.1)" }}
                whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(0,157,196,.10)" }} transition={{ type: "tween", duration: .25 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: iconBg, display: "grid", placeItems: "center", flexShrink: 0 }}>
                    <Icon size={24} color={iconColor} />
                  </div>
                  <h4 style={{ fontWeight: 700, fontSize: ".95rem", color: "#111827", fontFamily: "var(--font)" }}>{title}</h4>
                </div>
                <p style={{ fontSize: ".82rem", color: "#6b7280", lineHeight: 1.75, marginBottom: ".75rem", fontFamily: "var(--font)" }}>{desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".5rem" }}>
                  {items.map((item, j) => (
                    <li key={j} style={{ fontSize: ".78rem", color: "#6b7280", display: "flex", gap: ".5rem", alignItems: "flex-start", fontFamily: "var(--font)" }}>
                      <span style={{ color: "var(--color-secondary)", fontWeight: 700, flexShrink: 0 }}>–</span>{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* wide closing card */}
            <motion.div variants={fadeUp}
              style={{ gridColumn: "1 / -1", background: "linear-gradient(120deg, var(--color-primary), var(--color-greenish))", borderRadius: 24, padding: "3rem", color: "#ffffff" }}>
              <h4 style={{ fontFamily: "var(--font)", fontWeight: 700, fontSize: "1.8rem", marginBottom: "1rem" }}>Building the Next Generation of Water Stewards</h4>
              <p style={{ fontSize: ".9rem", color: "rgba(255,255,255,.78)", lineHeight: 1.8, maxWidth: 800, fontFamily: "var(--font)" }}>
                By working with educational institutions, GGPT aims to inspire students to become responsible environmental citizens and contribute to sustainable water management solutions for the future. Academic partnerships create a virtuous cycle — students gain real-world exposure, GGPT gains fresh research insights, and rural communities benefit from evidence-backed interventions.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>


      {/* ══════════════════════════════════
          5 · INQUIRY FORM
      ══════════════════════════════════ */}
      <section style={{ background: "var(--color-tertiary)", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <SectionHeader eyebrow="Get In Touch" title="Partnership" highlight="Inquiry Form"
              subtitle="Fill in the details below and our team will respond with a tailored proposal within 2 business days." />
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            style={{ background: "#ffffff", borderRadius: 32, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,157,196,.12)", display: "grid", gridTemplateColumns: "5fr 7fr", maxWidth: 960, margin: "0 auto" }}>

            {/* sidebar */}
            <div style={{ background: "linear-gradient(160deg, var(--color-primary), var(--color-greenish))", padding: "3rem 2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <Eyebrow>Partner With Us</Eyebrow>
                <h3 style={{ fontFamily: "var(--font)", fontWeight: 700, fontSize: "1.8rem", color: "#ffffff", lineHeight: 1.3, marginBottom: "1rem" }}>
                  Build Water Security For Gujarat Villages
                </h3>
                <p style={{ fontSize: ".82rem", color: "rgba(255,255,255,.68)", lineHeight: 1.75, fontFamily: "var(--font)" }}>
                  Whether you&apos;re a corporation seeking impactful CSR, a government agency scaling water programs, or an institution engaging students — we have a model for you.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: ".75rem", marginTop: "2rem" }}>
                {["Corporate CSR Partnerships", "Government Collaboration", "Educational Institute Tie-Ups", "CSR-1 & NGO-DARPAN Registered"].map((label, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,.09)", border: "1px solid rgba(255,255,255,.14)", borderRadius: 12, padding: ".7rem 1rem", fontSize: ".78rem", color: "rgba(255,255,255,.85)", display: "flex", alignItems: "center", gap: ".6rem", fontFamily: "var(--font)" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-secondary)", flexShrink: 0 }} />{label}
                  </div>
                ))}
              </div>
            </div>

            {/* form */}
            <div style={{ padding: "3rem" }}>
              <h3 style={{ fontFamily: "var(--font)", fontWeight: 700, fontSize: "1.6rem", color: "#111827", marginBottom: ".4rem" }}>Send Your Inquiry</h3>
              <p style={{ fontSize: ".82rem", color: "#6b7280", marginBottom: "2rem", fontFamily: "var(--font)" }}>We typically respond within 2 business days</p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <Field label="Organisation Name">
                  <Building2 size={16} color="var(--color-primary)" />
                  <input type="text" placeholder="Your organisation name" style={inputStyle} />
                </Field>

                <Field label="Contact Person">
                  <User size={16} color="var(--color-primary)" />
                  <input type="text" placeholder="Full name" style={inputStyle} />
                </Field>

                <Field label="Email Address">
                  <Mail size={16} color="var(--color-primary)" />
                  <input type="email" placeholder="example@company.com" style={inputStyle} />
                </Field>

                <Field label="Phone Number">
                  <Phone size={16} color="var(--color-primary)" />
                  <input type="tel" placeholder="10-digit mobile" maxLength={10} style={inputStyle} />
                </Field>

                <Field label="Partnership Type" full>
                  <Leaf size={16} color="var(--color-primary)" />
                  <select style={inputStyle}>
                    <option value="">— Select a partnership type —</option>
                    <option>Corporate CSR Partnership</option>
                    <option>Government Collaboration</option>
                    <option>Educational Institute Partnership</option>
                    <option>Other / Multiple</option>
                  </select>
                </Field>

                <Field label="Subject" full>
                  <FileText size={16} color="var(--color-primary)" />
                  <input type="text" placeholder="e.g. Check dam CSR, Research internship, Watershed MoU…" style={inputStyle} />
                </Field>

                {/* textarea – custom alignment */}
                <div style={{ display: "flex", flexDirection: "column", gap: ".4rem", gridColumn: "1 / -1" }}>
                  <label style={{ fontSize: ".68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--color-primary)", fontFamily: "var(--font)" }}>
                    Message &amp; Details
                  </label>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: ".5rem", background: "var(--color-tertiary)", borderRadius: 12, padding: ".7rem 1rem", border: "1.5px solid transparent" }}>
                    <MessageSquare size={16} color="var(--color-primary)" style={{ marginTop: 2, flexShrink: 0 }} />
                    <textarea rows={4} placeholder="Share your CSR budget range, project scope, geographic focus, or any specific questions…" style={{ ...inputStyle, resize: "none" }} />
                  </div>
                </div>
              </div>

              <motion.button type="button"
                whileHover={{ y: -1, background: "var(--color-greenish)" }}
                transition={{ type: "tween", duration: .2 }}
                style={{ marginTop: "1.5rem", width: "100%", padding: "1rem", background: "var(--color-primary)", color: "#ffffff", border: "none", borderRadius: 14, fontFamily: "var(--font)", fontSize: ".95rem", fontWeight: 600, letterSpacing: ".04em", cursor: "pointer" }}>
                Submit Inquiry →
              </motion.button>
            </div>

          </motion.div>
        </div>
      </section>


    </div>
  );
}