import React from "react";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import Members from "../../Sections/Members/members";
import Temoignages from "../../components/Temoignages/temoignages";
import "./team.scss";
import data from "../../data/data";
import Footer from "../../components/Footer/footer";
import Links from "../../Sections/Links-section/link-section";
import { useMediaQuery } from "react-responsive";

const Team = () => {
  const isMobile = useMediaQuery({ maxWidth: 575 });
  const imagePath = isMobile
    ? "/à-propos-header-mobile.jpg"
    : "/à-propos-header.jpg";
  const logoPath = "/logo-habitations.svg";
  const text = "Passionnés de la qualité";
  return (
    <div>
      <Header logo={logoPath} />
      <Hero imagePath={imagePath} text={text} />
      <Members />
      <Temoignages temoignages={data.sliderTemoignages} />
      <Links />
      <Footer />
    </div>
  );
};

export default Team;
