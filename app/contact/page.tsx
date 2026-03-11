"use client";
import { useState } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────
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

// ─── Contact Cards ────────────────────────────────────────────────────────────
function ContactCards() {
  const cards = [
    {
      icon: <MapPinIcon filled={true} />,
      label: "Address",
      lines: ["12 - Sunstar Chamber, Ghanshyam Nagar", "Main Road, B/H Crystal Mall", "Rajkot – 360005, Gujarat"],
      href: "https://maps.app.goo.gl/zbMrjJqd8u8XpQ1n9",
      highlighted: true,
    },
    {
      icon: <PhoneIcon />,
      label: "Contact",
      lines: ["+91 94096 92693", "+91 94084 14568"],
      href: "tel:+919409692693",
      highlighted: false,
    },
    {
      icon: <MailIcon />,
      label: "Email",
      lines: ["info@girgangaparivartrust.com"],
      href: "mailto:info@girgangaparivartrust.com",
      highlighted: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
      {cards.map((card, i) => (
        <a
          key={i}
          href={card.href}
          target={card.highlighted ? "_blank" : undefined}
          rel="noopener noreferrer"
          className={`rounded-2xl p-7 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer no-underline group ${
            card.highlighted
              ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
              : "bg-indigo-50 text-indigo-700 border border-indigo-100 hover:bg-indigo-100"
          }`}
        >
          <div className={`mb-1 ${card.highlighted ? "text-white" : "text-indigo-500"}`}>
            {card.icon}
          </div>
          <p className={`font-bold text-lg tracking-wide ${card.highlighted ? "text-white" : "text-indigo-700"}`}>
            {card.label}
          </p>
          {card.lines.map((line, j) => (
            <p key={j} className={`text-sm leading-relaxed ${card.highlighted ? "text-indigo-100" : "text-indigo-500"}`}>
              {line}
            </p>
          ))}
        </a>
      ))}
    </div>
  );
}

// ─── Form ─────────────────────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition bg-white";

  const subjects = [
    "General Inquiry",
    "Volunteer Opportunities",
    "Corporate / CSR Partnership",
    "Donation & Fundraising",
    "Media & Press",
    "Other",
  ];

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center mb-4 shadow-lg">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} className="w-8 h-8">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">Message Sent!</h3>
        <p className="text-slate-500 text-sm mb-5">We'll get back to you within 24–48 hours.</p>
        <button
          onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
          className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
          Your Name <span className="text-red-400">*</span>
        </label>
        <input required type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className={inputClass} />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
          Email <span className="text-red-400">*</span>
        </label>
        <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className={inputClass} />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
          Phone Number <span className="text-red-400">*</span>
        </label>
        <input required type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className={inputClass} />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
          Subject <span className="text-red-400">*</span>
        </label>
        <select required name="subject" value={form.subject} onChange={handleChange} aria-label="Subject" className={inputClass + " appearance-none cursor-pointer"}>
          <option value="">Select a topic…</option>
          {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
          Description <span className="text-red-400">*</span>
        </label>
        <textarea required name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Message" className={inputClass + " resize-none"} />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed mt-2 shadow-md shadow-indigo-200"
      >
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send <SendIcon />
          </>
        )}
      </button>
    </form>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 py-14 px-4">
      <div className="max-w-5xl mx-auto bg-[var(--color-tertiary)] rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">

        {/* ── Header ── */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Get In Touch
          </h1>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Feel free to contact us? Submit your queries here and we will get back to you as soon as possible.
          </p>
        </div>

        {/* ── Contact Cards ── */}
        <ContactCards />

        {/* ── Map + Form ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-full min-h-[440px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.2!2d70.7526!3d22.2829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca15b1d3f481%3A0xd82fa04b1c40e85e!2sGirganga%20Parivar%20Trust!5e0!3m2!1sen!2sin!4v1680000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "440px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gir Ganga Parivar Trust Location"
            />
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}