import React from "react";
import FormLogin from "../../components/FormLogin/FormLogin";
import {
  Background,
  FormContainer,
  AnimationContainer,
  Container,
} from "./loginStyle";

export function Login({setIsAuth,isAuth }) {
  return (
    <Container>
      <Background />
      <FormContainer>
        <h1>KenzieHub</h1>
        <AnimationContainer>
          <FormLogin setIsAuth={setIsAuth} isAuth={isAuth}/>
        </AnimationContainer>
      </FormContainer>
    </Container>
  );
}
