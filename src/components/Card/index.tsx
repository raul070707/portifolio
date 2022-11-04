import { Container, Detail, Figure, Name, SectionButtons } from "./style";

interface CardProps {
  img: string;
  name: string;
  git: string;
  app: string;
}

const Card = ({ img, name, git, app }: CardProps) => {
  return (
    <Container>
      <Figure>
        <img src={img} alt="" />
      </Figure>
      <Detail>
        <Name>{name}</Name>
        <SectionButtons>
          <button onClick={() => window.open(git, "_blank")}>Código</button>
          <button onClick={() => window.open(app, "_blank")}>Aplicação</button>
        </SectionButtons>
      </Detail>
    </Container>
  );
};

export default Card;
