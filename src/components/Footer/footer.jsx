import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./footer.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import "../../components/Btn.scss";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const imagePath = `${process.env.PUBLIC_URL}/logo-habitations.svg`;
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const location = useLocation();

  return (
    <footer
      className="footer"
      style={{
        paddingBottom:
          location.pathname !== "/about"
            ? "calc(2.8125rem + 50px)"
            : "2.8125rem",
      }}
    >
      {isMobile && (
        <>
          <div className="footer__container">
            <div className="footer__container-elements">
              <Link to={"/"} className="footer__logo">
                <img src={imagePath} alt="Logo" />
              </Link>

              <div className="footer__links">
                <Link to="/team" className="footer__link">
                  Équipe
                </Link>
                <Link to="/realisations" className="footer__link">
                  réalisations
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
                    href="https://www.facebook.com/profile.php?id=100085617410260&mibextid=LQQJ4d"
                    className="footer__social"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.instagram.com/leshabitationsdusommet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
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
                À propos
              </Link>
              <Link to="/realisations" className="footer__link-bottom">
                Nos réalisations
              </Link>
              <Link to="/about" className="footer__link-bottom">
                Nous joindre
              </Link>
            </div>
            <div className="footer__element-bottom">
              <div className="footer__socials-bottom">
                <a
                  href="https://www.facebook.com/profile.php?id=100085617410260&mibextid=LQQJ4d"
                  className="footer__social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/leshabitationsdusommet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
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
