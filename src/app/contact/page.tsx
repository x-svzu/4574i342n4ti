"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";
import Link from "@/components/NextLink";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { ChevronLeft, MapPin, Phone, Mail } from "lucide-react";
import IlluminatiLogo from "@/components/IlluminatiLogo";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A1929]">
      <SEO 
        title="Contact Us"
        description="Get in touch with the Illuminati Lodge of New York. Reach out for inquiries, guidance, or to learn more about our distinguished brotherhood."
        keywords="contact Illuminati, New York Lodge contact, enlightenment inquiries, brotherhood guidance"
      />
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section - Clean */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#0D2137] to-[#0A1929]">
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
                Contact Us
              </h1>
              
              <div className="flex items-center gap-4 justify-center mb-10">
                <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
                <div className="w-3 h-3 bg-[#d4af37] rotate-45 shadow-[0_0_10px_#d4af37]" />
                <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
              </div>
              
              <p className="text-xl text-[#E0E0E0] max-w-3xl mx-auto font-light leading-relaxed">
                Have questions or seeking guidance? Our doors are open to those who seek enlightenment.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative py-12 md:py-16 bg-[#0A1929]">
          <div className="max-w-5xl mx-auto px-6">
            <ContactForm />
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="relative py-16 bg-[#0D2137]">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
          
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-xl font-semibold text-[#FFFFFF] mb-2 font-cinzel">Get In Touch</h2>
              <p className="text-[#B0B0B0] text-sm">Reach out through any of the channels below</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-[#0A1929] border border-[#d4af37]/10 rounded-lg text-center hover:border-[#d4af37]/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-5 h-5 text-[#d4af37]" />
                </div>
                <h3 className="text-[#d4af37] font-semibold mb-2 font-cinzel text-sm">Address</h3>
                <p className="text-[#E0E0E0] text-sm">666 Fifth Avenue<br />New York, NY 10103</p>
              </div>
              
              <div className="p-6 bg-[#0A1929] border border-[#d4af37]/10 rounded-lg text-center hover:border-[#d4af37]/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                </div>
                <h3 className="text-[#d4af37] font-semibold mb-2 font-cinzel text-sm">Phone / WhatsApp</h3>
                <div className="flex flex-col items-center gap-2">
                  <a href="tel:+14255437872" className="text-[#E0E0E0] hover:text-[#d4af37] transition-colors text-sm">+1 (425) 543-7872</a>
                  <a href="https://wa.me/14255437872" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f0d77a] transition-colors text-xs">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="p-6 bg-[#0A1929] border border-[#d4af37]/10 rounded-lg text-center hover:border-[#d4af37]/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-5 h-5 text-[#d4af37]" />
                </div>
                <h3 className="text-[#d4af37] font-semibold mb-2 font-cinzel text-sm">Email</h3>
                <p className="text-[#E0E0E0] text-sm">illuminatilodgenewyork@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
