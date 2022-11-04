import {
  DevContainer,
  HeaderStyle,
  Links,
  Logo,
  LogoContainer,
  Menu,
  MenuBar,
  MenuLinks,
  Name,
  Nav,
  Profession,
  TextContainer,
  Contact,
  SwitchComponent,
  ThemeButton,
} from "./style";

import {
  FaChevronRight,
  FaGithub,
  FaLaptopCode,
  FaLinkedin,
  FaMoon,
  FaPaste,
  FaSun,
  FaUserAlt,
} from "react-icons/fa";

import { useContext, useState } from "react";

import { ThemeContext } from "../../providers/Theme";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <Nav open={open}>
      <HeaderStyle open={open}>
        <DevContainer>
          <LogoContainer>
            <Logo>RR</Logo>
          </LogoContainer>

          <TextContainer>
            {open && (
              <>
                <Name>Raul Ribeiro</Name>

                <Profession>Front-End Developer</Profession>
              </>
            )}
          </TextContainer>
        </DevContainer>

        <i onClick={() => setOpen(!open)}>
          <FaChevronRight />
        </i>
      </HeaderStyle>
      <MenuBar>
        <Menu>
          <MenuLinks>
            <Links open={open} onClick={() => navigate("/about")}>
              <span>
                <i>
                  <FaUserAlt />
                </i>
                {open && <div>Sobre mim</div>}
              </span>
            </Links>
            <Links open={open} onClick={() => navigate("/techs")}>
              <span>
                <i>
                  <FaPaste />
                </i>
                {open && <div>Tecnologias</div>}
              </span>
            </Links>
            <Links open={open} onClick={() => navigate("/projects")}>
              <span>
                <i>
                  <FaLaptopCode />
                </i>
                {open && <div>Projetos</div>}
              </span>
            </Links>
          </MenuLinks>
        </Menu>
        <Contact>
          <Links
            open={open}
            onClick={() =>
              window.open("https://github.com/raul070707", "_blank")
            }
          >
            <span>
              <i>
                <FaGithub />
              </i>
              {open && <div>Github</div>}
            </span>
          </Links>
          <Links
            open={open}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/raulribeirobastos/",
                "_blank"
              )
            }
          >
            <span>
              <i>
                <FaLinkedin />
              </i>
              {open && <div>Linkedin</div>}
            </span>
          </Links>
          <ThemeButton open={open}>
            {theme === "light" ? (
              <span>
                <i>
                  <FaMoon />
                </i>
                {open && <div>DarkTheme</div>}
                <SwitchComponent onClick={() => changeTheme()} theme={theme}>
                  <span></span>
                </SwitchComponent>
              </span>
            ) : (
              <span>
                <i>
                  <FaSun />
                </i>
                {open && <div>LightTheme</div>}
                <SwitchComponent onClick={() => changeTheme()} theme={theme}>
                  <span></span>
                </SwitchComponent>
              </span>
            )}
          </ThemeButton>
        </Contact>
      </MenuBar>
    </Nav>
  );
};

export default Header;
