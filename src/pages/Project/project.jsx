import React from "react";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import "./project.scss";
const Project = () => {
  const text = "Nos réalisations";
  return (
    <div>
      <Header />
      <Hero text={text} />
    </div>
  );
};

export default Project;
