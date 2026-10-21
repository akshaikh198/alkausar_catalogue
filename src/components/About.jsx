import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = {
  section: {
    padding: '8rem 0 6rem 0',
    background: 'radial-gradient(circle at top, #FCFBF9 0%, #F3F1EC 100%)', // Ivory Linen and Pearl base
    color: '#1E293B',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '100vh'
  },
  goldLine: {
    width: '80px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #C5A880, transparent)', // Soft metallic luxury gold
    margin: '1.5rem auto 4rem auto',
  },
  heading: {
    fontSize: '3.5rem',
    fontWeight: '900',
    color: '#0F172A',
    fontFamily: "'Cinzel', 'Playfair Display', serif",
    letterSpacing: '3px',
    textAlign: 'center',
    textShadow: '0 2px 4px rgba(15, 23, 42, 0.03)',
  },
  subtitle: {
    textAlign: 'center',
    color: '#64748B',
    fontStyle: 'italic',
    fontSize: '1.2rem',
    maxWidth: '700px',
    margin: '0 auto',
  },
  editorialHeader: {
    fontSize: '2.2rem',
    fontWeight: '800',
    fontFamily: "'Playfair Display', serif",
    color: '#0F172A',
    lineHeight: '1.3',
    marginBottom: '1.5rem',
  },
  goldText: {
    color: '#C5A880',
    fontFamily: "'Cinzel', serif",
    letterSpacing: '1.5px',
    fontWeight: '700'
  },
  bodyText: {
    color: '#475569',
    fontSize: '1.05rem',
    lineHeight: '1.8',
    marginBottom: '1.5rem'
  },
  imageWrapper: {
    position: 'relative',
    borderRadius: '32px',
    overflow: 'hidden',
    boxShadow: '0 25px 50px rgba(165, 155, 135, 0.2)', // Warm premium light shadow
    border: '1px solid rgba(197, 168, 128, 0.3)',
    height: '520px',
    backgroundColor: '#F3F1EC'
  },
  imageOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.25) 0%, transparent 60%)',
    zIndex: 2
  },
  pillarCard: {
    background: 'rgba(255, 255, 255, 0.65)',
    backdropFilter: 'blur(20px) saturate(120%)',
    border: '1px solid rgba(197, 168, 128, 0.25)', // Fine gold rim binding
    borderRadius: '24px',
    padding: '2.5rem 2rem',
    height: '100%',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    position: 'relative',
    overflow: 'hidden'
  },
  pillarNumber: {
    fontFamily: "'Cinzel', serif",
    fontSize: '3.5rem',
    fontWeight: '300',
    color: 'rgba(197, 168, 128, 0.15)', // Light gold number watermark
    position: 'absolute',
    top: '10px',
    right: '20px',
    lineHeight: '1'
  },
  statNumber: {
    fontSize: '3rem',
    fontWeight: '900',
    color: '#C5A880',
    fontFamily: "'Cinzel', serif",
    lineHeight: '1',
    marginBottom: '0.5rem'
  },
  statLabel: {
    fontSize: '0.8rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    color: '#64748B'
  }
};

const historicalTimeline = [
  {
    num: "I",
    title: "The Legacy Sourcing",
    desc: "We completely bypass massive raw material brokers. Our founders travel directly to old-growth forests in Pursat and high-altitude valleys in Taif to secure zero-compromise harvest logs."
  },
  {
    num: "II",
    title: "Artisanal Distillation",
    desc: "Using legacy copper hydro-distillation methods handed down through generations, our extracts cook over slow fires for weeks, capturing the deeply complex mineral notes of the botanical matter."
  },
  {
    num: "III",
    title: "Patient Cellar Aging",
    desc: "Like fine vintages, our absolute formulations age in temperature-shielded glass carboys. This allows sharp top profiles to mellow and combine into exceptionally dense, velvet sillage anchors."
  }
];

