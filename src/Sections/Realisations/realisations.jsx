import MainImage from "../../components/Project-Main-Image/main-image";
import "./realisation.scss";
import "../../components/Btn.scss";
const Realisations = () => {
  const ferreolaiseImage = "/la-ferréolaise-1.jpg";
  const ferreolaiseText = "la ferréolaise";
  const consecrationImage = "/project-1.jpg";
  const consecrationText = "La consecration";
  const petiteMaisonImage = "/petite-maison-verte-1.jpg";
  const petiteMaisonText = "La petite maison verte";
  const olympImage = "/l'olympique-1.jpg";
  const olympText = "l'olympique";
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
      <div className="realisations__btn">
        <btn className="btn">
          <div className="btn__text">voir tout nos projets</div>
        </btn>
      </div>
    </section>
  );
};

export default Realisations;
