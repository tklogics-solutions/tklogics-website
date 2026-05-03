"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/* ── Particle Canvas ── */
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;
    const COUNT = window.innerWidth < 768 ? 40 : 72;
    const MAX_DIST = 130;
    const mouse = { x: null as number | null, y: null as number | null };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    });
    canvas.addEventListener("mouseleave", () => { mouse.x = null; });

    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.4 + 0.4,
      a: Math.random() * 0.45 + 0.15,
    }));

    function tick() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas!.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas!.height) p.vy *= -1;
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 80) { p.x += (dx / d) * 0.7; p.y += (dy / d) * 0.7; }
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${p.a})`;
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0,212,255,${(1 - d / MAX_DIST) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(tick);
    }
    tick();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
}

/* ── Typewriter ── */
const phrases = [
  "One Line of Code at a Time",
  "Enterprise Web Applications",
  "Scalable Cloud Infrastructure",
  "Automated DevOps Pipelines",
  "Flawless QA & Testing",
];

function Typewriter() {
  const [text, setText] = useState(phrases[0]);
  const [idx, setIdx] = useState(0);
  const [char, setChar] = useState(phrases[0].length);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!del) {
        if (char < phrases[idx].length) { setChar(c => c + 1); setText(phrases[idx].slice(0, char + 1)); }
        else { setTimeout(() => setDel(true), 2200); return; }
      } else {
        if (char > 0) { setChar(c => c - 1); setText(phrases[idx].slice(0, char - 1)); }
        else { setDel(false); const next = (idx + 1) % phrases.length; setIdx(next); setText(""); }
      }
    }, del ? 38 : 68);
    return () => clearTimeout(timeout);
  }, [char, del, idx]);

  return (
    <span className="gradient-text-anim">
      {text}
      <span className="inline-block w-[3px] h-[0.85em] ml-1 align-middle animate-[blink_1s_step-end_infinite]" style={{ background: "#00D4FF" }} />
    </span>
  );
}

/* ── Stats ── */
const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "80+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20" aria-label="Hero">
      {/* Particle bg */}
      <ParticleCanvas />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.035) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 65% 55% at 50% 40%, rgba(0,212,255,0.07) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-12 py-20">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="mb-8">
          <span className="inline-flex items-center gap-2.5 pl-2 pr-4 py-1.5 rounded-full border border-[#00D4FF]/25 bg-[#00D4FF]/5 backdrop-blur-sm font-mono text-xs text-[#8892A4]">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00FF88", boxShadow: "0 0 8px #00FF88" }} />
            Enterprise Technology Partner &nbsp;·&nbsp; <span className="text-[#00D4FF] font-medium">Est. 2019</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-[#F0F4FF] mb-3"
          style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)" }}
        >
          Engineering the Future,
        </motion.h1>

        <motion.div
          {...fadeUp(0.3)}
          className="font-display font-bold leading-tight tracking-[-0.02em] mb-6"
          style={{ fontSize: "clamp(1.6rem, 4.5vw, 3rem)" }}
        >
          <Typewriter />
        </motion.div>

        {/* Description */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-[#8892A4] text-lg leading-[1.8] max-w-[580px] mb-10"
        >
          Tklogics delivers cutting-edge web &amp; app development, rigorous QA,
          scalable cloud infrastructure, and DevOps automation — helping enterprises build
          faster, scale smarter, and ship with confidence.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 mb-16">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-lg text-white font-semibold text-base hover:-translate-y-0.5 transition-all duration-300"
            style={{ background: "linear-gradient(135deg,#00D4FF,#7B61FF)", boxShadow: "0 0 30px rgba(0,212,255,0.3)" }}
          >
            Start a Project
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 rounded-lg border border-[#1E2D47] text-[#F0F4FF] font-semibold text-base hover:border-[#00D4FF] hover:text-[#00D4FF] hover:-translate-y-0.5 transition-all duration-300"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-wrap gap-10 pt-8"
          style={{ borderTop: "1px solid rgba(30,45,71,0.6)" }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display font-extrabold text-3xl text-[#F0F4FF] leading-none mb-1">{s.value}</div>
              <div className="font-mono text-xs uppercase tracking-[0.06em] text-[#4A5568]">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 font-mono text-[0.65rem] tracking-widest uppercase text-[#8892A4]" aria-hidden="true">
        <span className="w-px h-10 animate-[float_2s_ease-in-out_infinite]" style={{ background: "linear-gradient(to bottom, #00D4FF, transparent)" }} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
