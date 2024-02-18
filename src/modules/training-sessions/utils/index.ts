import { TBookingStatus } from "types";
import { TTrainingSessBookingAction } from "../components/bookings/TrainingSessionBookingActions";

export const generateTrainingSessionBookingActions = (
  status: TBookingStatus
): TTrainingSessBookingAction[] => {
  let actions: TTrainingSessBookingAction[] = ["view"];
  if (status === "accepted" || status === "rejected") {
    actions = ["view", "complete"];
  }
  if (status === "pending") {
    actions = ["view", "accept", "reject"];
  }
  if (status === "completed") {
    actions = ["view"];
  }
  return actions;
};
