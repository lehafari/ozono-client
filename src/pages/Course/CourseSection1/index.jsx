import { toCapitalize } from 'helpers/toCapitalize';
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

  return (
    <SectionContainer>
      <TextContainer>
        <Student>
          <LineUp></LineUp>
        </Student>
        <CourseName>
          <h1>{toCapitalize(title)}</h1>
          <CourseDetails></CourseDetails>
        </CourseName>
      </TextContainer>
    </SectionContainer>
  );
};

export default CourseSection1;
