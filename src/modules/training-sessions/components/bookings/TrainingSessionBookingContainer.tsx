import { PageLayout } from "components/layouts";
import TrainingSessionBookingTable from "./TrainingSessionBookingTable";

const TrainingSessionBookingContainer = () => {
  return (
    <PageLayout
      header={{
        title: {
          text: "Training Session Bookings",
        },
      }}
    >
      <TrainingSessionBookingTable />
    </PageLayout>
  );
};

export default TrainingSessionBookingContainer;
