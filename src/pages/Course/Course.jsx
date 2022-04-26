import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CourseSection1 from './CourseSection1';
import CourseSection2 from './CourseSection2';
import CourseSection3 from './CourseSection3';
import FooterCourse from './FooterCourse';
import { Back } from './styles';

const Course = () => {
  const courseId = useParams().courseId;
  const { courses } = useSelector((state) => state.courses);
  const course = courses.find((course) => course.id === courseId);

  return (
    <Back>
      <CourseSection1 {...course} />
      <CourseSection2 />
      <CourseSection3 />
      <FooterCourse />
    </Back>
  );
};

export default Course;
