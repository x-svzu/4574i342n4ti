"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Eye, ChevronLeft, ArrowRight, Users, BookOpen, Star, Shield, Globe, Heart, Sparkles, Crown, Building } from "lucide-react";

export default function WhoWeArePage() {
  const foundingMembers = [
    { num: "I", name: "Adam Weishaupt", title: "Supreme Founder", desc: "The visionary architect who planted the seeds of enlightenment in Bavaria, 1776." },
    { num: "II", name: "Baron von Knigge", title: "Master Architect", desc: "Expanded the order's reach across Europe through strategic alliances." },
    { num: "III", name: "Johann Wolfgang", title: "Philosopher Sage", desc: "Contributed profound philosophical frameworks to our sacred teachings." },
    { num: "IV", name: "Franz Mesmer", title: "Mystic Pioneer", desc: "Bridged the realms of science and spiritual understanding." },
    { num: "V", name: "Johann Herder", title: "Theological Scholar", desc: "Integrated ancient wisdom with modern theological thought." },
    { num: "VI", name: "Duke Ferdinand", title: "Royal Patron", desc: "Provided noble protection and resources for our sacred mission." },
  ];

  const grandMasters = [
    { name: "Adam Weishaupt", years: "1776-1784", title: "Supreme Grand Master", desc: "Founded the Order and established its sacred principles." },
    { name: "The Unknown Master", years: "1784-1800", title: "Keeper of Secrets", desc: "Preserved the Order through the darkest days of persecution." },
    { name: "Johann Friedrich", years: "1800-1820", title: "Grand Illuminatus", desc: "Rebuilt the Order's influence across the new world." },
    { name: "Alexander Thornwood", years: "1820-1850", title: "Architect of Light", desc: "Expanded the Order's reach throughout America." },
    { name: "Victoria Ashworth", years: "1850-1890", title: "Enlightened Matriarch", desc: "Established the New York chapter with unprecedented influence." },
    { name: "The Current Master", years: "2010-Present", title: "Guardian of the Flame", desc: "Leads our brotherhood into the modern age of enlightenment." },
  ];

  const architectureElements = [
    { title: "The Pyramid Chamber", desc: "Sacred space where initiates receive their first illumination." },
    { title: "The Eastern Window", desc: "Portal through which the first light of dawn illuminates our rituals." },
    { title: "The Central Altar", desc: "Heart of our temple where sacred oaths are sworn." },
    { title: "The Hidden Archives", desc: "Repository of centuries of accumulated wisdom and knowledge." },
  ];

  const symbols = [
    { title: "The All-Seeing Eye", desc: "Divine omniscience and eternal watchfulness over humanity's journey." },
    { title: "The Triangle", desc: "Trinity of mind, body, and spirit ascending toward perfection." },
    { title: "The Hexagram", desc: "Union of opposites creating perfect harmony and balance." },
    { title: "The Owl of Minerva", desc: "Wisdom that sees through darkness and guides our path." },
    { title: "The Pyramid", desc: "Hierarchical structure of knowledge from base to apex." },
    { title: "The Ouroboros", desc: "Eternal cycle of death and rebirth, the infinite journey." },
  ];

  const globalStats = [
    { value: "120+", label: "Global Chapters" },
    { value: "500+", label: "Regional Lodges" },
    { value: "50K+", label: "Initiated Members" },
    { value: "7", label: "Continents United" },
  ];

  const regions = [
    { name: "North America", lodges: "50+", members: "15,000+", icon: Building },
    { name: "Europe", lodges: "40+", members: "12,000+", icon: Crown },
    { name: "Asia Pacific", lodges: "25+", members: "8,000+", icon: Star },
    { name: "South America", lodges: "15+", members: "5,000+", icon: Globe },
    { name: "Africa", lodges: "10+", members: "3,000+", icon: Heart },
    { name: "Middle East", lodges: "8+", members: "2,000+", icon: Shield },
  ];

  const modernStats = [
    { value: "50,000+", label: "Active Members" },
    { value: "120+", label: "Countries" },
    { value: "35%", label: "Leaders" },
    { value: "42%", label: "Entrepreneurs" },
  ];

  const memberTypes = [
    { title: "Scholars & Academics", desc: "Researchers and educators advancing human knowledge" },
    { title: "Business Leaders", desc: "Entrepreneurs and executives shaping global commerce" },
    { title: "Humanitarians", desc: "Philanthropists dedicated to the betterment of humanity" },
  ];

  return (
    <div className="min-h-screen bg-[#0A1929]">
      <Navigation />
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D2137]/80 via-[#0A1929]/90 to-[#0A1929]" />
        </div>
        
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

        {/* Subtle glow effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Top gold line accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
          <Link href="/" className="inline-flex items-center gap-2 text-[#d4af37]/80 hover:text-[#d4af37] transition-colors mb-8 text-sm">
            <ChevronLeft className="w-4 h-4" />
            Return to Gateway
          </Link>
          
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 flex items-center justify-center bg-[#d4af37]/10 rounded-full border border-[#d4af37]/30">
                <Eye className="w-12 h-12 text-[#d4af37]" />
              </div>
              <div className="absolute inset-0 bg-[#d4af37]/20 blur-2xl rounded-full -z-10 scale-150" />
            </div>
          </div>
          
          <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase font-medium mb-6">About Our Brotherhood</p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFFFFF] mb-6 font-cinzel tracking-tight leading-tight">
            Discover Our Legacy
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
            <div className="w-2 h-2 bg-[#d4af37] rotate-45 shadow-[0_0_10px_#d4af37]" />
            <div className="w-24 h-px bg-gradient-to-l from-transparent via-[#d4af37]/60 to-transparent" />
          </div>
          
          <p className="text-xl md:text-2xl text-[#E0E0E0] max-w-3xl mx-auto mb-12 leading-relaxed">
            For over two centuries, the Illuminati Lodge of New York has stood as a beacon of enlightenment, 
            guiding seekers toward wisdom, prosperity, and the betterment of all humanity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership">
              <button className="group px-10 py-5 bg-gradient-to-r from-[#d4af37] to-[#c9a431] text-[#0A1929] font-bold text-lg rounded-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-500 flex items-center justify-center gap-2">
                Join Our Brotherhood
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/our-history">
              <button className="px-10 py-5 border-2 border-[#d4af37]/50 text-[#d4af37] font-semibold text-lg rounded-lg hover:bg-[#d4af37]/10 hover:border-[#d4af37] transition-all duration-300">
                Explore Our History
              </button>
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#d4af37]/50 animate-bounce">
          <Eye className="w-6 h-6" />
        </div>
      </section>

      {/* THE BAVARIAN GENESIS */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0A1929] via-[#0D2137] to-[#112240]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23d4af37' stroke-width='0.5'%3E%3Ccircle cx='50' cy='50' r='50'/%3E%3Cpolygon points='50,0 100,50 50,100 0,50'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: "100px 100px" }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase font-medium mb-4">Our Origins</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] font-cinzel mb-6">The Bavarian Genesis</h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#d4af37]/20 to-[#d4af37]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#d4af37]/20 shadow-2xl bg-[#0D2137] flex items-center justify-center">
                <Users className="w-24 h-24 text-[#d4af37]/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-transparent to-transparent" />
                {/* Decorative corners */}
                <div className="frame-corner frame-corner-tl" />
                <div className="frame-corner frame-corner-tr" />
                <div className="frame-corner frame-corner-bl" />
                <div className="frame-corner frame-corner-br" />
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-[#E0E0E0] leading-relaxed">
                On <span className="text-[#d4af37]">May 1, 1776</span>, in the shadow of the University of Ingolstadt, 
                Professor Adam Weishaupt gathered five devoted scholars to form what would become the most 
                influential secret society in human history.
              </p>
              <p className="text-lg text-[#B0B0B0] leading-relaxed">
                The Order of the Illuminati was founded on principles that would challenge the religious and 
                political dogmas of the age: reason over superstition, knowledge over ignorance, and the 
                pursuit of human perfection through enlightenment.
              </p>
              <p className="text-lg text-[#B0B0B0] leading-relaxed">
                From these humble beginnings, a movement was born that would attract the greatest minds 
                of the era and shape the course of history across continents and centuries.
              </p>
            </div>
          </div>

          {/* Founding Members */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foundingMembers.map((member, i) => (
              <div key={i} className="group relative p-8 bg-gradient-to-br from-[#0D2137] to-[#112240]/50 rounded-2xl border border-[#d4af37]/10 hover:border-[#d4af37]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] card-shine">
                <div className="absolute top-6 right-6 text-4xl font-bold text-[#d4af37]/10 font-cinzel">{member.num}</div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-[#d4af37]" />
                </div>
                <h3 className="text-xl font-bold text-[#FFFFFF] mb-1 font-cinzel">{member.name}</h3>
                <p className="text-[#d4af37] text-sm font-medium mb-3">{member.title}</p>
                <p className="text-[#B0B0B0] text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LINEAGE INTRO - Clean, no background image */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-b from-[#112240] via-[#0D2137] to-[#0A1929]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase font-medium mb-4">Leadership Through the Ages</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] font-cinzel mb-6">Lineage of Grand Masters</h2>
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
            <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
          </div>
          <p className="text-lg text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed">
            Through centuries of persecution, transformation, and renewal, the sacred lineage of 
            leadership has been preserved, ensuring the continuity of our mission.
          </p>
        </div>
      </section>

      {/* LINEAGE OF GRAND MASTERS */}
      <section className="relative py-24 md:py-32 bg-[#0D2137]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#112240]/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4af37] via-[#d4af37]/50 to-transparent hidden lg:block" />
            
            <div className="space-y-12 lg:space-y-0">
              {grandMasters.map((master, i) => (
                <div key={i} className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${i % 2 === 0 ? '' : '[direction:rtl]'} [&>*]:[direction:ltr]`}>
                  <div className={`lg:flex ${i % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <div className={`group p-8 bg-gradient-to-br from-[#0A1929] to-[#112240]/30 rounded-2xl border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all duration-500 max-w-md lg:max-w-lg mb-8 lg:mb-0 card-shine ${i % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 rounded-xl bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4af37]/20 transition-colors">
                          <Crown className="w-8 h-8 text-[#d4af37]" />
                        </div>
                        <div>
                          <span className="text-[#d4af37] text-sm font-bold">{master.years}</span>
                          <h3 className="text-2xl font-bold text-[#FFFFFF] font-cinzel mt-1">{master.name}</h3>
                          <p className="text-[#d4af37] text-sm font-medium mt-1">{master.title}</p>
                          <p className="text-[#B0B0B0] text-sm mt-3 leading-relaxed">{master.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-10 hidden lg:flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.5)]" />
                    <div className="absolute w-12 h-12 rounded-full border border-[#d4af37]/20 animate-ping" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SACRED ARCHITECTURE */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0D2137] to-[#0A1929]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase font-medium mb-4">Our Sacred Spaces</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] font-cinzel mb-6">Sacred Architecture</h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-xl text-[#E0E0E0] leading-relaxed">
                Our temple stands as a physical manifestation of spiritual principles, every stone 
                and symbol carefully placed to reflect the sacred geometry that underlies all creation.
              </p>
              <p className="text-lg text-[#B0B0B0] leading-relaxed">
                Here, members gather to receive instruction, perform rituals, and connect with the 
                ancient wisdom that flows through our lineage.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-2 bg-[#d4af37]/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#d4af37]/20 bg-[#0D2137] flex items-center justify-center">
                <Building className="w-32 h-32 text-[#d4af37]/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-transparent to-transparent" />
                <div className="frame-corner frame-corner-tl" />
                <div className="frame-corner frame-corner-tr" />
                <div className="frame-corner frame-corner-bl" />
                <div className="frame-corner frame-corner-br" />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architectureElements.map((el, i) => (
              <div key={i} className="group p-8 bg-gradient-to-br from-[#0D2137] to-[#112240]/30 rounded-2xl border border-[#d4af37]/10 hover:border-[#d4af37]/40 transition-all duration-500 text-center card-shine">
                <div className="w-16 h-16 mx-auto rounded-xl bg-[#d4af37]/10 flex items-center justify-center mb-5 group-hover:bg-[#d4af37]/20 transition-colors">
                  <Building className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-xl font-bold text-[#FFFFFF] font-cinzel mb-2">{el.title}</h3>
                <p className="text-[#B0B0B0] text-sm">{el.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYMBOLS AND THEIR MEANINGS */}
      <section className="relative py-24 md:py-32 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase font-medium mb-4">Hidden Knowledge</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] font-cinzel mb-6">Symbols & Their Meanings</h2>
            <p className="text-xl text-[#B0B0B0] max-w-3xl mx-auto">
              Every symbol we employ carries layers of meaning, representing profound truths 
              passed down through millennia of sacred tradition.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {symbols.map((sym, i) => (
              <div key={i} className="group p-8 bg-gradient-to-br from-[#0D2137] to-[#0A1929] rounded-2xl border border-[#d4af37]/10 hover:border-[#d4af37]/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] card-shine">
                <div className="w-16 h-16 rounded-xl bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:bg-[#d4af37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300">
                  <Eye className="w-8 h-8 text-[#d4af37] group-hover:text-[#0A1929] transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-[#FFFFFF] font-cinzel mb-3">{sym.title}</h3>
                <p className="text-[#B0B0B0] leading-relaxed">{sym.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL NETWORK STRUCTURE */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#112240] to-[#0A1929]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase font-medium mb-4">Worldwide Presence</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] font-cinzel mb-6">Global Network Structure</h2>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden mb-12 border border-[#d4af37]/20 bg-[#0D2137] h-80 flex items-center justify-center">
            <Globe className="w-32 h-32 text-[#d4af37]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-transparent to-transparent" />
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {globalStats.map((stat, i) => (
              <div key={i} className="text-center p-8 bg-gradient-to-br from-[#0D2137] to-[#112240]/30 rounded-2xl border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all card-shine">
                <div className="text-5xl font-bold text-[#d4af37] mb-2 font-cinzel">{stat.value}</div>
                <div className="text-[#B0B0B0] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, i) => (
              <div key={i} className="group flex items-center gap-6 p-6 bg-gradient-to-r from-[#0D2137] to-transparent rounded-xl border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all card-shine">
                <div className="w-14 h-14 rounded-xl bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors">
                  <region.icon className="w-7 h-7 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#FFFFFF]">{region.name}</h3>
                  <p className="text-sm text-[#d4af37]">{region.lodges} Lodges • {region.members} Members</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE MODERN BROTHERHOOD */}
      <section className="relative py-24 md:py-32 bg-[#0D2137]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase font-medium mb-4">Present Day</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] font-cinzel mb-6">The Modern Brotherhood</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-2 bg-[#d4af37]/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#d4af37]/20 bg-[#0D2137] flex items-center justify-center">
                <Users className="w-32 h-32 text-[#d4af37]/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1929] via-transparent to-transparent" />
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-[#E0E0E0] leading-relaxed">
                Today, the Illuminati Lodge of New York continues its sacred mission in the digital age, 
                adapting ancient wisdom for modern challenges.
              </p>
              <div className="flex gap-4">
                <Link href="/membership">
                  <button className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#c9a431] text-[#0A1929] font-bold rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all">
                    Join the Modern Brotherhood
                  </button>
                </Link>
                <Link href="/our-mission">
                  <button className="px-8 py-4 border-2 border-[#d4af37]/50 text-[#d4af37] font-semibold rounded-lg hover:bg-[#d4af37]/10 transition-all">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {modernStats.map((stat, i) => (
              <div key={i} className="text-center p-6 bg-[#0A1929] rounded-xl border border-[#d4af37]/10 card-shine">
                <div className="text-4xl font-bold text-[#d4af37] mb-1 font-cinzel">{stat.value}</div>
                <div className="text-[#B0B0B0] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {memberTypes.map((type, i) => (
              <div key={i} className="group p-8 bg-gradient-to-br from-[#0A1929] to-[#112240]/30 rounded-2xl border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all text-center card-shine">
                <div className="w-16 h-16 mx-auto rounded-xl bg-[#d4af37]/10 flex items-center justify-center mb-5 group-hover:bg-[#d4af37]/20 transition-colors">
                  <Users className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-xl font-bold text-[#FFFFFF] font-cinzel mb-2">{type.title}</h3>
                <p className="text-[#B0B0B0]">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Clean, no background image */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-b from-[#0D2137] to-[#0A1929]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] font-cinzel mb-6">Ready to Join Our Distinguished Brotherhood?</h2>
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
            <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
          </div>
          <p className="text-lg text-[#B0B0B0] mb-10 max-w-2xl mx-auto">
            Your journey toward enlightenment begins with a single step. Take that step today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership">
              <button className="px-10 py-5 bg-gradient-to-r from-[#d4af37] to-[#c9a431] text-[#0A1929] font-bold text-lg rounded-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2">
                Apply for Membership <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-10 py-5 border-2 border-[#d4af37]/50 text-[#d4af37] font-semibold text-lg rounded-lg hover:bg-[#d4af37]/10 transition-all">
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
