import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Header from "../../components/Header/header";
import Cart from "../../Sections/Cart-section/cartSection";
import Contact from "../../Sections/Contact-section/contact-section";
import Links from "../../Sections/Links-section/link-section";
import Soumission from "../../Sections/Soumission/soumission";
import Footer from "../../components/Footer/footer";
import data from "../../data/data";
import "./projectDetail.scss";

const ProjectDetail = () => {
  const { projectSlug } = useParams();
  const project = data.projects.find(
    (item) => item.slug === projectSlug && item.gallery
  );

  if (!project) {
    return <Navigate to="/realisations" replace />;
  }

  return (
    <div>
      <Header logo={`${process.env.PUBLIC_URL}/logo-habitations-dark.svg`} />
      <main className="project-details">
        <h1 className="project-details__title">{project.text}</h1>
        <div className="project-details__gallery">
          {project.gallery.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Projet ${project.text} - vue ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ))}
        </div>
      </main>
      <Soumission />
      <Links />
      <Contact />
      <Cart />
      <Footer />
    </div>
  );
};

export default ProjectDetail;
