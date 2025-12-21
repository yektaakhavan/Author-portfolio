import React from "react";

const PublishDate = ({ publishDate }) => {
  const formattedDate = new Date(publishDate).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="publish-date">
      {formattedDate}
    </div>
  );
};

export default PublishDate;




