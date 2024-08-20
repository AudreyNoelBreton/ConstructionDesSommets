import "./project-card.scss";
import MainImage from "../Project-Main-Image/main-image";

const ProjectCard = ({ className, images, text, url }) => {
  return (
    <div className={`project-card ${className}`}>
      <a className="project-card__main">
        <MainImage images={images} mainText={text} url={url} />
      </a>
      <div className="project-card__secondary">
        {images[1] && (
          <a href={url} className="project-card__link">
            <img
              src={images[1]}
              className="project-card__img"
              alt="Secondary"
            />
          </a>
        )}
        {images[2] && (
          <a href={url} className="project-card__link">
            <img
              src={images[2]}
              className="project-card__img"
              alt="Secondary"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
