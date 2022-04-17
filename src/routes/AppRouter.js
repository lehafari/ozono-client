import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/common/Header';
import { Navbar } from '../components/common/Navbar';
import Classroom from '../pages/Classroom/Clasroom';
import Certificates from '../components/layout/CoursePage/Certificates';
import Comments from '../components/layout/CoursePage/Comments';
import Curriculum from '../components/layout/CoursePage/Curriculum';
import Description from '../components/layout/CoursePage/Description';
import Teachers from '../components/layout/CoursePage/Teachers';
import NotFound from '../pages/NotFound';
import Spinner from '../components/common/Spinner';
import Access from '../pages/Access';
import { startChecking } from '../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
const Contac = lazy(() => import('../pages/Contac/Contac'));
const Course = lazy(() => import('../pages/Course/Course'));
const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Access/Login'));
const Profile = lazy(() => import('../pages/Profile'));
const Register = lazy(() => import('../pages/Access/Register'));

const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/access" element={<Access />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
