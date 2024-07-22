import React from "react";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import Links from "../../Sections/Links-section/link-section";
import "./About.scss";
import Footer from "../../components/Footer/footer";
const About = () => {
  const imagePath = "/nous-joindre-header-mobile.jpg";
  const text = "Nous joindre";
  return (
    <div>
      <Header />
      <Hero imagePath={imagePath} text={text} />
      <Links />
      <Footer />
    </div>
  );
};

export default About;
