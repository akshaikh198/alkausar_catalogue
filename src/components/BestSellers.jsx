import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

// Temporary reuse of your assets or placeholder image paths
import product1 from '../assets/Images/Banner/w1.png';
import product2 from '../assets/Images/Banner/w2.png';
import product3 from '../assets/Images/Banner/w3.png';

const styles = {
  section: {
    padding: '5rem 0',
    backgroundColor: '#ffffff',
  },
  sectionHeading: {
    fontSize: '2.5rem',
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: '0.5rem',
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  sectionSubtitle: {
    textAlign: 'center',
    color: '#64748b',
    fontSize: '1.1rem',
    marginBottom: '3.5rem',
  },
  productCard: {
    border: '1px solid #f1f5f9',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  imageWrapper: {
    position: 'relative',
    height: '280px',
    overflow: 'hidden',
    backgroundColor: '#f8fafc',
  },
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
  },
  badge: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    padding: '0.5rem 0.8rem',
    borderRadius: '20px',
    fontWeight: '600',
    fontSize: '0.75rem',
  },
  cardBody: {
    padding: '1.5rem',
  },
  category: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#94a3b8',
    fontWeight: '600',
    marginBottom: '0.25rem',
  },
  productTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '0.5rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  ratingRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    color: '#fbbf24', // Star gold color
    fontSize: '0.9rem',
    marginBottom: '1rem',
  },
  reviewCount: {
    color: '#94a3b8',
    fontSize: '0.85rem',
    marginLeft: '0.25rem',
  },
  priceRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1rem',
  },
  price: {
    fontSize: '1.4rem',
    fontWeight: '800',
    color: '#0f172a',
  },
  oldPrice: {
    fontSize: '0.95rem',
    color: '#94a3b8',
    textDecoration: 'line-through',
    marginRight: '0.5rem',
  },
  cartBtn: {
    borderRadius: '20px',
    padding: '0.5rem 1.2rem',
    fontWeight: '600',
    fontSize: '0.9rem',
    border: 'none',
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
    transition: 'transform 0.2s ease, opacity 0.2s ease',
  },
};

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      style={{
        ...styles.productCard,
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 25px rgba(0,0,0,0.08)' : '0 4px 20px rgba(0,0,0,0.02)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.imageWrapper}>
        {product.tag && (
          <Badge bg="dark" style={styles.badge}>
            {product.tag}
          </Badge>
        )}
        <Card.Img
          variant="top"
          src={product.image}
          style={{
            ...styles.productImage,
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
      </div>
      <Card.Body style={styles.cardBody}>
        <div style={styles.category}>{product.category}</div>
        <Card.Title style={styles.productTitle}>{product.title}</Card.Title>
        
        <div style={styles.ratingRow}>
          {'★'.repeat(Math.floor(product.rating))}
          <span style={styles.reviewCount}>({product.reviews})</span>
        </div>

        <div style={styles.priceRow}>
          <div>
            {product.oldPrice && <span style={styles.oldPrice}>{product.oldPrice}</span>}
            <span style={styles.price}>{product.price}</span>
          </div>
          <Button 
            style={styles.cartBtn} 
            className="shadow-sm"
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Add +
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

function BestSellers() {
  const products = [
    {
      id: 1,
      image: product1,
      category: 'Premium Attar',
      title: 'Majestic Oud Concentrate',
      rating: 5,
      reviews: 124,
      price: '$45.00',
      oldPrice: '$55.00',
      tag: 'Best Seller',
    },
    {
      id: 2,
      image: product2,
      category: 'Luxury Perfume',
      title: 'Royal White Musk Spay',
      rating: 5,
      reviews: 89,
      price: '$68.00',
      tag: 'New',
    },
    {
      id: 3,
      image: product3,
      category: 'Home Fragrance',
      title: 'Pure Cambodi Bakhoor Chips',
      rating: 4,
      reviews: 56,
      price: '$39.00',
      oldPrice: '$42.00',
      tag: 'Sale',
    },
  ];

  return (
    <section style={styles.section}>
      <Container>
        <h2 style={styles.sectionHeading}>Our Best Sellers</h2>
        <p style={styles.sectionSubtitle}>Handpicked premium blends curated by master perfumers</p>
        
        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default BestSellers;
