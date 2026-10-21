import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import Testimonials from 'components/Testimonials'; // 🆕 IMPORT TESTIMONIAL ENGINE
import Footer from 'components/Footer';

// Dynamic display manager to systematically isolate specific routes globally
function ConditionalGlobalElements() {
  const location = useLocation();
  const currentPath = location.pathname;

  // ⚡️ GLOBAL EXCLUSION LIST: Explicitly block matching administrative or contact pathways
  const excludeTestimonialsOn = ['/contact', '/adminpanel'];
  const shouldRenderTestimonials = !excludeTestimonialsOn.includes(currentPath);

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
      <MyNavbar onSearchChange={setSearchQuery} searchQuery={searchQuery}>
        <SearchDropdown query={searchQuery} onClose={() => setSearchQuery('')} />
      </MyNavbar>

      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/about" element={<About />} />
       
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection/:category" element={<CategoryView />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
      </Routes>

      {/* 🆕 MOUNT POINT: Selective routing evaluation loop rendering right above the site footer */}
      <ConditionalGlobalElements />

      <ConciergeWidget />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <MainAppContent />
    </Router>
  );
}

export default App;
