import React, { useEffect, useState } from 'react';
import {
  X,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
  ChevronDown,
  Download,
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
  const [urgency, setUrgency] = useState<'routine' | 'urgent' | 'emergency'>('routine');
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState<string>('10:00 AM - 12:00 PM');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Solan');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  // Lock body scroll while the modal is open, and reset form state on close.
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const WHATSAPP_BUSINESS_NUMBER = '918544784955';

  const URGENCY_LABELS: Record<typeof urgency, string> = {
    routine: 'Standard',
    urgent: 'Same Day',
    emergency: 'Emergency',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !address) {
      alert('Please fill in your name, phone number, and address.');
      return;
    }

    const ref = `FIX-${Math.floor(100000 + Math.random() * 900000)}`;

    const message = [
      `New Booking Request - #${ref}`,
      '',
      `Service: ${selectedService}`,
      `Urgency: ${URGENCY_LABELS[urgency]}`,
      `Date: ${date} (${timeSlot})`,
      '',
      `Name: ${fullName}`,
      `Phone: ${phone}`,
      `Address: ${address}, ${city}`,
      notes ? `Notes: ${notes}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(
      `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );

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

  const handleDownloadReceipt = () => {
    const width = 640;
    const canvas = document.createElement('canvas');
    const scale = 2;
    const rows: [string, string][] = [
      ['Scheduled Date', `${date} (${timeSlot})`],
      ['Location', `${address}, ${city}`],
      ['Phone Number', phone],
      ['Payment Mode', 'Pay after job satisfaction (UPI/Cash/Card)'],
    ];
    const rowHeight = 64;
    const headerHeight = 150;
    const bodyTop = headerHeight + 170;
    const height = bodyTop + rows.length * rowHeight + 90;

    canvas.width = width * scale;
    canvas.height = height * scale;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.scale(scale, scale);

    const wrapText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
      const words = text.split(' ');
      let line = '';
      let curY = y;
      for (const word of words) {
        const test = line ? `${line} ${word}` : word;
        if (ctx.measureText(test).width > maxWidth && line) {
          ctx.fillText(line, x, curY);
          line = word;
          curY += lineHeight;
        } else {
          line = test;
        }
      }
      ctx.fillText(line, x, curY);
      return curY;
    };

    // Card background
    ctx.fillStyle = '#fdfbf7';
    ctx.fillRect(0, 0, width, height);

    // Header bar
    ctx.fillStyle = '#264435';
    ctx.fillRect(0, 0, width, headerHeight);

    // Brand badge
    ctx.fillStyle = '#c44b2b';
    const badgeSize = 44;
    const badgeX = 32;
    const badgeY = 40;
    ctx.beginPath();
    ctx.roundRect(badgeX, badgeY, badgeSize, badgeSize, 12);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(badgeX + 26, badgeY + 9);
    ctx.lineTo(badgeX + 14, badgeY + 24);
    ctx.lineTo(badgeX + 21, badgeY + 24);
    ctx.lineTo(badgeX + 17, badgeY + 36);
    ctx.lineTo(badgeX + 30, badgeY + 19);
    ctx.lineTo(badgeX + 23, badgeY + 19);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = '700 24px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('BOOKING CONFIRMED', badgeX + badgeSize + 16, badgeY + 20);
    ctx.fillStyle = '#a7d9c2';
    ctx.font = '500 15px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('CHAUHANELECTRIX • Transparent Pricing', badgeX + badgeSize + 16, badgeY + 42);

    // Reference pill
    ctx.fillStyle = '#fde68a';
    ctx.beginPath();
    ctx.roundRect(32, headerHeight + 28, 230, 34, 17);
    ctx.fill();
    ctx.fillStyle = '#78350f';
    ctx.font = '700 14px monospace';
    ctx.fillText(`REFERENCE: #${bookingRef}`, 50, headerHeight + 50);

    // Thank you heading
    ctx.fillStyle = '#1c1917';
    ctx.font = '800 26px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`Thank You, ${fullName}!`, 32, headerHeight + 100);

    // Service line
    ctx.font = '500 15px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#57534e';
    wrapText(`Appointment for ${selectedService}`, 32, headerHeight + 128, width - 64, 20);

    // Divider + rows
    let y = bodyTop;
    ctx.strokeStyle = '#e7e5e4';
    rows.forEach(([label, value], i) => {
      ctx.beginPath();
      ctx.moveTo(32, y - 22);
      ctx.lineTo(width - 32, y - 22);
      ctx.stroke();

      ctx.fillStyle = '#78716c';
      ctx.font = '600 14px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(label, 32, y);

      ctx.fillStyle = i === rows.length - 1 ? '#047857' : '#1c1917';
      ctx.font = '700 15px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'right';
      wrapText(value, width - 32, y, width * 0.55, 20);
      ctx.textAlign = 'left';

      y += rowHeight;
    });

    // Footer note
    ctx.fillStyle = '#a8a29e';
    ctx.font = '500 12px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Our technician will call you 15 minutes before arrival.', 32, height - 40);

    const link = document.createElement('a');
    link.download = `chauhanelectrix-receipt-${bookingRef}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhone('');
    setAddress('');
    setNotes('');
    onClose();
  };

  const inputClasses =
    'w-full min-w-0 bg-white border border-stone-300 rounded-lg px-3 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#294537] focus:border-transparent transition-all';

  const selectClasses =
    'w-full min-w-0 bg-white border border-stone-300 rounded-lg px-3 py-2.5 pr-9 text-sm text-stone-900 font-medium appearance-none cursor-pointer hover:border-[#294537] focus:outline-none focus:ring-2 focus:ring-[#294537] focus:border-transparent transition-all';

  const labelClasses = 'block text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-stone-700 mb-2';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative flex flex-col w-full h-[100dvh] sm:h-auto sm:max-h-[90vh] sm:max-w-lg md:max-w-xl bg-[#fdfbf7] text-[#1c2c22] sm:rounded-2xl shadow-2xl border-0 sm:border sm:border-stone-200 overflow-hidden">
        {/* Header Bar */}
        <div className="shrink-0 bg-[#264435] text-white px-4 py-3 sm:px-6 sm:py-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#c44b2b] flex items-center justify-center text-white shadow-md shrink-0">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-xl md:text-2xl font-condensed font-black tracking-wide uppercase leading-tight truncate">
                {isSubmitted ? 'Booking Confirmed' : 'Book Service'}
              </h3>
              <p className="text-[11px] sm:text-sm text-emerald-200 truncate">
                CHAUHANELECTRIX &bull; Transparent Pricing
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking form"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="grow overflow-y-auto overscroll-contain px-4 py-5 sm:px-6 sm:py-6">
          {isSubmitted ? (
            <div className="text-center space-y-6 py-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-100 border-4 border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              <div className="space-y-2">
                <span className="inline-block bg-amber-100 text-amber-900 text-xs font-mono font-bold px-3 py-1 rounded-full">
                  Reference: #{bookingRef}
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-heading">
                  Thank You, {fullName}!
                </h4>
                <p className="text-stone-600 text-sm max-w-md mx-auto">
                  Your appointment for <strong className="text-[#c44b2b]">{selectedService}</strong> has been scheduled. Our technician will call you 15 minutes before arrival.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 sm:p-5 text-left text-xs sm:text-sm space-y-2.5 max-w-lg mx-auto">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-2 border-b border-stone-200 pb-2">
                  <span className="text-stone-500 font-medium">Scheduled Date:</span>
                  <span className="font-bold text-stone-900 break-words">{date} ({timeSlot})</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-2 border-b border-stone-200 pb-2">
                  <span className="text-stone-500 font-medium">Location:</span>
                  <span className="font-bold text-stone-900 break-words sm:text-right">{address}, {city}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-2 border-b border-stone-200 pb-2">
                  <span className="text-stone-500 font-medium">Phone Number:</span>
                  <span className="font-bold text-stone-900">{phone}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-2">
                  <span className="text-stone-500 font-medium">Payment Mode:</span>
                  <span className="font-bold text-emerald-700 sm:text-right">Pay after job satisfaction (UPI/Cash/Card)</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto bg-[#294537] hover:bg-[#c44b2b] text-white px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-colors shadow-md cursor-pointer"
                >
                  Done &amp; Return to Website
                </button>
                <button
                  type="button"
                  onClick={handleDownloadReceipt}
                  aria-label="Download receipt"
                  title="Download receipt"
                  className="w-full sm:w-auto bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 px-5 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Receipt
                </button>
              </div>
            </div>
          ) : (
            <form id="booking-form" onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Step 1: Select Service Category */}
              <div>
                <label className={labelClasses}>1. Select Electrical Service</label>
                <div className="relative">
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className={`${selectClasses} font-semibold`}
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.number} - {s.title}
                      </option>
                    ))}
                    <option value="Emergency Short Circuit & Power Outage">
                      Emergency Short Circuit / Sparking Outage
                    </option>
                    <option value="General Electrical Inspection & Audit">
                      General Electrical Inspection &amp; Safety Audit
                    </option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-[#294537]" />
                </div>
              </div>

              {/* Step 2: Urgency Level */}
              <div>
                <label className={labelClasses}>2. Service Urgency</label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setUrgency('routine')}
                    className={`px-2 py-2.5 sm:py-3 rounded-lg border text-[11px] sm:text-sm font-bold transition-all text-center cursor-pointer ${
                      urgency === 'routine'
                        ? 'bg-[#294537] text-white border-[#294537] shadow-sm'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    Standard
                  </button>

                  <button
                    type="button"
                    onClick={() => setUrgency('urgent')}
                    className={`px-2 py-2.5 sm:py-3 rounded-lg border text-[11px] sm:text-sm font-bold transition-all text-center cursor-pointer ${
                      urgency === 'urgent'
                        ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    Same Day
                  </button>

                  <button
                    type="button"
                    onClick={() => setUrgency('emergency')}
                    className={`px-2 py-2.5 sm:py-3 rounded-lg border text-[11px] sm:text-sm font-bold transition-all text-center cursor-pointer ${
                      urgency === 'emergency'
                        ? 'bg-[#c44b2b] text-white border-[#c44b2b] shadow-sm animate-pulse'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    Emergency
                  </button>
                </div>
              </div>

              {/* Step 3: Date and Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="min-w-0">
                  <label className={labelClasses}>Preferred Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className={inputClasses}
                    required
                  />
                </div>

                <div className="min-w-0">
                  <label className={labelClasses}>Time Slot</label>
                  <div className="relative">
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className={selectClasses}
                    >
                      <option value="08:00 AM - 10:00 AM">08:00 AM - 10:00 AM (Early Morning)</option>
                      <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM (Morning)</option>
                      <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM (Afternoon)</option>
                      <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM (Late Afternoon)</option>
                      <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM (Evening)</option>
                      <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM (Night)</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-[#294537]" />
                  </div>
                </div>
              </div>

              {/* Step 4: Contact & Location Info */}
              <div className="space-y-4 pt-3 border-t border-stone-200">
                <label className={`${labelClasses} mb-0`}>3. Contact &amp; Service Location</label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Full Name *"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={inputClasses}
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputClasses}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Street Address / Flat / Society *"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className={`${inputClasses} sm:col-span-2`}
                    required
                  />

                  <div className="relative min-w-0">
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className={`${selectClasses} font-medium`}
                    >
                      <option value="Solan">Solan</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-[#294537]" />
                  </div>
                </div>

                <textarea
                  placeholder="Briefly describe the electrical issue or requirement (optional)..."
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* Trust Badge */}
              <div className="flex items-start gap-2 text-xs text-stone-600 bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>CHAUHANELECTRIX:</strong> Verified background-checked electrician. Free inspection on booked repairs. Zero upfront cancellation fee.
                </span>
              </div>
            </form>
          )}
        </div>

        {/* Sticky Submit Footer */}
        {!isSubmitted && (
          <div className="shrink-0 border-t border-stone-200 bg-[#fdfbf7] px-4 py-3 sm:px-6 sm:py-4">
            <button
              type="submit"
              form="booking-form"
              className="w-full py-3 px-5 rounded-xl bg-[#c44b2b] hover:bg-[#a63c20] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              Confirm Service
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
