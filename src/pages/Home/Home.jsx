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

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Carousel images={data.sliderImages} />
      <Slogan />
      <Infos />
      <Realisations></Realisations>
      <Soumission />
      <Links />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
