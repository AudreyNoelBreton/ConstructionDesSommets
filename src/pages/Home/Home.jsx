import React, { useEffect, useState } from "react";
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
import { useMediaQuery } from "react-responsive";
import Cart from "../../Sections/Cart-section/cartSection";
import Alert from "../..//components/Alert/Alert";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const imagePath = isMobile ? data.sliderImagesMobile : data.sliderImages;
  const [isAlertActive, setIsAlertActive] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/about") {
      setIsAlertActive(false);
      setTimeout(() => {
        setIsAlertActive(true);
      }, 0);
    }
  }, [location]);
  const logoPath = `${process.env.PUBLIC_URL}/logo-habitations.svg`;
  const imageUrl = `${process.env.PUBLIC_URL}/soumission-mobile (1).jpg`;
  const imageUrlDesktop = `${process.env.PUBLIC_URL}/soumission.jpg`;

  return (
    <div className="home">
      <Alert
        key={location.key}
        message="Demander une soumission"
        isActive={isAlertActive}
      />
      <Header logo={logoPath} />
      <Carousel images={imagePath} />
      <Slogan />
      <Infos />
      <Realisations />
      <div className="home__soumission">
        {isMobile && (
          <>
            <img className="home__image" src={imageUrl} alt="project" />
          </>
        )}
        {!isMobile && (
          <>
            <img className="home__image" src={imageUrlDesktop} alt="project" />
          </>
        )}
      </div>

      <div className="home__soumission">
        <Soumission />
      </div>
      <Links />
      <Contact />
      <Cart />
      <Footer />
    </div>
  );
};

export default Home;
