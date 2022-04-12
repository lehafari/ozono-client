import React from "react";
import { Outlet } from "react-router-dom";
import {
  AccesContainer,
  BannerContainer,
  Card,
  SectionContainer,
} from "./styles";

const Access = () => {
  return (
    <SectionContainer>
      <AccesContainer>
        <Outlet />
      </AccesContainer>
      <BannerContainer>
        <Card>
          <h5>"Al pan pan, al vino vino, y en tu culo mi caballito blanco."</h5>
          <h6>-Simon Bolivar</h6>
        </Card>
      </BannerContainer>
    </SectionContainer>
  );
};

export default Access;
