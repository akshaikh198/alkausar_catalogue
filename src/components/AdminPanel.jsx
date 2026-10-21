import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const styles = {
  section: {
    padding: '6rem 0',
    background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
    minHeight: '100vh',
  },
  glassCard: {
    background: 'rgba(255, 255, 255, 0.45)',
    backdropFilter: 'blur(20px) saturate(140%)',
    border: '1px solid rgba(255, 255, 255, 0.6)',
    borderRadius: '32px',
    padding: '2.5rem',
    boxShadow: '0 20px 40px rgba(15, 23, 42, 0.03)',
  },
  previewCard: {
    background: 'rgba(255, 255, 255, 0.65)',
    backdropFilter: 'blur(30px) saturate(150%)',
    border: '1px solid rgba(255, 255, 255, 0.8)',
    borderRadius: '32px',
    padding: '20px',
    position: 'sticky',
    top: '110px',
    boxShadow: '0 30px 60px rgba(15, 23, 42, 0.04)',
  },
  imageWrapper: {
    height: '280px',
    overflow: 'hidden',
    borderRadius: '20px',
    backgroundColor: '#cbd5e1',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    borderRadius: '14px',
    padding: '0.75rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    border: '1px solid rgba(15, 23, 42, 0.08)',
    color: '#0F172A',
    fontWeight: '500',
  },
  fileUploadZone: {
    border: '2px dashed rgba(15, 23, 42, 0.15)',
    borderRadius: '14px',
    padding: '1.5rem',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  submitBtn: {
    width: '100%',
    borderRadius: '16px',
    padding: '0.85rem',
    fontWeight: '800',
    fontSize: '1rem',
    backgroundColor: '#0F172A',
    color: '#ffffff',
    border: 'none',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    boxShadow: '0 10px 20px rgba(15, 23, 42, 0.1)',
  },
  previewBadge: {
    display: 'inline-block',
    margin: '0.2rem 0.4rem 0.2rem 0',
    padding: '0.4rem 0.75rem',
    fontSize: '0.75rem',
    fontWeight: '700',
    borderRadius: '10px',
    color: '#475569',
    backgroundColor: 'rgba(15, 23, 42, 0.04)',
  }
};

function AdminPanel() {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    title: '',
    category: 'attars',
    description: '',
    topNotes: '',
    heartNotes: '',
    baseNotes: '',
    longevity: '24+ Hours'
  });
  
  const [imagePreview, setImagePreview] = useState('');
  const [dbStatus, setDbStatus] = useState('Verifying node connection...');
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => {
        if(res.ok) {
          setDbStatus('🍃 Database Vault Connected & Synced Live');
          setIsOnline(true);
        } else {
          setDbStatus('🔴 Server Online But DB Handshake Dropped');
        }
      })
      .catch(() => {
        setDbStatus('⚠️ System Offline: Ensure backend server is active on port 5000');
        setIsOnline(false);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Process selected file binary packets into clean Base64 data strings instantly
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Size limit check: standard MongoDB document storage threshold limit check
    if (file.size > 2 * 1024 * 1024) {
      alert("Asset Too Large: Please choose an optimized bottle image under 2MB for cloud efficiency.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result); // Base64 Data URL string ready
    };
    reader.readAsDataURL(file);
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    if (!isOnline) {
      alert("Submission Halted: Cannot sync data while your database link is down.");
      return;
    }
    if (!imagePreview) {
      alert("Validation Error: Please drop or choose a valid Product Image file first.");
      return;
    }

    const formattedPayload = {
      title: formData.title,
      type: formData.category, 
      imageUrl: imagePreview, // Commits the absolute image string cleanly 
      description: formData.description,
      topNotes: formData.topNotes.split(',').map(n => n.trim()).filter(Boolean),
      heartNotes: formData.heartNotes.split(',').map(n => n.trim()).filter(Boolean),
      baseNotes: formData.baseNotes.split(',').map(n => n.trim()).filter(Boolean),
      longevity: formData.longevity
    };

    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedPayload)
      });

      if (response.ok) {
        alert("🎯 Success! Fragrance formulation uploaded and synced to MongoDB cluster.");
        setFormData({
          title: '', category: 'attars', description: '',
          topNotes: '', heartNotes: '', baseNotes: '', longevity: '24+ Hours'
        });
        setImagePreview('');
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        const errorData = await response.json();
        alert(`❌ Upload Failure: ${errorData.error || 'Server error structure encountered'}`);
      }
    } catch (err) {
      alert("🔴 Critical System Defect: Failed to dispatch data packets to API server.");
    }
  };

  return (
    <div style={styles.section}>
      <Container>
        <div className="mb-4 text-center">
          <span className="small fw-bold px-3 py-2 rounded-pill shadow-inner" style={{ 
            background: isOnline ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
            color: isOnline ? '#059669' : '#DC2626',
            fontSize: '0.85rem'
          }}>
            {dbStatus}
          </span>
        </div>

        <Row className="g-5">
          {/* Workdesk Control Box */}
          <Col xs={12} lg={7}>
            <div style={styles.glassCard}>
              <h2 className="fw-black text-dark mb-2">Curation Desk</h2>
              <p className="text-muted small mb-4">Introduce new custom formulas seamlessly to the digital boutique catalog.</p>

              <Form onSubmit={handlePublish}>
                <Row className="g-3">
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="small fw-bold text-dark">Fragrance Identity Title</Form.Label>
                      <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} required placeholder="e.g. Imperial Oud Premium" style={styles.inputField} />
                    </Form.Group>
                  </Col>

                  {/* 🆕 DIRECT LOCAL FILE TYPE INPUT BOX */}
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="small fw-bold text-dark">Product Image File Upload</Form.Label>
                      <div 
                        style={styles.fileUploadZone}
                        onClick={() => fileInputRef.current.click()}
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = '#0F172A'}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.15)'}
                      >
                        <span style={{ fontSize: '1.75rem', display: 'block', marginBottom: '0.25rem' }}>📸</span>
                        <span className="small fw-bold text-dark d-block">Click to Select Scent Bottle File</span>
                        <small className="text-muted small">Supports JPG, PNG, or WEBP formats up to 2MB</small>
                      </div>
                      <Form.Control 
                        type="file" 
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: 'none' }} 
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6}>
                    <Form.Group>
                      <Form.Label className="small fw-bold text-dark">Collection Category</Form.Label>
                      <Form.Select name="category" value={formData.category} onChange={handleChange} style={styles.inputField}>
                        <option value="attars">Attars (Non-Alcoholic)</option>
                        <option value="perfumes">Perfume Sprays</option>
                        <option value="bakhoor">Home Bakhoor & Ouds</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Group>
                      <Form.Label className="small fw-bold text-dark">Projection Lifespan</Form.Label>
                      <Form.Select name="longevity" value={formData.longevity} onChange={handleChange} style={styles.inputField}>
                        <option value="6+ Hours">6+ Hours</option>
                        <option value="12+ Hours">12+ Hours</option>
                        <option value="18+ Hours">18+ Hours</option>
                        <option value="24+ Hours">24+ Hours (Pure Concentrate)</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="small fw-bold text-dark">Luxury Compounding Description</Form.Label>
                      <Form.Control 
                        as="textarea"
                        rows={3} 
                        name="description" 
                        value={formData.description} 
                        onChange={handleChange} 
                        required 
                        placeholder="Detail the emotional profile, distillation loop origins, and raw material sourcing..." 
                        style={styles.inputField} 
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col xs={12} sm={4}>
                    <Form.Group>
                      <Form.Label className="small fw-bold text-dark">✨ Top Notes <small className="text-muted">(commas)</small></Form.Label>
                      <Form.Control type="text" name="topNotes" value={formData.topNotes} onChange={handleChange} placeholder="Rose, Saffron" style={styles.inputField} />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={4}>
                    <Form.Group>
                      <Form.Label className="small fw-bold text-dark">❤️ Heart Notes <small className="text-muted">(commas)</small></Form.Label>
                      <Form.Control type="text" name="heartNotes" value={formData.heartNotes} onChange={handleChange} placeholder="Oud, Jasmine" style={styles.inputField} />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={4}>
                    <Form.Group>
                      <Form.Label className="small fw-bold text-dark">🪵 Base Notes <small className="text-muted">(commas)</small></Form.Label>
                      <Form.Control type="text" name="baseNotes" value={formData.baseNotes} onChange={handleChange} placeholder="Amber, Musk" style={styles.inputField} />
                    </Form.Group>
                  </Col>
                  
                  <Col xs={12} className="mt-4">
                    <button 
                      type="submit" 
                      style={styles.submitBtn} 
                      onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'} 
                      onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                      Publish to Catalogue
                    </button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>

          {/* Interactive Live 3D Crystal Preview Box Column */}
          <Col xs={12} lg={5}>
            <div style={styles.previewCard}>
              <span className="small fw-bold text-uppercase tracking-wider text-muted d-block mb-3">✨ Live Curation Preview</span>
              <div style={styles.imageWrapper}>
                {imagePreview ? (
                  <img src={imagePreview} alt="Dynamic Upload Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div className="text-center text-muted p-4 small italic">Awaiting local bottle image selection...</div>
                )}
              </div>
              <div className="pt-2 px-1">
                <span className="text-uppercase small fw-bold text-muted tracking-widest d-block mb-1">{formData.category}</span>
                <h4 className="fw-black text-dark mb-2">{formData.title || "Untitled Fragrance"}</h4>
                <p className="text-muted small mb-3" style={{ lineHeight: '1.6', minHeight: '48px' }}>
                  {formData.description || "Formulation details will compile here dynamically as you write..."}
                </p>
                <hr style={{ opacity: 0.08, margin: '1rem 0' }} />
                
                <div className="mb-2">
                  <small className="fw-bold text-dark d-block mb-1">Top Notes:</small>
                  {formData.topNotes ? formData.topNotes.split(',').map((n, i) => <span key={i} style={styles.previewBadge}>{n.trim()}</span>) : <small className="text-muted italic small">None added</small>}
                </div>
                <div className="mb-2">
                  <small className="fw-bold text-dark d-block mb-1">Heart Notes:</small>
                  {formData.heartNotes ? formData.heartNotes.split(',').map((n, i) => <span key={i} style={styles.previewBadge}>{n.trim()}</span>) : <small className="text-muted italic small">None added</small>}
                </div>
                <div className="mb-3">
                  <small className="fw-bold text-dark d-block mb-1">Base Notes:</small>
                  {formData.baseNotes ? formData.baseNotes.split(',').map((n, i) => <span key={i} style={styles.previewBadge}>{n.trim()}</span>) : <small className="text-muted italic small">None added</small>}
                </div>

                <div className="d-flex justify-content-between align-items-center pt-2 border-top">
                  <small className="text-muted">⏱️ Lifespan</small>
                  <strong className="small text-dark">{formData.longevity}</strong>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminPanel;

