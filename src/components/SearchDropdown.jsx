import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { STATIC_PRODUCTS } from '../data/products';

const styles = {
  // ⚡️ DESKTOP ONLY: Fixed floating glass container panel style
  desktopDropdown: {
    position: 'absolute',
    top: '45px',
    right: '0',
    width: '320px',
    maxHeight: '400px',
    overflowY: 'auto',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(25px) saturate(150%)',
    border: '1px solid rgba(197, 168, 128, 0.3)', // Royal gold accent trim line
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(15, 23, 42, 0.1)',
    zIndex: 9999, // Guarantees it floats over sliders and modals safely
    padding: '0.75rem',
  },
  
  // 🆕 MOBILE ONLY: Full-Screen Luxury Scent Overlay Vault Layout
  mobileOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(252, 251, 249, 0.98)', // Clean royal light tone
    zIndex: 10000, // Forces visibility above mobile Bootstrap navigation bars
    overflowY: 'auto',
    padding: '2rem 1.5rem',
    display: 'flex',
    flexDirection: 'column'
  },
  
  mobileHeader: {
    display: 'flex',
    justifyContent: 'between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid rgba(197, 168, 128, 0.2)'
  },
  
  mobileCloseBtn: {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    color: '#0F172A',
    fontWeight: '800',
    cursor: 'pointer'
  },

  resultItem: {
    padding: '0.85rem 1rem',
    borderRadius: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '0.4rem',
    background: '#FFFFFF',
    border: '1px solid rgba(15, 23, 42, 0.03)',
  },
  itemThumb: {
    width: '46px',
    height: '46px',
    objectFit: 'cover',
    borderRadius: '10px',
    background: '#f1f5f9',
  },
  itemTitle: {
    fontSize: '0.95rem',
    fontWeight: '700',
    color: '#0F172A',
    margin: 0,
    fontFamily: "'Playfair Display', serif" // Binds Google Typography assets
  },
  itemMeta: {
    fontSize: '0.72rem',
    color: '#C5A880',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginTop: '2px',
    display: 'block'
  },
  noResults: {
    padding: '3rem 1.5rem',
    textAlign: 'center',
    color: '#64748B',
    fontSize: '0.95rem',
    fontWeight: '500',
  }
};

function SearchDropdown({ query, onClose }) {
  // State hook configuration checking live device viewport dimension scales
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!query.trim()) return null;

  // Multi-parameter filtering (Title, Category Format, Internal Notes String mapping)
  const filtered = STATIC_PRODUCTS ? STATIC_PRODUCTS.filter(item => {
    const searchString = query.toLowerCase().trim();
    const matchesTitle = item.title && item.title.toLowerCase().includes(searchString);
    const matchesType = item.type && item.type.toLowerCase().includes(searchString);
    
    const notesString = [
      ...(item.topNotes || []),
      ...(item.heartNotes || []),
      ...(item.baseNotes || [])
    ].join(' ').toLowerCase();
    
    const matchesNotes = notesString.includes(searchString);
    return matchesTitle || matchesType || matchesNotes;
  }) : [];

  // Inner list row map component rendering node loops
  const renderResultsList = () => (
    <>
      <style>{`
        .search-result-row:hover { 
          background: rgba(197, 168, 128, 0.08) !important; 
          border-color: rgba(197, 168, 128, 0.4) !important;
          transform: translateY(-2px); 
          box-shadow: 0 6px 12px rgba(165, 155, 135, 0.08);
        }
      `}</style>
      
      {filtered.length > 0 ? (
        filtered.map((item) => {
          const targetThumb = item.whiteBgImageUrl || item.imageUrl || item.image || item.designerBgImageUrl;
          
          return (
            <div
              key={item._id || item.id}
              className="search-result-row"
              style={styles.resultItem}
              onClick={() => {
                // Reroutes down to category layout files passing selection ID variables
                navigate(`/collection/${item.type}`, { 
                  state: { targetProductId: item._id || item.id } 
                });
                onClose();
              }}
            >
              <img 
                src={
                  targetThumb && (targetThumb.startsWith('http') || targetThumb.startsWith('/'))
                    ? targetThumb
                    : `/${targetThumb}`
                } 
                alt={item.title} 
                style={styles.itemThumb}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = "<div style='width:46px; height:46px; border-radius:10px; background:#f8fafc; display:flex; align-items:center; justify-content:center; font-size:1rem; border:1px solid rgba(197,168,128,0.15)'>✨</div>";
                }}
              />
              <div>
                <h5 style={styles.itemTitle}>{item.title}</h5>
                <span style={styles.itemMeta}>Collection: {item.type}</span>
              </div>
            </div>
          );
        })
      ) : (
        <div style={styles.noResults}>
          <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>🍃</span>
          <span className="text-muted d-block font-sans fw-medium">No fragrance found for "{query}"</span>
          <small className="text-muted small mt-1 d-block">Try searching for notes like 'Oud', 'Musk' or format '6ML'</small>
        </div>
      )}
    </>
  );

  // ⚡️ ADAPTIVE PORTAL FRAME DIRECTION
  if (isMobile) {
    return (
      <div style={styles.mobileOverlay}>
        <div style={styles.mobileHeader}>
          <div>
            <h4 style={{ margin: 0, fontWeight: 900, color: '#0F172A', fontFamily: "'Cinzel', serif", fontSize: '1.2rem' }}>SEARCH EXPLORER</h4>
            <small className="text-muted small text-uppercase tracking-wider">Matching Curation Archive Slots</small>
          </div>
          <button style={styles.mobileCloseBtn} onClick={onClose} aria-label="Close search overlay">×</button>
        </div>
        <div style={{ flex: 1, paddingBottom: '3rem' }}>
          {renderResultsList()}
        </div>
      </div>
    );
  }

  // Fallback default output renders premium desktop layout drop-frame panel
  return (
    <div style={styles.desktopDropdown}>
      {renderResultsList()}
    </div>
  );
}

export default SearchDropdown;
