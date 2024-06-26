import { Select } from "antd";
import { PageLayout } from "components/layouts";
import UsageHeatMap from "./charts/UsageHeatMap";
import { usageMockData } from "../data/mockData";
import ActiveUsersChart from "./charts/ActiveUsers";
import SubsriptionsChart from "./charts/Subsriptions";
import FrequentlyUsedModulesChart from "./charts/FrequentlyUsedModules";
import FrequentlyUsedFeaturesChart from "./charts/FrequentlyUsedFeatures";

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
      <div className="inline-grid grid-cols-4 grid-rows-4 gap-16 p-4">
        <ActiveUsersChart additionalStyles="col-span-2 row-span-1" />
        <SubsriptionsChart additionalStyles="col-span-2 row-span-1" />
        <FrequentlyUsedModulesChart additionalStyles="col-span-2 row-span-1" />
        <FrequentlyUsedFeaturesChart additionalStyles="col-span-2 row-span-1" />
        <UsageHeatMap dataValues={usageMockData} additionalStyles=" col-span-3 row-span-1" />
      </div>
    </PageLayout>
  );
};
