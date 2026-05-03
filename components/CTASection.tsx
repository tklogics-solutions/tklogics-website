"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { value: "50K+",  label: "Lines of Code Shipped" },
  { value: "15+",   label: "Cloud Technologies" },
  { value: "98%",   label: "On-Time Delivery" },
  { value: "24/7",  label: "Support & Monitoring" },
];

export default function CTASection() {
  return (
    <>
      {/* ── Stats Band ── */}
      <section className="bg-bg border-y border-border py-12" aria-label="Company statistics">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display font-extrabold gradient-text leading-none mb-2"
                  style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}>
                  {s.value}
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.08em] text-text-secondary">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="py-24 bg-bg" aria-label="Call to action">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative rounded-3xl border border-border overflow-hidden px-8 py-20 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(0,212,255,0.07) 0%, rgba(123,97,255,0.07) 100%)",
            }}
          >
            {/* Radial glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(123,97,255,0.12), transparent 70%)" }}
              aria-hidden="true"
            />

            {/* Grid lines */}
            <div
              className="absolute inset-0 pointer-events-none opacity-50"
              style={{
                backgroundImage: "linear-gradient(rgba(123,97,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(123,97,255,0.05) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl mx-auto">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.15em] uppercase text-cyan mb-5"
              >
                <span className="block w-5 h-px bg-cyan" />
                Let's Build Together
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }}
                className="font-heading font-bold text-text leading-tight tracking-tight mb-5"
                style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)" }}
              >
                Ready to Build <span className="gradient-text">Something Great?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-text-secondary text-lg leading-relaxed mb-10 max-w-md mx-auto"
              >
                Turn your vision into a product that scales. Book a free 30-minute discovery call with our senior engineers.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-lg bg-grad-primary text-white font-semibold shadow-glow-cyan hover:shadow-[0_0_48px_rgba(0,212,255,0.5)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Start a Free Consultation
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 rounded-lg border border-border text-text font-semibold hover:border-cyan hover:text-cyan hover:shadow-glow-sm hover:-translate-y-0.5 transition-all duration-300"
                >
                  See Our Portfolio
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
