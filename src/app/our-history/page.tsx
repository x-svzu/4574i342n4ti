"use client";

import Link from "@/components/NextLink";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import IlluminatiLogo from "@/components/IlluminatiLogo";
import { 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Users, 
  BookOpen,
  Sparkles,
  Building,
  Globe,
  Star,
  ChevronLeft
} from "lucide-react";

export default function OurHistoryPage() {
  const timeline = [
    {
      year: "1776",
      date: "May 1, 1776",
      location: "Ingolstadt, Bavaria",
      title: "The Bavarian Genesis",
      description: "Professor Adam Weishaupt, a scholar of canon law at the University of Ingolstadt, founded the Order of the Illuminati. Beginning with just five devoted members, the order was dedicated to Enlightenment principles: reason, secularism, and the pursuit of knowledge free from religious and state interference.",
      icon: Sparkles
    },
    {
      year: "1777",
      date: "1777",
      location: "Munich, Bavaria",
      title: "Masonic Integration",
      description: "Weishaupt strategically integrated with Masonic lodges in Munich, seeing Freemasonry as a vehicle for spreading Illuminati ideals. This move allowed the order to expand rapidly across Europe, recruiting influential members from nobility, academia, and the arts.",
      icon: Users
    },
    {
      year: "1784-1785",
      date: "1784-1785",
      location: "Bavaria",
      title: "Persecution and Dispersal",
      description: "The Bavarian government, under intense pressure from the Catholic Church, issued edicts banning secret societies. Many Illuminati members were arrested, exiled, or forced underground. While officially disbanded, the order continued in secret.",
      icon: BookOpen
    },
    {
      year: "1800s",
      date: "Early 1800s",
      location: "United States",
      title: "The American Chapter",
      description: "Illuminati ideals found fertile ground in America, where Enlightenment principles had already shaped the nation's founding. Many prominent Americans were rumored to be members or sympathizers, though the order maintained its tradition of absolute secrecy.",
      icon: Star
    },
    {
      year: "Early 1900s",
      date: "Early 1900s",
      location: "New York City",
      title: "New York Establishment",
      description: "The Illuminati Lodge of New York was formally established, becoming a major center for the order in the Americas. New York's position as a global hub of finance, culture, and ideas made it an ideal location for advancing the order's mission.",
      icon: Building
    },
    {
      year: "Present",
      date: "2024",
      location: "Global",
      title: "Modern Renaissance",
      description: "Today, the Illuminati Lodge of New York continues its sacred mission in the digital age. We have adapted ancient wisdom for modern challenges while preserving the core principles that have guided us for over two centuries.",
      icon: Globe
    },
  ];

  const stats = [
    { value: "248", label: "Years of History", icon: Calendar },
    { value: "50K+", label: "Global Members", icon: Users },
    { value: "120+", label: "Countries", icon: Globe },
    { value: "7", label: "Continents", icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-[#0A1929]">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D2137] to-[#0A1929]" />
          </div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f0d77a] transition-colors mb-6">
              <ChevronLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <div className="flex justify-center mb-6">
              <IlluminatiLogo size={64} />
            </div>
            
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">A Legacy Spanning Centuries</p>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6 font-cinzel">
              Our History
            </h1>
            
            <div className="flex items-center gap-3 justify-center mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
            </div>
            
            <p className="text-lg text-[#E0E0E0] max-w-2xl mx-auto leading-relaxed">
              Trace the evolution of our distinguished brotherhood through two and a half centuries 
              of perseverance, adaptation, and unwavering commitment to enlightenment.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-12 bg-[#0D2137]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="p-5 bg-[#0A1929] border border-[#d4af37]/10 rounded-lg text-center hover:border-[#d4af37]/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-[#d4af37] mb-1">{stat.value}</div>
                  <div className="text-xs text-[#B0B0B0]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="relative py-16 bg-[#0A1929]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-[#E0E0E0] text-lg leading-relaxed">
              From our origins in 1776 Bavaria to our modern presence in New York, the Illuminati 
              has weathered persecution, adapted to change, and emerged stronger through every trial. 
              Our history is one of resilience, wisdom, and the unbroken transmission of sacred 
              knowledge from generation to generation.
            </p>
          </div>
        </section>

        {/* Timeline Section - Clean, no images */}
        <section className="relative py-16 bg-[#0D2137]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel">
                The Chronology of Light
              </h2>
              <p className="text-[#B0B0B0] text-base max-w-2xl mx-auto">
                Each era in our history represents a chapter in the ongoing story of enlightenment.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4af37] via-[#d4af37]/30 to-transparent" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div 
                    key={index} 
                    className={`relative pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'}`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-2 md:left-1/2 top-2 md:-translate-x-1/2 z-10">
                      <div className="w-4 h-4 rounded-full bg-[#d4af37] border-2 border-[#0D2137]" />
                    </div>
                    
                    {/* Content Card */}
                    <div className="p-5 bg-[#0A1929] border border-[#d4af37]/10 rounded-lg hover:border-[#d4af37]/30 transition-colors">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className="px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] text-xs font-bold rounded-full">
                          {item.date}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-[#B0B0B0]">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-[#FFFFFF] mb-2 font-cinzel">{item.title}</h3>
                      <p className="text-[#B0B0B0] text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="relative py-16 bg-[#0A1929]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-[#d4af37] text-xs font-bold tracking-wider uppercase mb-2 block">Founder</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] font-cinzel">
                Adam Weishaupt
              </h2>
              <p className="text-[#B0B0B0] mt-2">1748 - 1830</p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="relative w-48 h-64 mx-auto mb-8 rounded-lg overflow-hidden border border-[#d4af37]/30 bg-[#0D2137] flex items-center justify-center">
                <Users className="w-24 h-24 text-[#d4af37]/20" />
              </div>
              <p className="text-[#E0E0E0] text-base leading-relaxed mb-4 text-center">
                Born in Ingolstadt, Bavaria, Adam Weishaupt was a professor of canon law who grew 
                disillusioned with the religious and political restrictions of his time. Inspired by 
                the Enlightenment philosophers, he envisioned a society dedicated to reason, moral 
                perfection, and freedom from superstition.
              </p>
              <p className="text-[#E0E0E0] text-base leading-relaxed mb-6 text-center">
                On May 1, 1776, he gathered five devoted students and founded what would become the 
                most influential secret society in history.
              </p>
              <div className="p-5 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg text-center">
                <p className="text-[#d4af37] italic text-sm">
                  &ldquo;The illumination, the instruction of men, is the highest duty of every 
                  enlightened being.&rdquo;
                </p>
                <p className="text-[#B0B0B0] text-xs mt-2">— Adam Weishaupt</p>
              </div>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="relative py-16 bg-[#0D2137]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-6 border border-[#d4af37]/30">
              <BookOpen className="w-6 h-6 text-[#d4af37]" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#FFFFFF] mb-6 font-cinzel">
              A Living Legacy
            </h3>
            <p className="text-[#E0E0E0] text-base leading-relaxed mb-4">
              For 248 years, the Illuminati has stood as a guardian of sacred knowledge and a 
              beacon for those seeking enlightenment. From the darkness of persecution to the 
              light of modern understanding, our brotherhood has adapted while remaining true to 
              the principles that gave it birth.
            </p>
            <p className="text-[#d4af37] italic font-cinzel text-sm">
              The past informs our present; the present shapes our future.
            </p>
          </div>
        </section>

        {/* CTA Section - Clean */}
        <section className="relative py-16 bg-gradient-to-b from-[#0A1929] to-[#0D2137]">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel">
              Become Part of History
            </h2>
            <p className="text-[#E0E0E0] text-base mb-8">
              Join the continuing story of enlightenment. Your journey could become the next chapter 
              in our sacred chronicle of wisdom and service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-6 py-5">
                <Link href="/membership">
                  Apply for Membership
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10 px-6 py-5">
                <Link href="/who-we-are">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
