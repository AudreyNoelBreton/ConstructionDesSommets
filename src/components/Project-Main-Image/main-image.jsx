import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./main-image.scss";
import { FaArrowRightLong } from "react-icons/fa6";

const MainImage = ({ images = [], mainText, url }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setImageOpacity(0); // Commencez à faire disparaître l'image
        setTimeout(() => {
          setCurrentImage((prevImage) => (prevImage + 1) % images.length);
          setImageOpacity(1); // Réaffichez l'image suivante
        }, 400); // Le délai doit correspondre à la durée de la transition
      }, 5000); // Changer l'image toutes les 5 secondes

      return () => clearInterval(interval); // Nettoyez l'intervalle lors du démontage du composant
    }
  }, [images.length]);

  const handleClick = (e) => {
    e.preventDefault();
    navigate(url);
  };

  return (
    <a className="main-image" href={url} onClick={handleClick}>
      {images.length > 0 && (
        <img
          className="main-image__img"
          src={images[currentImage]}
          alt="Background"
          style={{ opacity: imageOpacity }}
        />
      )}
      <div className="main-image__overlay">
        <div className="main-image__text">{mainText}</div>
        <FaArrowRightLong className="main-image__icon" />
      </div>
    </a>
  );
};

export default MainImage;
