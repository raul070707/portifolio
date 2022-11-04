import { useNavigate } from "react-router-dom";
import { Container, Redirect, SubTitle, Title } from "./style";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Title>Raul Ribeiro</Title>
        <SubTitle>Desenvolvedor Front-End</SubTitle>
        <Redirect onClick={() => navigate("/about")}>
          <span>Saiba mais sobre o que faço</span>
        </Redirect>
      </Container>
    </>
  );
};

export default Home;
