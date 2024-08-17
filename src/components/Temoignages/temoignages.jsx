import React, { useState, useEffect } from "react";
import "./temoignages.scss";
import data from "../../data/data";

const Temoignages = () => {
  const valeur = data.sliderTemoignages.filter(
    (val) => val !== undefined && val !== null
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const goToSlide = (index) => {
    setActiveIndex(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === valeur.length - 1) {
        setIsAnimating(false);
        setActiveIndex(0);
        setTimeout(() => {
          setIsAnimating(true);
        }, 0);
      } else {
        setActiveIndex((prevIndex) => prevIndex + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, valeur.length]);

  return (
    <div className="temoignages">
      <div className="temoignages__text-overlay">Témoignages</div>
      <div
        className={`temoignages__container ${isAnimating ? "animating" : ""}`}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {valeur.map((val, index) => (
          <div className="temoignages__item" key={index}>
            <div className="temoignages__background">
              <img src={val.back} alt={`temoignages ${index}`} />
              <div className="temoignages__text">{val.text}</div>
              <div className="temoignages__name">{val.name}</div>
            </div>
          </div>
        ))}
      </div>
      {/* 
      <div className="temoignages__dots">
        {valeur.map((_, index) => (
          <span
            key={index}
            className={`temoignages__dot ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

export default Temoignages;
