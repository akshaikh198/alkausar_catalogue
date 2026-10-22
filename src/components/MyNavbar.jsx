import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/Images/Logo/Al_Kausar_Logo.png';

const styles = {
  navbar: {
    background: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(20px) saturate(190%) brightness(105%)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
    boxShadow: '0 8px 32px 0 rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
    padding: '0.6rem 1rem',
    zIndex: 1100,
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  brandImg: {
    objectFit: 'contain',
    filter: 'drop-shadow(0 2px 8px rgba(15, 23, 42, 0.05))',
    transition: 'transform 0.3s ease',
  },
  navLinkContainer: {
    position: 'relative',
    padding: '0.5rem 0',
    margin: '0 0.75rem',
  },
  navLink: (isActive, isHovered) => ({
    fontWeight: '700',
    fontSize: '0.92rem',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    color: isActive ? '#0F172A' : isHovered ? '#475569' : '#64748B',
    padding: '0.4rem 0.6rem',
    borderRadius: '10px',
    backgroundColor: isActive ? 'rgba(15, 23, 42, 0.03)' : 'transparent',
    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
  }),
  underline: (isActive, isHovered) => ({
    position: 'absolute',
    bottom: '-2px',
    left: '0.6rem',
    right: '0.6rem',
    height: '2.5px',
    borderRadius: '2px',
    background: 'linear-gradient(90deg, #0F172A 0%, #475569 100%)',
    opacity: isActive ? 1 : isHovered ? 0.4 : 0,
    transform: isActive || isHovered ? 'scaleX(1)' : 'scaleX(0)',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  }),
  dropdownMenu: {
    background: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(30px) saturate(190%)',
    border: '1px solid rgba(212, 175, 55, 0.25)', // Royal gold structural binding rim
    borderRadius: '24px',
    boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
    padding: '0.75rem',
    marginTop: '15px',
    minWidth: '240px',
    transformOrigin: 'top center',
  },
  dropdownItem: (isActive, isHovered) => ({
    fontWeight: '700',
    fontSize: '0.88rem',
    letterSpacing: '0.3px',
    padding: '0.7rem 1.2rem',
    borderRadius: '16px',
    color: isActive ? '#0F172A' : isHovered ? '#D4AF37' : '#475569', // Gold text highlights on hover
    backgroundColor: isActive ? 'rgba(212, 175, 55, 0.08)' : isHovered ? 'rgba(15, 23, 42, 0.02)' : 'transparent',
    borderLeft: isActive ? '3px solid #D4AF37' : isHovered ? '3px solid rgba(212, 175, 55, 0.3)' : '3px solid transparent',
    transform: isHovered ? 'translateX(4px)' : 'translateX(0)', // Interactive sliding nudge effect
    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }),
  searchContainer: {
    position: 'relative',
    marginLeft: '1rem',
  },
  searchField: {
    borderRadius: '14px',
    padding: '0.6rem 1.2rem 0.6rem 2.4rem',
    width: '230px',
    fontSize: '0.88rem',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    border: '1px solid rgba(15, 23, 42, 0.08)',
    color: '#0F172A',
    fontWeight: '500',
    boxShadow: 'none',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  searchIcon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#94A3B8',
    pointerEvents: 'none',
    fontSize: '0.9rem',
  },
  mobileSearchTrigger: {
    background: 'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(15, 23, 42, 0.08)',
    borderRadius: '12px',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    marginRight: '0.5rem',
    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.02)',
  },
  mobileSearchPanel: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(25px) saturate(180%)',
    borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
    padding: '1rem',
    zIndex: 2000,
    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    animation: 'slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  }
};

function UpgradedNavLink({ to, children }) {
  const location = useLocation();
  const [hovered, setHovered] = useState(false);
  const isActive = location.pathname === to;

  return (
    <div 
      style={styles.navLinkContainer} 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
    >
      <Nav.Link as={Link} to={to} style={styles.navLink(isActive, hovered)}>
        {children}
      </Nav.Link>
      <div style={styles.underline(isActive, hovered)} />
    </div>
  );
}

