import { Container, Row, Col, Card } from "react-bootstrap";
import {
  BsTelephoneFill,
  BsEnvelopeFill,
  BsWhatsapp,
  BsTelegram,
  BsInstagram,
  BsBook,
  BsHeadset,
  BsCart,
} from "react-icons/bs";
import "./Contact.css";
import Footer from "../../comonents/footer/Footer";
import TopButton from "../../comonents/backToTopButton/TopButton";
import Scrollbar from "../../comonents/customScrollbar/Scrollbar";
import MyNavbar from "../../comonents/navbar/Navbar";
import PageHeader from "../../comonents/pageHeader/PageHeader";
import eitaaIcon from "../../assets/picture/icon/eitaa-icon.webp";

const ContactUs = () => {
  const primaryColor = "#0f1258";

  return (
    <>
      <MyNavbar />
      <Container className="my-5 contact-page">
        <PageHeader
          title="راه‌های ارتباط با ما"
          type="contact"
          primaryColor="#0f1258"
        />

        <Row className="mb-4 g-4">
          <Col md={6}>
            <Card className="h-100 contact-card border-0">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="icon-wrapper me-3"
                    style={{ backgroundColor: `${primaryColor}20` }}
                  >
                    <BsHeadset size={24} style={{ color: primaryColor }} />
                  </div>
                  <h3 className="mb-0" style={{ color: primaryColor }}>
                    پشتیبانی و مشاوره
                  </h3>
                </div>

                <div className="contact-item mb-3">
                  <BsTelephoneFill
                    className="me-2"
                    style={{ color: primaryColor }}
                  />
                  <a href="tel:09108083995" dir="ltr">
                    0910 808 3995{" "}
                  </a>
                </div>

                <div className="contact-item mb-4">
                  <BsEnvelopeFill
                    className="me-2"
                    style={{ color: primaryColor }}
                  />
                  <a href="mailto:alireza.akhavan.safaei.00@gmail.com">
                    alireza.akhavan.safaei.00@gmail.com
                  </a>
                </div>

                <p className="text-muted contact-text">
                  برای دریافت مشاوره درباره کتاب‌ها و پاسخ به سوالات خود،
                  می‌توانید در ساعات 8 تا 20 با شماره فوق تماس بگیرید یا از طریق
                  ایمیل با ما در ارتباط باشید.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 contact-card border-0">
              <Card.Body
                className="d-flex align-items-center justify-content-center p-4 visual-card"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor}20 0%, ${primaryColor}10 100%)`,
                }}
              >
                <div className="text-center">
                  <BsBook
                    size={80}
                    style={{ color: primaryColor, opacity: 0.7 }}
                  />
                  <h4 className="mt-3" style={{ color: primaryColor }}>
                    مشاوره تخصصی دیسیپلین کار
                  </h4>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={6} className="order-md-2">
            <Card className="h-100 contact-card border-0">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="icon-wrapper me-3"
                    style={{ backgroundColor: `${primaryColor}20` }}
                  >
                    <BsCart size={24} style={{ color: primaryColor }} />
                  </div>
                  <h3 className="mb-0" style={{ color: primaryColor }}>
                    خرید کتاب
                  </h3>
                </div>

                <p className="text-muted contact-text mb-4">
                  از طریق راه‌های ارتباطی زیر می‌توانید کتاب‌های مورد نظر خود را
                  سفارش دهید:
                </p>

                <div className="social-links-contact">
                  <a
                    href="https://wa.me/989108083995"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link-contact whatsapp"
                    style={{ textDecoration: "none" }}
                  >
                    <BsWhatsapp className="me-2" />
                    <div className="socialID">
                      <span>واتساپ:</span>
                      <span>09108083995</span>
                    </div>
                  </a>

                  <a
                    href="https://t.me/Akhavan_safaei"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link-contact telegram"
                  >
                    <BsTelegram className="me-2" />
                    <div className="socialID">
                      <span>تلگرام:</span>
                      <span dir="ltr">@Akhavan_safaei</span>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/work_discipline_book"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link-contact instagram"
                  >
                    <BsInstagram className="me-2" />
                    <div className="socialID">
                      <span>اینستاگرام:</span>
                      <span dir="ltr">@work_discipline_book</span>
                    </div>
                  </a>

                  <a
                    href="https://eitaa.com/Akhavan_safaei"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link-contact eitaa"
                  >
                    <img
                      src={eitaaIcon}
                      alt="Eitaa"
                      className="me-2 img-fluid social-icon-img-contact "
                    />
                    <div className="socialID">
                      <span>ایتا:</span>
                      <span dir="ltr">@Akhavan_safaei</span>
                    </div>
                  </a>
                </div>

                <p className="text-muted contact-text mt-4">
                  یا مستقیماً با شماره تماس فوق ارتباط برقرار کنید.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="order-md-1">
            <Card className="h-100 contact-card border-0">
              <Card.Body
                className="d-flex align-items-center justify-content-center p-4 visual-card"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor}10 0%, ${primaryColor}20 100%)`,
                }}
              >
                <div className="text-center">
                  <BsTelephoneFill
                    size={80}
                    style={{ color: primaryColor, opacity: 0.7 }}
                  />
                  <h4 className="mt-3" style={{ color: primaryColor }}>
                    تماس مستقیم
                  </h4>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
      <TopButton />
      <Scrollbar />
    </>
  );
};

export default ContactUs;
