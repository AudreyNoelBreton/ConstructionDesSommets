import React from "react";
import "../../components/Btn.scss";
import "./card.scss";

const Card = ({ infos, isRight }) => {
  const { src, title, text, buttonText } = infos;
  return (
    <section className="card">
      <img className="card__img" src={src} alt="project" />
      <div className="card__title">{title}</div>
      <div className="card__text">{text}</div>
      {isRight ? (
        <div className="btn btn--end">
          <div className="btn__text">{buttonText}</div>
        </div>
      ) : (
        <div className="btn btn--start">
          <div className="btn__text">{buttonText}</div>
        </div>
      )}
    </section>
  );
};

export default Card;