function MyNavbar({ onSearchChange, searchQuery, children }) {
  const location = useLocation();
  const [dropdownHovered, setDropdownHovered] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  // Monitor layout breakpoint updates dynamically to shift modes cleanly
  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 992;
      setIsMobile(mobileView);
      if (!mobileView) setShowMobileSearch(false); // Dismiss overlay on viewport expansions
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar expand="lg" sticky="top" style={styles.navbar}>
        <Container fluid className="px-lg-4 align-items-center">
          <Navbar.Brand 
            as={Link} 
            to="/" 
            className="d-flex align-items-center m-0"
            onMouseEnter={(e) => e.currentTarget.firstChild.style.transform = 'scale(1.04)'}
            onMouseLeave={(e) => e.currentTarget.firstChild.style.transform = 'scale(1)'}
          >
            <img src={logo} alt="Al Kausar Logo" width={55} height={55} style={styles.brandImg} />
          </Navbar.Brand>
          
          {/* Action cluster layout grouped container for compact device modes */}
          <div className="d-flex align-items-center order-lg-3">
            {isMobile && (
              <button 
                onClick={() => setShowMobileSearch(true)} 
                style={styles.mobileSearchTrigger}
                aria-label="Open Search"
              >
                🔍
              </button>
            )}
            <Navbar.Toggle aria-controls="navbarScroll" className="border-0 shadow-none p-2" />
          </div>
          
          <Navbar.Collapse id="navbarScroll" className="justify-content-between order-lg-2">
            <Nav className="mx-auto my-2 my-lg-0 align-items-lg-center" navbarScroll>
              <UpgradedNavLink to="/">Home</UpgradedNavLink>
              <UpgradedNavLink to="/about">About</UpgradedNavLink>
              
                          {/* Custom Luxury Collections Dropdown */}
            <div 
              onMouseEnter={() => setDropdownHovered(true)}
              onMouseLeave={() => setDropdownHovered(false)}
              className="nav-item dropdown"
              style={styles.navLinkContainer}
            >
              <NavDropdown 
                title={
                  <span style={{ 
                    fontWeight: '700', 
                    fontSize: '0.92rem', 
                    letterSpacing: '0.5px', 
                    textTransform: 'uppercase', 
                    color: dropdownHovered ? '#0F172A' : '#64748B',
                    transition: 'color 0.2s ease'
                  }}>
                    Collections
                  </span>
                } 
                id="luxuryDropdown"
                show={dropdownHovered}
              >
                <div style={styles.dropdownMenu} className="animate-royal-dropdown">
                  <DropdownHoverItem to="/collection/attars" activePath={location.pathname}>
                    👑 Attars Concentrate
                  </DropdownHoverItem>
                  <DropdownHoverItem to="/collection/perfumes" activePath={location.pathname}>
                    ✨ Perfume Sprays
                  </DropdownHoverItem>
                  <div style={{ height: '1px', background: 'rgba(212, 175, 55, 0.1)', margin: '0.5rem 0.6rem' }} />
                  <DropdownHoverItem to="/collection/bakhoor" activePath={location.pathname}>
                    🪵 Sweet Bakhoor
                  </DropdownHoverItem>
                </div>
              </NavDropdown>
            </div>

              
              <UpgradedNavLink to="/gallery">Gallery</UpgradedNavLink>
              <UpgradedNavLink to="/contact">Contact</UpgradedNavLink>
            </Nav>
            
            {/* Desktop Layout Search Module - Hidden completely on mobile breakpoints */}
            {!isMobile && (
              <div style={styles.searchContainer}>
                <span style={styles.searchIcon}>🔍</span>
                <Form className="d-flex align-items-center">
                  <Form.Control
                    type="search"
                    placeholder="Search fragrance node..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    style={styles.searchField}
                    onFocus={(e) => {
                      e.target.style.width = '270px';
                      e.target.style.backgroundColor = '#FFFFFF';
                      e.target.style.borderColor = 'rgba(15, 23, 42, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.width = '230px';
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                      e.target.style.borderColor = 'rgba(15, 23, 42, 0.08)';
                    }}
                  />
                </Form>
                {children}
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* FULL VIEWPORT MOBILE GLASS OVERLAY INTERCEPTOR */}
      {isMobile && showMobileSearch && (
        <div style={styles.mobileSearchPanel}>
          <div style={{ position: 'relative', flex: 1 }}>
            {/* Anchor container mounting the matching search drop card views inside mobile overlays */}
            <div style={{ position: 'absolute', top: '55px', left: 0, right: 0, width: '100%', zIndex: 2500 }}>
              {children}
            </div>
          </div>
          
          <button 
            onClick={() => { setShowMobileSearch(false); onSearchChange(''); }}
            style={{
              background: 'rgba(15, 23, 42, 0.04)',
              border: 'none',
              fontWeight: '700',
              color: '#0F172A',
              fontSize: '0.85rem',
              padding: '0.5rem 1rem',
              borderRadius: '12px',
              transition: 'all 0.2s ease'
            }}
          >
            Cancel
          </button>
        </div>
      )}

      {/* Embedded slide calculation animation frame rules block */}
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </>
  );
}

// Specialized sub-component to safely manage independent dropdown link hover animations
function DropdownHoverItem({ to, children, activePath }) {
  const [hovered, setHovered] = useState(false);
  const isActive = activePath === to;

  return (
    <NavDropdown.Item 
      as={Link} 
      to={to} 
      style={styles.dropdownItem(isActive, hovered)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </NavDropdown.Item>
  );
}

/* Add this line to the existing global embedded <style> block at the bottom of MyNavbar.jsx */
/*
@keyframes scaleUpDropdown {
  from { opacity: 0; transform: scale(0.96) translateY(-10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.animate-royal-dropdown {
  animation: scaleUpDropdown 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
*/


export default MyNavbar;
