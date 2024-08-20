import React, { useState, useEffect } from "react";
import "./carouselSecteurs.scss";
import "../../components/Btn.scss";
import data from "../../data/data";

const CarouselSecteurs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = (index) => {
    if (index < 0) {
      setActiveIndex(images.length - 1);
    } else if (index >= images.length) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  };

  const images = data.sliderSecteurs;

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
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex, images.length]);

  if (images.length === 0) {
    return <div className="carousel-secteurs">No images available</div>;
  }

  return (
    <section className="carousel-secteurs">
      <div
        className={`carousel-secteurs__container ${
          isAnimating ? "animating" : ""
        }`}
        style={{
          transform: `translateX(-${(activeIndex / images.length) * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <div
            href="/"
            className="carousel-secteurs__item"
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img.src} alt={`carousel-secteurs ${index}`} />
            <div className="carousel-secteurs__overlay">
              <div className="carousel-secteurs__text">{img.txt}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-secteurs__bottom">
        <div className="carousel-secteurs__dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`carousel-secteurs__dot ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSecteurs;
