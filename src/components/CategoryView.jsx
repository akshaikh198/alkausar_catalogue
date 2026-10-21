import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'; // 💥 FIXED: Imported missing Modal framework element

// Premium UI Styles Object Layer Configuration
const styles = {
  section: {
    padding: '6rem 0',
    background: 'radial-gradient(circle at top, #F8FAFC 0%, #E2E8F0 100%)',
    minHeight: '100vh',
  },
  sectionHeading: {
    fontSize: '2.8rem',
    fontWeight: '900',
    color: '#0F172A',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontFamily: "'Playfair Display', serif",
    marginBottom: '0.25rem',
  },
  sectionSubtitle: {
    color: '#64748B',
    marginBottom: '4rem',
    fontSize: '1rem',
    textTransform: 'capitalize'
  },
  productCard: {
    background: 'rgba(255, 255, 255, 0.45)',
    backdropFilter: 'blur(20px) saturate(140%)',
    border: '1px solid rgba(255, 255, 255, 0.6)',
    borderRadius: '24px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  imageWrapper: {
    height: '340px',
    overflow: 'hidden',
    backgroundColor: '#cbd5e1',
  },
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  cardBody: {
    padding: '1.5rem',
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.25)',
  },
  productTitle: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: '1rem',
  },
  discoverBtn: {
    width: '100%',
    border: '1px solid rgba(15, 23, 42, 0.08)',
    borderRadius: '12px',
    padding: '0.6rem',
    fontSize: '0.85rem',
    fontWeight: '700',
    transition: 'all 0.3s ease',
  },
  modalContent: {
    background: 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'blur(30px) saturate(160%)',
    border: '1px solid rgba(255, 255, 255, 0.8)',
    borderRadius: '32px',
  },
  modalImage: {
    width: '100%',
    height: '360px',
    objectFit: 'cover',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.06)'
  },
  noteBadge: {
    display: 'inline-block',
    margin: '0.2rem 0.4rem 0.2rem 0',
    padding: '0.4rem 0.8rem',
    fontSize: '0.78rem',
    fontWeight: '700',
    borderRadius: '10px',
    color: '#475569',
    backgroundColor: 'rgba(15, 23, 42, 0.04)',
    border: '1px solid rgba(15, 23, 42, 0.02)'
  }
};

