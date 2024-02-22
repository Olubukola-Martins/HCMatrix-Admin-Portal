import { TAppPageDataFnProps, TRoutePageData } from "routes/types";
import { authPages } from "./auth";
import { settingsPages } from "./settings";
import { trainingSessionPages } from "./training-sessions";
import { financeMetricsPages } from "./finance-metrics";
import { homePages } from "./home";
import { notFoundPages } from "./not-found";

export const appRoutePages = (props: TAppPageDataFnProps): TRoutePageData[] => {
  let routes: TRoutePageData[] = [];
  routes = [
    ...authPages(),
    ...homePages(),
    ...settingsPages(props),
    ...trainingSessionPages(props),
    ...financeMetricsPages(props),
    ...notFoundPages(),
  ];
  return routes.filter(
    (item) => item?.hidden === false || item.hidden === undefined
  );
};
