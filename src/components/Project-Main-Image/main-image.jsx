import React from "react";
import { useNavigate } from "react-router-dom";
import "./main-image.scss";

const MainImage = ({ mainImage, mainText, url }) => {
  const text = mainText;
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(url);
  };
  return (
    <a className="main-image" href={url} onClick={handleClick}>
      <img className="main-image__img" src={mainImage} alt="Background" />
      <div className="main-image__overlay">
        <div className="main-image__text">{text}</div>
      </div>
    </a>
  );
};

export default MainImage;
