import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import MobileMenu from "../MobileMenu/mobileMenu";
import { Twirl as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`header ${isOpen ? "header--open" : ""}`}>
      <div className="header__content">
        <div className="header__bar">
          {!isOpen && (
            <Link to={"/"} className="header__logo">
              <img src="/logo-habitations.svg" alt="Logo" className="logo" />
            </Link>
          )}
          <Hamburger
            size={20}
            isOpen={isOpen}
            color="#F7F4F0"
            onToggle={() => setIsOpen(!isOpen)}
          />
        </div>
        {isOpen && <MobileMenu></MobileMenu>}
      </div>
    </header>
  );
};

export default Header;
