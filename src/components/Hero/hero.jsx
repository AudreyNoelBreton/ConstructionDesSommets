import React from "react";
import "./hero.scss";
import ChatWidget from "../../components/ChatWidget/chatWidget";
const Hero = ({ imagePath, text }) => {
  return (
    <div className="hero">
      <img className="hero__img" src={imagePath} alt="Background" />
      <div className="hero__overlay">
        <div className="hero__text">{text}</div>
      </div>
      <div className="hero__chatWidget">{/* <ChatWidget /> */}</div>
    </div>
  );
};

export default Hero;
