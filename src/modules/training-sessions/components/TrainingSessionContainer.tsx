import { PageLayout } from "components/layouts";
import TrainingAnalyticsCard from "./cards/TrainingAnalyticsCard";
import UpcomingTrainingSessionsCard from "./cards/UpcomingTrainingSessionsCard";
import TrainingSessionCalenderCard from "./cards/TrainingSessionCalenderCard";

const TrainingSessionContainer = () => {
  return (
    <PageLayout
      header={{
        title: {
          text: "Training Sessions",
        },
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
        <TrainingAnalyticsCard className="lg:col-span-1 shadow-md" />
        <UpcomingTrainingSessionsCard className="lg:col-span-1 shadow-md" />
        <TrainingSessionCalenderCard className=" col-span-1 lg:col-span-2 shadow-md" />
      </div>
    </PageLayout>
  );
};

export default TrainingSessionContainer;
