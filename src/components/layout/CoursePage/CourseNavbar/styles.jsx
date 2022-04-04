import styled from "styled-components";
import img from "../../../../assets/images/course-image.png";

export const CourseContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
`;

export const ImgContainer = styled.div`
  background-image: url(${img});
  background-size: 99% 150%;
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
  border-radius: 50px 50px 0px 0px;
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
