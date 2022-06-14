import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props)=>props.redSchema ? "#FF577F":"#575a89"};
  color: white;
  height: 2.5rem;
  border-radius: 0.5rem;
  width: ${props => props.width};
  border: 2px solid #575a89;
  font-size: 0.75rem;
  font-weight: bold;

  &:hover {
    filter: brightness(1.2);
  }
`;
