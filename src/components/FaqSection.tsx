import React, { useState } from 'react';
import { HelpCircle, ChevronDown, PhoneCall, ArrowRight } from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';

interface FaqSectionProps {
  onOpenBooking: () => void;
  onOpenCallModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking, onOpenCallModal }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative bg-[#253f32] py-20 sm:py-28 text-white overflow-hidden">
      <div className="absolute inset-0 dot-matrix opacity-20 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-[#1c3328]/90 backdrop-blur-xs text-stone-100 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>GOT QUESTIONS?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-condensed font-black tracking-tight uppercase leading-[0.92]">
            FREQUENTLY ASKED<br />
            <span className="text-[#f6ead9]">QUESTIONS</span>
          </h2>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
            Everything you need to know about our electrical emergency support, transparent pricing, and safety warranties.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#fdfbf7] text-[#1c2c22] rounded-2xl overflow-hidden shadow-md transition-all duration-200 border border-stone-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-stone-900 cursor-pointer hover:text-[#c44b2b] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#294537] text-white flex items-center justify-center text-xs font-mono font-bold shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#c44b2b] text-white' : 'text-stone-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-stone-700 leading-relaxed border-t border-stone-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help CTA */}
        <div className="mt-12 text-center bg-[#1b3127] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left space-y-1">
            <h4 className="text-lg font-bold text-white">Have a specific electrical concern?</h4>
            <p className="text-xs sm:text-sm text-stone-300">
              Speak directly with an on-call electrical engineer for immediate guidance.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCallModal}
              className="flex items-center gap-2 bg-[#2a4d3d] hover:bg-[#345e4a] text-white border border-white/20 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Direct Call</span>
            </button>
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 bg-[#c44b2b] hover:bg-[#af3f22] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md cursor-pointer"
            >
              <span>Book Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
