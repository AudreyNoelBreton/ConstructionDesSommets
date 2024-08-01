import MainImage from "../../components/Project-Main-Image/main-image";
import "./realisation.scss";
import "../../components/Btn.scss";
import { useNavigate } from "react-router-dom";
const Realisations = () => {
  const ferreolaiseImage = "/la-ferreeolaise-1.jpg";
  const ferreolaiseText = "la ferréolaise";
  const consecrationImage = "/project-1.jpg";
  const consecrationText = "La consecration";
  const petiteMaisonImage = "/petite-maison-verte-1.jpg";
  const petiteMaisonText = "La petite maison verte";
  const olympImage = "/l'olympique-1.jpg";
  const olympText = "l'olympique";

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/realisations");
  };

  return (
    <section className="realisations">
      <div className="realisations__text">Nos réalisations</div>
      <div className="realisations__projects">
        <MainImage
          mainImage={ferreolaiseImage}
          mainText={ferreolaiseText}
        ></MainImage>
        <MainImage
          mainImage={consecrationImage}
          mainText={consecrationText}
        ></MainImage>
        <MainImage
          mainImage={petiteMaisonImage}
          mainText={petiteMaisonText}
        ></MainImage>
        <MainImage mainImage={olympImage} mainText={olympText}></MainImage>
      </div>

      <button className="btn btn--center" onClick={handleButtonClick}>
        <div className="btn__text">Voir tous nos projets</div>
      </button>
    </section>
  );
};

export default Realisations;
