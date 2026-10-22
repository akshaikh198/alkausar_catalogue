import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = {
  section: {
    padding: '7rem 0',
    background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)', // Elegant midnight backdrop
    position: 'relative',
    overflow: 'hidden',
    borderTop: '1px solid rgba(212, 175, 55, 0.15)'
  },
  goldLine: {
    width: '60px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
    margin: '1rem auto 3.5rem auto',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '900',
    color: '#F8FAFC',
    fontFamily: "'Cinzel', 'Playfair Display', serif",
    textAlign: 'center',
    letterSpacing: '1px'
  },
  glassCard: {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(20px) saturate(140%)',
    border: '1px solid rgba(212, 175, 55, 0.15)',
    borderRadius: '28px',
    padding: '2.5rem',
    position: 'relative',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  quoteIcon: {
    fontFamily: 'serif',
    fontSize: '4rem',
    color: 'rgba(212, 175, 55, 0.15)',
    position: 'absolute',
    top: '10px',
    left: '20px',
    lineHeight: '1'
  },
  reviewText: {
    color: '#E2E8F0',
    fontSize: '0.95rem',
    lineHeight: '1.7',
    fontStyle: 'italic',
    marginBottom: '1.5rem',
    position: 'relative',
    zIndex: 2
  },
  clientName: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: '1rem',
    fontFamily: "'Playfair Display', serif",
    letterSpacing: '0.5px'
  },
  clientTitle: {
    color: '#D4AF37',
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    display: 'block',
    marginTop: '0.25rem'
  },
  starRating: {
    color: '#D4AF37',
    fontSize: '0.85rem',
    marginBottom: '1rem'
  }
};

const internalReviews = [
  {
    text: "The Cambodian Oud absolute is a sensory masterpiece. It uncoils beautifully across hours, evolving from sharp sweet wood notes into a velvety rich mineral anchor that projects majestically.",
    name: "Emir Al-Rahman",
    title: "Private Connoisseur & Collector",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    text: "Swapping my mainstream signature fragrances for the House of Al Kausar's traditional non-alcoholic Attars was a revelation. The projection on skin handles extreme weather with flawless ease.",
    name: "Lady Vivienne Stirling",
    title: "Luxury Lifestyle Atelier Director",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    text: "Their Home Bakhoor fumigation chips transform spatial geometry entirely. It leaves behind an incredibly dense, peaceful amber trace that lingeringly perfumes fabrics for multiple days.",
    name: "Haris Vardhan",
    title: "Boutique Hospitality Architect",
    stars: "⭐⭐⭐⭐⭐"
  }
];



function Testimonials() {
  const [reviews, setReviews] = useState(internalReviews);

  // Optional Hook: Fetches testimonials from backend if you decide to add a collection later
  
  return (
    <div style={styles.section}>
      <Container>
        <h2 style={styles.heading}>Patron Endorsements</h2>
        <div style={styles.goldLine} />
        
        <Row className="g-4">
          {reviews.map((review, i) => (
            <Col key={i} xs={12} md={4}>
              <div 
                style={styles.glassCard}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.15)'}
              >
                <span style={styles.quoteIcon}>“</span>
                <p style={styles.reviewText}>{review.text || review.description}</p>
                <div>
                  <div style={styles.starRating}>{review.stars || "⭐⭐⭐⭐⭐"}</div>
                  <h5 style={styles.clientName}>{review.name || review.title}</h5>
                  <span style={styles.clientTitle}>{review.title || review.subtitle}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Testimonials;
