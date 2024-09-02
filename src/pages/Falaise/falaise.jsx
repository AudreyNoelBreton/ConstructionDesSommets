import "./falaise.scss";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header/header";
import data from "../../data/data";
import Cart from "../../Sections/Cart-section/cartSection";
import Contact from "../../Sections/Contact-section/contact-section";
import Links from "../../Sections/Links-section/link-section";
import Footer from "../../components/Footer/footer";
import Alert from "../..//components/Alert/Alert";
import { useLocation } from "react-router-dom";
import Soumission from "../../Sections/Soumission/soumission";

const Falaise = () => {
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
  let foundProject = null;
  for (let i = 0; i < data.projects.length; i++) {
    if (data.projects[i].text === "La consecration") {
      foundProject = data.projects[i];
      break;
    }
  }
  const logoPath = "/logo-habitations-dark.svg";

  return (
    <div>
      <Alert
        key={location.key}
        message="Demander une soumission"
        isActive={isAlertActive}
      />
      <Header logo={logoPath} />
      <div className="falaise">
        <div className="falaise__title">La férreolaise</div>
        <div className="falaise__gallery">
          <div className="falaise__items">
            <img
              src="/Falaise/Habitations-du-sommet-la-falaise-27.jpg"
              className="falaise__item"
            ></img>
          </div>

          <div className="falaise__items">
            <img
              src="/falaise/Habitations-du-sommet-la-falaise-12.jpg"
              className="falaise__item"
            ></img>
            <img
              src="/falaise/Habitations-du-sommet-la-falaise-15.jpg"
              className="falaise__item"
            ></img>
          </div>
          <div className="falaise__items">
            <img
              src="/falaise/Habitations-du-sommet-la-falaise-22.jpg"
              className="falaise__item"
            ></img>
            <img
              src="/falaise/Habitations-du-sommet-la-falaise-16.jpg"
              className="falaise__item"
            ></img>
          </div>

          <div className="falaise__items">
            <img
              src="/falaise/Habitations-du-sommet-la-falaise-31.jpg"
              className="falaise__item"
            ></img>
          </div>

          <div className="falaise__items">
            <img
              src="/falaise/Habitations-du-sommet-la-falaise-11.jpg"
              className="falaise__item"
            ></img>
            <img
              src="/falaise/Habitations-du-sommet-la-falaise-2.jpg"
              className="falaise__item"
            ></img>
          </div>

          <div className="falaise__items">
            <img
              src="/falaise/Habitations-du-sommet-la-falaise-26.jpg"
              className="falaise__item"
            ></img>
            <img
              src="/falaise/Habitations-du-sommet-la-falaise-4.jpg"
              className="falaise__item"
            ></img>
            <img
              src="/falaise/Habitations-du-sommet-la-falaise-14.jpg"
              className="falaise__item"
            ></img>
          </div>
          <div className="falaise__items">
            <img
              src="/falaise/Habitations-du-sommet-la-falaise-32.jpg"
              className="falaise__item"
            ></img>
          </div>
          <div className="falaise__items">
            <img
              src="/falaise/Habitations-du-sommet-la-falaise-18.jpg"
              className="falaise__item"
            ></img>
            <img
              src="/falaise/Habitations-du-sommet-la-falaise-25.jpg"
              className="falaise__item"
            ></img>
          </div>
          <div className="falaise__items">
            <img
              src="/falaise/Habitations-du-sommet-la-falaise-7.jpg"
              className="falaise__item"
            ></img>
            <img
              src="/falaise/Habitations-du-sommet-la-falaise-30.jpg"
              className="falaise__item"
            ></img>
            <img
              src="/falaise/Habitations-du-sommet-la-falaise-19.jpg"
              className="falaise__item"
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

export default Falaise;
