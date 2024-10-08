import React from "react";
import { useMediaQuery } from "react-responsive";
import { FaArrowRightLong } from "react-icons/fa6";

import "./contact-section.scss";

const Contact = () => {
  const isMobile = useMediaQuery({ maxWidth: 1200 });
  const image = isMobile
    ? `${process.env.PUBLIC_URL}/nous-joindre-mobile.jpg`
    : `${process.env.PUBLIC_URL}/nous-joindre.jpg`;

  const logo = `${process.env.PUBLIC_URL}/apchq-pastille-web-3.png`;
  const sectionStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const handleEmailClick = () => {
    window.location.href = "mailto:info@habitationsdusommet.com";
  };
  return (
    <section className="contact" style={sectionStyle}>
      <div className="contact__content">
        <div className="contact__bottom-left">
          <div className="contact__title">Nous joindre</div>
          <div className="contact__row">
            <div className="contact__members">
              <div className="contact__member">
                <div className="contact__text">Louis Brochu Marier</div>
                <div className="contact__text">581-994-8738</div>
              </div>
              <div className="contact__member">
                <div className="contact__text">William Viens</div>
                <div className="contact__text">581-991-9485</div>
              </div>
            </div>
            <button
              onClick={handleEmailClick}
              className={`btn ${isMobile ? "btn--center" : "btn--email"}`}
            >
              <div className="btn__text-email">
                info@habitationsdusommet.com
              </div>
              <FaArrowRightLong className="btn__icon" />
            </button>
          </div>
        </div>

        <div className="contact__bottom-right">
          <img src={logo} className="contact__logo"></img>
          <div className="contact__license">R.B.Q : 5820-8927-01</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
