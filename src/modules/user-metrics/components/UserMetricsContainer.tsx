import { Select } from "antd";
import { PageLayout } from "components/layouts";
import { UserMetricsActiveCard } from "./card/UserMetricsActiveCard";
import { UserMetricsCard } from "./card/UserMetricsCard";

export const UserMetricsContainer = () => {
  const menuItems = [
    { key: "1", label: "Option 1" },
    { key: "2", label: "Option 2" },
  ];
  return (
    <PageLayout
      header={{
        title: {
          text: "User Metrics",
        },
        supportingComp: (
          <div className="flex gap-5">
            <Select
              defaultValue="all"
              options={[
                {
                  label: "All",
                  value: "all",
                },
              ]}
            />
            <Select
              defaultValue="webApp"
              options={[
                {
                  label: "Web App",
                  value: "webApp",
                },
              ]}
            />
          </div>
        ),
      }}
    >
      <div>
        <UserMetricsActiveCard
          days="5.8"
          header="Active Sub"
          icon="iconamoon:profile-circle-thin"
          iconText="Users"
          iconColor="#7F8CA9"
          ratingText="+0.4"
        />
        <UserMetricsCard
          acctNumber="0"
          header="Active"
          icon="iconamoon:profile-circle-thin"
          iconColor="blue"
          rating="+0.5"
          ratingText="ve last month"
          menuItem={menuItems}
        />
      </div>
    </PageLayout>
  );
};
