import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import RolesPage from "../pages/RolesPage";
import UserPage from "../pages/UsersPage";
import AppLayout from "./AppLayout";
import { URLs } from "../config/enums";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path={URLs.ROOT} element="" />
          <Route path={URLs.USERS} element={<UserPage />} />
          <Route path={URLs.ROLES} element={<RolesPage />} />
          <Route path={URLs.LOGIN} element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;
