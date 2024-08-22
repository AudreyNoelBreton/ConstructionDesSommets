import React, { useState, useEffect } from "react";
import "./carouselRealisations.scss";
import "../../components/Btn.scss";
import { FaArrowRightLong } from "react-icons/fa6";

const CarouselRealisations = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (images.length === 0) return;
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

  if (images.length === 0) {
    return <div className="carousel">No images available</div>;
  }

  return (
    <section className="carouselRealisations">
      <div
        className={`carouselRealisations__container ${
          isAnimating ? "animating" : ""
        }`}
        style={{ transform: `translateX(-${activeIndex * 30}%)` }}
      >
        {images.map((img, index) => (
          <a
            href={img.url}
            className="carouselRealisations__item"
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img.image1} alt={`carouselRealisations ${index}`} />
            <div className="carouselRealisations__overlay">
              <div className="carouselRealisations__text">{img.text}</div>
              <FaArrowRightLong className="carouselRealisations__icon" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CarouselRealisations;
