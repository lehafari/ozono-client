import React, { lazy } from "react";
import { Navbar } from "../components/common/Navbar";
import Classroom from "../pages/Classroom/Clasroom";
import Certificates from "../components/layout/CoursePage/Certificates";
import Comments from "../components/layout/CoursePage/Comments";
import Curriculum from "../components/layout/CoursePage/Curriculum";
import Description from "../components/layout/CoursePage/Description";
import Teachers from "../components/layout/CoursePage/Teachers";
import { Route, Routes } from "react-router-dom";

const Contac = lazy(() => import("../pages/Contac/Contac"));
const Course = lazy(() => import("../pages/Course/Course"));
const Home = lazy(() => import("../pages/Home/Home"));
const Profile = lazy(() => import("../pages/Profile"));

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contac />} />

        <Route path="/course" element={<Course />}>
          <Route path="description" element={<Description />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="Curriculum" element={<Curriculum />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="comments" element={<Comments />} />
        </Route>
        <Route path="/course/classroom" element={<Classroom />} />
      </Routes>
    </>
  );
};

export default DashboardRoutes;
