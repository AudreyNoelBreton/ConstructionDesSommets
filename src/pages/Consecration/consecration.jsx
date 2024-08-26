import "./consecration.scss";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header/header";
import data from "../../data/data";
import Soumission from "../../Sections/Soumission/soumission";
import Cart from "../../Sections/Cart-section/cartSection";
import Contact from "../../Sections/Contact-section/contact-section";
import Links from "../../Sections/Links-section/link-section";
import Footer from "../../components/Footer/footer";
import Alert from "../..//components/Alert/Alert";
import { useLocation } from "react-router-dom";

const Consecration = () => {
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

  const logoPath = "/logo-habitations-dark.svg";

  return (
    <div>
      <Alert
        key={location.key}
        message="Demander une soumission"
        isActive={isAlertActive}
      />
      <Header logo={logoPath} />
      <div className="consecration">
        <div className="consecration__title">La consécration</div>
        <div className="consecration__gallery">
          <div className="consecration__items">
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-36.jpg"
              className="consecration__item"
            ></img>
          </div>

          <div className="consecration__items">
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-28.jpg"
              className="consecration__item"
            ></img>
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-33.jpg"
              className="consecration__item"
            ></img>
          </div>
          <div className="consecration__items">
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-30.jpg"
              className="consecration__item"
            ></img>
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-32.jpg"
              className="consecration__item"
            ></img>
          </div>

          <div className="consecration__items">
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-15.jpg"
              className="consecration__item"
            ></img>
          </div>

          <div className="consecration__items">
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-7.jpg"
              className="consecration__item"
            ></img>
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-9.jpg"
              className="consecration__item"
            ></img>
          </div>

          <div className="consecration__items">
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-5.jpg"
              className="consecration__item"
            ></img>
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-11.jpg"
              className="consecration__item"
            ></img>
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-13.jpg"
              className="consecration__item"
            ></img>
          </div>
          <div className="consecration__items">
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-14.jpg"
              className="consecration__item"
            ></img>
          </div>
          <div className="consecration__items">
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-19.jpg"
              className="consecration__item"
            ></img>
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-23.jpg"
              className="consecration__item"
            ></img>
          </div>
          <div className="consecration__items">
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-22.jpg"
              className="consecration__item"
            ></img>
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-21.jpg"
              className="consecration__item"
            ></img>
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-24.jpg"
              className="consecration__item"
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

export default Consecration;
