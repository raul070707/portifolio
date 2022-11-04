import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 88px);
  padding: 10px;
  height: 100vh;
  position: absolute;
  left: 88px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: var(--text-color);

  @media (min-width: 520px) {
    align-items: center;
  }

  @media (min-width: 880px) {
    padding: 0 100px;
  }
`;

export const MainInfo = styled.div`
  width: 100%;
  max-width: 1000px;
  min-width: 220px;
  padding: 40px 20px;
  height: auto;
  background: var(--sidebar-color);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));

  @media (min-width: 880px) {
    padding: 40px 30px;
  }
`;

export const Title = styled.h1`
  font-size: 34px;
  width: 200px;

  @media (min-width: 880px) {
    font-size: 54px;
    width: 400px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 22px;

  @media (min-width: 880px) {
    font-size: 42px;
  }
`;

export const PresentationLetter = styled.p`
  font-size: 20px;
  margin: 20px 0;

  @media (min-width: 880px) {
    font-size: 24px;
    margin: 40px 0;
  }
`;

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Contact = styled.div`
  max-width: 700px;
  min-width: 200px;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid var(--text-color);

  @media (min-width: 520px) {
    flex-direction: row;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background: none;
  color: var(--text-color);
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background: var(--primary-color);
    color: var(--white);
  }
`;
