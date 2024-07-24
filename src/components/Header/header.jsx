import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/mobileMenu";
import { Twirl as Hamburger } from "hamburger-react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation().pathname;
  const logoWhite = location != "/consecration";
  const isMobile = useMediaQuery({ maxWidth: 575 });

  return (
    <header className={`header ${isOpen ? "header--open" : "header--closed"} `}>
      <div className="header__content">
        <div className="header__bar">
          {logoWhite && (
            <Link
              to="/"
              className={` ${isOpen ? "header__logo--hidden" : "header__logo"}`}
            >
              <img src="/logo-habitations.svg" alt="Logo" className="logo" />
            </Link>
          )}

          {isMobile && logoWhite && (
            <Hamburger
              size={30}
              isOpen={isOpen}
              color="#F7F4F0"
              onToggle={() => setIsOpen(!isOpen)}
              className="header__hamburger"
            />
          )}

          {isMobile && !logoWhite && (
            <Hamburger
              size={30}
              isOpen={isOpen}
              color={isOpen ? "#F7F4F0" : "#242318"}
              onToggle={() => setIsOpen(!isOpen)}
              className="header__hamburger"
            />
          )}
        </div>
        <MobileMenu isOpen={isOpen} />
      </div>
    </header>
  );
};

export default Header;
