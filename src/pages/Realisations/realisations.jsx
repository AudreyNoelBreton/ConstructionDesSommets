import React from "react";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import "./realisation.scss";
import Projects from "../../Sections/Projects-section/projects-section";
import Footer from "../../components/Footer/footer";
import { useMediaQuery } from "react-responsive";
const Realisations = () => {
  const isMobile = useMediaQuery({ maxWidth: 575 });
  const imagePath = isMobile
    ? "/nos-realisations-header-mobile.jpg"
    : "/nos-realisations-header.jpg";
  const logoPath = "/logo-habitations.svg";
  const text = "Nos réalisations";
  return (
    <div>
      <Header logo={logoPath} />
      <Hero imagePath={imagePath} text={text} />
      <Projects />
      <Footer />
    </div>
  );
};

export default Realisations;
