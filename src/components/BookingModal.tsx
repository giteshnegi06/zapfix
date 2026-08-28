import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Zap,
  MapPin,
  Phone,
  User,
  AlertTriangle,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES_DATA } from '../data/mockData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [selectedService, setSelectedService] = useState<string>(
    initialService || SERVICES_DATA[0].title
  );

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);
  const [urgency, setUrgency] = useState<'routine' | 'urgent' | 'emergency'>('routine');
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState<string>('10:00 AM - 12:00 PM');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Pune');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !address) {
      alert('Please fill in your name, phone number, and address.');
      return;
    }

    const ref = `FIX-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c44b2b', '#294537', '#eab308', '#ffffff'],
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-1 xs:p-2 sm:p-4 md:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full mx-2 xs:mx-3 sm:mx-0 max-w-sm xs:max-w-md sm:max-w-xl md:max-w-2xl bg-[#fdfbf7] text-[#1c2c22] rounded-xl sm:rounded-2xl md:rounded-[28px] shadow-2xl border border-stone-200 overflow-hidden max-h-[98vh] sm:max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="bg-[#264435] text-white p-3 xs:p-4 sm:p-5 md:p-6 flex items-center justify-between gap-2 xs:gap-3">
          <div className="flex items-center gap-2 xs:gap-3 min-w-0 flex-1">
            <div className="w-8 xs:w-9 sm:w-10 h-8 xs:h-9 sm:h-10 rounded-lg xs:rounded-xl bg-[#c44b2b] flex items-center justify-center text-white shadow-md flex-shrink-0">
              <Zap className="w-4 xs:w-5 h-4 xs:h-5 fill-current" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-sm xs:text-base sm:text-lg md:text-2xl font-condensed font-black tracking-wide uppercase leading-tight">
                {isSubmitted ? 'BOOKING CONFIRMED' : 'BOOK SERVICE'}
              </h3>
              <p className="text-xs xs:text-xs sm:text-sm text-emerald-200 truncate">
                CHAUHANELECTRIX • Transparent Pricing
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 xs:w-9 sm:w-10 h-8 xs:h-9 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
          >
            <X className="w-4 xs:w-5 sm:w-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-3 xs:p-4 sm:p-6 md:p-8 overflow-y-auto flex-1 w-full max-w-full">
          {isSubmitted ? (
            <div className="text-center space-y-6 py-4">
              <div className="w-20 h-20 rounded-full bg-emerald-100 border-4 border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto shadow-lg animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="inline-block bg-amber-100 text-amber-900 text-xs font-mono font-bold px-3 py-1 rounded-full">
                  Reference: #{bookingRef}
                </span>
                <h4 className="text-2xl font-extrabold text-stone-900 font-heading">
                  Thank You, {fullName}!
                </h4>
                <p className="text-stone-600 text-sm max-w-md mx-auto">
                  Your appointment for <strong className="text-[#c44b2b]">{selectedService}</strong> has been scheduled. Our technician will call you 15 minutes before arrival.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-2.5 max-w-lg mx-auto">
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500 font-medium">Scheduled Date:</span>
                  <span className="font-bold text-stone-900">{date} ({timeSlot})</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500 font-medium">Location:</span>
                  <span className="font-bold text-stone-900">{address}, {city}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500 font-medium">Phone Number:</span>
                  <span className="font-bold text-stone-900">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500 font-medium">Payment Mode:</span>
                  <span className="font-bold text-emerald-700">Pay after job satisfaction (UPI/Cash/Card)</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="bg-[#294537] hover:bg-[#c44b2b] text-white px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-colors shadow-md cursor-pointer"
                >
                  Done &amp; Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Select Service Category */}
              <div>
                <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wide text-stone-700 mb-2 sm:mb-3 break-words">
                  1. Select Electrical Service
                </label>
                <div className="relative">
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 pr-10 text-sm font-semibold text-stone-900 appearance-none cursor-pointer hover:border-[#294537] focus:outline-none focus:ring-2 focus:ring-[#294537] focus:border-transparent transition-all"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.number} - {s.title}
                      </option>
                    ))}
                    <option value="Emergency Short Circuit & Power Outage">
                      ⚡ Emergency Short Circuit / Sparking Outage
                    </option>
                    <option value="General Electrical Inspection & Audit">
                      🔍 General Electrical Inspection &amp; Safety Audit
                    </option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#294537]">
                    <ChevronDown/>
                  </div>
                </div>
              </div>

              {/* Step 2: Urgency Level */}
              <div>
                <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-stone-700 mb-2 sm:mb-3">
                  2. Service Urgency
                </label>
                <div className="grid grid-cols-3 gap-1.5 xs:gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setUrgency('routine')}
                    className={`p-2 xs:p-2.5 sm:p-3 rounded-lg xs:rounded-xl border text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
                      urgency === 'routine'
                        ? 'bg-[#294537] text-white border-[#294537] shadow-sm'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <span className="hidden xs:inline">📅 </span>Standard
                  </button>

                  <button
                    type="button"
                    onClick={() => setUrgency('urgent')}
                    className={`p-2 xs:p-2.5 sm:p-3 rounded-lg xs:rounded-xl border text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
                      urgency === 'urgent'
                        ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <span className="hidden xs:inline">⏱️ </span>Same Day
                  </button>

                  <button
                    type="button"
                    onClick={() => setUrgency('emergency')}
                    className={`p-2 xs:p-2.5 sm:p-3 rounded-lg xs:rounded-xl border text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
                      urgency === 'emergency'
                        ? 'bg-[#c44b2b] text-white border-[#c44b2b] shadow-sm animate-pulse'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <span className="hidden xs:inline">🚨 </span>Emergency
                  </button>
                </div>
              </div>

              {/* Step 3: Date and Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-stone-700 mb-2 sm:mb-3">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-white border-2 border-stone-300 rounded-lg xs:rounded-xl px-3 xs:px-4 py-2 xs:py-2.5 text-xs xs:text-sm text-stone-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#294537] focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-700 mb-2">
                    Time Slot
                  </label>
                  <div className="relative">
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-lg xs:rounded-xl px-3 xs:px-4 py-2 xs:py-2.5 pr-8 xs:pr-10 text-xs xs:text-sm text-stone-900 font-medium appearance-none cursor-pointer hover:border-[#294537] focus:outline-none focus:ring-2 focus:ring-[#294537] focus:border-transparent transition-all"
                    >
                      <option value="08:00 AM - 10:00 AM">08:00 AM - 10:00 AM (Early Morning)</option>
                      <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM (Morning)</option>
                      <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM (Afternoon)</option>
                      <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM (Late Afternoon)</option>
                      <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM (Evening)</option>
                      <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM (Night)</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#294537]">
                      <ChevronDown/>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Contact & Location Info */}
              <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-3 border-t border-stone-200">
                <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-stone-700">
                  3. Contact &amp; Service Location
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-lg xs:rounded-xl px-3 xs:px-4 py-2 xs:py-2.5 text-xs xs:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#294537]"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number (e.g. +91 98765 43210) *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-lg xs:rounded-xl px-3 xs:px-4 py-2 xs:py-2.5 text-xs xs:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#294537]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <input
                      type="text"
                      placeholder="Street Address / Flat / Society *"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-lg xs:rounded-xl px-3 xs:px-4 py-2 xs:py-2.5 text-xs xs:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#294537]"
                      required
                    />
                  </div>

                  <div className="relative">
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-lg xs:rounded-xl px-3 xs:px-4 py-2 xs:py-2.5 pr-8 xs:pr-10 text-xs xs:text-sm text-stone-900 font-medium appearance-none cursor-pointer hover:border-[#294537] focus:outline-none focus:ring-2 focus:ring-[#294537] focus:border-transparent transition-all"
                    >
                      <option value="Solan">Solan</option>
                      {/* <option value="Mumbai">Mumbai</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Goa">Goa</option> */}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#294537]">
                      <ChevronDown/>
                    </div>
                  </div>
                </div>

                <div>
                  <textarea
                    placeholder="Briefly describe the electrical issue or requirement (optional)..."
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-lg xs:rounded-xl px-3 xs:px-4 py-2 xs:py-2.5 text-xs xs:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#294537]"
                  ></textarea>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-2 text-xs text-stone-600 bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  <strong>CHAUHANELECTRIX.:</strong> Verified background-checked electrician. Free inspection on booked repairs. Zero upfront cancellation fee.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2.5 xs:py-3 sm:py-3.5 px-4 xs:px-5 sm:px-6 rounded-lg xs:rounded-xl bg-[#c44b2b] hover:bg-[#a63c20] text-white font-extrabold text-xs xs:text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="hidden xs:inline">Confirm Service Appointment</span>
                <span className="xs:hidden">Confirm</span>
                <ArrowRight className="w-3 xs:w-4 h-3 xs:h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
