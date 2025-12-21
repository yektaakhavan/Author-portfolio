import React from "react";
import {
  BsInfoCircleFill,
  BsHeadset, 
  BsBookmarksFill, 
  BsBookHalf,
  BsPersonLinesFill, 
} from "react-icons/bs";
import "./PageHeader.css";

const iconComponents = {
  about: <BsInfoCircleFill />,
  contact: <BsHeadset />,
  articles: <BsBookmarksFill />,
  books: <BsBookHalf />,
  default: <BsPersonLinesFill />,
};

const PageHeader = ({ title, type = "default", primaryColor = "#0f1258" }) => {
  const icon = iconComponents[type] || iconComponents.default;

  return (
    <div className="page-header-container text-center mb-5">
      {type && (
        <div className="header-icon-wrapper d-inline-flex mb-3">
          {React.cloneElement(icon, {
            className: "header-icon",
            style: { color: primaryColor },
          })}
        </div>
      )}

      <h2 className="page-header-title">
        <span
          className="border-bottom border-3 pb-2"
          style={{ borderColor: primaryColor }}
        >
          {title}
        </span>
      </h2>
    </div>
  );
};

export default PageHeader;
