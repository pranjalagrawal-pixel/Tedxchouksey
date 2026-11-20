import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { eventData } from '../data/eventData';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 bg-ted-black text-white border-t border-ted-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-ted-card border border-ted-border text-xs uppercase tracking-widest text-ted-gray-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-ted-red" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight uppercase">
            Frequently <span className="text-ted-red">Asked</span>
          </h2>
          <p className="mt-3 text-ted-gray-400 text-sm sm:text-base">
            Essential guidelines for attendees, students, press, and partners.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {eventData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-ted-card border border-ted-border/70 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between space-x-4 hover:bg-ted-surface/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold font-display text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-ted-dark border border-ted-border text-ted-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-ted-red' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-ted-gray-400 leading-relaxed border-t border-ted-border/40 pt-4 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
