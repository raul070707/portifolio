import { FaBook, FaGithub, FaLinkedin } from "react-icons/fa";
import Header from "../../components/Header";
import {
  Button,
  Contact,
  ContactContainer,
  Container,
  MainInfo,
  PresentationLetter,
  SubTitle,
  Title,
} from "./style";
const About = () => {
  return (
    <>
      <Header />
      <Container>
        <MainInfo>
          <div>
            <Title>Raul Ribeiro</Title>
            <SubTitle>Desenvolvedor Front-End</SubTitle>

            <PresentationLetter>
              Fascinado pela programação, busco constantemente aprimorar minhas
              habilidades técnicas e comportamentais, afim de me tornar um bom
              profissional.
            </PresentationLetter>
          </div>
          <ContactContainer>
            <Contact>
              <Button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1vP0vvzHLR3crn0q_lr8BsWA26G074sTt/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                <FaBook />
                Download CV
              </Button>
              <Button
                onClick={() =>
                  window.open("https://github.com/raul070707", "_blank")
                }
              >
                <FaGithub />
                Github
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/raulribeirobastos/",
                    "_blank"
                  )
                }
              >
                <FaLinkedin />
                Linkedin
              </Button>
            </Contact>
          </ContactContainer>
        </MainInfo>
      </Container>
    </>
  );
};

export default About;
