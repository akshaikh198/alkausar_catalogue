import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../assets/Images/Banner/w1.png';
import banner2 from '../assets/Images/Banner/w2.png';
import banner3 from '../assets/Images/Banner/w3.png';

const styles = {
  carousel: {
    height: '85vh',
    overflow: 'hidden',
  },
  itemContainer: {
    height: '85vh',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '85vh',
    objectFit: 'cover',
  },
  // Creates a dark overlay mask so text pops regardless of image background brightness
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
  },
  caption: {
    bottom: '25%',
    textAlign: 'center',
    zIndex: 2,
    maxWidth: '700px',
    margin: '0 auto',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '800',
    letterSpacing: '1px',
    color: '#ffffff',
    textShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.25rem',
    color: '#f1f5f9',
    textShadow: '0 2px 6px rgba(0, 0, 0, 0.4)',
    marginBottom: '2rem',
    fontWeight: '300',
  },
  ctaButton: {
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
    color: '#ffffff',
    border: 'none',
    padding: '0.8rem 2.2rem',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '30px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  }
};

function Header() {
  // Array format to keep code DRY and maintainable
  const slides = [
    {
      image: banner1,
      alt: "Luxury Attars Collection",
      title: "Exquisite Royal Attars",
      desc: "Discover timeless, premium oil concentrations crafted to match your distinct persona.",
      link: "#attars"
    },
    {
      image: banner2,
      alt: "Luxury Perfumes",
      title: "Signature Perfumes",
      desc: "Immerse yourself in complex, beautifully balanced modern long-lasting sprays.",
      link: "#perfumes"
    },
    {
      image: banner3,
      alt: "Bakhoor & Incense",
      title: "Aromatic Bakhoor",
      desc: "Transform your spaces with rich, tranquil Middle Eastern home fragrance blends.",
      link: "#bakhoor"
    }
  ];

  return (
    <Carousel 
      data-bs-theme="light" // Switched to light for white control indicators against dark overlay
      style={styles.carousel} 
      fade // Smooth crossfade transition between slides instead of hard slides
      interval={5000} // Autoplay speed set to a comfortable 5 seconds
    >
      {slides.map((slide, index) => (
        <Carousel.Item key={index} style={styles.itemContainer}>
          <img
            className="d-block"
            style={styles.image}
            src={slide.image}
            alt={slide.alt}
          />
          {/* Tinted background layer */}
          <div style={styles.overlay} />
          
          <Carousel.Caption style={styles.caption} className="animate-fade-in">
            <h2 style={styles.title}>{slide.title}</h2>
            <p style={styles.description}>{slide.desc}</p>
            <button 
              style={styles.ctaButton}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.4)';
              }}
              onClick={() => window.location.href = slide.link}
            >
              Explore Collection
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Header;
