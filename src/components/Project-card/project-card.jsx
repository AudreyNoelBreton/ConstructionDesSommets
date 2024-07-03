import "./project-card.scss";
import MainImage from "../Project-Main-Image/main-image";
const ProjectCard = ({ mainImage, mainText, secondImage, thirdImage }) => {
  return (
    <div className="project-card">
      <div className="project-card__main">
        <MainImage mainImage={mainImage} mainText={mainText} />
      </div>
      <div className="project-card__secondary">
        <img src={secondImage} className="project-card__img"></img>
        <img src={thirdImage} className="project-card__img"></img>
      </div>
    </div>
  );
};

export default ProjectCard;
