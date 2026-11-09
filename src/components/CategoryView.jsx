
import React, { useEffect, useMemo, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import {
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { STATIC_PRODUCTS } from '../data/products';
import alKausarLogo from '../assets/Images/Logo/Al_Kausar_Logo.png';
import GalleryPageHero from './GalleryPageHero';
import GalleryHeaderImage from '../assets/Images/Banner/Background.png';
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube
} from 'react-icons/fa';

const styles = {
  section: {
    padding: '1rem 0',
    background: 'radial-gradient(circle at top, #FCFBF9 0%, #F3F1EC 100%)',
    minHeight: '100vh',
  },
}

const PRODUCTS_PER_PAGE = 6;

const getProductId = (product) => String(product._id || product.id || '');

const getProductImage = (product, preferDesigner = false) => {
  const image = preferDesigner
    ? product.designerBgImageUrl ||
      product.whiteBgImageUrl ||
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

function ProductImage({ src, alt, className, style }) {
  const [imageSrc, setImageSrc] = useState(src || alKausarLogo);

  useEffect(() => {
    setImageSrc(src || alKausarLogo);
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt || 'Al Kausar Perfume'}
      className={className}
      style={style}
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
      <div className="ak-category-note-group">
        <h6>
          <span>{icon}</span> {label}
        </h6>
        <div className="ak-category-note-list">
          {notes.map((note, index) => (
            <span className="ak-category-note" key={`${label}-${index}`}>
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
    <main className="ak-category-page">
      {/* Catalogue Hero */}
      <section className="gallery-hero">
      
        {/* BACKGROUND IMAGE */}
        <img
          src={GalleryHeaderImage}
          alt="AL-KAUSAR Fragrance Collection"
          className="gallery-hero-image"
        />
      
        {/* DARK OVERLAY */}
        <div className="gallery-hero-overlay"></div>
      
        {/* HERO CONTENT */}
        <div className="gallery-hero-content">
      
          {/* LEFT SIDE - HEADING */}
          <div className="gallery-heading-wrapper">
      
            <div className="gallery-heading-banner">
      
              <div className="gallery-heading-tag">
                AL-KAUSAR
              </div>
      
              <h1 className="gallery-heading-text">
                {category || 'Our'} <span>Collection</span>
              </h1>
      
            </div>
      
            <p className="gallery-heading-subtitle">
              DISCOVER YOUR SIGNATURE FRAGRANCE
            </p>
      
          </div>
      
          {/* RIGHT SIDE - SOCIAL GLASS CARD */}
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

      {/* Product Catalogue */}
      <section className="ak-category-catalogue">
        <Container>
          <div className="ak-category-section-heading">
            <div>
              <span className="ak-category-eyebrow">DISCOVER THE COLLECTION</span>
              <h2>Fragrance <span>Catalogue</span></h2>
            </div>

            <div className="ak-category-total">
              <span>{items.length}</span>
              <small>PRODUCTS</small>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="ak-category-empty">
              <span className="ak-category-empty-mark">AK</span>
              <h3>Nothing to discover just yet.</h3>
              <p>
                There are currently no products listed in the{' '}
                <strong>{category}</strong> collection.
              </p>
            </div>
          ) : (
            <>
              <Row className="g-4">
                {paginatedItems.map((product, index) => {
                  const productId = getProductId(product);
                  const isHovered = hoveredCardId === productId;
                  const listingImage = getProductImage(product);

                  return (
                    <Col
                      key={productId || `${product.title}-${index}`}
                      xs={12}
                      sm={6}
                      lg={4}
                    >
                      <article
                        className={`ak-product-card ${
                          isHovered ? 'is-hovered' : ''
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
                        <div className="ak-product-image-wrap">
  <ProductImage
    src={listingImage}
    alt={product.title || 'Al Kausar fragrance'}
    className="ak-product-image"
  />

  <span className="ak-product-image-label">
    AL KAUSAR
  </span>

  <div className="ak-product-overlay">
    <span>DISCOVER FRAGRANCE</span>
    <span className="ak-product-overlay-arrow">↗</span>
  </div>
</div>

                        <div className="ak-product-card-body">
                          <span className="ak-product-category">
                            {product.type || 'COLLECTION'}
                          </span>

                          <h3>{product.title || 'Untitled Fragrance'}</h3>

                          <p>
                            {product.description
                              ? product.description.length > 105
                                ? `${product.description.slice(0, 105)}...`
                                : product.description
                              : 'Discover the character of this distinctive fragrance.'}
                          </p>

                          <div className="ak-product-card-footer">
                            <span>EXPLORE DETAILS</span>
                            <span aria-hidden="true">↗</span>
                          </div>
                        </div>
                      </article>
                    </Col>
                  );
                })}
              </Row>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="ak-category-pagination">
                  <div className="ak-category-pagination-divider" />

                  <Pagination className="ak-luxury-pagination">
                    <Pagination.Prev
                      disabled={currentPage === 1}
                      onClick={() => changePage(Math.max(currentPage - 1, 1))}
                      aria-label="Previous page"
                    />

                    {Array.from({ length: totalPages }, (_, index) => {
                      const page = index + 1;

                      return (
                        <Pagination.Item
                          key={page}
                          active={currentPage === page}
                          onClick={() => changePage(page)}
                        >
                          {String(page).padStart(2, '0')}
                        </Pagination.Item>
                      );
                    })}

                    <Pagination.Next
                      disabled={currentPage === totalPages}
                      onClick={() =>
                        changePage(Math.min(currentPage + 1, totalPages))
                      }
                      aria-label="Next page"
                    />
                  </Pagination>

                  <div className="ak-category-pagination-info">
                    <span>
                      SHOWING{' '}
                      <strong>{startIndex + 1}</strong>
                      {' – '}
                      <strong>
                        {Math.min(
                          startIndex + PRODUCTS_PER_PAGE,
                          items.length
                        )}
                      </strong>
                    </span>

                    <span className="ak-category-info-separator">•</span>

                    <span>
                      TOTAL <strong>{items.length} PRODUCTS</strong>
                    </span>

                    <span className="ak-category-info-separator">•</span>

                    <span>
                      PAGE{' '}
                      <strong>
                        {currentPage} / {totalPages}
                      </strong>
                    </span>
                  </div>
                </div>
              )}
            </>
          )}
        </Container>
      </section>

      {/* Product Details Modal */}
      <Modal
        show={showModal}
        onHide={closeProduct}
        size="lg"
        centered
        contentClassName="ak-product-modal"
        dialogClassName="ak-product-modal-dialog"
        aria-labelledby="ak-product-modal-title"
      >
        {activeProduct && (
          <>
            <Modal.Header closeButton className="ak-product-modal-header">
              <span className="ak-category-eyebrow">
                THE HOUSE OF AL KAUSAR
              </span>
            </Modal.Header>

            <Modal.Body>
              <Row className="align-items-center g-4">
                <Col xs={12} md={5}>
                <div className="ak-product-modal-image-wrap">
  <ProductImage
    src={modalImage}
    alt={activeProduct.title || 'Al Kausar fragrance'}
    className="ak-product-modal-image"
  />
</div>
                </Col>

                <Col xs={12} md={7}>
                  <div className="ak-product-modal-content">
                    <span className="ak-product-category">
                      {activeProduct.type || 'COLLECTION'}
                    </span>

                    <h2 id="ak-product-modal-title">
                      {activeProduct.title}
                    </h2>

                    <div className="ak-product-modal-line" />

                    <p className="ak-product-modal-description">
                      {activeProduct.description ||
                        'Discover the character of this distinctive fragrance from Al Kausar.'}
                    </p>

                    <div className="ak-product-notes">
                      {renderNoteGroup('TOP NOTES', activeProduct.topNotes, '✦')}
                      {renderNoteGroup('HEART NOTES', activeProduct.heartNotes, '♡')}
                      {renderNoteGroup('BASE NOTES', activeProduct.baseNotes, '◆')}
                    </div>

                    <div className="ak-product-performance">
                      <span>LONGEVITY</span>
                      <strong>
                        {activeProduct.longevity || 'Not specified'}
                      </strong>
                    </div>
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

export default CategoryView;
