import "./mobileMenu.scss";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className="mobile-menu mobile-menu--open">
      <ul className="mobile-menu__text">
        <li>
          <Link to="/" className="mobile-menu__link">
            <span className="mobile-menu__text">À PROPOS</span>
          </Link>
        </li>
        <li>
          <Link to="/realisations" className="mobile-menu__link">
            <span className="mobile-menu__text">NOS RÉALISATIONS</span>
          </Link>
        </li>
        <li>
          <Link to="/team" className="mobile-menu__link">
            <span className="mobile-menu__text">NOTRE ÉQUIPE</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="mobile-menu__link">
            <span className="mobile-menu__text">NOUS JOINDRE</span>
          </Link>
        </li>
      </ul>
      <ul className="mobile-menu__socials">
        <li className="mobile-menu__icon">FB</li>
        <li>IS</li>
      </ul>
    </div>
  );
};

export default MobileMenu;
