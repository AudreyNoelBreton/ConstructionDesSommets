import React, { useState } from "react";
import "./soumission.scss";
import { CiImport } from "react-icons/ci";

const Soumission = () => {
  const [nom, setNom] = useState("");
  const [numero, setNumero] = useState("");
  const [lieu, setLieu] = useState("");
  const [resume, setResume] = useState("");
  const [delais, setDelais] = useState("");
  const [courriel, setCourriel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Affiche l'alerte pour rappeler à l'utilisateur de joindre les plans
    if (window.confirm("N'oubliez pas de joindre vos plans dans le message.")) {
      // Prépare le contenu de l'email
      const emailContent = `
        Nom: ${nom}\n
        Numéro de téléphone: ${numero}\n
        Lieu des travaux: ${lieu}\n
        Résumé du projet: ${resume}\n
        Délais souhaité: ${delais}\n
        Courriel: ${courriel}
      `;

      // Ouvre le client de messagerie par défaut avec les informations préremplies
      window.location.href = `mailto:?subject=Demande de soumission&body=${encodeURIComponent(
        emailContent
      )}`;
    }
  };

  return (
    <section className="soumission">
      <form className="soumission__container" onSubmit={handleSubmit}>
        <div className="soumission__title">Demander une soumission</div>

        <div className="soumission__inputs">
          <div className="soumission__row">
            <div className="soumission__input soumission__input--nom">
              <div className="soumission__text">Nom</div>
              <input
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
              />
            </div>
            <div className="soumission__input soumission__input--numero">
              <div className="soumission__text">Numéro de téléphone</div>
              <input
                type="text"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="soumission__row">
            <div className="soumission__input">
              <div className="soumission__text">Lieu des travaux</div>
              <input
                type="text"
                value={lieu}
                onChange={(e) => setLieu(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="soumission__row">
            <div className="soumission__input">
              <div className="soumission__text">Résumé du projet</div>
              <input
                type="text"
                value={resume}
                onChange={(e) => setResume(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="soumission__row">
            <div className="soumission__input">
              <div className="soumission__text">Délais souhaité</div>
              <input
                type="text"
                value={delais}
                onChange={(e) => setDelais(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="soumission__row">
            <div className="soumission__input">
              <div className="soumission__text">Inscrire votre courriel</div>
              <input
                type="email"
                value={courriel}
                onChange={(e) => setCourriel(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="soumission__row">
            <div className="soumission__input">
              <button type="submit" className="soumission__text">
                Envoyer
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Soumission;
