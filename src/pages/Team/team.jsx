import React, { useEffect, useState } from "react";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import Members from "../../Sections/Members/members";
import Temoignages from "../../components/Temoignages/temoignages";
import "./team.scss";
import data from "../../data/data";
import Footer from "../../components/Footer/footer";
import Links from "../../Sections/Links-section/link-section";
import { useMediaQuery } from "react-responsive";
import Soumission from "../../Sections/Soumission/soumission";
import Alert from "../..//components/Alert/Alert";
import { useLocation } from "react-router-dom";

const Team = () => {
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 575 });
  const imagePath = isMobile
    ? "/à-propos-header-mobile.jpg"
    : "/à-propos-header.jpg";
  const logoPath = "/logo-habitations.svg";
  const text = "Passionnés de la qualité";
  const [isAlertActive, setIsAlertActive] = useState(false);

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
      <Header logo={logoPath} />
      <Hero imagePath={imagePath} text={text} />
      <Members />
      <Temoignages temoignages={data.sliderTemoignages} />
      <div className="team__soumission">
        {isMobile && (
          <>
            <img
              className="team__image"
              src="/soumission-2-mobile.jpg"
              alt="project"
            />
          </>
        )}
        {!isMobile && (
          <>
            <img
              className="team__image"
              src="/soumission-2.jpg"
              alt="project"
            />
          </>
        )}
      </div>
      <div className="team__soumission">
        <Soumission />
      </div>
      <Links />
      <Footer />
    </div>
  );
};

export default Team;
