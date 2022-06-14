import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import Button from "../Button/button";
import { FiMail, FiLock, FiEyeOff, FiEye } from "react-icons/fi";
import Input from "../Input/input";
import { FormStyled } from "./FormLoginStyle";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toastError, toastSucess } from "../../utils/toast";

export default function FormLogin({ isAuth, setIsAuth }) {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState();
  const name = localStorage.getItem("@KenzieHub:name");
  const history = useHistory();

  function handlePassword(e) {
    e.preventDefault();
    setShowPassword(!showPassword);
  }

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mailo Obrigatório"),
    password: yup.string().required("Passoword Obrigatório"),
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
    api
      .post("/sessions", user)
      .then((response) => {
        const { token, user } = response.data;
        const { name, id } = response.data.user;
        localStorage.setItem("@KenzieHub:token", token);
        localStorage.setItem("@KenzieHube:id", id);
        localStorage.setItem("@KenzieHub:name", name);
        toastSucess("Usuario Autenticado");
        setIsAuth(true);

        history.push(`/Dashbord/${name}`);
      })
      .catch((err) => toastError("Email ou Senha Inválidos"));
  }

  if (isAuth) {
    return <Redirect to={`/Dashbord/${name}`} />;
  }

  return (
    <FormStyled onSubmit={handleSubmit(onSubmitFunction)}>
      <h2>Login</h2>
      <Input
        name="email"
        type="email"
        icon={FiMail}
        label={"Email"}
        error={errors?.email?.message}
        placeHolder={"Email"}
        register={register}
      />
      <Input
        type={showPassword ? "text" : "password"}
        icon={FiLock}
        eyes={FiEyeOff}
        openEyes={FiEye}
        label={"Senha"}
        error={errors?.password?.message}
        placeHolder={"Senha"}
        handlePassword={handlePassword}
        showPassword={showPassword}
        register={register}
        name="password"
      />
      <Button width="80%" type="submit">Logar</Button>
      <p>
        Não tem Cadastro? <Link to={"/Register"}>Clique aqui!</Link>
      </p>
    </FormStyled>
  );
}
