import { PageLayout } from "components/layouts";
import AddRole from "./roles/AddRole";
import { RoleCards } from "./roles/RoleCard";

const RolesAndPermissionContainer = () => {
  return (
    <PageLayout
      header={{
        title: {
          text: "Roles",
        },
        supportingComp: <AddRole />,
      }}
    >
      <RoleCards />
    </PageLayout>
  );
};

export default RolesAndPermissionContainer;
