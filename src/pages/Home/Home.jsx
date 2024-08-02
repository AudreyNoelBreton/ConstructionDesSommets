import React, { useState } from "react";
import "./home.scss";
import Header from "../../components/Header/header";
import Slogan from "../../Sections/Slogan-section/slogansection";
import Infos from "../../Sections/General-infos/infos";
import Realisations from "../../Sections/Realisations/realisations";
import Contact from "../../Sections/Contact-section/contact-section";
import Links from "../../Sections/Links-section/link-section";
import Carousel from "../../components/Carousel/carousel";
import Footer from "../../components/Footer/footer";
import data from "../../data/data";
import Soumission from "../../Sections/Soumission/soumission";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 575 });
  const imagePath = isMobile ? data.sliderImagesMobile : data.sliderImages;

  const logoPath = "/logo-habitations.svg";
  return (
    <div className="home">
      <Header logo={logoPath} />
      <Carousel images={imagePath} />
      <Slogan />
      <Infos />
      <Realisations />
      <div className="home__soumission">
        <img className="home__image" src="/soumission.jpg" alt="project" />
      </div>

      <div className="home__soumission">
        <Soumission />
      </div>
      <Links />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
