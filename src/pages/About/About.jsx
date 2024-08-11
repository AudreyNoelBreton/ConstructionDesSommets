import React from "react";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import Links from "../../Sections/Links-section/link-section";
import Contact from "../../Sections/Contact-section/contact-section";
import { useMediaQuery } from "react-responsive";
import "./About.scss";
import Footer from "../../components/Footer/footer";
import Soumission from "../../Sections/Soumission/soumission";
const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 575 });
  const logoPath = "/logo-habitations.svg";

  const imagePath = isMobile
    ? "/nous-joindre-header-mobile.jpg"
    : "/nous-joindre-header.jpg";

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
      <Footer />
    </div>
  );
};

export default About;
