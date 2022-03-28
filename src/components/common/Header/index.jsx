import React from 'react';
import {
  Container1,
  Container2,
  Container3,
  Container4,
  HeaderContainer,
} from './styles';
import logo from '../../../assets/images/gobierno-bolivariano-logo.png';

export const Header = () => {
  return (
    <HeaderContainer>
      <Container1>
        <img src={logo} alt="Gobierno Bolivariano de Venezuela" />
      </Container1>
      <Container2>
        <p>
          Ministry of Popular Power of the Ofﬁce of the Presidency and
          Monitoring of Government Management.
        </p>
      </Container2>
      <Container3>Scientiﬁc Center Foundation Ozone National</Container3>
      <Container4></Container4>
    </HeaderContainer>
  );
};
