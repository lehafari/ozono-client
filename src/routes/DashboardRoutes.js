import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Navbar } from "../components/common/Navbar";
import CourseRoutes from "./CourseRoutes";

const Contac = lazy(() => import("../pages/Contac/Contac"));

const Home = lazy(() => import("../pages/Home/Home"));
const Profile = lazy(() => import("../pages/Profile"));

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<CourseRoutes />} />
        <Route path="/contact" element={<Contac />} />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default DashboardRoutes;
