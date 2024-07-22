import React from "react";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import Members from "../../Sections/Members/members";
import Temoignages from "../../components/Temoignages/temoignages";
import "./team.scss";
import data from "../../data/data";
import Footer from "../../components/Footer/footer";
import Links from "../../Sections/Links-section/link-section";
const Team = () => {
  const imagePath = "/petite-maison-verte-2.jpg";
  const text = "Passionnés de la qualité";
  return (
    <div>
      <Header />
      <Hero imagePath={imagePath} text={text} />
      <Members />
      <Temoignages temoignages={data.sliderTemoignages} />
      <Links />
      <Footer />
    </div>
  );
};

export default Team;
