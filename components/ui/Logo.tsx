"use client";

import Link from "next/link";
import { useId } from "react";

export default function Logo({ className = "" }: { className?: string }) {
  const id = useId().replace(/:/g, "");

  return (
    <Link
      href="/"
      aria-label="Tklogics"
      className={`inline-flex items-center ${className}`}
    >
      {/*
        Pure text wordmark — no icon.
        Scales responsively via Tailwind height classes; width is auto.
        viewBox aspect ratio: 135 wide × 36 tall.
      */}
      <svg
        viewBox="0 0 135 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 sm:h-8 md:h-9 w-auto"
        role="img"
        aria-label="Tklogics"
      >
        <defs>
          {/* Gradient for "logics" — spans the right half of the wordmark */}
          <linearGradient
            id={`${id}-txt`}
            x1="30" y1="0" x2="135" y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00D4FF" />
            <stop offset="1" stopColor="#7B61FF" />
          </linearGradient>
        </defs>

        {/* "Tk" — white */}
        <text
          x="2"
          y="27"
          fontFamily="'Space Grotesk', 'Outfit', system-ui, sans-serif"
          fontWeight="700"
          fontSize="26"
          letterSpacing="-0.5"
          fill="white"
        >
          Tk
        </text>

        {/* "logics" — cyan → violet gradient */}
        <text
          x="30"
          y="27"
          fontFamily="'Space Grotesk', 'Outfit', system-ui, sans-serif"
          fontWeight="700"
          fontSize="26"
          letterSpacing="-0.5"
          fill={`url(#${id}-txt)`}
        >
          logics
        </text>
      </svg>
    </Link>
  );
}
