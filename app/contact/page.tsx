"use client";
import { useState } from "react";
import { motion, AnimatePresence,  Variants } from "framer-motion";

/* ─── Animation Variants ───────────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

/* ─── Icons ───────────────────────────────────────── */

function MapPinIcon({ filled = false }) {
  return (
    <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" fill={filled ? "white" : "none"} stroke={filled ? "none" : "currentColor"} />
    </svg>
  );
}

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 8l10 6 10-6" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

/* ─── Contact Cards ───────────────────────────────── */

function ContactCards() {
  const cards = [
    {
      icon: <MapPinIcon filled />,
      label: "Address",
      lines: [
        "Decora Capital, 5th Floor, Nr. McDonalds, Above HDFC Bank, Kalawad Road, Rajkot - 360005, Gujarat",
      ],
      href: "https://maps.app.goo.gl/zbMrjJqd8u8XpQ1n9",
    },
    {
      icon: <PhoneIcon />,
      label: "Contact",
      lines: ["+91 94084 14568", "+91 94096 92693"],
      href: "tel:+919408414568",
    },
    {
      icon: <MailIcon />,
      label: "Email",
      lines: ["csr@girgangaparivartrust.com"],
      href: "mailto:csr@girgangaparivartrust.com",
    },
  ];

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
    >
      {cards.map((card, i) => (
        <motion.a
          variants={fadeUp}
          key={i}
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl p-7 flex flex-col items-center text-center gap-3 
          bg-[var(--color-primary)] text-white
          hover:bg-[var(--color-secondary)] hover:text-black shadow-sm"
        >
          <div className="text-black">{card.icon}</div>
          <p className="font-bold text-lg tracking-wide">{card.label}</p>

          {card.lines.map((line, j) => (
            <p key={j} className="text-xs sm:text-sm opacity-80">
              {line}
            </p>
          ))}
        </motion.a>
      ))}
    </motion.div>
  );
}

/* ─── Input Style ───────────────────────────────── */

const inputClass =
  "w-full px-5 py-3 rounded-xl border border-gray-200 text-gray-700 text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition bg-white";

/* ─── Contact Form ───────────────────────────────── */

function ContactForm() {
  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="space-y-4"
    >
      <input required placeholder="Name" className={inputClass} />
      <input required type="email" placeholder="Email" className={inputClass} />
      <input required placeholder="Phone Number" className={inputClass} />
      <input placeholder="Subject" className={inputClass} />

      <textarea rows={4} placeholder="Message" className={inputClass + " resize-none"} />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="flex flex-wrap gap-6 justify-center"
      >
        <button
          type="submit"
          className="btn-secondary w-full group relative inline-flex items-center justify-center gap-2
    font-semibold text-base px-10 py-4 cursor-pointer
    bg-[var(--color-secondary)] text-[var(--color-primary)]
    hover:text-[var(--color-secondary)] overflow-hidden"
        >
          <span className="relative z-10 flex gap-2 items-center">
            Send <SendIcon />
          </span>

          <span className="btn-secondary-overlay"></span>
        </button>
      </motion.div>
    </motion.form>
  );
}

/* ─── Volunteer Form ───────────────────────────────── */
const ChevronIcon = ({ open }: { open: boolean }) => (
  <motion.svg
    animate={{ rotate: open ? 180 : 0 }}
    transition={{ duration: 0.3 }}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-4 h-4 text-gray-400"
  >
    <path d="M6 9l6 6 6-6" />
  </motion.svg>
);

