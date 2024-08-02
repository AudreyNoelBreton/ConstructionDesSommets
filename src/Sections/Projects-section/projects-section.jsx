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
          image1={project.image1}
          text={project.text}
          image2={project.image2}
          image3={project.image3}
          url={project.url}
        />
      ))}
    </section>
  );
};

export default Projects;
