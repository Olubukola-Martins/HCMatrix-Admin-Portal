import useHandleAuthentication from "hooks/auth/useHandleAuthentication";
import React from "react";
import { Navigate } from "react-router-dom";
import { appRoutePaths } from "routes";

export const AuthMiddleware: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { authToken, isAuthenticated } = useHandleAuthentication();
  if (isAuthenticated === false || authToken === undefined) {
    return <Navigate to={appRoutePaths.login} />;
  }
  return <>{children}</>;
};