function VolunteerForm() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const options = [
    "Water Conservation",
    "Environment Activities",
    "Event Support",
  ];

  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="space-y-4"
    >
      <input required placeholder="Full Name" className={inputClass} />
      <input required type="email" placeholder="Email" className={inputClass} />
      <input required placeholder="Phone Number" className={inputClass} />
      <input placeholder="City" className={inputClass} />

      {/* Custom Dropdown */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`${inputClass} flex items-center justify-between`}
        >
          <span className={selected ? "text-gray-700" : "text-gray-400"}>
            {selected || "Select Interest"}
          </span>

          <ChevronIcon open={open} />
        </button>

        {open && (
          <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-sm">
            {options.map((opt) => (
              <li
                key={opt}
                onClick={() => {
                  setSelected(opt);
                  setOpen(false);
                }}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-50"
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>

      <textarea
        rows={4}
        placeholder="Why do you want to volunteer?"
        className={inputClass}
      />

      {/* Overlay Button */}
      <motion.div className="flex justify-center">
        <button
          type="submit"
          className="btn-secondary w-full group relative inline-flex items-center justify-center gap-2
          font-semibold text-base px-10 py-4 cursor-pointer
          bg-[var(--color-secondary)] text-[var(--color-primary)]
          hover:text-[var(--color-secondary)] overflow-hidden"
        >
          <span className="relative z-10 flex gap-2 items-center">
            Submit Volunteer Application
          </span>

          <span className="btn-secondary-overlay"></span>
        </button>
      </motion.div>
    </motion.form>
  );
}

/* ─── Partnership Form ───────────────────────────────── */

function PartnershipForm() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const options = [
    "CSR Partnership",
    "Event Collaboration",
    "Sponsorship",
    "Donation Partnership",
  ];

  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="space-y-4"
    >
      <input required placeholder="Name" className={inputClass} />
      <input required placeholder="Organization Name" className={inputClass} />
      <input required type="email" placeholder="Email" className={inputClass} />
      <input required placeholder="Phone Number" className={inputClass} />

      {/* Custom Dropdown */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`${inputClass} flex items-center justify-between`}
        >
          <span className={selected ? "text-gray-700" : "text-gray-400"}>
            {selected || "Partnership Type"}
          </span>

          <ChevronIcon open={open} />
        </button>

        {open && (
          <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-sm">
            {options.map((opt) => (
              <li
                key={opt}
                onClick={() => {
                  setSelected(opt);
                  setOpen(false);
                }}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-50"
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>

      <textarea
        rows={4}
        placeholder="Describe your partnership proposal"
        className={inputClass}
      />

      {/* Overlay Button */}
      <motion.div className="flex justify-center">
        <button
          type="submit"
          className="btn-secondary w-full group relative inline-flex items-center justify-center gap-2
          font-semibold text-base px-10 py-4 cursor-pointer
          bg-[var(--color-secondary)] text-[var(--color-primary)]
          hover:text-[var(--color-secondary)] overflow-hidden"
        >
          <span className="relative z-10 flex gap-2 items-center">
            Submit Partnership Request
          </span>

          <span className="btn-secondary-overlay"></span>
        </button>
      </motion.div>
    </motion.form>
  );
}

/* ─── Main Page ───────────────────────────────── */

export default function Contact() {
  const [formType, setFormType] = useState("contact");

  return (
    <>
      {/* Heading */}

      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="pt-16 pb-6 text-center container"
      >
        <motion.p variants={fadeUp} className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-[var(--color-secondary)]" />
          CONTACT FORM
          <span className="w-8 h-px bg-[var(--color-secondary)]" />
        </motion.p>

        <motion.h1 variants={fadeUp} className="text-5xl font-bold">
          <span className="text-[var(--color-primary)]">Get In Touch</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="text-gray-500 text-sm mt-5 max-w-xl mx-auto">
          Feel free to contact us. Submit your queries here and we will get back
          to you soon.
        </motion.p>

        <motion.div variants={fadeUp} className="w-16 h-0.5 bg-[var(--color-primary)] mx-auto mt-10 rounded-full" />
      </motion.div>

      {/* Contact Section */}

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto bg-[var(--color-tertiary)] rounded-3xl shadow-md border p-8 md:p-12"
        >
          <ContactCards />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Map */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden border shadow-sm min-h-[440px]"
            >
              <iframe
                src="https://www.google.com/maps?q=GirGanga+Parivar+Trust+Rajkot&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "440px" }}
                loading="lazy"
              />
            </motion.div>

            {/* Forms */}

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Form Switch Buttons */}

              <div className="flex gap-3 mb-6 flex-wrap">
                <button onClick={() => setFormType("contact")} className={`px-5 py-2 rounded-lg text-sm font-semibold ${formType === "contact" ? "bg-[var(--color-primary)] text-white" : "bg-white border"}`}>
                  Contact
                </button>

                <button onClick={() => setFormType("volunteer")} className={`px-5 py-2 rounded-lg text-sm font-semibold ${formType === "volunteer" ? "bg-[var(--color-primary)] text-white" : "bg-white border"}`}>
                  Volunteer
                </button>

                <button onClick={() => setFormType("partnership")} className={`px-5 py-2 rounded-lg text-sm font-semibold ${formType === "partnership" ? "bg-[var(--color-primary)] text-white" : "bg-white border"}`}>
                  Partnership
                </button>
              </div>

              <AnimatePresence mode="wait">
                {formType === "contact" && <ContactForm key="contact" />}
                {formType === "volunteer" && <VolunteerForm key="volunteer" />}
                {formType === "partnership" && <PartnershipForm key="partnership" />}
              </AnimatePresence>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}