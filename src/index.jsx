import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // برای Modal
import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./comonents/scrollToTop/ScrollToTop.jsx";

// ✅ AOS imports and init
import AOS from "aos";
import "aos/dist/aos.css";
import { HelmetProvider } from "react-helmet-async";
AOS.init({
  duration: 300,
  easing: "ease-out-cubic",
  once: true,
});

createRoot(document.getElementById("root")).render(
  <ThemeProvider dir="rtl">
    <BrowserRouter>
      <HelmetProvider>
        <ScrollToTop />
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </ThemeProvider>
);
