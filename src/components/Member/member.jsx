import React from "react";
import "./member.scss";
import "../../components/Btn.scss";

const Member = ({ position }) => {
  return (
    <div>
      {position === "first" && (
        <>
          <div className="member">
            <div className="member__images-stack-left">
              <img
                src="louis-brochu.jpg"
                alt="Skiing"
                className="background-image"
              />
              <img
                src="louis-brochu-2.jpg"
                alt="Construction"
                className="overlay-image"
              />
            </div>
            <div className="member__content">
              <div className="member__name">Louis brochu</div>
              <div className="member__text">
                Dès son plus jeune âge, Louis est aux premières loges pour
                observer son père bâtir son entreprise de fabrication de portes
                et fenêtres en bois. Dès qu'il atteint l'âge de travailler,
                Louis passe ses étés à la shop et, au fil des ans, il occupe
                différents postes au sein de l'entreprise. De là lui vient sa
                passion pour le bois et le travial bien fait !
              </div>

              <div className="member__text">
                Dès qu'il termine son cours en charpenterie-menuiserie, Louis
                travaille pendant plus de 10 ans pour différents entrepreneurs
                en construction. Son emploi au sein de TM Builders, un
                entrepreneur haut-de-gamme à Whistler en Colombie-Britannique,
                est une expérience particulièrement marquante qui confirme sa
                volonté de se lancer en affaires et de mener des projets
                d'envergure qui mise sur la qualité avant tout.
              </div>

              <div className="member__text">
                De retour au Québec, son amour pour la montagne l'amène à
                s'installer près du Mont-Sainte-Anne et il fonde les Habitations
                du Sommet, bien déterminé à accomplir de grands projets dans son
                patelin adoptif, la Côte-de-Beaupré. Vous aurez donc compris le
                double sens derrière le nom Les Habitations du Sommet...
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
            <div className="member__images-stack-right">
              <img
                src="william-viens.jpg"
                alt="Biking"
                className="background-image"
              />
              <img
                src="william-viens-2.jpg"
                alt="Construction"
                className="overlay-image"
              />
            </div>
            <div className="member__content">
              <div className="member__name">William viens</div>
              <div className="member__text">
                Dès son plus jeune âge, Louis est aux premières loges pour
                observer son père bâtir son entreprise de fabrication de portes
                et fenêtres en bois. Dès qu'il atteint l'âge de travailler,
                Louis passe ses étés à la shop et, au fil des ans, il occupe
                différents postes au sein de l'entreprise. De là lui vient sa
                passion pour le bois et le travial bien fait !
              </div>

              <div className="member__text">
                Dès qu'il termine son cours en charpenterie-menuiserie, Louis
                travaille pendant plus de 10 ans pour différents entrepreneurs
                en construction. Son emploi au sein de TM Builders, un
                entrepreneur haut-de-gamme à Whistler en Colombie-Britannique,
                est une expérience particulièrement marquante qui confirme sa
                volonté de se lancer en affaires et de mener des projets
                d'envergure qui mise sur la qualité avant tout.
              </div>

              <div className="member__text">
                De retour au Québec, son amour pour la montagne l'amène à
                s'installer près du Mont-Sainte-Anne et il fonde les Habitations
                du Sommet, bien déterminé à accomplir de grands projets dans son
                patelin adoptif, la Côte-de-Beaupré. Vous aurez donc compris le
                double sens derrière le nom Les Habitations du Sommet...
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
