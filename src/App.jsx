
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import {
  Helmet,
  HelmetProvider,
} from 'react-helmet-async';

import MyNavbar from 'components/MyNavbar';
import Header from 'components/Header';
import FeaturedSection from 'components/FeaturedSection';
import ProductCatalogue from 'components/ProductCatalogue';
import About from 'components/About';
import Contact from 'components/Contact';
import CategoryView from 'components/CategoryView';
import SearchDropdown from 'components/SearchDropdown';
import Testimonials from 'components/Testimonials';
import Footer from 'components/Footer';
import ProductGallery from 'components/ProductGallery';
import CTASection from 'components/CTASection';


// SEO MANAGER
function SEOManager() {
  const location = useLocation();
  const path = location.pathname;

  let pageTitle = 'Al Kausar | Luxury Artisanal Perfume Atelier';

  let pageDesc =
    'Artisanal non-alcoholic pure oils, luxury 100gm sprays, and high-end hand-rolled Agarbatti incense formulated perfectly in small batches.';

  if (path === '/about') {
    pageTitle = 'Our Heritage | Al Kausar';

    pageDesc =
      'Discover our traditional perfumery heritage, carefully selected ingredients and commitment to exceptional fragrance craftsmanship.';

  } else if (path === '/contact') {
    pageTitle = 'Boutique Concierge & Contact | Al Kausar';

    pageDesc =
      'Contact Al Kausar Perfumes for product enquiries, fragrance recommendations and customer assistance.';

  } else if (path === '/gallery') {
    pageTitle = 'The Scent Vault Catalog | Al Kausar';

    pageDesc =
      'Explore the Al Kausar fragrance gallery featuring luxury sprays, concentrated oils and premium incense.';

  } else if (path.startsWith('/collection/')) {
    const categoryName = path.split('/').pop();

    pageTitle = `${categoryName.toUpperCase()} Collection | Al Kausar`;

    pageDesc =
      `Explore premium fragrances in the Al Kausar ${categoryName} collection.`;
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>

      <meta name="description" content={pageDesc} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
    </Helmet>
  );
}


// SCROLL TO TOP ON ROUTE CHANGE
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}


// GO TO TOP BUTTON
function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button
        type="button"
        className={`ak-go-to-top ${isVisible ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Go to top"
        title="Back to Top"
        tabIndex={isVisible ? 0 : -1}
      >
        <span className="ak-go-to-top-arrow">↑</span>
      </button>

      <style>{`
        .ak-go-to-top {
          position: fixed;
          right: 28px;
          bottom: 28px;
          z-index: 9999;

          width: 48px;
          height: 48px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #D2AA56;
          color: #000000;

          border: 1px solid #D2AA56;
          border-radius: 50%;

          cursor: pointer;

          opacity: 0;
          visibility: hidden;
          pointer-events: none;

          transform: translateY(20px);

          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.18);

          transition:
            opacity 0.35s ease,
            visibility 0.35s ease,
            transform 0.35s ease,
            background 0.3s ease,
            color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .ak-go-to-top.show {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0);
        }

        .ak-go-to-top-arrow {
          font-size: 27px;
          font-weight: 500;
          line-height: 1;
          transition: transform 0.3s ease;
        }

        .ak-go-to-top:hover {
          background: #000000;
          color: #D2AA56;
          border-color: #D2AA56;
          box-shadow: 0 8px 25px rgba(210, 170, 86, 0.3);
        }

        .ak-go-to-top:hover .ak-go-to-top-arrow {
          transform: translateY(-3px);
        }

        .ak-go-to-top:focus-visible {
          outline: 3px solid #000000;
          outline-offset: 4px;
        }

        @media (max-width: 767px) {
          .ak-go-to-top {
            width: 43px;
            height: 43px;
            right: 16px;
            bottom: 18px;
          }

          .ak-go-to-top-arrow {
            font-size: 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ak-go-to-top,
          .ak-go-to-top-arrow {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}


// CONDITIONAL GLOBAL ELEMENTS
function ConditionalGlobalElements() {
  const location = useLocation();

  const excludeTestimonialsOn = ['/contact'];

  const shouldRenderTestimonials =
    !excludeTestimonialsOn.includes(location.pathname);

  return (
    <>
      {shouldRenderTestimonials && <Testimonials />}
    </>
  );
}


// HOME PAGE LAYOUT
function HomeLayout() {
  return (
    <>
      <Header />
      <FeaturedSection />
      <ProductCatalogue />
      <CTASection />
    </>
  );
}


// MAIN APP CONTENT
function MainAppContent() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <SEOManager />

      <ScrollToTop />

      <MyNavbar
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
      >
        <SearchDropdown
          query={searchQuery}
          onClose={() => setSearchQuery('')}
        />
      </MyNavbar>

      <Routes>
        <Route
          path="/"
          element={<HomeLayout />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/gallery"
          element={<ProductGallery />}
        />

        <Route
          path="/collection/:category"
          element={<CategoryView />}
        />

        <Route
          path="*"
          element={
            <main
              style={{
                padding: '8rem 0',
                textAlign: 'center',
                background: '#FFFFFF',
                minHeight: '80vh',
              }}
            >
              <h1
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontWeight: '900',
                  color: '#000000',
                }}
              >
                Page Not Found
              </h1>

              <p className="text-muted mt-3">
                The luxury collection page you are seeking
                does not reside in our archive.
              </p>

              <a
                href="/"
                className="btn mt-4"
                style={{
                  borderRadius: '0',
                  background: '#D2AA56',
                  color: '#000000',
                  padding: '12px 28px',
                  fontWeight: '600',
                }}
              >
                Return to Atelier
              </a>
            </main>
          }
        />
      </Routes>

      <ConditionalGlobalElements />

      <Footer />

      {/* FLOATING GO TO TOP BUTTON */}
      <GoToTopButton />
    </>
  );
}


// MAIN APP
function App() {
  return (
    <HelmetProvider>
      <Router>
        <MainAppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
