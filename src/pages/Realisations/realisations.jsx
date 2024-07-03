import React from "react";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import "./realisation.scss";
import Projects from "../../Sections/Projects-section/projects-section";
const Realisations = () => {
  const imagePath = "/nos-realisations-header-mobile.jpg";
  const text = "Nos réalisations";
  return (
    <div>
      <Header />
      <Hero imagePath={imagePath} text={text} />
      <Projects />
    </div>
  );
};

export default Realisations;
