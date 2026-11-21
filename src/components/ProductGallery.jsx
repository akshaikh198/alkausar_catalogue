import React, { useMemo, useState, useEffect } from 'react';
import { STATIC_PRODUCTS } from '../data/products';
import GalleryHeaderImage from '../assets/Images/Banner/Background.png';
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaSearch,
  FaArrowRight,
  FaArrowLeft,
  FaTimes,
} from 'react-icons/fa';

function ProductGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const itemsPerPage = 12;

  const filtered = useMemo(() => {
    return STATIC_PRODUCTS.filter((p) => {
      const matchesCat =
        selectedCategory === 'all' ||
        p.type?.toUpperCase() === selectedCategory.toUpperCase();

      const query = searchQuery.toLowerCase().trim();

      const matchesSearch =
        !query ||
        (p.title || '').toLowerCase().includes(query) ||
        (p.description || '').toLowerCase().includes(query) ||
        (p.type || '').toLowerCase().includes(query);

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const currentItems = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const openProductModal = (product) => {
    setActiveProduct(product);
    setShowModal(true);
  };

  const closeProductModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showModal) {
        closeProductModal();
      }
    };
    if (showModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal]);

  const getProductImage = (product) => {
    const image =
      product?.whiteBgImageUrl ||
      product?.imageUrl ||
      product?.image;

    if (!image) return '';

    return image.startsWith('http') || image.startsWith('/')
      ? image
      : `/${image}`;
  };

  const changePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = ['all', '100GM', '6ML'];

  return (
    <main className="product-gallery-page min-h-screen bg-white">
      {/* =========================================
          GALLERY HERO — DESIGN KEPT UNCHANGED
      ========================================= */}
      <section className="gallery-hero">
        <img
          src={GalleryHeaderImage}
          alt="AL-KAUSAR Fragrance Collection"
          className="gallery-hero-image"
        />

        <div className="gallery-hero-overlay"></div>

        <div className="gallery-hero-content">
          <div className="gallery-heading-wrapper">
            <div className="gallery-heading-banner">
              <div className="gallery-heading-tag">AL-KAUSAR</div>
              <h1 className="gallery-heading-text">Fragrance Gallery</h1>
            </div>

            <p className="gallery-heading-subtitle">
              DISCOVER YOUR SIGNATURE FRAGRANCE
            </p>
          </div>

          <div className="gallery-social-glass">
            <span className="gallery-social-eyebrow">STAY CONNECTED</span>
            <h5 className="gallery-social-title">CONNECT WITH US</h5>
            <p className="gallery-social-description">
              Follow our fragrance journey and stay connected with AL-KAUSAR.
            </p>

            <div className="gallery-social-icons">
              <a
                href="https://www.instagram.com/YOUR_USERNAME/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/YOUR_USERNAME/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://wa.me/91YOURNUMBER"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.youtube.com/@YOUR_CHANNEL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>

            <div className="gallery-social-footer">
              <span></span>
              EXPERIENCE THE ART OF PERFUMERY
              <span></span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          GALLERY CONTENT
      ========================================= */}
      <section className="w-full bg-white py-8 md:py-14 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* SEARCH */}
        <div className="max-w-xl mx-auto mb-8 md:mb-10 w-full">
          <div className="relative flex items-center w-full bg-white rounded-full border border-[#D2AA56]/40 shadow-sm transition-all focus-within:border-[#D2AA56] focus-within:ring-2 focus-within:ring-[#D2AA56]/30">
            <div className="pl-5 pr-2 text-[#D2AA56] flex items-center pointer-events-none">
              <FaSearch className="text-base" />
            </div>

            <input
              type="text"
              placeholder="Search your favourite fragrance..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full py-3.5 pl-2 pr-10 text-sm text-black placeholder-gray-400 bg-transparent outline-none rounded-full"
              aria-label="Search fragrances"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setCurrentPage(1);
                }}
                className="absolute right-4 p-1 text-gray-400 hover:text-black transition-colors cursor-pointer"
                aria-label="Clear search"
              >
                <FaTimes className="text-sm" />
              </button>
            )}
          </div>
        </div>

        {/* FILTERS */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-6 border-b border-[#D2AA56]/30">
            <span className="font-serif text-xs md:text-sm tracking-widest font-bold uppercase text-black">
              EXPLORE BY COLLECTION
            </span>
            <span className="text-xs font-semibold tracking-wider text-[#A98132]">
              {filtered.length} FRAGRANCES
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleFilterChange(category)}
                  className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'bg-[#D2AA56] text-black border-[#D2AA56] shadow-md shadow-[#D2AA56]/20'
                      : 'border-[#D2AA56]/30 bg-transparent text-black hover:border-[#D2AA56] hover:bg-[#D2AA56]/10'
                  }`}
                >
                  {category === 'all' ? 'All Fragrances' : category}
                </button>
              );
            })}
          </div>
        </div>

        {/* PRODUCT GRID */}
        {currentItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {currentItems.map((product) => (
              <div
                key={product._id}
                onClick={() => openProductModal(product)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openProductModal(product);
                  }
                }}
                className="group relative flex flex-col bg-white rounded-xl border border-[#D2AA56] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#D2AA56]"
              >
                {/* Image container */}
                <div className="relative aspect-square w-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={getProductImage(product)}
                    alt={product.title}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src =
                        '/src/assets/Images/Logo/Al_Kausar_Logo.png';
                      event.currentTarget.style.objectFit = 'contain';
                      event.currentTarget.style.padding = '35px';
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Hover Overlay with 'View' text */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-5 py-2 bg-[#D2AA56] text-black font-serif text-xs md:text-sm font-bold tracking-wider uppercase shadow-md transition-transform duration-300 transform translate-y-3 group-hover:translate-y-0">
                      View
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-2 md:p-3 flex flex-col items-center text-center bg-[rgba(210,171,86,0.56)] border-t-4 border-[#ca9014] grow justify-between">
                  <h5 className="font-serif font-bold text-black">
                    {product.title}
                  </h5>
                  {product.type && (
                    <span className="text-[11px] font-normal text-[#333333] uppercase">
                      {product.type}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 px-6 text-center border border-[#D2AA56]/30 rounded-2xl bg-white max-w-xl mx-auto my-8 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#D2AA56]/15 flex items-center justify-center text-[#D2AA56] text-2xl">
              <FaSearch />
            </div>

            <span className="text-[10px] font-bold tracking-widest text-[#A98132] uppercase font-serif">
              NO MATCHES FOUND
            </span>

            <h3 className="font-serif text-2xl font-bold text-black mt-2 mb-3">
              No Fragrances Found
            </h3>

            <p className="text-sm text-gray-600 max-w-sm mx-auto mb-6 leading-relaxed">
              We couldn't find a fragrance matching your search. Try another
              name or explore all collections.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                handleFilterChange('all');
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D2AA56] hover:bg-black text-black hover:text-[#D2AA56] text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer"
            >
              Explore All Fragrances
              <FaArrowRight className="text-xs" />
            </button>
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-14 flex flex-col items-center">
            <div className="w-36 h-[1px] bg-gradient-to-r from-transparent via-[#D2AA56] to-transparent mb-6"></div>

            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => changePage(Math.max(currentPage - 1, 1))}
                className="w-10 h-10 rounded-full border border-[#D2AA56]/50 bg-white text-black flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:not-disabled:bg-[#D2AA56] hover:not-disabled:border-[#D2AA56] cursor-pointer"
                aria-label="Previous page"
              >
                <FaArrowLeft className="text-xs" />
              </button>

              <div className="hidden sm:flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, index) => {
                  const page = index + 1;
                  const isActive = currentPage === page;

                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => changePage(page)}
                      disabled={isActive}
                      className={`w-10 h-10 rounded-full font-serif text-xs font-normal transition-all flex items-center justify-center cursor-pointer border ${
                        isActive
                          ? 'bg-[#D2AA56] border-[#D2AA56] text-black shadow-sm'
                          : 'bg-white border-[#D2AA56]/50 text-black hover:bg-[#D2AA56]/20'
                      }`}
                    >
                      {String(page).padStart(2, '0')}
                    </button>
                  );
                })}
              </div>

              <span className="sm:hidden font-serif text-xs font-bold text-black px-2">
                {String(currentPage).padStart(2, '0')} /{' '}
                {String(totalPages).padStart(2, '0')}
              </span>

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() =>
                  changePage(Math.min(currentPage + 1, totalPages))
                }
                className="w-10 h-10 rounded-full border border-[#D2AA56]/50 bg-white text-black flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:not-disabled:bg-[#D2AA56] hover:not-disabled:border-[#D2AA56] cursor-pointer"
                aria-label="Next page"
              >
                <FaArrowRight className="text-xs" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* =========================================
          PRODUCT IMAGE MODAL (FULL WIDTH IMAGE ONLY)
      ========================================= */}
      {showModal && activeProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={closeProductModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#D2AA56]/40 flex items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeProductModal}
              aria-label="Close product image"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-[#D2AA56] text-black border border-[#D2AA56]/50 flex items-center justify-center transition-all duration-200 shadow-md cursor-pointer hover:rotate-90"
            >
              <FaTimes className="text-sm" />
            </button>

            {/* Full-Width Image */}
            <img
              src={getProductImage(activeProduct)}
              alt={activeProduct.title || 'Product'}
              className="w-full h-auto max-h-[85vh] object-contain block"
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default ProductGallery;