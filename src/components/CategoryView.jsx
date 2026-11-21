import React, { useEffect, useMemo, useState } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { STATIC_PRODUCTS } from '../data/products';
import alKausarLogo from '../assets/Images/Logo/Al_Kausar_Logo.png';
import GalleryHeaderImage from '../assets/Images/Banner/Background.png';
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

const PRODUCTS_PER_PAGE = 12;

const getProductId = (product) => String(product._id || product.id || '');

const getProductImage = (product, preferDesigner = false) => {
  const image = preferDesigner
    ? product.whiteBgImageUrl ||
      product.imageUrl ||
      product.image
    : product.whiteBgImageUrl ||
      product.imageUrl ||
      product.image ||
      product.designerBgImageUrl;

  if (!image || typeof image !== 'string') return '';

  return image.startsWith('http') || image.startsWith('/')
    ? image
    : `/${image}`;
};

function ProductImage({ src, alt, className }) {
  const [imageSrc, setImageSrc] = useState(src || alKausarLogo);

  useEffect(() => {
    setImageSrc(src || alKausarLogo);
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt || 'Al Kausar Perfume'}
      className={className}
      loading="lazy"
      onError={() => {
        if (imageSrc !== alKausarLogo) {
          setImageSrc(alKausarLogo);
        }
      }}
    />
  );
}

