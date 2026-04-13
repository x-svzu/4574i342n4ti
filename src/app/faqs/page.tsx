"use client";

import Link from "@/components/NextLink";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQAccordion from "./FAQAccordion";
import ScrollReveal from "@/components/ScrollReveal";
import IlluminatiLogo from "@/components/IlluminatiLogo";
import { ChevronLeft } from "lucide-react";

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-[#0A1929]">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section - Clean, no background image */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#112240] via-[#0D2137] to-[#0A1929]">
          {/* Subtle decorative pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23d4af37' stroke-width='0.5'%3E%3Ccircle cx='30' cy='30' r='30'/%3E%3Cpolygon points='30,0 60,30 30,60 0,30'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "60px 60px",
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
              
              <p className="text-[#d4af37] text-xs tracking-[0.4em] mb-6 uppercase font-bold">Resources</p>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFFFFF] mb-8 font-serif tracking-tight">
                Frequently Asked Questions
              </h1>
              
              <div className="flex items-center gap-4 justify-center mb-10">
                <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
                <div className="w-3 h-3 bg-[#d4af37] rotate-45 shadow-[0_0_10px_#d4af37]" />
                <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
              </div>
              
              <p className="text-xl text-[#E0E0E0] max-w-3xl mx-auto font-light leading-relaxed">
                Find answers to common questions about the Illuminati Lodge of New York, our mission, 
                membership process, and what it means to be part of our distinguished brotherhood.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Seeking Knowledge Section - Clean */}
        <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-[#0A1929] via-[#0D2137] to-[#112240]">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] uppercase font-medium mb-4">Seeking Knowledge</p>
            <p className="text-lg text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed">
              The path to enlightenment begins with questions. Here we provide clarity for those 
              who seek to understand our sacred mission.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6">
            
            {/* FAQ Accordion */}
            <section className="mb-16">
              <FAQAccordion />
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-16">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* Contact CTA - Clean */}
            <section className="mb-16">
              <div className="relative p-8 md:p-10 rounded-xl overflow-hidden border border-[#d4af37]/20 bg-gradient-to-r from-[#112240] via-[#0D2137] to-[#112240]">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
                
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">
                    Still Have Questions?
                  </h3>
                  <p className="text-[#E0E0E0] mb-6 max-w-lg mx-auto">
                    We&apos;re happy to provide more information about our organization, membership, 
                    or any other inquiries you may have.
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-6 py-3 rounded transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
