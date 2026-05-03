"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const LogoIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
    <line x1="12" y1="22" x2="12" y2="15.5" />
    <polyline points="22 8.5 12 15.5 2 8.5" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300"
        style={scrolled ? {
          background: "rgba(8,11,18,0.88)",
          backdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(30,45,71,0.6)",
          boxShadow: "0 4px 40px rgba(0,0,0,0.4)",
        } : {}}
      >
        <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Tklogics">
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

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-9">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors duration-200 pb-0.5 group ${isActive ? "text-[#F0F4FF]" : "text-[#8892A4] hover:text-[#F0F4FF]"
                      }`}
                  >
                    {link.label}
                    {/* Active / hover underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-px transition-all duration-300 ease-out ${isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      style={{ background: "linear-gradient(135deg,#00D4FF,#7B61FF)" }}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg text-white text-sm font-semibold hover:-translate-y-0.5 transition-all duration-300"
              style={{ background: "linear-gradient(135deg,#00D4FF,#7B61FF)", boxShadow: "0 0 20px rgba(0,212,255,0.25)" }}
            >
              Get Started
            </Link>
          </div>

          {/* Hamburger */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col gap-[5px] p-2 z-[60]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-[22px] h-[2px] bg-[#F0F4FF] transition-transform duration-300 origin-center ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block w-[22px] h-[2px] bg-[#F0F4FF] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-[22px] h-[2px] bg-[#F0F4FF] transition-transform duration-300 origin-center ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10"
            style={{ background: "rgba(8,11,18,0.97)", backdropFilter: "blur(24px)" }}
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <Link
                  href={link.href}
                  className="font-display font-bold text-4xl text-[#F0F4FF] hover:text-[#00D4FF] transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <Link
                href="/contact"
                className="mt-4 px-8 py-3.5 rounded-lg text-white font-semibold text-lg"
                style={{ background: "linear-gradient(135deg,#00D4FF,#7B61FF)", boxShadow: "0 0 30px rgba(0,212,255,0.3)" }}
                onClick={() => setMenuOpen(false)}
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
