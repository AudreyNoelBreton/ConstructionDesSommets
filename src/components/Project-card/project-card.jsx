import "./project-card.scss";
import MainImage from "../Project-Main-Image/main-image";
const ProjectCard = ({ className, image1, text, image2, image3, url }) => {
  return (
    <div className={`project-card ${className}`}>
      <a className="project-card__main">
        <MainImage mainImage={image1} mainText={text} url={url} />
      </a>
      <div className="project-card__secondary">
        <a href={url} className="project-card__link">
          <img src={image2} className="project-card__img" />
        </a>
        <a href={url} className="project-card__link">
          {" "}
          <img src={image3} className="project-card__img"></img>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
