import React from "react";
import ProjectCard from "../../components/Project-card/project-card";
import "./project-section.scss";
import data from "../../data/data";

const Projects = () => {
  return (
    <section className="projects">
      {data.projects.map((project, index) => (
        <ProjectCard
          key={index}
          className={index % 2 === 0 ? "column" : "column-reverse"}
          images={project.images}
          text={project.text}
          url={project.url}
        />
      ))}
    </section>
  );
};

export default Projects;
