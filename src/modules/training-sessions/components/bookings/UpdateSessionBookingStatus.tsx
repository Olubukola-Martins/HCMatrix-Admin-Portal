import { Button } from "antd";
import ConfirmAction from "components/generic/ConfirmAction";
import { QUERY_KEY_FOR_TRAINING_SESSION_BOOKINGS } from "lib/api/subscription/add-ons/training-session/bookings";
import { TTrainingSessionBooking } from "lib/api/subscription/add-ons/training-session/bookings/get-booking";
import {
  TUpdateTrainingSessionBookingInput,
  useUpdateTrainingSessionBooking,
} from "lib/api/subscription/add-ons/training-session/bookings/update-booking-status";
import { generateUpdateStatusDetails } from "lib/utils";

import React from "react";
import { useQueryClient } from "react-query";

const UpdateSessionBookingStatus: React.FC<{
  trigger?: React.ReactNode;
  booking: Pick<TTrainingSessionBooking, "id">;
  data: TUpdateTrainingSessionBookingInput["data"];
}> = ({
  trigger = <Button type="primary">Update Status</Button>,
  booking: { id },
  data,
}) => {
  const { mutate, isLoading } = useUpdateTrainingSessionBooking();
  const queryClient = useQueryClient();
  const { message, confirmText, title } = generateUpdateStatusDetails(
    data.status
  );
  return (
    <>
      <ConfirmAction
        trigger={trigger}
        message={message}
        title={title}
        handleConfirm={{
          text: confirmText,
          isLoading,
          fn: () =>
            mutate(
              { id, data },
              {
                onSuccess: () => {
                  queryClient.invalidateQueries([
                    QUERY_KEY_FOR_TRAINING_SESSION_BOOKINGS,
                  ]);
                },
              }
            ),
        }}
      />
    </>
  );
};

export default UpdateSessionBookingStatus;
