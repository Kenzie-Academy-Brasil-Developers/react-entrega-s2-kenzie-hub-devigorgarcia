import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  background-color: black;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderModal = styled.div`
  display: flex;
  width: 90%;
  height: 3rem;
  padding: 9.62602px 16.0434px;
  justify-content: space-between;
  align-items: center;
  background-color: var(--grey);
  border-radius: 3.20867px 3.20867px 0px 0px;

  h2 {
    color: white;
    font-size: 0.75rem;
  }

  .exitBtn {
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    color: var(--gray2);
    font-weight: 700;
  }
`;

export const ContainerContent = styled.div`
  padding: 1.2rem 0.8rem;
  background-color: var(--bg-form);
  position: relative;
  width: 90%;
`;

export const ContentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ApperFromLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-100px);
}
to {
  opacity: 1;
  transform: translateX(0px);
}
`
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${ApperFromLeft} 2s;
`