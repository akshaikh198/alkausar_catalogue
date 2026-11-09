
import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function CTASection() {
  return (
    <section className="ak-cta-section">

      {/* Decorative background */}
      <div className="ak-cta-orbit ak-cta-orbit-one" />
      <div className="ak-cta-orbit ak-cta-orbit-two" />

      <Container className="ak-cta-container">

        <div className="ak-cta-card">

          {/* Decorative side element */}
          <div className="ak-cta-decoration">
            <div className="ak-cta-decoration-inner">
              <span>✧</span>
              <div className="ak-cta-decoration-line" />
              <span>AL KAUSAR</span>
              <span className="ak-cta-decoration-small">
                THE ART OF FINE FRAGRANCE
              </span>
              <div className="ak-cta-decoration-line" />
              <span>✧</span>
            </div>
          </div>

          {/* Main content */}
          <div className="ak-cta-content">

            <div className="ak-cta-label">
              <span />
              YOUR SIGNATURE AWAITS
              <span />
            </div>

            <h2>
              Discover a Fragrance
              <br />
              That Defines <span>You.</span>
            </h2>

            <p className="ak-cta-description">
              Step into the world of Al Kausar Perfumes.
              Explore exceptional fragrance compositions,
              timeless elegance and captivating aromas
              crafted to leave a lasting impression.
            </p>

            {/* CTA BUTTONS */}
            <div className="ak-cta-actions">

              <Link
                to="/collection/100gm"
                className="ak-cta-primary-btn"
              >
                Explore Collections
                <span>→</span>
              </Link>

              <Link
                to="/contact"
                className="ak-cta-secondary-btn"
              >
                Contact Us
                <span>↗</span>
              </Link>

            </div>

            {/* Bottom signature */}
            <div className="ak-cta-signature">
              <span>✧</span>
              ELEGANCE IN EVERY DROP
              <span>✧</span>
            </div>

          </div>

        </div>

      </Container>


    </section>
  );
}

export default CTASection;
