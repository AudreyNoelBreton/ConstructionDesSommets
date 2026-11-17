import React, { useState, useEffect } from "react";
import "./carouselRealisations.scss";
import "../../components/btn.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const CarouselRealisations = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate(); // Utilisation de useNavigate

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
  const handleImageClick = (url) => {
    navigate(url); // Utilisation de navigate pour rediriger vers l'URL de l'image
  };
  return (
    <section className="carouselRealisations">
      <div
        className={`carouselRealisations__container ${
          isAnimating ? "animating" : ""
        }`}
        style={{ transform: `translateX(-${activeIndex * 30}%)` }}
      >
        {images.map((img, index) => (
          <button
            type="button"
            className="carouselRealisations__item"
            key={index}
            aria-label={`Voir le projet ${img.text}`}
            onClick={() => handleImageClick(img.url)} // Gérer le clic sur l'image
          >
            <img src={img.image1} alt={`Projet ${img.text}`} />
            <span className="carouselRealisations__overlay">
              <span className="carouselRealisations__text">{img.text}</span>
              <FaArrowRightLong className="carouselRealisations__icon" />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CarouselRealisations;
