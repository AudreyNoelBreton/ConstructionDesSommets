import React from "react";

import "./contact-section.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__content">
        <div className="contact__title">Nous joindre</div>
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
        <button className="btn btn--center">
          <div className="btn__text">info@habitationsdusommet.com</div>
        </button>

        <div className="contact__text">R.B.Q : 5820-8927-01</div>
      </div>
    </section>
  );
};

export default Contact;
