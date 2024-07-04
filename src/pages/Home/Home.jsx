import React from "react";
import Header from "../../components/Header/header";
import Slogan from "../../Sections/Slogan-section/slogansection";
import Infos from "../../Sections/General-infos/infos";
import Realisations from "../../Sections/Realisations/realisations";
import Carousel from "../../components/Carousel/carousel";
import data from "../../data/data";
const Home = () => {
  return (
    <div>
      <Header />
      <Carousel images={data.sliderImages} />
      <Slogan />
      <Infos />
      <Realisations></Realisations>
    </div>
  );
};

export default Home;