function About() {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  return (
    <div style={styles.section}>
      {/* Decorative soft glowing amber backdrops */}
      <div style={{
        position: 'absolute', top: '10%', left: '-10%', width: '500px', height: '500px',
        background: 'rgba(197, 168, 128, 0.05)', filter: 'blur(130px)', borderRadius: '50%', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '-10%', width: '400px', height: '400px',
        background: 'rgba(197, 168, 128, 0.06)', filter: 'blur(120px)', borderRadius: '50%', pointerEvents: 'none'
      }} />

      <Container>
        {/* Editorial Title Section */}
        <div className="mb-5">
          <h1 style={styles.heading}>The Heritage House</h1>
          <p style={styles.subtitle}>Uncompromising artisanal purity woven through generational Eastern perfume traditions</p>
          <div style={styles.goldLine} />
        </div>

        {/* Asymmetric Brand Narrative Block */}
        <Row className="g-5 align-items-center mb-5 pb-5">
          <Col xs={12} lg={6}>
            <span style={styles.goldText} className="text-uppercase small d-block mb-2">✦ Our Ethos</span>
            <h2 style={styles.editorialHeader}>We do not manufacture scents. We compound liquid architecture.</h2>
            <p style={styles.bodyText}>
              Established with an absolute refusal to accept synthetic chemical substitutes, the House of **Al Kausar** serves as a sanctuary for purists. We specialize in non-alcoholic pure oil Attars, dense spatial Bakhoor resins, and high-projection premium sprays designed to melt beautifully into your skin geometry.
            </p>
            <p style={styles.bodyText}>
              Every formulation logged within our atelier is blended entirely by hand. By keeping our small-batch production intimate, we preserve the organic nuances of rare agarwood oils and sun-matured florals that industrial machinery could never duplicate.
            </p>
            
            {/* Real-time brand matrix summary grids */}
            <Row className="g-4 mt-4">
              <Col xs={6} sm={4}>
                <div style={styles.statNumber}>100%</div>
                <div style={styles.statLabel}>Pure Absolute</div>
              </Col>
              <Col xs={6} sm={4}>
                <div style={styles.statNumber}>0%</div>
                <div style={styles.statLabel}>Alcohol Content</div>
              </Col>
              <Col xs={6} sm={4}>
                <div style={styles.statNumber}>24hr+</div>
                <div style={styles.statLabel}>Sillage Lifespan</div>
              </Col>
            </Row>
          </Col>

          <Col xs={12} lg={6}>
            <div style={styles.imageWrapper}>
              <div style={styles.imageOverlay} />
              <img 
                src="./src/assets/Images/Mix/mix1.jpeg" 
                alt="Al Kausar Distillation Atelier" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          </Col>
        </Row>

        {/* Generational Craftsmanship Matrix Steps */}
        <div className="pt-4">
          <div className="text-center mb-5">
            <span style={styles.goldText} className="text-uppercase small d-block mb-2">✦ The Alchemy Loop</span>
            <h3 style={{ ...styles.editorialHeader, textAlign: 'center' }}>The Journey Behind Every Droplet</h3>
          </div>

          <Row className="g-4">
            {historicalTimeline.map((step, idx) => {
              const isHovered = hoveredCardIndex === idx;
              return (
                <Col key={idx} xs={12} md={4}>
                  <div 
                    style={{
                      ...styles.pillarCard,
                      transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                      borderColor: isHovered ? 'rgba(197, 168, 128, 0.6)' : 'rgba(197, 168, 128, 0.25)',
                      backgroundColor: isHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.65)',
                      boxShadow: isHovered ? '0 20px 40px rgba(165, 155, 135, 0.15)' : '0 8px 24px rgba(0, 0, 0, 0.02)'
                    }}
                    onMouseEnter={() => setHoveredCardIndex(idx)}
                    onMouseLeave={() => setHoveredCardIndex(null)}
                  >
                    <span style={styles.pillarNumber}>{step.num}</span>
                    <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: '700', color: '#0F172A', marginBottom: '1rem', fontSize: '1.3rem' }}>
                      {step.title}
                    </h4>
                    <p style={{ ...styles.bodyText, fontSize: '0.92rem', margin: 0, lineHeight: '1.7' }}>
                      {step.desc}
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default About;
