import React, { useState } from 'react';
import { X, Phone, MessageSquare, Clock, ShieldCheck, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallModal: React.FC<CallModalProps> = ({ isOpen, onClose }) => {
  const [callbackNumber, setCallbackNumber] = useState('');
  const [callbackSent, setCallbackSent] = useState(false);

  if (!isOpen) return null;

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackNumber) return;
    setCallbackSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#fdfbf7] text-[#1c2c22] rounded-[28px] shadow-2xl border border-stone-200 overflow-hidden">
        {/* Header */}
        <div className="bg-[#264435] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c44b2b] flex items-center justify-center text-white shadow-md">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-condensed font-black tracking-wide uppercase">
                24/7 ELECTRICAL HELPLINE
              </h3>
              <p className="text-xs text-emerald-200">
                Direct Line to ChauhánElectrix Dispatch Center
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Live status badge */}
          <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 px-4 py-2.5 rounded-xl text-xs font-semibold text-emerald-900">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span>4 Rapid Units Currently On Duty</span>
            </span>
            <span className="font-bold text-[#c44b2b]">~24 Min Arrival</span>
          </div>

          {/* Action 1: Direct Toll Free Dial */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-3 text-center">
            <p className="text-xs text-stone-500 font-extrabold uppercase tracking-wider">
              Tap to Call Direct Dispatch
            </p>
            <a
              href="tel:+91 85447 84955"
              className="inline-flex items-center justify-center gap-3 w-full py-3.5 px-6 rounded-xl bg-[#c44b2b] hover:bg-[#a93b1e] text-white font-extrabold text-lg sm:text-xl tracking-tight shadow-md hover:shadow-lg transition-all"
            >
              <Phone className="w-5 h-5 animate-pulse" />
              <span>+91 85447 84955</span>
            </a>
            <p className="text-[11px] text-stone-400">Toll-free • Available 24 hours / 7 days</p>
          </div>

          {/* Action 2: WhatsApp Chat */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-3 text-center">
            <p className="text-xs text-stone-500 font-extrabold uppercase tracking-wider">
              Instant WhatsApp Support
            </p>
            <a
              href="https://wa.me/8544784955?text=Hi%20CHAUHANELECTRIX.%2C%20I%20have%20an%20urgent%20electrical%20issue."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full py-3 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-base shadow-sm transition-all"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Chat on WhatsApp Now</span>
            </a>
            <p className="text-[11px] text-stone-400">Share photos/videos of faulty breaker or sockets</p>
          </div>

          {/* Action 3: Request Instant Callback */}
          <div className="pt-2 border-t border-stone-200">
            {callbackSent ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center space-y-1 text-emerald-800">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                <p className="text-xs font-bold">Callback Requested!</p>
                <p className="text-[11px]">Our duty engineer will ring you back in under 2 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="space-y-2">
                <label className="block text-xs font-bold text-stone-700">
                  Or request an instant callback:
                </label>
                <div className="flex gap-2">
                  <input
                    type="tel"
                    placeholder="Enter your phone number..."
                    value={callbackNumber}
                    onChange={(e) => setCallbackNumber(e.target.value)}
                    className="flex-1 bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs font-medium text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#294537]"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#294537] hover:bg-[#c44b2b] text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
