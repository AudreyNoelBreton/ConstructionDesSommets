import React from "react";
import "./form.scss";
import "../../components/Btn.scss";
const Form = () => {
  return (
    <div className="form-container">
      <span className="form-container__title">DEMANDER UNE SOUMISSION</span>
      <div className="form-container__content">
        <div className="form-container__row">
          <input
            className="form-container__item"
            type="text"
            placeholder="Nom"
          />
          <input
            className="form-container__item"
            type="text"
            placeholder="Numéro de téléphone"
          />
        </div>
        <div className="form-container__row">
          <input
            className="form-container__item"
            type="text"
            placeholder="Lieu des travaux"
          />
        </div>
        <div className="form-container__row">
          <textarea
            className="form-container__item"
            placeholder="Résumé du projet"
          ></textarea>
        </div>
        <div className="form-container__row">
          <input
            className="form-container__item"
            type="text"
            placeholder="Délais souhaité"
          />
        </div>
        <div className="form-container__row">
          <input
            className="form-container__item"
            type="email"
            placeholder="Inscrire votre courriel"
          />
        </div>
        <div className="form-container__row">
          <button type="button" className="plans-button">
            Plans
          </button>
          <button type="submit" className="btn">
            <div className="btn__text">Envoyer</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
