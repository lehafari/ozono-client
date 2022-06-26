import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { Navbar } from '../components/common/Navbar';
import CourseRoutes from './CourseRoutes';
import { MyCourses } from '../pages/Profile/MyCourses';
import { EditProfile } from '../pages/Profile/EditProfile';

const PublicCourses = lazy(() => import('pages/PublicCourses/Courses'));
const Contac = lazy(() => import('../pages/Contac/Contac'));

const Home = lazy(() => import('../pages/Home/Home'));
const Profile = lazy(() => import('../pages/Profile'));

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<CourseRoutes />} />
        <Route path="/contact" element={<Contac />} />
        <Route path="/courses" element={<PublicCourses />} />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        >
          <Route path="courses" element={<MyCourses />} />
          <Route path="edit" element={<EditProfile />} />
        </Route>
      </Routes>
    </>
  );
};

export default DashboardRoutes;
