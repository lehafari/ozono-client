import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "../../../common/Buttons/MainButton";
import { NavbarMenu, NavButton } from "../../../common/Navbar/styles";
import {
  CourseContainer,
  ImgContainer,
  NavbarContenedor,
  MenuContainer,
} from "./styles";

const CourseNavbar = () => {
  return (
    <CourseContainer>
      <ImgContainer>
        <Button text="Entrar a clase" width="20%" />
      </ImgContainer>
      <NavbarContenedor>
        <MenuContainer>
          <NavButton>
            <Link to="/course/description">Descripcion</Link>
          </NavButton>
          <NavButton>
            <Link to="/course/teachers">Profesores</Link>
          </NavButton>
          <NavButton>
            <Link to="/course/Curriculum">Curriculum</Link>
          </NavButton>
          <NavButton>
            <Link to="/course/certificates">Certificados</Link>
          </NavButton>
          <NavButton>
            <Link to="/course/comments">Comentarios</Link>
          </NavButton>
        </MenuContainer>
      </NavbarContenedor>
      <Outlet />
    </CourseContainer>
  );
};

export default CourseNavbar;
