import { useEffect, useState } from "react";
import "./TopButton.css";

const TopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 20) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="myBtn"
      onClick={scrollToTop}
      title="Go to top"
      style={{ display: visible ? "block" : "none" }}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default TopButton;
