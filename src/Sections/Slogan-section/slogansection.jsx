import React from "react";
import "./slogansection.scss";
const Slogan = () => {
  const logo = `${process.env.PUBLIC_URL}/finitions-icon.svg`;
  return (
    <section className="slogan">
      <div className="slogan__infos">
        <div className="slogan__title">
          Secteurs résidentiel <br />& commercial
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
        <img src={logo} alt="Logo" />
      </div>
    </section>
  );
};

export default Slogan;
