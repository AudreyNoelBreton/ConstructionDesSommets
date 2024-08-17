import React from "react";
import { useNavigate } from "react-router-dom";
import "./main-image.scss";
import { FaArrowRightLong } from "react-icons/fa6";

const MainImage = ({ mainImage, mainText, url }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(url);
  };

  return (
    <a className="main-image" href={url} onClick={handleClick}>
      <img className="main-image__img" src={mainImage} alt="Background" />
      <div className="main-image__overlay">
        <div className="main-image__text">{mainText}</div>
        <FaArrowRightLong className="main-image__icon" />
      </div>
    </a>
  );
};

export default MainImage;
