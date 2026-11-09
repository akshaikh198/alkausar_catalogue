
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../assets/Images/Logo/Al_Kausar_Logo_white.png';

const styles = {
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    background: 'rgba(8, 8, 8, 0.48)',
    backdropFilter: 'blur(16px) saturate(150%)',
    WebkitBackdropFilter: 'blur(16px) saturate(150%)',
    borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
    boxShadow: '0 5px 25px rgba(0, 0, 0, 0.15)',
    padding: '0.55rem 1rem',
    zIndex: 1100,
    transition: 'all 0.3s ease',
  },

  brandImg: {
    width: '65px',
    height: '65px',
    objectFit: 'contain',
    filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))',
    transition: 'transform 0.3s ease',
  },

  navLinkContainer: {
    position: 'relative',
    padding: '0.5rem 0',
    margin: '0 0.65rem',
  },

  navLink: (isActive, isHovered) => ({
    fontWeight: '100',
    fontSize: '0.9rem',
    letterSpacing: '0.8px',
    textTransform: 'uppercase',
     background: isActive || isHovered ? 'linear-gradient(90deg, #D4AF37, #F9E29B)' : 'transparent',
    color: isActive || isHovered ? '#ffffff' : '#FFFFFF',
    borderRadius: '4px',
    padding: '0.4rem 0.6rem',
    transition: 'all 0.25s ease',
  }),

  underline: (isActive, isHovered) => ({
    position: 'absolute',
    bottom: '0',
    left: '0.6rem',
    right: '0.6rem',
    height: '2px',
    borderRadius: '2px',
    background: 'linear-gradient(90deg, #D4AF37, #F9E29B)',
    opacity: isActive ? 1 : isHovered ? 0.7 : 0,
    transform: isActive || isHovered ? 'scaleX(1)' : 'scaleX(0)',
    transition: 'all 0.3s ease',
  }),

  dropdownItem: {
    fontWeight: '100',
    fontSize: '0.88rem',
    letterSpacing: '0.5px',
    padding: '0.7rem 1.2rem',
    color: '#333333',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
  },

  searchContainer: {
    position: 'relative',
    marginLeft: '1rem',
  },

  searchField: {
    borderRadius: '30px',
    padding: '0.6rem 1.2rem 0.6rem 2.5rem',
    width: '320px',
    fontSize: '0.88rem',
    backgroundColor: 'rgba(255, 255, 255, 0.64)',
    border: '1px solid rgba(212, 175, 55, 0.4)',
    color: '#FFFFFF',
    transition: 'all 0.3s ease',
  },

  searchIcon: {
    position: 'absolute',
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#D4AF37',
    pointerEvents: 'none',
    zIndex: 1,
  },

  mobileSearchTrigger: {
    background: 'rgba(210,170,86, 0.53)',
    border: '1px solid rgba(212, 175, 55, 0.4)',
    borderRadius: '12px',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    marginRight: '0.5rem',
    color: '#D4AF37',
  },
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
      <Nav.Link
        as={Link}
        to={to}
        style={styles.navLink(isActive, hovered)}
      >
        {children}
      </Nav.Link>

      <div style={styles.underline(isActive, hovered)} />
    </div>
  );
}

