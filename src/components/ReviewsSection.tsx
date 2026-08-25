import React, { useState } from 'react';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Phone,
  Calendar,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { REVIEWS_DATA } from '../data/mockData';

interface ReviewsSectionProps {
  onOpenBooking: () => void;
  onOpenCallModal: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  onOpenBooking,
  onOpenCallModal,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (REVIEWS_DATA.length - 3 > 0 ? REVIEWS_DATA.length - 3 : 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (REVIEWS_DATA.length - 3 > 0 ? REVIEWS_DATA.length - 3 : 1)) % (REVIEWS_DATA.length - 3 > 0 ? REVIEWS_DATA.length - 3 : 1));
  };

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

        {/* 4 Review Cards in 1 Row (or responsive grid) matching Ref Image 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {REVIEWS_DATA.slice(0, 4).map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-[24px] p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border border-stone-200/80 flex flex-col justify-between relative group"
              id={`review-card-${review.id}`}
            >
              <div>
                {/* Header: Avatar + Quotation Mark */}
                <div className="flex items-center justify-between mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-emerald-100 shadow-sm"
                  />
                  <span className="text-4xl sm:text-5xl font-serif text-emerald-200/80 font-bold leading-none select-none">
                    “
                  </span>
                </div>

                {/* 5 Golden Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {review.content}
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-stone-100">
                <h4 className="font-extrabold text-sm sm:text-base text-[#294537] tracking-wide">
                  {review.name}
                </h4>
                <p className="text-xs text-stone-500 font-medium">{review.role}, {review.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation matching Ref Image 2: < ● ○ ○ > */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
          <button
            onClick={prevSlide}
            aria-label="Previous review"
            className="w-9 h-9 rounded-full border border-stone-300 bg-white hover:bg-[#294537] hover:text-white text-stone-700 flex items-center justify-center transition-colors shadow-xs cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#294537]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-stone-300"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-stone-300"></span>
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next review"
            className="w-9 h-9 rounded-full border border-stone-300 bg-white hover:bg-[#294537] hover:text-white text-stone-700 flex items-center justify-center transition-colors shadow-xs cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
