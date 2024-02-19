import useHandleAuthentication from "hooks/auth/useHandleAuthentication";
import { Navigate, useLocation } from "react-router-dom";
import { appRoutePaths } from "routes";

export const AuthMiddleware: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { authToken, isAuthenticated } = useHandleAuthentication();
  const location = useLocation();
  console.log(authToken, isAuthenticated, "why");
  if (isAuthenticated === false || authToken === undefined) {
    return (
      <Navigate to={appRoutePaths.login} state={{ from: location }} replace />
    );
  }
  return <>{children}</>;
};
