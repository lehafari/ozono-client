import { CourseTab } from 'components/layout/CourseTab';
import React from 'react';
import CourseNavbar from '../../../components/layout/CoursePage/CourseNavbar';

const CourseSection2 = ({ setTab, Tab }) => {
  return (
    <div>
      <CourseTab setTab={setTab} Tab={Tab} />
    </div>
  );
};

export default CourseSection2;
