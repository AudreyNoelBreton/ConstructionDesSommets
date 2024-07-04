import React, { useState, useEffect } from "react";

import "./temoignages.scss";

const Temoignages = ({ temoignages }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const goToSlide = (index) => {
    setActiveIndex(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === temoignages.length - 1) {
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
  }, [activeIndex, temoignages.length]);

  return (
    <div className="temoignages">
      <div className="temoignages__title">Temoignages</div>
      <div
        className={`temoignages__container ${isAnimating ? "animating" : ""}`}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {temoignages.map((tem, index) => (
          <div className="temoignages__item" key={index}>
            <div className="temoignages__text">{tem.text}</div>
            <div className="temoignages__text">{tem.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Temoignages;
