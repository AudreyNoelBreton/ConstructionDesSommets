import "./consecration.scss";
import Header from "../../components/Header/header";
import data from "../../data/data";
const Consecration = () => {
  let foundProject = null;
  for (let i = 0; i < data.projects.length; i++) {
    if (data.projects[i].text === "La consecration") {
      foundProject = data.projects[i];
      break;
    }
  }

  return (
    <div>
      <Header />
      <div className="consecration">
        <div className="consecration__title">{foundProject.text}</div>
        <div className="consecration__gallery">
          <div className="consecration__items">
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-36.jpg"
              className="consecration__item"
            ></img>
          </div>

          <div className="consecration__items">
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-28.jpg"
              className="consecration__item"
            ></img>
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-33.jpg"
              className="consecration__item"
            ></img>
          </div>
          <div className="consecration__items">
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-30.jpg"
              className="consecration__item"
            ></img>
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-32.jpg"
              className="consecration__item"
            ></img>
          </div>

          <div className="consecration__items">
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-15.jpg"
              className="consecration__item"
            ></img>
          </div>

          <div className="consecration__items">
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-7.jpg"
              className="consecration__item"
            ></img>
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-9.jpg"
              className="consecration__item"
            ></img>
          </div>

          <div className="consecration__items">
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-5.jpg"
              className="consecration__item"
            ></img>
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-11.jpg"
              className="consecration__item"
            ></img>
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-13.jpg"
              className="consecration__item"
            ></img>
          </div>
          <div className="consecration__items">
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-14.jpg"
              className="consecration__item"
            ></img>
          </div>
          <div className="consecration__items">
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-19.jpg"
              className="consecration__item"
            ></img>
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-23.jpg"
              className="consecration__item"
            ></img>
          </div>
          <div className="consecration__items">
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-22.jpg"
              className="consecration__item"
            ></img>
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-21.jpg"
              className="consecration__item"
            ></img>
            <img
              src="/Projet/Habitations-du-sommet-rue-du-sommet-24.jpg"
              className="consecration__item"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consecration;
