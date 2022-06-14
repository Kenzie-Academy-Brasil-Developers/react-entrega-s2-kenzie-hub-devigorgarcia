import React, { useState } from "react";
import InputsDash from "../InputDash";
import SelectDash from "../SelectDash";
import { useForm } from "react-hook-form";
import {
  ButtonsContainer,
  Container,
  ContainerContent,
  ContentForm,
  HeaderModal,
  ModalContainer,
} from "./style";
import Button from "../Button/button";
import api from "../../services/api";

export default function EditTech({ setModal, title, status, id }) {
  const { register, handleSubmit } = useForm();
  const [token] = useState(localStorage.getItem("@KenzieHub:token"));

  function onSubmitFunction({ status }) {
    api
      .put(
        `/users/techs/${id}`,
        {
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
  }

  function deleteTech() {
    console.log(id)
    api.delete(`users/techs/${id}`).then((response) => {
      console.log(response);
      setModal(false)
    });
  }

  return (
    <Container>
      <ModalContainer>
        <HeaderModal>
          <h2>Editar Tecnologia</h2>
          <button className="exitBtn" onClick={() => setModal(false)}>
            x
          </button>
        </HeaderModal>
        <ContainerContent>
          <ContentForm onSubmit={handleSubmit(onSubmitFunction)}>
            <InputsDash
              name="title"
              label="Nome"
              value={title}
              register={register}
            />
            <SelectDash
              name="status"
              register={register}
              label="Selecionar status"
              status={status}
            />
            <ButtonsContainer>
              <Button width="50%" type="submit" className="registerBtn">
                Editar
              </Button>
              <Button
                redSchema
                width="50%"
                type="submit"
                className="registerBtn"
                onClick={deleteTech}
              >
                Excluir
              </Button>
            </ButtonsContainer>
          </ContentForm>
        </ContainerContent>
      </ModalContainer>
    </Container>
  );
}
