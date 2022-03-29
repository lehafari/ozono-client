import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/common/Header';
import { Navbar } from '../components/common/Navbar';
import Classroom from '../pages/Classroom/Clasroom';

import Contac from '../pages/Contac/Contac';
import Course from '../pages/Course/Course';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Register from '../pages/Register/Register';

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
        <Route path="/course" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
