import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import banner1 from '../assets/Images/Banner/al kausar banner .webp';
import banner2 from '../assets/Images/Banner/al kausar banner 1.webp';
import banner3 from '../assets/Images/Banner/w2.png';

const slides = [
  {
    image: banner1,
    alt: 'Al-Kausar luxury attar collection',
    eyebrow: 'THE HOUSE OF AL-KAUSAR',
    title: 'Timeless Eastern',
    highlight: 'Heritage.',
    description:
      'Discover pure, alcohol-free attars distilled from rare agarwood, damask rose, and warm amber for an unforgettable trail.',
    ctaText: 'Explore 100GM Collection',
    ctaLink: '/collection/100gm',
  },
  {
    image: banner2,
    alt: 'Al-Kausar signature fragrances',
    eyebrow: 'CONCENTRATED PERFUME OILS',
    title: 'Crafted for',
    highlight: 'Distinction.',
    description:
      'Intensely rich 6ml pocket masterpieces blended to linger on your skin from dawn until midnight.',
    ctaText: 'Discover 6ML Oils',
    ctaLink: '/collection/6ml',
  },
  {
    image: banner3,
    alt: 'Al-Kausar premium fragrance collection',
    eyebrow: 'ARTISANAL PERFUMERY',
    title: 'Your Signature',
    highlight: 'Essence.',
    description:
      'Experience the harmony of traditional perfumery and modern luxury in every single drop.',
    ctaText: 'View All Collections',
    ctaLink: '/collection/100gm',
  },
];

function Header() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto-advance every 5000ms
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      aria-label="Al-Kausar fragrance banners"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[460px] min-[381px]:h-[520px] md:h-[clamp(480px,72svh,680px)] lg:h-[clamp(540px,85svh,860px)] overflow-hidden bg-[#080808] m-0 p-0 z-[1] select-none"
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              aria-hidden={!isActive}
              style={{
                opacity: isActive ? 1 : 0,
                pointerEvents: isActive ? 'auto' : 'none',
                zIndex: isActive ? 2 : 1,
                transition: 'opacity 600ms ease-in-out',
              }}
              className="absolute inset-0 w-full h-full overflow-hidden"
            >
              {/* Background Banner Image */}
              <img
                src={slide.image}
                alt={slide.alt}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                loading={index === 0 ? 'eager' : 'lazy'}
                style={{
                  transform: isActive ? 'scale(1.03)' : 'scale(1)',
                  transition: 'transform 10000ms ease-out',
                }}
                className="block w-full h-full object-cover object-center"
              />

              {/* Dark Gradient Scrim for High Text Contrast */}
              <div
                aria-hidden="true"
                // style={{
                //   background:
                //     'linear-gradient(90deg, rgba(8,8,8,0.86) 0%, rgba(8,8,8,0.58) 52%, rgba(8,8,8,0.22) 100%), linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.08) 45%, rgba(0,0,0,0.45) 100%)',
                // }}
                className="absolute inset-0 z-[10] pointer-events-none"
              />

              {/* Slide Text & CTA Content */}
              <div className="relative z-[20] h-full max-w-7xl mx-auto px-10 sm:px-14 lg:px-20 flex items-center">
                <div className="max-w-xl text-left">
                  {/* Eyebrow */}
                  <div className="inline-flex items-center gap-2.5 mb-3 sm:mb-4">
                    <span className="w-6 sm:w-8 h-[1px] bg-[#D4AF37]" />
                    <span className="text-[10px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#D4AF37]">
                      {slide.eyebrow}
                    </span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white tracking-tight leading-[1.1] mb-3 sm:mb-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">
                    {slide.title}{' '}
                    <span className="block sm:inline italic font-light text-amber-200">
                      {slide.highlight}
                    </span>
                  </h1>

                  {/* Subtitle / Description */}
                  <p className="text-xs sm:text-sm md:text-base text-stone-100 leading-relaxed max-w-md mb-6 sm:mb-8 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
                    {slide.description}
                  </p>

                  {/* Action Button */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <button
                      type="button"
                      onClick={() => navigate(slide.ctaLink)}
                      className="group inline-flex items-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#D4AF37] text-stone-950 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase hover:bg-amber-300 shadow-lg shadow-black/40 transition-all duration-300 cursor-pointer"
                    >
                      <span>{slide.ctaText}</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Previous Control */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="group absolute top-0 bottom-0 left-0 w-10 sm:w-14 lg:w-16 z-[30] flex items-center justify-center text-white opacity-75 hover:opacity-100 focus:outline-none transition-opacity cursor-pointer"
      >
        <FaChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)] group-hover:-translate-x-0.5 transition-transform" />
      </button>

      {/* Next Control */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="group absolute top-0 bottom-0 right-0 w-10 sm:w-14 lg:w-16 z-[30] flex items-center justify-center text-white opacity-75 hover:opacity-100 focus:outline-none transition-opacity cursor-pointer"
      >
        <FaChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)] group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Gold Indicators */}
      <div className="absolute bottom-4 md:bottom-6 left-0 right-0 z-[30] flex items-center justify-center">
        {slides.map((_, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Slide ${index + 1}`}
              aria-current={isActive ? 'true' : undefined}
              className={`h-[3px] md:h-[4px] rounded-[10px] mx-[4px] md:mx-[5px] bg-[#D4AF37] transition-all duration-300 focus:outline-none cursor-pointer ${
                isActive
                  ? 'opacity-100 w-[26px] md:w-[38px]'
                  : 'opacity-50 hover:opacity-80 w-[18px] md:w-[28px]'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Header;