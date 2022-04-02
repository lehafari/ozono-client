import styled from "styled-components";
import { NavbarContainer } from "../../../common/Navbar/styles";
import img from "../../../../assets/images/course-image.png";

export const CourseContainer = styled.div`
  background-color: #ffffff;
`;

export const ImgContainer = styled.div`
  background-image: url(${img});
  background-size: 80% 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 400px;
  width: 100%;
  margin: 0 auto;
  transform: translateY(-15%);
`;

export const NavbarContenedor = styled(NavbarContainer)`
  background-color: #ffffff9d;
  padding: 60px 0px 150px 0px;
  margin-top: -185px;
`;

export const MenuContainer = styled.div`
  width: 55%;
  justify-content: space-between;
  padding-left: 150px;
`;
