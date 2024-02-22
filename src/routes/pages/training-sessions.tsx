import { canUserAccessComponent } from "lib/utils";
import TrainingSessionContainer from "modules/training-sessions/components/TrainingSessionContainer";
import TrainingSessionBookingContainer from "modules/training-sessions/components/bookings/TrainingSessionBookingContainer";
import { appRoutePaths } from "routes";
import { TAppPageDataFnProps, TRoutePageData } from "routes/types";

export const trainingSessionPages = (
  props: TAppPageDataFnProps
): TRoutePageData[] => {
  const { userPermissions } = props;
  let routes: TRoutePageData[] = [];
  routes = [
    // training sessions
    {
      element: <TrainingSessionContainer />,
      path: appRoutePaths.trainingSessions,
      title: "Training Sessions",
      hidden: !canUserAccessComponent({
        userPermissions,
        requiredPermissions: ["view-training-sessions"],
      }),
    },
    {
      element: <TrainingSessionBookingContainer />,
      path: appRoutePaths.trainingSessionsBookings,
      title: "Training Session Bookings",
      hidden: !canUserAccessComponent({
        userPermissions,
        requiredPermissions: ["view-training-sessions"],
      }),
    },
    // training sessions
  ].map((item) => ({
    ...item,
    category: ["requires-authentication"],
  }));
  return routes;
};
