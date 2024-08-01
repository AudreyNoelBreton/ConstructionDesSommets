import React from "react";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import "./project.scss";

const Project = () => {
  const text = "Nos réalisations";
  const logoPath = "/logo-habitations.svg";
  return (
    <div>
      <Header logo={logoPath} />
      <Hero text={text} />
    </div>
  );
};

export default Project;
