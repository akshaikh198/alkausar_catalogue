import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  dropdownBox: {
    position: 'absolute',
    top: '45px',
    right: '0',
    width: '320px',
    maxHeight: '400px',
    overflowY: 'auto',
    background: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(25px) saturate(150%)',
    border: '1px solid rgba(255, 255, 255, 0.7)',
    borderRadius: '20px',
    boxShadow: '0 10px 40px rgba(15, 23, 42, 0.08)',
    zIndex: 2000,
    padding: '0.75rem',
  },
  resultItem: {
    padding: '0.75rem 1rem',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '0.25rem',
  },
  itemThumb: {
    width: '40px',
    height: '40px',
    objectFit: 'cover',
    borderRadius: '8px',
    background: '#e2e8f0',
  },
  itemTitle: {
    fontSize: '0.92rem',
    fontWeight: '700',
    color: '#0F172A',
    margin: 0,
  },
  itemMeta: {
    fontSize: '0.75rem',
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  noResults: {
    padding: '1.5rem',
    textAlign: 'center',
    color: '#64748B',
    fontSize: '0.9rem',
    fontWeight: '500',
  }
};

// Global static master data index for seamless routing lookups
import product1 from '../assets/Images/Banner/w1.png';
import product2 from '../assets/Images/Banner/w2.png';
import product3 from '../assets/Images/Banner/w3.png';

const catalogDataset = [
  { id: 1, type: 'attars', image: product1, title: 'Majestic Oud Concentrate', notes: 'oud, rose, saffron, amber' },
  { id: 2, type: 'attars', image: product3, title: 'Royal Dehn Al Oud', notes: 'oud, leather, earth, tobacco' },
  { id: 3, type: 'perfumes', image: product2, title: 'Royal White Musk Spray', notes: 'musk, lily, jasmine, vanilla' },
  { id: 4, type: 'perfumes', image: product1, title: 'Imperial Saffron Spray', notes: 'saffron, bergamot, rose, oud' },
  { id: 5, type: 'bakhoor', image: product3, title: 'Pure Cambodi Bakhoor', notes: 'agarwood, frankincense, amber, oud' }
];

function SearchDropdown({ query, onClose, onSelectProduct }) {
  if (!query.trim()) return null;
  const navigate = useNavigate();
  // Filter items matching title or raw aromatic compound notes elements strings
  const filtered = catalogDataset.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.notes.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={styles.dropdownBox} className="animate-3d-glass">
      {filtered.length > 0 ? (
        filtered.map((item) => (
          <div
            key={item.id}
            style={styles.resultItem}
            className="search-result-row"
            onClick={() => {
              navigate(`/collection/${item.type}`);
              onClose();
            }}
          >
            {/* Embedded internal structural CSS behavior loop */}
            <style>{`.search-result-row:hover { background: rgba(15, 23, 42, 0.04) !important; transform: translateY(-1px); }`}</style>
            
            <img src={item.image} alt={item.title} style={styles.itemThumb} />
            <div>
              <h5 style={styles.itemTitle}>{item.title}</h5>
              <span style={styles.itemMeta}>{item.type}</span>
            </div>
          </div>
        ))
      ) : (
        <div style={styles.noResults}>
          <span>🍃 No specific formula or note found</span>
        </div>
      )}
    </div>
  );
}

export default SearchDropdown;
