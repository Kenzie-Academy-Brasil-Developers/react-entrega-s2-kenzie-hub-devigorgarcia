import React from "react";
import { Container } from "./buttonStyle";

export default function Button({ children, color, redSchema, ...rest }) {
  return (
    <Container redSchema={redSchema} {...rest} color={color}>
      {children}
    </Container>
  );
}
