import { Select } from "antd";
import { PageLayout } from "components/layouts";
import UsageHeatMap from "./charts/UsageHeatMap";
import { usageMockData } from "../data/mockData";
import ActiveUsersChart from "./charts/ActiveUsers";
import SubsriptionsChart from "./charts/Subsriptions";
import FrequentlyUsedModulesChart from "./charts/FrequentlyUsedModules";
import FrequentlyUsedFeaturesChart from "./charts/FrequentlyUsedFeatures";
import { USER_METRICS_DASHBOARD_DUMMY_COMPANY_OPTIONS, USER_METRICS_DASHBOARD_VIEW_OPTIONS } from "../constants/dummyConstants";
import { UserMetricDBAccountInfoCard } from "./card/ReviewedCards/UserMetricsCardInfo";
import { AverageDaysActive } from "./card/AverageDaysActive";

export const UserMetricsContainer = () => {
  return (
    <PageLayout
      header={{
        title: {
          text: "User Metrics",
        },
        supportingComp: (
          <div className="flex gap-5">
            <div className="w-1/2">
              <Select options={USER_METRICS_DASHBOARD_DUMMY_COMPANY_OPTIONS} defaultValue={USER_METRICS_DASHBOARD_DUMMY_COMPANY_OPTIONS?.[0].value} />

              <Select options={USER_METRICS_DASHBOARD_VIEW_OPTIONS} defaultValue={USER_METRICS_DASHBOARD_VIEW_OPTIONS?.[0].value} />
            </div>
          </div>
        ),
      }}>
      <div className="flex flex-col gap-8 ">
        <div className="inline-grid grid-cols-2 gap-12">
          <ActiveUsersChart additionalStyles="lg:col-span-1 col-span-2" />
          <SubsriptionsChart additionalStyles="lg:col-span-1 col-span-2" />
        </div>
        <div className="inline-grid grid-cols-2 gap-12 ">
          <FrequentlyUsedModulesChart additionalStyles="lg:col-span-1 col-span-2" />
          <FrequentlyUsedFeaturesChart additionalStyles="lg:col-span-1 col-span-2" />
        </div>
        <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-12 justify-items-center justify-evenly">
          <UserMetricDBAccountInfoCard amount={0} icon={{ icon: "majesticons:suitcase-line", color: "#AD6359" }} indicator={{ indicatorRating: 0.4, indicatorText: "Vs preceeding month" }} title="Active Accounts" />
          <UserMetricDBAccountInfoCard amount={0} icon={{ icon: "majesticons:suitcase-line", color: "#1270B0" }} indicator={{ indicatorRating: 0.4, indicatorText: "Vs preceeding month" }} title="New Accounts" />
          <UserMetricDBAccountInfoCard amount={0} icon={{ icon: "majesticons:suitcase-line", color: "#FF221E" }} indicator={{ indicatorRating: 0.4, indicatorText: "Vs preceeding month" }} title="Deactivated Accounts" />
          <UserMetricDBAccountInfoCard amount={0} icon={{ icon: "solar:course-down-line-duotone", color: "#FFA600" }} indicator={{ indicatorRating: 0.4, indicatorText: "Vs preceeding month" }} title="Slipping Away" />
        </div>
        <div className="inline-grid grid-cols-4 gap-12 ">
          <UsageHeatMap dataValues={usageMockData} additionalStyles=" col-span-4 xl:col-span-3 " />
          <div className="flex gap-4 align-middle xl:flex-col xl:gap-8 xl:col-span-1 justify-evenly col-span-4 ">
            <AverageDaysActive accountDays="5.8" accountRating={0.4} userDays="5.8" userRating={0.4} />
            <UserMetricDBAccountInfoCard amount={0} icon={{ icon: "mdi:calendar", color: "var(--green)" }} indicator={{ indicatorRating: 0.4, indicatorText: "Vs preceeding month" }} title="Events" />
          </div>
        </div>
      </div>
      <div></div>
    </PageLayout>
  );
};
