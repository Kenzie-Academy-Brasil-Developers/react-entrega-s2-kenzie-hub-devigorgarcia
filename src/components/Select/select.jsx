import React from 'react'
import { Container, SelectContainer } from './selectStyle'

export default function Select({label, register, name, ...rest}) {
  return (
    <Container>
      <label>{label}</label>
      <SelectContainer>
        <select {...register(name)}>
          <option>Primeiro Primeiro módulo (Introdução ao Frontend)</option>
          <option>Segundo módulo (Frontend Avançado)</option>
          <option>Terceiro módulo (Introdução ao Backend)</option>
          <option>Quarto módulo (Backend Avançado)</option>
        </select>
      </SelectContainer>
    </Container>
  )
}
