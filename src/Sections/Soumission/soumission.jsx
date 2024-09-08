import React, { useState } from "react";
import "./soumission.scss";
import "../../components/Btn.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";

const Soumission = () => {
  const [nom, setNom] = useState("");
  const [numero, setNumero] = useState("");
  const [lieu, setLieu] = useState("");
  const [resume, setResume] = useState("");
  const [delais, setDelais] = useState("");
  const [courriel, setCourriel] = useState("");
  const isMobile = useMediaQuery({ maxWidth: 575 });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Message d'alerte natif du navigateur
    const confirmMessage =
      "N'oubliez pas de joindre vos plans en pièces jointes dans le courriel.";
    const userConfirmed = window.confirm(confirmMessage);
    const recipientEmail = "info@habitationsdusommet.com";

    if (userConfirmed) {
      const emailContent = `
        Nom: ${nom}\n
        Numéro de téléphone: ${numero}\n
        Lieu des travaux: ${lieu}\n
        Résumé du projet: ${resume}\n
        Délais souhaité: ${delais}\n
        Courriel: ${courriel}
      `;

      window.location.href = `mailto:${recipientEmail}?subject=Demande de soumission&body=${encodeURIComponent(
        emailContent
      )}`;
    }
  };

  return (
    <section className="soumission">
      <form className="soumission__container" onSubmit={handleSubmit}>
        <div className="soumission__title">Demander une soumission</div>

        <div className="soumission__inputs">
          {isMobile && (
            <>
              <div className="soumission__row">
                <div className="soumission__input soumission__input--nom">
                  <input
                    type="text"
                    placeholder="Nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    required
                  />
                </div>
                <div className="soumission__input soumission__input--numero">
                  <input
                    type="text"
                    placeholder="Numéro de téléphone"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="soumission__row">
                <div className="soumission__input">
                  <input
                    type="text"
                    placeholder="Lieu des travaux"
                    value={lieu}
                    onChange={(e) => setLieu(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="soumission__row">
                <div className="soumission__input">
                  <input
                    type="text"
                    placeholder="Résumé du projet"
                    value={resume}
                    onChange={(e) => setResume(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="soumission__row">
                <div className="soumission__input">
                  <input
                    type="text"
                    placeholder="Délais souhaité"
                    value={delais}
                    onChange={(e) => setDelais(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="soumission__row">
                <div className="soumission__input">
                  <input
                    type="email"
                    placeholder="Inscrire votre courriel"
                    value={courriel}
                    onChange={(e) => setCourriel(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="soumission__row soumission__row--end">
                <button className="btn">
                  <div className="btn__text">Envoyer</div>
                  <FaArrowRightLong className="btn__icon" />
                </button>
              </div>
            </>
          )}
          {!isMobile && (
            <>
              <div className="soumission__row">
                <div className="soumission__input ">
                  <input
                    type="text"
                    placeholder="Nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    required
                  />
                </div>
                <div className="soumission__input ">
                  <input
                    type="text"
                    placeholder="Numéro de téléphone"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="soumission__row">
                <div className="soumission__input">
                  <input
                    type="text"
                    placeholder="Lieu des travaux"
                    value={lieu}
                    onChange={(e) => setLieu(e.target.value)}
                    required
                  />
                </div>
                <div className="soumission__input">
                  <input
                    type="text"
                    placeholder="Délais souhaité"
                    value={delais}
                    onChange={(e) => setDelais(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="soumission__row">
                <div className="soumission__input">
                  <input
                    type="text"
                    placeholder="Résumé du projet"
                    value={resume}
                    onChange={(e) => setResume(e.target.value)}
                    required
                  />
                </div>
                <div className="soumission__input">
                  <input
                    type="email"
                    placeholder="Inscrire votre courriel"
                    value={courriel}
                    onChange={(e) => setCourriel(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="soumission__row soumission__row--end">
                <button className="btn">
                  <div className="btn__text">Envoyer</div>
                  <FaArrowRightLong className="btn__icon" />
                </button>
              </div>
            </>
          )}
        </div>
      </form>
    </section>
  );
};

export default Soumission;