function DropdownHoverItem({ to, children, activePath }) {
  const [hovered, setHovered] = useState(false);
  const isActive = activePath === to;

  return (
    <NavDropdown.Item
      as={Link}
      to={to}
      style={{
        ...styles.dropdownItem,
        color: isActive || hovered ? '#B38B25' : '#333333',
        backgroundColor: hovered ? 'rgba(212, 175, 55, 0.08)' : 'transparent',
        borderLeft: isActive
          ? '3px solid #D4AF37'
          : '3px solid transparent',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </NavDropdown.Item>
  );
}

function MyNavbar({ onSearchChange, searchQuery = '', children }) {
  const location = useLocation();

  const [dropdownHovered, setDropdownHovered] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < 992
  );

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 992;

      setIsMobile(mobileView);

      if (!mobileView) {
        setShowMobileSearch(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* NAVBAR OVER HERO SLIDER */}

      <Navbar
        expand="lg"
        className="ak-navbar-overlay"
        style={styles.navbar}
      >
        <Container fluid className="px-lg-4 align-items-center">

          {/* LOGO */}

          <Navbar.Brand
            as={Link}
            to="/"
            className="d-flex align-items-center m-0"
            onMouseEnter={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img
              src={logo}
              alt="Al-Kausar Logo"
              style={styles.brandImg}
            />
          </Navbar.Brand>

          {/* MOBILE ACTIONS */}

          <div className="d-flex align-items-center order-lg-3">

            {isMobile && (
              <button
                type="button"
                onClick={() => setShowMobileSearch(true)}
                style={styles.mobileSearchTrigger}
                aria-label="Open Search"
              >
                🔍
              </button>
            )}

            <Navbar.Toggle
              aria-controls="navbarScroll"
              className="ak-navbar-toggler border-0 shadow-none p-2"
            />

          </div>

          {/* NAVIGATION */}

          <Navbar.Collapse
            id="navbarScroll"
            className="justify-content-between order-lg-2"
          >
            <Nav className="mx-auto my-2 my-lg-0 align-items-lg-center">

              <UpgradedNavLink to="/">
                Home
              </UpgradedNavLink>

              <UpgradedNavLink to="/about">
                About
              </UpgradedNavLink>

              {/* COLLECTIONS DROPDOWN */}

              <div
                className="nav-item dropdown ak-collection-nav"
                style={styles.navLinkContainer}
                onMouseEnter={() => {
                  if (!isMobile) setDropdownHovered(true);
                }}
                onMouseLeave={() => {
                  setDropdownHovered(false);
                }}
              >
                <NavDropdown
                  title={
                    <span className="ak-dropdown-title">
                      Collections
                    </span>
                  }
                  id="luxuryDropdown"
                  show={dropdownHovered}
                  onToggle={(nextShow) => setDropdownHovered(nextShow)}
                  menuVariant="light"
                >
                  <DropdownHoverItem
                    to="/collection/100gm"
                    activePath={location.pathname}
                  >
                    100GM
                  </DropdownHoverItem>

                  <DropdownHoverItem
                    to="/collection/6ML"
                    activePath={location.pathname}
                  >
                    6ML
                  </DropdownHoverItem>

                </NavDropdown>
              </div>

              <UpgradedNavLink to="/gallery">
                Gallery
              </UpgradedNavLink>

              <UpgradedNavLink to="/contact">
                Contact
              </UpgradedNavLink>

            </Nav>

            {/* DESKTOP SEARCH */}

            {!isMobile && (
              <div style={styles.searchContainer}>

                <span style={styles.searchIcon}>
                  🔍
                </span>

                <Form
                  className="d-flex align-items-center"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <Form.Control
                    type="search"
                    placeholder="Search Products..."
                    aria-label="Search products"
                    value={searchQuery}
                    onChange={(e) => onSearchChange?.(e.target.value)}
                    style={styles.searchField}
                    onFocus={(e) => {
                      e.target.style.width = '260px';
                      e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                      e.target.style.borderColor = '#D4AF37';
                    }}
                    onBlur={(e) => {
                      e.target.style.width = '220px';
                      e.target.style.backgroundColor = 'rgba(255,255,255,0.12)';
                      e.target.style.borderColor = 'rgba(212,175,55,0.4)';
                    }}
                  />
                </Form>

                {children}

              </div>
            )}

          </Navbar.Collapse>

        </Container>
      </Navbar>

      {/* MOBILE SEARCH OVERLAY */}

      {isMobile && showMobileSearch && (
        <div className="ak-mobile-search-overlay">

          <div className="ak-mobile-search-row">

            <div className="ak-mobile-search-input">

              <span>🔍</span>

              <Form.Control
                type="search"
                autoFocus
                placeholder="Search products..."
                aria-label="Search products"
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
              />

            </div>

            <button
              type="button"
              className="ak-mobile-search-close"
              onClick={() => setShowMobileSearch(false)}
              aria-label="Close search"
            >
              Cancel
            </button>

          </div>

          <div className="ak-mobile-search-results">
            {children}
          </div>

        </div>
      )}

      {/* NAVBAR RESPONSIVE CSS */}

      <style>{`

        .ak-navbar-overlay {
          z-index: 1100;
        }

        .ak-navbar-overlay .navbar-toggler-icon {
          filter: brightness(0) invert(1);
        }

        .ak-navbar-overlay .navbar-toggler:focus {
          box-shadow: none;
        }

        .ak-navbar-overlay .nav-link {
          color: #FFFFFF;
        }

        .ak-navbar-overlay .nav-link:hover {
          color: #D4AF37;
        }

        .ak-dropdown-title {
          font-weight: 100;
          font-size: 0.9rem;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #FFFFFF;
          transition: color 0.3s ease;
        }

        .ak-dropdown-title:hover {
          color: #ffffff;
          background: linear-gradient(90deg, #D4AF37, #F9E29B);
          border-radius: 4px;
          padding: 0.6rem 0.6rem;
          box-shadow: 0 2px 8px rgba(212, 175, 55, 0.73);
        }

        .ak-navbar-overlay .dropdown-menu {
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(212,175,55,0.35);
          border-radius: 14px;
          padding: 10px;
          min-width: 200px;
          margin-top: 12px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        }

        .ak-navbar-overlay .dropdown-item {
          border-radius: 4px;
          background: transparent;
          transition: all 0.2s ease;
        }

        .ak-mobile-search-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 3000;
          padding: 12px;
          padding-top: max(12px, env(safe-area-inset-top));
          background: rgba(10,10,10,0.97);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-bottom: 1px solid rgba(212,175,55,0.3);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          animation: akSearchSlideDown 0.3s ease;
        }

        .ak-mobile-search-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ak-mobile-search-input {
          position: relative;
          flex: 1;
          min-width: 0;
        }

        .ak-mobile-search-input span {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }

        .ak-mobile-search-input .form-control {
          width: 100%;
          height: 46px;
          padding-left: 42px;
          border-radius: 12px;
          border: 1px solid rgba(212,175,55,0.4);
          font-size: 16px;
        }

        .ak-mobile-search-close {
          flex-shrink: 0;
          border: 1px solid rgba(212,175,55,0.4);
          background: rgba(212,175,55,0.12);
          color: #D4AF37;
          border-radius: 12px;
          padding: 12px 14px;
          font-weight: 100;
        }

        .ak-mobile-search-results {
          position: relative;
          width: 100%;
          margin-top: 8px;
          max-height: 65vh;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        @keyframes akSearchSlideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 991.98px) {

          .ak-navbar-overlay {
            padding: 0.45rem 0.5rem !important;
          }

          .ak-navbar-overlay .navbar-collapse {
            margin-top: 12px;
            padding: 15px;
            background: rgba(8,8,8,0.96);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(212,175,55,0.3);
            border-radius: 14px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.3);
          }

          .ak-navbar-overlay .navbar-nav {
            align-items: stretch !important;
          }

          .ak-navbar-overlay .nav-item {
            margin: 2px 0;
          }

          .ak-navbar-overlay .nav-link {
            padding: 10px 12px;
          }

          .ak-navbar-overlay .dropdown-menu {
            margin-top: 5px;
          }

          .ak-navbar-overlay .dropdown-toggle::after {
            float: right;
            margin-top: 8px;
          }

        }

        @media (max-width: 575.98px) {

          .ak-navbar-overlay .navbar-brand img {
            width: 55px !important;
            height: 55px !important;
          }

        }

        @media (prefers-reduced-motion: reduce) {
          .ak-navbar-overlay,
          .ak-mobile-search-overlay {
            animation: none !important;
            transition: none !important;
          }
        }

      `}</style>

    </>
  );
}

export default MyNavbar;