function CategoryView() {
  const { category } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const items = useMemo(() => {
    const normalizedCategory = (category || '').trim().toLowerCase();

    return (STATIC_PRODUCTS || []).filter((product) => {
      return (
        product.type &&
        product.type.trim().toLowerCase() === normalizedCategory
      );
    });
  }, [category]);

  const totalPages = Math.ceil(items.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedItems = items.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
    setHoveredCardId(null);
  }, [category]);

  // Open a product automatically when navigated to from search.
  useEffect(() => {
    const targetId = location.state?.targetProductId;

    if (!targetId || items.length === 0) return;

    const productIndex = items.findIndex(
      (product) => getProductId(product) === String(targetId)
    );

    if (productIndex === -1) return;

    const foundProduct = items[productIndex];
    const targetPage = Math.floor(productIndex / PRODUCTS_PER_PAGE) + 1;

    setCurrentPage(targetPage);
    setActiveProduct(foundProduct);
    setShowModal(true);

    // Clear the navigation state so the modal does not reopen on refresh.
    navigate(location.pathname, {
      replace: true,
      state: null,
    });
  }, [location.state, location.pathname, navigate, items]);

  // Close modal on Escape key & lock body scroll when modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showModal) {
        closeProduct();
      }
    };

    if (showModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal]);

  const changePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProduct = (product) => {
    setActiveProduct(product);
    setShowModal(true);
  };

  const closeProduct = () => {
    setShowModal(false);
  };

  const renderNoteGroup = (label, notes, icon) => {
    if (!Array.isArray(notes) || notes.length === 0) return null;

    return (
      <div className="mb-4 last:mb-0">
        <h6 className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-stone-500 mb-2">
          <span className="text-amber-700">{icon}</span> {label}
        </h6>
        <div className="flex flex-wrap gap-2">
          {notes.map((note, index) => (
            <span
              className="px-3 py-1 text-xs font-medium text-stone-700 bg-[#F8F6F1] border border-stone-200/80 rounded-full"
              key={`${label}-${index}`}
            >
              {note}
            </span>
          ))}
        </div>
      </div>
    );
  };

  const modalImage = activeProduct
    ? getProductImage(activeProduct, true)
    : '';

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FCFBF9] via-[#F7F5F0] to-[#F3F1EC] text-stone-900">
      {/* Catalogue Hero */}
      <section className="relative w-full min-h-[420px] md:min-h-[480px] flex items-center overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src={GalleryHeaderImage}
          alt="AL-KAUSAR Fragrance Collection"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-900/70 to-stone-950/80" />

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* LEFT SIDE - HEADING */}
          <div className="max-w-2xl">
            <div className="inline-block border-l-2 border-amber-500 pl-4 mb-4">
              <div className="text-xs font-semibold tracking-[0.28em] uppercase text-amber-400 mb-2">
                AL-KAUSAR
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-white capitalize tracking-tight leading-tight">
                {category || 'Our'}{' '}
                <span className="italic font-light text-amber-200">
                  Collection
                </span>
              </h1>
            </div>

            <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-stone-300 mt-4 pl-4">
              DISCOVER YOUR SIGNATURE FRAGRANCE
            </p>
          </div>

          {/* RIGHT SIDE - SOCIAL GLASS CARD */}
          <div className="w-full lg:w-auto lg:min-w-[340px] max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-7 text-white shadow-2xl">
            <span className="block text-[10px] font-semibold tracking-[0.25em] uppercase text-amber-400 mb-1">
              STAY CONNECTED
            </span>

            <h5 className="text-lg font-serif tracking-wide text-white mb-2">
              CONNECT WITH US
            </h5>

            <p className="text-xs sm:text-sm text-stone-200/90 leading-relaxed mb-5">
              Follow our fragrance journey and stay connected with AL-KAUSAR.
            </p>

            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://www.instagram.com/YOUR_USERNAME/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-amber-600 hover:border-amber-500 hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaInstagram className="text-sm" />
              </a>

              <a
                href="https://www.facebook.com/YOUR_USERNAME/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-amber-600 hover:border-amber-500 hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaFacebookF className="text-sm" />
              </a>

              <a
                href="https://wa.me/91YOURNUMBER"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-amber-600 hover:border-amber-500 hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaWhatsapp className="text-sm" />
              </a>

              <a
                href="https://www.youtube.com/@YOUR_CHANNEL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-amber-600 hover:border-amber-500 hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaYoutube className="text-sm" />
              </a>
            </div>

            <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/15 text-[10px] tracking-[0.2em] uppercase text-stone-300">
              <span className="h-px flex-1 bg-white/20" />
              <span>EXPERIENCE THE ART OF PERFUMERY</span>
              <span className="h-px flex-1 bg-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalogue */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-10 border-b border-stone-200/80">
            <div>
              <span className="block text-xs font-semibold tracking-[0.22em] uppercase text-amber-700 mb-1.5">
                DISCOVER THE COLLECTION
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-stone-900">
                Fragrance{' '}
                <span className="italic font-light text-stone-600">
                  Catalogue
                </span>
              </h2>
            </div>

            <div className="inline-flex items-baseline gap-2 bg-white px-4 py-2 rounded-full border border-stone-200/80 shadow-sm self-start sm:self-auto">
              <span className="text-lg font-serif font-semibold text-amber-700">
                {items.length}
              </span>
              <small className="text-[11px] font-semibold tracking-[0.18em] uppercase text-stone-500">
                PRODUCTS
              </small>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-20 px-6 bg-white rounded-2xl border border-stone-200/80 shadow-sm max-w-xl mx-auto">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-serif text-lg tracking-widest mb-4">
                AK
              </span>
              <h3 className="text-2xl font-serif text-stone-900 mb-2">
                Nothing to discover just yet.
              </h3>
              <p className="text-sm text-stone-600">
                There are currently no products listed in the{' '}
                <strong className="font-semibold text-stone-900 capitalize">
                  {category}
                </strong>{' '}
                collection.
              </p>
            </div>
          ) : (
            <>
              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
                {paginatedItems.map((product, index) => {
                  const productId = getProductId(product);
                  const isHovered = hoveredCardId === productId;
                  const listingImage = getProductImage(product);

                  return (
                    <article
                      key={productId || `${product.title}-${index}`}
                      className={`group flex flex-col bg-white rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-600/50 ${
                        isHovered
                          ? 'border-amber-600/40 shadow-xl -translate-y-1.5'
                          : 'border-stone-200/80 shadow-sm hover:border-amber-600/40 hover:shadow-xl hover:-translate-y-1.5'
                      }`}
                      onMouseEnter={() => setHoveredCardId(productId)}
                      onMouseLeave={() => setHoveredCardId(null)}
                      onClick={() => openProduct(product)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          openProduct(product);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label={`View ${product.title || 'fragrance'} details`}
                    >
                      {/* Card Image */}
                      <div className="relative w-full bg-[#FAF9F6] overflow-hidden flex items-center justify-center">
                        <ProductImage
                          src={listingImage}
                          alt={product.title || 'Al Kausar fragrance'}
                          className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                        />

                        {/* <span className="absolute top-3.5 left-3.5 px-2.5 py-1 bg-white/90 backdrop-blur-sm border border-stone-200/70 rounded text-[10px] font-semibold tracking-[0.2em] uppercase text-stone-700">
                          AL KAUSAR
                        </span> */}

                        {/* <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-stone-900 rounded-full text-[11px] font-semibold tracking-[0.16em] uppercase shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <span>DISCOVER FRAGRANCE</span>
                            <span>↗</span>
                          </span>
                        </div> */}
                      </div>

                      {/* Card Body */}
                      <div className="flex flex-col flex-1 p-2 sm:p-3">
                        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-amber-700 mb-1">
                          {product.type || 'COLLECTION'}
                        </span>

                        <h3 className="text-lg font-serif font-medium text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">
                          {product.title || 'Untitled Fragrance'}
                        </h3>

                        <p className="text-xs sm:text-sm text-stone-500 leading-relaxed mb-2 flex-1">
                          {product.description
                            ? product.description.length > 105
                              ? `${product.description.slice(0, 105)}...`
                              : product.description
                            : 'Discover the character of this distinctive fragrance.'}
                        </p>

                        <div className="pt-3.5 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold tracking-[0.18em] uppercase text-stone-800 group-hover:text-amber-700 transition-colors">
                          <span>EXPLORE DETAILS</span>
                          <span
                            aria-hidden="true"
                            className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                          >
                            ↗
                          </span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-14 flex flex-col items-center">
                  <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent mb-8" />

                  <nav
                    aria-label="Catalogue pagination"
                    className="flex items-center gap-2"
                  >
                    <button
                      type="button"
                      disabled={currentPage === 1}
                      onClick={() => changePage(Math.max(currentPage - 1, 1))}
                      aria-label="Previous page"
                      className="w-10 h-10 rounded-full border border-stone-300 bg-white flex items-center justify-center text-stone-700 hover:border-amber-700 hover:text-amber-700 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                    >
                      <FaChevronLeft className="text-xs" />
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => {
                      const page = index + 1;
                      const isActive = currentPage === page;

                      return (
                        <button
                          key={page}
                          type="button"
                          onClick={() => changePage(page)}
                          aria-current={isActive ? 'page' : undefined}
                          className={`w-10 h-10 rounded-full text-xs font-semibold tracking-wider transition-all ${
                            isActive
                              ? 'bg-stone-900 text-amber-200 border border-stone-900 shadow-md'
                              : 'bg-white text-stone-700 border border-stone-300 hover:border-amber-700 hover:text-amber-700'
                          }`}
                        >
                          {String(page).padStart(2, '')}
                        </button>
                      );
                    })}

                    <button
                      type="button"
                      disabled={currentPage === totalPages}
                      onClick={() =>
                        changePage(Math.min(currentPage + 1, totalPages))
                      }
                      aria-label="Next page"
                      className="w-10 h-10 rounded-full border border-stone-300 bg-white flex items-center justify-center text-stone-700 hover:border-amber-700 hover:text-amber-700 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                    >
                      <FaChevronRight className="text-xs" />
                    </button>
                  </nav>

                  <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 text-[11px] tracking-[0.16em] uppercase text-stone-500">
                    <span>
                      SHOWING{' '}
                      <strong className="text-stone-900">
                        {startIndex + 1}
                      </strong>
                      {' – '}
                      <strong className="text-stone-900">
                        {Math.min(
                          startIndex + PRODUCTS_PER_PAGE,
                          items.length
                        )}
                      </strong>
                    </span>

                    <span className="text-amber-600">•</span>

                    <span>
                      TOTAL{' '}
                      <strong className="text-stone-900">
                        {items.length} PRODUCTS
                      </strong>
                    </span>

                    <span className="text-amber-600">•</span>

                    <span>
                      PAGE{' '}
                      <strong className="text-stone-900">
                        {currentPage} / {totalPages}
                      </strong>
                    </span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Product Details Modal */}
      {showModal && activeProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/70 backdrop-blur-sm animate-fadeIn"
          onClick={closeProduct}
          role="dialog"
          aria-modal="true"
          aria-labelledby="ak-product-modal-title"
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-stone-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-2 bg-white/95 backdrop-blur-sm border-b border-stone-100">
              <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-amber-700">
                THE HOUSE OF AL KAUSAR
              </span>

              <button
                type="button"
                onClick={closeProduct}
                aria-label="Close modal"
                className="w-8 h-8 rounded-full flex items-center justify-center text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-2 sm:px-8 sm:py-2">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Modal Image */}
                <div className="sm:col-span-5 ">
                  <div className="aspect-square rounded-xl bg-[#FAF9F6] flex items-center justify-center">
                    <ProductImage
                      src={modalImage}
                      alt={activeProduct.title || 'Al Kausar fragrance'}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Modal Content */}
                <div className="md:col-span-7">
                  

                  <h2
                    id="ak-product-modal-title"
                    className="text-2xl sm:text-3xl font-serif text-stone-900"
                  >
                    {activeProduct.title}
                  </h2>

                  <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-700">
                    {activeProduct.type || 'COLLECTION'}
                  </span>

                  <div className="w-14 h-0.5 bg-amber-600 my-1" />

                  <p className="text-sm text-stone-600 leading-relaxed mb-6">
                    {activeProduct.description ||
                      'Discover the character of this distinctive fragrance from Al Kausar.'}
                  </p>

                  {/* Fragrance Notes */}
                  <div className="mb-6">
                    {renderNoteGroup('TOP NOTES', activeProduct.topNotes, '✦')}
                    {renderNoteGroup('HEART NOTES', activeProduct.heartNotes, '♡')}
                    {renderNoteGroup('BASE NOTES', activeProduct.baseNotes, '◆')}
                  </div>

                  {/* Longevity */}
                  <div className="flex items-center justify-between px-4 py-3 mb-3 rounded-xl bg-[#F8F6F1] border border-stone-200/80">
                    <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-500">
                      LONGEVITY
                    </span>
                    <strong className="text-sm font-semibold text-stone-900">
                      {activeProduct.longevity || 'Not specified'}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default CategoryView;