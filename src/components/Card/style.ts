import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 8px;
  background: var(--sidebar-color);
  display: flex;
  flex-direction: column;

  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Figure = styled.figure`
  width: 100%;
  height: 50%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px 8px;
  }
`;

export const Detail = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  padding: 20px;
`;

export const Name = styled.h2`
  font-size: 28px;
`;

export const SectionButtons = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  button {
    width: 100%;
    height: 30px;
    font-size: 16px;
    border-radius: 8px;
    background: var(--text-color);
    color: var(--sidebar-color);
    cursor: pointer;
  }
`;
