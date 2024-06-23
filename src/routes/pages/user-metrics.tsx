import { canUserAccessComponent } from "lib/utils";
import { UserMetricsContainer } from "modules/user-metrics/components/UserMetricsContainer";
import { appRoutePaths } from "routes/paths";
import { TAppPageDataFnProps, TRoutePageData } from "routes/types";

export const userMetricsPage = (props: TAppPageDataFnProps): TRoutePageData[] => {
  const { userPermissions } = props;
  let routes: TRoutePageData[] = [];
  routes = [
    {
      element: <UserMetricsContainer />, //temporary until this is fleshed as per design
      path: appRoutePaths.userMetrics,
      title: "User Metrics",
      hidden: !canUserAccessComponent({
        userPermissions,
        requiredPermissions: ["view-finance-metrics"],
      }),
    },
  ].map((item) => ({
    ...item,
    category: ["requires-authentication"],
  }));
  return routes;
};
