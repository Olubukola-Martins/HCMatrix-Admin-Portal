import { Button, Dropdown } from "antd";
import { TTrainingSessionBooking } from "lib/api/subscription/add-ons/training-session/bookings/get-booking";
import { AiOutlineMore } from "react-icons/ai";
import UpdateSessionBookingStatus from "./UpdateSessionBookingStatus";
import ViewTrainingSessionBooking from "./ViewTrainingSessionBooking";

export type TTrainingSessBookingAction =
  | "accept"
  | "reject"
  | "complete"
  | "view";
const TrainingSessionBookingActions: React.FC<{
  booking: Pick<TTrainingSessionBooking, "id" | "status">;
  trigger?: React.ReactNode;
  actions?: TTrainingSessBookingAction[];
}> = ({
  booking,
  trigger = <Button icon={<AiOutlineMore />} type="text" />,
  actions = ["accept", "reject", "complete", "view"],
}) => {
  return (
    <>
      <Dropdown
        menu={{
          items: [
            {
              key: "View",
              label: (
                <ViewTrainingSessionBooking
                  bookingId={booking.id}
                  trigger="View"
                />
              ),
              disabled: !actions.includes("view"),
            },

            {
              key: "Accept",
              label: (
                <UpdateSessionBookingStatus
                  booking={booking}
                  data={{ status: "accepted" }}
                  trigger="Accept"
                />
              ),
              disabled: !actions.includes("accept"),
            },
            {
              key: "Reject",
              label: (
                <UpdateSessionBookingStatus
                  booking={booking}
                  data={{ status: "rejected" }}
                  trigger="Reject"
                />
              ),
              disabled: !actions.includes("reject"),
            },
            {
              key: "Complete",
              label: (
                <UpdateSessionBookingStatus
                  booking={booking}
                  data={{ status: "completed" }}
                  trigger="Complete"
                />
              ),
              disabled: !actions.includes("complete"),
            },
          ].filter(
            (item) => item.disabled === false || item.disabled === undefined
          ),
        }}
      >
        {trigger}
      </Dropdown>
    </>
  );
};

export default TrainingSessionBookingActions;
