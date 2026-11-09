
import React from 'react';
import Container from 'react-bootstrap/Container';
import GalleryHeaderImage from '../assets/Images/Banner/Background.png';

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

function PageHeader({
  title = 'Explore Our Collection',
  subtitle = 'DISCOVER YOUR SIGNATURE FRAGRANCE',
  backgroundImage = GalleryHeaderImage,
  showSocial = true,
}) {
  return (
    <section className="ak-page-hero">
      <img
        src={backgroundImage}
        alt="Al Kausar Fragrance Collection"
        className="ak-page-hero-image"
      />

      <div className="ak-page-hero-overlay" />

      <Container fluid className="ak-page-hero-container">
        <div className="ak-page-hero-content">

          {/* LEFT: TITLE RIBBON */}
          <div className="ak-page-heading">
            <div className="ak-page-heading-banner">
              <div className="ak-page-heading-tag">
                AL-KAUSAR
              </div>

              <h1>{title}</h1>
            </div>

            <p>{subtitle}</p>
          </div>

          {/* RIGHT: SOCIAL CARD */}
          {showSocial && (
            <div className="ak-page-social-card">
              <span className="ak-page-social-eyebrow">
                STAY CONNECTED
              </span>

              <h5>CONNECT WITH US</h5>

              <p>
                Follow our fragrance journey and stay connected
                with AL-KAUSAR.
              </p>

              <div className="ak-page-social-icons">
                <a
                  href="https://www.instagram.com/YOUR_USERNAME/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.facebook.com/YOUR_USERNAME/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://wa.me/91YOURNUMBER"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://www.youtube.com/@YOUR_CHANNEL"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </div>

              <div className="ak-page-social-footer">
                <span />
                EXPERIENCE THE ART OF PERFUMERY
                <span />
              </div>
            </div>
          )}

        </div>
      </Container>
    </section>
  );
}

export default PageHeader;
