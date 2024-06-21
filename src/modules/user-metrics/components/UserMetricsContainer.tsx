import { Select } from "antd";
import { PageLayout } from "components/layouts";

export const UserMetricsContainer = () => {
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
      <div></div>
    </PageLayout>
  );
};
