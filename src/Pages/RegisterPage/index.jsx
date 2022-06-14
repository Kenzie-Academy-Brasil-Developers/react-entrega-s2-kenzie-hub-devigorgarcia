import React from "react";
import FormRegister from "../../components/FormRegister/FormRegister";

import {
  AnimationContainer,
  Background,
  Container,
  FormContainer,
} from "./registerStyle";

export default function Register({isAuth}) {
  return (
    <Container>
      <FormContainer>
        <h1>KenzieHub</h1>
        <AnimationContainer>
          <FormRegister isAuth={isAuth}/>
        </AnimationContainer>
      </FormContainer>
      <Background />
    </Container>
  );
}
