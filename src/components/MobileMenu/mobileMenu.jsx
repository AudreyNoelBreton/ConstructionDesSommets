import "./mobileMenu.scss";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

const MobileMenu = ({ isOpen }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
      <ul className="mobile-menu__text">
        <li>
          <Link to="/team" className="mobile-menu__link">
            <span className="mobile-menu__text">À PROPOS</span>
          </Link>
        </li>
        <li>
          <Link to="/realisations" className="mobile-menu__link">
            <span className="mobile-menu__text">NOS RÉALISATIONS</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="mobile-menu__link">
            <span className="mobile-menu__text">NOUS JOINDRE</span>
          </Link>
        </li>
      </ul>
      <ul className="mobile-menu__socials">
        <li className="mobile-menu__social">
          <FaFacebookF size={25} />
        </li>
        <li className="mobile-menu__social">
          <GrInstagram size={25} />
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
