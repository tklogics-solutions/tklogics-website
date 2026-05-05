"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = ["Web Development", "App Development", "QA & Testing", "Cloud Infrastructure", "DevOps & Automation", "Other / Not sure"];

const contactInfo = [
  {
    label: "Email Us",
    value: "info@tklogics.com",
    sub: "We reply within 4 hours",
    href: "mailto:info@tklogics.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Call Us",
    value: "+1 (555) 123-4567",
    sub: "Mon–Fri, 9am–6pm EST",
    href: "tel:+15551234567",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Schedule a Call",
    value: "Pick a time that works",
    sub: "Free 30-min discovery call",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = "w-full bg-[#131929] border border-[#1E2D47] rounded-lg px-4 py-3 text-sm text-[#F0F4FF] placeholder:text-[#4A5568] focus:outline-none focus:border-[#00D4FF] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] transition-all duration-200 font-body";

  return (
    <div className="bg-[#080B12] min-h-screen pt-20">

      {/* ── Hero ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,212,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.035) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 55% 50% at 50% 0%,rgba(0,212,255,0.08),transparent 70%)" }} />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}
            className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[.15em] uppercase text-[#00D4FF] mb-5">
            <span className="block w-5 h-px bg-[#00D4FF]" />Get in Touch<span className="block w-5 h-px bg-[#00D4FF]" />
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease: [0.16, 1, 0.3, 1], delay: .1 }}
            className="font-display font-extrabold text-[#F0F4FF] leading-tight tracking-[-0.03em] mb-5"
            style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)" }}>
            Let's Build <span className="gradient-text">Something Great</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .6, delay: .25 }}
            className="text-[#8892A4] text-lg leading-relaxed max-w-xl mx-auto">
            Tell us about your project. We'll get back to you within 4 hours with a tailored response.
          </motion.p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-start">

            {/* ── Form ── */}
            <motion.div initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .75, ease: [0.16, 1, 0.3, 1], delay: .2 }}>
              <div className="bg-[#0D1220] border border-[#1E2D47] rounded-2xl p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right,transparent,#00D4FF60,transparent)" }} />

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .5, ease: [0.16, 1, 0.3, 1] }}
                    className="py-12 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{ background: "linear-gradient(135deg,#00D4FF,#7B61FF)", boxShadow: "0 0 30px rgba(0,212,255,0.4)" }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-[#F0F4FF] mb-3">Message Received!</h3>
                    <p className="text-[#8892A4] leading-relaxed max-w-sm mx-auto mb-6">
                      Thanks for reaching out. One of our senior engineers will be in touch within 4 hours.
                    </p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", service: "", budget: "", message: "" }); }}
                      className="font-mono text-xs tracking-wide text-[#00D4FF] hover:underline">
                      Send another message →
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-heading font-bold text-xl text-[#F0F4FF] mb-6">Start a Project</h2>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block font-mono text-xs tracking-[.08em] uppercase text-[#4A5568] mb-2">Full Name *</label>
                        <input id="name" name="name" type="text" required placeholder="John Smith"
                          value={form.name} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="email" className="block font-mono text-xs tracking-[.08em] uppercase text-[#4A5568] mb-2">Work Email *</label>
                        <input id="email" name="email" type="email" required placeholder="john@company.com"
                          value={form.email} onChange={handleChange} className={inputClass} />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block font-mono text-xs tracking-[.08em] uppercase text-[#4A5568] mb-2">Company / Organisation</label>
                      <input id="company" name="company" type="text" placeholder="Acme Corp"
                        value={form.company} onChange={handleChange} className={inputClass} />
                    </div>

                    {/* Service + Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="service" className="block font-mono text-xs tracking-[.08em] uppercase text-[#4A5568] mb-2">Service Needed *</label>
                        <select id="service" name="service" required value={form.service} onChange={handleChange}
                          className={`${inputClass} cursor-pointer`}>
                          <option value="" disabled>Select a service</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block font-mono text-xs tracking-[.08em] uppercase text-[#4A5568] mb-2">Budget Range</label>
                        <select id="budget" name="budget" value={form.budget} onChange={handleChange}
                          className={`${inputClass} cursor-pointer`}>
                          <option value="">Select a range</option>
                          {["< $10K", "$10K – $25K", "$25K – $50K", "$50K – $100K", "$100K+", "Let's discuss"].map(b => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block font-mono text-xs tracking-[.08em] uppercase text-[#4A5568] mb-2">Project Details *</label>
                      <textarea id="message" name="message" required rows={5}
                        placeholder="Describe your project, goals, timeline, and any specific challenges you're facing..."
                        value={form.message} onChange={handleChange}
                        className={`${inputClass} resize-none`} />
                    </div>

                    {/* Submit */}
                    <button type="submit" disabled={loading}
                      className="w-full py-4 rounded-lg text-white font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      style={{ background: "linear-gradient(135deg,#00D4FF,#7B61FF)", boxShadow: "0 0 30px rgba(0,212,255,0.3)" }}>
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : "Send Message →"}
                    </button>

                    <p className="text-[#4A5568] text-xs text-center font-mono">
                      We typically respond within 4 hours · No spam, ever
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* ── Right: Info + Cards ── */}
            <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .75, ease: [0.16, 1, 0.3, 1], delay: .3 }}
              className="space-y-5">

              {/* Availability Badge */}
              <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-[#00FF88]/30 bg-[#00FF88]/5">
                <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse flex-shrink-0 shadow-[0_0_8px_#00FF88]" />
                <span className="font-mono text-sm font-medium text-[#00FF88]">Currently accepting new projects</span>
              </div>

              {/* Contact Cards */}
              {contactInfo.map((c, i) => (
                <motion.a key={c.label} href={c.href}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: .6, ease: [0.16, 1, 0.3, 1], delay: .35 + i * .08 }}
                  whileHover={{ y: -3 }}
                  className="group flex items-start gap-4 p-5 rounded-xl bg-[#0D1220] border border-[#1E2D47] hover:border-[#00D4FF]/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.08)] transition-all duration-300 block">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#00D4FF] border border-[#1E2D47] bg-[#131929] group-hover:border-[#00D4FF]/40 group-hover:bg-[#00D4FF]/8 transition-all duration-200">
                    {c.icon}
                  </div>
                  <div>
                    <p className="font-mono text-xs tracking-[.08em] uppercase text-[#4A5568] mb-0.5">{c.label}</p>
                    <p className="font-heading font-semibold text-sm text-[#F0F4FF] group-hover:text-[#00D4FF] transition-colors duration-200">{c.value}</p>
                    <p className="font-mono text-xs text-[#4A5568] mt-0.5">{c.sub}</p>
                  </div>
                </motion.a>
              ))}

              {/* Process sneak-peek */}
              <div className="p-6 rounded-xl bg-[#0D1220] border border-[#1E2D47]">
                <p className="font-mono text-xs tracking-[.1em] uppercase text-[#4A5568] mb-4">What Happens Next</p>
                {[
                  { step: "01", label: "We review your brief", time: "Within 4h" },
                  { step: "02", label: "Discovery call scheduled", time: "Day 1" },
                  { step: "03", label: "Proposal & timeline sent", time: "Day 2–3" },
                  { step: "04", label: "Project kicks off", time: "Week 1" },
                ].map((s, i) => (
                  <div key={s.step} className={`flex items-start gap-3 ${i < 3 ? "mb-4" : ""}`}>
                    <div className="w-6 h-6 rounded-full border border-[#1E2D47] bg-[#131929] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-mono text-[0.6rem] text-[#00D4FF]">{s.step}</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-sm text-[#8892A4]">{s.label}</span>
                    </div>
                    <span className="font-mono text-[0.65rem] text-[#4A5568] whitespace-nowrap">{s.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
