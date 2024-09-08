import React from "react";
import "./infos.scss";
import Card from "../../components/Card/card";
import data from "../../data/data";
import Produit from "../../components/Produit/produit";
import { useMediaQuery } from "react-responsive";
import CarouselSecteurs from "../../components/CarouselSecteurs/carouselSecteurs";
const Infos = () => {
  const isMobile = useMediaQuery({ maxWidth: 575 });

  return (
    <section className="infos">
      <div className="infos__services">
        <Card infos={data.cardHomePage[0]} isRight={true} />
        <Card infos={data.cardHomePage[1]} isRight={false} />{" "}
      </div>
      <div className="infos__secteurs">
        {isMobile && (
          <>
            <div className="infos__produits">
              <Produit
                image={`${process.env.PUBLIC_URL}/charpente.jpg`}
                text="Charpente"
              />
              <Produit
                image={`${process.env.PUBLIC_URL}/la-ferreolaise-2.jpg`}
                text="finition"
              />
              <Produit
                image={`${process.env.PUBLIC_URL}/petite-maison-verte-2.jpg`}
                text="Revêtement"
              />
            </div>
          </>
        )}

        {!isMobile && (
          <>
            <CarouselSecteurs />
          </>
        )}
      </div>
    </section>
  );
};

export default Infos;
