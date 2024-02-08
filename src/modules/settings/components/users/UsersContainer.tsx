import { PageLayout } from "components/layouts";
import { Button, Tabs } from "antd";
import { TbFileExport } from "react-icons/tb";
import AddUsers from "./AddUsers";

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
              <Button
                icon={<TbFileExport className="text-2xl" />}
                size="large"
                type="text"
              />
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
            },
            {
              key: "Invited Users",
              label: "Invited Users",
            },
          ]}
        />
      </div>
    </PageLayout>
  );
};

export default UsersContainer;
