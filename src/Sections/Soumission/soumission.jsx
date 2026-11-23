import React, { useState } from "react";
import "./soumission.scss";
import "../../components/btn.scss";
import { FaArrowRightLong } from "react-icons/fa6";

const Soumission = () => {
  const [nom, setNom] = useState("");
  const [numero, setNumero] = useState("");
  const [lieu, setLieu] = useState("");
  const [resume, setResume] = useState("");
  const [delais, setDelais] = useState("");
  const [courriel, setCourriel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

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
        Début des travaux souhaité : ${delais}\n
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
        <h2 className="soumission__title">Demander une soumission</h2>

        <div className="soumission__inputs">
          <label className="soumission__field" htmlFor="soumission-nom">
            <span className="soumission__field-label">Nom</span>
            <input
              className="soumission__field-control"
              id="soumission-nom"
              type="text"
              placeholder="Votre nom"
              autoComplete="name"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
          </label>

          <label className="soumission__field" htmlFor="soumission-numero">
            <span className="soumission__field-label">
              Numéro de téléphone
            </span>
            <input
              className="soumission__field-control"
              id="soumission-numero"
              type="tel"
              placeholder="Votre numéro"
              autoComplete="tel"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              required
            />
          </label>

          <label className="soumission__field" htmlFor="soumission-lieu">
            <span className="soumission__field-label">Lieu des travaux</span>
            <input
              className="soumission__field-control"
              id="soumission-lieu"
              type="text"
              placeholder="Ville ou adresse"
              autoComplete="street-address"
              value={lieu}
              onChange={(e) => setLieu(e.target.value)}
              required
            />
          </label>

          <label className="soumission__field" htmlFor="soumission-delais">
            <span className="soumission__field-label">
              Début des travaux souhaité
            </span>
            <input
              className="soumission__field-control"
              id="soumission-delais"
              type="text"
              placeholder="Ex. printemps 2027"
              value={delais}
              onChange={(e) => setDelais(e.target.value)}
              required
            />
          </label>

          <label
            className="soumission__field soumission__field--wide"
            htmlFor="soumission-resume"
          >
            <span className="soumission__field-label">Résumé du projet</span>
            <textarea
              className="soumission__field-control soumission__field-control--multiline"
              id="soumission-resume"
              placeholder="Décrivez brièvement votre projet"
              rows={4}
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              required
            />
          </label>

          <label
            className="soumission__field soumission__field--wide"
            htmlFor="soumission-courriel"
          >
            <span className="soumission__field-label">Courriel</span>
            <input
              className="soumission__field-control"
              id="soumission-courriel"
              type="email"
              placeholder="Votre adresse courriel"
              autoComplete="email"
              value={courriel}
              onChange={(e) => setCourriel(e.target.value)}
              required
            />
          </label>

          <div className="soumission__actions">
            <button type="submit" className="btn">
              <span className="btn__text">Envoyer</span>
              <FaArrowRightLong className="btn__icon" aria-hidden="true" />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Soumission;
