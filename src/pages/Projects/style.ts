import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 88px);
  padding: 0 100px;
  height: 100vh;
  position: absolute;
  left: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const MainInfo = styled.div`
  width: 100%;
  max-width: 600px;
  height: 80%;
  background: var(--sidebar-color);
  border-radius: 8px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
`;
