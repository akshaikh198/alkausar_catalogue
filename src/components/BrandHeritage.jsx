import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import asset1 from '../assets/Images/Mix/bg1.jpg';
import asset2 from '../assets/Images/Mix/bg2.jpg';
import asset3 from '../assets/Images/Mix/bg3.jpg';

const styles = {
  section: {
    padding: '7rem 0',
    background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)', // Unified layout multi-tone gradient
    color: '#0F172A',
    overflow: 'hidden'
  },
  sectionHeading: {
    fontSize: '2.8rem',
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: '0.5rem',
    color: '#0F172A',
  },
  sectionSubtitle: {
    textAlign: 'center',
    color: '#64748b',
    fontSize: '1.1rem',
    marginBottom: '4.5rem',
  },
  // Main 3D Outer Crystal Frame
  accordionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: '480px',
    width: '100%',
    gap: '1.2rem',
    background: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(20px) saturate(140%)',
    border: '1px solid rgba(255, 255, 255, 0.6)',
    borderRadius: '32px',
    padding: '16px', // Frame layout spacing creates crystal depth
    boxShadow: '0 10px 40px rgba(15, 23, 42, 0.02), 0 30px 70px rgba(15, 23, 42, 0.04)',
  },
  // Individual Accordion Panel Slices
  panel: (isActive) => ({
    flex: isActive ? '4' : '1',
    position: 'relative',
    height: '100%',
    cursor: 'pointer',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    boxShadow: isActive ? '0 15px 35px rgba(15, 23, 42, 0.06)' : '0 4px 15px rgba(15, 23, 42, 0.01)',
    transition: 'flex 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s ease, box-shadow 0.4s ease',
  }),
  panelBg: (image) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  }),
  // Frosted White Glass plate covering the image
  overlay: (isActive) => ({
    position: 'absolute',
    inset: 0,
    background: isActive 
      ? 'linear-gradient(to top, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.16) 60%, rgba(255, 255, 255, 0) 100%)'
      : 'rgba(116, 116, 116, 0.54)', // Elegant clean tint block layer for non-active slices
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '2.5rem',
    transition: 'background 0.4s ease',
  }),
  numberBadge: {
    fontSize: '1.4rem',
    fontWeight: '800',
    color: '#475569',
    opacity: 0.7,
    marginBottom: '0.25rem',
    letterSpacing: '1px'
  },
  storyTitle: {
    fontSize: '1.8rem',
    fontWeight: '900',
    color: '#0F172A',
    margin: 0,
    letterSpacing: '-0.3px',
  },
  storyText: (isActive) => ({
    fontSize: '0.98rem',
    color: '#475569',
    lineHeight: '1.6',
    marginTop: '1rem',
    maxWidth: '580px',
    opacity: isActive ? 1 : 0,
    maxHeight: isActive ? '150px' : '0px',
    overflow: 'hidden',
    transition: 'opacity 0.4s ease 0.2s, maxHeight 0.4s ease 0.1s', // Coordinates display block timing smoothly
  }),
};

function BrandHeritage() {
  const [activePanel, setActivePanel] = useState(0);

  const stories = [
    {
      id: 0,
      image: asset1,
      num: "01",
      title: "The Genesis",
      desc: "Al Kausar was born out of a profound passion for authentic Oriental perfumery, aiming to preserve traditional distillation processes while exploring complex notes.",
    },
    {
      id: 1,
      image: asset2,
      num: "02",
      title: "Purity Sourcing",
      desc: "We established direct ties with global estates—sourcing sustainable Cambodian Oud, select Taif Rose, and premium warm amber resins directly from their native soil.",
    },
    {
      id: 2,
      image: asset3,
      num: "03",
      title: "The Renaissance",
      desc: "Fusing time-honoured non-alcoholic Attar practices with contemporary European spray formulations to launch versatile, high-projection signature profiles.",
    },
  ];

  return (
    <section style={styles.section}>
      <Container>
        <h2 style={styles.sectionHeading}>Our Heritage</h2>
        <p style={styles.sectionSubtitle}>Interact with the panels below to discover the journey behind our house creations</p>

        {/* Desktop and Tablet layout */}
        <div style={styles.accordionWrapper} className="d-none d-md-flex">
          {stories.map((story) => {
            const isActive = activePanel === story.id;
            return (
              <div
                key={story.id}
                style={styles.panel(isActive)}
                onClick={() => setActivePanel(story.id)}
              >
                <div style={{
                  ...styles.panelBg(story.image),
                  transform: isActive ? 'scale(1.04)' : 'scale(1)'
                }} />
                
                <div style={styles.overlay(isActive)}>
                 {/*  <div style={styles.numberBadge}>{story.num}</div> */}
                  <h3 style={styles.storyTitle}>{story.title}</h3>
                  <p style={styles.storyText(isActive)}>{story.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fallback layout for mobile devices */}
        <div className="d-block d-md-none">
          <Row className="g-4">
            {stories.map((story) => (
              <Col xs={12} key={story.id}>
                <div style={{ ...styles.panel(true), height: '320px', borderRadius: '24px' }}>
                  <div style={styles.panelBg(story.image)} />
                  <div style={styles.overlay(true)}>
                    <div style={styles.numberBadge}>{story.num}</div>
                    <h3 style={styles.storyTitle}>{story.title}</h3>
                    <p style={{ ...styles.storyText(true), opacity: 1, maxHeight: 'none' }}>{story.desc}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

      </Container>
    </section>
  );
}

export default BrandHeritage;
