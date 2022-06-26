import { CourseTab } from 'components/layout/CourseTab';
import React from 'react';

const CourseSection2 = ({ setTab, Tab, setLoading, isPay }) => {
  return (
    <div>
      <CourseTab
        setTab={setTab}
        Tab={Tab}
        setLoading={setLoading}
        isPay={isPay}
      />
    </div>
  );
};

export default CourseSection2;
