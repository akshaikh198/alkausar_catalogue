import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../assets/Images/Logo/Al_Kausar_Logo.png';

const styles = {
  footer: {
    padding: '5rem 0 2rem 0',
    background: 'linear-gradient(180deg, #F8FAFC 0%, #E2E8F0 100%)', // Subtle ground drop-off gradient
    overflow: 'hidden',
    borderTop: '1px solid rgba(255, 255, 255, 0.8)',
  },
  // The central floating glass footer widget panel
  glassPanel: {
    background: 'rgba(255, 255, 255, 0.45)',
    backdropFilter: 'blur(20px) saturate(140%)',
    border: '1px solid rgba(255, 255, 255, 0.6)',
    borderRadius: '32px',
    padding: '3.5rem 2.5rem 2rem 2.5rem',
    boxShadow: '0 10px 40px rgba(15, 23, 42, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
  },
  brandText: {
    color: '#475569',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    marginTop: '1rem',
  },
  columnTitle: {
    fontSize: '1.1rem',
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  footerLink: {
    display: 'block',
    color: '#475569',
    textDecoration: 'none',
    marginBottom: '0.75rem',
    fontWeight: '500',
    fontSize: '0.95rem',
    transition: 'all 0.2s ease',
    width: 'fit-content',
  },
  newsletterInput: {
    borderRadius: '20px',
    paddingLeft: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    border: '1px solid rgba(15, 23, 42, 0.08)',
    color: '#0F172A',
    boxShadow: 'none',
  },
  newsletterBtn: {
    borderRadius: '20px',
    padding: '0.4rem 1.4rem',
    fontWeight: '700',
    backgroundColor: '#0F172A',
    border: '1px solid #0F172A',
    color: '#ffffff',
    transition: 'all 0.2s ease',
  },
  copyrightRow: {
    borderTop: '1px solid rgba(15, 23, 42, 0.05)',
    marginTop: '3rem',
    paddingTop: '1.5rem',
    fontSize: '0.88rem',
    color: '#64748b',
  }
};

// Custom interactive link to handle micro-movements on hover
function FooterLink({ href, children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      style={{
        ...styles.footerLink,
        color: hovered ? '#0F172A' : '#475569',
        transform: hovered ? 'translateX(4px)' : 'translateX(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <Container>
        <div style={styles.glassPanel}>
          <Row className="gy-4">
            
            {/* Column 1: Brand Info */}
            <Col xs={12} lg={4}>
              <img src={logo} alt="Al Kausar Logo" width={60} height={60} />
              <p style={styles.brandText}>
                Al Kausar is dedicated to preserving traditional distillation processes, curating high-projection non-alcoholic Attars and exquisite signature perfumes.
              </p>
            </Col>

            {/* Column 2: Quick Links */}
            <Col xs={6} md={3} lg={2} className="offset-lg-1">
              <h5 style={styles.columnTitle}>Collections</h5>
              <FooterLink href="#attars">Attars</FooterLink>
              <FooterLink href="#perfumes">Perfumes</FooterLink>
              <FooterLink href="#bakhoor">Bakhoor</FooterLink>
              <FooterLink href="#new-additions">New Additions</FooterLink>
            </Col>

            {/* Column 3: The House Links */}
            <Col xs={6} md={3} lg={2}>
              <h5 style={styles.columnTitle}>Our House</h5>
              <FooterLink href="#about">Our Story</FooterLink>
              <FooterLink href="#heritage">Heritage</FooterLink>
              <FooterLink href="#process">Sourcing</FooterLink>
              <FooterLink href="#contact">Contact Us</FooterLink>
            </Col>

            {/* Column 4: Newsletter/Updates Sign Up */}
            <Col xs={12} md={6} lg={3}>
              <h5 style={styles.columnTitle}>Catalogue Updates</h5>
              <p className="text-muted small mb-3">
                Subscribe to receive early notifications on limited batches and artisanal extractions.
              </p>
              <Form className="d-flex gap-2">
                <Form.Control
                  type="email"
                  placeholder="Your email address"
                  style={styles.newsletterInput}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(15, 23, 42, 0.3)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(15, 23, 42, 0.08)'}
                />
                <Button 
                  style={styles.newsletterBtn}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#0F172A';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#0F172A';
                    e.target.style.color = '#ffffff';
                  }}
                >
                  Join
                </Button>
              </Form>
            </Col>

          </Row>

          {/* Bottom Copyright Area */}
          <Row style={styles.copyrightRow} className="align-items-center text-center text-md-start">
            <Col md={6}>
              &copy; {new Date().getFullYear()} Al Kausar Fragrances. All rights reserved.
            </Col>
            <Col md={6} className="text-md-end mt-2 mt-md-0">
              <span className="me-3" style={{ cursor: 'pointer' }}>Privacy Policy</span>
              <span style={{ cursor: 'pointer' }}>Terms of Curation</span>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
