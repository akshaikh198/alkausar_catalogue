
import React from "react";
import { useNavigate } from "react-router-dom";

import muskImage from "../assets/Images/Mix/musk_al_jawara2.png";
import sixMlImage from "../assets/Images/Edited/bottlebox/6ml/Ameage 6ml Bottle & Box.png";

const FeaturedSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "♢",
      title: "Synthetic Perfumery Compounds",
      description:
        "Premium, undiluted concentrations engineered meticulously for unmatched sillage and structural depth.",
    },
    {
      icon: "◷",
      title: "24+ Hour Projection",
      description:
        "Expertly formulated to radiate and evolve beautifully on your skin throughout the day.",
    },
  ];

  const gold = 'rgb(210, 170, 86)';
const dark = 'rgb(0, 0, 0)';
const ivory = 'rgb(255, 255, 255)';

  const collections = [
    {
      id: "100gm",
      title: "100gm",
      subtitle: "Luxury signature high-projection variants",
      image: muskImage,
      alt: "Luxury 100gm perfume collection",
    },
    {
      id: "6ml",
      title: "6ML",
      subtitle: "Pure non-alcoholic perfume oils",
      image: sixMlImage,
      alt: "Luxury 6ML perfume oil bottle and box",
    },
  ];

  return (
    <section className="ak-featured-section">
      <div className="ak-featured-container">

        {/* BRAND PROMISE */}
        <div className="ak-promise-section">

          <div className="ak-promise-label">
            <span className="ak-label-line" />
            <span>OUR PROMISE</span>
            <span className="ak-label-line" />
          </div>

          <div className="ak-features-grid">
            {features.map((feature, index) => (
              <div className="ak-feature-card" key={index}>
                <div className="ak-feature-icon">
                  {feature.icon}
                </div>

                <div className="ak-feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* CATEGORY HEADING */}
        <div className="ak-category-heading">
          <h2>
            Shop By <span>Category</span>
          </h2>

          <div className="ak-heading-decoration">
            <span />
            <i>✧</i>
            <span />
          </div>
        </div>

        {/* COLLECTIONS */}
        <div className="ak-collections-grid">
          {collections.map((collection) => (
            <article
              className="ak-collection-card"
              key={collection.id}
              onClick={() =>
                navigate(`/collection/${collection.id}`)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate(`/collection/${collection.id}`);
                }
              }}
              role="link"
              tabIndex={0}
              aria-label={`Shop ${collection.title} collection`}
            >
              <div className="ak-collection-image">
                <img
                  src={collection.image}
                  alt={collection.alt}
                  loading="lazy"
                />
              </div>

              <div className="ak-collection-info">
                <h3>{collection.title}</h3>

                <p>{collection.subtitle}</p>

                <button
                  type="button"
                  className="ak-shop-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/collection/${collection.id}`);
                  }}
                  aria-label={`Shop ${collection.title}`}
                >
                  Shop Now
                  <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedSection;
