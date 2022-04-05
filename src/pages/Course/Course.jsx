import React from "react";
import CourseSection1 from "./CourseSection1";
import CourseSection2 from "./CourseSection2";
import CourseSection3 from "./CourseSection3";
import { Back } from "./styles";

const Course = () => {
  return (
    <Back>
      <CourseSection1 />
      <CourseSection2 />
      <CourseSection3 />
    </Back>
  );
};

export default Course;
