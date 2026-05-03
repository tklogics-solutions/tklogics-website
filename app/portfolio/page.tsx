"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "nexshop", title: "NexShop E-Commerce Platform", category: "Web", client: "NexShop Inc.",
    description: "Full-stack e-commerce solution with real-time inventory, AI-powered recommendations, and sub-second load times handling 50K+ daily active users.",
    outcome: "340% conversion increase, 0.8s avg load time",
    tags: ["Next.js","Node.js","Redis","AWS","PostgreSQL"],
    accent: "#00D4FF",
    thumbBg: "linear-gradient(135deg,rgba(0,212,255,0.22),rgba(123,97,255,0.12),transparent)",
  },
  {
    id: "finflow", title: "FinFlow Mobile Banking", category: "Mobile", client: "FinFlow Ltd.",
    description: "Cross-platform fintech app with biometric auth, real-time transactions, and PCI-DSS compliant payment flows deployed to 200K+ users globally.",
    outcome: "200K+ users, 4.8★ App Store rating",
    tags: ["Flutter","Firebase","Stripe","Azure"],
    accent: "#7B61FF",
    thumbBg: "linear-gradient(135deg,rgba(123,97,255,0.22),rgba(0,212,255,0.12),transparent)",
  },
  {
    id: "autotest", title: "AutoTest QA Framework", category: "QA", client: "Veridian Systems",
    description: "End-to-end automation suite covering 3,000+ test cases with full CI integration — reducing regression time from 8 hours to 12 minutes.",
    outcome: "97% bug detection rate, 40× faster regression",
    tags: ["Playwright","Cypress","Jenkins","Docker"],
    accent: "#00FF88",
    thumbBg: "linear-gradient(135deg,rgba(0,255,136,0.18),rgba(0,212,255,0.10),transparent)",
  },
  {
    id: "cloudmig", title: "Multi-Cloud Migration", category: "Cloud", client: "Nexus Logistics",
    description: "Migrated a legacy monolith to multi-cloud Kubernetes clusters across AWS & Azure with zero downtime and 60% infrastructure cost savings.",
    outcome: "60% cost reduction, zero downtime migration",
    tags: ["Kubernetes","Terraform","AWS","Azure","Helm"],
    accent: "#00D4FF",
    thumbBg: "linear-gradient(135deg,rgba(0,212,255,0.18),rgba(123,97,255,0.14),transparent)",
  },
  {
    id: "cicd", title: "CI/CD Pipeline Overhaul", category: "DevOps", client: "Stackr Technologies",
    description: "Redesigned deployment pipeline reducing release cycle from 2 weeks to daily shipping with full observability, GitOps, and one-click rollback.",
    outcome: "14× faster releases, 99.97% deployment success",
    tags: ["GitHub Actions","ArgoCD","Prometheus","Grafana"],
    accent: "#7B61FF",
    thumbBg: "linear-gradient(135deg,rgba(123,97,255,0.22),rgba(0,255,136,0.10),transparent)",
  },
  {
    id: "analytics", title: "AnalyticsPro SaaS Dashboard", category: "Web", client: "DataPulse Co.",
    description: "Real-time analytics platform processing 10M+ events/day with interactive dashboards, custom reporting engine, and multi-tenant architecture.",
    outcome: "10M+ events/day, 3 enterprise clients onboarded",
    tags: ["React","GraphQL","ClickHouse","GCP","TypeScript"],
    accent: "#00D4FF",
    thumbBg: "linear-gradient(135deg,rgba(0,212,255,0.18),rgba(0,255,136,0.10),transparent)",
  },
  {
    id: "healthapp", title: "MedTrack Patient App", category: "Mobile", client: "HealthFirst",
    description: "HIPAA-compliant mobile app for patient health tracking, appointment scheduling, and real-time doctor communication for a network of 80 clinics.",
    outcome: "80 clinics, 15K patients, HIPAA compliant",
    tags: ["React Native","Node.js","AWS","PostgreSQL"],
    accent: "#7B61FF",
    thumbBg: "linear-gradient(135deg,rgba(123,97,255,0.18),rgba(0,212,255,0.10),transparent)",
  },
  {
    id: "iotplatform", title: "IoT Infrastructure Platform", category: "Cloud", client: "SmartOps",
    description: "Cloud-native IoT data ingestion and processing platform handling 50M+ sensor readings per day with sub-100ms alerting and full device management.",
    outcome: "50M events/day, <100ms alert latency",
    tags: ["AWS IoT","Kafka","InfluxDB","Kubernetes","Terraform"],
    accent: "#00FF88",
    thumbBg: "linear-gradient(135deg,rgba(0,255,136,0.16),rgba(0,212,255,0.10),transparent)",
  },
  {
    id: "elearn", title: "EduCore Learning Platform", category: "Web", client: "LearnForward",
    description: "Full-featured LMS with live video classes, interactive quizzes, progress tracking, and a custom course builder used by 25K+ learners worldwide.",
    outcome: "25K+ learners, 95% course completion rate",
    tags: ["Next.js","WebRTC","PostgreSQL","Redis","Vercel"],
    accent: "#00D4FF",
    thumbBg: "linear-gradient(135deg,rgba(0,212,255,0.18),rgba(123,97,255,0.10),transparent)",
  },
];

const filters = ["All", "Web", "Mobile", "QA", "Cloud", "DevOps"];

