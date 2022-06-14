import React from "react";
import { Container, InputContainer } from "./style";

export default function InputsDash({ label, register, name, value }) {
  return (
    <Container>
      <label>{label}</label>
      <InputContainer>
      <input value={value} {...register(name)} type="text" />
      </InputContainer>
    </Container>
  );
}
