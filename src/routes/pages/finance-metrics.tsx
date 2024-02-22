import { canUserAccessComponent } from "lib/utils";
import { FinanceMetricsContainer } from "modules/finance-metrics";
import { appRoutePaths } from "routes";
import { TAppPageDataFnProps, TRoutePageData } from "routes/types";

export const financeMetricsPages = (
  props: TAppPageDataFnProps
): TRoutePageData[] => {
  const { userPermissions } = props;
  let routes: TRoutePageData[] = [];
  routes = [
    {
      element: <FinanceMetricsContainer />, //temporary until this is fleshed as per design
      path: appRoutePaths.home,
      title: "Home",
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
