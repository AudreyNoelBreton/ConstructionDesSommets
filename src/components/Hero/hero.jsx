import React from "react";
import "./hero.scss";

const Hero = ({ imagePath, text }) => {
  return (
    <div className="hero">
      <img class="hero__img" src={imagePath} alt="Background" />
      <div className="hero__overlay">
        <div className="hero__text">{text}</div>
      </div>
    </div>
  );
};

export default Hero;
