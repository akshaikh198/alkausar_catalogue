import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// Dummy or real placeholder paths for collection thumbnails
import attarImg from '../assets/Images/Mix/attar.jpg'; 
import perfumeImg from '../assets/Images/Mix/perfume.jpg';
import bakhoorImg from '../assets/Images/Mix/bakhoor.jpg';

const styles = {
  section: {
    padding: '5rem 0',
    backgroundColor: '#fafafa',
  },
  trustBar: {
    backgroundColor: '#ffffff',
    padding: '2.5rem 1.5rem',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
    marginBottom: '5rem',
  },
  trustIcon: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
    display: 'block'
  },
  trustTitle: {
    fontWeight: '700',
    fontSize: '1.1rem',
    color: '#1e293b',
    margin: 0
  },
  trustDesc: {
    fontSize: '0.9rem',
    color: '#64748b',
    marginTop: '0.25rem'
  },
  sectionHeading: {
    fontSize: '2.5rem',
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: '3rem',
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  collectionCard: {
    border: 'none',
    borderRadius: '16px',
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardImage: {
    height: '350px',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  cardOverlay: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '2rem',
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: '1.75rem',
    fontWeight: '700',
    margin: 0,
  },
  cardSubtitle: {
    color: '#cbd5e1',
    fontSize: '0.95rem',
    marginTop: '0.5rem',
  }
};

// Reusable card wrapper component to handle individual mouse-hover zoom interactions
function HoverCard({ image, title, subtitle, link }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Card 
      style={{
        ...styles.collectionCard,
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 30px rgba(139, 92, 246, 0.2)' : '0 4px 20px rgba(0,0,0,0.05)'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.location.href = link}
    >
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <Card.Img 
          variant="top" 
          src={image} 
          style={{
            ...styles.cardImage,
            transform: hovered ? 'scale(1.06)' : 'scale(1)'
          }} 
        />
        <Card.ImgOverlay style={styles.cardOverlay}>
          <Card.Title style={styles.cardTitle}>{title}</Card.Title>
          <Card.Text style={styles.cardSubtitle}>{subtitle}</Card.Text>
        </Card.ImgOverlay>
      </div>
    </Card>
  );
}

function FeaturedSection() {
  return (
    <section style={styles.section}>
      <Container>
        
        {/* 1. BRAND TRUST / VALUE PROPOSITION BAR */}
        <div style={styles.trustBar}>
          <Row className="text-center gy-4">
            <Col xs={12} md={4}>
              <span style={styles.trustIcon}>💎</span>
              <h5 style={styles.trustTitle}>100% Pure Oils</h5>
              <p style={styles.trustDesc}>Premium, undiluted concentration for lasting depth.</p>
            </Col>
            <Col xs={12} md={4} className="border-start-md border-end-md">
              <span style={styles.trustIcon}>⏳</span>
              <h5 style={styles.trustTitle}>24+ Hour Projection</h5>
              <p style={styles.trustDesc}>Expertly formulated to radiate beautifully all day.</p>
            </Col>
            <Col xs={12} md={4}>
              <span style={styles.trustIcon}>📦</span>
              <h5 style={styles.trustTitle}>Free Premium Delivery</h5>
              <p style={styles.trustDesc}>Secure, elegant packaging shipped straight to you.</p>
            </Col>
          </Row>
        </div>

        {/* 2. FEATURED COLLECTIONS GRID */}
        <h2 style={styles.sectionHeading}>Shop By Category</h2>
        <Row className="g-4">
          <Col xs={12} md={4}>
            <HoverCard 
              image={attarImg} 
              title="Attars" 
              subtitle="Pure non-alcoholic concentrated oils" 
              link="#attars"
            />
          </Col>
          <Col xs={12} md={4}>
            <HoverCard 
              image={perfumeImg} 
              title="Perfumes" 
              subtitle="Luxury signature spray variants" 
              link="#perfumes"
            />
          </Col>
          <Col xs={12} md={4}>
            <HoverCard 
              image={bakhoorImg} 
              title="Bakhoor" 
              subtitle="Rich home incense chips & blends" 
              link="#bakhoor"
            />
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default FeaturedSection;
