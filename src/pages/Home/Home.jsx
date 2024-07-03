import React from "react";
import Header from "../../components/Header/header";
import Realisations from "../../Sections/Realisations/realisations";
import Hero from "../../components/Hero/hero";
const Home = () => {
  const imagePath = "/nous-joindre-header-mobile.jpg";
  const text = "Nous joindre";
  return (
    <div>
      <Header />
      <Hero imagePath={imagePath} text={text} />
      <Realisations></Realisations>
    </div>
  );
};

export default Home;
