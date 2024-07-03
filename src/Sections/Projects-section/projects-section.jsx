import ProjectCard from "../../components/Project-card/project-card";
import "./project-section.scss";

const Projects = () => {
  const mainImage = "/project-1.jpg";
  const mainText = "La consecration";
  const secondImage = "/project-1-2.jpg";
  const thirdImage = "/project-1-1.jpg";

  const project2Image = "/petite-maison-verte-1.jpg";
  const project2Text = "La petite maison verte";
  const project2SecondImage = "/petite-maison-verte-2.jpg";
  const project2ThirdImage = "/petite-maison-verte-3.jpg";

  const project3Image = "/la-ferréolaise-1.jpg";
  const project3Text = "la ferréolaise";
  const project3SecondImage = "/la-ferréolaise-2.jpg";
  const project3ThirdImage = "/la-ferréolaise-3.jpg";

  const project4Image = "/l'olympique-1.jpg";
  const project4Text = "l'olympique";
  const project4SecondImage = "/l'olympique-2.jpg";
  const project4ThirdImage = "/l'olympique-3.jpg";

  return (
    <section className="projects">
      <ProjectCard
        mainImage={mainImage}
        mainText={mainText}
        secondImage={secondImage}
        thirdImage={thirdImage}
      ></ProjectCard>
      <ProjectCard
        mainImage={project2Image}
        mainText={project2Text}
        secondImage={project2SecondImage}
        thirdImage={project2ThirdImage}
      ></ProjectCard>
      <ProjectCard
        mainImage={project3Image}
        mainText={project3Text}
        secondImage={project3SecondImage}
        thirdImage={project3ThirdImage}
      ></ProjectCard>

      <ProjectCard
        mainImage={project4Image}
        mainText={project4Text}
        secondImage={project4SecondImage}
        thirdImage={project4ThirdImage}
      ></ProjectCard>
    </section>
  );
};

export default Projects;
