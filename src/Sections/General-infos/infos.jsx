import React from "react";
import "./infos.scss";
import Card from "../../components/Card/card";
import data from "../../data/data";

const Infos = () => {
  return (
    <section className="infos">
      <Card infos={data.cardHomePage[0]} isRight={true} />
      <Card infos={data.cardHomePage[1]} isRight={false} />
    </section>
  );
};

export default Infos;
