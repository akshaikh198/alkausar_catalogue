
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import GalleryHeaderImage from '../assets/Images/Banner/Background.png';

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa';

const LOGO_GOLD = '#D2AA56';

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    inquiryType: 'General Catalog Inquiry',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setErrorMessage('');
    setFormSubmitted(false);

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            'Unable to send your enquiry. Please try again.'
        );
      }

      setFormSubmitted(true);

      setFormData({
        name: '',
        email: '',
        mobile: '',
        inquiryType: 'General Catalog Inquiry',
        message: '',
      });
    } catch (error) {
      console.error('Contact form submission failed:', error);

      setErrorMessage(
        error.message ||
          'Something went wrong. Please try again later.'
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="ak-contact-page">

      {/* ================================
          GALLERY-STYLE HERO HEADER
      ================================= */}

      <Container fluid className="ak-contact-container">

        <section className="gallery-hero ak-contact-hero">

          <img
            src={GalleryHeaderImage}
            alt="AL-KAUSAR Contact"
            className="gallery-hero-image"
          />

          <div className="gallery-hero-overlay" />

          <div className="gallery-hero-content">

            {/* LEFT HEADING */}

            <div className="gallery-heading-wrapper">

              <div className="gallery-heading-banner">

                <div className="gallery-heading-tag">
                  AL-KAUSAR
                </div>

                <h1 className="gallery-heading-text">
                  Contact Us
                </h1>

              </div>

              <p className="gallery-heading-subtitle">
                WE WOULD LOVE TO HEAR FROM YOU
              </p>

            </div>

            {/* RIGHT SOCIAL CARD */}

            <div className="gallery-social-glass">

              <span className="gallery-social-eyebrow">
                STAY CONNECTED
              </span>

              <h5 className="gallery-social-title">
                CONNECT WITH US
              </h5>

              <p className="gallery-social-description">
                Have a question about our fragrances?
                Connect with the AL-KAUSAR team.
              </p>

              <div className="gallery-social-icons">

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

              <div className="gallery-social-footer">
                <span />
                EXPERIENCE THE ART OF PERFUMERY
                <span />
              </div>

            </div>

          </div>
        </section>

        {/* ================================
                 INTRODUCTION
        ================================= */}

        <section className="ak-contact-intro">

          <span className="ak-contact-eyebrow">
            THE HOUSE OF AL-KAUSAR
          </span>

          <h2>
            Let's Start a <span>Conversation.</span>
          </h2>

          <div className="ak-contact-gold-line" />

          <p>
            Whether you have an inquiry about our fragrance collections,
            custom batch volumes, retail,  Bulk Orders, or something
            else, our team is here to help you.
          </p>

        </section>

        {/* ================================
             CONTACT INFORMATION + FORM
        ================================= */}

        <section className="ak-contact-main">

          <Row className="g-4 g-xl-5">

            {/* LEFT INFORMATION PANEL */}

            <Col xs={12} lg={5}>

              <div className="ak-contact-info-panel">

                <span className="ak-contact-eyebrow">
                  GET IN TOUCH
                </span>

                <h3>
                  We're Happy
                  <br />
                  <span>To Assist You.</span>
                </h3>

                <p className="ak-contact-info-description">
                  Visit our atelier or get in touch with us through
                  any of the following channels. We look forward
                  to assisting you.
                </p>

                {/* ADDRESS */}

                <div className="ak-contact-info-item">

                  <div className="ak-contact-info-icon">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <span className="ak-contact-info-label">
                      MAIN ATELIER
                    </span>

                    <h5>AL-Kausar Perfume</h5>

                    <p>
                      Shop No 9 &amp; 9/A, 99 Haji Mahal,
                      Mohammed Ali Road, Mumbai-400003,
                      Maharashtra.
                    </p>
                  </div>

                </div>

                {/* EMAIL */}

                <div className="ak-contact-info-item">

                  <div className="ak-contact-info-icon">
                    <FaEnvelope />
                  </div>

                  <div>
                    <span className="ak-contact-info-label">
                      DIRECT CORRESPONDENCE
                    </span>

                    <a href="mailto:sales@alkausar.com">
                      sales@alkausar.com
                    </a>
                  </div>

                </div>

                {/* PHONE */}

                <div className="ak-contact-info-item">

                  <div className="ak-contact-info-icon">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <span className="ak-contact-info-label">
                      CONTACT NUMBER
                    </span>

                    <h5>Almas Perfume</h5>

                    <a href="tel:+919022786777">
                      +91 9022786777
                    </a>
                  </div>

                </div>

                {/* BRAND NOTE */}

                <div className="ak-contact-brand-note">
                  <span>✦</span>
                  <p>
                    CRAFTED WITH PASSION. CREATED TO BE REMEMBERED.
                  </p>
                </div>

              </div>

            </Col>

            {/* RIGHT CONTACT FORM */}

            <Col xs={12} lg={7}>

              <div className="ak-contact-form-panel">

                {!formSubmitted ? (
                  <>

                    <div className="ak-contact-form-heading">

                      <span className="ak-contact-eyebrow">
                        SEND AN ENQUIRY
                      </span>

                      <h3>
                        How Can We <span>Help You?</span>
                      </h3>

                      <p>
                        Complete the form below and our team
                        will get back to you shortly.
                      </p>

                    </div>

                    <Form onSubmit={handleSubmit}>

                      <Row className="g-3">

                        {/* NAME */}

                        <Col xs={12} sm={6}>

                          <Form.Group>
                            <Form.Label>
                              FULL NAME <span>*</span>
                            </Form.Label>

                            <Form.Control
                              type="text"
                              name="name"
                              placeholder="Enter your full name"
                              value={formData.name}
                              onChange={handleChange}
                              maxLength={100}
                              autoComplete="name"
                              required
                              disabled={isSending}
                            />
                          </Form.Group>

                        </Col>

                        {/* EMAIL */}

                        <Col xs={12} sm={6}>

                          <Form.Group>
                            <Form.Label>
                              EMAIL ADDRESS <span>*</span>
                            </Form.Label>

                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="you@example.com"
                              value={formData.email}
                              onChange={handleChange}
                              maxLength={254}
                              autoComplete="email"
                              required
                              disabled={isSending}
                            />
                          </Form.Group>

                        </Col>

                        {/* MOBILE */}

                        <Col xs={12} sm={6}>

                          <Form.Group>
                            <Form.Label>
                              MOBILE NUMBER <span>*</span>
                            </Form.Label>

                            <Form.Control
                              type="tel"
                              name="mobile"
                              placeholder="+91 XXXXX XXXXX"
                              value={formData.mobile}
                              onChange={handleChange}
                              maxLength={20}
                              autoComplete="tel"
                              required
                              disabled={isSending}
                            />
                          </Form.Group>

                        </Col>

                        {/* INQUIRY */}

                        <Col xs={12} sm={6}>

                          <Form.Group>
                            <Form.Label>
                              INQUIRY TYPE <span>*</span>
                            </Form.Label>

                            <Form.Select
                              name="inquiryType"
                              value={formData.inquiryType}
                              onChange={handleChange}
                              required
                              disabled={isSending}
                            >
                              <option value="General Catalog Inquiry">
                                General Catalog Inquiry
                              </option>

                              <option value="100GM">
                                100GM 
                              </option>

                              <option value="6ML">
                                6ML
                              </option>

                              <option value="Other">
                                Other
                              </option>

                              
                            </Form.Select>

                          </Form.Group>

                        </Col>

                        {/* MESSAGE */}

                        <Col xs={12}>

                          <Form.Group>
                            <Form.Label>
                              YOUR MESSAGE <span>*</span>
                            </Form.Label>

                            <Form.Control
                              as="textarea"
                              name="message"
                              rows={5}
                              placeholder="Tell us how we can assist you..."
                              value={formData.message}
                              onChange={handleChange}
                              maxLength={5000}
                              required
                              disabled={isSending}
                            />
                          </Form.Group>

                        </Col>

                      </Row>

                      {errorMessage && (
                        <div
                          className="ak-contact-error"
                          role="alert"
                        >
                          {errorMessage}
                        </div>
                      )}

                      <button
                        type="submit"
                        className="ak-contact-submit"
                        disabled={isSending}
                      >
                        {isSending ? (
                          'SENDING YOUR MESSAGE...'
                        ) : (
                          <>
                            SEND YOUR ENQUIRY
                            <FaArrowRight />
                          </>
                        )}
                      </button>

                      <p className="ak-contact-form-footer">
                        Your enquiry is important to us.
                        We will respond as soon as possible.
                      </p>

                    </Form>

                  </>
                ) : (

                  <div className="ak-contact-success">

                    <div className="ak-contact-success-icon">
                      <FaCheckCircle />
                    </div>

                    <span className="ak-contact-eyebrow">
                      MESSAGE RECEIVED
                    </span>

                    <h3>
                      Thank You For
                      <br />
                      <span>Connecting With Us.</span>
                    </h3>

                    <p>
                      Your enquiry has been successfully submitted.
                      Our fragrance house concierge will review
                      your message and get back to you shortly.
                    </p>

                    <button
                      type="button"
                      className="ak-contact-submit"
                      onClick={() => {
                        setFormSubmitted(false);
                        setErrorMessage('');
                      }}
                    >
                      SEND ANOTHER ENQUIRY
                      <FaArrowRight />
                    </button>

                  </div>

                )}

              </div>

            </Col>

          </Row>

        </section>

        {/* ================================
                    GOOGLE MAP
        ================================= */}

        <section className="ak-contact-map-section">

          <div className="ak-contact-map-heading">

            <span className="ak-contact-eyebrow">
              VISIT OUR ATELIER
            </span>

            <h2>
              Find Us <span>On The Map.</span>
            </h2>

            <p>
              We welcome you to visit AL-KAUSAR Perfume
              at Haji Mahal, Mohammed Ali Road, Mumbai.
            </p>

          </div>

          <div className="ak-contact-map-frame">

            <iframe
              title="AL-Kausar Perfume Shop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.587720541284!2d72.8348988!3d18.9496344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfebe5acfd8f%3A0x64665f733eb2b242!2sAL%20KAUSAR%20FRAGRANCE!5e0!3m2!1sen!2sin!4v1792850209070!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

          <a
            href="https://maps.app.goo.gl/dtqrTWV8w3ek3RPC6"
            target="_blank"
            rel="noopener noreferrer"
            className="ak-contact-directions"
          >
            <FaMapMarkerAlt />
            GET DIRECTIONS ON GOOGLE MAPS
            <FaArrowRight />
          </a>

        </section>

      </Container>

      {/* ================================
                  PAGE CSS
      ================================= */}

      <style>{`

        .ak-contact-page {
          --ak-gold: #D2AA56;
          --ak-black: #000000;
          --ak-white: #FFFFFF;
          --ak-muted: #737373;
          background: #FFFFFF;
          color: #000000;
          min-height: 100vh;
          padding: 1rem 0 5rem;
          overflow: hidden;
        }

        .ak-contact-container {
          width: 100%;
          padding-left: clamp(12px, 3vw, 45px);
          padding-right: clamp(12px, 3vw, 45px);
        }

        /* HERO - SAME GALLERY STRUCTURE */

        .ak-contact-hero {
          position: relative;
          width: 100%;
          height: clamp(280px, 38vw, 480px);
          overflow: hidden;
          border-radius: 8px;
          margin-bottom: 5rem;
        }

        .ak-contact-hero .gallery-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .ak-contact-hero .gallery-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0,0,0,0.65),
            rgba(0,0,0,0.18),
            rgba(0,0,0,0.65)
          );
        }

        .ak-contact-hero .gallery-hero-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding: clamp(15px, 5vw, 65px);
        }

        .ak-contact-hero .gallery-heading-wrapper {
          position: relative;
          flex: 1;
          min-width: 0;
        }

        .ak-contact-hero .gallery-heading-banner {
          display: flex;
          align-items: center;
          width: fit-content;
          max-width: 100%;
          min-height: 85px;
          background: linear-gradient(
            120deg,
            #FFFFFF 0%,
            #F8F6F0 100%
          );
          border: 1px solid rgba(210,170,86,0.5);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          padding: 0 25px 0 0;
          clip-path: polygon(0 0, 96% 0, 100% 100%, 4% 100%);
          transition: all 0.35s ease;
        }

        .ak-contact-hero .gallery-heading-banner:hover {
          transform: translateY(-4px);
        }

        .ak-contact-hero .gallery-heading-tag {
          min-width: 115px;
          min-height: 85px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(
            145deg,
            #D2AA56,
            #A98132
          );
          color: #FFFFFF;
          font-family: 'Cinzel', serif;
          font-size: 0.85rem;
          font-weight: 900;
          letter-spacing: 1.5px;
          clip-path: polygon(
            0 0,
            85% 0,
            100% 75%,
            50% 100%,
            15% 75%
          );
          margin-right: 18px;
          flex-shrink: 0;
        }

        .ak-contact-hero .gallery-heading-text {
          color: #000000;
          font-family: 'Cinzel', 'Playfair Display', serif;
          font-size: clamp(1.1rem, 3vw, 2rem);
          font-weight: 900;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          line-height: 1.3;
          margin: 0;
          padding-right: 10px;
          white-space: nowrap;
        }

        .ak-contact-hero .gallery-heading-subtitle {
          color: #FFFFFF;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 3px;
          margin-top: 20px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
        }

        /* SOCIAL GLASS CARD */

        .ak-contact-hero .gallery-social-glass {
          width: min(340px, 38%);
          flex-shrink: 0;
          padding: 25px;
          border-radius: 18px;
          background: rgba(255,255,255,0.13);
          border: 1px solid rgba(255,255,255,0.35);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          color: #FFFFFF;
          text-align: center;
          box-shadow: 0 15px 40px rgba(0,0,0,0.2);
        }

        .ak-contact-hero .gallery-social-eyebrow {
          color: var(--ak-gold);
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .ak-contact-hero .gallery-social-title {
          color: #FFFFFF;
          font-family: 'Cinzel', serif;
          font-size: 1.15rem;
          font-weight: 800;
          letter-spacing: 1px;
          margin: 10px 0;
        }

        .ak-contact-hero .gallery-social-description {
          color: rgba(255,255,255,0.85);
          font-size: 0.82rem;
          line-height: 1.7;
          margin-bottom: 18px;
        }

        .ak-contact-hero .gallery-social-icons {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .ak-contact-hero .gallery-social-icons a {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000000;
          color: var(--ak-gold);
          border: 1px solid rgba(210,170,86,0.7);
          font-size: 17px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .ak-contact-hero .gallery-social-icons a:hover {
          background: var(--ak-gold);
          color: #000000;
          transform: translateY(-4px);
        }

        .ak-contact-hero .gallery-social-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #FFFFFF;
          font-size: 0.58rem;
          letter-spacing: 1px;
          font-weight: 700;
          margin-top: 20px;
        }

        .ak-contact-hero .gallery-social-footer span {
          width: 20px;
          height: 1px;
          background: var(--ak-gold);
        }

        /* INTRO */

        .ak-contact-intro {
          max-width: 760px;
          margin: 0 auto 4rem;
          text-align: center;
        }

        .ak-contact-eyebrow {
          color: #A98132;
          font-size: 0.7rem;
          font-weight: 900;
          letter-spacing: 3px;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 14px;
        }

        .ak-contact-intro h2,
        .ak-contact-map-heading h2 {
          color: #000000;
          font-family: 'Cinzel', 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.7rem);
          font-weight: 800;
          line-height: 1.3;
          margin-bottom: 15px;
        }

        .ak-contact-intro h2 span,
        .ak-contact-map-heading h2 span,
        .ak-contact-info-panel h3 span,
        .ak-contact-form-heading h3 span,
        .ak-contact-success h3 span {
          color: var(--ak-gold);
        }

        .ak-contact-gold-line {
          width: 75px;
          height: 3px;
          background: var(--ak-gold);
          margin: 20px auto;
        }

        .ak-contact-intro > p,
        .ak-contact-map-heading > p {
          color: #666666;
          font-size: 0.96rem;
          line-height: 1.9;
          max-width: 650px;
          margin: 0 auto;
        }

        /* MAIN LAYOUT */

        .ak-contact-main {
          margin-bottom: 5rem;
        }

        .ak-contact-info-panel,
        .ak-contact-form-panel {
          height: 100%;
          border: 1px solid rgba(210,170,86,0.35);
          border-radius: 22px;
          padding: clamp(24px, 4vw, 42px);
          box-shadow: 0 12px 35px rgba(0,0,0,0.045);
        }

        .ak-contact-info-panel {
          background: #000000;
          color: #FFFFFF;
          position: relative;
          overflow: hidden;
        }

        .ak-contact-info-panel::after {
          content: 'AK';
          position: absolute;
          right: -10px;
          bottom: -55px;
          font-family: 'Cinzel', serif;
          font-size: 12rem;
          font-weight: 900;
          color: rgba(210,170,86,0.055);
          pointer-events: none;
        }

        .ak-contact-info-panel .ak-contact-eyebrow {
          color: var(--ak-gold);
        }

        .ak-contact-info-panel h3 {
          font-family: 'Cinzel', serif;
          font-size: clamp(1.55rem, 3vw, 2rem);
          font-weight: 800;
          line-height: 1.4;
          margin-bottom: 18px;
          color: #FFFFFF;
        }

        .ak-contact-info-description {
          color: rgba(255,255,255,0.7);
          font-size: 0.9rem;
          line-height: 1.8;
          margin-bottom: 35px;
        }

        .ak-contact-info-item {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 27px;
        }

        .ak-contact-info-icon {
          width: 44px;
          height: 44px;
          min-width: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(210,170,86,0.13);
          border: 1px solid rgba(210,170,86,0.45);
          color: var(--ak-gold);
          font-size: 16px;
        }

        .ak-contact-info-label {
          color: var(--ak-gold);
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 7px;
        }

        .ak-contact-info-item h5 {
          color: #FFFFFF;
          font-size: 0.95rem;
          font-weight: 700;
          margin: 0 0 5px;
        }

        .ak-contact-info-item p,
        .ak-contact-info-item a {
          color: rgba(255,255,255,0.75);
          font-size: 0.85rem;
          line-height: 1.8;
          margin: 0;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .ak-contact-info-item a:hover {
          color: var(--ak-gold);
        }

        .ak-contact-brand-note {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 12px;
          border-top: 1px solid rgba(210,170,86,0.25);
          padding-top: 22px;
          margin-top: 10px;
        }

        .ak-contact-brand-note span {
          color: var(--ak-gold);
          font-size: 1.5rem;
        }

        .ak-contact-brand-note p {
          color: rgba(255,255,255,0.7);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin: 0;
        }

        /* FORM */

        .ak-contact-form-panel {
          background: #FFFFFF;
        }

        .ak-contact-form-heading {
          margin-bottom: 30px;
        }

        .ak-contact-form-heading h3 {
          font-family: 'Cinzel', 'Playfair Display', serif;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 800;
          color: #000000;
          margin-bottom: 10px;
        }

        .ak-contact-form-heading p {
          color: #777777;
          font-size: 0.88rem;
          line-height: 1.7;
          margin: 0;
        }

        .ak-contact-form-panel .form-label {
          color: #222222;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 1.2px;
          margin-bottom: 9px;
        }

        .ak-contact-form-panel .form-label span {
          color: #A98132;
        }

        .ak-contact-form-panel .form-control,
        .ak-contact-form-panel .form-select {
          min-height: 49px;
          border-radius: 10px;
          border: 1px solid rgba(0,0,0,0.13);
          background-color: #FFFFFF;
          color: #000000;
          font-size: 0.86rem;
          padding: 12px 15px;
          box-shadow: none;
          transition: all 0.25s ease;
        }

        .ak-contact-form-panel textarea.form-control {
          min-height: 135px;
          resize: vertical;
        }

        .ak-contact-form-panel .form-control:focus,
        .ak-contact-form-panel .form-select:focus {
          border-color: var(--ak-gold);
          box-shadow: 0 0 0 3px rgba(210,170,86,0.13);
        }

        .ak-contact-form-panel .form-control::placeholder {
          color: #AAAAAA;
        }

        .ak-contact-submit {
          width: 100%;
          min-height: 53px;
          margin-top: 24px;
          border: 1px solid #000000;
          border-radius: 10px;
          background: #000000;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          transition: all 0.3s ease;
        }

        .ak-contact-submit:hover:not(:disabled) {
          background: var(--ak-gold);
          border-color: var(--ak-gold);
          color: #000000;
          transform: translateY(-2px);
        }

        .ak-contact-submit:disabled {
          opacity: 0.65;
          cursor: wait;
        }

        .ak-contact-form-footer {
          color: #999999;
          font-size: 0.72rem;
          text-align: center;
          margin: 15px 0 0;
        }

        .ak-contact-error {
          background: #FFF0F0;
          border: 1px solid #E9B5B5;
          color: #A12222;
          border-radius: 8px;
          padding: 12px 15px;
          font-size: 0.85rem;
          margin-top: 20px;
        }

        /* SUCCESS STATE */

        .ak-contact-success {
          min-height: 480px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .ak-contact-success-icon {
          width: 75px;
          height: 75px;
          border-radius: 50%;
          background: rgba(210,170,86,0.13);
          color: #A98132;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.3rem;
          margin-bottom: 25px;
        }

        .ak-contact-success h3 {
          font-family: 'Cinzel', serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 3vw, 2rem);
          line-height: 1.5;
          margin-bottom: 15px;
        }

        .ak-contact-success > p {
          color: #777777;
          font-size: 0.9rem;
          line-height: 1.8;
          max-width: 420px;
        }

        /* MAP */

        .ak-contact-map-section {
          text-align: center;
        }

        .ak-contact-map-heading {
          margin-bottom: 30px;
        }

        .ak-contact-map-frame {
          width: 100%;
          height: clamp(280px, 42vw, 450px);
          overflow: hidden;
          border-radius: 18px;
          border: 1px solid rgba(210,170,86,0.5);
          box-shadow: 0 12px 35px rgba(0,0,0,0.08);
        }

        .ak-contact-directions {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 25px;
          padding: 15px 25px;
          border-radius: 9px;
          background: #000000;
          border: 1px solid #000000;
          color: #FFFFFF;
          text-decoration: none;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .ak-contact-directions:hover {
          background: var(--ak-gold);
          border-color: var(--ak-gold);
          color: #000000;
          transform: translateY(-3px);
        }

        /* RESPONSIVE */

        @media (max-width: 991px) {

          .ak-contact-hero .gallery-hero-content {
            gap: 15px;
          }

          .ak-contact-hero .gallery-social-glass {
            width: 300px;
          }

        }

        @media (max-width: 767px) {

          .ak-contact-page {
            padding-top: 10px;
          }

          .ak-contact-hero {
            height: auto;
            min-height: 440px;
            margin-bottom: 3.5rem;
          }

          .ak-contact-hero .gallery-hero-content {
            position: relative;
            min-height: 440px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 35px 15px;
          }

          .ak-contact-hero .gallery-heading-wrapper {
            width: 100%;
            text-align: center;
            flex: initial;
          }

          .ak-contact-hero .gallery-heading-banner {
            margin: 0 auto;
            min-height: 68px;
            padding-right: 12px;
          }

          .ak-contact-hero .gallery-heading-tag {
            min-width: 85px;
            min-height: 68px;
            font-size: 0.65rem;
            padding: 8px;
            margin-right: 10px;
          }

          .ak-contact-hero .gallery-heading-text {
            font-size: clamp(0.85rem, 4vw, 1.15rem);
            letter-spacing: 0.5px;
          }

          .ak-contact-hero .gallery-heading-subtitle {
            font-size: 0.63rem;
            letter-spacing: 1.5px;
            margin-top: 14px;
          }

          .ak-contact-hero .gallery-social-glass {
            width: min(100%, 340px);
            padding: 18px;
          }

          .ak-contact-intro {
            margin-bottom: 2.5rem;
          }

          .ak-contact-info-panel,
          .ak-contact-form-panel {
            padding: 25px 20px;
            border-radius: 16px;
          }

          .ak-contact-main {
            margin-bottom: 3.5rem;
          }

          .ak-contact-success {
            min-height: 400px;
          }

          .ak-contact-directions {
            width: 100%;
            font-size: 0.65rem;
            padding: 14px 10px;
          }

        }

        @media (max-width: 380px) {

          .ak-contact-hero .gallery-heading-text {
            font-size: 0.78rem;
          }

          .ak-contact-hero .gallery-heading-tag {
            min-width: 72px;
            font-size: 0.58rem;
          }

          .ak-contact-hero .gallery-social-title {
            font-size: 1rem;
          }

        }

      `}</style>

    </main>
  );
}

export default Contact;
