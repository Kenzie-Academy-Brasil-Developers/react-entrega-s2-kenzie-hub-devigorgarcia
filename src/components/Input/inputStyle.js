import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;

  label {
    margin-left: 0.5rem;
  }
  span {
    color: var(--color-error);
    font-weight: 600;
    margin-left: 1rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--white);
  border-radius: 1rem;
  border: 1px solid var(--black);
  color: var(--black);
  padding: 1rem;
  display: flex;
  width: 100%;
  transition: 0.3s;

  ${(props) =>
    props.isError &&
    css`
      border: 2px solid var(--color-error);
      svg {
        color: var(--color-error);
      }
    `}

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    font-size: 1rem;
    margin-left: 1rem;
  }

  .passwordBtn {
    background-color: transparent;
    border: none;
  }
`;
