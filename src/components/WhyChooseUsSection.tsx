import React from 'react';
import {
  ShieldCheck,
  UserCheck,
  Timer,
  Tag,
  Award,
  Users,
  Smile,
  Zap,
  ClipboardCheck,
  MapPin,
  Calendar,
  Phone,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';
import { WHY_CHOOSE_US_FEATURES } from '../data/mockData';

interface WhyChooseUsSectionProps {
  onOpenBooking: () => void;
  onOpenCallModal: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  onOpenBooking,
  onOpenCallModal,
}) => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'user-check':
        return <UserCheck className="w-6 h-6 text-[#294537]" />;
      case 'timer':
        return <Timer className="w-6 h-6 text-[#294537]" />;
      case 'shield-check':
        return <ShieldCheck className="w-6 h-6 text-[#294537]" />;
      case 'tag':
        return <Tag className="w-6 h-6 text-[#294537]" />;
      case 'award':
        return <Award className="w-6 h-6 text-[#294537]" />;
      case 'users':
        return <Users className="w-6 h-6 text-[#294537]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#294537]" />;
    }
  };

  return (
    <section id="why-us" className="relative bg-[#587e60] py-20 sm:py-28 text-white overflow-hidden">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 dot-matrix opacity-20 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#c44b2b]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Pill Badge & Headings matching Ref Image 4 & 5 */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          {/* Badge: 🛡️ WHY CHOOSE US */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-[#203a2e]/80 backdrop-blur-xs text-stone-100 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>WHY CHOOSE US</span>
          </div>

          {/* Heading: RELIABLE SERVICE. YOU CAN TRUST. */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-condensed font-black tracking-tight text-[#fbf7ee] uppercase leading-[0.92]">
            RELIABLE SERVICE.<br />
            <span className="text-[#c44b2b]">YOU CAN TRUST.</span>
          </h2>

          <p className="text-stone-200/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto pt-1 font-normal">
            We combine experience, quality workmanship and honest pricing to deliver the best electrical solutions for your home or business.
          </p>
        </div>

        {/* Main Content Layout: 6 Feature Cards on Left + Electrician Photo on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left 6 Feature Cards (3x2 grid matching Ref Image 4 & 5) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {WHY_CHOOSE_US_FEATURES.map((feat) => (
              <div
                key={feat.id}
                className="bg-[#fdfbf7] text-[#1c2c22] rounded-[24px] p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-200/60 flex flex-col justify-start text-center items-center group"
                id={`feature-card-${feat.id}`}
              >
                {/* Circular Icon Container */}
                <div className="w-14 h-14 rounded-full bg-[#dcece2] border border-[#bedecb] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#c44b2b] group-hover:text-white transition-all duration-300">
                  <div className="group-hover:text-white transition-colors">
                    {getFeatureIcon(feat.icon)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-[#c44b2b] mb-2 leading-tight">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Electrician Cutout Photo with Terracotta Arch matching Ref Image 4 */}
          <div className="lg:col-span-4 relative flex justify-center items-end min-h-[420px] lg:min-h-[500px]">
            {/* Terracotta Background Half-Arch */}
            <div className="absolute bottom-0 right-0 w-72 sm:w-80 md:w-96 h-80 sm:h-96 md:h-[440px] bg-[#c44b2b] rounded-t-full -z-0 shadow-2xl" />

            {/* Electrician Portrait */}
            <div className="relative z-10 w-full flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&h=900&q=90"
                alt="Expert Electrician with arms crossed and yellow hardhat"
                className="w-full max-w-[340px] sm:max-w-[380px] h-auto object-cover rounded-b-2xl drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Stats Strip Banner matching Ref Image 4 */}
        <div className="mt-14 bg-[#1f372c] border border-white/15 rounded-[22px] p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {/* Stat 1: 1200+ Happy Customers */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
              <div className="w-12 h-12 rounded-2xl bg-[#294537] border border-white/20 text-white flex items-center justify-center shrink-0">
                <Smile className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-condensed font-black text-white tracking-tight">
                  1200+
                </div>
                <div className="text-xs sm:text-sm text-stone-300">Happy Customers</div>
              </div>
            </div>

            {/* Stat 2: 15+ Years Experience */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
              <div className="w-12 h-12 rounded-2xl bg-[#294537] border border-white/20 text-white flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-amber-300 fill-amber-300" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-condensed font-black text-white tracking-tight">
                  15+
                </div>
                <div className="text-xs sm:text-sm text-stone-300">Years of Experience</div>
              </div>
            </div>

            {/* Stat 3: 2500+ Projects Completed */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
              <div className="w-12 h-12 rounded-2xl bg-[#294537] border border-white/20 text-white flex items-center justify-center shrink-0">
                <ClipboardCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-condensed font-black text-white tracking-tight">
                  2500+
                </div>
                <div className="text-xs sm:text-sm text-stone-300">Projects Completed</div>
              </div>
            </div>

            {/* Stat 4: 25+ Areas Served */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
              <div className="w-12 h-12 rounded-2xl bg-[#294537] border border-white/20 text-white flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#c44b2b]" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-condensed font-black text-white tracking-tight">
                  25+
                </div>
                <div className="text-xs sm:text-sm text-stone-300">Areas Served</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner matching Ref Image 5: "NEED AN ELECTRICIAN?" */}
        <div className="mt-8 bg-gradient-to-r from-[#1b3427] to-[#244635] border border-white/20 rounded-[24px] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-3xl sm:text-4xl font-condensed font-black text-white tracking-tight italic">
                NEED AN ELECTRICIAN?
              </h3>
              <p className="text-stone-300 text-sm sm:text-base">
                Get professional electrical help when you need it most.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs sm:text-sm text-stone-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Quick Response
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Affordable Pricing
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 24/7 Emergency Service
                </span>
              </div>
            </div>

            {/* 3 Action Buttons matching Ref Image 5 */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* BOOK NOW */}
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 bg-[#c44b2b] hover:bg-[#ad3e20] text-white px-5 py-3 rounded-xl font-extrabold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                id="why-choose-book-now-btn"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK NOW</span>
              </button>

              {/* CALL NOW */}
              <button
                onClick={onOpenCallModal}
                className="flex items-center gap-2 bg-[#203a2d] hover:bg-[#1a3025] text-white border border-white/30 px-5 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer"
                id="why-choose-call-now-btn"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>CALL NOW</span>
              </button>

              {/* WHATSAPP US */}
              <a
                href="https://wa.me/18005553496?text=Hi%20ChauhánElectrix%2C%20I%20need%20electrical%20service%20help"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-xl font-extrabold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                id="why-choose-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WHATSAPP US</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
