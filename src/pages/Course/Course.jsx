import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/common/Spinner';
import CourseSection1 from './CourseSection1';
import CourseSection2 from './CourseSection2';
import CourseSection3 from './CourseSection3';
import FooterCourse from './FooterCourse';
import { Back } from './styles';

const Course = () => {
  const courseTitle = useParams().courseTitle;
  console.log(courseTitle);
  const { courses } = useSelector((state) => state.courses);
  console.log(courses);
  if (courses.length === 0) {
    return <Spinner />;
  }
  const course = courses.find((course) => course.title === courseTitle);
  console.log(course);
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
