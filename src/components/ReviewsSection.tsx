import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS_DATA } from '../data/mockData';

interface ReviewsSectionProps {
  onOpenBooking: () => void;
  onOpenCallModal: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = () => {
  const cards = [...REVIEWS_DATA, ...REVIEWS_DATA];

  return (
    <section id="reviews" className="relative bg-[#f8f6f0] py-20 sm:py-28 text-[#18291f] overflow-hidden">
      {/* Background Graphic Elements & Dot Matrix matching Image 2 */}
      <div className="absolute top-12 left-10 dot-matrix-green w-32 h-32 opacity-30 pointer-events-none" />
      <div className="absolute top-12 right-10 w-48 h-48 opacity-15 pointer-events-none flex justify-center items-center">
        {/* Subtle lightning bolt watermark */}
        <div className="w-32 h-32 bg-[#294537] mask-lightning transform rotate-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Pill Badge & Headings matching Ref Image 2 */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          {/* Badge: ★ CUSTOMER REVIEWS */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#294537]/20 bg-white text-[#294537] text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-xs">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>CUSTOMER REVIEWS</span>
          </div>

          {/* Heading: TRUSTED BY HOMES & BUSINESSES LOVED BY OUR CUSTOMERS */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-condensed font-black tracking-tight uppercase leading-[0.92]">
            <span className="text-[#254234]">TRUSTED BY HOMES &amp; BUSINESSES</span><br />
            <span className="text-[#c44b2b]">LOVED BY OUR CUSTOMERS</span>
          </h2>

          <p className="text-stone-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto pt-1 font-normal">
            We take pride in delivering quality electrical services and excellent customer experience. Here&apos;s what our customers have to say about us.
          </p>
        </div>
      </div>

      {/* Moving Testimonials Marquee */}
      <div className="relative w-full">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#f8f6f0] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#f8f6f0] to-transparent z-10" />

        <div className="overflow-hidden">
          <div className="marquee-track flex w-max gap-5 sm:gap-6 py-2">
            {cards.map((review, index) => {
              const number = String((index % REVIEWS_DATA.length) + 1).padStart(2, '0');
              return (
                <div
                  key={`${review.id}-${index}`}
                  className="group w-[280px] sm:w-[340px] shrink-0 bg-white/60 hover:bg-white rounded-[24px] p-6 sm:p-7 border border-transparent hover:border-l-4 hover:border-l-[#c44b2b] hover:border-y-stone-200/80 hover:border-r-stone-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 opacity-70 hover:opacity-100 hover:-translate-y-1.5 flex flex-col"
                >
                  {/* Header: Stars + Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-stone-400 tabular-nums">{number}</span>
                  </div>

                  {/* Quote Title */}
                  <h4 className="text-xl sm:text-2xl font-extrabold text-[#18291f] tracking-tight mb-2.5">
                    &ldquo;{review.title}&rdquo;
                  </h4>

                  {/* Review Text */}
                  <p className="text-stone-500 group-hover:text-stone-600 text-sm leading-relaxed font-normal">
                    {review.content}
                  </p>

                  {/* Stat Pill */}
                  <div className="mt-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-200 bg-stone-50 group-hover:bg-white text-[11px] font-semibold text-stone-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c44b2b]" />
                      {review.stat}
                    </span>
                  </div>

                  <div className="flex-1" />

                  {/* Author Details */}
                  <div className="flex items-center gap-3 pt-5 mt-5 border-t border-stone-200/70">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-emerald-100 shadow-sm"
                    />
                    <h5 className="font-extrabold text-sm text-[#294537] tracking-wide leading-tight">
                      {review.name}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
