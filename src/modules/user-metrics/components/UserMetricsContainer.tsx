import { Select } from "antd";
import { PageLayout } from "components/layouts";
import UsageHeatMap from "./charts/UsageHeatMap";
import { usageMockData } from "../data/mockData";
import ActiveUsersChart from "./charts/ActiveUsers";
import SubsriptionsChart from "./charts/Subsriptions";
import FrequentlyUsedModulesChart from "./charts/FrequentlyUsedModules";
import FrequentlyUsedFeaturesChart from "./charts/FrequentlyUsedFeatures";
import { AverageDaysActive } from "./card/AverageDaysActive";
import { EventsCard } from "./card/EventsCard";
import { ActiveAccounts } from "./card/ActiveAccounts";
import { NewAccounts } from "./card/NewAccounts";
import { DeactivatedAccounts } from "./card/DeactivatedAccounts";
import { SlippingAway } from "./card/SlippingAway";

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
      <div className="flex flex-col gap-8 ">
        <div className="inline-grid grid-cols-2 gap-12">
          <ActiveUsersChart additionalStyles="lg:col-span-1 col-span-2" />
          <SubsriptionsChart additionalStyles="lg:col-span-1 col-span-2" />
        </div>

        <div className="inline-grid grid-cols-2 gap-12 ">
          <FrequentlyUsedModulesChart additionalStyles="lg:col-span-1 col-span-2" />
          <FrequentlyUsedFeaturesChart additionalStyles="lg:col-span-1 col-span-2" />
        </div>

        {/* <div className="inline-grid grid-cols-4 gap-12">
          <ActiveAccounts ratingText="Vs preceeding month" rating="0.4" acctNumber="0" /> <NewAccounts ratingText="Vs preceeding month" rating="0.4" acctNumber="0" /> <DeactivatedAccounts ratingText="Vs preceeding month" rating="0.4" acctNumber="0" /> <SlippingAway ratingText="Vs preceeding month" rating="0.4" acctNumber="0" />
        </div> */}

        <div className="inline-grid grid-cols-4 gap-12 ">
          <UsageHeatMap dataValues={usageMockData} additionalStyles=" col-span-4 xl:col-span-3 " />
          <div className="flex gap-4 align-middle md:flex-col xl:gap-8 xl:col-span-1 justify-evenly col-span-4 ">
            <AverageDaysActive days="5.8" ratingText="Vs preceeding month" /> <EventsCard ratingText="Vs preceeding month" rating="0.4" acctNumber="0" />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
