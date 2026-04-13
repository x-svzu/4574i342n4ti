"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ 
            scale: 1.1, 
            backgroundColor: "#d4af37",
            color: "#0A1929",
            boxShadow: "0 0 25px rgba(212, 175, 55, 0.6)"
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] w-10 h-10 md:w-12 md:h-12 bg-[#0D2137] border border-[#d4af37]/30 text-[#d4af37] rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-colors duration-300 group will-change-transform"
          aria-label="Scroll to top"
        >
          <div className="relative">
            <ChevronUp className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:-translate-y-1" />
            <div className="absolute -inset-2 bg-[#d4af37]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
