import React from "react";
import "../../components/Btn.scss";
import "./card.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ infos, isRight }) => {
  const { src, title, text, buttonText, link } = infos;

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(link);
  };
  return (
    <section className="card">
      <img className="card__img" src={src} alt="project" />
      <div className="card__title">{title}</div>
      <div className="card__text">{text}</div>
      {isRight ? (
        <button className="btn btn--end" onClick={handleButtonClick}>
          <div className="btn__text">{buttonText}</div>
        </button>
      ) : (
        <button className="btn btn--start" onClick={handleButtonClick}>
          <div className="btn__text">{buttonText}</div>
        </button>
      )}
    </section>
  );
};

export default Card;
