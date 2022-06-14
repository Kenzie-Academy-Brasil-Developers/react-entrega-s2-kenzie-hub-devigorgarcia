import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
`;
export const SelectContainer = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--gray2);
  border-radius: 0.5rem;
  border: 1px solid var(--white);
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
    color: white;
  }
  
  option {
    background-color: var(--gray2);
  }

  `;
