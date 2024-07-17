import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import "../../components/Btn.scss";
const Footer = () => {
  const imagePath = "/logo-habitations.svg";
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container-elements">
          <div className="footer__element">
            <Link to={"/"} className="footer__logo">
              <img src={imagePath} alt="Logo" className="logo" />
            </Link>
          </div>
          <div className="footer__element">
            <div className="footer__links">
              <Link to="/realisations" className="footer__link">
                Modeles
              </Link>
              <Link to="/team" className="footer__link">
                a propos
              </Link>
              <Link to="/about" className="footer__link">
                contact
              </Link>
            </div>
          </div>
        </div>
        <div className="footer__container-elements">
          <div className="footer__element">
            <button className="btn btn--soumission">
              <div className="btn__text">soumission</div>
              <FaArrowRightLong />
            </button>
          </div>
          <div className="footer__element">
            <div className="footer__socials">
              <FaFacebookF />
              <GrInstagram />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
