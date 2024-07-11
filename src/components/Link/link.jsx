import React from "react";
import { useState } from "react";
import "./link.scss";

const Link = (props) => {
  const [active, setActive] = useState(false);
  return (
    <section className={`link ${active ? "active" : ""}`}>
      <div className="link__title" onClick={() => setActive(!active)}>
        <div>{props.title}</div>
        <div className="link__icon">
          <i className="bx bxs-chevron-down"></i>
        </div>
      </div>
      <div className="link__text">{props.text}</div>
    </section>
  );
};

export default Link;
