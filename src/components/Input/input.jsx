import React from "react";
import { Container, InputContainer } from "./inputStyle";

export default function Input({
  label,
  icon: Icon,
  eyes: Eyes,
  placeHolder,
  handlePassword,
  showPassword,
  openEyes: Open,
  error,
  register,
  name,
  ...rest
}) {
  
  return (
    <Container>
      <label>{label} </label>
      <InputContainer isError={!!error}>
        {Icon && <Icon />}
        <input {...register(name)} placeholder={placeHolder} {...rest} />
        {Eyes && <button className="passwordBtn" onClick={(e)=>handlePassword(e)}>{showPassword ? <Eyes size={16}/> : <Open size={16}/> }</button>}
      </InputContainer>
      {!!error && <span>{error}</span>}
    </Container>
  );
}
