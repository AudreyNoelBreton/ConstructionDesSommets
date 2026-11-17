import "./olympique.scss";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header/header";
import Cart from "../../Sections/Cart-section/cartSection";
import Contact from "../../Sections/Contact-section/contact-section";
import Links from "../../Sections/Links-section/link-section";
import Footer from "../../components/Footer/footer";
import Alert from "../..//components/Alert/Alert";
import { useLocation } from "react-router-dom";
import Soumission from "../../Sections/Soumission/soumission";

const Olympique = () => {
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
        <div className="maison__title">L'olympique</div>
        <div className="maison__gallery">
          <div className="maison__items">
            <img
              src={`${process.env.PUBLIC_URL}/olympique/habitations-du-sommet-bloc-3.jpg`}
              className="maison__item" alt="Vue du projet L’Olympique"
            ></img>
          </div>
          <div className="maison__items">
            <img
              src={`${process.env.PUBLIC_URL}/olympique/habitations-du-sommet-bloc-2.jpg`}
              className="maison__item" alt="Vue du projet L’Olympique"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/olympique/habitations-du-sommet-bloc-4.jpg`}
              className="maison__item" alt="Vue du projet L’Olympique"
            ></img>
          </div>

          <div className="maison__items">
            <img
              src={`${process.env.PUBLIC_URL}/olympique/habitations-du-sommet-bloc-1.jpg`}
              className="maison__item" alt="Vue du projet L’Olympique"
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

export default Olympique;
