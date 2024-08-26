import React from "react";
import "./navMenu.scss";
import { Link, useLocation } from "react-router-dom";

const NavMenu = ({ isScrolled }) => {
  const location = useLocation();

  const linkWhite =
    location.pathname !== "/realisations/consecration" &&
    location.pathname !== "/realisations/ferreolaise" &&
    location.pathname !== "/realisations/maison-verte" &&
    location.pathname !== "/realisations/olympique";
  const isRealisationActive = location.pathname.startsWith("/realisations");
  const getTextClass = () => {
    if (linkWhite) {
      return "navMenu__text";
    } else if (!linkWhite && !isScrolled) {
      return "navMenu__text navMenu__text--dark";
    } else if (!linkWhite && isScrolled) {
      return "navMenu__text";
    }
  };

  return (
    <div className="navMenu">
      <ul className="navMenu__links">
        <Link
          to="/team"
          className={`navMenu__link ${
            location.pathname === "/team" ? "nav-link-active" : ""
          }`}
        >
          <div className={getTextClass()}>À propos de nous</div>
        </Link>
        <Link
          to="/realisations"
          className={`navMenu__link ${
            isRealisationActive ? "nav-link-active" : ""
          }`}
        >
          <div className={getTextClass()}>Nos Réalisations</div>
        </Link>
        <Link
          to="/about"
          className={`navMenu__link ${
            location.pathname === "/about" ? "nav-link-active" : ""
          }`}
        >
          <div className={getTextClass()}>Nous joindre</div>
        </Link>
      </ul>
    </div>
  );
};

export default NavMenu;
