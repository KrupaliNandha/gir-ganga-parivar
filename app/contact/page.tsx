"use client";
import { useState } from "react";

import { motion } from "framer-motion";

/* ─── Icons ───────────────────────────────────────── */

function MapPinIcon({ filled = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.8}
      className="w-7 h-7"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle
        cx="12"
        cy="9"
        r="2.5"
        fill={filled ? "white" : "none"}
        stroke={filled ? "none" : "currentColor"}
        strokeWidth={1.8}
      />
    </svg>
  );
}

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className="w-7 h-7"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className="w-7 h-7"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 8l10 6 10-6" />
  </svg>
);

const SendIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-4 h-4"
  >
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
        "12 - Sunstar Chamber, Ghanshyam Nagar",
        "Main Road, B/H Crystal Mall",
        "Rajkot - 360005, Gujarat",
      ],
      href: "https://maps.app.goo.gl/zbMrjJqd8u8XpQ1n9",
    },
    {
      icon: <PhoneIcon />,
      label: "Contact",
      lines: ["+91 94096 92693", "+91 94084 14568"],
      href: "tel:+919409692693",
    },
    {
      icon: <MailIcon />,
      label: "Email",
      lines: ["info@girgangaparivartrust.com"],
      href: "mailto:info@girgangaparivartrust.com",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
      {cards.map((card, i) => (
        <a
          key={i}
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary rounded-2xl p-7 flex flex-col items-center text-center gap-3 
          bg-[var(--color-primary)] text-white
          border border-[var(--color-tertiary)]
          hover:bg-[var(--color-secondary)] hover:text-black shadow-sm"
        >
          <div className="text-black">{card.icon}</div>

          <p className="font-bold text-lg tracking-wide">{card.label}</p>

          {card.lines.map((line, j) => (
            <p key={j} className="text-xs sm:text-sm opacity-80">
              {line}
            </p>
          ))}
        </a>
      ))}
    </div>
  );
}

/* ─── Contact Form ───────────────────────────────── */

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1200));

    setLoading(false);
    setSent(true);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const options = [
    "General Inquiry",
    "Volunteer Opportunities",
    "Donation",
    "Media",
  ];

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
    // sync with your form state:
    handleChange({ target: { name: "subject", value } });
  };

  const inputClass =
    "w-full px-5 py-3 rounded-xl border border-gray-200 text-gray-700 text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition bg-white";

  if (sent) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] flex items-center justify-center mb-4 mx-auto">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth={2.5}
            className="w-8 h-8"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h3>

        <p className="text-gray-500 text-sm mb-6">
          We'll get back to you within 24-48 hours.
        </p>

        <button
          onClick={() => setSent(false)}
          className="bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        required
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className={inputClass}
      />

      <input
        required
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className={inputClass}
      />

      <input
        required
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        className={inputClass}
      />

      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={
            inputClass + " flex items-center justify-between w-full pr-7"
          }
        >
          <span className={selected ? "text-gray-900" : "text-gray-400"}>
            {selected || "Select Subject"}
          </span>
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {isOpen && (
          <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-sm">
            {options.map((opt) => (
              <li
                key={opt}
                onClick={() => handleSelect(opt)}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-50"
              >
                {opt}
              </li>
            ))}
          </ul>
        )}

        {/* hidden input for form submission */}
        <input type="hidden" name="subject" value={selected} required />
      </div>

      <textarea
        required
        rows={4}
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        className={inputClass + " resize-none"}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-6 justify-center"
      >
        <button
          type="submit"
          disabled={loading}
          className="btn-secondary w-full group relative inline-flex items-center justify-center gap-2
    font-semibold text-base px-10 py-4 cursor-pointer
    bg-[var(--color-secondary)] text-[var(--color-primary)]
    hover:text-[var(--color-secondary)] overflow-hidden"
        >
          <span className="relative z-10 flex gap-2 items-center">
            {loading ? (
              "Sending..."
            ) : (
              <>
                Send <SendIcon />
              </>
            )}
          </span>

          <span className="btn-secondary-overlay"></span>
        </button>
      </motion.div>
    </form>
  );
}

/* ─── Main Page ───────────────────────────────── */

export default function Contact() {
  return (
    <>
    <section>
      
    </section>
      {/* section - 1 */}
      <div className=" pt-16 pb-6 text-center container">
        <p className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-[var(--color-secondary)]" />
          conact form
          <span className="w-8 h-px bg-[var(--color-secondary)]" />
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          <span className="text-[var(--color-primary)]">Get In Touch</span>
        </h1>
        <p className="text-gray-500 text-sm mt-5 max-w-xl mx-auto leading-relaxed">
          Feel free to contact us. Submit your queries here and we will get back
          to you soon.
        </p>
        {/* thin emerald divider */}
        <div className="w-16 h-0.5 bg-[var(--color-primary)] mx-auto mt-10 rounded-full" />
      </div>

      {/* sECTION - 2 */}
      <div className="container">
        <div className="max-w-6xl mx-auto bg-[var(--color-tertiary)] rounded-3xl shadow-md border border-[var(--color-tertiary)] p-8 md:p-12">
          <ContactCards />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}

            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm min-h-[440px]">
              <iframe
                src="https://www.google.com/maps?q=GirGanga+Parivar+Trust+Rajkot&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "440px" }}
                loading="lazy"
              />
            </div>

            {/* Form */}

            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
