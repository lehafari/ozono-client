import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  MenuContainer,
  NavbarContainer,
  NavbarMenu,
  NavButton,
} from "../../../common/Navbar/styles";

const CourseNavbar = () => {
  return (
    <NavbarContainer>
      <NavbarMenu>
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
      </NavbarMenu>
      <Outlet />
    </NavbarContainer>
  );
};

export default CourseNavbar;
