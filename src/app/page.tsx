"use client";

import React from "react";
import Link from "@/components/NextLink";
import { ChevronDown, BookOpen, Users, Lightbulb, Eye, Globe, Shield, Award, Heart, Crown, Sparkles, Scroll } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import IlluminatiLogo from "@/components/IlluminatiLogo";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "motion/react";

const tenets = [
  {
    icon: BookOpen,
    title: "Pursuit of Knowledge",
    description: "We are dedicated to the relentless quest for understanding and wisdom, believing that knowledge empowers individuals and enriches all of humanity.",
    color: "gold",
  },
  {
    icon: Users,
    title: "Community Cultivation",
    description: "We foster strong, supportive communities, recognizing that collaboration and mutual support are essential for progress and well-being.",
    color: "crimson",
  },
  {
    icon: Lightbulb,
    title: "Rational Thought",
    description: "We uphold the importance of reason and critical thinking, advocating for decisions and beliefs grounded in logic and evidence.",
    color: "silver",
  },
  {
    icon: Eye,
    title: "Individual Liberty",
    description: "We safeguard the freedom of every individual to discover, express, and celebrate their authentic selves without fear or limitation.",
    color: "gold",
  },
  {
    icon: Globe,
    title: "Global Brotherhood",
    description: "We unite influential individuals from diverse backgrounds to work towards the betterment of all humanity across continents and cultures.",
    color: "crimson",
  },
  {
    icon: Shield,
    title: "Sacred Protection",
    description: "We protect our members and the ancient wisdom entrusted to us, ensuring its preservation for future generations of seekers.",
    color: "silver",
  },
];

const stats = [
  { icon: Award, value: "248+", label: "Years of Heritage" },
  { icon: Users, value: "50K+", label: "Global Members" },
  { icon: Globe, value: "120+", label: "Countries Represented" },
  { icon: Heart, value: "$1B+", label: "Charitable Contributions" },
];

const timeline = [
  { year: "1776", title: "The Bavarian Genesis", description: "Founded by Adam Weishaupt in Bavaria, the Illuminati began with five scholars dedicated to enlightenment and free thinking, planting the seeds of a global movement." },
  { year: "1777", title: "Masonic Integration", description: "The Illuminati began collaborating with Masonic lodges, establishing chapters throughout Bavaria through sacred rites and expanding our influence across Europe." },
  { year: "1900s", title: "American Expansion", description: "The Illuminati established its presence in America, with New York becoming a central hub for enlightenment activities and the pursuit of knowledge." },
  { year: "Present", title: "Modern Renaissance", description: "Today, the Illuminati Lodge of New York continues its sacred mission, adapting ancient wisdom for the modern world while preserving our timeless heritage." },
];

