import useHandleAuthentication from "hooks/auth/useHandleAuthentication";
import React from "react";
import { Navigate } from "react-router-dom";
import { appRoutePaths } from "routes";

export const InaccessibleIfAuthenticatedMiddleware: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { isAuthenticated } = useHandleAuthentication();
  if (isAuthenticated === true) {
    return <Navigate to={appRoutePaths.home} replace />;
  }
  return <>{children}</>;
};
