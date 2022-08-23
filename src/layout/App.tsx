import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AuthService from "../api/auth/AuthService";
import Loading from "../components/Loading/Loading";
import { URLs } from "../config/enums";
import { mustRefreshToken } from "../helpers/auth-helper";

import AppRoutes from "./AppRoutes";

const App: React.FC = () => {
  const navigate = useNavigate();
  const [isRefreshingToken, setIsRefreshingToken] = useState(false);

  useEffect(() => {
    if (!AuthService.getToken()) navigate(URLs.LOGIN);
  }, [navigate]);

  useEffect(() => {
    const refreshToken = async () => {
      setIsRefreshingToken(true);
      await AuthService.refreshToken();
      setIsRefreshingToken(false);
    };

    if (mustRefreshToken()) refreshToken();
  }, []);

  if (isRefreshingToken) return <Loading />;
  return <AppRoutes />;
};

export default App;
