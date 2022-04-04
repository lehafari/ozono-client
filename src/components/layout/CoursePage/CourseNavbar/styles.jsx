import styled from "styled-components";
import { NavbarContainer } from "../../../common/Navbar/styles";
import img from "../../../../assets/images/course-image.png";

export const CourseContainer = styled.div`
  background-color: #ffffff;
`;

export const ImgContainer = styled.div`
  background-image: url(${img});
  background-size: 100% 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 400px;
  width: 87%;
  margin: 0 auto;
  transform: translateY(-15%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavbarContenedor = styled.div`
  background-color: #ffffff9d;
  padding: 60px 0px 60px 0px;
  width: 100%;
  height: 0px;
  display: flex;
  align-items: center;
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
