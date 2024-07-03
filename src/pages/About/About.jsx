import React from "react";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import Questions from "../../components/Questions/questions";
import "./About.scss";
const About = () => {
  const imagePath = "/nous-joindre-header-mobile.jpg";
  const text = "Nous joindre";
  return (
    <div>
      <Header />
      <Hero imagePath={imagePath} text={text} />
      <Questions />
    </div>
  );
};

export default About;
