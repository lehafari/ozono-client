import React from "react";
import {
  CourseDetails,
  CourseName,
  LineUp,
  Student,
  TitleContainer,
} from "./styles";

const CourseSection1 = () => {
  return (
    <TitleContainer>
      <Student>
        <h5>Alumno</h5>
        <LineUp></LineUp>
      </Student>
      <CourseName>
        <h2>Titulo del curso</h2>
        <CourseDetails>
          <p>Detalles del curso</p>
        </CourseDetails>
      </CourseName>
    </TitleContainer>
  );
};

export default CourseSection1;
