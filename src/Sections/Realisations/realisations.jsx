import MainImage from "../../components/Project-Main-Image/main-image";
import "./realisation.scss";
import "../../components/Btn.scss";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import CarouselRealisations from "../../components/CarouselRealisations/carouselRealisations";
import data from "../../data/data";

const Realisations = () => {
  const ferreolaiseImage = "/la-ferreeolaise-1.jpg";
  const ferreolaiseText = "la ferréolaise";

  const isMobile = useMediaQuery({ maxWidth: 575 });

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/realisations");
  };

  return (
    <section className="realisations">
      <div className="realisations__text">Nos réalisations</div>
      {isMobile && (
        <>
          <div className="realisations__projects">
            {data.projects.map((project, index) => (
              <MainImage
                key={index}
                images={project.images}
                mainText={project.text}
              />
            ))}
          </div>

          <button className="btn btn--center" onClick={handleButtonClick}>
            <div className="btn__text">Voir tous nos projets</div>
          </button>
        </>
      )}
      {!isMobile && (
        <>
          <div className="realisations__projects">
            <MainImage
              mainImage={[ferreolaiseImage]}
              mainText={ferreolaiseText}
            ></MainImage>
          </div>
          <CarouselRealisations images={data.projects} />
          <button className="btn btn--center" onClick={handleButtonClick}>
            <div className="btn__text">Voir tous nos projets</div>
          </button>
        </>
      )}
    </section>
  );
};

export default Realisations;
