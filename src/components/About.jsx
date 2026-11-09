import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

import atelierImage from '../assets/Images/Mix/mix1.jpeg';
import GalleryHeaderImage from '../assets/Images/Banner/Background.png';

const historicalTimeline = [
  {
    num: '01',
    title: 'The Art of Sourcing',
    desc: 'We seek inspiration from the worlds most treasured botanical ingredients, selecting distinctive woods, resins and florals for their character and quality.',
  },
  {
    num: '02',
    title: 'The Craft of Blending',
    desc: 'Each fragrance is carefully composed with an appreciation for balance, depth and detail, bringing individual notes together into a memorable fragrance.',
  },
  {
    num: '03',
    title: 'Time-Honoured Creation',
    desc: 'Patience is part of our process. We give our compositions the attention they deserve, allowing their individual characteristics to come together beautifully.',
  },
];

const stats = [
  { number: '100%', label: 'Craftsmanship Focus' },
  { number: '0%', label: 'Alcohol in Pure Attars' },
  { number: '24hr+', label: 'Long-Lasting Fragrance*' },
];

const socialLinks = [
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/YOUR_USERNAME/',
  },
  {
    name: 'Facebook',
    icon: <FaFacebookF />,
    href: 'https://www.facebook.com/YOUR_USERNAME/',
  },
  {
    name: 'WhatsApp',
    icon: <FaWhatsapp />,
    href: 'https://wa.me/91YOURNUMBER',
  },
  {
    name: 'YouTube',
    icon: <FaYoutube />,
    href: 'https://www.youtube.com/@YOUR_CHANNEL',
  },
];

