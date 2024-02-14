import { AppLayout } from "components/layouts";
import { Outlet } from "react-router-dom";

export const PrimaryRouteLayout = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};
