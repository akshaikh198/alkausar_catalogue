
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
import BrandHeritage from 'components/BrandHeritage';
import About from 'components/About';
import Contact from 'components/Contact';
import CategoryView from 'components/CategoryView';
import AdminPanel from 'components/AdminPanel';
import SearchDropdown from 'components/SearchDropdown';
import ConciergeWidget from 'components/ConciergeWidget';
import Testimonials from 'components/Testimonials';
import Footer from 'components/Footer';
import ProductGallery from 'components/ProductGallery';


// Replace with your real production domain.
const SITE_URL = 'https://alkausardemo.netlify.app';

const SEO_DATA = {
  '/': {
    title: 'AL-Kausar Perfumes | Premium Attars, Oud & Bakhoor',
    description:
      'Discover AL-Kausar, a luxury fragrance boutique featuring premium attars, oud concentrates, non-alcoholic perfumes and exquisite bakhoors.',
    keywords: [
      'AlKausar',
      'AL-Kausar',
      'AlKausar Perfumes',
      'AL-Kausar Perfumes',
      'Al-Kausar Luxury Fragrances',
      'Luxury Fragrance Boutique',
      'Premium Attar',
      'Pure Attar',
      'Oud Concentrate',
      'Non-Alcoholic Perfume',
      'Bakhoor Incense',
      'AL-Kausar Mumbai',
      'Premium Arabian Perfumes',
    ],
  },

  '/about': {
    title: 'About AL-Kausar | Luxury Fragrance Collection',
    description:
      'Explore the AL-Kausar fragrance philosophy and discover our world of attars, oud fragrances, premium perfumes and bakhoors.',
    keywords: [
      'About AL-Kausar',
      'Al-Kausar Fragrance Boutique',
      'Al-Kausar Signature Scents',
      'Luxury Fragrances',
      'Premium Attar Collection',
    ],
  },

  '/contact': {
    title: 'Contact AL-Kausar | Fragrance Enquiries',
    description:
      'Contact AL-Kausar for enquiries about premium attars, oud concentrates, non-alcoholic perfumes and bakhoor collections.',
    keywords: [
      'Contact AL-Kausar',
      'AL-Kausar Mumbai',
      'AlKausar Perfumes Mumbai',
      'Fragrance Enquiries',
      'Premium Perfume Enquiries',
    ],
  },
};

function getSeoData(pathname) {
  if (SEO_DATA[pathname]) {
    return SEO_DATA[pathname];
  }

  if (pathname.startsWith('/collection/')) {
    const slug = pathname.split('/').filter(Boolean).pop() || '';
    const category = decodeURIComponent(slug)
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());

    return {
      title: `${category} | AL-Kausar Luxury Fragrances`,
      description:
        `Explore the AL-Kausar ${category} catalogue. Discover our fragrance collection and contact us for product enquiries.`,
      keywords: [
        `AL-Kausar ${category}`,
        `${category} collection`,
        'AlKausar Perfumes',
        'Luxury Fragrance Boutique',
      ],
    };
  }

  if (pathname === '/adminpanel' || pathname.startsWith('/adminpanel/')) {
    return {
      title: 'Admin Panel | AL-Kausar',
      description: 'Restricted website administration area.',
      keywords: [],
      noIndex: true,
    };
  }

  return {
    title: 'Page Not Found | AL-Kausar',
    description: 'The requested page could not be found.',
    keywords: [],
    noIndex: true,
  };
}

// Dynamic SEO manager
function SEOManager() {
  const location = useLocation();
  const seo = getSeoData(location.pathname);
  const canonicalUrl = `${SITE_URL}${location.pathname}`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <Helmet>
      <title>{seo.title}</title>

      <meta name="description" content={seo.description} />

      {seo.keywords.length > 0 && (
        <meta name="keywords" content={seo.keywords.join(', ')} />
      )}

      <meta
        name="robots"
        content={
          seo.noIndex
            ? 'noindex, nofollow'
            : 'index, follow, max-image-preview:large'
        }
      />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="AL-Kausar" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonicalUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />

      <meta name="theme-color" content="#064e3b" />
      <meta name="application-name" content="AL-Kausar" />
    </Helmet>
  );
}

function ConditionalGlobalElements() {
  const location = useLocation();

  const excludeTestimonialsOn = ['/contact', '/adminpanel'];
  const shouldRenderTestimonials =
    !excludeTestimonialsOn.includes(location.pathname);

  return (
    <>
      {shouldRenderTestimonials && <Testimonials />}
    </>
  );
}

function HomeLayout() {
  return (
    <>
      <Header />
      <FeaturedSection />
      <ProductCatalogue />
      <BrandHeritage />
    </>
  );
}

function MainAppContent() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <SEOManager />

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
        <Route path="/" element={<HomeLayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<ProductGallery />} />

        <Route
          path="/collection/:category"
          element={<CategoryView />}
        />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route
          path="*"
          element={
            <main>
              <h1>Page not found</h1>
              <p>The page you are looking for does not exist.</p>
            </main>
          }
        />
      </Routes>

      <ConditionalGlobalElements />
      <ConciergeWidget />
      <Footer />
    </>
  );
}

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
