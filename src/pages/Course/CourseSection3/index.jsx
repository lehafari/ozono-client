import React from "react";
import {
  Container,
  Content,
  Details,
  Logos,
  LogosContainer,
  TextContainer,
  VerticalLine,
} from "./styles";

const CourseSection3 = () => {
  return (
    <Container>
      <Content>
        <TextContainer>
          <Details>
            <h4>Horas de video:</h4>
            <p>1h 30min</p>
          </Details>

          <Details>
            <h4>Nivel:</h4>
            <p>Principiante</p>
          </Details>

          <Details>
            <h4>Clases:</h4>
            <p>6</p>
          </Details>

          <Details>
            <h4>Profesores:</h4>
            <p>Andreina Tarazon y Luis Delgado</p>
          </Details>

          <Details>
            <h4>Inscrito: </h4>
            <p>93</p>
          </Details>

          <Details>
            <h4>Material Complementario:</h4>
            <p>10</p>
          </Details>
        </TextContainer>
        <VerticalLine />
        <LogosContainer>
          <h3>patrocinantes</h3>
          <Logos>
            <img src="" alt="" />
          </Logos>
          <h6>patrocinantes</h6>
          <Logos>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </Logos>
          <Logos>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </Logos>
        </LogosContainer>
      </Content>
    </Container>
  );
};

export default CourseSection3;
