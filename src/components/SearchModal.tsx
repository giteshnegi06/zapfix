import React, { useState } from 'react';
import { Search, X, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA, FAQ_DATA } from '../data/mockData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const matchedServices = SERVICES_DATA.filter((s) => {
    const q = query.toLowerCase();
    return (
      s.title.toLowerCase().includes(q) ||
      s.items.some((item) => item.toLowerCase().includes(q))
    );
  });

  const matchedFaqs = FAQ_DATA.filter((f) => {
    const q = query.toLowerCase();
    return f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#fdfbf7] text-[#1c2c22] rounded-[24px] shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 bg-white border-b border-stone-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search electrical services, e.g. 'wiring', 'fuse', 'inverter', 'EV charger'..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base font-semibold text-stone-900 bg-transparent focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-stone-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-bold text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-lg cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Search Results */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* Quick Suggestions when empty */}
          {!query ? (
            <div className="space-y-4">
              <p className="text-xs font-extrabold uppercase tracking-wider text-stone-500">
                Popular Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Main Distribution Board (DB)',
                  'EV Charger Installation',
                  'Short Circuit Diagnostics',
                  'Inverter & Battery Wiring',
                  'Lighting & Sockets',
                  'Smart Home Automation',
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-full bg-stone-100 hover:bg-emerald-100 hover:text-emerald-900 text-xs font-semibold text-stone-700 transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Matched Services */}
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#c44b2b] mb-3">
                  Matching Services ({matchedServices.length})
                </p>
                {matchedServices.length > 0 ? (
                  <div className="space-y-2.5">
                    {matchedServices.map((service) => (
                      <div
                        key={service.id}
                        onClick={() => {
                          onSelectService(service.title);
                          onClose();
                        }}
                        className="p-4 rounded-xl bg-white hover:bg-emerald-50/80 border border-stone-200 hover:border-emerald-300 transition-all cursor-pointer group flex items-center justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-[#294537]">
                              {service.number}
                            </span>
                            <h4 className="font-extrabold text-sm text-stone-900 group-hover:text-[#c44b2b] transition-colors">
                              {service.title}
                            </h4>
                          </div>
                          <p className="text-xs text-stone-500 mt-1">
                            Includes: {service.items.slice(0, 3).join(', ')}...
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-[#c44b2b] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-stone-500">No exact service title match found.</p>
                )}
              </div>

              {/* Matched FAQs */}
              {matchedFaqs.length > 0 && (
                <div className="pt-3 border-t border-stone-200">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-stone-600 mb-3">
                    Related Answers ({matchedFaqs.length})
                  </p>
                  <div className="space-y-2">
                    {matchedFaqs.map((faq, i) => (
                      <div key={i} className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                        <p className="text-xs font-bold text-stone-900">{faq.q}</p>
                        <p className="text-xs text-stone-600 mt-1">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
