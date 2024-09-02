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
      <div className="mobile-menu__socials">
        <a
          href="https://www.facebook.com/profile.php?id=100085617410260&mibextid=LQQJ4d"
          className="mobile-menu__social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/leshabitationsdusommet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          className="mobile-menu__social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrInstagram />
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
