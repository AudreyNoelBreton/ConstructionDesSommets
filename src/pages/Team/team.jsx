import React from "react";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import Temoignages from "../../components/Temoignages/temoignages";
import "./team.scss";
import data from "../../data/data";
const Team = () => {
  const imagePath = "/petite-maison-verte-2.jpg";
  const text = "Passionnés de la qualité";
  return (
    <div>
      <Header />
      <Hero imagePath={imagePath} text={text} />
      {/* <Temoignages temoignages={data.sliderTemoignages} /> */}
    </div>
  );
};

export default Team;
