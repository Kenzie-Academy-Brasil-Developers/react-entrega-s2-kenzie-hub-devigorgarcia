import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Button from "../../components/Button/button";
import Loading from "../../components/Loading";
import RegisterTech from "../../components/RegisterTech";
import TechCard from "../../components/TechCard";
import api from "../../services/api";
import {
  Container,
  DashboardContainer,
  Header,
  Main,
  MainHeader,
  Section,
  TechList,
} from "./dashboardStyle";

export default function Dashboard({ isAuth, setIsAuth }) {
  const [user, setUser] = useState({});
  const [modal, setModal] = useState(false);
  const [techs, setTechs] = useState([]);
  const [token] = useState(localStorage.getItem("@KenzieHub:token"));
  const [userId] = useState(localStorage.getItem("@KenzieHube:id"));

  const history = useHistory();

  function logout() {
    localStorage.clear();
    setIsAuth(false);
    history.push("/");
  }

  useEffect(() => {
    api.get(`/users/${userId}`).then((response) => {
      setUser(response.data);
      setTechs(response.data.techs);
    });
  }, [techs]);

  if (!isAuth) {
    return <Redirect to={"/"} />;
  }

  return (
    <Container>
      {user === undefined ? (
        <Loading />
      ) : (
        <DashboardContainer>
          <Header>
            <h1>Kenzie Hub</h1>
            <Button onClick={logout} className="exitBtn">
              Sair
            </Button>
          </Header>
          <Section>
            <h2>Olá, {user.name}</h2>
            <p>{user.course_module}</p>
          </Section>
          <Main>
            <MainHeader>
              <h3>Tecnologias</h3>
              <Button
                className="addBtn"
                width="2rem"
                onClick={() => setModal(!modal)}
              >
                +
              </Button>
              {modal && <RegisterTech setModal={setModal} />}
            </MainHeader>
            <TechList>
              {techs.length === 0 ? (
                <h3>Adicione sua tecnologia</h3>
              ) : (
                techs?.map((tech) => <TechCard key={tech.id} tech={tech} />)
              )}
            </TechList>
          </Main>
        </DashboardContainer>
      )}
    </Container>
  );
}
