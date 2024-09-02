import React, { useState, useEffect } from "react";

import "./link.scss";

const Link = (props) => {
  const [active, setActive] = useState(false);
  const [timer, setTimer] = useState(null);

  const chevronDown = "/chevron-down.svg";

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    if (active) {
      const newTimer = setTimeout(() => {
        setActive(false);
      }, 6000);
      setTimer(newTimer);
    }
    return () => clearTimeout(timer);
  }, [active]);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <section className={`link ${active ? "active" : ""}`}>
      <div className="link__title" onClick={() => handleClick()}>
        <div>{props.title}</div>
        <div className="link__icon">
          <img src={chevronDown} />
        </div>
      </div>
      <div className="link__text">
        <div dangerouslySetInnerHTML={{ __html: props.text }} />
      </div>
    </section>
  );
};

export default Link;
