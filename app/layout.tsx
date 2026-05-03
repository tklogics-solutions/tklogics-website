import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Tklogics — Enterprise Software & Cloud Agency",
  description:
    "Tklogics delivers enterprise-grade web development, app development, QA, cloud infrastructure, and DevOps automation. Build faster, scale smarter.",
  keywords: [
    "web development", "app development", "QA testing", "cloud infrastructure",
    "DevOps", "AWS", "Azure", "Next.js", "React", "enterprise software",
  ],
  openGraph: {
    title: "Tklogics",
    description: "Engineering the future, one line of code at a time.",
    url: "https://tklogics.com",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#080B12] text-[#F0F4FF] font-[Inter,sans-serif]">
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
