import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "../../../common/Buttons/MainButton";
import { NavButton } from "../../../common/Navbar/styles";
import {
  CourseContainer,
  ImgContainer,
  NavbarContenedor,
  MenuContainer,
  ShadowContainer,
  OutletContainer,
} from "./styles";

const CourseNavbar = () => {
  return (
    <CourseContainer>
      <ShadowContainer>
        <ImgContainer>
          <Button
            text="Entrar a clase"
            padding="1.1rem 5rem"
            margin=" 7rem 0rem "
          />
          <NavbarContenedor>
            <MenuContainer>
              <NavButton color="#797979" fontSize="1.2rem" fontWeight="300">
                <Link to="/course/description">Descripcion</Link>
              </NavButton>
              <NavButton color="#797979" fontSize="1.2rem" fontWeight="300">
                <Link to="/course/teachers">Profesores</Link>
              </NavButton>
              <NavButton color="#797979" fontSize="1.2rem" fontWeight="300">
                <Link to="/course/Curriculum">Curriculum</Link>
              </NavButton>
              <NavButton color="#797979" fontSize="1.2rem" fontWeight="300">
                <Link to="/course/certificates">Certificados</Link>
              </NavButton>
              <NavButton color="#797979" fontSize="1.2rem" fontWeight="300">
                <Link to="/course/comments">Comentarios</Link>
              </NavButton>
            </MenuContainer>
          </NavbarContenedor>
        </ImgContainer>
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </ShadowContainer>
    </CourseContainer>
  );
};

export default CourseNavbar;
