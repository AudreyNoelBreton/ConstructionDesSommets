import React from "react";
import "./slogansection.scss";
const Slogan = () => {
  return (
    <section className="slogan">
      <div className="slogan__infos">
        <div className="slogan__title">
          Secteurs residentiel <br />& commercial
        </div>
        <div className="slogan__secteurs">
          Côte-de-beaupré - Québec - Charlevoix
        </div>

        <div className="slogan__text">
          Que vous vouliez contruire la maisonde vos rêves, vous lancer dans un
          agrandissement ou entreprendre des rénovations, l'équipe des
          Habitations du Sommet met toute son expertise au service de votre
          projet !
        </div>
      </div>

      <div className="slogan__logo">
        <img src="/finitions-icon.svg" alt="Logo" className="slogan__img" />
      </div>
    </section>
  );
};

export default Slogan;
