
import React, { useMemo, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
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
  FaClock,
  FaTimes,
} from 'react-icons/fa';

function ProductGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const itemsPerPage = 8;

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

  const changePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getProductImage = (product) => {
    const image =
      product?.whiteBgImageUrl ||
      product?.designerBgImageUrl ||
      product?.imageUrl ||
      product?.image;

    if (!image) return '';

    return image.startsWith('http') || image.startsWith('/')
      ? image
      : `/${image}`;
  };

  const categories = ['all', '100GM', '6ML'];

  return (
    <main className="product-gallery-page">

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

              <div className="gallery-heading-tag">
                AL-KAUSAR
              </div>

              <h1 className="gallery-heading-text">
                Fragrance Gallery
              </h1>

            </div>

            <p className="gallery-heading-subtitle">
              DISCOVER YOUR SIGNATURE FRAGRANCE
            </p>

          </div>

          <div className="gallery-social-glass">

            <span className="gallery-social-eyebrow">
              STAY CONNECTED
            </span>

            <h5 className="gallery-social-title">
              CONNECT WITH US
            </h5>

            <p className="gallery-social-description">
              Follow our fragrance journey and stay connected
              with AL-KAUSAR.
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

      <section className="gallery-content-section">

        <Container fluid className="gallery-content-container">

          {/* SECTION INTRO */}

          <div className="gallery-section-intro">

            {/* <span className="gallery-eyebrow">
              THE AL-KAUSAR COLLECTION
            </span>

            <h2 className="gallery-section-title">
              Explore Our <span>Fragrances</span>
            </h2>

            <div className="gallery-title-divider">
              <span></span>
              ✧
              <span></span>
            </div>

            <p className="gallery-section-description">
              Discover a curated selection of distinctive fragrances,
              crafted to leave a lasting impression.
            </p> */}

          </div>

          {/* SEARCH */}

          <div className="gallery-search-wrapper">

            <FaSearch className="gallery-search-icon" />

            <input
              type="text"
              placeholder="Search your favourite fragrance..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="gallery-search-input"
              aria-label="Search fragrances"
            />

            {searchQuery && (
              <button
                type="button"
                className="gallery-search-clear"
                onClick={() => {
                  setSearchQuery('');
                  setCurrentPage(1);
                }}
                aria-label="Clear search"
              >
                <FaTimes />
              </button>
            )}

          </div>

          {/* FILTERS */}

          <div className="gallery-filter-area">

            <div className="gallery-filter-heading">
              <span>EXPLORE BY COLLECTION</span>
              <small>{filtered.length} FRAGRANCES</small>
            </div>

            <div className="gallery-filter-buttons">

              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`gallery-filter-btn ${
                    selectedCategory === category ? 'active' : ''
                  }`}
                  onClick={() => handleFilterChange(category)}
                >
                  {category === 'all' ? 'All Fragrances' : category}
                </button>
              ))}

            </div>

          </div>

          {/* PRODUCT GRID */}

          {currentItems.length > 0 ? (

            <Row className="gallery-product-grid">

              {currentItems.map((product) => {

                const isHovered = hoveredCardId === product._id;

                return (

                  <Col
                    key={product._id}
                    xs={12}
                    sm={6}
                    lg={3}
                    className="gallery-product-column"
                  >

                    <Card
                      className={`gallery-product-card ${
                        isHovered ? 'is-hovered' : ''
                      }`}
                      onMouseEnter={() => setHoveredCardId(product._id)}
                      onMouseLeave={() => setHoveredCardId(null)}
                      onClick={() => openProductModal(product)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                          openProductModal(product);
                        }
                      }}
                    >

                      <div className="gallery-product-image-wrap">

                        <span className="gallery-product-badge">
                          {product.type}
                        </span>

                        <img
                          src={product.whiteBgImageUrl || product.designerBgImageUrl || product.imageUrl || product.image}
                          alt={product.title}
                          className="gallery-product-image"
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.onerror = null;
                            event.currentTarget.src =
                              '/src/assets/Images/Logo/Al_Kausar_Logo.png';
                            event.currentTarget.style.objectFit = 'contain';
                            event.currentTarget.style.padding = '35px';
                          }}
                        />

                        <div className="gallery-product-image-overlay">
                          <span>
                            VIEW FRAGRANCE <FaArrowRight />
                          </span>
                        </div>

                      </div>

                      <Card.Body className="gallery-product-body">

                        {/* <span className="gallery-product-category">
                          AL-KAUSAR · {product.type}
                        </span> */}

                        <h3 className="gallery-product-title">
                          {product.title}
                        </h3>

                        {/* <div className="gallery-product-meta">
                          <span>
                            <FaClock />
                            Longevity
                          </span>

                          <strong>
                            {product.longevity || 'Long Lasting'}
                          </strong>
                        </div>

                        <div className="gallery-product-view">
                          DISCOVER FRAGRANCE
                          <span><FaArrowRight /></span>
                        </div> */}

                      </Card.Body>

                    </Card>

                  </Col>

                );

              })}

            </Row>

          ) : (

            <div className="gallery-empty-state">

              <div className="gallery-empty-icon">
                <FaSearch />
              </div>

              <span className="gallery-eyebrow">
                NO MATCHES FOUND
              </span>

              <h3>No Fragrances Found</h3>

              <p>
                We couldn't find a fragrance matching your search.
                Try another name or explore all collections.
              </p>

              <button
                type="button"
                className="gallery-reset-btn"
                onClick={() => {
                  setSearchQuery('');
                  handleFilterChange('all');
                }}
              >
                Explore All Fragrances
                <FaArrowRight />
              </button>

            </div>

          )}

          {/* PAGINATION */}

          {totalPages > 1 && (

            <div className="gallery-pagination">

              <div className="gallery-pagination-line">
                <span></span>
              </div>

              <div className="gallery-pagination-controls">

                <button
                  type="button"
                  className="gallery-page-arrow"
                  disabled={currentPage === 1}
                  onClick={() =>
                    changePage(Math.max(currentPage - 1, 1))
                  }
                  aria-label="Previous page"
                >
                  <FaArrowLeft />
                </button>

                <div className="gallery-page-numbers">

                  {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1;

                    return (
                      <button
                        type="button"
                        key={page}
                        className={`gallery-page-number ${
                          currentPage === page ? 'active' : ''
                        }`}
                        onClick={() => changePage(page)}
                        disabled={currentPage === page}
                      >
                        {String(page).padStart(2, '0')}
                      </button>
                    );
                  })}

                </div>

                <span className="gallery-page-mobile">
                  {String(currentPage).padStart(2, '0')}
                  {' / '}
                  {String(totalPages).padStart(2, '0')}
                </span>

                <button
                  type="button"
                  className="gallery-page-arrow"
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    changePage(Math.min(currentPage + 1, totalPages))
                  }
                  aria-label="Next page"
                >
                  <FaArrowRight />
                </button>

              </div>

            </div>

          )}

        </Container>

      </section>

      {/* =========================================
          PRODUCT DETAILS MODAL
      ========================================= */}

      <Modal
        show={showModal}
        onHide={closeProductModal}
        size="lg"
        centered
        contentClassName="gallery-product-modal"
        dialogClassName="gallery-modal-dialog"
      >

        {activeProduct && (

          <>

            <button
              type="button"
              className="gallery-modal-close"
              onClick={closeProductModal}
              aria-label="Close product details"
            >
              <FaTimes />
            </button>

            <Modal.Body className="gallery-modal-body">

              <Row className="align-items-center g-4">

                <Col xs={12} md={5}>

                  <div className="gallery-modal-image-wrap">

                    <img
                      src={getProductImage(activeProduct)}
                      alt={activeProduct.title}
                      className="gallery-modal-image"
                    />

                    <span className="gallery-modal-image-label">
                      AL-KAUSAR
                    </span>

                  </div>

                </Col>

                <Col xs={12} md={7}>

                  <div className="gallery-modal-details">

                    <span className="gallery-eyebrow">
                      {activeProduct.type} COLLECTION
                    </span>

                    <h2 className="gallery-modal-title">
                      {activeProduct.title}
                    </h2>

                    <div className="gallery-modal-divider">
                      <span></span>
                      ✧
                      <span></span>
                    </div>

                    <p className="gallery-modal-description">
                      {activeProduct.description ||
                        'Discover the distinctive character of this AL-KAUSAR fragrance, thoughtfully selected for an unforgettable scent experience.'}
                    </p>

                    <div className="gallery-modal-notes">

                      {[
                        {
                          title: 'Top Elements',
                          notes: activeProduct.topNotes,
                        },
                        {
                          title: 'Heart Core',
                          notes: activeProduct.heartNotes,
                        },
                        {
                          title: 'Base Anchors',
                          notes: activeProduct.baseNotes,
                        },
                      ].map((group) => (
                        group.notes?.length > 0 && (
                          <div
                            className="gallery-note-group"
                            key={group.title}
                          >
                            <h6>{group.title}</h6>

                            <div className="gallery-note-list">
                              {group.notes.map((note, index) => (
                                <span key={`${note}-${index}`}>
                                  {note}
                                </span>
                              ))}
                            </div>
                          </div>
                        )
                      ))}

                    </div>

                    <div className="gallery-modal-performance">
                      <span>
                        <FaClock />
                        Performance Profile
                      </span>

                      <strong>
                        {activeProduct.longevity || 'Long Lasting'}
                      </strong>
                    </div>

                    <button
                      type="button"
                      className="gallery-modal-done"
                      onClick={closeProductModal}
                    >
                      CONTINUE EXPLORING
                      <FaArrowRight />
                    </button>

                  </div>

                </Col>

              </Row>

            </Modal.Body>

          </>

        )}

      </Modal>

    </main>
  );
}

export default ProductGallery;
