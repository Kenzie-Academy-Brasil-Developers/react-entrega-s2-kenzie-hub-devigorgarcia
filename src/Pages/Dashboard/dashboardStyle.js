import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--black);
  color: var(--white);
`;

export const DashboardContainer = styled.div`
  margin: 26px 16px;
  
  @media (min-width: 1024px) {
    width: 100%;
    max-width: 800px;
    margin: 2rem auto;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    color: var(--orange);
    font-size: 20px;
    width: 60%;
  }

  .exitBtn {
    width: 3.5rem;
    height: 2rem;
    border: 0;
    border-radius: 4px;
    font-size: 0.75rem;
    color: white;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2.5em 0;
  gap: 0.8rem;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  .addBtn {
    font-size: 2rem;
  }
`;

export const TechList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 60vh;
  padding: 1.5rem 0.5rem;
  background-color: var(--bg-form);
  gap: 1rem;
`;
