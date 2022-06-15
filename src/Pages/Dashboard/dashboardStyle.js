import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--black);
  color: var(--white);
`;

export const DashboardContainer = styled.div`
  margin: 26px 0;
  width: 100vw;
  
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
  padding: 0 1rem 2rem;
  

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
  padding: 2.5em 1rem;
  gap: 0.8rem;
  border-top: 1px solid #212529;
  border-bottom: 1px solid #212529;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2.5em 1rem 0;

  .addBtn {
    font-size: 2rem;
  }
`;

export const TechList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 53vh;
  
  padding: 1.5rem 0.5rem;
  background-color: var(--bg-form);
  gap: 1rem;
  margin: 2.5em 1rem 0;
  
`;

const ApperFromRight = keyframes`
from {
  opacity: 0;
  transform: translateY(80px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`

export const AnimationContainer = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${ApperFromRight} 3s;
`
