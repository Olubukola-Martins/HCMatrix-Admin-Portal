import ForgotPasswordContainer from "modules/authentication/components/forgot-password/ForgotPasswordContainer";
import LoginContainer from "modules/authentication/components/login/LoginContainer";
import ChangePasswordContainer from "modules/authentication/components/me/change-password/ChangePasswordContainer";
import ResetPasswordContainer from "modules/authentication/components/reset-password/ResetPasswordContainer";
import UserVerificationContainer from "modules/authentication/components/verification/UserVerificationContainer";
import { appRoutePaths } from "routes";
import { TRoutePageData } from "routes/types";

export const authPages = (): TRoutePageData[] => {
  let routes: TRoutePageData[] = [];
  routes = [
    {
      element: <LoginContainer />,
      path: appRoutePaths.login,
      title: "Login",
      category: ["inaccessible-if-user-is-authenticated"],
    },
    {
      element: <UserVerificationContainer />,
      path: appRoutePaths.verifyUser,
      title: "User Verification",
      category: ["inaccessible-if-user-is-authenticated"],
    },
    {
      element: <ResetPasswordContainer />,
      path: appRoutePaths.resetPassword,
      title: "Reset Password",
      category: ["inaccessible-if-user-is-authenticated"],
    },
    {
      element: <ForgotPasswordContainer />,
      path: appRoutePaths.forgotPassword,
      title: "Forgot Password",
      category: ["inaccessible-if-user-is-authenticated"],
    },
  ].map((item) => ({
    ...item,
    category: ["authentication-initializer"],
  }));
  return [
    ...routes,
    {
      element: <ChangePasswordContainer />,
      path: appRoutePaths.changePassword,
      title: "Change Password",
      category: ["requires-authentication"],
    },
  ];
};
