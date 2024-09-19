import React from "react";
import "./member.scss";
import "../../components/Btn.scss";

const Member = ({ position }) => {
  return (
    <div>
      {position === "first" && (
        <>
          <div className="member">
            <img
              src="SOMMET_14.png"
              alt="Construction"
              className="member__img"
            />
            <div className="member__content">
              <div className="member__name">
                Louis <b />
                brochu Marier
              </div>
              <div className="member__text">
                Grâce à son entourage, Louis développe dès son jeune âge une
                passion pour le travail du bois et la minutie, ce qui le pousse
                à choisir le domaine de la construction.
              </div>

              <div className="member__text">
                Une fois son diplôme de charpenterie-menuiserie en poche, Louis
                cumule plus de 10 ans d’expérience auprès de divers
                entrepreneurs en construction. C’est surtout son expérience pour
                un entrepreneur haut-de-gamme à Whistler, en
                Colombie-Britannique, qui est déterminant, renforçant son désir
                de se lancer en affaires et de réaliser des projets ambitieux
                axés sur la qualité.
              </div>

              <div className="member__text">
                De retour au Québec, son amour pour la montagne le conduit à
                s’établir au Mont-Sainte-Anne où il fonde Les Habitations du
                Sommet avec la ferme intention de réaliser de grands projets
                dans sa région adoptive, la Côte-de-Beaupré.
              </div>
              <a href="tel:581-994-8738" className="btn btn--end">
                <div className="btn__text">581-994-8738</div>
              </a>
            </div>
          </div>
        </>
      )}
      {position === "second" && (
        <>
          <div className="member member--background-green">
            <img
              src="SOMMET_9.png"
              alt="Construction"
              className="member__img"
            />

            <div className="member__content">
              <div className="member__name">William viens</div>
              <div className="member__text">
                William Viens obtient son diplôme en charpenterie-menuiserie en
                2005 à Drummondville. Il travaille depuis dans le domaine de la
                construction résidentielle et cumule plus de 20 ans
                d’expérience.
              </div>

              <div className="member__text">
                En 2010, William décide de s’établir sur la Côte-de-Beaupré. La
                proximité des montagnes pour élever sa famille et pour la
                pratique de ses deux passions, le vélo de montagne et le ski
                alpin, est pour lui un choix évident.
              </div>

              <div className="member__text">
                Sa grande expertise lui permet d’assurer une bonne coordination
                des projets. Pour William, chaque étape est importante dans la
                réalisation d’une habitation. La maîtrise de ses compétences et
                son calme sauront vous mettre en confiance.
              </div>
              <a href="tel:581-991-9485" className="btn btn--end">
                <div className="btn__text">581-991-9485</div>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Member;
