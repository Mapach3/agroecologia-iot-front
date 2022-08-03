import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "../pages/UserPage";
import AppLayout from "./AppLayout";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/usuarios" element={<UserPage />} />
        <Route path="/login" element={"Login"} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
