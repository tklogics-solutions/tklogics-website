"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: "ecommerce",
    title: "NexShop E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with real-time inventory, AI recommendations, and sub-second load times handling 50K+ daily users.",
    tags: ["Next.js", "Node.js", "Redis", "AWS"],
    thumbBg: "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(123,97,255,0.1), transparent)",
    accent: "#00D4FF",
    badge: "Web",
  },
  {
    id: "fintech",
    title: "FinFlow Mobile Banking App",
    category: "App Development",
    description: "Cross-platform fintech app with biometric auth, real-time transactions, and PCI-DSS compliant payment flows deployed to 200K+ users.",
    tags: ["Flutter", "Firebase", "Stripe", "Azure"],
    thumbBg: "linear-gradient(135deg, rgba(123,97,255,0.2), rgba(0,212,255,0.1), transparent)",
    accent: "#7B61FF",
    badge: "Mobile",
  },
  {
    id: "qa-suite",
    title: "AutoTest QA Framework",
    category: "QA & Testing",
    description: "End-to-end automation suite covering 3,000+ test cases with CI integration — reducing regression time from 8 hours to 12 minutes.",
    tags: ["Playwright", "Cypress", "Jenkins", "Docker"],
    thumbBg: "linear-gradient(135deg, rgba(0,255,136,0.15), rgba(0,212,255,0.1), transparent)",
    accent: "#00FF88",
    badge: "QA",
  },
  {
    id: "cloud",
    title: "Multi-Cloud Migration",
    category: "Cloud Infrastructure",
    description: "Migrated legacy monolith to multi-cloud Kubernetes clusters across AWS & Azure with zero downtime and 60% infrastructure cost savings.",
    tags: ["Kubernetes", "Terraform", "AWS", "Azure"],
    thumbBg: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(123,97,255,0.15), transparent)",
    accent: "#00D4FF",
    badge: "Cloud",
  },
  {
    id: "devops",
    title: "CI/CD Pipeline Overhaul",
    category: "DevOps & Automation",
    description: "Redesigned deployment pipeline reducing release cycle from 2 weeks to daily shipping with full observability, rollback, and GitOps workflows.",
    tags: ["GitHub Actions", "ArgoCD", "Prometheus", "Grafana"],
    thumbBg: "linear-gradient(135deg, rgba(123,97,255,0.2), rgba(0,255,136,0.1), transparent)",
    accent: "#7B61FF",
    badge: "DevOps",
  },
  {
    id: "saas",
    title: "AnalyticsPro SaaS Dashboard",
    category: "Web Development",
    description: "Real-time analytics platform processing 10M+ events/day with interactive dashboards, custom reporting, and multi-tenant architecture.",
    tags: ["React", "GraphQL", "ClickHouse", "GCP"],
    thumbBg: "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,255,136,0.1), transparent)",
    accent: "#00D4FF",
    badge: "Web",
  },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.09 },
  }),
};

export default function PortfolioPreview() {
  return (
    <section className="py-24 bg-[#0D1220]" aria-labelledby="portfolio-heading">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
              className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.15em] uppercase text-[#00D4FF] mb-4"
            >
              <span className="block w-5 h-px bg-[#00D4FF]" />
              Our Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 }}
              className="font-heading font-bold text-3xl md:text-4xl text-[#F0F4FF] leading-tight tracking-tight"
              id="portfolio-heading"
            >
              Projects That <span className="gradient-text">Define Us</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#1E2D47] text-sm font-semibold text-[#F0F4FF] hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all duration-300 whitespace-nowrap"
            >
              View All Projects
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative bg-[#131929] border border-[#1E2D47] rounded-2xl overflow-hidden hover:border-[#1E2D47]/60 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-300"
              aria-label={p.title}
            >
              {/* Thumbnail */}
              <div
                className="relative h-44 flex items-center justify-center overflow-hidden"
                style={{ background: p.thumbBg, borderBottom: `1px solid ${p.accent}22` }}
              >
                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-40" style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
                  backgroundSize: "20px 20px"
                }} />

                {/* Decorative rings */}
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 rounded-full border-2" style={{ borderColor: `${p.accent}40` }} />
                  <div className="absolute inset-3 rounded-full border" style={{ borderColor: `${p.accent}25` }} />
                  {/* Center icon box */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${p.accent}, #7B61FF)`,
                        boxShadow: `0 0 20px ${p.accent}50`,
                      }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Category badge */}
                <div
                  className="absolute top-4 left-4 px-2.5 py-1 rounded-full font-mono text-[0.65rem] font-medium tracking-wide border"
                  style={{ color: p.accent, borderColor: `${p.accent}40`, background: `${p.accent}12` }}
                >
                  {p.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="font-mono text-[0.65rem] tracking-[0.1em] uppercase mb-2" style={{ color: p.accent }}>
                  {p.category}
                </p>
                <h3 className="font-heading font-bold text-base text-[#F0F4FF] mb-3 leading-snug group-hover:text-[#00D4FF] transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="text-[#8892A4] text-sm leading-[1.7] mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-[0.65rem] font-mono border border-[#1E2D47] bg-[#0D1220] text-[#4A5568]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
