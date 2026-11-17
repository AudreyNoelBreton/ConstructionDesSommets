import React, { useEffect, useId, useState } from "react";

import "./link.scss";

const Link = (props) => {
  const [active, setActive] = useState(false);
  const contentId = useId();

  const chevronDown = `${process.env.PUBLIC_URL}/chevron-down.svg`;

  useEffect(() => {
    if (!active) return undefined;

    const timer = setTimeout(() => setActive(false), 6000);
    return () => clearTimeout(timer);
  }, [active]);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <section className={`link ${active ? "active" : ""}`}>
      <button
        type="button"
        className="link__title"
        onClick={handleClick}
        aria-expanded={active}
        aria-controls={contentId}
      >
        <span>{props.title}</span>
        <span className="link__icon">
          <img src={chevronDown} alt="" aria-hidden="true" />
        </span>
      </button>
      <div className="link__text" id={contentId}>
        <div dangerouslySetInnerHTML={{ __html: props.text }} />
      </div>
    </section>
  );
};

export default Link;
