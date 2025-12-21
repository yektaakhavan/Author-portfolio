
import "./GradientBtn.css";
import React from "react";
import { Link } from "react-router-dom";

const GradientButton = ({ to, text }) => {
  return (
    <Link to={to} className="button">
      <div className="read-btn">
        {text}
        <div className="hoverEffect">
          <div></div>
        </div>
      </div>
    </Link>
  );
};

export default GradientButton;
