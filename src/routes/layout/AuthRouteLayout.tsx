import AuthLayout from "modules/authentication/components/AuthLayout";
import { Outlet } from "react-router-dom";

export const AuthRouteLayout = () => {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};