const philanthropyItems = [
  { icon: BookOpen, title: "Education Initiatives", description: "Supporting educational programs worldwide, from scholarships to building schools in underserved communities." },
  { icon: Heart, title: "Healthcare Programs", description: "Funding medical research, hospitals, and healthcare access for those in need across the globe." },
  { icon: Globe, title: "Peace Building", description: "Supporting conflict resolution and peace initiatives in regions affected by strife and discord." },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A1929]">
      <Navigation />

      {/* Hero Section - Clean, no background image */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-b from-[#0D2137] via-[#0A1929] to-[#0A1929]">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23d4af37' stroke-width='0.5'%3E%3Ccircle cx='30' cy='30' r='30'/%3E%3Cpolygon points='30,0 60,30 30,60 0,30'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Top gold line accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

        <div className="flex-1 flex items-center justify-center">
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-16 pb-8">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8 flex justify-center"
            >
              <div className="relative group">
                <IlluminatiLogo size={112} />
                <div className="absolute inset-0 rounded-full bg-[#d4af37]/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#d4af37] text-sm tracking-[0.2em] mb-6 uppercase font-medium"
            >
              Enlightenment Through Knowledge
            </motion.p>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight text-[#FFFFFF] font-serif tracking-tight"
            >
              Welcome to the <span className="text-[#d4af37]">Illuminati Lodge</span> of New York
            </motion.h1>

            {/* Decorative Line */}
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex items-center justify-center gap-4 mb-6 overflow-hidden"
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
              <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45" />
              <IlluminatiLogo size={20} />
              <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-[#E0E0E0] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              For over two centuries, we have stood as guardians of ancient wisdom, guiding seekers toward the light of knowledge, prosperity, and universal understanding. Join a distinguished brotherhood of global leaders dedicated to the betterment of humanity.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:20 relative z-20"
            >
              <Link href="/membership">
                <button className="inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-8 py-6 text-base rounded transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/20 cursor-pointer pointer-events-auto">
                  <IlluminatiLogo size={24} />
                  Begin Your Journey
                </button>
              </Link>
              <Link href="/who-we-are">
                <button className="inline-flex items-center justify-center gap-2 border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10 font-semibold px-8 py-6 text-base rounded transition-all duration-300 cursor-pointer pointer-events-auto">
                  Discover Our Heritage
                </button>
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <button
              className="flex flex-col items-center gap-2 mx-auto text-[#d4af37]/60 hover:text-[#d4af37] transition-colors duration-300 cursor-pointer group"
              aria-label="Scroll to next section"
              onClick={() => document.getElementById("tenets")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="text-[11px] tracking-[0.2em] uppercase font-medium">Scroll</span>
              <ChevronDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        <div className="relative z-10 h-24 md:h-32 flex-shrink-0" />
      </section>

      {/* Purpose Statement - Clean section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#0D2137]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-[#d4af37] text-xs tracking-[0.3em] mb-6 uppercase font-semibold">Our Purpose</p>
            <h2 className="font-bold mb-8 text-[#FFFFFF] text-3xl md:text-4xl lg:text-5xl font-serif">
              Guardians of the Eternal Light
            </h2>
            <div className="flex items-center gap-4 mb-10 justify-center">
              <div className="w-16 h-px bg-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-16 h-px bg-[#d4af37]/30" />
            </div>
            <p className="text-[#E0E0E0] text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
              We are the keepers of sacred knowledge, passed down through generations of enlightened minds. 
              Our mission transcends time itself — to illuminate the path for those who seek truth, wisdom, and prosperity.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
      </section>

      {/* Tenets Section */}
      <section id="tenets" className="relative py-16 md:py-20 overflow-hidden bg-[#0A1929]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 md:mb-16 text-center">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">The Sacred Foundation</p>
            <h2 className="font-bold mb-5 text-[#FFFFFF] text-2xl md:text-3xl lg:text-4xl">Our Core Tenets</h2>
            <p className="text-[#B0B0B0] text-lg md:text-xl leading-relaxed mx-auto max-w-3xl">
              These timeless principles form the bedrock upon which our brotherhood stands, guiding every action and illuminating every path toward enlightenment.
            </p>
            <div className="flex items-center gap-3 mt-8 justify-center">
              <div className="w-10 h-px bg-[#d4af37]/40" />
              <div className="w-1 h-1 bg-[#d4af37] rotate-45" />
              <div className="w-10 h-px bg-[#d4af37]/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tenets.map((tenet, index) => {
              const Icon = tenet.icon;
              const colorClass = tenet.color === "gold" ? "bg-[#d4af37]/10 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#0A1929]" :
                tenet.color === "crimson" ? "bg-[#8b0000]/10 text-[#dc143c] group-hover:bg-[#8b0000] group-hover:text-white" :
                "bg-[#c0c0c0]/10 text-[#E0E0E0] group-hover:bg-[#c0c0c0] group-hover:text-[#0A1929]";

              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="group h-full p-8 md:p-10 bg-[#0D2137] border border-[#d4af37]/10 rounded-xl transition-all duration-500 hover:border-[#d4af37]/40 hover:bg-[#0D1B2A] hover:-translate-y-2">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 shadow-lg ${colorClass}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-[#FFFFFF] mb-4 group-hover:text-[#d4af37] transition-colors duration-300 font-serif">
                      {tenet.title}
                    </h3>
                    <p className="text-[#B0B0B0] text-base leading-relaxed">{tenet.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="text-center mt-12 relative z-20">
            <Link href="/tenets-and-purpose">
              <button className="inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-8 py-5 rounded transition-all duration-300 cursor-pointer pointer-events-auto">
                <Scroll className="w-4 h-4" />
                Explore Our Sacred Tenets
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
      </section>

      {/* About Section - Clean, no image */}
      <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-[#112240]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />

        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-[#d4af37] text-xs tracking-[0.3em] mb-6 uppercase font-semibold">Our Brotherhood</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-[#FFFFFF] font-serif">
                Guardians of Ancient Wisdom
              </h2>
              <div className="flex items-center gap-4 mb-10 justify-center">
                <div className="w-12 h-px bg-[#d4af37]/30" />
                <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
                <div className="w-12 h-px bg-[#d4af37]/30" />
              </div>
              <div className="space-y-8 text-[#E0E0E0] text-xl leading-relaxed text-left max-w-4xl mx-auto font-light">
                <p>
                  Our coalition brings together influencers from diverse political, religious, and geographical backgrounds, all united under the banner of enlightenment. The Illuminati Lodge of New York is committed to safeguarding individual freedom by fostering the discovery, expression, and celebration of one&apos;s true self.
                </p>
                <p>
                  We guide our members in appreciating and attaining their highest potential progressively, realistically, and sustainably. Regardless of gender or background, all are invited to join us in this journey of personal and societal transformation.
                </p>
                <p>
                  From our origins in 1776 Bavaria to our modern presence spanning 120+ nations, we have remained steadfast in our mission to illuminate the path for those who seek wisdom.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 mt-12 justify-center relative z-20">
                <Link href="/who-we-are">
                  <button className="inline-flex items-center justify-center gap-3 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-bold px-8 py-5 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer pointer-events-auto">
                    <Crown className="w-5 h-5" />
                    Discover Our Legacy
                  </button>
                </Link>
                <Link href="/our-mission">
                  <button className="inline-flex items-center justify-center gap-3 border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10 font-bold px-8 py-5 rounded-lg transition-all duration-300 hover:border-[#d4af37] cursor-pointer pointer-events-auto">
                    <Sparkles className="w-5 h-5" />
                    Our Sacred Mission
                  </button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
      </section>

      {/* Impact Section */}
      <section id="impact" className="relative py-16 md:py-20 overflow-hidden bg-[#0A1929]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 md:mb-16 text-center">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">Global Impact</p>
            <h2 className="font-bold mb-5 text-[#FFFFFF] text-2xl md:text-3xl lg:text-4xl">Our Brotherhood in Numbers</h2>
            <p className="text-[#B0B0B0] text-lg md:text-xl leading-relaxed mx-auto max-w-3xl">
              Witness the scale of our influence and the breadth of our impact across the globe.
            </p>
            <div className="flex items-center gap-3 mt-8 justify-center">
              <div className="w-10 h-px bg-[#d4af37]/40" />
              <div className="w-1 h-1 bg-[#d4af37] rotate-45" />
              <div className="w-10 h-px bg-[#d4af37]/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={index} delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
                  <div
                    className="p-10 text-center bg-[#0D2137] border border-[#d4af37]/10 rounded-xl group hover:border-[#d4af37]/40 transition-all duration-500 hover:bg-[#0D1B2A] hover:-translate-y-2 shadow-xl"
                  >
                    <div className="w-12 h-12 mx-auto rounded-xl bg-[#d4af37]/10 flex items-center justify-center mb-6 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#0A1929] transition-all duration-500 shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-3 font-serif tracking-tighter">{stat.value}</div>
                    <p className="text-[#B0B0B0] text-sm font-bold uppercase tracking-widest">{stat.label}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
      </section>

      {/* Heritage Timeline Section - Clean, no background image */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-[#0D2137]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">A Legacy Spanning Centuries</p>
            <h2 className="font-bold mb-5 text-[#FFFFFF] text-2xl md:text-3xl lg:text-4xl">Our Sacred Heritage</h2>
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="w-10 h-px bg-[#d4af37]/40" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-10 h-px bg-[#d4af37]/40" />
            </div>
            <p className="text-[#E0E0E0] text-lg md:text-xl leading-relaxed mx-auto max-w-3xl">
              From our origins in 1776 Bavaria to our modern presence in New York, trace the evolution of our distinguished brotherhood.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4af37] via-[#d4af37]/50 to-transparent hidden lg:block" />

            <div className="space-y-16 lg:space-y-24">
              {timeline.map((item, index) => (
                <ScrollReveal key={index} direction={index % 2 === 0 ? 'right' : 'left'} delay={index * 0.1}>
                  <div className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}`}>
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                      <div className="relative group">
                        <div className="relative bg-[#0A1929] border border-[#d4af37]/20 rounded-xl p-8 group-hover:border-[#d4af37]/50 transition-all duration-500 hover:bg-[#0D1B2A] shadow-2xl">
                          <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-xs font-bold rounded-full mb-4 tracking-[0.2em] uppercase">{item.year}</span>
                          <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4 font-serif">{item.title}</h3>
                          <p className="text-[#B0B0B0] text-base leading-relaxed font-light">{item.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.6)] border-4 border-[#0D2137]" />
                    </div>

                    <div className="lg:w-1/2" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="text-center mt-14 relative z-20">
            <Link href="/our-history">
              <button className="inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-8 py-5 rounded transition-all duration-300 cursor-pointer pointer-events-auto">
                <Scroll className="w-4 h-4" />
                Explore Our Full History
              </button>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
      </section>

      {/* Philanthropy Section - Clean */}
      <section id="philanthropy" className="relative py-16 md:py-20 overflow-hidden bg-[#0A1929]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 md:mb-16 text-center">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">Illuminating Lives</p>
            <h2 className="font-bold text-[#FFFFFF] text-2xl md:text-3xl lg:text-4xl mb-4">Our Philanthropic Mission</h2>
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="w-10 h-px bg-[#d4af37]/40" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-10 h-px bg-[#d4af37]/40" />
            </div>
            <p className="text-[#B0B0B0] text-lg md:text-xl leading-relaxed mx-auto max-w-3xl">
              Through strategic philanthropy and charitable initiatives, we work to create positive change across communities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {philanthropyItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={index} delay={index * 0.15}>
                  <div className="group h-full p-10 bg-[#0D2137] border border-[#d4af37]/10 rounded-xl transition-all duration-500 hover:border-[#d4af37]/40 hover:bg-[#0D1B2A] hover:-translate-y-2 text-center shadow-xl">
                    <div className="w-16 h-16 mx-auto rounded-xl bg-[#d4af37]/10 flex items-center justify-center mb-6 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#0A1929] transition-all duration-500 shadow-lg">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#FFFFFF] mb-4 group-hover:text-[#d4af37] transition-colors duration-300 font-serif">{item.title}</h3>
                    <p className="text-[#B0B0B0] text-base leading-relaxed font-light">{item.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 relative z-20">
            <Link href="/global-initiatives">
              <button className="inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-6 py-4 rounded transition-all duration-300 cursor-pointer pointer-events-auto">
                <Globe className="w-4 h-4" />
                Our Philanthropic Work
              </button>
            </Link>
            <Link href="/charity-programs">
              <button className="inline-flex items-center justify-center gap-2 border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10 font-semibold px-6 py-4 rounded transition-all duration-300 cursor-pointer pointer-events-auto">
                <Heart className="w-4 h-4" />
                Charity Programs
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
      </section>

      {/* CTA Section - Clean, no background image */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#0D2137] to-[#0A1929]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <IlluminatiLogo size={64} className="transition-transform duration-300 hover:scale-110" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-[#FFFFFF]">
            Ready to Begin Your Journey?
          </h2>
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="w-10 h-px bg-[#d4af37]/40" />
            <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
            <div className="w-10 h-px bg-[#d4af37]/40" />
          </div>
          <p className="text-[#B0B0B0] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join a distinguished brotherhood of global leaders dedicated to enlightenment, prosperity, and the betterment of humanity. Your path to wisdom begins here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-20">
            <Link href="/membership">
              <button className="inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-8 py-5 text-base rounded transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/20 cursor-pointer pointer-events-auto">
                <IlluminatiLogo size={24} />
                Apply for Membership
              </button>
            </Link>
            <Link href="/who-we-are">
              <button className="inline-flex items-center justify-center gap-2 border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10 font-semibold px-8 py-5 text-base rounded transition-all duration-300 cursor-pointer pointer-events-auto">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
