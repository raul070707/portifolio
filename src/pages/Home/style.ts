import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--body-color);
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--text-color);
  position: relative;
`;

export const Title = styled.h1`
  font-size: 34px;

  @media (min-width: 780px) {
    font-size: 54px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 22px;

  @media (min-width: 780px) {
    font-size: 42px;
  }
`;

export const Redirect = styled.div`
  color: var(--text-color);
  position: absolute;
  left: calc(50% - 150px);
  bottom: 30px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 700;

  &:hover {
    font-size: 20px;
  }
`;
