import React from 'react';
import {
  ClipboardList,
  Calendar,
  FileText,
  HardHat,
  Users,
  Wrench,
  Clock,
  ShieldCheck,
  ArrowRight,
  CreditCard,
  Workflow,
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';

interface HowItWorksSectionProps {
  onOpenBooking: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenBooking }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return (
          <div className="w-20 h-20 rounded-full bg-emerald-50 border-4 border-white shadow-lg flex items-center justify-center text-[#294537]">
            <ClipboardList className="w-10 h-10 text-[#294537]" />
          </div>
        );
      case 1:
        return (
          <div className="w-20 h-20 rounded-full bg-emerald-50 border-4 border-white shadow-lg flex items-center justify-center text-[#294537]">
            <Calendar className="w-10 h-10 text-[#294537]" />
          </div>
        );
      case 2:
        return (
          <div className="w-20 h-20 rounded-full bg-emerald-50 border-4 border-white shadow-lg flex items-center justify-center text-[#294537]">
            <FileText className="w-10 h-10 text-[#294537]" />
          </div>
        );
      case 3:
        return (
          <div className="w-20 h-20 rounded-full bg-emerald-50 border-4 border-white shadow-lg flex items-center justify-center text-[#294537]">
            <HardHat className="w-10 h-10 text-amber-500" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="process" className="relative bg-[#294537] py-20 sm:py-28 text-white overflow-hidden">
      {/* Giant Terracotta Circular Background Arc matching Ref Image 3 */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[340px] sm:w-[580px] md:w-[780px] lg:w-[960px] h-[260px] sm:h-[380px] md:h-[480px] bg-[#c44b2b] rounded-t-full opacity-90 -z-0" />
      
      {/* Background Dot Matrix */}
      <div className="absolute inset-0 dot-matrix opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Pill Badge & Header matching Ref Image 3 */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          {/* Badge: HOW IT WORKS */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-[#203a2e]/90 backdrop-blur-xs text-stone-100 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
            <Workflow className="w-5 h-5 text-amber-400" />
            <span>HOW IT WORKS</span>
          </div>

          {/* Heading: SIMPLE PROCESS, POWERFUL RESULTS */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-condensed font-black tracking-tight text-[#fbf7ee] uppercase leading-[0.92]">
            SIMPLE PROCESS,<br />
            <span className="text-[#f5ebd7]">POWERFUL RESULTS</span>
          </h2>

          <p className="text-stone-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl text-balance mx-auto pt-1 font-normal drop-shadow-xs">
            Booking our electrical services is quick and easy. Here&apos;s how we get the job done.
          </p>
        </div>

        {/* 5 Process Cards with numbers & dashed arrow connectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col items-center">
              {/* Step Number on top (01, 02, 03, 04) in light green condensed font */}
              <div className="text-5xl sm:text-6xl font-condensed font-black text-[#588e73] mb-3 select-none">
                {step.number}
              </div>

              {/* White Card Container */}
              <div
                className="w-full  bg-[#fdfbf7] text-[#1c2c22] rounded-[24px] p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center border border-stone-200/70 group md:min-h-60 justify-between cursor-pointer"
                onClick={onOpenBooking}
                id={`process-step-card-${step.number}`}
              >
                {/* Circular Icon Container */}
                <div className="-mt-14 mb-4 group-hover:scale-105 transition-transform duration-300">
                  {getStepIcon(idx)}
                </div>

                {/* Step Title */}
                <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wide text-[#284537] mb-3 leading-snug">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal mb-4">
                  {step.description}
                </p>

                {/* Bottom decorative green pill line */}
                <div className="w-10 h-1 bg-[#284537] rounded-full group-hover:w-16 group-hover:bg-[#c44b2b] transition-all duration-300"></div>
              </div>

              {/* Dashed connector line between steps for large screens */}
              {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="hidden lg:flex absolute top-6 -right-4 w-8 items-center justify-center text-stone-300/80 z-20 pointer-events-none">
                  <div className="w-full border-t-2 border-dashed border-white/60"></div>
                  <ArrowRight className="w-4 h-4 text-white -ml-2" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
