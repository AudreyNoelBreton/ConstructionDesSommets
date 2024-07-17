import React from "react";
import "./members.scss";

import Member from "../../components/Member/member";

const Members = () => {
  return (
    <section className="members">
      <div className="members__text">
        Les Habitations du Sommet est une entreprise de construction qui vise
        l'excellence par la réalisation de projets novateurs et soigneusement
        réalisés. Notre compétence et notre dévouement font de chaque projet une
        réussite dont vous pourrez êtres fiers.
      </div>
      <Member position={"first"} />
      <Member position={"second"} />
    </section>
  );
};

export default Members;
