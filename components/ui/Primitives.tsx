"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}

export function SectionHeader({ label, title, description, align = "center" }: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-16 max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}
    >
      <p className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.15em] uppercase text-[#00D4FF] mb-4">
        <span className="block w-5 h-px bg-[#00D4FF]" />
        {label}
      </p>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#F0F4FF] leading-tight tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-[#8892A4] text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({ children, variant = "primary", size = "md", href, className = "", onClick }: ButtonProps) {
  const sizes = { sm: "px-5 py-2 text-sm", md: "px-7 py-3 text-sm", lg: "px-9 py-4 text-base" };
  const base = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-wide transition-all duration-300 ${sizes[size]}`;

  const primaryStyle = { background: "linear-gradient(135deg,#00D4FF,#7B61FF)", boxShadow: "0 0 24px rgba(0,212,255,0.3)" };
  const ghostClass = "border border-[#1E2D47] text-[#F0F4FF] hover:border-[#00D4FF] hover:text-[#00D4FF] hover:-translate-y-0.5";

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${base} ${variant === "ghost" ? ghostClass : "text-white hover:-translate-y-0.5"} ${className}`}
        style={variant === "primary" ? primaryStyle : undefined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button
      onClick={onClick}
      className={`${base} ${variant === "ghost" ? ghostClass : "text-white hover:-translate-y-0.5"} ${className}`}
      style={variant === "primary" ? primaryStyle : undefined}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
