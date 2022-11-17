import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  min-width: 220px;
  width: 100%;
  height: 400px;
  border-radius: 8px;
  background: var(--sidebar-color);
  display: flex;
  flex-direction: column;
  color: var(--text-color);

  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Figure = styled.figure`
  width: 100%;
  height: 40%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px 8px;
  }
`;

export const Detail = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-around;
  align-items: center;
  padding: 15px 5px;

  @media (min-width: 550px) {
    padding: 20px;
    gap: 25px;
  }
`;

export const Name = styled.h2`
  font-size: 28px;
`;

export const ListTechs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  gap: 10px;

  h3 {
    font-size: 16px;
    white-space: nowrap;
  }

  ul {
    padding: 0 20px;
  }

  @media (min-width: 550px) {
    h3 {
      font-size: 20px;
    }
  }
`;

export const SectionButtons = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  button {
    width: 100%;
    height: 30px;
    font-size: 14px;
    border-radius: 8px;
    background: var(--text-color);
    color: var(--sidebar-color);
    cursor: pointer;
  }

  @media (min-width: 550px) {
    gap: 20px;

    button {
      font-size: 16px;
    }
  }
`;
