import React from "react";
import "./infos.scss";
import Card from "../../components/Card/card";
import data from "../../data/data";
import Produit from "../../components/Produit/produit";

const Infos = () => {
  return (
    <section className="infos">
      <div className="infos__services">
        <Card infos={data.cardHomePage[0]} isRight={true} />
        <Card infos={data.cardHomePage[1]} isRight={false} />{" "}
      </div>
      <div className="infos__secteurs">
        <div className="infos__produits">
          <Produit image="/charpente.jpg" text="Charpente" />
          <Produit image="/la-ferreolaise-2.jpg" text="finition" />
          <Produit image="/petite-maison-verte-2.jpg" text="Revetement" />
        </div>
      </div>
    </section>
  );
};

export default Infos;
