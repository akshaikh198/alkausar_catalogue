
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import banner1 from '../assets/Images/Banner/w1.png';
import banner2 from '../assets/Images/Banner/w3.png';
import banner3 from '../assets/Images/Banner/w2.png';

const slides = [
  {
    image: banner1,
    alt: 'Al-Kausar luxury attar collection',
  },
  {
    image: banner2,
    alt: 'Al-Kausar signature fragrances',
  },
  {
    image: banner3,
    alt: 'Al-Kausar premium fragrance collection',
  },
];

function Header() {
  return (
    <>
      <section
        className="ak-hero"
        aria-label="Al-Kausar fragrance banners"
      >

        <Carousel
          className="ak-hero-carousel"
          fade
          interval={5000}
          pause={false}
          controls={true}
          indicators={true}
          touch={true}
        >

          {slides.map((slide, index) => (
            <Carousel.Item key={index}>

              <div className="ak-hero-image-wrap">

                <img
                  className="ak-hero-image"
                  src={slide.image}
                  alt={slide.alt}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />

                <div className="ak-hero-overlay" />

              </div>

            </Carousel.Item>
          ))}

        </Carousel>

      </section>

      <style>{`

        /* =================================
           HERO SECTION
        ================================= */

        .ak-hero {
          position: relative;
          width: 100%;
          height: clamp(320px, 85vh, 860px);
          height: clamp(320px, 85svh, 860px);
          overflow: hidden;
          background: #080808;
          margin: 0;
          padding: 0;
          z-index: 1;
        }

        /* =================================
           CAROUSEL
        ================================= */

        .ak-hero-carousel {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .ak-hero-carousel .carousel-inner {
          height: 100%;
        }

        .ak-hero-carousel .carousel-item {
          height: 100%;
        }

        .ak-hero-image-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        /* =================================
           SLIDER IMAGE
        ================================= */

        .ak-hero-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          transition: transform 6s ease;
        }

        .ak-hero-carousel .carousel-item.active .ak-hero-image {
          transform: scale(1.03);
        }

        /* =================================
           DARK OVERLAY
        ================================= */

        .ak-hero-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;

          background: linear-gradient(
            180deg,
            rgba(0,0,0,0.35) 0%,
            rgba(0,0,0,0.08) 35%,
            rgba(0,0,0,0.15) 70%,
            rgba(0,0,0,0.38) 100%
          );

          z-index: 1;
        }

        /* =================================
           CAROUSEL CONTROLS
        ================================= */

        .ak-hero-carousel .carousel-control-prev,
        .ak-hero-carousel .carousel-control-next {
          width: 8%;
          z-index: 5;
          opacity: 0.75;
        }

        .ak-hero-carousel .carousel-control-prev:hover,
        .ak-hero-carousel .carousel-control-next:hover {
          opacity: 1;
        }

        .ak-hero-carousel .carousel-control-prev-icon,
        .ak-hero-carousel .carousel-control-next-icon {
          width: 35px;
          height: 35px;
          filter: drop-shadow(0 2px 5px rgba(0,0,0,0.7));
        }

        /* =================================
           CAROUSEL INDICATORS
        ================================= */

        .ak-hero-carousel .carousel-indicators {
          z-index: 6;
          margin-bottom: 1.2rem;
        }

        .ak-hero-carousel .carousel-indicators [data-bs-target] {
          width: 28px;
          height: 4px;
          border-radius: 10px;
          margin-inline: 5px;
          background-color: #D4AF37;
          opacity: 0.55;
        }

        .ak-hero-carousel .carousel-indicators .active {
          opacity: 1;
        }

        /* =================================
           TABLET RESPONSIVE
        ================================= */

        @media (max-width: 991.98px) {

          .ak-hero {
            height: clamp(350px, 65svh, 650px);
          }

          .ak-hero-image {
            object-position: center center;
          }

          .ak-hero-carousel .carousel-control-prev,
          .ak-hero-carousel .carousel-control-next {
            width: 10%;
          }

        }

        /* =================================
           MOBILE RESPONSIVE
        ================================= */

        @media (max-width: 767.98px) {

          .ak-hero {
            height: clamp(85vh, 75svh, 480px);
          }

          .ak-hero-image {
            object-position: center center;
          }

          .ak-hero-carousel .carousel-control-prev,
          .ak-hero-carousel .carousel-control-next {
            width: 12%;
          }

          .ak-hero-carousel .carousel-indicators {
            margin-bottom: 0.7rem;
          }

          .ak-hero-carousel .carousel-indicators [data-bs-target] {
            width: 18px;
            height: 3px;
            margin-inline: 4px;
          }

        }

        /* =================================
           SMALL MOBILE
        ================================= */

        @media (max-width: 380px) {

          .ak-hero {
            height: 300px;
          }

          .ak-hero-carousel .carousel-control-prev,
          .ak-hero-carousel .carousel-control-next {
            width: 14%;
          }

        }

        /* =================================
           REDUCED MOTION ACCESSIBILITY
        ================================= */

        @media (prefers-reduced-motion: reduce) {

          .ak-hero-image,
          .ak-hero-carousel .carousel-item {
            transition: none !important;
          }

        }

      `}</style>
    </>
  );
}

export default Header;
