import React from "react";
import Header from "../../components/Header/header";
import Realisations from "../../Sections/Realisations/realisations";
import Carousel from "../../components/Carousel/carousel";
import sliderImages from "../../data/data";
const Home = () => {
  return (
    <div>
      <Header />
      <Carousel images={sliderImages} />
      <Realisations></Realisations>
    </div>
  );
};

export default Home;
