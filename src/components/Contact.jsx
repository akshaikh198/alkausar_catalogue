
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
    boxShadow:
      '0 10px 40px rgba(15, 23, 42, 0.02), 0 30px 60px rgba(15, 23, 42, 0.03)',
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
  },
};

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'General Catalog Inquiry',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setErrorMessage('');
    setFormSubmitted(false);

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || 'Unable to send your enquiry. Please try again.'
        );
      }

      setFormSubmitted(true);

      setFormData({
        name: '',
        email: '',
        inquiryType: 'General Catalog Inquiry',
        message: '',
      });
    } catch (error) {
      console.error('Contact form submission failed:', error);

      setErrorMessage(
        error.message ||
          'Something went wrong. Please try again later.'
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleFocus = (e) => {
    e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.3)';
  };

  const handleBlur = (e) => {
    e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.08)';
  };

  return (
    <div style={styles.pageWrapper}>
      <Container>
        <div style={styles.glassCard}>
          <Row className="gy-5">
            {/* Left Side: Brand Information */}
            <Col xs={12} md={5} style={styles.infoSection}>
              <h1 style={styles.mainHeading}>
                Connect with the House
              </h1>

              <p style={styles.subText}>
                Whether you have an inquiry regarding custom batch
                volumes, specific olfactory note extractions, or retail
                partnerships, our concierge is here to assist.
              </p>

              <div style={styles.infoBlock}>
                <h5 style={styles.infoTitle}>
                  📍 Main Atelier
                </h5>
                <p style={styles.infoDetail}>Almas Perfume</p>
                <p
                  style={{
                    ...styles.infoDetail,
                    fontWeight: '400',
                    color: '#475569',
                    fontSize: '0.95rem',
                  }}
                >
                  Shop No 9 &amp; 9/A, 99 Haji Mahal, Mohammed Ali
                  Road, Mumbai-400003 Maharashtra.
                </p>
              </div>

              <div style={styles.infoBlock}>
                <h5 style={styles.infoTitle}>
                  ✉️ Direct Correspondence
                </h5>
                <p style={styles.infoDetail}>
                  support@alkausar.com
                </p>
              </div>

              <div style={styles.infoBlock}>
                <h5 style={styles.infoTitle}>
                  ⏱️ Contact No.
                </h5>
                <p style={styles.infoDetail}>Almas Perfume</p>
                <p
                  style={{
                    ...styles.infoDetail,
                    fontWeight: '400',
                    color: '#475569',
                    fontSize: '0.95rem',
                  }}
                >
                  +91 22 23426261
                  <br />
                  +91 9022786777
                </p>
              </div>
            </Col>

            {/* Right Side: Contact Form */}
            <Col xs={12} md={7}>
              {!formSubmitted ? (
                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col xs={12} sm={6}>
                      <Form.Group>
                        <Form.Label className="small fw-bold text-muted ps-1 mb-1">
                          Full Name
                        </Form.Label>

                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          maxLength={100}
                          autoComplete="name"
                          required
                          disabled={isSending}
                          style={styles.inputField}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12} sm={6}>
                      <Form.Group>
                        <Form.Label className="small fw-bold text-muted ps-1 mb-1">
                          Email Address
                        </Form.Label>

                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          maxLength={254}
                          autoComplete="email"
                          required
                          disabled={isSending}
                          style={styles.inputField}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="small fw-bold text-muted ps-1 mb-1">
                          Inquiry Type
                        </Form.Label>

                        <Form.Select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          required
                          disabled={isSending}
                          style={styles.inputField}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                        >
                          <option value="General Catalog Inquiry">
                            General Catalog Inquiry
                          </option>
                          <option value="Artisanal Extraction Details">
                            Artisanal Extraction Details
                          </option>
                          <option value="Bulk/Boutique Curation">
                            Bulk/Boutique Curation
                          </option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="small fw-bold text-muted ps-1 mb-1">
                          Your Message
                        </Form.Label>

                        <Form.Control
                          as="textarea"
                          name="message"
                          rows={4}
                          placeholder="How can our fragrance house assist you?"
                          value={formData.message}
                          onChange={handleChange}
                          maxLength={5000}
                          required
                          disabled={isSending}
                          style={styles.inputField}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {errorMessage && (
                    <div
                      className="alert alert-danger mt-3"
                      role="alert"
                    >
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    style={{
                      ...styles.submitBtn,
                      opacity: isSending ? 0.7 : 1,
                      cursor: isSending ? 'wait' : 'pointer',
                    }}
                    disabled={isSending}
                    onMouseEnter={(e) => {
                      if (!isSending) {
                        e.currentTarget.style.backgroundColor =
                          'transparent';
                        e.currentTarget.style.color = '#0F172A';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#0F172A';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                  >
                    {isSending ? 'Sending...' : 'Send Message'}
                  </button>
                </Form>
              ) : (
                <div className="text-center py-5" role="status">
                  <span style={{ fontSize: '3.5rem' }}>✉️</span>

                  <h3 className="fw-bold mt-3 text-dark">
                    Message Transmitted
                  </h3>

                  <p
                    className="text-muted mt-2 mx-auto"
                    style={{ maxWidth: '400px' }}
                  >
                    Thank you for connecting with Al-Kausar. Our
                    fragrance house concierge will review your enquiry
                    and get back to you shortly.
                  </p>

                  <button
                    type="button"
                    style={styles.submitBtn}
                    onClick={() => {
                      setFormSubmitted(false);
                      setErrorMessage('');
                    }}
                  >
                    Send Another Enquiry
                  </button>
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
