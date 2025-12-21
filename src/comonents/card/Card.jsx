import { Col, Container, Row } from "react-bootstrap";
import GradientButton from "../button/GradientBtn";
function CardItem({ title, content, img, buttonLink, buttonText, alt }) {
  return (
    <>
      <Container>
        <div className="title">
          <p className="p-title h2">{title}</p>
        </div>
        <Row className="info mb-5">
          <Col className="about-desc" style={{ textAlign: "justify" }} lg={6}>
            {content}
          </Col>
          <Col lg={6} style={{ textAlign: "left" }}>
            <img
              src={img}
              // loading="lazy"
              alt={alt}
              className="img-fluid"
              data-aos="fade-left"
              style={{
                width: "400px",
                height: "400px",
                borderRadius: "10px",
              }}
            />
          </Col>
          {buttonText && buttonLink && (
            <div className="text-center">
              <GradientButton to={buttonLink} text={buttonText} />
            </div>
          )}
        </Row>
      </Container>
    </>
  );
}
export default CardItem;
