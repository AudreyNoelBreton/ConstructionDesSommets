import React from "react";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import "./team.scss";
const Team = () => {
  const imagePath = "/petite-maison-verte-2.jpg";
  const text = "Passionnés de la qualité";
  return (
    <div>
      <Header />
      <Hero imagePath={imagePath} text={text} />
    </div>
  );
};

export default Team;
