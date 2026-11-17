import "./maison.scss";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header/header";
import Cart from "../../Sections/Cart-section/cartSection";
import Contact from "../../Sections/Contact-section/contact-section";
import Links from "../../Sections/Links-section/link-section";
import Footer from "../../components/Footer/footer";
import Alert from "../..//components/Alert/Alert";
import { useLocation } from "react-router-dom";
import Soumission from "../../Sections/Soumission/soumission";

const Maison = () => {
  const location = useLocation();
  const [isAlertActive, setIsAlertActive] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/about") {
      setIsAlertActive(false);
      setTimeout(() => {
        setIsAlertActive(true);
      }, 0);
    }
  }, [location]);
  const logoPath = `${process.env.PUBLIC_URL}/logo-habitations-dark.svg`;

  return (
    <div>
      <Alert
        key={location.key}
        message="Demander une soumission"
        isActive={isAlertActive}
      />
      <Header logo={logoPath} />
      <div className="maison">
        <div className="maison__title">La petite maison verte</div>
        <div className="maison__gallery">
          <div className="maison__items">
            <img
              src={`${process.env.PUBLIC_URL}/maison/Habitations-du-sommet-petite-maison-verte-6.jpg`}
              className="maison__item" alt="Vue de la Petite Maison verte"
            ></img>
          </div>
          <div className="maison__items">
            <img
              src={`${process.env.PUBLIC_URL}/maison/Habitations-du-sommet-petite-maison-verte-2.jpg`}
              className="maison__item" alt="Vue de la Petite Maison verte"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/maison/Habitations-du-sommet-petite-maison-verte-11.jpg`}
              className="maison__item" alt="Vue de la Petite Maison verte"
            ></img>
          </div>

          <div className="maison__items">
            <img
              src={`${process.env.PUBLIC_URL}/maison/Habitations-du-sommet-petite-maison-verte-7.jpg`}
              className="maison__item" alt="Vue de la Petite Maison verte"
            ></img>
          </div>
          <div className="maison__items">
            <img
              src={`${process.env.PUBLIC_URL}/maison/Habitations-du-sommet-petite-maison-verte-4.jpg`}
              className="maison__item" alt="Vue de la Petite Maison verte"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/maison/Habitations-du-sommet-petite-maison-verte-1.jpg`}
              className="maison__item" alt="Vue de la Petite Maison verte"
            ></img>
          </div>
          <div className="maison__items">
            <img
              src={`${process.env.PUBLIC_URL}/maison/Habitations-du-sommet-petite-maison-verte-9.jpg`}
              className="maison__item" alt="Vue de la Petite Maison verte"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/maison/Habitations-du-sommet-petite-maison-verte-5.jpg`}
              className="maison__item" alt="Vue de la Petite Maison verte"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/maison/Habitations-du-sommet-petite-maison-verte-8.jpg`}
              className="maison__item" alt="Vue de la Petite Maison verte"
            ></img>
          </div>

          <div className="maison__items">
            <img
              src={`${process.env.PUBLIC_URL}/maison/Habitations-du-sommet-petite-maison-verte-3.jpg`}
              className="maison__item" alt="Vue de la Petite Maison verte"
            ></img>
          </div>
          <div className="maison__items">
            <img
              src={`${process.env.PUBLIC_URL}/maison/Habitations-du-sommet-petite-maison-verte-10.jpg`}
              className="maison__item" alt="Vue de la Petite Maison verte"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/maison/Habitations-du-sommet-petite-maison-verte-12.jpg`}
              className="maison__item" alt="Vue de la Petite Maison verte"
            ></img>
          </div>
        </div>
      </div>
      <Soumission />
      <Links />
      <Contact />
      <Cart />
      <Footer />
    </div>
  );
};

export default Maison;
