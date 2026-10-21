import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

const styles = {
  section: {
    padding: '8rem 0 6rem 0',
    background: 'radial-gradient(circle at top, #FCFBF9 0%, #F3F1EC 100%)', // Elegant Luxury Light Mode Linen
    minHeight: '100vh',
    position: 'relative'
  },
  goldLine: {
    width: '80px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #C5A880, transparent)', // Soft luxury gold accent
    margin: '1.5rem auto 3rem auto',
  },
  heading: {
    fontSize: '3.5rem',
    fontWeight: '900',
    color: '#0F172A',
    fontFamily: "'Cinzel', 'Playfair Display', serif",
    letterSpacing: '2px',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: '#64748B',
    fontStyle: 'italic',
    fontSize: '1.1rem',
    maxWidth: '600px',
    margin: '0 auto',
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '3rem',
  },
  filterBtn: (isActive, isHovered) => ({
    background: isActive ? '#0F172A' : isHovered ? 'rgba(197, 168, 128, 0.15)' : 'rgba(255, 255, 255, 0.6)',
    color: isActive ? '#FFFFFF' : '#475569',
    border: isActive ? '1px solid #0F172A' : '1px solid rgba(197, 168, 128, 0.3)',
    borderRadius: '14px',
    padding: '0.6rem 1.5rem',
    fontWeight: '700',
    fontSize: '0.85rem',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    cursor: 'pointer',
    boxShadow: isActive ? '0 8px 20px rgba(15, 23, 42, 0.15)' : '0 4px 10px rgba(0,0,0,0.01)',
  }),
  searchBar: {
    maxWidth: '400px',
    margin: '0 auto 3rem auto',
    borderRadius: '14px',
    padding: '0.75rem 1.2rem',
    border: '1px solid rgba(197, 168, 128, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '500',
    fontSize: '0.9rem',
    color: '#0F172A',
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.01)'
  },
  productCard: {
    background: 'rgba(255, 255, 255, 0.65)',
    backdropFilter: 'blur(20px) saturate(120%)',
    border: '1px solid rgba(197, 168, 128, 0.25)',
    borderRadius: '24px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    height: '100%'
  },
  imageWrapper: {
    height: '340px',
    overflow: 'hidden',
    backgroundColor: '#E2E8F0',
    position: 'relative'
  },
  tagBadge: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    background: '#C5A880',
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: '0.7rem',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    padding: '0.3rem 0.8rem',
    borderRadius: '20px',
    zIndex: 2,
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
  },
  productTitle: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: '0.5rem',
    fontFamily: "'Playfair Display', serif",
  },
  productMeta: {
    fontSize: '0.8rem',
    color: '#C5A880',
    fontWeight: '700',
    letterSpacing: '0.5px',
    marginBottom: '1rem'
  },
  discoverBtn: {
    width: '100%',
    border: '1px solid rgba(197, 168, 128, 0.4)',
    borderRadius: '12px',
    padding: '0.6rem',
    fontSize: '0.85rem',
    fontWeight: '700',
    letterSpacing: '0.5px',
    transition: 'all 0.3s ease',
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    marginTop: '4rem',
  },
  pageBtn: (isActive) => ({
    width: '42px',
    height: '42px',
    borderRadius: '12px',
    border: isActive ? '1px solid #0F172A' : '1px solid rgba(197, 168, 128, 0.3)',
    background: isActive ? '#0F172A' : '#FFFFFF',
    color: isActive ? '#FFFFFF' : '#475569',
    fontWeight: '700',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  }),
  modalImage: {
    width: '100%',
    height: '380px',
    objectFit: 'cover',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(165, 155, 135, 0.15)'
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

function ProductGallery() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [hoveredFilter, setHoveredFilter] = useState(null);
  
  // Modal Detailed Preview Triggers
  const [showModal, setShowModal] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  // ⚡ PAGINATION STATE CONTROLS
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Shows exactly 6 luxury items per card screen row chunk

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => {
        if (!res.ok) throw new Error("Database pipeline network exception drop");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gallery initialization block failure:", err);
        setLoading(false);
      });
  }, []);

  // Reset pagination to card sheet 1 whenever filters change to avoid empty index pages
  const handleFilterChange = (categoryKey) => {
    setSelectedCategory(categoryKey);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // ⚡ FILTER MATRIX PARSING CALCULATION
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.type === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // ⚡ COMPUTE PAGINATION TARGET SPLITS
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#FCFBF9' }} className="d-flex align-items-center justify-content-centerNo">
      <div className="text-center py-5 text-muted small fw-bold tracking-widest">REFRACTING CURATED ATELIER GALLERY Vault...</div>
    </div>
  );

  return (
    <div style={styles.section}>
      <Container>
        <h1 style={styles.heading}>The Scent Vault</h1>
        <p style={styles.subtitle}>Browse through our complete compiled artisanal archive of rare fragrances and premium formulations</p>
        <div style={styles.goldLine} />

        {/* Dynamic Search Interceptor Input bar */}
        <input 
          type="text"
          placeholder="Search collections or extraction notes..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="form-control"
          style={styles.searchBar}
        />

        {/* Category Tab Filter Switches Container Row */}
        <div style={styles.filterContainer}>
          {['all', 'attars', 'perfumes', 'bakhoor'].map((cat) => {
            const isActive = selectedCategory === cat;
            const isHovered = hoveredFilter === cat;
            return (
              <button
                key={cat}
                style={styles.filterBtn(isActive, isHovered)}
                onMouseEnter={() => setHoveredFilter(cat)}
                onMouseLeave={() => setHoveredFilter(null)}
                onClick={() => handleFilterChange(cat)}
              >
                {cat === 'all' ? '✨ View All' : cat}
              </button>
            );
          })}
        </div>

        {/* Main Infinite Gallery Presentation Grid Layout */}
        {currentProducts.length === 0 ? (
          <div className="text-center py-5 text-muted font-italic">
            No rare formulation entries match your active searching parameters or collection bounds.
          </div>
        ) : (
          <Row className="g-4">
            {currentProducts.map((product) => {
              const isHovered = hoveredCardId === product._id;
              return (
                <Col key={product._id} xs={12} sm={6} md={4}>
                  <Card
                    style={{
                      ...styles.productCard,
                      transform: isHovered ? 'translateY(-12px)' : 'translateY(0)',
                      boxShadow: isHovered ? '0 25px 45px rgba(165,155,135,0.2)' : '0 6px 18px rgba(0,0,0,0.02)',
                      borderColor: isHovered ? '#C5A880' : 'rgba(197, 168, 128, 0.25)'
                    }}
                    onMouseEnter={() => setHoveredCardId(product._id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                    onClick={() => { setActiveProduct(product); setShowModal(true); }}
                  >
                    <div style={styles.imageWrapper}>
                      <span style={styles.tagBadge}>{product.type}</span>
                      <img 
                        src={product.imageUrl || "https://unsplash.com"} 
                        alt={product.title} 
                        style={{
                          ...styles.productImage,
                          transform: isHovered ? 'scale(1.04)' : 'scale(1)'
                        }}
                      />
                    </div>
                    <Card.Body style={styles.cardBody}>
                      <h4 style={styles.productTitle}>{product.title}</h4>
                      <div style={styles.productMeta}>⏱️ Lifespan projection: {product.longevity || '24+ Hours'}</div>
                      <button 
                        style={{
                          ...styles.discoverBtn,
                          backgroundColor: isHovered ? '#0F172A' : 'transparent',
                          color: isHovered ? '#FFFFFF' : '#0F172A',
                        }}
                      >
                        Examine Composition
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        )}
        {/* ⚡ ACTIVE PAGINATION COMPONENT INTERFACE FOOTER CONTROL BAR */}
        {totalPages > 1 && (
          <div style={styles.paginationContainer}>
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              style={{ ...styles.pageBtn(false), opacity: currentPage === 1 ? 0.4 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
            >
              ‹
            </button>
            
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNum = index + 1;
              return (
                <button
                  key={pageNum}
                  style={styles.pageBtn(currentPage === pageNum)}
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}

            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              style={{ ...styles.pageBtn(false), opacity: currentPage === totalPages ? 0.4 : 1, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
            >
              ›
            </button>
          </div>
        )}
      </Container>

      {/* REUSABLE LIGHT MODE ROYAL DETAILED ATELIER MODAL POPUP DIALOG LAYER */}
      {activeProduct && (
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered contentClassName="custom-gallery-light-modal">
          <Modal.Header closeButton className="border-0 pb-0" />
          <Modal.Body className="p-4 pt-0">
            <Row className="align-items-center g-4">
              <Col xs={12} md={5}>
                <img src={activeProduct.imageUrl} alt={activeProduct.title} style={styles.modalImage} />
              </Col>
              <Col xs={12} md={7}>
                <span className="text-uppercase tracking-widest small fw-bold text-muted d-block mb-1">{activeProduct.type}</span>
                <h3 style={{ fontWeight: '900', color: '#0F172A', fontFamily: "'Playfair Display', serif" }}>{activeProduct.title}</h3>
                <p className="my-3 text-muted small" style={{ lineHeight: '1.6' }}>{activeProduct.description}</p>
                
                <hr style={{ opacity: 0.08 }} />
                
                <div className="mb-2">
                  <h6 className="fw-bold small text-dark mb-1">✨ Top Elements</h6>
                  {activeProduct.topNotes && activeProduct.topNotes.map((n, i) => <span key={i} style={styles.noteBadge}>{n}</span>)}
                </div>
                <div className="mb-2">
                  <h6 className="fw-bold small text-dark mb-1">❤️ Heart Core Elements</h6>
                  {activeProduct.heartNotes && activeProduct.heartNotes.map((n, i) => <span key={i} style={styles.noteBadge}>{n}</span>)}
                </div>
                <div className="mb-2">
                  <h6 className="fw-bold small text-dark mb-1">🪵 Base Sillage Anchors</h6>
                  {activeProduct.baseNotes && activeProduct.baseNotes.map((n, i) => <span key={i} style={styles.noteBadge}>{n}</span>)}
                </div>
                
                <div className="mt-4 pt-2 border-top d-flex justify-content-between align-items-center">
                  <small className="text-muted font-weight-bold">⚡ Projection Performance Rate: </small>
                  <strong className="text-dark small">{activeProduct.longevity || '24+ Hours'}</strong>
                </div>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      )}

      {/* Dynamic DOM stylesheet injection block mapping soft royal glass overlays */}
      <style>{`
        .custom-gallery-light-modal {
          background: rgba(252, 251, 249, 0.95) !important;
          backdrop-filter: blur(25px) saturate(130%) !important;
          border: 1px solid rgba(197, 168, 128, 0.4) !important;
          border-radius: 32px !important;
          box-shadow: 0 30px 60px rgba(165, 155, 135, 0.25) !important;
        }
      `}</style>
    </div>
  );
}

export default ProductGallery;
