import React from "react";
import "./cartSection.scss";
import { useMediaQuery } from "react-responsive";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Cart = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="cart">
      {isMobile ? (
        <>
          <TransformWrapper>
            <TransformComponent>
              <img className="cart-img" src="/map-mobile.jpg" alt="project" />
            </TransformComponent>
          </TransformWrapper>
          <div className="cart__text-overlay">
            <div className="cart__title">saint-ferréol-les-neiges</div>
            <div className="cart__text">
              Implantée à Saint-Ferréol, notre entreprise contribue activement
              au développement de la région grace à des projets novateurs et
              soigneusement réalisés.
            </div>
          </div>
        </>
      ) : (
        <>
          <TransformWrapper>
            <TransformComponent>
              <img className="cart-img" src="/map.jpg" alt="project" />
            </TransformComponent>
          </TransformWrapper>
          <div className="cart__text-overlay">
            <div className="cart__title">saint-ferréol-les-neiges</div>
            <div className="cart__text">
              Implantée à Saint-Ferréol, notre entreprise contribue activement
              au développement de la région grace à des projets novateurs et
              soigneusement réalisés.
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
