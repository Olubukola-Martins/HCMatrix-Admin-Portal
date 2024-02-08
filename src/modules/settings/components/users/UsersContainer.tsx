import { PageLayout } from "components/layouts";
import { Tabs } from "antd";
import AddUsers from "./AddUsers";
import ActiveUsersTable from "./active-users/ActiveUsersTable";
import InvitedUsersTable from "./invited-users/InvitedUsersTable";
import ExportEnitity from "components/entity/ExportEnitity";

const UsersContainer = () => {
  return (
    <PageLayout
      header={{
        title: {
          text: "Users",
        },
        supportingComp: (
          <div>
            <div className="flex items-center gap-x-4">
              <ExportEnitity />
              <AddUsers />
            </div>
          </div>
        ),
      }}
    >
      <div className="space-y-4">
        <Tabs
          items={[
            {
              key: "Active Users",
              label: "Active Users",
              children: <ActiveUsersTable />,
            },
            {
              key: "Invited Users",
              label: "Invited Users",
              children: <InvitedUsersTable />,
            },
          ]}
        />
      </div>
    </PageLayout>
  );
};

export default UsersContainer;
