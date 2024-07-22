import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import MobileMenu from "../MobileMenu/mobileMenu";
import { Twirl as Hamburger } from "hamburger-react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation().pathname;
  const logoWhite = location != "/consecration";

  return (
    <header className={`header ${isOpen ? "header--open" : "header--closed"}`}>
      <div className="header__content">
        <div className="header__bar">
          {!isOpen && logoWhite && (
            <Link to={"/"} className="header__logo">
              <img src="/logo-habitations.svg" alt="Logo" className="logo" />
            </Link>
          )}

          {!isOpen && !logoWhite && (
            <Link to={"/"} className="header__logo">
              <img
                src="/logo-habitations-dark.svg"
                alt="Logo"
                className="logo"
              />
            </Link>
          )}

          {isOpen && <div to={"/"} className="header__logo"></div>}

          {logoWhite && (
            <Hamburger
              size={30}
              isOpen={isOpen}
              color="#F7F4F0"
              onToggle={() => setIsOpen(!isOpen)}
              className="header__hamburger"
            />
          )}

          {!logoWhite && (
            <Hamburger
              size={30}
              isOpen={isOpen}
              color={isOpen ? "#F7F4F0" : "#242318"}
              onToggle={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
        <MobileMenu isOpen={isOpen} />
      </div>
    </header>
  );
};

export default Header;
