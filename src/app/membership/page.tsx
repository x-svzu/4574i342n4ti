"use client";

import React, { useState } from "react";
import Link from "@/components/NextLink";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import IlluminatiLogo from "@/components/IlluminatiLogo";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Eye, Star, Shield, Users, BookOpen, Globe, Heart,
  Check, Award, Lock, Zap, Briefcase, Send, ChevronDown
} from "lucide-react";

const benefits = [
  { icon: BookOpen, title: "Ancient Wisdom", description: "Access to centuries of accumulated knowledge and sacred texts." },
  { icon: Users, title: "Global Network", description: "Connect with influential leaders across 120+ countries." },
  { icon: Zap, title: "Personal Growth", description: "Structured programs to unlock your full potential." },
  { icon: Heart, title: "Philanthropy", description: "Participate in meaningful charitable initiatives." },
  { icon: Star, title: "Exclusive Events", description: "Private gatherings at our sacred temples worldwide." },
  { icon: Shield, title: "Lifetime Support", description: "Eternal brotherhood support and mentorship." },
];

const applicationSteps = [
  { step: "01", title: "Submit Application", description: "Complete the membership inquiry form with your details." },
  { step: "02", title: "Initial Review", description: "Our membership committee reviews your application." },
  { step: "03", title: "Interview", description: "Selected candidates are invited for a personal interview." },
  { step: "04", title: "Deliberation", description: "The committee reaches a decision on your candidacy." },
  { step: "05", title: "Acceptance", description: "Successful applicants begin their journey as an Initiate." },
];

