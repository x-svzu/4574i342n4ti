"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "What is the Illuminati?",
    answer: "The Illuminati is a historical and modern organization dedicated to the pursuit of enlightenment, the preservation of ancient wisdom, and the betterment of humanity. Founded in 1776, we continue our mission through a global network of like-minded individuals.",
  },
  {
    question: "Is the Illuminati a secret society?",
    answer: "While we maintain discretion about our specific activities and membership, we are not a 'secret society' in the popular sense. We are a private organization with publicly acknowledged existence. Our secrecy serves practical purposes - protecting our members and preserving the integrity of our teachings.",
  },
  {
    question: "How can I become a member?",
    answer: "Membership is by application only. We seek individuals of integrity, vision, and dedication who demonstrate a genuine commitment to personal growth and service to humanity. Applications are reviewed by our membership committee, and not all applicants are accepted.",
  },
  {
    question: "What are the benefits of membership?",
    answer: "Members gain access to ancient wisdom, a global network of influential individuals, personal development opportunities, philanthropic involvement, exclusive events, and lifetime brotherhood support. However, the true benefit is the journey of enlightenment itself.",
  },
  {
    question: "Is membership expensive?",
    answer: "Membership involves financial commitments appropriate to each member's means. We believe those who have benefited from the order's wisdom should contribute to its continuation and charitable work. Specific amounts are discussed during the application process.",
  },
  {
    question: "Do you control world events?",
    answer: "This is a common misconception. While our members include influential individuals across many fields, we do not 'control' world events. We seek to positively influence society through the actions of our individual members, guided by our principles of enlightenment and service.",
  },
  {
    question: "What do you actually do?",
    answer: "We engage in the study of ancient wisdom, personal development, philanthropic work, and the cultivation of meaningful relationships. Our activities include educational programs, charitable initiatives, ceremonies, and gatherings that strengthen our brotherhood.",
  },
  {
    question: "Is the Illuminati religious?",
    answer: "The Illuminati is not a religion and does not require any specific religious belief. We welcome members of all faiths and none, united by shared principles rather than religious doctrine. Our focus is on universal wisdom that transcends any single tradition.",
  },
  {
    question: "How long does the application process take?",
    answer: "The application process typically takes 2-4 weeks for initial review, followed by interviews and evaluation. The entire process from application to acceptance can take several months. We take our time to ensure mutual fit.",
  },
  {
    question: "Can anyone apply?",
    answer: "Yes, any adult of good character may apply. We do not discriminate based on gender, race, religion, nationality, or background. We seek individuals who share our commitment to enlightenment and service, regardless of their origin.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`border transition-colors duration-300 rounded-xl overflow-hidden ${isOpen ? 'border-[#d4af37]/40 bg-[#0D1B2A]' : 'border-[#d4af37]/10 bg-[#0D2137]'}`}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full p-6 flex items-center justify-between hover:bg-[#d4af37]/5 transition-colors text-left group"
            >
              <span className={`font-serif text-lg transition-colors duration-300 ${isOpen ? 'text-[#d4af37]' : 'text-[#FFFFFF] group-hover:text-[#d4af37]'}`}>{faq.question}</span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#d4af37] text-[#0A1929] rotate-180' : 'bg-[#d4af37]/10 text-[#d4af37]'}`}>
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-2 bg-[#0A1929]/50 border-t border-[#d4af37]/10">
                    <p className="text-[#B0B0B0] leading-relaxed font-light text-base">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
