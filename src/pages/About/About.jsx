import React from "react";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import Links from "../../Sections/Links-section/link-section";
import Contact from "../../Sections/Contact-section/contact-section";
import { useMediaQuery } from "react-responsive";
import "./About.scss";
import Footer from "../../components/Footer/footer";
import Soumission from "../../Sections/Soumission/soumission";
import Cart from "../../Sections/Cart-section/cartSection";

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 575 });
  const logoPath = `${process.env.PUBLIC_URL}/logo-habitations.svg`;

  const imagePath = isMobile
    ? `${process.env.PUBLIC_URL}/nous-joindre-header-mobile.jpg`
    : `${process.env.PUBLIC_URL}/nous-joindre-header.jpg`;

  const text = "Nous joindre";
  return (
    <div>
      <Header logo={logoPath} />
      <div className="about__header">
        <Hero imagePath={imagePath} text={text} />
      </div>

      <Soumission />
      <Links />
      <Contact />
      <Cart />

      <Footer />
    </div>
  );
};

export default About;
