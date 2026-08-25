import React from 'react';
import { Home, Shield, Battery, Wifi, Wrench, Zap } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

const SERVICES = [
  {
    id: 1,
    number: '01',
    title: 'Residential Electrical Services',
    description: 'Wiring, lighting, switchboards, fan & appliance installation, and more for your home.',
    icon: Home,
  },
  {
    id: 2,
    number: '02',
    title: 'Safety, Protection & Panel Services',
    description: 'Circuit breakers, DB upgrades, earthing, complete panel solutions.',
    icon: Shield,
  },
  {
    id: 3,
    number: '03',
    title: 'Backup Power & Energy Solutions',
    description: 'Inverter setup, generator hookups, solar wiring & energy solutions.',
    icon: Battery,
  },
  {
    id: 4,
    number: '04',
    title: 'Smart Home & Low-Voltage Services',
    description: 'Smart automation, CCTV, networking, intercom & security system installations.',
    icon: Wifi,
  },
  {
    id: 5,
    number: '05',
    title: 'Maintenance & Troubleshooting',
    description: 'Fault finding, load assessment, preventive inspections & 24/7 emergency repairs.',
    icon: Wrench,
  },
];

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  index: number;
  onSelect: (serviceTitle: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description, icon: Icon, onSelect }) => {
  return (
    <div className="group relative rounded-[16px] p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden bg-[#fdfbf7] text-[#1c2c22] border border-stone-200/70" onClick={() => onSelect(title)}>
      {/* Background Number */}
      <div className="absolute -left-8 -top-6 text-9xl font-condensed font-black pointer-events-none select-none opacity-10 text-[#588e73]">
        {number}
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Icon Container */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 flex-shrink-0 transition-all duration-300 group-hover:scale-110 bg-emerald-50 border-2 border-[#588e73]/30">
          <Icon className="w-8 h-8 transition-colors text-[#294537]" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wide mb-2 leading-tight transition-colors text-[#284537]">
          {title}
        </h3>

        {/* Accent Line */}
        <div className="w-8 h-1 rounded-full mb-3 transition-all group-hover:w-12 bg-[#c44b2b]"></div>

        {/* Description */}
        <p className="text-xs sm:text-sm leading-relaxed font-normal line-clamp-3 text-stone-600">
          {description}
        </p>
      </div>

      {/* Hover Arrow Indicator */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#c44b2b]">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="relative bg-[#fdfbf7] py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Background Dot Matrix */}
      <div className="absolute inset-0 dot-matrix opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          {/* Badge: — OUR SERVICES */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-stone-300 bg-white text-[#294537] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
            <Zap className="w-4 h-4 text-[#c44b2b] fill-[#c44b2b]" />
            <span>OUR SERVICES</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-condensed font-black tracking-tight text-[#294537] uppercase leading-[0.92]">
            COMPLETE<br />
            <span className="text-[#c44b2b]">ELECTRICAL SOLUTIONS</span>
          </h2>

          {/* Description */}
          <p className="text-stone-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto pt-1 font-normal drop-shadow-xs">
            From small repairs to complete installations, we provide safe, reliable & professional electrical services for homes, businesses & industries.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              number={service.number}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
              onSelect={onSelectService}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
