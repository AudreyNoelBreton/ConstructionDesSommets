import React from "react";
import "./slogansection.scss";
const Slogan = () => {
  return (
    <section className="slogan">
      <div className="slogan__title">
        Secteurs residentiel <br />& commercial
      </div>
      <div className="slogan__secteurs">
        Cote-de-beaupre - Quebec - Charlevoix
      </div>

      <div className="slogan__text">
        Que vous vouliez contruire la maisonde vos reves, vous lancer dans un
        agrandissement ou entreprendre des renovations, l'equipe des Habitations
        du Sommet met toute son expertise au service de votre projet !
      </div>

      <div className="slogan__logo">
        <img src="/logo-moutains.svg" alt="Logo" className="slogan__img" />
      </div>
    </section>
  );
};

export default Slogan;
