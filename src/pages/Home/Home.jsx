import React from "react";
import Header from "../../components/Header/header";
import Slogan from "../../Sections/Slogan-section/slogansection";
import Realisations from "../../Sections/Realisations/realisations";
import Carousel from "../../components/Carousel/carousel";
import data from "../../data/data";
const Home = () => {
  return (
    <div>
      <Header />
      <Carousel images={data.sliderImages} />
      <Slogan />
      <Realisations></Realisations>
    </div>
  );
};

export default Home;
