
import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";

import { testimonialsData } from "../data/Testimonials";

// ==========================================
// TESTIMONIAL CARD
// ==========================================

const TestimonialCard = ({ item }) => {
  const getInitials = (name) => {
    if (!name) return "AK";

    const parts = name.trim().split(/\s+/);

    return parts.length > 1
      ? `${parts[0][0]}${parts[1][0]}`.toUpperCase()
      : name.slice(0, 2).toUpperCase();
  };

  return (
    <article className="ak-testimonial-card">

      {/* DECORATIVE QUOTE */}
      <span className="ak-testimonial-quote">“</span>

      {/* PRODUCT AND RATING */}
      <div className="ak-testimonial-top">

        <span className="ak-testimonial-product">
          <span>✧</span>
          {item.product}
        </span>

        <div
          className="ak-testimonial-stars"
          aria-label={`Customer rating: ${item.stars}`}
        >
          {item.stars}
        </div>

      </div>

      {/* REVIEW */}
      <div className="ak-testimonial-review">
        <p>{item.text}</p>
      </div>

      {/* CUSTOMER INFORMATION */}
      <div className="ak-testimonial-footer">

        <div className="ak-testimonial-author">

          <div className="ak-testimonial-avatar">
            {getInitials(item.name)}
          </div>

          <div className="ak-testimonial-author-info">
            <h4>{item.name}</h4>
            <span>{item.designation}</span>
          </div>

        </div>

        <div className="ak-verified-badge">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>

          Verified
        </div>

      </div>

    </article>
  );
};

// ==========================================
// MAIN TESTIMONIALS COMPONENT
// ==========================================

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const timerRef = useRef(null);

  const totalItems = testimonialsData?.length || 0;

  // ==========================================
  // RESPONSIVE BREAKPOINTS
  // ==========================================

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setItemsPerView(1);
      } else if (width < 992) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Maximum carousel position
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  // Keep current position valid after resizing
  useEffect(() => {
    setCurrentIndex((previous) => Math.min(previous, maxIndex));
  }, [maxIndex]);

  // ==========================================
  // NAVIGATION
  // ==========================================

  const handleNext = () => {
    setCurrentIndex((previous) =>
      previous >= maxIndex ? 0 : previous + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((previous) =>
      previous <= 0 ? maxIndex : previous - 1
    );
  };

  // ==========================================
  // AUTO SLIDER
  // ==========================================

  useEffect(() => {
    if (isPaused || totalItems <= itemsPerView) {
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((previous) =>
        previous >= maxIndex ? 0 : previous + 1
      );
    }, 4500);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, maxIndex, totalItems, itemsPerView]);

  // ==========================================
  // EMPTY STATE
  // ==========================================

  if (totalItems === 0) {
    return null;
  }

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <section className="ak-testimonials-section">

      <Container>

        {/* SECTION HEADER */}
        <div className="ak-testimonials-header">

          <div className="ak-testimonials-label">
            <span />
            CUSTOMER EXPERIENCES
            <span />
          </div>

          <h2>
            Our <span>Testimonials</span>
          </h2>

          <p>
            Every fragrance tells a story. Discover what our
            customers have to say about their experience
            with AL-Kausar Perfumes.
          </p>

          <div className="ak-testimonials-decoration">
            <span />
            <i>✧</i>
            <span />
          </div>

        </div>

        {/* TESTIMONIAL CAROUSEL */}
        <div
          className="ak-testimonials-viewport"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >

          <div
            className="ak-testimonials-track"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / itemsPerView)
              }%)`,
            }}
          >

            {testimonialsData.map((item) => (
              <div
                className="ak-testimonial-slide"
                key={item.id}
                style={{
                  width: `${100 / itemsPerView}%`,
                }}
              >
                <TestimonialCard item={item} />
              </div>
            ))}

          </div>

        </div>

        {/* CAROUSEL CONTROLS */}
        {maxIndex > 0 && (
          <div className="ak-testimonials-controls">

            <button
              type="button"
              className="ak-testimonial-arrow"
              onClick={handlePrev}
              aria-label="Previous testimonials"
            >
              ‹
            </button>

            {/* PAGINATION DOTS */}
            <div className="ak-testimonial-dots">

              {Array.from({ length: maxIndex + 1 }).map(
                (_, index) => (
                  <button
                    type="button"
                    key={index}
                    className={`ak-testimonial-dot ${
                      currentIndex === index ? "active" : ""
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial position ${index + 1}`}
                    aria-current={
                      currentIndex === index ? "true" : undefined
                    }
                  />
                )
              )}

            </div>

            <button
              type="button"
              className="ak-testimonial-arrow"
              onClick={handleNext}
              aria-label="Next testimonials"
            >
              ›
            </button>

          </div>
        )}

        {/* BOTTOM BRAND SIGNATURE */}
        <div className="ak-testimonials-signature">
          <span>✧</span>
          <p>THANK YOU FOR CHOOSING AL-KAUSAR PERFUMES</p>
          <span>✧</span>
        </div>

      </Container>

    </section>
  );
}

export default Testimonials;