const requirements = [
  { icon: Shield, title: "Integrity", description: "Demonstrated moral character" },
  { icon: Star, title: "Leadership", description: "Proven leadership abilities" },
  { icon: Award, title: "Success", description: "Achievement in your field" },
  { icon: Eye, title: "Vision", description: "Commitment to enlightenment" },
];

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica",
  "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
  "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France",
  "Gabon", "Gambias", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
  "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
  "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
  "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
  "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
  "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia",
  "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland",
  "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
  "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
  "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
  "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
  "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu",
  "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", country: "",
    occupation: "", motivation: "", agreeTerms: false, agreeSecrecy: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Name validation
    if (formData.firstName.trim().length < 2) newErrors.firstName = "First name must be at least 2 characters.";
    if (formData.lastName.trim().length < 2) newErrors.lastName = "Last name must be at least 2 characters.";
    
    // Email validation (RFC 5322 compliant regex)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    
    // Phone validation (International format)
    // Allows: +1234567890, 123-456-7890, (123) 456-7890, 1234567890
    const phoneRegex = /^(\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (e.g., +1 234 567 8900).";
    } else if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    }
    
    // Other fields
    if (!formData.country) newErrors.country = "Please select your country.";
    if (formData.occupation.trim().length < 3) newErrors.occupation = "Please enter a valid occupation.";
    if (formData.motivation.trim().length < 20) newErrors.motivation = "Please provide a more detailed motivation (min 20 chars).";
    if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the Terms of Service.";
    if (!formData.agreeSecrecy) newErrors.agreeSecrecy = "You must pledge to maintain secrecy.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your application. Your credentials have been verified. We will review your candidacy and contact you within 2-4 weeks.");
      setFormData({
        firstName: "", lastName: "", email: "", phone: "", country: "",
        occupation: "", motivation: "", agreeTerms: false, agreeSecrecy: false,
      });
      setErrors({});
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0A1929]">
      <Navigation />

      {/* Hero Section - Clean */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-b from-[#0D2137] via-[#0A1929] to-[#0A1929]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <ScrollReveal direction="down">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <IlluminatiLogo size={120} />
                <div className="absolute inset-0 bg-[#d4af37]/20 blur-3xl rounded-full -z-10 scale-150" />
              </div>
            </div>
            
            <p className="text-[#d4af37] text-xs tracking-[0.4em] mb-6 uppercase font-bold">
              Begin Your Journey to Enlightenment
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight text-[#FFFFFF] font-serif tracking-tighter">
              Join the Brotherhood
            </h1>
            
            <div className="flex items-center justify-center gap-6 mb-10">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
              <div className="w-3 h-3 bg-[#d4af37] rotate-45 shadow-[0_0_15px_#d4af37]" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
            </div>
            
            <p className="text-[#E0E0E0] text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              For over two centuries, our brotherhood has guided seekers toward enlightenment. 
              Membership is a commitment to the pursuit of wisdom and the betterment of humanity.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => document.getElementById("application")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#d4af37] to-[#c9a431] text-[#0A1929] font-bold px-10 py-5 rounded-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-500 cursor-pointer text-lg"
              >
                <IlluminatiLogo size={24} />
                Begin Your Application
              </button>
              <button 
                onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-3 border-2 border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10 font-bold px-10 py-5 rounded-lg transition-all duration-300 cursor-pointer text-lg"
              >
                Explore Benefits
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="relative py-16 bg-[#0D2137]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
        
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">Member Benefits</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel">What Membership Offers</h2>
            <p className="text-[#B0B0B0] text-base max-w-2xl mx-auto">
              As a member, you gain access to resources and opportunities that can transform your life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group h-full p-8 bg-[#0A1929] border border-[#d4af37]/10 rounded-xl hover:border-[#d4af37]/40 transition-all duration-500 hover:bg-[#0D1B2A] hover:-translate-y-2 shadow-xl">
                  <div className="w-14 h-14 rounded-xl bg-[#d4af37]/10 flex items-center justify-center mb-6 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#0A1929] transition-all duration-500 shadow-lg">
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#FFFFFF] mb-3 group-hover:text-[#d4af37] transition-colors font-serif">{benefit.title}</h3>
                  <p className="text-[#B0B0B0] text-base leading-relaxed font-light">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
      </section>

      {/* Application Process */}
      <section className="relative py-16 bg-[#0A1929]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">The Path to Membership</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel">Application Process</h2>
              <p className="text-[#B0B0B0] text-base max-w-2xl mx-auto">
                Our thorough selection process ensures those who join are truly committed to enlightenment.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4af37] via-[#d4af37]/30 to-transparent" />
            
            <div className="space-y-6">
              {applicationSteps.map((step, index) => (
                <ScrollReveal key={index} delay={index * 0.1} direction="left">
                  <div className="relative pl-12">
                    <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-[#d4af37] border-2 border-[#0A1929]" />
                    <div className="p-5 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg hover:border-[#d4af37]/30 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#d4af37] font-bold text-sm">{step.step}</span>
                        <h3 className="text-base font-semibold text-[#FFFFFF]">{step.title}</h3>
                      </div>
                      <p className="text-[#B0B0B0] text-sm">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="relative py-16 bg-[#0D2137]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
        
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">What We Seek</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel">Membership Requirements</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {requirements.map((req, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="p-5 text-center bg-[#0A1929] border border-[#d4af37]/10 rounded-lg hover:border-[#d4af37]/30 transition-all h-full">
                  <div className="w-10 h-10 mx-auto rounded-lg bg-[#d4af37]/10 flex items-center justify-center mb-3 text-[#d4af37]">
                    <req.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#FFFFFF] mb-1">{req.title}</h3>
                  <p className="text-xs text-[#B0B0B0]">{req.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
      </section>

      {/* Structure of the Order: The Degrees of Illumination */}
      <section className="relative py-24 bg-[#0A1929] overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37] rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4af37] rounded-full blur-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <ScrollReveal direction="down">
              <p className="text-[#d4af37] text-xs tracking-[0.5em] mb-4 uppercase font-bold">The Path of Initiation</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6 font-serif tracking-tight">Structure of the Order</h2>
              <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-8" />
              <p className="text-[#B0B0B0] text-lg max-w-3xl mx-auto leading-relaxed font-light">
                The path of the Illuminati is one of structured progression, intellectual refinement, and gradual initiation. 
                Our Order is delineated into three distinct Classes, each representing a deeper level of commitment and influence.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="space-y-32">
            {/* Class I: The Nursery */}
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-4 sticky top-24">
                  <div className="p-8 bg-[#0D2137] border-l-4 border-[#d4af37] rounded-r-2xl shadow-2xl">
                    <span className="text-[#d4af37] text-sm font-bold tracking-widest uppercase mb-2 block">Class I</span>
                    <h3 className="text-3xl font-bold text-[#FFFFFF] mb-4 font-serif">The Nursery</h3>
                    <blockquote className="text-[#E0E0E0] italic text-sm border-l border-[#d4af37]/30 pl-4 mb-6">
                      "Dedicated to the cultivation of the mind, logical inquiry, intellectual liberation, and absolute self-mastery."
                    </blockquote>
                    <p className="text-[#B0B0B0] text-sm leading-relaxed">
                      Entry into the Order begins here. The initiate is stripped of societal conditioning and taught to observe the world through the unclouded lens of reason.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  {[
                    { degree: "Degree 0", title: "The Aspirant", subtitle: "The Probationer", desc: "The initial stage of observation and testing of character." },
                    { degree: "Degree I", title: "Minerval", subtitle: "The Student of Reason", desc: "Immersion into the foundational philosophies of enlightenment." },
                    { degree: "Degree II", title: "Illuminatus Minor", subtitle: "The Practitioner", desc: "The application of reason in daily life and personal conduct." }
                  ].map((d, i) => (
                    <div key={i} className="group p-6 bg-[#0D2137]/40 border border-[#d4af37]/10 rounded-xl hover:border-[#d4af37]/40 transition-all duration-500 hover:bg-[#0D2137]/60">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <span className="text-[#d4af37] text-[10px] font-bold tracking-[0.2em] uppercase">{d.degree}</span>
                          <h4 className="text-xl font-bold text-[#FFFFFF] font-serif group-hover:text-[#d4af37] transition-colors">{d.title}</h4>
                          <p className="text-[#d4af37]/60 text-xs italic mb-2">{d.subtitle}</p>
                        </div>
                        <p className="text-[#B0B0B0] text-sm max-w-md md:text-right font-light">{d.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Class II: The Masonic Grades */}
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-4 lg:order-2 sticky top-24">
                  <div className="p-8 bg-[#0D2137] border-r-4 border-[#d4af37] rounded-l-2xl shadow-2xl text-right">
                    <span className="text-[#d4af37] text-sm font-bold tracking-widest uppercase mb-2 block">Class II</span>
                    <h3 className="text-3xl font-bold text-[#FFFFFF] mb-4 font-serif">The Masonic Grades</h3>
                    <blockquote className="text-[#E0E0E0] italic text-sm border-r border-[#d4af37]/30 pr-4 mb-6">
                      "Focused on the cultivation of societal influence, fraternal bonds, professional elevation, and strict organizational ethics."
                    </blockquote>
                    <p className="text-[#B0B0B0] text-sm leading-relaxed">
                      Having mastered the self, the initiate steps into the wider network. This class concerns itself with the practical application of our philosophies in the material world.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-8 lg:order-1 space-y-6">
                  {[
                    { degree: "Degree III", title: "Apprentice of the Craft", desc: "Learning the tools of societal influence and fraternal cooperation." },
                    { degree: "Degree IV", title: "Fellow of the Order", desc: "Deepening the bonds of brotherhood and shared purpose." },
                    { degree: "Degree V", title: "Master of Influence", desc: "Exerting enlightened leadership within professional and social circles." },
                    { degree: "Degree VI", title: "Illuminatus Major", subtitle: "The Social Architect", desc: "Designing structures that guide society toward progress." },
                    { degree: "Degree VII", title: "Illuminatus Dirigens", subtitle: "The Director", desc: "Overseeing regional operations and strategic initiatives." }
                  ].map((d, i) => (
                    <div key={i} className="group p-6 bg-[#0D2137]/40 border border-[#d4af37]/10 rounded-xl hover:border-[#d4af37]/40 transition-all duration-500 hover:bg-[#0D2137]/60">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <span className="text-[#d4af37] text-[10px] font-bold tracking-[0.2em] uppercase">{d.degree}</span>
                          <h4 className="text-xl font-bold text-[#FFFFFF] font-serif group-hover:text-[#d4af37] transition-colors">{d.title}</h4>
                          {d.subtitle && <p className="text-[#d4af37]/60 text-xs italic mb-2">{d.subtitle}</p>}
                        </div>
                        <p className="text-[#B0B0B0] text-sm max-w-md md:text-right font-light">{d.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Class III: The Mysteries */}
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-4 sticky top-24">
                  <div className="p-8 bg-[#0A1929] border border-[#d4af37]/30 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.1)] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <span className="text-[#d4af37] text-sm font-bold tracking-widest uppercase mb-2 block relative z-10">Class III</span>
                    <h3 className="text-3xl font-bold text-[#FFFFFF] mb-4 font-serif relative z-10">The Mysteries</h3>
                    <blockquote className="text-[#E0E0E0] italic text-sm border-l border-[#d4af37]/30 pl-4 mb-6 relative z-10">
                      "Reserved for executive strategy, global philanthropic stewardship, and high philosophical governance."
                    </blockquote>
                    <p className="text-[#B0B0B0] text-sm leading-relaxed relative z-10">
                      The innermost circle. Those who attain the Mysteries are tasked with actively shaping the future through strategic benevolence and enlightened leadership.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  {[
                    { degree: "Degree VIII", title: "Presbyter", subtitle: "The Priest of Philosophy", desc: "Guardians of the Order's highest philosophical tenets." },
                    { degree: "Degree IX", title: "Regent", subtitle: "The Prince of the Order", desc: "Executive leadership and sovereign governance of the brotherhood." },
                    { degree: "Degree X", title: "Magus", subtitle: "The Master of Strategy", desc: "Architects of global impact and long-term philanthropic vision." },
                    { degree: "Degree XI", title: "Rex", subtitle: "The Sovereign of Reason", desc: "The ultimate realization of enlightenment and leadership." }
                  ].map((d, i) => (
                    <div key={i} className="group p-8 bg-gradient-to-r from-[#0D2137] to-[#0A1929] border border-[#d4af37]/20 rounded-xl hover:border-[#d4af37]/60 transition-all duration-700 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-full border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] font-serif text-lg group-hover:bg-[#d4af37] group-hover:text-[#0A1929] transition-all duration-500">
                            {d.degree.split(' ')[1]}
                          </div>
                          <div>
                            <span className="text-[#d4af37] text-[10px] font-bold tracking-[0.2em] uppercase">{d.degree}</span>
                            <h4 className="text-2xl font-bold text-[#FFFFFF] font-serif group-hover:text-[#d4af37] transition-colors">{d.title}</h4>
                            <p className="text-[#d4af37]/60 text-xs italic">{d.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-[#B0B0B0] text-sm max-w-xs md:text-right font-light leading-relaxed">{d.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Administrative & Specialized Councils */}
          <div className="mt-40">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h3 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-serif">Administrative & Specialized Councils</h3>
                <p className="text-[#B0B0B0] text-base max-w-2xl mx-auto">
                  Overseeing the integrity, security, and forward momentum of the Order through specialized executive bodies.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "The Insinuators", subtitle: "Recruitment & Integration", desc: "The Division of Recruitment, Vetting, and Integration. Ensuring only the most worthy enter our halls." },
                  { title: "The Areopagites", subtitle: "Supreme Governing Council", desc: "The Supreme Governing Council of the Order. Maintaining the laws and traditions of the brotherhood." },
                  { title: "The Silent Philanthropists", subtitle: "Global Stewardship", desc: "The Executive Committee for External Impact. Directing our resources toward strategic benevolence." }
                ].map((c, i) => (
                  <div key={i} className="p-8 bg-[#0D2137] border border-[#d4af37]/10 rounded-2xl hover:border-[#d4af37]/40 transition-all duration-500 group text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#d4af37]/5 flex items-center justify-center mb-6 border border-[#d4af37]/20 group-hover:bg-[#d4af37] transition-all duration-500">
                      <Shield className="w-8 h-8 text-[#d4af37] group-hover:text-[#0A1929]" />
                    </div>
                    <h4 className="text-xl font-bold text-[#FFFFFF] mb-2 font-serif group-hover:text-[#d4af37] transition-colors">{c.title}</h4>
                    <p className="text-[#d4af37] text-[10px] font-bold uppercase tracking-widest mb-4">{c.subtitle}</p>
                    <p className="text-[#B0B0B0] text-sm font-light leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="relative py-16 bg-[#0D2137]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
        
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">Take the First Step</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel">Membership Application</h2>
              <p className="text-[#B0B0B0] text-base">Complete this form to begin your journey. All information is kept strictly confidential.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <form onSubmit={handleSubmit} className="p-6 bg-[#0A1929] border border-[#d4af37]/20 rounded-lg">
              {/* Personal Information */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-[#d4af37] mb-4 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#d4af37] mb-1.5">First Name *</label>
                    <input type="text" required value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className={`w-full bg-[#0D2137] border ${errors.firstName ? 'border-red-500' : 'border-[#d4af37]/30'} rounded px-3 py-2.5 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#d4af37]`} />
                    {errors.firstName && <p className="text-red-500 text-[10px] mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-xs text-[#d4af37] mb-1.5">Last Name *</label>
                    <input type="text" required value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className={`w-full bg-[#0D2137] border ${errors.lastName ? 'border-red-500' : 'border-[#d4af37]/30'} rounded px-3 py-2.5 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#d4af37]`} />
                    {errors.lastName && <p className="text-red-500 text-[10px] mt-1">{errors.lastName}</p>}
                  </div>
                  <div>
                    <label className="block text-xs text-[#d4af37] mb-1.5">Email *</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className={`w-full bg-[#0D2137] border ${errors.email ? 'border-red-500' : 'border-[#d4af37]/30'} rounded px-3 py-2.5 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#d4af37]`} />
                    {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs text-[#d4af37] mb-1.5">Phone *</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className={`w-full bg-[#0D2137] border ${errors.phone ? 'border-red-500' : 'border-[#d4af37]/30'} rounded px-3 py-2.5 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#d4af37]`} placeholder="+1 234 567 8900" />
                    {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs text-[#d4af37] mb-1.5">Country *</label>
                    <select 
                      required 
                      value={formData.country} 
                      onChange={(e) => setFormData({...formData, country: e.target.value})} 
                      className={`w-full bg-[#0D2137] border ${errors.country ? 'border-red-500' : 'border-[#d4af37]/30'} rounded px-3 py-2.5 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#d4af37] appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>Select your country</option>
                      {countries.map((country) => (
                        <option key={country} value={country} className="bg-[#0D2137]">
                          {country}
                        </option>
                      ))}
                    </select>
                    {errors.country && <p className="text-red-500 text-[10px] mt-1">{errors.country}</p>}
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-[#d4af37] mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Professional Information
                </h3>
                <div>
                  <label className="block text-xs text-[#d4af37] mb-1.5">Occupation *</label>
                  <input type="text" required value={formData.occupation} onChange={(e) => setFormData({...formData, occupation: e.target.value})} className={`w-full bg-[#0D2137] border ${errors.occupation ? 'border-red-500' : 'border-[#d4af37]/30'} rounded px-3 py-2.5 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#d4af37]`} />
                  {errors.occupation && <p className="text-red-500 text-[10px] mt-1">{errors.occupation}</p>}
                </div>
              </div>

              {/* Motivation */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-[#d4af37] mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Your Motivation
                </h3>
                <div>
                  <label className="block text-xs text-[#d4af37] mb-1.5">Why do you seek enlightenment? *</label>
                  <textarea required rows={4} value={formData.motivation} onChange={(e) => setFormData({...formData, motivation: e.target.value})} className={`w-full bg-[#0D2137] border ${errors.motivation ? 'border-red-500' : 'border-[#d4af37]/30'} rounded px-3 py-2.5 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#d4af37] resize-none`} placeholder="Share your motivation for seeking membership..." />
                  {errors.motivation && <p className="text-red-500 text-[10px] mt-1">{errors.motivation}</p>}
                </div>
              </div>

              {/* Sacred Pledge */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-[#d4af37] mb-4 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Sacred Pledge
                </h3>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={formData.agreeTerms} onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})} className="mt-0.5 w-4 h-4 rounded border-[#d4af37]/30 bg-[#0D2137] text-[#d4af37] focus:ring-[#d4af37]" />
                    <span className="text-xs text-[#E0E0E0]">I have read and agree to the Terms of Service and Privacy Policy. I understand that membership is a privilege, not a right. *</span>
                  </label>
                  {errors.agreeTerms && <p className="text-red-500 text-[10px] ml-7">{errors.agreeTerms}</p>}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={formData.agreeSecrecy} onChange={(e) => setFormData({...formData, agreeSecrecy: e.target.checked})} className="mt-0.5 w-4 h-4 rounded border-[#d4af37]/30 bg-[#0D2137] text-[#d4af37] focus:ring-[#d4af37]" />
                    <span className="text-xs text-[#E0E0E0]">I pledge to maintain the secrecy of our sacred knowledge and protect the confidentiality of our brotherhood. *</span>
                  </label>
                  {errors.agreeSecrecy && <p className="text-red-500 text-[10px] ml-7">{errors.agreeSecrecy}</p>}
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-6 py-3.5 rounded transition-all duration-300 cursor-pointer text-sm ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-[#0A1929]/30 border-t-[#0A1929] rounded-full animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                {isSubmitting ? "Verifying Credentials..." : "Submit Application"}
              </button>
            </form>
          </ScrollReveal>

          <p className="text-center text-xs text-[#666] mt-4 italic">
            All applications are reviewed by our membership committee. Please allow 2-4 weeks for a response.
          </p>
        </div>
      </section>

      {/* CTA Section - Clean */}
      <section className="relative py-16 bg-gradient-to-b from-[#0A1929] to-[#0D2137]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-5">
            <IlluminatiLogo size={48} />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-[#FFFFFF] mb-3 font-cinzel">Ready to Begin Your Journey?</h2>
          <p className="text-[#B0B0B0] text-sm mb-6">Join thousands of seekers who have found purpose and wisdom within our brotherhood.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              onClick={() => document.getElementById("application")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-6 py-3 rounded transition-all duration-300 cursor-pointer text-sm"
            >
              <IlluminatiLogo size={18} />
              Apply for Membership
            </button>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10 font-semibold px-6 py-3 rounded transition-all duration-300 cursor-pointer text-sm">
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
