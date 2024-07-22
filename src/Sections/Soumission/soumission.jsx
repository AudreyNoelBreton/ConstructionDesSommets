import "./soumission.scss";
const Soumission = () => {
  return (
    <section className="soumission">
      <div className="soumission__container">
        <div className="soumission__title">Demander une soumission</div>
        <ul className="soumission__row">
          <li className="soumission__input">
            <div className="soumission__font">nom</div>
          </li>
          <li className="soumission__input">
            <div className="soumission__text">numero de telephone</div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Soumission;
