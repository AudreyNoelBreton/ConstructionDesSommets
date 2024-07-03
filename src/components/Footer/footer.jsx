import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const imagePath = "/logo-habitations.svg";
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container-elements">
          <Link to={"/"} className="footer__logo">
            <img src={imagePath} alt="Logo" className="logo" />
          </Link>
          <div className="footer__nav">
            <a href="#modeles">Modèles</a>
            <a href="#apropos">À Propos</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer__container-elements">
          <div className="footer__social">
            <FaFacebook />
            <FaInstagram />
          </div>
          <div className="footer__button">
            <button>
              Soumission <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
