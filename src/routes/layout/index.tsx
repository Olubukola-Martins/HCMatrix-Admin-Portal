import { AppLayout } from "components/layouts";
import { Outlet } from "react-router-dom";

const PrimaryPageLayout = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default PrimaryPageLayout;
