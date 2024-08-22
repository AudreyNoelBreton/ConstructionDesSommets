import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import "./carousel.scss";

const Carousel = ({ images = [] }) => {
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
  const isMobile = useMediaQuery({ maxWidth: 575 });

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
    <div className="carousel">
      {!isMobile && (
        <div className="carousel__content">
          <div className="carousel__title">Les habitations du sommet</div>
          <div className="carousel__text-overlay-desktop ">
            <div>ENTREPRENEUR GÉNÉRAL </div>
            <div> EN CONSTRUCTION</div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="carousel__text-overlay">
          <div>ENTREPRENEUR GÉNÉRAL </div>
          <div> EN CONSTRUCTION</div>
        </div>
      )}
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

      {isMobile && (
        <div className="carousel__dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`carousel__dot ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      )}

      {!isMobile && (
        <div className="carousel__bottom">
          <div className="carousel__socials">
            <a
              href="https://www.facebook.com/profile.php?id=100085617410260&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="carousel__effect" />
            </a>
            <a
              href="https://www.instagram.com/leshabitationsdusommet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrInstagram />
            </a>
          </div>
          <div className="carousel__arrows">
            <IoIosArrowBack onClick={() => goToSlide(activeIndex - 1)} />
            <IoIosArrowForward onClick={() => goToSlide(activeIndex + 1)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
