import styled, { keyframes } from "styled-components";
import ConectImage from "../../assets/undraw_online_connection_6778.svg";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: stretch;
  background-color: var(--black);
   

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ApperFromBotton = keyframes`
from {
  opacity: 0;
  transform: translateY(-80px);
}
to {
  opacity: 1;
  transform: translateY(0px);
}
`;

export const Background = styled.div`
  @media (min-width: 1024px) {
    flex: 1;
    background: url(${ConectImage}) no-repeat center, var(--white);
    background-size: contain;
    animation: ${ApperFromBotton} 3s;

  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 50vw;
  margin: 2rem auto;
  gap: 2rem;

  h1 {
    color: var(--orange);
    font-weight: 800;
    line-height: 1.4;
  }
`;

const ApperFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(80px);
  }
  
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${ApperFromTop} 3s;
`;
