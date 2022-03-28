import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clasroom from "../pages/Clasroom/Clasroom";
import Contac from "../pages/Contac/Contac";
import Course from "../pages/Course/Course";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/clasroom" element={<Clasroom />} />
        <Route path="/contac" element={<Contac />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
