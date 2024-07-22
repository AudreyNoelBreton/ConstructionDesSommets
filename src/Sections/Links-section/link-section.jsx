import React from "react";
import { useState } from "react";
import "./link-section.scss";
import Link from "../../components/Link/link";
import data from "../../data/data";
const Links = () => {
  return (
    <section className="links">
      <div className="links__title">Questions frequentes</div>
      <div className="links__content">
        {data.questions.map((link, index) => (
          <div key={index}>
            <Link title={link.title} text={link.text} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Links;
