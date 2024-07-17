import React from "react";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import "./realisation.scss";
import Projects from "../../Sections/Projects-section/projects-section";
import Footer from "../../components/Footer/footer";
const Realisations = () => {
  const imagePath = "/nos-realisations-header-mobile.jpg";
  const text = "Nos réalisations";
  return (
    <div>
      <Header />
      <Hero imagePath={imagePath} text={text} />
      <Projects />
      <Footer />
    </div>
  );
};

export default Realisations;
