import { CourseTab } from "components/layout/CourseTab";
import React from "react";

const CourseSection2 = ({ setTab, Tab, setLoading }) => {
  return (
    <div>
      <CourseTab setTab={setTab} Tab={Tab} setLoading={setLoading} />
    </div>
  );
};

export default CourseSection2;
