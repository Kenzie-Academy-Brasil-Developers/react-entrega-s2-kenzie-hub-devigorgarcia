import React, { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toastSucess } from "../../utils/toast";
import Button from "../Button/button";
import InputDash from "../InputDash";
import SelectDash from "../SelectDash";

import {
  Container,
  ContainerContent,
  ContentForm,
  HeaderModal,
  ModalContainer,
} from "./style";

export default function RegisterTech({ setModal }) {
  const [token] = useState(localStorage.getItem("@KenzieHub:token"));
  const { register, handleSubmit } = useForm();

  function onSubmitFunction(data) {
    const { title, status } = data;

    api
      .post(
        "/users/techs",
        {
          title: title,
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => {
        toastSucess("Técnologia Adicionada");
        setModal(false);
      })
      .catch((err) => console.log(err));
  }
  return (
    <Container>
      <ModalContainer>
        <HeaderModal>
          <h2>Cadastrar Tecnologia</h2>
          <button className="exitBtn" onClick={() => setModal(false)}>
            x
          </button>
        </HeaderModal>
        <ContainerContent>
          <ContentForm onSubmit={handleSubmit(onSubmitFunction)}>
            <InputDash name="title" label="Nome" register={register} />
            <SelectDash
              name="status"
              register={register}
              label="Selecionar status"
            />
            <Button type="submit" className="registerBtn">
              Cadastrar Técnologia
            </Button>
          </ContentForm>
        </ContainerContent>
      </ModalContainer>
    </Container>
  );
}
