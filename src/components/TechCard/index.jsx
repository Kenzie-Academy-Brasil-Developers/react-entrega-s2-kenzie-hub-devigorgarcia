import React, { useState } from "react";
import EditTech from "../EditTech";
import { Container } from "./styles";

export default function TechCard({ tech }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Container onClick={() => setModal(!modal)}>
        <h3>{tech.title}</h3>
        <p>{tech.status}</p>
      </Container>
      {modal && (
        <EditTech setModal={setModal} title={tech.title} id={tech.id} />
      )}
    </>
  );
}
