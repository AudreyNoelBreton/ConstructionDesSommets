import React from "react";
import "./navMenu.scss";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isConsecration = location.pathname === "/consecration";
  return (
    <div className={`navMenu ${isConsecration ? "navMenu--consecration" : ""}`}>
      <ul className="navMenu__links">
        <Link
          to="/team"
          className={`navMenu__link ${
            location.pathname === "/team" ? "nav-link-active" : ""
          }`}
        >
          <div className="navMenu__text">A propos de nous</div>
        </Link>
        <Link
          to="/realisations"
          className={`navMenu__link ${
            location.pathname === "/realisations" ? "nav-link-active" : ""
          }`}
        >
          <div className="navMenu__text">Nos Realisations</div>
        </Link>
        <Link
          to="/about"
          className={`navMenu__link ${
            location.pathname === "/about" ? "nav-link-active" : ""
          }`}
        >
          <div className="navMenu__text">Nous joindre</div>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
