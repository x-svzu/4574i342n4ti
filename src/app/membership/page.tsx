"use client";

import React, { useState } from "react";
import Link from "@/components/NextLink";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import IlluminatiLogo from "@/components/IlluminatiLogo";
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

const membershipTiers = [
  {
    level: "Apprentice Degree",
    subtitle: "First Degree",
    description: "The beginning of your journey into the mysteries of our order.",
    benefits: ["Foundational teachings", "Community gatherings", "Monthly mentorship", "Digital library access"],
  },
  {
    level: "Fellowcraft Degree",
    subtitle: "Second Degree",
    description: "Deeper immersion into sacred knowledge and responsibilities.",
    benefits: ["Advanced archives", "Regional events", "Personal mentor", "Leadership opportunities"],
  },
  {
    level: "Master Degree",
    subtitle: "Third Degree",
    description: "The highest degree of understanding and service.",
    benefits: ["Complete teachings access", "Global council", "Ceremony leadership", "International network"],
  },
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
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
          <div className="flex justify-center mb-6">
            <IlluminatiLogo size={96} />
          </div>
          
          <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">
            Begin Your Journey to Enlightenment
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#FFFFFF] font-cinzel">
            Join the Brotherhood
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
            <IlluminatiLogo size={20} />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
          </div>
          
          <p className="text-[#E0E0E0] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            For over two centuries, our brotherhood has guided seekers toward enlightenment. 
            Membership is a commitment to the pursuit of wisdom and the betterment of humanity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById("application")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-8 py-4 rounded transition-all duration-300 cursor-pointer"
            >
              <IlluminatiLogo size={20} />
              Begin Your Application
            </button>
            <button 
              onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10 font-semibold px-8 py-4 rounded transition-all duration-300 cursor-pointer"
            >
              Explore Benefits
            </button>
          </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, index) => (
              <div key={index} className="group p-6 bg-[#0A1929] border border-[#d4af37]/10 rounded-lg hover:border-[#d4af37]/30 transition-all">
                <div className="w-11 h-11 rounded-lg bg-[#d4af37]/10 flex items-center justify-center mb-4 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#0A1929] transition-all">
                  <benefit.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#FFFFFF] mb-2 group-hover:text-[#d4af37] transition-colors">{benefit.title}</h3>
                <p className="text-[#B0B0B0] text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
      </section>

      {/* Application Process */}
      <section className="relative py-16 bg-[#0A1929]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">The Path to Membership</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel">Application Process</h2>
            <p className="text-[#B0B0B0] text-base max-w-2xl mx-auto">
              Our thorough selection process ensures those who join are truly committed to enlightenment.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4af37] via-[#d4af37]/30 to-transparent" />
            
            <div className="space-y-6">
              {applicationSteps.map((step, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-[#d4af37] border-2 border-[#0A1929]" />
                  <div className="p-5 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg hover:border-[#d4af37]/30 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#d4af37] font-bold text-sm">{step.step}</span>
                      <h3 className="text-base font-semibold text-[#FFFFFF]">{step.title}</h3>
                    </div>
                    <p className="text-[#B0B0B0] text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="relative py-16 bg-[#0D2137]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
        
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">What We Seek</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel">Membership Requirements</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {requirements.map((req, index) => (
              <div key={index} className="p-5 text-center bg-[#0A1929] border border-[#d4af37]/10 rounded-lg hover:border-[#d4af37]/30 transition-all">
                <div className="w-10 h-10 mx-auto rounded-lg bg-[#d4af37]/10 flex items-center justify-center mb-3 text-[#d4af37]">
                  <req.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-[#FFFFFF] mb-1">{req.title}</h3>
                <p className="text-xs text-[#B0B0B0]">{req.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
      </section>

      {/* Membership Tiers */}
      <section className="relative py-16 bg-[#0A1929]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">Degrees of Enlightenment</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel">Membership Tiers</h2>
            <p className="text-[#B0B0B0] text-base max-w-2xl mx-auto">Progress through the degrees as you deepen your understanding.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {membershipTiers.map((tier, index) => (
              <div key={index} className={`relative p-6 bg-[#0D2137] border rounded-lg ${index === 2 ? 'border-[#d4af37]/40' : 'border-[#d4af37]/10'}`}>
                {index === 2 && <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#d4af37] text-[#0A1929] text-xs font-bold rounded">HIGHEST</div>}
                <h3 className="text-lg font-bold text-[#FFFFFF] mb-1 font-cinzel">{tier.level}</h3>
                <p className="text-[#d4af37] text-xs mb-3">{tier.subtitle}</p>
                <p className="text-[#B0B0B0] text-sm mb-4">{tier.description}</p>
                <div className="space-y-2">
                  {tier.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-[#d4af37] flex-shrink-0" />
                      <span className="text-xs text-[#E0E0E0]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="relative py-16 bg-[#0D2137]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
        
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">Take the First Step</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel">Membership Application</h2>
            <p className="text-[#B0B0B0] text-base">Complete this form to begin your journey. All information is kept strictly confidential.</p>
          </div>

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
