import { useContext } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { ProjectsContext } from "../../providers/Projects";
import { Container } from "./style";

const Projects = () => {
  const { projectsList } = useContext(ProjectsContext);

  return (
    <>
      <Header />
      <Container>
        {projectsList.map((project) => {
          return (
            <Card
              img={project.img}
              name={project.title}
              git={project.git}
              app={project.app}
            />
          );
        })}
      </Container>
    </>
  );
};

export default Projects;
