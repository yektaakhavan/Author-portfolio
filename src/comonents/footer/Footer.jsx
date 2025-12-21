import React from "react";
import "./Footer.css";
import enemad from "../../assets/picture/symbols/enemad.webp";
import { Container, Row, Col } from "react-bootstrap";
import { FaHome, FaUser, FaPen, FaBook, FaInfoCircle } from "react-icons/fa";
import { FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa";
import eitaaIcon from "../../assets/picture/icon/eitaa-icon.webp";
import { Link } from "react-router-dom";

function Footer() {
  const menuItems = [
    { icon: <FaHome />, label: "صفحه اصلی", path: "/" },
    { icon: <FaUser />, label: "درباره ما", path: "/about" },
    { icon: <FaPen />, label: "نوشته هایی از دل کتاب", path: "/article" },
    { icon: <FaBook />, label: "کتاب ها", path: "/books" },
    { icon: <FaInfoCircle />, label: "ارتباط با ما", path: "/contact" },
  ];

  const socialItems = [
    {
      icon: <FaInstagram />,
      label: "Instagram",
      url: "https://instagram.com/work_discipline_book",
      color: "#E1306C",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      url: "https://wa.me/989108083995",
      color: "#25D366",
    },
    {
      icon: <FaTelegram />,
      label: "Telegram",
      url: "https://t.me/Akhavan_safaei",
      color: "#0088CC",
    },
    {
      icon: <img src={eitaaIcon} alt="Eitaa" className="social-icon-img" />,
      label: "Eitaa",
      url: "https://eitaa.com/Akhavan_safaei",
      color: "#EE7F22",
    },
  ];

  return (
    <footer className="custom-footer">
      <Container>
        <Row className="footer-content">
          {/* Quick Access */}
          <Col lg={4} className="footer-section">
            <h3 className="footer-title">دسترسی سریع</h3>
            <div className="quick-access">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="quick-link"
                  aria-label={item.label}
                >
                  {item.icon}
                  <span className="tooltip">{item.label}</span>
                </Link>
              ))}
            </div>
          </Col>

          {/* Social Networks */}
          <Col lg={4} className="footer-section">
            <h3 className="footer-title">شبکه های اجتماعی</h3>
            <div className="social-networks">
              {socialItems.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ "--hover-color": item.color }}
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </Col>

          {/* Trust Symbols */}
          <Col lg={4} className="footer-section">
            <h3 className="footer-title">نماد های اعتماد</h3>
            <div className="trust-symbols">
              <img
                src={enemad}
                alt="نماد اعتماد الکترونیکی"
                className="enemad-logo"
              />
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <div className="copyright">
          <span>©</span>
          <p>تمامی حقوق این وب سایت متعلق به تیم اخوان صفائی می باشد.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
