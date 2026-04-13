"use client";

import React from "react";
import Link from "@/components/NextLink";
import { ChevronLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import IlluminatiLogo from "@/components/IlluminatiLogo";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0A1929]">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#112240] via-[#0D2137] to-[#0A1929]" />
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23d4af37' stroke-width='0.3'%3E%3Ccircle cx='40' cy='40' r='40'/%3E%3Cpolygon points='40,0 80,40 40,80 0,40'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "80px 80px",
              }}
            />
          </div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
          
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <ScrollReveal direction="down">
              <Link href="/" className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f0d77a] transition-colors mb-10 font-medium">
                <ChevronLeft className="w-4 h-4" />
                Back to Home
              </Link>

              <div className="flex justify-center mb-8">
                <div className="relative">
                  <IlluminatiLogo size={80} />
                  <div className="absolute inset-0 bg-[#d4af37]/20 blur-2xl rounded-full -z-10 scale-150" />
                </div>
              </div>
              
              {subtitle && (
                <p className="text-[#d4af37] text-xs tracking-[0.4em] mb-6 uppercase font-bold">{subtitle}</p>
              )}
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFFFFF] mb-8 font-serif tracking-tight">
                {title}
              </h1>
              
              <div className="flex items-center gap-4 justify-center">
                <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
                <div className="w-3 h-3 bg-[#d4af37] rotate-45 shadow-[0_0_10px_#d4af37]" />
                <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Content */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <ScrollReveal>
              {children}
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
