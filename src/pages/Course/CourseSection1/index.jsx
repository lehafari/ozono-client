import React from 'react';
import {
  CourseDetails,
  CourseName,
  LineUp,
  Student,
  SectionContainer,
  TextContainer,
} from './styles';

const CourseSection1 = ({ title }) => {
  //title to capitalize
  const titleCapitalized =
    title && title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <SectionContainer>
      <TextContainer>
        <Student>
          <h6>Alumno</h6>
          <LineUp></LineUp>
        </Student>
        <CourseName>
          <h1>
            Curso <br /> {titleCapitalized}
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
