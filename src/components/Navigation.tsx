"use client";

import { useState } from "react";
import Link from "./NextLink";
import { ChevronDown, Menu, X } from "lucide-react";
import IlluminatiLogo from "./IlluminatiLogo";

const navigationItems = {
  about: [
    { label: "Who We Are", href: "/who-we-are" },
    { label: "Our Mission", href: "/our-mission" },
    { label: "Leadership", href: "/leadership" },
    { label: "Tenets & Purpose", href: "/tenets-and-purpose" },
    { label: "Our History", href: "/our-history" },
  ],
  membership: [
    { label: "Join the Brotherhood", href: "/membership" },
    { label: "Membership Rewards", href: "/membership-rewards" },
    { label: "Testimonials", href: "/testimonials" },
  ],
  philanthropy: [
    { label: "Global Initiatives", href: "/global-initiatives" },
    { label: "Charity Programs", href: "/charity-programs" },
    { label: "Global Presence", href: "/global-presence" },
  ],
  resources: [
    { label: "FAQs", href: "/faqs" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D2137] border-b border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center group">
              <div className="flex items-center gap-3">
                <div className="relative group">
                  <IlluminatiLogo size={48} />
                  <div className="absolute inset-0 rounded-full bg-[#d4af37]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="font-cinzel text-lg font-semibold text-[#d4af37] tracking-wide leading-tight">
                    Illuminati Lodge
                  </h1>
                  <p className="text-[10px] text-[#8a8a8a] tracking-[0.2em] font-cinzel mt-0.5">OF NEW YORK</p>
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <a href="/" className="text-sm text-[#E0E0E0] hover:text-[#d4af37] transition-colors duration-300 font-medium tracking-wide py-2">
                Home
              </a>

              {/* About Dropdown */}
              <div className="relative group">
                <button className="text-sm transition-colors duration-300 flex items-center gap-1 cursor-pointer tracking-wide text-[#E0E0E0] hover:text-[#d4af37] py-2">
                  About
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-[#0D2137] border border-[#d4af37]/30 rounded-lg shadow-2xl py-2 min-w-[200px]">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0D2137] border-l border-t border-[#d4af37]/30 rotate-45" />
                    {navigationItems.about.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-[#E0E0E0] hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors relative z-10"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Membership Dropdown */}
              <div className="relative group">
                <button className="text-sm transition-colors duration-300 flex items-center gap-1 cursor-pointer tracking-wide text-[#E0E0E0] hover:text-[#d4af37] py-2">
                  Membership
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-[#0D2137] border border-[#d4af37]/30 rounded-lg shadow-2xl py-2 min-w-[200px]">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0D2137] border-l border-t border-[#d4af37]/30 rotate-45" />
                    {navigationItems.membership.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-[#E0E0E0] hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors relative z-10"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Philanthropy Dropdown */}
              <div className="relative group">
                <button className="text-sm transition-colors duration-300 flex items-center gap-1 cursor-pointer tracking-wide text-[#E0E0E0] hover:text-[#d4af37] py-2">
                  Philanthropy
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-[#0D2137] border border-[#d4af37]/30 rounded-lg shadow-2xl py-2 min-w-[200px]">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0D2137] border-l border-t border-[#d4af37]/30 rotate-45" />
                    {navigationItems.philanthropy.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-[#E0E0E0] hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors relative z-10"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button className="text-sm transition-colors duration-300 flex items-center gap-1 cursor-pointer tracking-wide text-[#E0E0E0] hover:text-[#d4af37] py-2">
                  Resources
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-[#0D2137] border border-[#d4af37]/30 rounded-lg shadow-2xl py-2 min-w-[200px]">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0D2137] border-l border-t border-[#d4af37]/30 rotate-45" />
                    {navigationItems.resources.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-[#E0E0E0] hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors relative z-10"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link href="/membership">
                <button className="inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] text-xs font-bold px-4 py-2 rounded transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/20 cursor-pointer">
                  Seek Enlightenment
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#d4af37] hover:text-[#f0d77a] transition-colors cursor-pointer z-[60]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[55] bg-[#0D2137] lg:hidden overflow-y-auto pt-4">
          <div className="px-6 py-4 space-y-6 pb-20">
            <a 
              href="/" 
              className="block text-xl font-bold text-[#FFFFFF] hover:text-[#d4af37] font-serif tracking-tight" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            
            <div className="space-y-3">
              <div className="text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.4em] opacity-50 border-b border-[#d4af37]/10 pb-1">About</div>
              <div className="grid grid-cols-1 gap-1.5">
                {navigationItems.about.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block text-lg text-[#E0E0E0] hover:text-[#d4af37] font-medium transition-colors py-0.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.4em] opacity-50 border-b border-[#d4af37]/10 pb-1">Membership</div>
              <div className="grid grid-cols-1 gap-1.5">
                {navigationItems.membership.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block text-lg text-[#E0E0E0] hover:text-[#d4af37] font-medium transition-colors py-0.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.4em] opacity-50 border-b border-[#d4af37]/10 pb-1">Philanthropy</div>
              <div className="grid grid-cols-1 gap-1.5">
                {navigationItems.philanthropy.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block text-lg text-[#E0E0E0] hover:text-[#d4af37] font-medium transition-colors py-0.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.4em] opacity-50 border-b border-[#d4af37]/10 pb-1">Resources</div>
              <div className="grid grid-cols-1 gap-1.5">
                {navigationItems.resources.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block text-lg text-[#E0E0E0] hover:text-[#d4af37] font-medium transition-colors py-0.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="pt-4 flex flex-col gap-4">
              <Link href="/membership" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full inline-flex items-center justify-center gap-3 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] text-base font-bold px-6 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-[#d4af37]/10 cursor-pointer">
                  Seek Enlightenment
                </button>
              </Link>
              
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-[#d4af37] font-semibold text-[11px] uppercase tracking-[0.2em] border border-[#d4af37]/20 rounded-lg hover:bg-[#d4af37]/5 transition-colors cursor-pointer"
              >
                Close Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
