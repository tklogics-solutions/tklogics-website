"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeader } from "./ui/Primitives";

const services = [
  {
    id: "web",
    title: "Web Development",
    description: "Performant, scalable web applications built with modern frameworks. From landing pages to complex enterprise portals — pixel-perfect and production-ready.",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL"],
    iconStyle: { background: "linear-gradient(135deg,#00D4FF,#7B61FF)", boxShadow: "0 0 16px rgba(0,212,255,0.25)" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
        <rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/><line x1="2" y1="10" x2="22" y2="10"/>
      </svg>
    ),
  },
  {
    id: "app",
    title: "App Development",
    description: "Cross-platform mobile applications delivering native-grade performance and seamless UX on iOS and Android — built to scale with your business.",
    tags: ["React Native", "Flutter", "Swift", "Kotlin"],
    iconStyle: { background: "linear-gradient(135deg,#7B61FF,#00D4FF)", boxShadow: "0 0 16px rgba(123,97,255,0.25)" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    id: "qa",
    title: "QA & Testing",
    description: "Manual and automation testing that catches bugs before your users do. Full-cycle QA from test planning to CI-integrated regression suites.",
    tags: ["Selenium", "Cypress", "Playwright", "Postman"],
    iconStyle: { background: "linear-gradient(135deg,#00FF88,#00D4FF)", boxShadow: "0 0 16px rgba(0,255,136,0.25)" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    description: "Multi-cloud architecture design, migration, and managed operations across AWS, Azure, GCP, and Hetzner — secure, resilient, and cost-optimised.",
    tags: ["AWS", "Azure", "GCP", "Hetzner"],
    iconStyle: { background: "linear-gradient(135deg,#00D4FF,#7B61FF)", boxShadow: "0 0 16px rgba(0,212,255,0.25)" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
  },
  {
    id: "devops",
    title: "DevOps & Automation",
    description: "CI/CD pipelines, infrastructure as code, container orchestration, and monitoring stacks that automate your delivery and keep systems healthy 24/7.",
    tags: ["Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    iconStyle: { background: "linear-gradient(135deg,#7B61FF,#00FF88)", boxShadow: "0 0 16px rgba(123,97,255,0.25)" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
        <polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/>
        <polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/>
      </svg>
    ),
  },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.1 },
  }),
};

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-[#080B12]" aria-labelledby="services-heading">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <SectionHeader
          label="What We Do"
          title={<>End-to-End <span className="gradient-text">Technology Services</span></>}
          description="From ideation to deployment and beyond — we cover every layer of your technology stack with deep expertise and enterprise-grade standards."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative bg-[#0D1220] border border-[#1E2D47] rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:border-[#00D4FF]/35 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              aria-label={s.title}
            >
              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "linear-gradient(135deg,rgba(0,212,255,0.05),rgba(123,97,255,0.05))" }}
              />

              {/* Icon — inline style so gradient always renders */}
              <div
                className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                style={s.iconStyle}
              >
                {s.icon}
              </div>

              <h3 className="relative z-10 font-heading font-bold text-lg text-[#F0F4FF] mb-3">{s.title}</h3>
              <p  className="relative z-10 text-[#8892A4] text-sm leading-[1.75] mb-4">{s.description}</p>

              {/* Tech tags */}
              <div className="relative z-10 flex flex-wrap gap-2 mb-5">
                {s.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded text-[0.7rem] font-mono border border-[#1E2D47] bg-[#131929] text-[#8892A4]">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/services#${s.id}`}
                className="relative z-10 inline-flex items-center gap-1.5 text-xs font-semibold text-[#00D4FF] group-hover:gap-3 transition-all duration-200"
                aria-label={`Learn more about ${s.title}`}
              >
                Learn More
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                </svg>
              </Link>
            </motion.article>
          ))}

          {/* CTA Card */}
          <motion.div
            custom={5}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="border border-dashed border-[#1E2D47] rounded-2xl p-8 flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg,rgba(0,212,255,0.06),rgba(123,97,255,0.06))" }}
          >
            <div>
              <h3 className="font-heading font-bold text-lg text-[#F0F4FF] mb-3">Need a Custom Solution?</h3>
              <p className="text-[#8892A4] text-sm leading-relaxed">We tailor our expertise to your unique challenges. Let&apos;s scope your project together.</p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-lg text-white text-sm font-semibold hover:-translate-y-0.5 transition-all duration-300"
              style={{ background: "linear-gradient(135deg,#00D4FF,#7B61FF)", boxShadow: "0 0 20px rgba(0,212,255,0.25)" }}
            >
              Talk to an Expert
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
