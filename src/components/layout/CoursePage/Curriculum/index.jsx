import React from "react";
import SimpleAccordion from "../../../common/Accordion";
import { Container, Descripcion, TextContainer } from "../Description/styles";

const Curriculum = () => {
  return (
    <Container>
      <TextContainer>
        <Descripcion>
          <h3>Curriculum</h3>
          <SimpleAccordion text1="Modulo 1" text2="Modulo 2" />
        </Descripcion>
      </TextContainer>
    </Container>
  );
};

export default Curriculum;
