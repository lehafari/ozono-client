import React from 'react';
import {
  Container,
  Content,
  Details,
  Logos,
  LogosContainer,
  TextContainer,
  VerticalLine,
} from './styles';

import logo from '../../../assets/images/cenaoz-logo.svg';
import { toCapitalize } from 'helpers/toCapitalize';

const CourseSection3 = ({
  duration,
  level,
  numberOfStudents,
  price,
  category,
}) => {
  return (
    <Container>
      <Content>
        <TextContainer>
          <Details>
            <p>
              <b>Duración: </b>
              <span> {duration}</span>
            </p>
          </Details>

          <Details>
            <p>
              <b>Nivel: </b>
              <span> {toCapitalize(level)} </span>
            </p>
          </Details>
          <Details>
            <p>
              <b>Inscritos: </b>
              <span> {numberOfStudents} </span>
            </p>
          </Details>
          <Details>
            <p>
              <b>Precio: </b>
              <span> {price} </span>
            </p>
          </Details>
          <Details>
            <p>
              <b>Categoria: </b>
              <span> {category} </span>
            </p>
          </Details>
        </TextContainer>
        <VerticalLine />
        <LogosContainer>
          <Logos>
            <img src={logo} alt="Cenaoz" />
          </Logos>
          <h5>patrocinantes</h5>
          <Logos>
            <img src={logo} alt="Cenaoz" />
            <img src={logo} alt="Cenaoz" />
            <img src={logo} alt="Cenaoz" />
          </Logos>
          <Logos>
            <img src={logo} alt="Cenaoz" />
            <img src={logo} alt="Cenaoz" />
            <img src={logo} alt="Cenaoz" />
          </Logos>
        </LogosContainer>
      </Content>
    </Container>
  );
};

export default CourseSection3;
