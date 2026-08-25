import React from 'react';
import { ShieldCheck, Star, Clock, CheckCircle2, Award, ArrowRight } from 'lucide-react';
import { TECHNICIANS_DATA } from '../data/mockData';

interface TechniciansSectionProps {
  onBookTechnician: (techName: string) => void;
}

export const TechniciansSection: React.FC<TechniciansSectionProps> = ({ onBookTechnician }) => {
  return (
    <section id="technicians" className="relative bg-[#20372b] py-20 sm:py-28 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-matrix opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#c44b2b]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-[#172c21]/90 backdrop-blur-xs text-stone-100 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
            <Award className="w-4 h-4 text-amber-400" />
            <span>EXPERT CREW</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-condensed font-black tracking-tight uppercase leading-[0.92]">
            MEET OUR CERTIFIED<br />
            <span className="text-[#f6ead9]">MASTER ELECTRICIANS</span>
          </h2>

          <p className="text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto pt-1 font-normal">
            Every ChauhánElectrix technician is thoroughly background-checked, insured, and certified with extensive hands-on experience.
          </p>
        </div>

        {/* Technicians Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECHNICIANS_DATA.map((tech) => (
            <div
              key={tech.id}
              className="bg-[#fdfbf7] text-[#1c2c22] rounded-[24px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between border border-stone-200 group"
              id={`tech-card-${tech.id}`}
            >
              {/* Photo & Badge */}
              <div className="relative h-64 overflow-hidden bg-stone-200">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#233e31]/90 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{tech.badge}</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-400 text-stone-900 text-xs font-black px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-md">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{tech.rating}</span>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-stone-900 tracking-tight">
                      {tech.name}
                    </h3>
                    <span className="text-xs font-bold text-[#c44b2b] bg-amber-50 px-2 py-0.5 rounded">
                      {tech.experience}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 font-semibold mb-3">{tech.title}</p>

                  <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-3 space-y-1.5 text-xs text-stone-700">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Specialty:</span>
                      <span className="font-bold text-stone-900">{tech.specialty}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Jobs Completed:</span>
                      <span className="font-bold text-emerald-700">{tech.jobsCompleted}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onBookTechnician(tech.name)}
                  className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#233d30] hover:bg-[#c44b2b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer shadow-xs group-hover:shadow-md"
                >
                  <span>Request {tech.name.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
