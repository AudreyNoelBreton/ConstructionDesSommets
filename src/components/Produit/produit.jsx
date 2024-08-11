import React from "react";
import "./produit.scss";

const Produit = ({ image, text }) => {
  return (
    <div className="produit">
      <img src={image} alt="ferreolaise" className="infos__produit" />
      <div className="produit__overlay">
        <div className="produit__text">{text}</div>
      </div>
    </div>
  );
};

export default Produit;
