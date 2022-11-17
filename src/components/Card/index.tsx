import {
  Container,
  Detail,
  Figure,
  ListTechs,
  Name,
  SectionButtons,
} from "./style";

interface CardProps {
  img: string;
  name: string;
  git: string;
  app: string;
  techs: string[];
}

const Card = ({ img, name, git, app, techs }: CardProps) => {
  return (
    <Container>
      <Figure>
        <img src={img} alt="" />
      </Figure>
      <Detail>
        <Name>{name}</Name>
        <ListTechs>
          <h3>Tecnologias Utilizadas</h3>
          <ul>
            {techs.map((tech) => {
              return <li>{tech}</li>;
            })}
          </ul>
        </ListTechs>
        <SectionButtons>
          <button onClick={() => window.open(git, "_blank")}>Código</button>
          <button onClick={() => window.open(app, "_blank")}>Aplicação</button>
        </SectionButtons>
      </Detail>
    </Container>
  );
};

export default Card;
