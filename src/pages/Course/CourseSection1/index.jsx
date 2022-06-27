import { toCapitalize } from "helpers/toCapitalize";
import React from "react";
import {
  CourseDetails,
  CourseName,
  SectionContainer,
  TextContainer,
} from "./styles";

const CourseSection1 = ({ title }) => {
  //title to capitalize

  return (
    <SectionContainer>
      <TextContainer>
        <h1>asdasdasdsadsadasdasd</h1>
        {/* {toCapitalize(title)} */}
        <CourseDetails></CourseDetails>
      </TextContainer>
    </SectionContainer>
  );
};

export default CourseSection1;