function About() {
  return (
    <main className="ak-about">

      {/* Shared Gallery-Style Hero Header */}
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
                     <span>AL KAUSAR</span>
                   </div>
   
                   <h1 className="gallery-heading-text">
                     About Us
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

      {/* Brand Story */}
      <section className="ak-about-story">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <div className="ak-about-image-wrap">
                <img
                  src={atelierImage}
                  alt="Al Kausar perfume collection and craftsmanship"
                  className="ak-about-image"
                />

                <div className="ak-about-image-frame" />

                <div className="ak-about-image-caption">
                  <span>THE ART OF PERFUMERY</span>
                  <span>AL KAUSAR</span>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="ak-about-story-content">
                <span className="ak-about-eyebrow">
                  OUR ETHOS
                </span>

                <h2>
                  More Than a Perfume.
                  <br />
                  <span>A Signature.</span>
                </h2>

                <div className="ak-about-heading-line" />

                <p>
                  At <strong>Al Kausar</strong>, we believe fragrance
                  is more than something you wear. It is an expression
                  of personality, a reflection of memories and an
                  impression that stays long after you leave.
                </p>

                <p>
                  Inspired by the rich heritage of Eastern perfumery,
                  our collection brings together pure oil Attars,
                  Bakhoor and carefully selected fragrances. Every
                  creation reflects our appreciation for character,
                  quality and detail.
                </p>

                <p>
                  Our philosophy is simple: create fragrances that
                  feel personal, distinctive and timeless.
                </p>

                <div className="ak-about-signature">
                  <span className="ak-about-signature-line" />
                  <span>THE AL KAUSAR PROMISE</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Brand Statistics */}
      <section className="ak-about-stats">
        <Container>
          <div className="ak-about-stats-heading">
            <span className="ak-about-eyebrow">
              OUR COMMITMENT
            </span>

            <h2>Quality in Every Detail</h2>

            <p>
              A commitment to thoughtful selection,
              attention to detail and the art of fragrance.
            </p>
          </div>

          <Row className="g-4">
            {stats.map((stat) => (
              <Col xs={12} sm={6} md={4} key={stat.label}>
                <div className="ak-about-stat">
                  <span className="ak-about-stat-number">
                    {stat.number}
                  </span>

                  <span className="ak-about-stat-label">
                    {stat.label}
                  </span>

                  <span className="ak-about-stat-decoration" />
                </div>
              </Col>
            ))}
          </Row>

          <p className="ak-about-stat-note">
            *Fragrance longevity varies depending on the composition,
            application and individual skin chemistry.
          </p>
        </Container>
      </section>

      {/* Craftsmanship */}
      <section className="ak-about-craft">
        <Container>
          <div className="ak-about-craft-heading">
            <span className="ak-about-eyebrow">
              THE AL KAUSAR APPROACH
            </span>

            <h2>
              The Journey Behind
              <br />
              <span>Every Fragrance.</span>
            </h2>

            <p>
              Thoughtful choices, careful composition and an
              appreciation for the finer details of perfumery.
            </p>
          </div>

          <Row className="g-4">
            {historicalTimeline.map((step) => (
              <Col xs={12} md={4} key={step.num}>
                <article className="ak-about-craft-card">
                  <div className="ak-about-craft-card-top">
                    <span className="ak-about-craft-number">
                      {step.num}
                    </span>

                    <span className="ak-about-card-line" />
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.desc}</p>

                  <span className="ak-about-card-watermark">
                    {step.num}
                  </span>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Closing Statement */}
      <section className="ak-about-closing">
        <div className="ak-about-closing-pattern" />

        <Container>
          <span className="ak-about-eyebrow">
            AL KAUSAR PERFUMES
          </span>

          <h2>
            Discover Your
            <br />
            <span>Signature Fragrance.</span>
          </h2>

          <p>
            Explore a world of distinctive fragrances,
            thoughtfully selected for those who appreciate
            the art of perfumery.
          </p>

          <a
            href="/collection/100gm"
            className="ak-about-button"
          >
            EXPLORE OUR COLLECTION
            <span aria-hidden="true">↗</span>
          </a>
        </Container>
      </section>

      <style>{`
        .ak-about {
          --ak-gold: #D2AA56;
          --ak-gold-dark: #A98132;
          --ak-black: #000000;
          --ak-white: #FFFFFF;
          --ak-cream: #FAF8F3;
          --ak-muted: #777777;
          background: var(--ak-white);
          color: var(--ak-black);
          overflow: hidden;
        }

        .ak-about * {
          box-sizing: border-box;
        }

        /* Story Section */

        .ak-about-story {
          padding: 110px 0;
          background: var(--ak-white);
        }

        .ak-about-image-wrap {
          position: relative;
          padding: 0 22px 22px 0;
          max-width: 570px;
          margin: auto;
        }

        .ak-about-image-wrap::before {
          content: "";
          position: absolute;
          top: 22px;
          right: 0;
          bottom: 0;
          left: 22px;
          border: 1px solid var(--ak-gold);
          opacity: 0.8;
        }

        .ak-about-image {
          display: block;
          position: relative;
          z-index: 1;
          width: 100%;
          height: 570px;
          object-fit: cover;
          filter: saturate(0.85);
          transition: transform 0.7s ease, filter 0.7s ease;
        }

        .ak-about-image-wrap:hover .ak-about-image {
          transform: translate(5px, -5px);
          filter: saturate(1);
        }

        .ak-about-image-frame {
          position: absolute;
          z-index: 2;
          inset: 0 22px 22px 0;
          border: 1px solid rgba(255,255,255,0.35);
          pointer-events: none;
        }

        .ak-about-image-caption {
          position: absolute;
          z-index: 3;
          left: 0;
          right: 22px;
          bottom: 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 18px 22px;
          background: rgba(0,0,0,0.78);
          color: var(--ak-white);
          font-size: 10px;
          letter-spacing: 2px;
          font-weight: 600;
        }

        .ak-about-image-caption span:last-child {
          color: var(--ak-gold);
        }

        .ak-about-eyebrow {
          display: inline-block;
          color: var(--ak-gold-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .ak-about-story-content {
          padding: 15px 0 15px 25px;
        }

        .ak-about-story-content h2 {
          margin: 20px 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(36px, 4vw, 55px);
          font-weight: 400;
          line-height: 1.16;
          letter-spacing: -1.5px;
        }

        .ak-about-story-content h2 span,
        .ak-about-craft-heading h2 span,
        .ak-about-closing h2 span {
          color: var(--ak-gold-dark);
          font-style: italic;
        }

        .ak-about-heading-line {
          width: 65px;
          height: 2px;
          margin: 25px 0;
          background: var(--ak-gold);
        }

        .ak-about-story-content p {
          margin-bottom: 18px;
          color: #626262;
          font-size: 15px;
          line-height: 1.95;
        }

        .ak-about-story-content strong {
          color: var(--ak-black);
          font-weight: 700;
        }

        .ak-about-signature {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 32px;
          color: var(--ak-black);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
        }

        .ak-about-signature-line {
          display: inline-block;
          width: 45px;
          height: 1px;
          background: var(--ak-gold);
        }

        /* Statistics */

        .ak-about-stats {
          position: relative;
          padding: 95px 0 85px;
          background: var(--ak-black);
          color: var(--ak-white);
        }

        .ak-about-stats-heading {
          max-width: 650px;
          margin: 0 auto 50px;
          text-align: center;
        }

        .ak-about-stats-heading h2 {
          margin: 15px 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(32px, 4vw, 45px);
          font-weight: 400;
        }

        .ak-about-stats-heading p {
          margin: 0;
          color: #aaaaaa;
          font-size: 14px;
          line-height: 1.8;
        }

        .ak-about-stat {
          position: relative;
          min-height: 190px;
          height: 100%;
          padding: 35px 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          border: 1px solid rgba(210,170,86,0.3);
          transition: border-color 0.3s ease,
                      background 0.3s ease,
                      transform 0.3s ease;
        }

        .ak-about-stat:hover {
          transform: translateY(-6px);
          border-color: var(--ak-gold);
          background: rgba(210,170,86,0.06);
        }

        .ak-about-stat-number {
          color: var(--ak-gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(40px, 5vw, 55px);
          line-height: 1.2;
        }

        .ak-about-stat-label {
          margin-top: 12px;
          color: #dddddd;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .ak-about-stat-decoration {
          width: 30px;
          height: 1px;
          margin-top: 20px;
          background: var(--ak-gold);
        }

        .ak-about-stat-note {
          margin: 25px 0 0;
          color: #888888;
          font-size: 11px;
          text-align: center;
          line-height: 1.7;
        }

        /* Craftsmanship */

        .ak-about-craft {
          padding: 110px 0;
          background: var(--ak-cream);
        }

        .ak-about-craft-heading {
          max-width: 680px;
          margin: 0 auto 55px;
          text-align: center;
        }

        .ak-about-craft-heading h2 {
          margin: 18px 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(36px, 4.5vw, 54px);
          font-weight: 400;
          line-height: 1.2;
        }

        .ak-about-craft-heading p {
          max-width: 520px;
          margin: 0 auto;
          color: var(--ak-muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .ak-about-craft-card {
          position: relative;
          z-index: 1;
          min-height: 310px;
          height: 100%;
          padding: 35px 30px;
          overflow: hidden;
          background: var(--ak-white);
          border: 1px solid rgba(210,170,86,0.35);
          transition: transform 0.35s ease,
                      box-shadow 0.35s ease,
                      border-color 0.35s ease;
        }

        .ak-about-craft-card:hover {
          transform: translateY(-8px);
          border-color: var(--ak-gold);
          box-shadow: 0 18px 45px rgba(0,0,0,0.07);
        }

        .ak-about-craft-card-top {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 35px;
        }

        .ak-about-craft-number {
          color: var(--ak-gold-dark);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
        }

        .ak-about-card-line {
          width: 55px;
          height: 1px;
          background: var(--ak-gold);
        }

        .ak-about-craft-card h3 {
          position: relative;
          z-index: 2;
          margin-bottom: 18px;
          color: var(--ak-black);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 25px;
          font-weight: 400;
        }

        .ak-about-craft-card p {
          position: relative;
          z-index: 2;
          margin: 0;
          color: #707070;
          font-size: 13px;
          line-height: 1.9;
        }

        .ak-about-card-watermark {
          position: absolute;
          z-index: 0;
          right: 12px;
          bottom: -40px;
          color: rgba(210,170,86,0.09);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 150px;
          line-height: 1;
          pointer-events: none;
        }

        /* Closing Section */

        .ak-about-closing {
          position: relative;
          padding: 110px 20px;
          overflow: hidden;
          background: var(--ak-black);
          color: var(--ak-white);
          text-align: center;
        }

        .ak-about-closing-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.08;
          pointer-events: none;
          background-image:
            linear-gradient(45deg, transparent 48%, var(--ak-gold) 49%, transparent 50%),
            linear-gradient(-45deg, transparent 48%, var(--ak-gold) 49%, transparent 50%);
          background-size: 55px 55px;
        }

        .ak-about-closing .container {
          position: relative;
          z-index: 1;
        }

        .ak-about-closing h2 {
          margin: 20px 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(38px, 5vw, 60px);
          font-weight: 400;
          line-height: 1.2;
        }

        .ak-about-closing p {
          max-width: 560px;
          margin: 0 auto 35px;
          color: #b8b8b8;
          font-size: 14px;
          line-height: 1.9;
        }

        .ak-about-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 25px;
          min-height: 54px;
          padding: 0 27px;
          background: var(--ak-gold);
          border: 1px solid var(--ak-gold);
          color: var(--ak-black);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-decoration: none;
          transition: background 0.3s ease,
                      color 0.3s ease,
                      border-color 0.3s ease;
        }

        .ak-about-button span {
          font-size: 17px;
          transition: transform 0.3s ease;
        }

        .ak-about-button:hover {
          background: transparent;
          color: var(--ak-gold);
          border-color: var(--ak-gold);
        }

        .ak-about-button:hover span {
          transform: translate(3px, -3px);
        }

        /* Responsive */

        @media (max-width: 991px) {
          .ak-about-story {
            padding: 80px 0;
          }

          .ak-about-story-content {
            padding: 15px 0 0;
          }

          .ak-about-image {
            height: 490px;
          }

          .ak-about-craft,
          .ak-about-closing {
            padding: 85px 0;
          }
        }

        @media (max-width: 767px) {
          .ak-about-story {
            padding: 65px 0;
          }

          .ak-about-image-wrap {
            max-width: 500px;
          }

          .ak-about-image {
            height: 420px;
          }

          .ak-about-story-content h2 {
            font-size: 38px;
          }

          .ak-about-story-content p {
            font-size: 14px;
          }

          .ak-about-stats {
            padding: 70px 0;
          }

          .ak-about-stat {
            min-height: 160px;
            padding: 25px 12px;
          }

          .ak-about-stat-number {
            font-size: 40px;
          }

          .ak-about-stat-label {
            font-size: 9px;
            letter-spacing: 1.3px;
          }

          .ak-about-craft {
            padding: 75px 0;
          }

          .ak-about-craft-heading {
            margin-bottom: 40px;
          }

          .ak-about-craft-card {
            min-height: 260px;
          }

          .ak-about-closing {
            padding: 80px 15px;
          }
        }

        @media (max-width: 480px) {
          .ak-about-image {
            height: 350px;
          }

          .ak-about-image-caption {
            padding: 14px;
            font-size: 8px;
            letter-spacing: 1.2px;
          }

          .ak-about-story-content h2 {
            font-size: 33px;
          }

          .ak-about-craft-heading h2 {
            font-size: 35px;
          }

          .ak-about-craft-card {
            padding: 28px 24px;
          }

          .ak-about-closing h2 {
            font-size: 38px;
          }

          .ak-about-button {
            gap: 14px;
            padding: 0 18px;
            font-size: 10px;
          }
        }
      `}</style>
    </main>
  );
}

export default About;
