"use client";
import { FaLeaf, FaQuestionCircle } from "react-icons/fa";
import { MdReceipt } from "react-icons/md";
import {
  Building2,
  Download,
  FileText,
  LayoutList,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";
import Slider from "../../Component/Slider";
import SmoothScroll from "../../Component/SmothScrolling";
import Link from "next/link";


const csrCards = [
  {
    icon: <FaQuestionCircle className="text-white text-2xl" />,
    title: "Why GGPT For CSR",
    number: "01",
    tag: "Credibility",
    items: [
      "CSR-1 & NGO-DARPAN registered",
      "8,354+ water conservation structures",
      "Proven execution capacity (18 excavators)",
      "Transparent reporting & audits",
      "Community + Government convergence",
    ],
  },
  {
    icon: <MdReceipt className="text-white text-2xl" />,
    title: "What CSR Partners Receive",
    number: "02",
    tag: "Benefits",
    items: [
      "Utilisation Certificate",
      "Impact Report (photos, GPS, numbers)",
      "Branding at site (if applicable)",
      "Annual / quarterly reporting",
      "CSR-1 Certificate",
    ],
  },
  {
    icon: <FaLeaf className="text-white text-2xl" />,
    title: "CSR Engagement Models",
    number: "03",
    tag: "Options",
    items: [
      "Sponsorship of check-dam deepening (₹4–₹10 lakh per structure)",
      "District / Taluka water security projects",
      "Machinery support (Excavators)",
      "Multi-year MoU partnerships",
      "Community + Government convergence",
    ],
  },
];

export default function Support() {
  return (
    <>
      <SmoothScroll>
        {/* Section - 1 */}
        <section className="bg-[var(--bg-grn)] font-[var(--font)]">
          <div className="container">
            <div className="text-center">
              <p className="text-yell text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3">
                <span className="w-8 h-px bg-yell" />
                CSR Partnership
                <span className="w-8 h-px bg-yell" />
              </p>
              <h1
                className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Girganga <span className="text-greenish"> Parivar </span> Trust
              </h1>
              <p className="text-gray-500 text-sm mt-5 max-w-xl mx-auto leading-relaxed">
                Work with us to build sustainable water conservation systems
                across Gujarat. Together we can empower villages and ensure
                long-term water security.
              </p>
              <div className="w-16 h-0.5 bg-greenish mx-auto mt-10 rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto gap-16 items-center">
              {/* RIGHT FEATURE CARDS */}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-8">
                {csrCards.map((card, i) => (
                  <div
                    key={i}
                    className="relative group bg-white rounded-3xl p-7 shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    {/* top gradient bar */}
                    <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-greenish"></div>

                    <div className="flex gap-5">
                      {/* icon */}
                      <div className="relative">
                        <div
                          className="w-14 h-14 flex items-center justify-center rounded-full text-white text-xl shadow-lg
          bg-greenish"
                        >
                          {card.icon}
                        </div>

                        {/* glow effect */}
                        <div className="absolute inset-0 rounded-full blur-xl opacity-30 transition"></div>
                      </div>

                      <div className="flex-1">
                        {/* title */}
                        <h3 className="text-xl font-bold text-[var(--color-greenish)] mb-3">
                          {card.title}
                        </h3>

                        {/* list */}
                        <ul className="space-y-2 text-sm text-gray-600">
                          {card.items.map((item, index) => (
                            <li key={index} className="flex gap-3 items-start">
                              <span className="w-2 h-2 mt-2 rounded-full bg-[var(--color-greenish)]"></span>

                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section - 2 */}
        <section className="bg-[var(--bg-grn)] font-[var(--font)] overflow-hidden">
          <div className="container">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
              {/* LEFT CONTENT */}
              <div className="">
                {/* heading */}
                <p className="text-[var(--color-yell)] text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center lg:justify-start gap-3">
                  <span className="w-8 h-px bg-[var(--color-yell)]" />
                  Documents & Action
                  <span className="w-8 h-px bg-[var(--color-yell)]" />
                </p>

                <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-black mb-6 text-center lg:text-start" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Transparency Builds Trust <br />
                  <span className="text-[var(--color-greenish)]">
                    Trust Builds Impact
                  </span>
                </h2>

                {/* paragraph */}
                <p className="text-gray-500 text-sm lg:max-w-xl mb-10 leading-relaxed text-center lg:text-start">
                  We believe transparency strengthens partnerships. Explore our
                  CSR proposal and company profile to understand our mission and
                  how your support creates sustainable water solutions across
                  Gujarat.
                </p>

                {/* download cards */}
                <div className="space-y-5">
                  {/* CSR Proposal */}
                  <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md border border-[var(--color-primary)]/10 hover:shadow-lg transition">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-tealBrand)]/20 text-[var(--color-primary)]">
                      <LayoutList size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-[var(--color-primary)]">
                        CSR Proposal
                      </h3>

                      <p className="text-sm text-gray-500 mb-2">
                        Detailed plan of our water conservation initiatives.
                      </p>

                      <Link href="/Our-Work">
                        <button className="flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-tealBrand)]">
                          <Download size={15} />
                          Download PDF
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Company Profile */}
                  <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md border border-[var(--color-primary)]/10 hover:shadow-lg transition">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-cyanBrand)]/20 text-[var(--color-primary)]">
                      <Building2 size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-[var(--color-primary)]">
                        Company Profile
                      </h3>

                      <p className="text-sm text-gray-500 mb-2">
                        Discover our mission, vision and impact journey.
                      </p>

                      <a href="/Our-Work">
                        <button className="flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-tealBrand)]">
                          <Download size={15} />
                          Download PDF
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/image/partner-with-us-csr/CSR.png"
                    alt="CSR Impact"
                    className="w-full h-auto md:h-[520px] object-cover"
                  />
                </div>

                {/* floating card */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-[var(--color-primary)]/10 hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-yell)] text-white">
                      <Building2 size={22} />
                    </div>

                    <div>
                      <p className="text-lg font-bold text-[var(--color-yell)]">
                        8,354+
                      </p>

                      <p className="text-xs text-gray-500">Structures Built</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section - 3 */}
        <section className="font-[var(--font)]">
          <div className="container">
            <div className=" mx-auto">
              <div className="text-center mb-16">
                <p className="text-[var(--color-yell)] text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center  gap-3">
                  <span className="w-8 h-px bg-[var(--color-yell)]" />
                  Get In Touch
                  <span className="w-8 h-px bg-[var(--color-yell)]" />
                </p>

                <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-black mb-6 text-center" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  CSR Partnership
                  <span className="text-[var(--color-greenish)]">
                    {" "}
                    Inquiry Form
                  </span>
                </h2>

                {/* paragraph */}
                <p className="text-gray-500 text-lg mb-10 leading-relaxed text-center ">
                  Partner with us to create sustainable impact. Fill in the
                  details and our team will get back to you shortly.
                </p>
              </div>

              {/* form card */}
              <div>
                <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-[var(--color-primary)]/20 flex flex-col md:flex-row">
                  {/* LEFT IMAGE */}
                  <div className="md:w-2/5 relative">
                    <img
                      src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                      alt="Water structure construction"
                      className="w-full h-full object-cover max-h-[315px]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 to-transparent" />

                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-yell)] mb-2">
                        CSR Partnership
                      </p>

                      <h3 className="text-2xl font-bold leading-snug">
                        Build Water Security <br />
                        For Gujarat Villages
                      </h3>

                      <p className="text-sm text-white/80 mt-2">
                        Partner with us to create sustainable water structures.
                      </p>
                    </div>
                  </div>

                  {/* RIGHT FORM */}
                  <div className="w-full md:w-3/5 bg-white px-8 sm:px-12 py-10 flex flex-col gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--color-primary)]">
                        Partner With Us
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        Enquire about CSR opportunities
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                      {/* Company */}
                      <div>
                        <label className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-1 block">
                          Company Name
                        </label>

                        <div className="flex items-center gap-2 border border-[var(--color-primary)]/20 rounded-xl px-3 py-2 bg-[var(--bg-grn)] focus-within:border-[var(--color-primary)]">
                          <Building2
                            size={16}
                            className="text-[var(--color-primary)]"
                          />

                          <input
                            type="text"
                            placeholder="Your company name"
                            className="flex-1 text-sm outline-none bg-transparent"
                          />
                        </div>
                      </div>

                      {/* Contact */}
                      <div>
                        <label className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-1 block">
                          Contact Number
                        </label>

                        <div className="flex items-center gap-2 border border-[var(--color-primary)]/20 rounded-xl px-3 py-2 bg-[var(--bg-grn)] focus-within:border-[var(--color-primary)]">
                          <User
                            size={16}
                            className="text-[var(--color-primary)]"
                          />

                          <input
                            type="tel"
                            placeholder="Your contact number"
                            maxLength={10}
                            pattern="[0-9]{10}"
                            className="flex-1 text-sm outline-none bg-transparent"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-1 block">
                          Email
                        </label>

                        <div className="flex items-center gap-2 border border-[var(--color-primary)]/20 rounded-xl px-3 py-2 bg-[var(--bg-grn)] focus-within:border-[var(--color-primary)]">
                          <Mail
                            size={16}
                            className="text-[var(--color-primary)]"
                          />

                          <input
                            type="email"
                            placeholder="exmple@emil.com"
                            className="flex-1 text-sm outline-none bg-transparent"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-1 block">
                          Subject
                        </label>

                        <div className="flex items-center gap-2 border border-[var(--color-primary)]/20 rounded-xl px-3 py-2 bg-[var(--bg-grn)] focus-within:border-[var(--color-primary)]">
                          <FileText
                            size={16}
                            className="text-[var(--color-primary)]"
                          />

                          <input
                            type="text"
                            placeholder="subject details"
                            className="flex-1 text-sm outline-none bg-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* TEXTAREA */}
                    <div>
                      <label className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-1 block">
                        CSR Budget & Details
                      </label>

                      <div className="flex items-start gap-2 border border-[var(--color-primary)]/20 rounded-xl px-3 py-3 bg-[var(--bg-grn)] focus-within:border-[var(--color-primary)]">
                        <MessageSquare
                          size={16}
                          className="text-[var(--color-primary)] mt-1"
                        />

                        <textarea
                          rows={3}
                          placeholder="Share your CSR budget range and expectations..."
                          className="flex-1 text-sm outline-none bg-transparent resize-none"
                        />
                      </div>
                    </div>

                    {/* BUTTON */}
                    <button className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-greenish)] transition text-white font-semibold py-3 rounded-xl shadow-lg">
                      Submit Inquiry →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section - 4 */}
        <Slider />
      </SmoothScroll>
    </>
  );
}
