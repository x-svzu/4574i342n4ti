"use client";

import Link from "@/components/NextLink";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { 
  Eye, 
  BookOpen, 
  Users, 
  Lightbulb, 
  Heart, 
  Shield, 
  Globe, 
  ArrowRight,
  Sparkles,
  Star,
  Compass,
  Lock,
  Scale,
  Target,
  Quote,
  Building
} from "lucide-react";

export default function TenetsPage() {
  const pillars = [
    {
      icon: BookOpen,
      title: "Pursuit of Knowledge",
      roman: "I",
      description: "We are dedicated to the relentless quest for understanding and wisdom, believing that knowledge empowers individuals and enriches all of humanity. The pursuit of truth is not merely an intellectual exercise but a sacred duty that guides our every action.",
      principle: "Knowledge is the foundation upon which all progress is built."
    },
    {
      icon: Users,
      title: "Community Cultivation",
      roman: "II",
      description: "We foster strong, supportive communities, recognizing that collaboration and mutual support are essential for progress and well-being. No individual achieves greatness alone - we rise together or not at all.",
      principle: "In unity, there is strength beyond measure."
    },
    {
      icon: Lightbulb,
      title: "Rational Thought",
      roman: "III",
      description: "We uphold the importance of reason and critical thinking, advocating for decisions and beliefs grounded in logic and evidence. Superstition and blind faith have no place in our pursuit of truth.",
      principle: "Reason is the compass that guides us through darkness."
    },
    {
      icon: Compass,
      title: "Individual Liberty",
      roman: "IV",
      description: "We safeguard the freedom of every individual to discover, express, and celebrate their authentic selves without fear or limitation. Each person possesses unique gifts that deserve to be cultivated and shared with the world.",
      principle: "True freedom is the birthright of every human being."
    },
    {
      icon: Globe,
      title: "Global Brotherhood",
      roman: "V",
      description: "We unite influential individuals from diverse backgrounds to work towards the betterment of all humanity across continents and cultures. Our differences are strengths, not weaknesses, when channeled toward common purpose.",
      principle: "Boundaries exist only in the minds of the unenlightened."
    },
    {
      icon: Lock,
      title: "Sacred Protection",
      roman: "VI",
      description: "We protect our members and the ancient wisdom entrusted to us, ensuring its preservation for future generations of seekers. This knowledge is not ours to own but ours to guard and share with those worthy of receiving it.",
      principle: "What is worth protecting is worth preserving forever."
    },
  ];

  const pathStages = [
    { stage: "I", title: "Initiate", description: "The awakening of curiosity and the first steps toward enlightenment" },
    { stage: "II", title: "Seeker", description: "Active pursuit of knowledge and self-discovery through study" },
    { stage: "III", title: "Adept", description: "Application of wisdom in daily life and service to others" },
    { stage: "IV", title: "Master", description: "Mastery of principles and guidance of those who follow" },
  ];

  const codePoints = [
    "Seek truth in all things, accepting nothing on blind faith",
    "Honor your word as sacred, for integrity is the mark of the enlightened",
    "Serve humanity selflessly, for in service we find purpose",
    "Protect the sacred knowledge entrusted to you with your life",
    "Support your brothers and sisters on the path to enlightenment",
    "Strive for excellence in all endeavors, for mediocrity dishonors our order"
  ];

  const applications = [
    { title: "Personal Development", description: "Apply ancient wisdom to modern challenges for continuous self-improvement" },
    { title: "Leadership", description: "Lead with integrity, wisdom, and compassion in all spheres of influence" },
    { title: "Community Service", description: "Give back to society through meaningful charitable works" },
    { title: "Knowledge Sharing", description: "Pass on wisdom to future generations of seekers" },
  ];

  const philosophies = [
    { tradition: "Stoicism", principle: "Control what you can, accept what you cannot", alignment: "Self-mastery and rational thought" },
    { tradition: "Hermeticism", principle: "As above, so below; as within, so without", alignment: "Unity of microcosm and macrocosm" },
    { tradition: "Buddhism", principle: "The path to enlightenment through mindful living", alignment: "Compassion and wisdom" },
    { tradition: "Platonism", principle: "The pursuit of ideal forms and truth", alignment: "Philosophical inquiry and knowledge" },
  ];

  return (
    <div className="min-h-screen bg-[#0A1929]">
      <SEO 
        title="Tenets & Purpose"
        description="Understand the core tenets and sacred purpose of the Illuminati Lodge of New York. We believe in the pursuit of knowledge, the power of unity, and the enlightenment of humanity."
        keywords="Illuminati tenets, sacred purpose, core beliefs, enlightenment, unity, human potential, ancient wisdom, modern progress"
      />
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
              <p className="text-[#d4af37] text-xs tracking-[0.4em] mb-6 uppercase font-bold">Our Sacred Foundation</p>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFFFFF] mb-8 font-serif tracking-tight">
                The Foundation of Our Order
              </h1>
              
              <div className="flex items-center gap-4 justify-center mb-10">
                <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
                <div className="w-3 h-3 bg-[#d4af37] rotate-45 shadow-[0_0_10px_#d4af37]" />
                <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
              </div>

              <div className="w-24 h-24 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-8 border border-[#d4af37]/30 shadow-2xl">
                <Eye className="w-12 h-12 text-[#d4af37]" />
              </div>
              <p className="text-xl text-[#E0E0E0] max-w-3xl mx-auto font-light leading-relaxed">
                These timeless principles form the bedrock upon which our brotherhood stands, guiding 
                every action and illuminating every path toward enlightenment.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">

            {/* Introduction */}
            <section className="mb-20">
              <ScrollReveal>
                <div className="relative p-8 rounded-lg overflow-hidden border border-[#d4af37]/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#112240] via-[#0D2137] to-[#112240]" />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
                  
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-2xl font-bold text-[#FFFFFF] mb-4 font-cinzel">The Foundation of Our Order</h2>
                      <p className="text-[#E0E0E0] text-lg leading-relaxed mb-4">
                        For over two centuries, the tenets of our order have provided guidance and purpose 
                        to countless seekers of truth. These are not mere words but sacred covenants that 
                        every member pledges to uphold throughout their journey.
                      </p>
                      <p className="text-[#E0E0E0] text-lg leading-relaxed">
                        Each tenet represents a pillar of wisdom, supporting the temple of enlightenment 
                        that we build together. Together, they form a complete philosophy for living a 
                        life of purpose and meaning.
                      </p>
                    </div>
                    <div className="relative h-48 lg:h-64 rounded-lg overflow-hidden border border-[#d4af37]/10 bg-[#0D2137] flex items-center justify-center">
                      <Eye className="w-24 h-24 text-[#d4af37]/20" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-20">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* The Six Sacred Pillars */}
            <section className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel text-center">
                The Six Sacred Pillars
              </h2>
              <p className="text-[#E0E0E0] text-lg text-center max-w-3xl mx-auto mb-12">
                Each pillar represents a fundamental principle that guides our thoughts, words, and deeds 
                as we walk the path of enlightenment.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pillars.map((pillar, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div 
                      className="relative h-full overflow-hidden rounded-2xl border border-[#d4af37]/10 group hover:border-[#d4af37]/40 transition-all duration-500 shadow-xl hover:bg-[#0D1B2A] hover:-translate-y-2"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0D2137] via-[#112240]/50 to-[#0D2137]" />
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
                      
                      <div className="relative p-8">
                        <div className="flex items-start gap-6">
                          {/* Number and Icon */}
                          <div className="relative flex-shrink-0">
                            <div className="w-20 h-20 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af37]/20 group-hover:bg-[#d4af37] transition-all duration-500">
                              <pillar.icon className="w-10 h-10 text-[#d4af37] group-hover:text-[#0A1929]" />
                            </div>
                            <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#d4af37] flex items-center justify-center text-sm font-bold text-[#0A1929] font-serif shadow-lg">
                              {pillar.roman}
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-[#FFFFFF] mb-3 font-serif group-hover:text-[#d4af37] transition-colors">
                              {pillar.title}
                            </h3>
                            <p className="text-[#E0E0E0] text-base leading-relaxed mb-4 font-light">
                              {pillar.description}
                            </p>
                            <div className="p-4 bg-[#0A1929] border-l-4 border-[#d4af37] rounded-r-xl shadow-inner">
                              <p className="text-[#d4af37] italic text-sm font-medium">
                                &ldquo;{pillar.principle}&rdquo;
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-20">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* The Path of Illumination */}
            <section className="mb-20">
              <ScrollReveal>
                <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel text-center">
                  The Path of Illumination
                </h2>
                <p className="text-[#E0E0E0] text-lg text-center max-w-3xl mx-auto mb-12">
                  The journey from darkness to light follows a structured path, with each stage building 
                  upon the last toward ultimate enlightenment.
                </p>
              </ScrollReveal>
              
              <div className="relative max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {pathStages.map((stage, index) => (
                    <ScrollReveal key={index} delay={index * 0.1}>
                      <div className="relative h-full">
                        <div className="p-6 bg-[#0D2137] border border-[#d4af37]/20 rounded-lg text-center hover:border-[#d4af37]/40 transition-colors h-full">
                          <div className="w-14 h-14 rounded-full bg-[#d4af37] flex items-center justify-center mx-auto mb-4">
                            <span className="text-[#0A1929] font-bold text-lg font-cinzel">{stage.stage}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-[#FFFFFF] mb-2 font-cinzel">{stage.title}</h3>
                          <p className="text-sm text-[#E0E0E0]">{stage.description}</p>
                        </div>
                        {index < pathStages.length - 1 && (
                          <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                            <ArrowRight className="w-6 h-6 text-[#d4af37]/40" />
                          </div>
                        )}
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-20">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* Code of the Enlightened */}
            <section className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <ScrollReveal direction="right">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-6 font-cinzel">
                      Code of the Enlightened
                    </h2>
                    <p className="text-[#E0E0E0] text-lg leading-relaxed mb-6">
                      The code by which all members must live forms a framework for ethical behavior and 
                      spiritual advancement. These principles have guided our order for centuries.
                    </p>
                    
                    <div className="space-y-3">
                      {codePoints.map((point, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg hover:border-[#d4af37]/30 transition-colors">
                          <Star className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-[#E0E0E0]">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal direction="left">
                  <div className="relative h-80 lg:h-[500px] rounded-lg overflow-hidden border border-[#d4af37]/20 bg-[#0D2137] flex items-center justify-center">
                    <Building className="w-32 h-32 text-[#d4af37]/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-transparent to-transparent" />
                  </div>
                </ScrollReveal>
              </div>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-20">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* The Sacred Oaths */}
            <section className="mb-20">
              <div className="relative p-8 md:p-12 rounded-lg overflow-hidden border border-[#d4af37]/30">
                <div className="absolute inset-0 bg-gradient-to-r from-[#112240] via-[#0D2137] to-[#112240]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
                
                <div className="relative z-10 max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="relative h-48 lg:h-64 rounded-lg overflow-hidden border border-[#d4af37]/20 bg-[#0D2137] flex items-center justify-center">
                      <BookOpen className="w-24 h-24 text-[#d4af37]/20" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-transparent to-transparent" />
                    </div>
                    
                    <div>
                      <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto lg:mx-0 mb-6 border border-[#d4af37]/30">
                        <Scale className="w-8 h-8 text-[#d4af37]" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-[#FFFFFF] mb-6 font-cinzel text-center lg:text-left">
                        The Sacred Oaths
                      </h3>
                      <p className="text-[#E0E0E0] text-lg leading-relaxed italic text-center lg:text-left">
                        &ldquo;I pledge myself to the pursuit of wisdom, the service of humanity, and the preservation of sacred knowledge. My life is dedicated to the enlightenment of self and others, now and forever. I swear to protect the secrets entrusted to me, to support my brothers and sisters in their journey, and to uphold the principles of our sacred order.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-20">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* Application in Modern Life */}
            <section className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel text-center">
                Application in Modern Life
              </h2>
              <p className="text-[#E0E0E0] text-lg text-center max-w-3xl mx-auto mb-12">
                Our ancient principles find new relevance in the modern world, guiding members through 
                contemporary challenges with timeless wisdom.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {applications.map((app, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-gradient-to-br from-[#0D2137] to-[#112240] border border-[#d4af37]/20 rounded-lg text-center hover:border-[#d4af37]/40 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-4 border border-[#d4af37]/30">
                      <Target className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#FFFFFF] mb-2 font-cinzel">{app.title}</h3>
                    <p className="text-sm text-[#E0E0E0]">{app.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-20">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* Comparative Philosophy */}
            <section className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel text-center">
                Comparative Philosophy
              </h2>
              <p className="text-[#E0E0E0] text-lg text-center max-w-3xl mx-auto mb-12">
                Our teachings share common ground with many of the world&apos;s great philosophical and 
                spiritual traditions, reflecting universal truths recognized across cultures.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {philosophies.map((philosophy, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg hover:border-[#d4af37]/30 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center">
                        <Quote className="w-5 h-5 text-[#d4af37]" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#d4af37] font-cinzel">{philosophy.tradition}</h3>
                    </div>
                    <p className="text-[#FFFFFF] italic mb-3 text-sm">&ldquo;{philosophy.principle}&rdquo;</p>
                    <p className="text-xs text-[#E0E0E0]">Alignment: {philosophy.alignment}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <section className="relative py-16 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#112240] via-[#0D2137] to-[#112240]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
              
              <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel">
                  Embrace the Path
                </h2>
                <p className="text-[#E0E0E0] text-lg mb-8">
                  If these principles resonate with your spirit, you may be ready to take the first 
                  step on the path of enlightenment. Join us in our sacred mission.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-8 py-6 text-lg">
                    <Link href="/membership">
                      Apply for Membership
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10 px-8 py-6 text-lg">
                    <Link href="/our-mission">
                      Explore Our Mission
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
