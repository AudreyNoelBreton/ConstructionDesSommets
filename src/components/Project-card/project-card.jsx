import "./project-card.scss";
import MainImage from "../Project-Main-Image/main-image";
const ProjectCard = ({ className, image1, text, image2, image3, url }) => {
  return (
    <div className={`project-card ${className}`}>
      <a className="project-card__main">
        <MainImage mainImage={image1} mainText={text} url={url} />
      </a>
      <div className="project-card__secondary">
        <img src={image2} className="project-card__img" />
        <img src={image3} className="project-card__img"></img>
      </div>
    </div>
  );
};

export default ProjectCard;
