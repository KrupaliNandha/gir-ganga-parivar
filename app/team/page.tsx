"use client";
import { useState } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────

<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth={1.8}
  className="w-5 h-5"
>
  <rect x="2" y="4" width="20" height="16" rx="2" />
  <path d="M2 8l10 6 10-6" />
</svg>;

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth={2.5}
    className="w-9 h-9"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Replace with your actual form submission logic / API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-shadow bg-slate-50 focus:bg-white";

  return (
    <section className="container">
      <div className="max-w-7xl mx-auto space-y-10">
        <section className=" text-center mb-10">
          <p
            className="text-[var(--color-secondary)]
 text-[10px] font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3"
          >
            <span
              className="w-8 h-px bg-[var(--color-secondary)]
"
            />
            Form
            <span
              className="w-8 h-px bg-[var(--color-secondary)]
"
            />
          </p>
          <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Volunteer{" "}
            <span className="text-[var(--color-primary)]">Application</span>
          </h1>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* ── Left: Volunteer Content ── */}
          <div className="lg:col-span-2 space-y-6 items-center">
            <div>
              <div className="w-12 h-1 bg-[var(--color-primary)] rounded-full mt-4 justify-self-center lg:justify-self-start"></div>
            </div>

            <h2 className="text-2xl font-black text-slate-900 mt-2 leading-tight text-center lg:text-start">
              Volunteer Application Form
            </h2>

            <p className="text-slate-500 leading-relaxed text-lg text-center lg:text-start">
              Join Gir Ganga Parivar Trust as a volunteer and help us build a
              water-secure Saurashtra. Your support can make a real difference
              in water conservation and rural development.
            </p>

            <p className="text-slate-500 leading-relaxed text-lg text-center lg:text-start">
              Fill out this form to become part of our mission and contribute
              towards sustainable water management projects across Gujarat.
            </p>
          </div>

          {/* ── Right: Form ── */}

          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>

                    <input
                      required
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>

                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>

                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 90000 00000"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-1.5">
                      Subject *
                    </label>

                    <input
                      required
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-1.5">
                    Message *
                  </label>

                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us how you want to help..."
                    className={inputClass}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[var(--color-primary)] text-white font-bold py-3.5 rounded-xl shadow-lg"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page Export ──────────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <div className="h-auto">
      <main>
        <ContactForm />
      </main>
    </div>
  );
}
