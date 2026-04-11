"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Name validation
    if (formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name.";
    }
    
    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    
    // Phone validation (Optional but must be valid if provided)
    const phoneRegex = /^(\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (e.g., +1 234 567 8900).";
    }
    
    // Subject and Message
    if (formData.subject.trim().length < 3) {
      newErrors.subject = "Please enter a subject.";
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }
    
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
      alert("Thank you for your message. Your inquiry has been verified and received. We will respond within 2-3 business days.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div>
        <h2 className="text-2xl font-bold text-[#FFFFFF] mb-6 font-cinzel">Get in Touch</h2>
        <p className="text-[#E0E0E0] text-lg leading-relaxed mb-8">
          We welcome inquiries from seekers of knowledge, potential members, and those interested in our philanthropic work. Our team responds to all legitimate inquiries within 2-3 business days.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#FFFFFF] mb-1">Address</h3>
              <p className="text-[#B0B0B0]">666 Fifth Avenue<br />New York, NY 10103</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#FFFFFF] mb-1">Phone</h3>
              <p className="text-[#B0B0B0]">+1 (425) 543-7872</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#FFFFFF] mb-1">Email</h3>
              <p className="text-[#B0B0B0]">contact@illuminati-ny.org</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#FFFFFF] mb-1">Hours</h3>
              <p className="text-[#B0B0B0]">Monday - Friday: 9:00 AM - 6:00 PM EST<br />Weekend: By appointment only</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <div className="p-8 bg-[#0D2137] border border-[#d4af37]/20 rounded-lg">
          <h2 className="text-2xl font-bold text-[#FFFFFF] mb-6 font-cinzel">Send a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-[#d4af37] mb-2">Your Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full bg-[#0A1929] border ${errors.name ? 'border-red-500' : 'border-[#d4af37]/30'} rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37] transition-colors`}
                placeholder="Your full name"
              />
              {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-[#d4af37] mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full bg-[#0A1929] border ${errors.email ? 'border-red-500' : 'border-[#d4af37]/30'} rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37] transition-colors`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm text-[#d4af37] mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full bg-[#0A1929] border ${errors.phone ? 'border-red-500' : 'border-[#d4af37]/30'} rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37] transition-colors`}
                  placeholder="+1 234 567 8900"
                />
                {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#d4af37] mb-2">Subject *</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className={`w-full bg-[#0A1929] border ${errors.subject ? 'border-red-500' : 'border-[#d4af37]/30'} rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37] transition-colors`}
                placeholder="What is your inquiry about?"
              />
              {errors.subject && <p className="text-red-500 text-[10px] mt-1">{errors.subject}</p>}
            </div>

            <div>
              <label className="block text-sm text-[#d4af37] mb-2">Message *</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full bg-[#0A1929] border ${errors.message ? 'border-red-500' : 'border-[#d4af37]/30'} rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37] transition-colors resize-none`}
                placeholder="Your message..."
              />
              {errors.message && <p className="text-red-500 text-[10px] mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-8 py-4 rounded transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/20 cursor-pointer ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-[#0A1929]/30 border-t-[#0A1929] rounded-full animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
