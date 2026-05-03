"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: "web", num: "01", title: "Web Development", accentColor: "#00D4FF",
    tagline: "Enterprise-grade web applications, built to scale.",
    description: "From marketing sites to complex SaaS platforms, we engineer fast, accessible web experiences architected for long-term maintainability.",
    features: ["Custom React / Next.js applications","REST & GraphQL API development","CMS integration (Contentful, Sanity)","Performance & Core Web Vitals","Authentication & RBAC","E-commerce & payment integration"],
    stack: ["React","Next.js","TypeScript","Node.js","PostgreSQL","Redis","AWS"],
    gradient: "from-[#00D4FF]/15 to-[#7B61FF]/8",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/><line x1="2" y1="10" x2="22" y2="10"/></svg>,
  },
  {
    id: "app", num: "02", title: "App Development", accentColor: "#7B61FF",
    tagline: "Cross-platform mobile apps with native-grade UX.",
    description: "iOS and Android apps using React Native & Flutter — smooth 60fps, offline-first, with native device integrations and scalable backends.",
    features: ["React Native & Flutter apps","Native iOS (Swift) & Android (Kotlin)","Offline-first architecture","Push notifications & background tasks","App Store & Play Store submission","Biometric auth & device security"],
    stack: ["React Native","Flutter","Swift","Kotlin","Firebase","Supabase","Expo","Stripe"],
    gradient: "from-[#7B61FF]/15 to-[#00D4FF]/8",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  },
  {
    id: "qa", num: "03", title: "QA & Testing", accentColor: "#00FF88",
    tagline: "Ship with confidence. Break nothing in production.",
    description: "Manual and automation testing embedded into your team — designed to catch critical bugs before they reach users, at any scale, in any CI pipeline.",
    features: ["Manual functional & exploratory testing","End-to-end automation (Cypress, Playwright)","API testing & contract validation","Performance & load testing (k6, JMeter)","Mobile testing on real devices","CI/CD quality gates & dashboards"],
    stack: ["Selenium","Cypress","Playwright","Postman","k6","JMeter","TestRail","GitHub Actions"],
    gradient: "from-[#00FF88]/12 to-[#00D4FF]/8",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
  },
  {
    id: "cloud", num: "04", title: "Cloud Infrastructure", accentColor: "#00D4FF",
    tagline: "Secure, scalable multi-cloud at any scale.",
    description: "Design, migrate, and operate cloud environments across AWS, Azure, GCP, and Hetzner — security-first, cost-optimised, zero-downtime reliable.",
    features: ["Multi-cloud architecture & migration","Kubernetes cluster setup & management","VPC, IAM, security & compliance","Cost optimization & FinOps reporting","Disaster recovery & backups","24/7 monitoring & alerting"],
    stack: ["AWS","Azure","GCP","Hetzner","Kubernetes","Terraform","Ansible","Datadog"],
    gradient: "from-[#00D4FF]/15 to-[#7B61FF]/8",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
  },
  {
    id: "devops", num: "05", title: "DevOps & Automation", accentColor: "#7B61FF",
    tagline: "Automate everything. Ship daily. Sleep soundly.",
    description: "Transform slow manual releases into fully automated pipelines — deploy multiple times per day with full observability, rollback, and GitOps workflows.",
    features: ["CI/CD pipelines (GitHub Actions, Jenkins)","Infrastructure as Code (Terraform, Pulumi)","Container orchestration (Docker, Kubernetes)","GitOps with ArgoCD & Flux","Observability (Prometheus, Grafana, Loki)","Secrets management (Vault, AWS SM)"],
    stack: ["Docker","Kubernetes","Terraform","GitHub Actions","ArgoCD","Prometheus","Grafana","Vault"],
    gradient: "from-[#7B61FF]/15 to-[#00FF88]/8",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#080B12] min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:"linear-gradient(rgba(0,212,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.035) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse 60% 50% at 50% 0%,rgba(0,212,255,0.08),transparent 70%)" }} />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.6,ease:[0.16,1,0.3,1]}}
            className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[.15em] uppercase text-[#00D4FF] mb-5">
            <span className="block w-5 h-px bg-[#00D4FF]"/>Our Services<span className="block w-5 h-px bg-[#00D4FF]"/>
          </motion.p>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.75,ease:[0.16,1,0.3,1],delay:.1}}
            className="font-display font-extrabold text-[#F0F4FF] leading-tight tracking-[-0.03em] mb-5"
            style={{fontSize:"clamp(2.2rem,5vw,3.5rem)"}}>
            Everything You Need to{" "}<span className="gradient-text">Ship Great Software</span>
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.6,delay:.25}}
            className="text-[#8892A4] text-lg leading-relaxed max-w-2xl mx-auto">
            Five specialized services, one unified team. We handle every layer of your technology stack.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 space-y-8">
          {services.map((s) => (
            <motion.div key={s.id} id={s.id}
              initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}}
              transition={{duration:.7,ease:[0.16,1,0.3,1]}}
              className="relative bg-[#0D1220] border border-[#1E2D47] rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px" style={{background:`linear-gradient(to right,transparent,${s.accentColor}60,transparent)`}}/>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left */}
                <div className="p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#1E2D47]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{background:`linear-gradient(135deg,${s.accentColor},#7B61FF)`}}>
                      {s.icon}
                    </div>
                    <div>
                      <p className="font-mono text-xs tracking-[.1em] uppercase mb-1" style={{color:s.accentColor}}>Service {s.num}</p>
                      <h2 className="font-heading font-bold text-2xl text-[#F0F4FF]">{s.title}</h2>
                    </div>
                  </div>
                  <p className="font-heading font-semibold text-lg text-[#F0F4FF] mb-3">{s.tagline}</p>
                  <p className="text-[#8892A4] leading-relaxed mb-8">{s.description}</p>
                  <p className="font-mono text-xs tracking-[.1em] uppercase text-[#4A5568] mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {s.stack.map(t=>(
                      <span key={t} className="px-3 py-1 rounded font-mono text-xs border border-[#1E2D47] bg-[#131929] text-[#8892A4]">{t}</span>
                    ))}
                  </div>
                </div>
                {/* Right */}
                <div className={`p-10 lg:p-12 bg-gradient-to-br ${s.gradient}`}>
                  <p className="font-mono text-xs tracking-[.1em] uppercase text-[#4A5568] mb-5">What's Included</p>
                  <ul className="space-y-4 mb-8">
                    {s.features.map(f=>(
                      <li key={f} className="flex items-start gap-3">
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{color:s.accentColor}}>
                          <polyline points="3 8 6.5 11.5 13 4"/>
                        </svg>
                        <span className="text-[#8892A4] text-sm leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                    style={{background:`linear-gradient(135deg,${s.accentColor},#7B61FF)`,boxShadow:`0 0 24px ${s.accentColor}30`}}>
                    Discuss This Service →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <motion.div initial={{opacity:0,y:32}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            transition={{duration:.75,ease:[0.16,1,0.3,1]}}
            className="rounded-2xl border border-[#1E2D47] p-12 text-center"
            style={{background:"linear-gradient(135deg,rgba(0,212,255,0.06),rgba(123,97,255,0.06))"}}>
            <h2 className="font-heading font-bold text-[#F0F4FF] text-3xl mb-4">Not sure which service you need?</h2>
            <p className="text-[#8892A4] text-lg max-w-md mx-auto mb-8">Book a free 30-minute call. We'll scope your project and recommend the right approach.</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{background:"linear-gradient(135deg,#00D4FF,#7B61FF)",boxShadow:"0 0 30px rgba(0,212,255,0.3)"}}>
              Book a Free Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
