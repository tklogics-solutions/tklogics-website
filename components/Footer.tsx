"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const LogoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
    <line x1="12" y1="22" x2="12" y2="15.5" />
    <polyline points="22 8.5 12 15.5 2 8.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);
const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const socials = [
  { label: "LinkedIn", icon: <LinkedInIcon />, href: "#" },
  { label: "GitHub", icon: <GitHubIcon />, href: "#" },
  { label: "Twitter", icon: <TwitterIcon />, href: "#" },
];

const services = ["Web Development", "App Development", "QA & Testing", "Cloud Infrastructure", "DevOps & Automation"];
const company = ["Portfolio", "Contact", "Blog", "Careers", "Privacy Policy"];

export default function Footer() {
  return (
    <footer className="bg-[#0D1220] border-t border-[#1E2D47]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4" aria-label="Tklogics">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#00D4FF,#7B61FF)", boxShadow: "0 0 16px rgba(0,212,255,0.2)" }}
              >
                <LogoIcon />
              </div>
              <span className="font-display font-bold text-[1.1rem] text-[#F0F4FF]">
                Tk<span className="text-[#00D4FF]">logics</span>
              </span>
            </Link>
            <p className="text-[#8892A4] text-sm leading-relaxed max-w-[260px] mb-6">
              Enterprise software solutions for companies that refuse to compromise. Build fast. Scale smart.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ y: -2 }}
                  className="w-9 h-9 rounded-lg border border-[#1E2D47] flex items-center justify-center text-[#8892A4] hover:border-[#00D4FF] hover:text-[#00D4FF] hover:bg-[#00D4FF]/5 transition-all duration-200"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-[#4A5568] mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-[#8892A4] hover:text-[#00D4FF] transition-colors duration-200">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-[#4A5568] mb-4">Company</h4>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c}>
                  <Link href="#" className="text-sm text-[#8892A4] hover:text-[#00D4FF] transition-colors duration-200">{c}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-[#4A5568] mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li><a href="mailto:info@tklogics.com" className="text-sm text-[#8892A4] hover:text-[#00D4FF] transition-colors duration-200">info@tklogics.com</a></li>
              <li><a href="tel:+15551234567" className="text-sm text-[#8892A4] hover:text-[#00D4FF] transition-colors duration-200">+1 (555) 123-4567</a></li>
              <li><Link href="/contact" className="text-sm text-[#8892A4] hover:text-[#00D4FF] transition-colors duration-200">Schedule a Call</Link></li>
            </ul>
            <div className="mt-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#00FF88]/30 bg-[#00FF88]/5 font-mono text-xs text-[#00FF88]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-pulse" />
              Available for Projects
            </div>
          </div>
        </div>

        <div className="border-t border-[#1E2D47] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#4A5568]">
            © 2025 <Link href="/" className="text-[#00D4FF] hover:underline">Tklogics</Link>. All rights reserved.
          </p>
          <p className="text-xs text-[#4A5568]">
            Crafted with precision &amp; <span className="text-[#FF4C6A]">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
