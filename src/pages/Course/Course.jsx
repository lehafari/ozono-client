import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/common/Spinner';
import CourseSection1 from './CourseSection1';
import CourseSection2 from './CourseSection2';
import CourseSection3 from './CourseSection3';
import FooterCourse from './FooterCourse';
import { Back } from './styles';

const Course = () => {
  const [Tab, setTab] = useState(1);
  const courseTitle = useParams().courseTitle;
  const cleanCourseTitle = courseTitle && courseTitle.replaceAll('-', ' ');
  const { courses } = useSelector((state) => state.courses);
  if (courses.length === 0) {
    return <Spinner />;
  }
  const course = courses.find(
    (course) => course.title.toLowerCase() === cleanCourseTitle
  );

  return (
    <Back>
      <CourseSection1 {...course} />
      <CourseSection2 setTab={setTab} Tab={Tab} />
      {Tab === 0 && <CourseSection3 {...course} />}
      <FooterCourse />
    </Back>
  );
};

export default Course;
