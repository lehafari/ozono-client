import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/common/Header";
import { Navbar } from "../components/common/Navbar";
import Classroom from "../pages/Classroom/Clasroom";

import Contac from "../pages/Contac/Contac";
import Course from "../pages/Course/Course";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";

import Certificates from "../components/layout/CoursePage/Certificates";
import Comments from "../components/layout/CoursePage/Comments";
import Curriculum from "../components/layout/CoursePage/Curriculum";
import Description from "../components/layout/CoursePage/Description";
import Teachers from "../components/layout/CoursePage/Teachers";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/classroom" element={<Classroom />} />
        <Route path="/contact" element={<Contac />} />

        <Route path="/course" element={<Course />}>
          <Route path="/course/description" element={<Description />} />
          <Route path="/course/teachers" element={<Teachers />} />
          <Route path="/course/Curriculum" element={<Curriculum />} />
          <Route path="/course/certificates" element={<Certificates />} />
          <Route path="/course/comments" element={<Comments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
