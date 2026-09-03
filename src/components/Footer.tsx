import React from 'react';
import { Zap, Phone, Mail, MapPin, ShieldCheck, Clock, ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#172a20] text-stone-300 pt-16 pb-12 border-t border-[#294537] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-matrix opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2 text-white group">
              <span className="text-2xl font-extrabold tracking-tight font-syne uppercase">
                CHAUHAN<span className="font-light opacity-70">ELECTRIX</span><span className="text-[#c44b2b]">.</span>
              </span>
            </a>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              ChauhánElectrix delivers trusted, certified electrical repairs, diagnostics, and modern home energy installations with rapid 30-minute response and safety guarantees.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="flex items-center gap-1.5 bg-[#20392c] text-emerald-300 px-3 py-1.5 rounded-full border border-emerald-800/50">
                <ShieldCheck className="w-3.5 h-3.5" /> Licensed &amp; Bonded
              </span>
              <span className="flex items-center gap-1.5 bg-[#20392c] text-amber-300 px-3 py-1.5 rounded-full border border-amber-800/50">
                <Clock className="w-3.5 h-3.5" /> 24/7 Emergency Ready
              </span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-extrabold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white hover:underline transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:underline transition-colors">
                  Electrical Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white hover:underline transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white hover:underline transition-colors">
                  How It Works
                </a>
              </li>
              
              <li>
                <a href="#reviews" className="hover:text-white hover:underline transition-colors">
                  Customer Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Popular Services */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-extrabold uppercase tracking-wider">
              Popular Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Distribution Board (DB) Upgrade
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Emergency Fault Diagnostics
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Inverter &amp; Solar Panel Wiring
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Smart Home Automation Hub
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: 24/7 Helpline & Contact */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-extrabold uppercase tracking-wider">
              24/7 Contact
            </h4>
            <div className="space-y-2.5 text-sm">
              <a
                href="tel:+918544784955"
                className="flex items-center gap-2.5 text-white hover:text-amber-400 transition-colors text-left font-bold"
              >
                <div className="w-7 h-7 rounded-full bg-[#c44b2b] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+91 85447 84955</span>
              </a>

              <div className="flex items-center gap-2.5 text-stone-300">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-stone-300" />
                </div>
                <span className="text-xs">ajayatajay944@gmail.com</span>
              </div>

              <div className="flex items-start gap-2.5 text-stone-300">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-stone-300" />
                </div>
                <span className="text-xs">
                  W455+H59, Shilli Rd, Solan, Himachal Pradesh 173212, India
                </span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full mt-2 py-2.5 px-4 bg-[#c44b2b] hover:bg-[#b03e20] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer"
            >
              Book Service Online
            </button>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} CHAUHANELECTRIX. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Safety Guidelines</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#c44b2b] text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
