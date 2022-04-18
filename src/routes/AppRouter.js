import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/common/Header";

import NotFound from "../pages/NotFound";
import Spinner from "../components/common/Spinner";
import Access from "../pages/Access";
import { startChecking } from "../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import DashboardRoutes from "./DashboardRoutes";
import { PublicRoute } from "./PublicRoute";

const Login = lazy(() => import("../pages/Access/Login"));
const Register = lazy(() => import("../pages/Access/Register"));

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

      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path="/access"
            element={
              <PublicRoute>
                <Access />
              </PublicRoute>
            }
          >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/*" element={<DashboardRoutes />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
