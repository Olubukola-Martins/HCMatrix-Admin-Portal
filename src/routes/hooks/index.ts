import useHandleAuthentication from "hooks/auth/useHandleAuthentication";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { appRoutePaths } from "routes";

export const routesAllowedWithoutAuthentication = [
  appRoutePaths.login,
  appRoutePaths.resetPassword,
  appRoutePaths.verifyUser,
  appRoutePaths.forgotPassword,
];

export const useAuthRedirectGuard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const { isAuthenticated } = useHandleAuthentication();
  useEffect(() => {
    if (
      isAuthenticated === false &&
      !routesAllowedWithoutAuthentication.includes(pathname)
    ) {
      console.log("redirecting");
      // Redirect to login
      navigate(appRoutePaths.login, { replace: true, state: location });
    }
  }, [navigate, pathname, isAuthenticated, location]);
};
