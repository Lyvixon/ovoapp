import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { faqs } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx} 
            className="bg-white rounded-2xl border border-stone-200/60 shadow-xs overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left py-5 px-6 flex justify-between items-center gap-4 hover:bg-brand-egg/20 transition-colors focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-extrabold text-[15.5px] sm:text-base text-brand-ink leading-tight">
                {faq.question}
              </span>
              <span className={`w-8 h-8 rounded-full bg-brand-egg flex items-center justify-center text-brand-yolk-dark text-xl font-bold transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-45 text-[#C2583F] bg-[#F8EBE6]' : ''}`}>
                +
              </span>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-5 pt-1 border-t border-stone-200/30 text-brand-ink-light text-sm sm:text-[14.5px] leading-relaxed">
                    {faq.answer}
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
