import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import Button from "../Button/button";
import { FiMail, FiLock, FiEyeOff, FiEye, FiUser } from "react-icons/fi";
import Input from "../Input/input";
import Select from "../Select/select";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormStyled } from "./FormRegisterStyle";
import api from "../../services/api";
import { toastError, toastSucess } from "../../utils/toast";

export default function FormRegister({isAuth}) {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState();
  const name = localStorage.getItem("@KenzieHub:name")
  const history = useHistory();

  function handlePassword(e) {
    e.preventDefault();
    setShowPassword(!showPassword);
  }


  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().email("Email Inválido").required("Email Obrigatório"),
    password: yup
      .string()
      .required("Senha Obrigatório")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Um caracter maiúsculo, um minúsculo e um especial (!@#$$%¨&(*()_+=)"
      )
      .min(8, "Mínimo de 8 caracteres"),
    validatePassword: yup
      .string()
      .required("Confirmação Necessária")
      .oneOf([yup.ref("password")], "Senha Diferente da Digitada"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmitFunction(user) {
    setData(user);
    const { name, email, password, course_module } = user;
    const newUser = {
      email,
      password,
      bio: "Sem bio para você",
      contact: "Me procure",
      name,
      course_module,
    };
    
    api
      .post("/users", newUser)
      .then((_) => {
        toastSucess("Usuario Registrado");
        return history.push("/");
      })
      .catch((err) => toastError("Campos Inválidos"));
  }
  
  if(isAuth) {
    return <Redirect to={`/Dashboard/${name}`}/>
  }

  return (
    <FormStyled onSubmit={handleSubmit(onSubmitFunction)}>
      <h2>Registrar</h2>
      <Input
        type="text"
        icon={FiUser}
        label={"Nome"}
        error={errors?.name?.message}
        placeHolder={"Digite Aqui Seu Nome"}
        name="name"
        register={register}
      />
      <Input
        type="email"
        icon={FiMail}
        label={"Email"}
        placeHolder={"Digite Aqui Seu Email"}
        name="email"
        error={errors?.email?.message}
        register={register}
      />
      <Input
        type={showPassword ? "text" : "password"}
        icon={FiLock}
        eyes={FiEyeOff}
        openEyes={FiEye}
        label={"Senha"}
        placeHolder={"Digite Aqui Sua Senha"}
        handlePassword={handlePassword}
        showPassword={showPassword}
        name="password"
        error={errors?.password?.message}
        register={register}
      />
      <Input
        type={showPassword ? "text" : "password"}
        icon={FiLock}
        eyes={FiEyeOff}
        openEyes={FiEye}
        label={"Confirmar Senha"}
        placeHolder={"Digite Aqui Sua Senha"}
        handlePassword={handlePassword}
        showPassword={showPassword}
        name="validatePassword"
        error={errors?.validatePassword?.message}
        register={register}
      />
      <Select
        name="course_module"
        register={register}
        label={"Selecionar Módulo"}
      />
      <Button width="80%" type="submit">Registrar</Button>
      <p>
        Já é Cadastrado? <Link to={"/"}>Clique aqui!</Link>
      </p>
    </FormStyled>
  );
}