function CategoryView() {
  const { category } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/api/products')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP Error Status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          // Filters items matching the active URL route parameter parameter variable cleanly
          const categoryItems = data.filter(item => item.type === category);
          setProducts(categoryItems);
        } else {
          console.error("Backend sent an invalid data structure:", data);
          setProducts([]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed loading backend content streams:", err);
        setProducts([]);
        setLoading(false);
      });
  }, [category]); // Triggers view rebuild cycles safely when routing paths change

  // Helper utility function handling dynamic database image paths and clean text-data uri streams
  const getProductImage = (product) => {
    if (product && product.imageUrl) {
      return product.imageUrl;
    }
    // High-end default elegant studio stock fallback illustration path link
    return "https://unsplash.com";
  };

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC' }} className="d-flex align-items-center justify-content-center">
      <div className="text-center py-5 text-muted small fw-bold tracking-widest">REFRACTING SCENTS FROM VAULT...</div>
    </div>
  );

  return (
    <div style={styles.section}>
      <Container>
        <h1 style={styles.sectionHeading}>{category} Collection</h1>
        <p style={styles.sectionSubtitle}>Handcrafted premium house variants curated perfectly within our {category} category</p>
        
        {products.length === 0 ? (
          <div className="text-center py-5 text-muted italic bg-white bg-opacity-25 rounded-3 border p-5">
            No formulations have been published to the {category} collection catalog repository yet.
          </div>
        ) : (
          <Row className="g-4">
            {products.map((product) => {
              const isHovered = hoveredCardId === product._id;
              return (
                <Col key={product._id} xs={12} sm={6} md={4}> 
                  <Card
                    style={{
                      ...styles.productCard,
                      transform: isHovered ? 'translateY(-12px) scale(1.01)' : 'translateY(0) scale(1)',
                      boxShadow: isHovered ? '0 20px 40px rgba(15, 23, 42, 0.08)' : '0 10px 30px rgba(15, 23, 42, 0.01)',
                      borderColor: isHovered ? 'rgba(15,23,42,0.1)' : 'rgba(255,255,255,0.6)'
                    }}
                    onMouseEnter={() => setHoveredCardId(product._id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                    onClick={() => { setActiveProduct(product); setShowModal(true); }} // ⚡️ ACTIVATES MODAL CONTEXT TRIGGER ON CLICK
                  >
                    <div style={styles.imageWrapper}>
                      <img
                        src={getProductImage(product)}
                        alt={product.title}
                        style={{
                          ...styles.productImage,
                          transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                        }}
                      />
                    </div>
                    <Card.Body style={styles.cardBody}>
                      <h4 style={styles.productTitle}>{product.title}</h4>
                      <button 
                        style={{
                          ...styles.discoverBtn,
                          backgroundColor: isHovered ? '#0F172A' : 'rgba(255, 255, 255, 0.6)',
                          color: isHovered ? '#ffffff' : '#0F172A',
                        }}
                      >
                        Discover Notes
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        )}
      </Container>

      {/* REUSABLE PROVENANCE DETAILED DIALOG MODAL POPUP LAYER */}
      {activeProduct && (
        <Modal 
          show={showModal} 
          onHide={() => setShowModal(false)} 
          size="lg" 
          centered 
          contentClassName="custom-royal-glass-modal"
        >
          <Modal.Header closeButton className="border-0 pb-0" style={{ zIndex: 10 }} />
          <Modal.Body className="p-4 pt-0">
            <Row className="align-items-center g-4">
              <Col xs={12} md={5}>
                <img src={getProductImage(activeProduct)} alt={activeProduct.title} style={styles.modalImage} />
              </Col>
              <Col xs={12} md={7}>
                <span className="text-uppercase tracking-widest small text-muted fw-bold d-block mb-1">{activeProduct.type}</span>
                <h3 style={{ fontWeight: '900', color: '#0F172A', fontFamily: "'Playfair Display', serif" }}>{activeProduct.title}</h3>
                <p className="my-3 text-muted small" style={{ lineHeight: '1.6' }}>{activeProduct.description}</p>
                
                <hr style={{ opacity: 0.08 }} />
                
                <div className="mb-3">
                  <h6 className="fw-bold small text-dark mb-2">✨ Top Elements</h6>
                  {activeProduct.topNotes && activeProduct.topNotes.length > 0 ? (
                    activeProduct.topNotes.map((n, i) => <span key={i} style={styles.noteBadge}>{n}</span>)
                  ) : (
                    <small className="text-muted italic">None specified</small>
                  )}
                </div>
                
                <div className="mb-3">
                  <h6 className="fw-bold small text-dark mb-2">❤️ Heart Core Elements</h6>
                  {activeProduct.heartNotes && activeProduct.heartNotes.length > 0 ? (
                    activeProduct.heartNotes.map((n, i) => <span key={i} style={styles.noteBadge}>{n}</span>)
                  ) : (
                    <small className="text-muted italic">None specified</small>
                  )}
                </div>
                
                <div className="mb-3">
                  <h6 className="fw-bold small text-dark mb-2">🪵 Base Sillage Anchors</h6>
                  {activeProduct.baseNotes && activeProduct.baseNotes.length > 0 ? (
                    activeProduct.baseNotes.map((n, i) => <span key={i} style={styles.noteBadge}>{n}</span>)
                  ) : (
                    <small className="text-muted italic">None specified</small>
                  )}
                </div>
                
                <div className="mt-4 pt-2 border-top d-flex justify-content-between align-items-center">
                <small className="text-muted font-weight-bold">⚡ Vapor Evaporation Projection Lifespan: </small>
                  <strong className="text-dark small">{activeProduct.longevity || '24+ Hours'}</strong>
                </div>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      )}

      {/* Dynamic DOM injection to apply clean luxury glass overlay styles rules explicitly */}
      <style>{`
        .custom-royal-glass-modal {
          background: rgba(255, 255, 255, 0.8) !important;
          backdrop-filter: blur(25px) saturate(150%) !important;
          border: 1px solid rgba(255, 255, 255, 0.6) !important;
          border-radius: 32px !important;
          box-shadow: 0 30px 60px rgba(15, 23, 42, 0.15) !important;
          overflow: hidden;
        }
        .modal-backdrop.show {
          opacity: 0.3;
          background-color: #0F172A;
        }
      `}</style>
    </div>
  );
}

export default CategoryView;
