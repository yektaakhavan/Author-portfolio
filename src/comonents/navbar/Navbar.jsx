import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import logoImage from "../../assets/picture/logo/ChLogo.webp";
import { useEffect, useState } from "react";
import { FaHome, FaUser, FaPen, FaBook, FaInfoCircle } from "react-icons/fa";

function MyNavbar() {
  const expand = "md";
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      className={`main-navbar header-fixed ${scrolled ? "scrolled" : ""} ${
        !isHomePage ? "non-home" : ""
      }`}
      expand={expand}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      fixed={isHomePage ? "top" : undefined}
    >
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">
          <img
            src={logoImage}
            alt="لوگو اخوان صفائی"
            className={`brand-logo ${scrolled ? "scrolled" : ""}`}
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${expand}`}
          className="navbar-toggler"
        />

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
          className="custom-offcanvas"
        >
          <Offcanvas.Header closeButton className="offcanvas-header">
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-${expand}`}
              className="offcanvas-title"
            >
              <img
                src={logoImage}
                alt="لوگو اخوان صفائی"
                className="offcanvas-logo"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="offcanvas-body">
            <Nav className="ms-auto">
              <NavLink
                to="/"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                <FaHome className="nav-icon" />
                صفحه اصلی
              </NavLink>

              <NavLink
                to="/about"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                <FaUser className="nav-icon" />
                درباره ما
              </NavLink>

              <NavLink
                to="/books"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                <FaBook className="nav-icon" />
                کتاب‌ها
              </NavLink>

              <NavLink
                to="/article"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                <FaPen className="nav-icon" />
                نوشته‌هایی از دل کتاب
              </NavLink>

              <NavLink
                to="/contact"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                <FaInfoCircle className="nav-icon" />
                ارتباط با ما
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
