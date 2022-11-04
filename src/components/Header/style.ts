import styled from "styled-components";

interface HeaderProps {
  theme?: string;
  open?: boolean;
}

export const Nav = styled.nav<HeaderProps>`
  position: fixed;
  top: 0;
  left: 0;

  height: 100%;
  width: ${(props) => (props.open ? "250px" : "88px")};
  padding: 10px 14px;

  background: var(--sidebar-color);

  transition: all 0.2s ease;

  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));

  z-index: 1000;
`;

export const HeaderStyle = styled.header<HeaderProps>`
  position: relative;

  i {
    position: absolute;
    top: 50%;
    right: -25px;
    ${(props) =>
      props.open
        ? "transform: translateY(-50%) rotate(180deg);"
        : "transform: translateY(-50%) ;"}

    height: 25px;
    width: 25px;
    background: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--white);
    border-radius: 50%;
    color: var(--white);
    font-size: 16px;
    cursor: pointer;
    transition: all 0.4s ease;
  }
`;

export const DevContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  min-width: 60px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.span`
  width: 40px;
  height: 40px;
  padding: 5px;
  border-radius: 6px;
  background: var(--primary-color);
  color: var(--white);

  font-size: 24px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  transition: all 0.4s ease;
  white-space: nowrap;
`;

export const Name = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const Profession = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const MenuBar = styled.div`
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Menu = styled.div``;

export const MenuLinks = styled.ul``;

export const Links = styled.li<HeaderProps>`
  height: 50px;
  margin-top: 10px;
  list-style: none;
  transition: all 0.3s ease;
  border-radius: 6px;
  color: var(--text-color);
  cursor: pointer;
  white-space: nowrap;

  span {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 60px;
    font-size: 20px;
  }

  &:hover {
    background: var(--primary-color);
    color: var(--white);
  }

  div {
    opacity: ${(props) => (props.open ? "1" : "0")};
  }
`;

export const Contact = styled.div`
  border-top: 2px solid var(--text-color);
`;

export const ThemeButton = styled.div<HeaderProps>`
  height: 50px;
  margin-top: 10px;
  list-style: none;
  transition: 0.3s;
  border-radius: 6px;
  color: var(--text-color);
  transition: all 0.4s ease;

  span {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 60px;
    font-size: 20px;
  }

  div {
    opacity: ${(props) => (props.open ? "1" : "0")};
  }

  &:hover {
    background: var(--primary-color);
    color: var(--white);
  }
`;

export const SwitchComponent = styled.section<HeaderProps>`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 44px;
  min-width: 60px;
  cursor: pointer;

  span {
    position: relative;
    height: 22px;
    width: 44px;
    border-radius: 25px;
    background: var(--toggle-color);
  }

  span::before {
    content: "";
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    top: 50%;
    left: ${(props) => (props.theme === "light" ? "5px" : "25px")};
    transform: translateY(-50%);
    background: var(--sidebar-color);
    transition: all 0.3s ease;
  }
`;
