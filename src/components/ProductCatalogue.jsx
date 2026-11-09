
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import { STATIC_PRODUCTS } from "../data/products";

// ==========================================
// PRODUCT CARD
// ==========================================

const ProductCard = ({ product, navigate }) => {
  const collectionPath = `/collection/${product.type.toLowerCase()}`;

  const handleNavigate = () => {
    navigate(collectionPath);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNavigate();
    }
  };

  return (
    <Card
      className="ak-product-card"
      onClick={handleNavigate}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label={`Explore ${product.title}`}
    >
      {/* PRODUCT TYPE BADGE */}
      <span className="ak-product-badge">
        {product.type}
      </span>

      {/* PRODUCT IMAGE */}
      <div className="ak-product-image-wrapper">
        <img
          src={product.designerBgImageUrl}
          alt={product.title || "Luxury perfume"}
          className="ak-product-image"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextElementSibling.hidden = false;
          }}
        />

        {/* FALLBACK IMAGE */}
        <div
          className="ak-product-image-fallback"
          hidden
        >
          <span>✧</span>
          <p>ALMAS PERFUMES</p>
        </div>

        <div className="ak-product-image-overlay" />
      </div>

      {/* PRODUCT INFORMATION */}
      <Card.Body className="ak-product-card-body">

        <span className="ak-product-category">
          EXCLUSIVE FRAGRANCE
        </span>

        <Card.Title className="ak-product-title">
          {product.title}
        </Card.Title>

        <div className="ak-product-performance">
          <span className="ak-performance-icon">◷</span>
          <span>Performance:</span>
          <strong>
            {product.longevity || "24+ Hours"}
          </strong>
        </div>

        <button
          type="button"
          className="ak-product-button"
          onClick={(e) => {
            e.stopPropagation();
            handleNavigate();
          }}
        >
          Examine Collection
          <span>→</span>
        </button>

      </Card.Body>
    </Card>
  );
};

// ==========================================
// PRODUCT SLIDER ROW
// ==========================================

const ProductSliderRow = ({
  products,
  rowTitle,
  rowSubtitle,
  rowNumber,
  navigate,
}) => {
  const trackRef = useRef(null);

  if (!products.length) return null;

  const handleScroll = (direction) => {
    if (!trackRef.current) return;

    const amount = trackRef.current.clientWidth * 0.8;

    trackRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="ak-catalogue-row">

      {/* SLIDER HEADER */}
      <div className="ak-slider-header">

        <div className="ak-slider-heading">
          {/* <span className="ak-row-number">
            {rowNumber}
          </span> */}

          <div>
            <h3>{rowTitle}</h3>
            <p>{rowSubtitle}</p>
          </div>
        </div>

        {/* DESKTOP SLIDER CONTROLS */}
        <div className="ak-slider-controls">
          <button
            type="button"
            className="ak-slider-arrow"
            onClick={() => handleScroll("left")}
            aria-label={`Scroll ${rowTitle} left`}
          >
            ‹
          </button>

          <button
            type="button"
            className="ak-slider-arrow"
            onClick={() => handleScroll("right")}
            aria-label={`Scroll ${rowTitle} right`}
          >
            ›
          </button>
        </div>

      </div>

      {/* PRODUCT TRACK */}
      <div
        ref={trackRef}
        className="ak-product-slider"
        aria-label={rowTitle}
      >
        {products.map((product, index) => (
          <ProductCard
            key={product._id || `${rowNumber}-${index}`}
            product={product}
            navigate={navigate}
          />
        ))}
      </div>

      {/* MOBILE SLIDER CONTROLS */}
      <div className="ak-mobile-slider-controls">
        <button
          type="button"
          className="ak-slider-arrow"
          onClick={() => handleScroll("left")}
          aria-label="Previous products"
        >
          ‹
        </button>

        <span>EXPLORE MORE</span>

        <button
          type="button"
          className="ak-slider-arrow"
          onClick={() => handleScroll("right")}
          aria-label="Next products"
        >
          ›
        </button>
      </div>

    </div>
  );
};

// ==========================================
// MAIN PRODUCT CATALOGUE
// ==========================================

function ProductCatalogue() {
  const navigate = useNavigate();

  if (!STATIC_PRODUCTS || STATIC_PRODUCTS.length === 0) {
    return null;
  }

  // Separate product collections
  const products100gm = STATIC_PRODUCTS.filter(
    (product) =>
      product.type?.toUpperCase() === "100GM"
  );

  const products6ml = STATIC_PRODUCTS.filter(
    (product) =>
      product.type?.toUpperCase() === "6ML"
  );

  return (
    <section className="ak-catalogue-section">

      <Container fluid className="ak-catalogue-container">

        {/* SECTION INTRO */}
        <div className="ak-catalogue-intro">

          <div className="ak-catalogue-label">
            <span />
            THE WORLD OF FINE FRAGRANCES
            <span />
          </div>

          <h2>
            Our Product <span>Catalogue.</span>
          </h2>

          <p>
            Discover rare fragrance masterpieces, combining
            traditional Eastern heritage with exceptional
            fragrance craftsmanship.
          </p>

          <div className="ak-catalogue-decoration">
            <span />
            <i>✧</i>
            <span />
          </div>

        </div>

        {/* 100GM COLLECTION */}
        <ProductSliderRow
          products={products100gm}
          rowNumber="01"
          rowTitle="100GM Luxury Standards"
          rowSubtitle="Premium signature volumes crafted for bold fragrance experiences."
          navigate={navigate}
        />

        {/* 6ML COLLECTION */}
        <ProductSliderRow
          products={products6ml}
          rowNumber="02"
          rowTitle="6ML Concentrated Masterpieces"
          rowSubtitle="Concentrated perfume oils, elegantly crafted for fragrance lovers on the go."
          navigate={navigate}
        />

        {/* EMPTY COLLECTION MESSAGE */}
        {products100gm.length === 0 &&
          products6ml.length === 0 && (
            <div className="ak-catalogue-empty">
              <span>✧</span>
              <p>Our collections are being prepared.</p>
            </div>
          )}

      </Container>

    </section>
  );
}

export default ProductCatalogue;
