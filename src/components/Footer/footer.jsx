import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import "../../components/Btn.scss";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const imagePath = "/logo-habitations.svg";
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <footer className="footer">
      {isMobile && (
        <>
          <div className="footer__container">
            <div className="footer__container-elements">
              <Link to={"/"} className="footer__logo">
                <img src={imagePath} alt="Logo" />
              </Link>
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
            <div className="footer__container-elements">
              <div className="footer__element">
                <Link to="/about" className="btn btn--soumission">
                  <div className="btn__text">soumission</div>
                  <FaArrowRightLong />
                </Link>
              </div>
              <div className="footer__element">
                <div className="footer__socials">
                  <a
                    href="https://www.facebook.com/votrepage"
                    className="footer__social"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.instagram.com/votrepage"
                    className="footer__social"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GrInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {!isMobile && (
        <>
          <div className="footer__row-container">
            <Link to={"/"} className="footer__logo-bottom">
              <img src={imagePath} alt="Logo" />
            </Link>
            <div className="footer__links-bottom">
              <Link to="/team" className="footer__link-bottom">
                a propos
              </Link>
              <Link to="/realisations" className="footer__link-bottom">
                Nos realisations
              </Link>
              <Link to="/about" className="footer__link-bottom">
                Nous joindres
              </Link>
            </div>
            <div className="footer__element-bottom">
              <div className="footer__socials-bottom">
                <a
                  href="https://www.facebook.com/votrepage"
                  className="footer__social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/votrepage"
                  className="footer__social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrInstagram />
                </a>
              </div>
              <Link to="/about" className="btn btn--soumission-bottom">
                <div className="btn__text">soumission</div>
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
{
  /* <div className="footer__element-bottom">
              <Link to={"/"} className="footer__logo-bottom">
                <img src={imagePath} alt="Logo" className="logo" />
              </Link>
            </div>
            <div className="footer__element-bottom">
              <div className="footer__links-bottom">
                <div>a propos</div>
                <div>nos realisations</div>
                <div>nous joindre</div>
              </div>
            </div>
            <div className="footer__element-bottom">
              <div className="footer__socials-bottom">
                <a
                  href="https://www.facebook.com/votrepage"
                  className="footer__social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/votrepage"
                  className="footer__social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrInstagram />
                </a>
              </div>
              <button className="btn btn--soumission">
                <div className="btn__text">soumission</div>
                <FaArrowRightLong />
              </button>
            </div> */
}
