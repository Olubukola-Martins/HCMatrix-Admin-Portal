import useHandleAuthentication from "hooks/auth/useHandleAuthentication";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { appRoutePaths } from "routes";

export const InaccessibleIfAuthenticatedMiddleware: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { isAuthenticated } = useHandleAuthentication();
  const location = useLocation();
  if (isAuthenticated === true) {
    return (
      <Navigate to={appRoutePaths.home} state={{ from: location }} replace />
    );
  }
  return <>{children}</>;
};
