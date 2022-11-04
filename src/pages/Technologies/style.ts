import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 88px);
  padding: 20px;
  height: 100vh;
  position: absolute;
  left: 88px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 50px;
  color: var(--text-color);

  @media (min-width: 780px) {
    padding: 0 20px;
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 1080px) {
    padding: 0 100px;
  }
`;

export const MainInfo = styled.div`
  width: 100%;
  max-width: 600px;
  min-width: 220px;
  max-height: 500px;
  height: 80%;
  background: var(--sidebar-color);
  border-radius: 8px;
  padding: 20px 10px;
  gap: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));

  @media (min-width: 780px) {
    padding: 30px 20px;
  }

  @media (min-width: 1080px) {
    padding: 40px 30px;
  }
`;

export const SectionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;

  @media (min-width: 780px) {
    font-size: 24px;
  }

  @media (min-width: 1080px) {
    font-size: 28px;
  }
`;

export const SectionList = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.p`
  font-size: 16px;

  @media (min-width: 780px) {
    font-size: 18px;
  }

  @media (min-width: 1080px) {
    font-size: 20px;
  }
`;

export const ListContainer = styled.div`
  font-size: 16px;
  text-align: center;
  width: 100%;
  height: 170px;

  span {
    font-weight: 800;
  }

  @media (min-width: 780px) {
    font-size: 20px;
  }
`;

export const TechList = styled.div`
  font-size: 16px;
  width: 100%;
  height: 120px;

  span {
    font-weight: 800;
  }

  @media (min-width: 780px) {
    font-size: 20px;

    height: 170px;
  }
`;

export const MiddleListContainer = styled.div`
  font-size: 16px;
  text-align: center;
  width: 100%;
  border-right: 1px solid var(--text-color);
  border-left: 1px solid var(--text-color);
  margin: 0 5px;
  padding: 0 5px;

  span {
    font-weight: 800;
  }

  @media (min-width: 780px) {
    font-size: 20px;

    border-right: 2px solid var(--text-color);
    border-left: 2px solid var(--text-color);
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
