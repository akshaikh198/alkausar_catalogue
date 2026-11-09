
import React from 'react';
import { Container } from 'react-bootstrap';

const ClosingSection = () => {
  return (
    <>
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
    </>
  );
};

export default ClosingSection;
