import React from "react";
import { Link, Outlet } from "react-router-dom";
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
      <NavbarContenedor>
        <ImgContainer />
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
