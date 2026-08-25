import React from 'react';
import { Home, Shield, Battery, Wifi, Wrench, Building2, Headphones, Calendar, MessageCircle } from 'lucide-react';

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
    description: 'Circuit breakers, DB upgrades, earthing, surge protection & complete panel solutions.',
    icon: Shield,
  },
  {
    id: 3,
    number: '03',
    title: 'Backup Power & Energy Solutions',
    description: 'Inverter setup, generator hookups, EV charger installation, solar wiring & energy solutions.',
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
  {
    id: 6,
    number: '06',
    title: 'Commercial & Industrial Services',
    description: '3-phase power installation, control panels, motor wiring & high-load cabling solutions.',
    icon: Building2,
  },
];

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description, icon: Icon }) => {
  return (
    <div className="group bg-white border border-[#E8E8E8] rounded-lg p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      {/* Icon and Number Row */}
      <div className="flex items-center gap-4 sm:gap-5 lg:gap-6 mb-5 sm:mb-6">
        <div className="w-12 sm:w-13 lg:w-14 h-12 sm:h-13 lg:h-14 rounded-full bg-[#E6EFE7] flex items-center justify-center group-hover:bg-[#D4E8D8] transition-colors flex-shrink-0">
          <Icon className="w-6 sm:w-6 lg:w-7 h-6 sm:h-6 lg:h-7 text-[#1E3D2F]" strokeWidth={1.5} />
        </div>
        <span className="text-3xl sm:text-4xl font-black text-[#B8B8B8] tracking-tight font-['Bebas_Neue']">
          {number}
        </span>
      </div>

      {/* Title with red underline */}
      <h3 className="text-sm sm:text-base font-bold text-[#1E3D2F] uppercase tracking-wide font-['Bebas_Neue'] mb-2">
        {title}
      </h3>
      <div className="w-5 sm:w-6 h-1 bg-[#D33B2F] mb-3 sm:mb-4" />

      {/* Description */}
      <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed font-['Inter']">
        {description}
      </p>
    </div>
  );
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="bg-[#F6F7F2] py-12 sm:py-16 lg:py-28 overflow-hidden">
      {/* Decorative dot pattern */}
      <div className="absolute top-16 sm:top-20 lg:top-24 left-4 sm:left-6 lg:left-8 opacity-25 pointer-events-none">
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2 lg:gap-2.5">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#1E3D2F] rounded-full" />
          ))}
        </div>
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-20">
          {/* Small Label */}
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#1E3D2F] font-semibold mb-4 sm:mb-6 font-['Inter']">
            — OUR SERVICES
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tight mb-3 sm:mb-4 font-['Bebas_Neue'] text-[#1E3D2F]">
            COMPLETE <span className="text-[#D33B2F]">ELECTRICAL</span> SOLUTIONS
          </h2>

          {/* Decorative accent line */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="w-8 sm:w-12 h-0.5 bg-[#D33B2F]" />
            <Wrench className="w-4 sm:w-5 h-4 sm:h-5 text-[#D33B2F]" />
            <div className="w-8 sm:w-12 h-0.5 bg-[#D33B2F]" />
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-[#3A3A3A] max-w-2xl mx-auto leading-relaxed font-['Inter']">
            From small repairs to complete installations, we provide safe, reliable & professional electrical services for homes, businesses & industries.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-12 lg:mb-16">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              number={service.number}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="bg-[#1E3D2F] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 items-center">
            {/* Left: Heading & Description */}
            <div className="lg:col-span-1">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-wide mb-2 font-['Bebas_Neue']">
                Need an Electrician?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-['Inter'] leading-relaxed">
                We're just a call away! Fast, reliable & professional service you can trust.
              </p>
            </div>

            {/* Right: CTA Buttons */}
            <div className="lg:col-span-3 flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* Book Now */}
              <button
                onClick={() => onSelectService('Book Service')}
                className="flex items-center justify-center gap-2 sm:gap-3 bg-[#D33B2F] hover:bg-[#C12815] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex-1 font-['Inter'] text-sm sm:text-base"
              >
                <Calendar className="w-4 sm:w-5 h-4 sm:h-5" />
                <span>BOOK NOW</span>
              </button>

              {/* Call Now */}
              <button
                onClick={() => onSelectService('Call Now')}
                className="flex items-center justify-center gap-2 sm:gap-3 border-2 border-white/30 hover:border-white text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex-1 font-['Inter'] text-sm sm:text-base"
              >
                <Headphones className="w-4 sm:w-5 h-4 sm:h-5" />
                <span>CALL NOW</span>
              </button>

              {/* WhatsApp */}
              <button
                onClick={() => onSelectService('WhatsApp')}
                className="flex items-center justify-center gap-2 sm:gap-3 bg-white/10 hover:bg-white/20 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex-1 font-['Inter'] text-sm sm:text-base"
              >
                <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                <span>WHATSAPP US</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