const cardVariants = {
  hidden:  { opacity: 0, y: 28, scale: 0.97 },
  visible: (i: number) => ({ opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16,1,0.3,1], delay: i * 0.07 } }),
  exit:    { opacity: 0, scale: 0.95, transition: { duration: 0.25 } },
};

export default function PortfolioPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <div className="bg-[#080B12] min-h-screen pt-20">

      {/* ── Hero ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:"linear-gradient(rgba(0,212,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.035) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse 55% 50% at 50% 0%,rgba(123,97,255,0.1),transparent 70%)" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.6}}
            className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[.15em] uppercase text-[#00D4FF] mb-5">
            <span className="block w-5 h-px bg-[#00D4FF]"/>Our Work<span className="block w-5 h-px bg-[#00D4FF]"/>
          </motion.p>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.75,ease:[0.16,1,0.3,1],delay:.1}}
            className="font-display font-extrabold text-[#F0F4FF] leading-tight tracking-[-0.03em] mb-5"
            style={{fontSize:"clamp(2.2rem,5vw,3.5rem)"}}>
            Projects That <span className="gradient-text">Define Us</span>
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.6,delay:.25}}
            className="text-[#8892A4] text-lg leading-relaxed max-w-xl mx-auto">
            Real work, real results. Explore our portfolio of enterprise-grade solutions delivered across industries.
          </motion.p>
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-12">
        <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.3}}
          className="flex flex-wrap gap-2 justify-center">
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full font-mono text-xs font-medium tracking-wide transition-all duration-250 border ${
                active === f
                  ? "border-[#00D4FF] text-[#00D4FF] bg-[#00D4FF]/10 shadow-[0_0_16px_rgba(0,212,255,0.2)]"
                  : "border-[#1E2D47] text-[#8892A4] hover:border-[#00D4FF]/50 hover:text-[#F0F4FF]"
              }`}>
              {f}
            </button>
          ))}
        </motion.div>
      </div>

      {/* ── Grid ── */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.article key={p.id} custom={i} variants={cardVariants}
                  initial="hidden" animate="visible" exit="exit" layout
                  whileHover={{ y: -6, transition: { duration: .3 } }}
                  className="group relative bg-[#0D1220] border border-[#1E2D47] rounded-2xl overflow-hidden hover:border-[#1E2D47]/60 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-300">

                  {/* Thumbnail */}
                  <div
                    className="relative h-48 flex items-center justify-center overflow-hidden"
                    style={{ background: p.thumbBg, borderBottom:`1px solid ${p.accent}22` }}
                  >
                    <div className="absolute inset-0 opacity-40" style={{backgroundImage:"linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",backgroundSize:"20px 20px"}}/>
                    {/* Decorative rings + icon */}
                    <div className="relative w-24 h-24">
                      <div className="absolute inset-0 rounded-full border-2" style={{borderColor:`${p.accent}50`}}/>
                      <div className="absolute inset-3 rounded-full border" style={{borderColor:`${p.accent}30`}}/>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{background:`linear-gradient(135deg,${p.accent},#7B61FF)`,boxShadow:`0 0 20px ${p.accent}50`}}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full font-mono text-[0.65rem] font-medium tracking-wide border"
                      style={{color:p.accent,borderColor:`${p.accent}40`,background:`${p.accent}12`}}>
                      {p.category}
                    </div>
                    {/* Client */}
                    <div className="absolute top-4 right-4 px-2.5 py-1 rounded font-mono text-[0.65rem] text-[#4A5568] border border-[#1E2D47] bg-[#080B12]/60">
                      {p.client}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-base text-[#F0F4FF] mb-2 leading-snug group-hover:text-[#00D4FF] transition-colors duration-200">
                      {p.title}
                    </h3>
                    <p className="text-[#8892A4] text-sm leading-[1.7] mb-4">{p.description}</p>

                    {/* Outcome */}
                    <div className="flex items-center gap-2 mb-4 p-3 rounded-lg border border-[#1E2D47] bg-[#131929]">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 flex-shrink-0" style={{color:p.accent}}>
                        <polyline points="1 10 4 7 7 10 11 4 15 7"/>
                      </svg>
                      <span className="font-mono text-[0.65rem] tracking-wide text-[#8892A4]">{p.outcome}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map(t => (
                        <span key={t} className="px-2 py-0.5 rounded font-mono text-[0.65rem] border border-[#1E2D47] bg-[#131929] text-[#4A5568]">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#4A5568] font-mono text-sm">No projects found in this category.</div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <motion.div initial={{opacity:0,y:32}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            transition={{duration:.75,ease:[0.16,1,0.3,1]}}
            className="rounded-2xl border border-[#1E2D47] p-12 text-center"
            style={{background:"linear-gradient(135deg,rgba(0,212,255,0.06),rgba(123,97,255,0.06))"}}>
            <h2 className="font-heading font-bold text-[#F0F4FF] text-3xl mb-4">
              Ready to be our next success story?
            </h2>
            <p className="text-[#8892A4] text-lg max-w-md mx-auto mb-8">
              Every great project starts with a conversation. Let's talk about yours.
            </p>
            <a href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{background:"linear-gradient(135deg,#00D4FF,#7B61FF)",boxShadow:"0 0 30px rgba(0,212,255,0.3)"}}>
              Start a Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
