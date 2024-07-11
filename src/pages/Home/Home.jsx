import React from "react";
import Header from "../../components/Header/header";
import Slogan from "../../Sections/Slogan-section/slogansection";
import Infos from "../../Sections/General-infos/infos";
import Realisations from "../../Sections/Realisations/realisations";
import Contact from "../../Sections/Contact-section/contact-section";
import Links from "../../Sections/Links-section/link-section";
import Carousel from "../../components/Carousel/carousel";
import Form from "../../components/Form/form";
import data from "../../data/data";
const Home = () => {
  return (
    <div>
      <Header />
      <Carousel images={data.sliderImages} />
      <Slogan />
      {/* <Infos />
      <Realisations></Realisations>
      <Contact />
      <Form /> */}
      <Links links={data.questions} />
    </div>
  );
};

export default Home;
