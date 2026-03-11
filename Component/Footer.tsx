"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[var(--color-tertiary)] text-black">

      {/* ── Dark overlay so text is readable over image ── */}
      <div className="absolute inset-0" />

      {/* ── All content sits above both layers ── */}
      <div className="relative z-10 text-black">
        {/* Thin greenish divider */}
        <div className="h-px mx-8 lg:mx-16 bg-gradient-to-r from-transparent via
        
        to-transparent mb-14" />

        {/* ── 4-column grid ── */}
        <div className="max-w-[1500px] mx-auto px-8 lg:px-16 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="rounded-xl p-1.5 flex-shrink-0 backdrop-blur-sm">
                  <Image
                    src="/image/logo.png"
                    alt="Girganga Parivar Trust"
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-black font-black text-base leading-tight">Girganga</p>
                  <p className="text-[var(--color-primary)]  font-bold text-sm">Parivar Trust</p>
                </div>
              </div>

              <p className="text-black text-sm leading-relaxed mb-6">
                Transforming Saurashtra through water conservation — building a
                sustainable future for generations to come.
              </p>

              {/* Socials */}
              <div className="flex gap-2.5">
                {[
                  { icon: <FaFacebookF size={13} />, href: "https://www.facebook.com/profile.php?id=100083921712230", label: "Facebook"  },
                  { icon: <FaTwitter   size={13} />, href: "https://x.com/GirgangaT71455",                           label: "Twitter"   },
                  { icon: <FaInstagram size={13} />, href: "https://www.instagram.com/girgangaparivartrust/",         label: "Instagram" },
                  { icon: <FaYoutube   size={13} />, href: "https://www.youtube.com/@girgangaparivartrust",           label: "YouTube"   },
                ].map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 backdrop-blur-sm
                               flex items-center justify-center text-black
                               hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:text-white
                               transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-black font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-[var(--color-primary)] rounded-full inline-block" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Home",       href: "/" },
                  { label: "Awards",     href: "/awards" },
                  { label: "About Us",   href: "/about-us" },
                  { label: "Gallery",    href: "/photos" },
                  { label: "Contact Us", href: "/contact" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-black text-sm hover:text-[var(--color-primary)] hover:pl-1.5
                                 transition-all duration-200 inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-[var(--color-primary)]
                                       transition-all duration-200 inline-block" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Work */}
            <div>
              <h3 className="text-black font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-[var(--color-primary)] rounded-full inline-block" />
                Our Work
              </h3>
              <ul className="space-y-3">
                {[
                  "Checkdam Construction",
                  "Community Impact",
                  "Media Coverage",
                  "Community Engagement",
                ].map((item) => (
                  <li key={item} className="text-black text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved + Contact */}
            <div>
              <h3 className="text-black font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-[var(--color-primary)] rounded-full inline-block" />
                Get Involved
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  { label: "Make a Donation",  href: "/donate"           },
                  { label: "Volunteer",        href: "/team"               },
                  { label: "Corporate / CSR",  href: "/partner-with-us-csr"},
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-black text-sm hover:text-[var(--color-primary)] hover:pl-1.5
                                 transition-all duration-200 inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-[var(--color-primary)]
                                       transition-all duration-200 inline-block" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Contact details */}
              <div className="space-y-3">
                <a href="tel:+919409692693"
                   className="flex items-center gap-2.5 text-black text-sm hover:text-[var(--color-primary)] transition-colors">
                  <FiPhone size={13} className="text-[var(--color-primary)] flex-shrink-0" />
                  +91 94096 92693
                </a>
                <a href="mailto:info@girgangaparivartrust.com"
                   className="flex items-center gap-2.5 text-black text-sm hover:text-[var(--color-primary)] transition-colors">
                  <FiMail size={13} className="text-[var(--color-primary)] flex-shrink-0" />
                  info@girgangaparivartrust.com
                </a>
                <div className="flex items-start gap-2.5 text-black text-sm">
                  <FiMapPin size={13} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                  <span>Sunstar Chamber, Rajkot - 360005, Gujarat</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-5 border-t border-black
                          flex flex-col sm:flex-row items-center justify-between
                          gap-3 text-black text-xs">
            <p>Registered Non-Profit Trust · All Rights Reserved</p>
            <p className="flex items-center gap-1.5">
              Made with <span className="text-[var(--color-primary)]">♥</span> for Water Conservation
              · <span className="text-[var(--color-primary)] ">Girganga Parivar Trust © 2026</span>
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}