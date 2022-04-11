import React from "react";
import { Outlet } from "react-router-dom";
import { AccesContainer, BannerContainer, SectionContainer } from "./styles";

const Access = () => {
  return (
    <SectionContainer>
      <AccesContainer>
        <Outlet />
      </AccesContainer>
      <BannerContainer>Ola soy un banner</BannerContainer>
    </SectionContainer>
  );
};

export default Access;
