import React from "react";
import {
  CourseDetails,
  CourseName,
  LineUp,
  Student,
  SectionContainer,
  TextContainer,
} from "./styles";

const CourseSection1 = () => {
  return (
    <SectionContainer>
      <TextContainer>
        <Student>
          <h6>Alumno</h6>
          <LineUp></LineUp>
        </Student>
        <CourseName>
          <h1>
            Curso <br /> Ozonoterapeuta Clinico
          </h1>
          <CourseDetails>
            <p>Curso de ampliación (Fellowship)</p>
          </CourseDetails>
        </CourseName>
      </TextContainer>
    </SectionContainer>
  );
};

export default CourseSection1;
