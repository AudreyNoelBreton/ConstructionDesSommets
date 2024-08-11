import React from "react";
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

import { useMediaQuery } from "react-responsive";
const Realisations = () => {
  const location = useLocation();
  const isExactRealisationsRoute = location.pathname === "/realisations";

  const isMobile = useMediaQuery({ maxWidth: 575 });
  const imagePath = isMobile
    ? "/nos-realisations-header-mobile.jpg"
    : "/nos-realisations-header.jpg";
  const logoPath = "/logo-habitations.svg";
  const text = "Nos réalisations";
  return (
    <div>
      {isExactRealisationsRoute && (
        <>
          <Header logo={logoPath} />
          <Hero imagePath={imagePath} text={text} />
          <Projects />
          <div className="realisations__soumission">
            <img
              className="realisations__image"
              src="/soumission-3-mobile.jpg"
              alt="project"
            />
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
