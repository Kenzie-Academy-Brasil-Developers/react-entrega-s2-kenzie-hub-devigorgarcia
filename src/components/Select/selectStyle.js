import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;

  label {
    margin-left: 0.5rem;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--white);
  border-radius: 1rem;
  border: 2px solid var(--black);
  color: var(--black);
  padding: 1rem;
  display: flex;
  width: 100%;
  transition: 0.3s;

  select {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    font-size: 1rem;
    transition: 0.3s;
    width: 100%;
  }
`;
