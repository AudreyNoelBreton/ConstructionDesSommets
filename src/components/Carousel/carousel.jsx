import React, { useState, useEffect } from "react";

import "./carousel.scss";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === images.length - 1) {
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
  }, [activeIndex, images.length]);

  return (
    <div className="carousel">
      <div className="carousel__text-overlay">
        ENTREPRENEUR GÉNÉRAL EN CONSTRUCTION
      </div>
      <div
        className={`carousel__container ${isAnimating ? "animating" : ""}`}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="carousel__item" key={index}>
            <img src={img.src} alt={`carousel ${index}`} />
          </div>
        ))}
      </div>
      <div className="carousel__dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel__dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
