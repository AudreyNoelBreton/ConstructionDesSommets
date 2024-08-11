import React from "react";
import "./cartSection.scss";

import { useMediaQuery } from "react-responsive";

const Cart = () => {
  const isMobile = useMediaQuery({ maxWidth: 575 });

  return (
    <section className="cart">
      {isMobile && (
        <>
          <img className="cart-img" src="/map-mobile.jpg" alt="project" />
          <div className="cart__text-overlay">
            <div className="cart__title">saint-ferreol-les-neiges</div>
            <div className="cart__text">
              Implante a Saint-Ferreol, notre entreprise contribue activement au
              developpement de la region grace a des projets novateurs et
              soigneusement realises.
            </div>
          </div>
        </>
      )}
      {!isMobile && (
        <>
          <img className="cart-img" src="/map.jpg" alt="project" />
          <div className="cart__text-overlay">saint-ferreol-les-neiges</div>
        </>
      )}
    </section>
  );
};

export default Cart;
