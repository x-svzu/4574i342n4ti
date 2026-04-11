"use client";

import Link from "@/components/NextLink";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Crown, ChevronLeft, Eye } from "lucide-react";

export default function LeadershipPage() {
  const leadership = [
    {
      title: "Grand Master",
      description: "The highest authority in the Lodge, responsible for overall direction and governance. The Grand Master represents the continuation of our ancient traditions in the modern world.",
    },
    {
      title: "Deputy Grand Master",
      description: "Second in command, assisting the Grand Master and overseeing day-to-day operations of the Lodge.",
    },
    {
      title: "Grand Chancellor",
      description: "Responsible for the administration of the Lodge, including membership, events, and communications.",
    },
    {
      title: "Grand Treasurer",
      description: "Oversees the financial affairs of the Lodge and its charitable initiatives.",
    },
    {
      title: "Grand Secretary",
      description: "Maintains the records, archives, and official documentation of the Lodge.",
    },
    {
      title: "Council of Elders",
      description: "A body of senior members who provide wisdom and guidance on matters of importance to the Lodge.",
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
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f0d77a] transition-colors mb-6">
              <ChevronLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af37]/30">
                  <Eye className="w-8 h-8 text-[#d4af37]" />
                </div>
                <div className="absolute inset-0 bg-[#d4af37]/20 blur-xl rounded-full -z-10 scale-150" />
              </div>
            </div>
            
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">About Us</p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-6 font-cinzel">
              Our Leadership
            </h1>
            
            <div className="flex items-center gap-3 justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
            </div>
          </div>
        </section>

        {/* Leadership Ceremony Intro - Clean */}
        <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-[#0A1929] via-[#0D2137] to-[#112240]">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] uppercase font-medium mb-4">Sacred Traditions</p>
            <p className="text-xl text-[#E0E0E0] max-w-2xl mx-auto leading-relaxed">
              Our leaders are chosen through sacred rites, selected for their wisdom, dedication, and unwavering commitment to the principles of enlightenment.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">
            
            {/* Introduction */}
            <section className="mb-16">
              <div className="space-y-6 text-[#E0E0E0] text-lg leading-relaxed text-center max-w-3xl mx-auto">
                <p>
                  The Illuminati Lodge of New York is guided by leaders who have demonstrated exceptional dedication to our principles and have risen through the degrees of our order through merit, service, and wisdom.
                </p>
                <p>
                  While the identities of our leadership remain private, their commitment to enlightenment and service is unwavering. Each has dedicated decades to the pursuit of knowledge and the betterment of humanity.
                </p>
              </div>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-16">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* Featured Image */}
            <section className="mb-16">
              <div className="relative rounded-xl overflow-hidden bg-[#0D2137] border border-[#d4af37]/20 h-64 md:h-80 flex items-center justify-center">
                <Crown className="w-32 h-32 text-[#d4af37]/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-transparent to-transparent" />
              </div>
            </section>

            {/* Leadership Grid */}
            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {leadership.map((role, index) => (
                  <div key={index} className="p-6 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg hover:border-[#d4af37]/30 transition-all duration-300 card-shine">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center">
                        <Crown className="w-5 h-5 text-[#d4af37]" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#d4af37]">{role.title}</h3>
                    </div>
                    <p className="text-[#B0B0B0] text-base leading-relaxed">{role.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-16">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* CTA Card - Clean */}
            <section className="mb-16">
              <div className="relative p-8 md:p-10 rounded-xl overflow-hidden border border-[#d4af37]/20 bg-gradient-to-r from-[#112240] via-[#0D2137] to-[#112240]">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-semibold text-[#d4af37] mb-4 font-cinzel">Rise to Leadership</h3>
                  <p className="text-[#E0E0E0] mb-6 max-w-2xl mx-auto">
                    Leadership in the Illuminati is earned through dedication, service, and the pursuit of enlightenment. Every member has the potential to rise through our degrees and take on leadership roles.
                  </p>
                  <Button asChild className="bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-6 py-3">
                    <Link href="/membership">
                      Begin Your Journey
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
