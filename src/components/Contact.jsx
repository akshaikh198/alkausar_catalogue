import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const styles = {
  pageWrapper: {
    padding: '6rem 0',
    background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
    color: '#0F172A',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  glassCard: {
    background: 'rgba(255, 255, 255, 0.45)',
    backdropFilter: 'blur(20px) saturate(140%)',
    border: '1px solid rgba(255, 255, 255, 0.6)',
    borderRadius: '32px',
    padding: '3.5rem 2.5rem',
    boxShadow: '0 10px 40px rgba(15, 23, 42, 0.02), 0 30px 60px rgba(15, 23, 42, 0.03)',
    width: '100%',
    maxWidth: '960px',
    margin: '0 auto',
  },
  mainHeading: {
    fontSize: '2.5rem',
    fontWeight: '900',
    color: '#0F172A',
    letterSpacing: '-0.5px',
    marginBottom: '1rem',
  },
  subText: {
    color: '#475569',
    fontSize: '1.05rem',
    lineHeight: '1.6',
    marginBottom: '3rem',
  },
  infoSection: {
    paddingRight: '1.5rem',
  },
  infoBlock: {
    marginBottom: '2rem',
  },
  infoTitle: {
    fontSize: '0.85rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#64748B',
    marginBottom: '0.5rem',
  },
  infoDetail: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#0F172A',
    margin: 0,
  },
  inputField: {
    borderRadius: '16px',
    padding: '0.8rem 1.2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    border: '1px solid rgba(15, 23, 42, 0.08)',
    color: '#0F172A',
    fontWeight: '500',
    boxShadow: 'none',
    transition: 'all 0.3s ease',
  },
  submitBtn: {
    width: '100%',
    padding: '0.9rem',
    borderRadius: '16px',
    fontWeight: '700',
    fontSize: '1rem',
    backgroundColor: '#0F172A',
    border: '1px solid #0F172A',
    color: '#ffffff',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    marginTop: '1rem',
  }
};

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div style={styles.pageWrapper}>
      <Container>
        <div style={styles.glassCard}>
          <Row className="gy-5">
            
            {/* Left Side: Brand Inquiries & Information Details */}
            <Col xs={12} md={5} style={styles.infoSection}>
              <h1 style={styles.mainHeading}>Connect with the House</h1>
              <p style={styles.subText}>
                Whether you have an inquiry regarding custom batch volumes, specific olfactory note extractions, or retail partnerships, our concierge is here to assist.
              </p>

              <div style={styles.infoBlock}>
                <h5 style={styles.infoTitle}>📍 Main Atelier</h5>
                <p style={styles.infoDetail}>Almas Perfume</p>
                <p style={{ ...styles.infoDetail, fontWeight: '400', color: '#475569', fontSize: '0.95rem' }}>
                Shop No 9 & 9/A, 99 Haji Mahal, Mohammed Ali Road, Mumbai-400003 Maharashtra.
                </p>
              </div>

              <div style={styles.infoBlock}>
                <h5 style={styles.infoTitle}>✉️ Direct Correspondence</h5>
                <p style={styles.infoDetail}>support@alkausar.com</p>
              </div>

              <div style={styles.infoBlock}>
                <h5 style={styles.infoTitle}>⏱️ Contact No.</h5>
                <p style={styles.infoDetail}>Almas Perfume</p>
                <p style={{ ...styles.infoDetail, fontWeight: '400', color: '#475569', fontSize: '0.95rem' }}>
                +91 22 23426261 <br />
                +91 9022786777
                </p>
              </div>
            </Col>

            {/* Right Side: Interactive Frosted Form Loop */}
            <Col xs={12} md={7}>
              {!formSubmitted ? (
                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col xs={12} sm={6}>
                      <Form.Group>
                        <Form.Label className="small fw-bold text-muted ps-1 mb-1">Full Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          required 
                          style={styles.inputField} 
                          onFocus={(e) => e.target.style.borderColor = 'rgba(15, 23, 42, 0.3)'}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(15, 23, 42, 0.08)'}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} sm={6}>
                      <Form.Group>
                        <Form.Label className="small fw-bold text-muted ps-1 mb-1">Email Address</Form.Label>
                        <Form.Control 
                          type="email" 
                          required 
                          style={styles.inputField}
                          onFocus={(e) => e.target.style.borderColor = 'rgba(15, 23, 42, 0.3)'}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(15, 23, 42, 0.08)'}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="small fw-bold text-muted ps-1 mb-1">Inquiry Type</Form.Label>
                        <Form.Select 
                          style={styles.inputField}
                          onFocus={(e) => e.target.style.borderColor = 'rgba(15, 23, 42, 0.3)'}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(15, 23, 42, 0.08)'}
                        >
                          <option>General Catalog Inquiry</option>
                          <option>Artisanal Extraction Details</option>
                          <option>Bulk/Boutique Curation</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="small fw-bold text-muted ps-1 mb-1">Your Message</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          rows={4} 
                          required 
                          style={styles.inputField}
                          onFocus={(e) => e.target.style.borderColor = 'rgba(15, 23, 42, 0.3)'}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(15, 23, 42, 0.08)'}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <button 
                    type="submit" 
                    style={styles.submitBtn}
                    onMouseEnter={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#0F172A'; }}
                    onMouseLeave={(e) => { e.target.style.backgroundColor = '#0F172A'; e.target.style.color = '#ffffff'; }}
                  >
                    Send Message
                  </button>
                </Form>
              ) : (
                <div className="text-center py-5">
                  <span style={{ fontSize: '3.5rem' }}>✉️</span>
                  <h3 className="fw-extrabold mt-3 text-dark">Message Transmitted</h3>
                  <p className="text-muted mt-2 mx-auto" style={{ maxWidth: '400px' }}>
                    Thank you for connecting with Al Kausar. Our fragrance house concierge will review your inquiry details and get back to you shortly.
                  </p>
                </div>
              )}
            </Col>

          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
