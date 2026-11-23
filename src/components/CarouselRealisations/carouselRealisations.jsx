import React, { useEffect, useState } from "react";
import "./carouselRealisations.scss";
import "../../components/btn.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AUTOPLAY_DELAY_MS = 5000;
const TRANSITION_DURATION_MS = 500;

const CarouselRealisations = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (images.length < 2 || isAnimating) return undefined;

    const timeout = setTimeout(
      () => setIsAnimating(true),
      AUTOPLAY_DELAY_MS
    );
    return () => clearTimeout(timeout);
  }, [activeIndex, images.length, isAnimating]);

  useEffect(() => {
    if (!isAnimating) return undefined;

    const timeout = setTimeout(() => {
      setActiveIndex((index) => (index + 1) % images.length);
      setIsAnimating(false);
    }, TRANSITION_DURATION_MS);
    return () => clearTimeout(timeout);
  }, [images.length, isAnimating]);

  if (images.length === 0) {
    return <div className="carousel">No images available</div>;
  }

  const currentIndex = activeIndex % images.length;
  const visibleImages =
    images.length === 1
      ? images
      : [
          images[(currentIndex + images.length - 1) % images.length],
          images[currentIndex],
          images[(currentIndex + 1) % images.length],
        ];

  return (
    <section className="carouselRealisations">
      <div
        className={`carouselRealisations__container ${
          isAnimating ? "animating" : ""
        }`}
      >
        {visibleImages.map((img, index) => (
          <button
            type="button"
            className="carouselRealisations__item"
            key={`${img.url ?? img.text}-${index}`}
            aria-label={`Voir le projet ${img.text}`}
            aria-current={
              images.length === 1 || index === 1 ? "true" : undefined
            }
            onClick={() => navigate(img.url)}
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
