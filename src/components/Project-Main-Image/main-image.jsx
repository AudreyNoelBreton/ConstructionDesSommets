import React from "react";

import "./main-image.scss";

const MainImage = ({ mainImage, mainText }) => {
  const text = mainText;
  return (
    <div className="main-image">
      <img className="main-image__img" src={mainImage} alt="Background" />
      <div className="main-image__overlay">
        <div className="main-image__text">{text}</div>
      </div>
    </div>
  );
};

export default MainImage;
