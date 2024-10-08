import React, { useEffect, useState } from "react";

import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import "./realisation.scss";
import Projects from "../../Sections/Projects-section/projects-section";
import Footer from "../../components/Footer/footer";
import Soumission from "../../Sections/Soumission/soumission";
import Contact from "../../Sections/Contact-section/contact-section";
import Links from "../../Sections/Links-section/link-section";
import Cart from "../../Sections/Cart-section/cartSection";
import { Outlet, useLocation } from "react-router-dom";
import Alert from "../..//components/Alert/Alert";
import { useMediaQuery } from "react-responsive";

const Realisations = () => {
  const location = useLocation();
  const isExactRealisationsRoute = location.pathname === "/realisations";

  const isMobile = useMediaQuery({ maxWidth: 575 });
  const imagePath = isMobile
    ? `${process.env.PUBLIC_URL}/nos-realisations-header-mobile.jpg`
    : `${process.env.PUBLIC_URL}/nos-realisations-header.jpg`;
  const logoPath = `${process.env.PUBLIC_URL}/logo-habitations.svg`;
  const text = "Nos réalisations";
  const [isAlertActive, setIsAlertActive] = useState(false);

  const mobileImage = `${process.env.PUBLIC_URL}/soumission-3-mobile.jpg`;
  const desktopImage = `${process.env.PUBLIC_URL}/soumission-3.jpg`;
  useEffect(() => {
    if (location.pathname !== "/about") {
      setIsAlertActive(false);
      setTimeout(() => {
        setIsAlertActive(true);
      }, 0);
    }
  }, [location]);

  return (
    <div>
      <Alert
        key={location.key}
        message="Demander une soumission"
        isActive={isAlertActive}
      />
      {isExactRealisationsRoute && (
        <>
          <Header logo={logoPath} />
          <Hero imagePath={imagePath} text={text} />
          <Projects />
          <div className="realisations__soumission">
            {isMobile && (
              <>
                <img className="team__image" src={mobileImage} alt="project" />
              </>
            )}
            {!isMobile && (
              <>
                <img className="team__image" src={desktopImage} alt="project" />
              </>
            )}
          </div>
          <div className="realisations__soumission">
            <Soumission />
          </div>
          <Links />
          <Contact />
          <Cart />
          <Footer />
        </>
      )}
      <Outlet />
    </div>
  );
};

export default Realisations;
