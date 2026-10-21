import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import smartBlack from '../assets/Images/whitebg/bottle/Smart_Black.jpeg';
import smartBlackHover from '../assets/Images/Edited/bottle/1.png';
import eRouge from '../assets/Images/whitebg/bottle/E_Rouge.jpeg';
import eRougeHover from '../assets/Images/Edited/bottle/E_Rouge.jpeg';
import dylanBlue from '../assets/Images/whitebg/bottle/Dylan_Blue.jpeg';
import dylanBlueHover from '../assets/Images/Edited/bottle/Dylan_Blue (2).jpeg';
import blackHeart from '../assets/Images/whitebg/bottle/Black_Heart.jpeg';
import blackHeartHover from '../assets/Images/Edited/bottle/Black_Heart.jpeg';

const features = [
  {
    id: 'smart-black',
    title: 'Smart Black Attar',
    category: 'Perfume Oil',
    desc: 'Rich, long-lasting fragrance with deep woody notes.',
    defaultImg: smartBlack,
    hoverImg: smartBlackHover,
  },
  {
    id: 'e-rouge',
    title: 'E Rouge',
    category: 'Perfume Oil',
    desc: 'A warm floral blend with a lingering rosy trail.',
    defaultImg: eRouge,
    hoverImg: eRougeHover,
  },
  {
    id: 'dylan-blue',
    title: 'Dylan Blue',
    category: 'Perfume Oil',
    desc: 'Fresh aquatic notes with a clean, modern finish.',
    defaultImg: dylanBlue,
    hoverImg: dylanBlueHover,
  },
  {
    id: 'black-heart',
    title: 'Black Heart',
    category: 'Perfume Oil',
    desc: 'Dark oud and musk wrapped in a bold signature.',
    defaultImg: blackHeart,
    hoverImg: blackHeartHover,
  },
];

function FeatureProduct() {

    const headingStyle = {
        fontSize: '3rem',
        fontWeight: '800',
        background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
        margin: '1.5rem 0',
      };

  return (
    <section className="features-section py-5">
      <Container>
        <div className="section-header text-center mb-5">
          <p className="section-kicker">Al Kausar</p>
          <h2 className="fw-bold display-6 mb-2" style={headingStyle}>Featured Collection</h2>
          <p className="text-muted mb-0">
            Hover to reveal the signature bottle in a new light.
          </p>
        </div>

        <Row className="g-4">
          {features.map((item) => (
            <Col key={item.id} xs={12} sm={6} lg={3}>
              <article className="premium-card" tabIndex={0}>
                <div className="premium-card-media">
                  <img
                    src={item.defaultImg}
                    alt={item.title}
                    className="product-img product-img--default"
                  />
                  <img
                    src={item.hoverImg}
                    alt=""
                    className="product-img product-img--hover"
                  />
                  <div className="premium-card-shine" aria-hidden="true" />
                  <div className="premium-card-overlay">
                    <span className="premium-card-badge">{item.category}</span>
                    <h3 className="premium-card-title">{item.title}</h3>
                    <p className="premium-card-desc">{item.desc}</p>
                    <span className="premium-card-cta">View details</span>
                  </div>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default FeatureProduct;
