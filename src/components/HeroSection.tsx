import React from 'react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenCallModal: () => void;
}

const heroImage = "https://www.figma.com/api/mcp/asset/9da4f183-81aa-409f-9e87-46954c0dfc80.png";

export const HeroSection: React.FC<HeroSectionProps> = (props: HeroSectionProps) => {
  const { onOpenBooking, onOpenCallModal } = props;
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-[#587e60] pt-20 sm:pt-24 lg:pt-28 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Hero Image - Positioned at Bottom Center */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-125 md:w-xl lg:w-lg xl:w-2xl px-2 sm:px-4 lg:px-0">
        <img
          src={heroImage}
          alt="Expert electrician"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Red diagonal accent shape */}
      <div className="absolute bottom-0 md:-bottom-6 lg:-bottom-120 xl:-bottom-120 left-0 w-full h-1/2 sm:h-2/4 lg:h-1/1  bg-[#9e2a2b]/60 rounded-t-[800px] sm:rounded-t-[1200px] lg:rounded-t-[5000px] z-20" />

      {/* Content Container */}
      <div className="relative z-30 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-45 xl:gap-50 items-center">
          {/* Left: Headline */}
          <div>
            <h2 className="text-[clamp(20px,6.2vw,30px)] sm:text-3xl lg:text-3xl text-center font-black text-[white] leading-tight tracking-tight font-['Outfit'] whitespace-nowrap">
              EXPERT CARE FOR A<br />POWERED HOME
            </h2>
          </div>

          {/* Right: Description */}
          <div className='hidden lg:block lg:w-90 xl:w-130'>
            <p className="text-sm sm:text-sm lg:text-base xl:text-xl text-white/75 leading-relaxed font-['Outfit']">
              We provide high-quality electrical repair and maintenance services using modern diagnostic tools with a safety-first approach. From routine wiring upgrades to complex emergency troubleshooting, your home's power system is in expert hands.
            </p>
          </div>
        </div>
      </div>

      {/* Massive "INSTANT REPAIR" Text overlaid on red accent */}
      <div className="absolute bottom-13 sm:bottom-6 lg:bottom-20 xl:bottom-20 left-0 right-0 z-40 pointer-events-none overflow-hidden w-full">
        <div className="text-center text-white uppercase leading-none tracking-tight py-1 sm:py-2 lg:py-4 overflow-hidden">
          <h1 className="text-[120px] sm:text-[110px] md:text-[168px] lg:text-[190px] xl:text-[280px] font-['Bebas_Neue'] font-bold md:tracking-wide lg:tracking-normal" style={{ lineHeight: '0.85',  }}>
            INSTANT<br className="sm:hidden" /> REPAIR
          </h1>
        </div>
      </div>
    </section>
  );
};
