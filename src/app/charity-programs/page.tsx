"use client";

import Link from "@/components/NextLink";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import IlluminatiLogo from "@/components/IlluminatiLogo";
import { Heart, GraduationCap, Stethoscope, Home, Utensils, Shirt, ChevronLeft } from "lucide-react";

export default function CharityProgramsPage() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Illuminated Minds Scholarship",
      description: "Full scholarships for promising students from disadvantaged backgrounds to attend universities worldwide. We invest in future leaders who will carry the light of knowledge forward.",
      funded: "5,000+ students",
    },
    {
      icon: Stethoscope,
      title: "Healing Hands Medical Relief",
      description: "Free medical clinics and emergency healthcare services in underserved regions. Our mobile units bring doctors, medicine, and hope to those who need it most.",
      funded: "2 million+ patients served",
    },
    {
      icon: Home,
      title: "Sanctuary Housing Initiative",
      description: "Building affordable housing and shelters for homeless families and refugees. Everyone deserves a safe place to call home.",
      funded: "10,000+ housing units",
    },
    {
      icon: Utensils,
      title: "Nourishment for All",
      description: "Food banks and sustainable agriculture programs to combat hunger. We work to ensure no one goes hungry in the communities we serve.",
      funded: "50 million+ meals provided",
    },
    {
      icon: Shirt,
      title: "Dignity Programs",
      description: "Providing clothing, job training, and support services to help individuals transition out of poverty. We believe in empowering people to help themselves.",
      funded: "100,000+ individuals assisted",
    },
    {
      icon: Heart,
      title: "Orphan Care Network",
      description: "Supporting orphanages and foster care systems worldwide. Every child deserves love, care, and the opportunity to thrive.",
      funded: "25,000+ children supported",
    },
  ];

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
              
              <p className="text-[#d4af37] text-xs tracking-[0.4em] mb-6 uppercase font-bold">Philanthropy</p>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFFFFF] mb-8 font-serif tracking-tight">
                Charity Programs
              </h1>
              
              <div className="flex items-center gap-4 justify-center mb-10">
                <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
                <div className="w-3 h-3 bg-[#d4af37] rotate-45 shadow-[0_0_10px_#d4af37]" />
                <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Introduction Section - Clean */}
        <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-[#0A1929] via-[#0D2137] to-[#112240]">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] uppercase font-medium mb-4">Illuminating Lives Worldwide</p>
            <p className="text-lg text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed">
              Our charity programs represent the practical application of our principles. Through direct action and strategic partnerships, we work to alleviate suffering and create opportunities.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">

            {/* Programs Grid */}
            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {programs.map((program, index) => {
                  const Icon = program.icon;
                  return (
                    <ScrollReveal key={index} delay={index * 0.1}>
                      <div className="group h-full p-8 bg-[#0D2137] border border-[#d4af37]/10 rounded-2xl hover:border-[#d4af37]/40 transition-all duration-500 card-shine hover:-translate-y-2 shadow-2xl hover:bg-[#0D1B2A]">
                        <div className="w-14 h-14 rounded-xl bg-[#d4af37]/10 flex items-center justify-center mb-6 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#0A1929] transition-all duration-500 shadow-lg">
                          <Icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4 group-hover:text-[#d4af37] transition-colors font-serif">{program.title}</h3>
                        <p className="text-[#B0B0B0] text-base leading-relaxed mb-6 font-light">{program.description}</p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/5 rounded-full border border-[#d4af37]/10">
                          <span className="text-[#d4af37] text-sm font-bold tracking-wider uppercase">Impact: {program.funded}</span>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-16">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* Parallax Image - Clean */}
            <section className="relative rounded-xl overflow-hidden mb-16 bg-[#0D2137] border border-[#d4af37]/20 h-80 flex items-center justify-center">
              <Heart className="w-32 h-32 text-[#d4af37]/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-[#0A1929]/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-2 uppercase font-medium">Transforming Lives</p>
                <h3 className="text-2xl font-bold text-[#FFFFFF] font-cinzel">Education Changes Everything</h3>
              </div>
            </section>

            {/* CTA Card */}
            <section className="mb-16">
              <div className="p-8 bg-gradient-to-r from-[#112240] to-[#0D2137] border border-[#d4af37]/30 rounded-lg">
                <h3 className="text-xl font-semibold text-[#d4af37] mb-4 font-cinzel text-center">Make a Difference</h3>
                <p className="text-[#E0E0E0] mb-6 text-center max-w-2xl mx-auto">
                  Our charitable work is funded by the generous contributions of our members and supporters. Every donation, no matter the size, helps us extend our reach and deepen our impact.
                </p>
                <div className="text-center">
                  <Button asChild className="bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-8 py-4">
                    <Link href="/membership">
                      Join Our Mission
                    </Link>
                  </Button>
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
