
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import logo from "../assets/Images/Logo/Al_Kausar_Logo_white.png";
// ==========================================
// FOOTER NAVIGATION LINK
// ==========================================

function FooterLink({ to, children }) {
  return (
    <Link to={to} className="ak-footer-link">
      <span className="ak-footer-link-arrow">✧</span>
      {children}
    </Link>
  );
}

// ==========================================
// SOCIAL MEDIA BUTTON
// ==========================================

function SocialButton({ href, iconClass, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="ak-footer-social"
    >
      <i className={`bi ${iconClass}`} aria-hidden="true" />
    </a>
  );
}

// ==========================================
// MAIN FOOTER
// ==========================================

function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Replace this demo alert with your newsletter API
    // or backend subscription endpoint.
    alert(
      `Thank you for subscribing! Updates will be sent to ${email}.`
    );

    setEmail("");
  };

  return (
    <footer className="ak-footer">

      {/* DECORATIVE BACKGROUND */}
      <div className="ak-footer-decoration ak-footer-decoration-one" />
      <div className="ak-footer-decoration ak-footer-decoration-two" />

      <Container fluid className="ak-footer-container">

        {/* TOP BRAND PROMISE BAR */}
        <div className="ak-footer-promise">

          <div className="ak-footer-promise-item">
            <span className="ak-footer-promise-icon">✧</span>
            <div>
              <h6>Premium Fragrance</h6>
              <p>Exceptional fragrance craftsmanship</p>
            </div>
          </div>

          <span className="ak-footer-promise-divider" />

          <div className="ak-footer-promise-item">
            <span className="ak-footer-promise-icon">◷</span>
            <div>
              <h6>Long-Lasting Essence</h6>
              <p>Beautifully composed fragrance oils</p>
            </div>
          </div>

          <span className="ak-footer-promise-divider" />

          <div className="ak-footer-promise-item">
            <span className="ak-footer-promise-icon">◇</span>
            <div>
              <h6>Timeless Elegance</h6>
              <p>Inspired by the art of fine perfumery</p>
            </div>
          </div>

        </div>

        {/* MAIN FOOTER CONTENT */}
        <div className="ak-footer-main">

          <Row className="gy-5">

            {/* ==================================
                COLUMN 1: BRAND INFORMATION
            ================================== */}

            <Col xs={12} lg={4}>

              <div className="ak-footer-brand">

                <Link to="/" className="ak-footer-logo-link">
                  <img
                    src={logo}
                    alt="Al Kausar Perfumes"
                    className="ak-footer-logo"
                    width="130"
                    height="130"
                    loading="lazy"
                  />
                </Link>

                <h3 className="ak-footer-brand-title">
                  AL KAUSAR <span>PERFUMES</span>
                </h3>

                <div className="ak-footer-brand-divider">
                  <span />
                  ✧
                  <span />
                </div>

                <p className="ak-footer-brand-description">
                  Preserving the sacred art of perfumery.
                  Al Kausar crafts rare, long-lasting
                  non-alcoholic concentrated oils and fine
                  agarwood extracts that evoke distinction
                  and timeless majesty.
                </p>

                {/* SOCIAL MEDIA */}
                <div className="ak-footer-social-wrapper">

                  <SocialButton
                    href="https://instagram.com"
                    iconClass="bi-instagram"
                    label="Instagram"
                  />

                  <SocialButton
                    href="https://facebook.com"
                    iconClass="bi-facebook"
                    label="Facebook"
                  />

                  <SocialButton
                    href="https://whatsapp.com"
                    iconClass="bi-whatsapp"
                    label="WhatsApp"
                  />

                  <SocialButton
                    href="https://youtube.com"
                    iconClass="bi-youtube"
                    label="YouTube"
                  />

                </div>

              </div>

            </Col>

            {/* ==================================
                COLUMN 2: COLLECTIONS
            ================================== */}

            <Col xs={6} md={4} lg={2}>

              <div className="ak-footer-column">

                <h5 className="ak-footer-column-title">
                  Collections
                </h5>

                <FooterLink to="/collection/100gm">
                  100GM Collection
                </FooterLink>

                <FooterLink to="/collection/6ml">
                  6ML Collection
                </FooterLink>

              </div>

            </Col>

            {/* ==================================
                COLUMN 3: IMPORTANT LINKS
            ================================== */}

            <Col xs={6} md={4} lg={2}>

              <div className="ak-footer-column">

                <h5 className="ak-footer-column-title">
                  Explore
                </h5>

                <FooterLink to="/about">
                  Our Story
                </FooterLink>

                <FooterLink to="/gallery">
                  Product Gallery
                </FooterLink>

                <FooterLink to="/catalogue">
                  Catalogue
                </FooterLink>

                <FooterLink to="/contact">
                  Contact Us
                </FooterLink>

              </div>

            </Col>

            {/* ==================================
                COLUMN 4: NEWSLETTER & CONTACT
            ================================== */}

            <Col xs={12} md={4} lg={4}>

              <div className="ak-footer-newsletter">

                <span className="ak-footer-small-label">
                  THE PRIVATE CIRCLE
                </span>

                <h5 className="ak-footer-column-title">
                  Exclusive Batches
                </h5>

                <p className="ak-footer-newsletter-description">
                  Join our private circle for early
                  notifications on limited seasonal
                  extractions and rare oud distillations.
                </p>

                {/* NEWSLETTER FORM */}
                <Form
                  onSubmit={handleNewsletterSubmit}
                  className="ak-footer-form"
                >

                  <Form.Control
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Enter your email address"
                    aria-label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="ak-footer-input"
                  />

                  <button
                    type="submit"
                    className="ak-footer-subscribe-btn"
                  >
                    Subscribe to Updates
                    <span>→</span>
                  </button>

                </Form>

                {/* CONTACT INFORMATION */}
                <div className="ak-footer-contact">

                  <div className="ak-footer-contact-item">
                    <i className="bi bi-geo-alt" />
                    <span>
                      Shop No 9 & 9/A, 99 Haji Mahal, Mohammed Ali Road, Mumbai-400003, Maharashtra.
                    </span>
                  </div>

                  <div className="ak-footer-contact-item">
                    <i className="bi bi-telephone" />
                    <span>
                      +91 9022786777
                    </span>
                  </div>

                </div>

              </div>

            </Col>

          </Row>

          {/* ==================================
              BOTTOM FOOTER
          ================================== */}

          <div className="ak-footer-bottom">

            <Row className="align-items-center gy-3">

              <Col xs={12} lg={5}>
                <p className="ak-footer-copyright">
                  © {new Date().getFullYear()}{" "}
                  <strong>Al Kausar Perfumes</strong>.
                  All rights reserved.
                </p>
              </Col>

              <Col xs={12} lg={7}>

                <div className="ak-footer-legal">

                  <Link to="/privacy">
                    Privacy Policy
                  </Link>

                  <span />

                  <Link to="/terms">
                    Terms of Curation
                  </Link>

                  <span />

                  <Link to="/shipping">
                    Delivery & Shipping
                  </Link>

                </div>

              </Col>

            </Row>

          </div>

          {/* FINAL BRAND SIGNATURE */}
          <div className="ak-footer-signature">
            <span>✧</span>
            THE ART OF FINE FRAGRANCE
            <span>✧</span>
          </div>

        </div>

      </Container>

    </footer>
  );
}

export default Footer;
