import React from "react";
import { Container, SelectContainer } from "./style";

export default function SelectDash({ label, register, name }) {
  return (
    <Container>
      <label>{label}</label>
      <SelectContainer>
        <select {...register(name)}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </SelectContainer>
    </Container>
  );
}
