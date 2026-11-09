
import React from 'react';
import GalleryHeaderImage from '../assets/Images/Banner/Background.png';
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

function GalleryPageHero() {
  return (
    <section className="gallery-hero">

      <img
        src={GalleryHeaderImage}
        alt="AL-KAUSAR Fragrance Collection"
        className="gallery-hero-image"
      />

      <div className="gallery-hero-overlay" />

      <div className="gallery-hero-content">

        <div className="gallery-heading-wrapper">

          <div className="gallery-heading-banner">
            <div className="gallery-heading-tag">
              AL-KAUSAR
            </div>

            <h1 className="gallery-heading-text">
              Fragrance Gallery
            </h1>
          </div>

          <p className="gallery-heading-subtitle">
            DISCOVER YOUR SIGNATURE FRAGRANCE
          </p>
        </div>

        <div className="gallery-social-glass">

          <span className="gallery-social-eyebrow">
            STAY CONNECTED
          </span>

          <h5 className="gallery-social-title">
            CONNECT WITH US
          </h5>

          <p className="gallery-social-description">
            Follow our fragrance journey and stay connected
            with AL-KAUSAR.
          </p>

          <div className="gallery-social-icons">

            <a href="https://www.instagram.com/YOUR_USERNAME/"
              target="_blank" rel="noopener noreferrer"
              aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="https://www.facebook.com/YOUR_USERNAME/"
              target="_blank" rel="noopener noreferrer"
              aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="https://wa.me/91YOURNUMBER"
              target="_blank" rel="noopener noreferrer"
              aria-label="WhatsApp">
              <FaWhatsapp />
            </a>

            <a href="https://www.youtube.com/@YOUR_CHANNEL"
              target="_blank" rel="noopener noreferrer"
              aria-label="YouTube">
              <FaYoutube />
            </a>

          </div>

          <div className="gallery-social-footer">
            <span />
            EXPERIENCE THE ART OF PERFUMERY
            <span />
          </div>

        </div>
      </div>
    </section>
  );
}

export default GalleryPageHero;
