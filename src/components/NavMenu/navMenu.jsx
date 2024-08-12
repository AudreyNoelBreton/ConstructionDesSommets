import React from "react";
import "./navMenu.scss";
import { Link, useLocation } from "react-router-dom";

const NavMenu = () => {
  const location = useLocation();

  const linkWhite =
    location.pathname !== "/realisations/consecration" &&
    location.pathname !== "/realisations/ferreolaise";

  console.log(linkWhite);
  return (
    <div className="navMenu">
      <ul className="navMenu__links">
        <Link
          to="/team"
          className={`navMenu__link ${
            location.pathname === "/team" ? "nav-link-active" : ""
          }`}
        >
          <div
            className={`navMenu__text ${
              !linkWhite ? "navMenu__text--dark" : ""
            }`}
          >
            A propos de nous
          </div>
        </Link>
        <Link
          to="/realisations"
          className={`navMenu__link navMenu__link--realisations${
            location.pathname === "/realisations" ? "nav-link-active" : ""
          }`}
        >
          <div
            className={`navMenu__text ${
              !linkWhite ? "navMenu__text--dark" : ""
            }`}
          >
            Nos Realisations
          </div>
        </Link>
        <Link
          to="/about"
          className={`navMenu__link ${
            location.pathname === "/about" ? "nav-link-active" : ""
          }`}
        >
          <div
            className={`navMenu__text ${
              !linkWhite ? "navMenu__text--dark" : ""
            }`}
          >
            Nous joindre
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default NavMenu;
