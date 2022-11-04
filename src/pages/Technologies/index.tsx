import Header from "../../components/Header";
import {
  Container,
  Description,
  List,
  ListContainer,
  MainInfo,
  MiddleListContainer,
  SectionList,
  SectionText,
  TechList,
  Title,
} from "./style";

const Technologies = () => {
  return (
    <>
      <Header />
      <Container>
        <MainInfo>
          <SectionText>
            <Title>Tecnologias Aprendidas</Title>
            <Description>
              Meus primeiros passos com programação comecei aprendendo sobre o
              desenvolvimento Front-End, mas hoje estudo Back-End para me tornar
              um desenvolvedor Full Stack.
            </Description>
          </SectionText>
          <SectionList>
            <ListContainer>
              <span>Front-End</span>
              <List>
                <li>React</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </List>
            </ListContainer>
            <MiddleListContainer>
              <span>Back-End</span>
              <List>
                <li>Node.js</li>
              </List>
            </MiddleListContainer>
            <ListContainer>
              <span>Deploy</span>
              <List>
                <li>Vercel</li>
                <li>Heroku</li>
                <li>Insomnia</li>
              </List>
            </ListContainer>
          </SectionList>
        </MainInfo>
        <MainInfo>
          <SectionText>
            <Title>Experiência</Title>
            <Description>
              Minha principal experiência é o trabalho de Coach(Monitoria) feito
              na Kenzie Academy Brasil, onde orientava e auxiliava alunos nas
              atividades referentes ao desenvolvimento web, tambem corrigia
              atividades e fazia feedback em relação ao desempenho dos alunos.
            </Description>
          </SectionText>
          <SectionList>
            <TechList>
              <span>Tecnologias Utilizadas</span>
              <List>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>GIT</li>
              </List>
            </TechList>
          </SectionList>
        </MainInfo>
      </Container>
    </>
  );
};

export default Technologies;
