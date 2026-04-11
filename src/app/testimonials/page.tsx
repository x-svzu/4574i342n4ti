"use client";

import Link from "@/components/NextLink";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, ChevronLeft } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "J.M.",
      location: "New York, NY",
      role: "Business Executive",
      content: "Joining the Lodge has been the most transformative decision of my life. The wisdom I&apos;ve gained and the connections I&apos;ve made have elevated every aspect of my existence.",
      years: "15 years",
    },
    {
      name: "A.R.",
      location: "Los Angeles, CA",
      role: "Artist",
      content: "The brotherhood provided me with a framework for understanding my purpose. The creative inspiration I&apos;ve received through our gatherings is immeasurable.",
      years: "8 years",
    },
    {
      name: "S.K.",
      location: "London, UK",
      role: "Scientist",
      content: "The pursuit of knowledge takes many forms. In the Lodge, I found a community that values intellectual rigor while embracing the mysteries that science has yet to explain.",
      years: "12 years",
    },
    {
      name: "M.T.",
      location: "Chicago, IL",
      role: "Entrepreneur",
      content: "The network alone would be worth the commitment, but it&apos;s the spiritual growth that truly sets this brotherhood apart. I&apos;ve become not just more successful, but more fulfilled.",
      years: "6 years",
    },
    {
      name: "L.W.",
      location: "Miami, FL",
      role: "Philanthropist",
      content: "Through the Lodge&apos;s charitable initiatives, I&apos;ve been able to make a real difference in the world. The collective impact we achieve is something I could never have accomplished alone.",
      years: "20 years",
    },
    {
      name: "D.C.",
      location: "San Francisco, CA",
      role: "Technology Leader",
      content: "In an industry obsessed with the future, the Lodge has taught me to value the wisdom of the past. This balance has been essential to both my personal growth and professional success.",
      years: "10 years",
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
            
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">Membership</p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-6 font-cinzel">
              Testimonials
            </h1>
            
            <div className="flex items-center gap-3 justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">
            
            {/* Introduction */}
            <section className="mb-16">
              <p className="text-[#E0E0E0] text-lg leading-relaxed text-center max-w-3xl mx-auto">
                The true measure of our brotherhood lies in the experiences of our members. While many prefer to remain anonymous, these testimonials offer a glimpse into the transformative power of membership.
              </p>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-16">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* Testimonials Grid */}
            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="p-6 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg hover:border-[#d4af37]/30 transition-all duration-300 card-shine">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                      ))}
                    </div>
                    <p className="text-[#E0E0E0] text-base leading-relaxed mb-6 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="border-t border-[#d4af37]/10 pt-4">
                      <p className="text-[#d4af37] font-semibold">{testimonial.name}</p>
                      <p className="text-[#B0B0B0] text-sm">{testimonial.role} • {testimonial.location}</p>
                      <p className="text-[#666] text-xs mt-1">Member for {testimonial.years}</p>
                    </div>
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

            {/* CTA Section - Clean */}
            <section className="relative py-16 rounded-xl overflow-hidden mb-16 border border-[#d4af37]/20 bg-gradient-to-r from-[#112240] via-[#0D2137] to-[#112240]">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
              
              <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                <p className="text-[#d4af37] text-xs tracking-[0.2em] uppercase font-medium mb-4">Join Our Distinguished Brotherhood</p>
                <p className="text-lg text-[#E0E0E0]">
                  Your story could be the next testament to the power of enlightenment.
                </p>
              </div>
            </section>

            {/* Privacy Note */}
            <section className="mb-16 text-center">
              <p className="text-[#B0B0B0] text-sm italic">
                Names have been abbreviated to protect member privacy. The Illuminati Lodge of New York maintains strict confidentiality regarding all member information.
              </p>
            </section>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
