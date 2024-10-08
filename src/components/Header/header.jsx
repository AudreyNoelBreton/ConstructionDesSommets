import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/mobileMenu";
import { Twirl as Hamburger } from "hamburger-react";
import { useLocation } from "react-router-dom";
import NavMenu from "../NavMenu/navMenu";
import { useMediaQuery } from "react-responsive";
import "./header.scss";

const Header = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation().pathname;
  const logoWhite =
    location !== "/realisations/consecration" &&
    location !== "/realisations/ferreolaise" &&
    location !== "/realisations/maison-verte" &&
    location !== "/realisations/olympique";
  const logoHabitations = `${process.env.PUBLIC_URL}/logo-habitations.svg`;

  console.log(process.env.PUBLIC_URL);
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY && window.scrollY > 0) {
        // Scrolling up
        setIsFixed(true);
        setIsScrolled(true);
      } else if (window.scrollY === 0) {
        // At the top of the page
        setIsScrolled(false);
      } else {
        // Scrolling down
        setIsFixed(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`header ${isOpen ? "header--open" : "header--closed"} ${
        isFixed ? "header--fixed" : ""
      } ${isScrolled ? "header--scrolled" : ""}`}
    >
      <div className="header__content">
        <div className="header__bar">
          <Link
            to="/"
            className={` ${isOpen ? "header__logo--hidden" : "header__logo"}`}
          >
            <img
              src={isScrolled ? logoHabitations : logo}
              alt="Logo"
              className="logo"
            />
          </Link>

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
              color={isScrolled ? "#F7F4F0" : isOpen ? "#F7F4F0" : "#242318"}
              onToggle={() => setIsOpen(!isOpen)}
              className="header__hamburger"
            />
          )}

          {!isMobile && <NavMenu isScrolled={isScrolled} />}
        </div>
        <MobileMenu isOpen={isOpen} />
      </div>
    </header>
  );
};

export default Header;
