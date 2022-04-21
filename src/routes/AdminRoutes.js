import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin";
import Advertisements from "../pages/Admin/advertisements";
import Blogs from "../pages/Admin/Blogs";
import Courses from "../pages/Admin/Courses";
import CreateCourse from "../pages/Admin/Courses/CreateCourse";
import Emails from "../pages/Admin/Emails";
import Media from "../pages/Admin/Media";
import News from "../pages/Admin/News";
import Payments from "../pages/Admin/Payments";
import Stats from "../pages/Admin/Stats";
import Users from "../pages/Admin/Users";
import { PrivateRoute } from "./PrivateRoute";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        >
          <Route path="course" element={<Courses />}></Route>
          <Route path="create-course" element={<CreateCourse />} />
          <Route path="users" element={<Users />} />
          <Route path="payments" element={<Payments />} />
          <Route path="stats" element={<Stats />} />
          <Route path="emails" element={<Emails />} />
          <Route path="media" element={<Media />} />
          <Route path="advertisements" element={<Advertisements />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </>
  );
};

export default AdminRoutes;
