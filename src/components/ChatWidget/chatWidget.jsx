import React from "react";

import { useMediaQuery } from "react-responsive";
import "./chatWidget.scss";

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 575 });

  return (
    <div className="chatWidget">
      <div className="chatWidget__header">
        <div className="chatWidget__title">Questions? Ecrivez-nous!</div>
      </div>
      <div className="chatWidget__body">ICI</div>
    </div>
  );
};

export default About;
