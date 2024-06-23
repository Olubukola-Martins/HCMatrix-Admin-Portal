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
              className="md:min-w-52 "
              options={[
                {
                  label: "All",
                  value: "all",
                },
              ]}
            />
            <Select
              defaultValue="webApp"
              className="md:min-w-52 "
              options={[
                {
                  label: "Web App",
                  value: "webApp",
                },
              ]}
            />
          </div>
        ),
      }}>
      <div className="grid grid-cols-4 grid-rows-4 gap-4 p-4"></div>
    </PageLayout>
  );
};
