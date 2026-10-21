import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const styles = {
  section: {
    padding: '8rem 0',
    background: 'radial-gradient(circle at top, #1E293B 0%, #0F172A 100%)', // Deep midnight royal canvas
    position: 'relative',
    overflow: 'hidden',
  },
  goldAccentLine: {
    width: '80px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)', // Pure Royal Gold
    margin: '1.5rem auto 3.5rem auto',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: '900',
    color: '#F8FAFC',
    fontFamily: "'Cinzel', 'Playfair Display', serif",
    letterSpacing: '2px',
    textAlign: 'center',
    textShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  subtitle: {
    textAlign: 'center',
    color: '#94A3B8',
    fontStyle: 'italic',
    fontSize: '1.1rem',
    maxWidth: '600px',
    margin: '0 auto',
  },
  // ⚡️ HORIZONTAL SCROLL SLIDER PIPELINE TRACK
  sliderTrack: {
    display: 'flex',
    gap: '2rem',
    overflowX: 'auto',
    padding: '2rem 1rem 3rem 1rem',
    scrollSnapType: 'x mandatory',
    scrollbarWidth: 'none', // Hides default ugly scrollbars for Firefox
    msOverflowStyle: 'none', // Hides scrollbars for IE/Edge
    cursor: 'grab',
    WebkitOverflowScrolling: 'touch', // Fluid momentum rendering for mobile touch
  },
  sliderControlZone: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginTop: '1.5rem',
  },
  navCircleBtn: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'rgba(30, 41, 59, 0.6)',
    border: '1px solid rgba(212, 175, 55, 0.3)',
    color: '#D4AF37',
    fontSize: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  },
  royalCard: {
    flex: '0 0 350px', // Prevents cards from crushing or resizing horizontally
    scrollSnapAlign: 'center',
    background: 'rgba(30, 41, 59, 0.4)',
    backdropFilter: 'blur(20px) saturate(160%)',
    border: '1px solid rgba(212, 175, 55, 0.15)', // Fine gold rim binding
    borderRadius: '28px',
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  imageContainer: {
    height: '420px',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#0F172A',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.95) 100%)',
    zIndex: 2,
    transition: 'opacity 0.4s ease',
  },
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 1,
    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  tagBadge: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    background: 'rgba(212, 175, 55, 0.9)', 
    color: '#0F172A',
    fontWeight: '800',
    fontSize: '0.75rem',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    padding: '0.4rem 1rem',
    borderRadius: '30px',
    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.25)',
    zIndex: 3,
  },
  cardBody: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '2.5rem 1.75rem 1.75rem 1.75rem',
    zIndex: 3,
    transform: 'translateY(15px)',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  productTitle: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: "'Playfair Display', serif",
    marginBottom: '0.5rem',
    letterSpacing: '0.5px',
  },
  longevityMeta: {
    fontSize: '0.8rem',
    color: '#D4AF37', 
    fontWeight: '600',
    letterSpacing: '1px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '1rem',
    opacity: 0.8,
  },
  royalBtn: {
    width: '100%',
    background: '#D4AF37',
    border: 'none',
    color: '#0F172A',
    borderRadius: '14px',
    padding: '0.7rem',
    fontSize: '0.85rem',
    fontWeight: '800',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    opacity: 0,
    transform: 'translateY(15px)',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  }
};

function ProductCatalogue() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => {
        if (!res.ok) throw new Error("Network response mismatch");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setAllProducts(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Exhibition layout slide block failure:", err);
        setLoading(false);
      });
  }, []);

  // Programmatic smooth scroll handler routines for desktop arrows
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (loading) return (
    <div style={styles.section} className="text-center py-5">
      <div className="spinner-border text-warning" role="status"></div>
      <p className="mt-3 text-muted small tracking-widest">UNCORKING CURATED EXTREME FORMULATIONS...</p>
    </div>
  );
  
  if (allProducts.length === 0) return null;

  return (
    <div style={styles.section}>
      {/* Decorative ambient glowing backdrops */}
      <div style={{
        position: 'absolute', top: '-10%', left: '70%', width: '400px', height: '400px',
        background: 'rgba(212, 175, 55, 0.03)', filter: 'blur(120px)', borderRadius: '50%'
      }} />

      <Container>
        <h2 style={styles.heading}>The Royal Exhibition</h2>
        <p style={styles.subtitle}>Discover rare masterpieces compounding traditional Eastern heritage with modern high-projection sillage</p>
        <div style={styles.goldAccentLine} />
      </Container>

      {/* Full-width dynamic sliding channel track */}
      <div className="px-md-5">
        <div 
          ref={scrollRef} 
          style={styles.sliderTrack} 
          className="hide-scrollbar-css"
        >
          {allProducts.map((product, index) => {
            const isHovered = hoveredCardId === product._id;
            return (
              <Card
                key={product._id || `exhibit-slide-${index}`}
                style={{
                  ...styles.royalCard,
                  transform: isHovered ? 'translateY(-12px)' : 'translateY(0)',
                  borderColor: isHovered ? 'rgba(212, 175, 55, 0.5)' : 'rgba(212, 175, 55, 0.15)',
                  boxShadow: isHovered ? '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(212, 175, 55, 0.05)' : '0 10px 30px rgba(0,0,0,0.15)',
                }}
                onMouseEnter={() => setHoveredCardId(product._id)}
                onMouseLeave={() => setHoveredCardId(null)}
                onClick={() => navigate(`/collection/${product.type}`)}
              >
                <span style={styles.tagBadge}>{product.type}</span>
                
                <div style={styles.imageContainer}>
                  <div style={{
                    ...styles.imageOverlay,
                    background: isHovered 
                      ? 'linear-gradient(180deg, transparent 15%, rgba(15, 23, 42, 0.98) 100%)' 
                      : 'linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.95) 100%)'
                  }} />
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    style={{
                      ...styles.productImage,
                      transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                    }}
                  />
                </div>

                <Card.Body style={{
                  ...styles.cardBody,
                  transform: isHovered ? 'translateY(-15px)' : 'translateY(15px)'
                }}>
                  <h4 style={styles.productTitle}>{product.title}</h4>
                  
                  <div style={styles.longevityMeta}>
                    <span>⏱️ Premium Projection:</span>
                    <strong>{product.longevity || '24+ Hours'}</strong>
                  </div>

                  <button 
                    style={{
                      ...styles.royalBtn,
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'translateY(0)' : 'translateY(15px)',
                    }}
                  >
                    Examine Formulation
                  </button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Control Navigation Arrows Row */}
      <div style={styles.sliderControlZone}>
        <button 
          onClick={() => handleScroll('left')} 
          style={styles.navCircleBtn}
          onMouseEnter={(e) => { e.target.style.background = '#D4AF37'; e.target.style.color = '#0F172A'; }}
          onMouseLeave={(e) => { e.target.style.background = 'rgba(30, 41, 59, 0.6)'; e.target.style.color = '#D4AF37'; }}
        >
          ‹
        </button>
        <button 
          onClick={() => handleScroll('right')} 
          style={styles.navCircleBtn}
          onMouseEnter={(e) => { e.target.style.background = '#D4AF37'; e.target.style.color = '#0F172A'; }}
          onMouseLeave={(e) => { e.target.style.background = 'rgba(30, 41, 59, 0.6)'; e.target.style.color = '#D4AF37'; }}
        >
          ›
        </button>
      </div>

      {/* Injects dynamic CSS overrides onto the DOM tree to strip scroll bar tracks cleanly */}
      <style>{`
        .hide-scrollbar-css::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar-css {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default ProductCatalogue;
