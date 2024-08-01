import React, { useState, useEffect } from "react";
import "./carouselSecteurs.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CarouselSecteurs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    { src: "/charpente.jpg", alt: "Charpente" },
    { src: "/la-ferreolaise-2.jpg", alt: "Finition" },
    { src: "/petite-maison-verte-2.jpg", alt: "Réalisations" },
  ];

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
  const goToSlide = (index) => {
    if (index < 0) {
      setActiveIndex(images.length - 1);
    } else if (index >= images.length) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-secteurs">
      <div
        className="carousel-secteurs__inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            className="carousel-secteurs__item"
            key={index}
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <span>{image.alt}</span>
          </div>
        ))}
      </div>

      <div className="carousel-secteurs__elements">
        <div className="carousel-secteurs__arrows">
          <IoIosArrowBack onClick={goToPrevious} />
          <IoIosArrowForward onClick={goToNext} />
        </div>
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
    </div>
  );
};

export default CarouselSecteurs;
