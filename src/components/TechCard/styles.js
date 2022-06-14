import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.75rem;
  background-color: var(--black);
  cursor: pointer;

  &:hover {
    filter: brightness(1.4);
  
  }

  h3{
    line-height: 1.2;
  }

  p {
    line-height: 1.2;
    color: var(--grey);
  }
`